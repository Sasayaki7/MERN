const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(() =>  console.log('Successfully connected'))
.catch(err => console.log('An error occurred', err))