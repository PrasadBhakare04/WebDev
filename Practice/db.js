const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Prasad');
const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected');
});

db.on('error', (err) => {
    console.log('error occurred', err);
});

db.on('disconnected', () => {
    console.log("Disconnected");
});

module.exports = db;