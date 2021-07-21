const { Player } = require("../models/players.model");

module.exports.createPlayer = (request, response) =>{
    const {name, position, status} = request.body
    Player.create({
        name, position,status
    })
    .then(product => response.json(product))
    .catch(err => response.status(400).json(err))
}


module.exports.getAll = (request, response) =>{
    Player.find()
    .then(allPlayers => response.json(allPlayers))
    .catch(err => response.json(err))
}


module.exports.getPlayer = (request, response) =>{
    Player.findOne({_id: request.params.id})
    .then(player => response.json(player))
    .catch(err=> response.json(err))
}


module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(player => response.json(player))
    .catch(err=> response.status(400).json(err))
}


module.exports.updatePlayerStatus = (request, response) => {
    const {game, status} = request.body
    Player.findOneAndUpdate({"_id": request.params.id, "status.id": game},
    {$set: {'status.$.activity': status}}, {new:true})
    .then(player => response.json(player))
    .catch(err=> response.json(err))
}


module.exports.deletePlayer = (request, response) =>{
    Player.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}