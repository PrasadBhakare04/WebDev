const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Joi = require('joi');
const app = express();
const db = require('./db');
const random = require('./models/random');
const { randomSchema } = require('./validateSchema.js');
const flash = require('connect-flash');
const session = require('express-session');

app.use(session({ secret: 'thisisnotagoodsecret' }))
app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(flash())

app.get('/home', (req, res) => {
    res.render('home', { messages: req.flash('success') });
});

const validateSchema = function (req, res, next) {
    const { error } = randomSchema.validate(req.body);
    if (error) {
        console.log("All things are required");
        res.send("fill the texxt area")
    }
    else {
        next();
    }
}
app.post('/home/post', validateSchema, async (req, res) => {
    const newRandom = new random(req.body.random);
    // console.log(newRandom);
    await newRandom.save();
    req.flash('success', 'Successfully sent a text')
    res.redirect('/home')

})

app.listen(3000, () => {
    console.log('connected on port 3000');
})