const express = require('express');
const app = express();
const Message = require('./messages')
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin : "http://localhost:5173",
        methods : ["GET", "POST"]
    }
})

app.use(cors());
io.on('connection', async (socket) => {
    const history = await Message.find();
    io.emit('history', history);
    socket.on('sendMessage', async (data) => {
        const newMessage = await new Message({text : data.msg});
        await newMessage.save()
        io.emit('receiveMessage', data.msg)
    })
})

app.get('/', (req, res) => {
    res.send("request at get api")
});

server.listen(3000, () => {
    console.log("server connected")
})