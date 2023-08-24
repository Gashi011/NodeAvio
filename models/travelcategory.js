//MODEL
const mongoose = require('mongoose');

//Mongoose scheema
const travelCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String
    }
});

exports.CategoryOrder = mongoose.model('CategoryOrder', travelCategorySchema);