const express = require('express');
const passport = require('passport');
const Person = require('./models/person');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const user = await Person.findOne({ username: username });
        if (!user) {
            return done(null, false, { message: "usename not found" })
        }
        const passwordMatch = user.comparePassword(password);
        if (passwordMatch) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: "invalid password" })
        }
    } catch (err) {
        return done(err);
    }
}));

module.exports = passport;