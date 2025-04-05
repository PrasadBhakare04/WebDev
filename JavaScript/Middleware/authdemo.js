const express = require('express');
const app = express();


const verifyPassword = function (req, res, next) {
    const { password } = req.query;
    if (password === 'secretkey') {
        next()
    }
    else {
        res.send('you need a correct password')
    }
}

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Welcome back chief')
});

app.listen(3000, () => {
    console.log("Server is up")
})