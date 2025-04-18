const express = require('express');
const app = express();
const db = require('./db')
const Model = require('./model');
const cors = require('cors');

const http = require("http")
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin : "http://localhost:5173",
        methods : ["get", "post"]
    }
})
io.on("connection", async (socket) => {
    console.log("New connection:", socket.id);
    const users = await Model.find({});
    socket.emit("sentData", users);
  });

app.use(express.urlencoded({extended : true}));
app.use(express.json())
app.use(cors())

app.get('/', async(req, res) => {
    const users = await Model.find({});
    io.emit("sentData", users)
    res.send(users);
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/', async (req, res) => {
    const data = req.body;
    const newUser = await new Model(data);
    await newUser.save();
    io.emit("addedUser", newUser)
    res.send(newUser);
})

server.listen(3000, () => {
    console.log("the backend is runnning");
})