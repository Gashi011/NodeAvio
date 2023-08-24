//MODEL
const mongoose = require('mongoose');

//Mongoose scheema
const travelOrderSchema = mongoose.Schema({

});

exports.TravelOrder = mongoose.model('TravelOrder', travelOrderSchema);