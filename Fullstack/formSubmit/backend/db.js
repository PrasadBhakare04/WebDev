const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fullstack');
const db = mongoose.connection;

module.exports = db