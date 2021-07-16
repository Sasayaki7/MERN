const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

const Routes = require('./server/routes/person.routes'); //require('./server/routes/person.routes')(app) is also valid
Routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );