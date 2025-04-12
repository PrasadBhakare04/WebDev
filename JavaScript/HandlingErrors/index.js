const express = require('express');
const app = express();
const AppError = require('./AppError')

const authorization = function (req, res, next) {
    const { password } = req.query;
    if (password == "Hello") {
        next();
    }
    else {
        // res.send("You cannot access it due to wrong password")
        throw new AppError(401, "Error rukjrkjbkjr")
    }

}
app.get('/cats', authorization, (req, res) => {
    res.send('Meow Meow')
})

app.get('/dogs', (req, res) => {
    res.send("Wooof Woof")
})

app.get('/error', (req, res) => {
    chicken.fly();
})

// app.use((err, req, res, next) => {
//     // console.log('**************************************************')
//     // console.log('********************Error*********************')
//     // console.log('**************************************************')
//     // next();
// })

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
    // next();
})

app.listen(3000, () => {
    console.log("Server Connected")
})