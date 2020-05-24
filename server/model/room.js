const mongoose = require('mongoose');
const PlayerSchema = require('./player');
const RestaurantSchema = require('./restaurant');

const RoomSchema = new mongoose.Schema({
    players: [PlayerSchema],
    restaurants: [RestaurantSchema],
    currentRound: Number,
    lastRound: Number,
    option1: RestaurantSchema,
    option2: RestaurantSchema,
    winner: RestaurantSchema,
    state: String
});

module.exports = RoomSchema;