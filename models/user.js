//MODEL
const mongoose = require('mongoose');

//Mongoose scheema
const travelUserSchema = mongoose.Schema({
    name: String,
    image: String,
    countTravelers: {
        type: Number,
        required: true
    }
});

exports.User = mongoose.model('User', travelUserSchema);