const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: {type: String},
    price: {type: Number},
    description: {type: String}
}, {timestamps: true})

module.exports.Product = mongoose.model("Product", ProductSchema);