const {Author} = require("../models/chat.model");

module.exports.createAuthor = (request, response) =>{
    const {name} = request.body
    Author.create({name})
    .then(author => response.json(author))
    .catch(err=> {
        console.log('Error adding to database', err)
        response.status(400).json(err)
    })
}


module.exports.deleteAuthor = (request, response) =>{
    Author.deleteOne()
    .then(resp => response.json(resp))
    .catch(err => console.log('Error deleting from database', err))
}


module.exports.updateAuthor = (request, response) =>{
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
    .then(author => response.json(author))
    .catch(err => {
        console.log('Error updating from database', err)
        response.status(400).json(err)
    })
}


module.exports.getAllAuthors = (request, response) =>{
    Author.find().sort({name:1})
    .then(authors => response.json(authors))
    .catch(err => console.log('Error getting all from database', err))
}
module.exports.getOneAuthor = (request, response) =>{
    Author.findOne({_id: request.params.id})
    .then(author => response.json(author))
    .catch(err => console.log('Error getting one author from database', err))
}