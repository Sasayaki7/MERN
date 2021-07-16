const ProductController = require('../controllers/products.controller');

module.exports = app => {
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/', ProductController.getAll);
}