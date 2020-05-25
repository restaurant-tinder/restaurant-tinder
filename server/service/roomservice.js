const RoomSchema = require('../model/room');
const PlayerSchema = require('../model/player');
const RestaurantSchema = require('../model/restaurant');
const mongoose = require('mongoose');
const axios = require('axios').default;
const Flatted = require('flatted');
require('dotenv').config();

class RoomService {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/rtdb', { useNewUrlParser: true });

        this.Restaurant = mongoose.model('Restaurant', RestaurantSchema);
        this.Room = mongoose.model('Room', RoomSchema);
        this.Player = mongoose.model('Player', PlayerSchema);
    }

    createRoom(completion) {
        const room = new this.Room ({
            players: [],
            restaurants: [],
            currentRound: 1,
            lastRound: 1,
            option1: {},
            option2: {},
            state: "WAITING"
        });

        room.save((error) => {
            console.log(error);

            let response = {
                id: room._id
            }
            completion(response);
        });
    }

    getRestaurants(roomId, term, location, completion) {
        this.Room.findById(roomId, (err, room) => {
            const headers = {
                'Authorization': 'Bearer ' + process.env.YELP_API_KEY
            }   

            const parameters = {
                term: term,
                location: location
            }

            axios.get('https://api.yelp.com/v3/businesses/search', {
                params: parameters,
                headers: headers
            })
            .then((response) => {
                let data = Flatted.parse(Flatted.stringify(response.data));
                var restaurants = data.businesses.map((obj) => {
                    let location = Flatted.parse(Flatted.stringify(obj.location));
                    return {
                        name: obj.name,
                        rating: obj.rating,
                        reviewsCount: obj.review_count,
                        priceRange: obj.price,
                        imageLink: obj.image_url,
                        address: location.address1,
                        city: location.city,
                        state: location.state,
                        zip: location.zip_code,
                        votes: 0
                    }
                })

                this.buildRoom(room, restaurants);
                room.save();
                completion(room);
            })
            .catch((error) => {
                console.log(error);
            })
        })
    }

    buildRoom(room, restaurants) {
        room.state = 'STARTED';
                
        var index = Math.floor(Math.random() * restaurants.length);
        room.option1 = restaurants[index];
        restaurants.splice(index, 1);

        if (restaurants.length == 0) {
            room.state = 'FINISHED';
            room.winner = room.option1;
            return;
        }

        index = Math.floor(Math.random() * restaurants.length);
        room.option2 = restaurants[index]
        restaurants.splice(index, 1);

        room.restaurants = restaurants;

        var rounds = Math.min(room.players.length, restaurants.length);
        rounds = Math.min(6, rounds);
        room.lastRound = rounds > 0 ? rounds : 1;
    }
}

module.exports = RoomService;