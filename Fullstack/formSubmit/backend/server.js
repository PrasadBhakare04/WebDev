const bodyParser = require("body-parser");
const cors = require("cors")
const express = require("express");
const app = express();
const db = require('./db');
const User = require('./models/user')


app.use(bodyParser.json({extended : true}));
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("This is the homepage")
})

app.post('/', async(req, res) => {
    console.log(req.body);
    const newUser = await new User(req.body);
    await newUser.save();
    res.send("Submitted the form data")
})

app.listen(3000, () => {
    console.log("the server is running on port 3000");
})