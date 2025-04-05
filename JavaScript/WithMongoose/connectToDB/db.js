const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
const db = mongoose.connection;
db.on('connected', () => {
    console.log("connected");
})
db.on('error', (err) => {
    console.log("Some error occurred");
})

const movieSchema = mongoose.Schema({
    title: String,
    rating: Number,
    date: String
});

const Movie = mongoose.model('Movie', movieSchema);
const movie1 = new Movie({ title: "Hello", rating: 4.5, date: '25/02/2004' });