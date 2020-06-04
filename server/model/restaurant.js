const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    reviewsCount: Number,
    priceRange: String,
    imageLink: String,
    url: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    votes: Number
});

module.exports = RestaurantSchema;