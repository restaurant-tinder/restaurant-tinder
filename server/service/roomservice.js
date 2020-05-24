const RoomSchema = require('../model/room');
const PlayerSchema = require('../model/player');
const RestaurantSchema = require('../model/restaurant');
const mongoose = require('mongoose');
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
        this.Room.findById(roomId, (error, room) => {
            room.state = "STARTED";

            // TODO: - Call Yelp API for businesses with term and location
            // Parse businesses into restaurants schema and update restaurants in room object
            // Create algorithm to determine # of rounds based on # of businesses and players
            // Randomly select 2 businesses for option1 and option2 and remove from restaurants array
            // Save into mongodb
        })
    }
}

module.exports = RoomService;