const express = require('express');
const app = express();
const shelterRoute = require('./shelters/shelter');
const cookieParser = require('cookie-parser');

app.use('/shelter', shelterRoute);


app.listen(3000, () => {
    console.log("Connected on port 3000")
})