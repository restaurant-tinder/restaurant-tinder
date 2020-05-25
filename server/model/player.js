const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    _id: String,
    state: String
});

module.exports = PlayerSchema;