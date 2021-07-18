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
    .then(allProducts => response.json(allProducts))
    .catch(err => response.json(err))
}


module.exports.getProduct = (request, response) =>{
    Product.findOne({_id: request.params.id})
    .then(product => response.json(product))
    .catch(err=> response.json(err))
}


module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(product => response.json(product))
    .catch(err=> response.json(err))
}


module.exports.deleteProduct = (request, response) =>{
    Product.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}