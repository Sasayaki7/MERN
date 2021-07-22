const express = require('express');
const cors = require('cors');
const port = 8000;

const app = express();
app.use(cors());

const chatLog = []; 
const server= app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket=>{
    console.log(socket.id, "nice to meet you.");

    socket.emit("Welcome", `Welcome, your id is ${socket.id}`);
    socket.emit("chatlog", chatLog);
    socket.on("join", data=>{
        let newChat =  {user: '$SYSTEM$GENERATED$MESSAGE$', text: `${data} has joined the chat`}
        io.emit('chat', newChat)
        chatLog.push(newChat)
    })
    socket.on('chatClient', data=>{
        console.log('chat received')
        io.emit('chat', data)
        chatLog.push(data)
    })
});