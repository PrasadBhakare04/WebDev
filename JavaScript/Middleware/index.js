const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    console.log('This is the first middleware');
    next()
    //This is not recommended
    // console.log('This is the request after next')
});

//This is used to set middleware for a specific api
app.use('/dogs', (req, res, next) => {
    console.log('This middleware is for dogs api');
    next();
})

app.use((req, res, next) => {
    console.log("This is the second middleware");
    next()
});

app.use((req, res, next) => {
    console.log("This is the third middleware");
    next()
});

app.use((req, res, next) => {
    console.log(req.query);
    next()
})

app.get('/', (req, res) => {
    res.send('hello world')
});
app.get('/dogs', (req, res) => {
    res.send('woof woof')
});


//This middleware runs after checking all the routes if none of them matches
//that's why we are using res.send to end the execution
app.use((req, res, next) => {
    res.send('Error route not found')
})

app.listen(3000, () => {
    console.log('Server is up')
});