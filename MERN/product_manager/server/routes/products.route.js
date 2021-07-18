const ProductController = require('../controllers/products.controller');

module.exports = app => {
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products/', ProductController.getAll);
    app.get('/api/products/:id', ProductController.getProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}