const AuthorControllers = require('../controllers/authors.controller')


module.exports = app =>{
    app.get('/api/authors', AuthorControllers.getAllAuthors),
    app.get('/api/authors/:id', AuthorControllers.getOneAuthor),
    app.post('/api/authors/new', AuthorControllers.createAuthor),
    app.put('/api/authors/:id', AuthorControllers.updateAuthor),
    app.delete('/api/authors/:id', AuthorControllers.deleteAuthor)
}