const mongoose = require('mongoose');
const randomSchema = new mongoose.Schema({
    text: String,
})
const Random = mongoose.model('Random', randomSchema);
module.exports = Random;    