const express = require('express');
const cors = require('cors');
const port = 8000;

const app = express();
app.use(cors());


const server= app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket=>{
    console.log(socket.id, "nice to meet you.");
    socket.emit("Welcome", `Welcome, your id is ${socket.id}`);
});