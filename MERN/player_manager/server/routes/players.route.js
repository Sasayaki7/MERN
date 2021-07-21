const PlayerController = require('../controllers/players.controller');

module.exports = app => {
    app.post('/api/players/new', PlayerController.createPlayer);
    app.get('/api/players/', PlayerController.getAll);
    app.get('/api/players/:id', PlayerController.getPlayer);
    app.put('/api/players/:id', PlayerController.updatePlayer);
    app.put('/api/players/:id/status', PlayerController.updatePlayerStatus);
    app.delete('/api/players/:id', PlayerController.deletePlayer);
}