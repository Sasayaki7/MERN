const { Product } = require("../models/products.model");

module.exports.createProduct = (request, response) =>{
    const {title, price, description} = request.body
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(err => response.json(err))
}


module.exports.getAll = (request, response) =>{
    Product.find()
    .then(allProducts => response.json({products: allProducts}))
    .catch(err => response.json(err))
}


