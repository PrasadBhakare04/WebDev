const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/practice'
mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on('connected', () => {
    console.log('connected to the database');
});
db.on('error', () => {
    console.log('An database error occurred');
});
db.on('disconnected', () => {
    console.log('db disconnected');
});

module.exports = db;
