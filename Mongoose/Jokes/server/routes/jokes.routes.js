const JokesController = require('../controllers/jokes.controllers');

module.exports = app=> {
    app.get('/api/jokes', JokesController.getAllJokes);
    app.get('/api/jokes/:id', JokesController.getOneJoke);
    app.put('/api/jokes/:id', JokesController.updateJoke);
    app.post('/api/jokes', JokesController.makeNewJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}

