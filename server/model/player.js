const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    state: String
});

module.exports = PlayerSchema;