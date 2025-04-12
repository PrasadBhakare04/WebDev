const express = require('express');
const app = express();
const db = require('./db');
const passport = require('./auth');
//middle ware converts any type of user data into required format(javascript object) and make it available in req.body 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const session = require('express-session');

app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: false,
}));


const { error } = require('console');

app.use(passport.initialize());
const authMiddleware = passport.authenticate('local', { session: false });

app.listen(3000, function () {
    console.log('Server is running on port 3000')
});
app.get('/', (req, res) => {
    res.send("Welcome to my Hotel")
});

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu', menuRoutes);