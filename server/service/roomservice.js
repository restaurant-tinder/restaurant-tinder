const RoomSchema = require('../model/room');
const PlayerSchema = require('../model/player');
const RestaurantSchema = require('../model/restaurant');
const mongoose = require('mongoose');
const axios = require('axios').default;
const Flatted = require('flatted');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

class RoomService {
    constructor() {
        mongoose.connect(
            'mongodb+srv://kormanchen:test123@cluster0-fbctd.mongodb.net/rtdb',
            { useNewUrlParser: true }
        );

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
                        url: obj.url,
                        address: location.address1,
                        city: location.city,
                        state: location.state,
                        zip: location.zip_code,
                        votes: 0
                    }
                })

                if (restaurants.length > 1 && restaurants.length < 4) {
                    this.buildRoom(room, restaurants.slice(0,2));
                } else if (restaurants.length < 8) {
                    this.buildRoom(room, restaurants.slice(0,4));
                } else if (restaurants.length < 16) {
                    this.buildRoom(room, restaurants.slice(0,8));
                } else {
                    this.buildRoom(room, restaurants.slice(0,16));
                }
                room.save();
                completion(room);
            })
            .catch((error) => {
                console.log(error);
            })
        })
    }

    joinRoom(roomId, completion) {
        this.Room.findById(roomId, (err, room) => {
            if (room.state == 'WAITING') {
                let player = {
                    _id: uuidv4(),
                    state: 'READY'
                }
                room.players.push(player);
                room.save();
                completion(player);
            }
            else {
                let error = {
                    message: 'Unable to join because the room has already started or ended'
                }
                completion(error)
            }
        })
    }

    vote(roomId, playerId, restaurantId, voteHandler, roundCompletion) {
        this.Room.findById(roomId, (err, room) => {
            let player = room.players.find(player => player._id == playerId);
            player.state = 'VOTED';

            let choice = room.option1._id == restaurantId ? room.option1 : room.option2;
            choice.votes += 1;
            if (this.isNextRoundReady(room)) {
                console.log('Round: ' + room.currentRound + '/' + room.lastRound);
                console.log(room.option1);
                console.log(room.option2);
                console.log(room.winner);
                roundCompletion(room);
            }
            voteHandler(player);
            room.save();
        })
    }

    isNextRoundReady(room) {
        for (let i = 0; i < room.players.length; i++) {
            if (room.players[i].state == 'READY') {
                return false;
            }
        }

        for (let i = 0; i < room.players.length; i++) {
            room.players[i].state = 'READY';
        }

        if (room.option1.votes == room.option2.votes) {
            let options = [room.option1, room.option2]
            room.option1 = options[Math.floor(Math.random() * options.length)];
        }
        else {
            room.option1 = room.option1.votes > room.option2.votes ? room.option1 : room.option2;
        }

        room.option1.votes = 0;

        if (room.currentRound == room.lastRound) {
            room.winner = room.option1;
            room.state = 'FINISHED';
            return true;
        }

        console.log('======BEFORE CALCULATION======');
        console.log(room.option1);
        console.log(room.option2);

        var restaurants = room.restaurants;
        let index = Math.floor(Math.random() * restaurants.length);
        room.option2 = restaurants[index];
        restaurants.splice(index, 1);
        room.restaurants = restaurants;
        room.currentRound += 1;

        console.log('======AFTER CALCULATION======');
        console.log(room.option1);
        console.log(room.option2);
        return true;
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

        var rounds = Math.min(6, restaurants.length);
        rounds = Math.max(5, room.players.length > 10 ? 10 : room.players.length);
        room.lastRound = rounds > 0 ? rounds : 1;
    }
}

module.exports = RoomService;