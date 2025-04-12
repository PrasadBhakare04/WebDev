const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('./models/user')
mongoose.connect('mongodb://localhost:27017/authDemo');
const db = mongoose.connection;
db.once('open', () => {
    console.log('Mongo connected')
})
db.on('error', () => {
    console.log('mongo error')
})

app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'thisisnotagoodsecret', resave: true, saveUninitialized: true }))

app.get('/secrete', (req, res) => {
    if (!req.session.user) {
        res.send('not logged in')
    }
    else {
        res.render('secrete')
    }
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/', (req, res) => {
    res.send('This is the homepage');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findOne({ username });
    if (await bcrypt.compare(password, foundUser.password)) {
        req.session.user = foundUser._id;
        res.send('successfully logged in')
    }
    else {
        res.send('incorrect password please try again');
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/secrete')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    req.session.user = newUser._id;
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Connected');
})