const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/messages');
const messageSchema = new mongoose.Schema({
    text : String
})

const Message = new mongoose.model("Message", messageSchema);
module.exports=Message;