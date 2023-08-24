const mongoose = require('mongoose');

//Mongoose scheema
const travelProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    travelDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    images : [{
        type: String
    }],
    country: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryOrder',
        required: true
    },
    countTravelers: {
        type: Number,
        required: true,
        min: 0,
        max: 16
    },
    ratingDestination: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

exports.Destination = mongoose.model('Destination', travelProductSchema);