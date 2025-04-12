const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoURL = process.env.MONGOURL;
//to connect the db
mongoose.connect(mongoURL);

//the default object managed by mongoose responsible for the connection
//This is used to handle events and interact with the database
const db = mongoose.connection;

//Event listener to know that connection is established or not
db.on('connected', () => {
    console.log("connected to database");
});
db.on('error', () => {
    console.log("error occured");
});
db.on('disconnected', () => {
    console.log("disconnected from database");
});

//Export the database connection
module.exports = db;