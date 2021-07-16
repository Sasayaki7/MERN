const express = require('express');
const cors = require('cors');
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({extended:true}));

require('./server/config/mongoose.config');


const Route = require('./server/routes/products.route');
Route(app);

app.listen(port, () => console.log(`Listening on port ${port}`))