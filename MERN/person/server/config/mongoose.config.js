const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=> console.log('Database connection established'))
.catch(err=>console.log('An error occurred', err))