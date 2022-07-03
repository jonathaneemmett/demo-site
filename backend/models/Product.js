const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const Schema = mongoose.Schema;

// Create model
const productSchema = new Schema({
    isActive: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    tags: [{
        type: String
    }]
}, { timestamps: true });

// Export Model
module.exports = mongoose.model('Product', productSchema);
