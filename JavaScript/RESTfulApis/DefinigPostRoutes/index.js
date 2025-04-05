const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('You are connected to port 3000');
})

app.get('/', (req, res) => {
    res.send("Welcome to hotel");
})

app.get('/tacos', (req, res) => {
    res.send("get /tacos route")
})

app.post('/tacos', (req, res) => {
    res.send("post /tacos route")
})