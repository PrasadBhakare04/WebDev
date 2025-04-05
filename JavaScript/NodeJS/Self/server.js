const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const item = require('./models/item');


app.listen(3000, () => {
    console.log('The server started');
});
app.get('/', (req, res) => {
    res.send("server started")
});
app.post('/item', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new item(data);
        const response = await newItem.save();
        res.status(200).json(response);
    } catch (err) {
        console.log('error');
        res.status(400).json({
            error: "Internal error Occurred"
        })
    }
});

app.get('/item', async (req, res) => {
    try {
        const data = await item.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        res.status(404).json({ error: "Error 404 Not found" });
    }
})