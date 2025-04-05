const express = require('express');
const app = express();
const Item = require('./item');
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(3000, () => {
    console.log("connected to port");
});

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/postItem', async (req, res) => {
    const data = req.body;
    const newItem = new Item(data);
    await newItem.save();
})