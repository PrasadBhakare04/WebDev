const mongoose = require('mongoose');
const modelSchema = new mongoose.Schema({
    name : {
        type: String,
    },
    phone : Number
});
const Model = new mongoose.model("Model", modelSchema);
module.exports = Model;