const Jokes = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err=> res.json({message: 'An error occurred', error: err}));
}


module.exports.getOneJoke = (req, res) =>{
    Jokes.findOne({_id: req.params.id})
        .then(joke => res.json({joke: joke}))
        .catch(err=> res.json({message: 'An error occurred', error: err}));
}


module.exports.makeNewJoke = (req, res) =>{
    Jokes.create(req.body)
    .then(newJoke => res.json({joke: newJoke}))
    .catch(err=> res.json({message: 'An error occurred', error: err}));
}



module.exports.updateJoke = (req, res) => {
    Jokes.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedJoke => res.json({joke: updatedJoke}))
    .catch(err=> res.json({message: 'An error occurred', error: err}));
}


module.exports.deleteJoke = (req, res) =>{
    Jokes.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err=> res.json({message: 'An error occurred', error: err}));
}