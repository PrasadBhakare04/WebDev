const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    console.log("get route");
    res.send("get route")
})


app.listen(3000)