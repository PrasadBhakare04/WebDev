const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp');
const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected");
});
db.on('error', (err) => {
    console.log("Some error occurred");
});

const movieSchema = mongoose.Schema({
    title: String,
    rating: Number,
    date: String
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    { title: "Shaktiman", rating: 5, date: '25/09/2004' },
    { title: "Adipurush", rating: 5, date: '08/09/1995' }
])
    .then((data) => {
        console.log('inserted');
        // console.log(data);
    })
    .catch((err) => {
        console.log("some error occurred");
        console.log(err);
    })

Movie.find()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log("some error occured");
        console.log(err);
    })