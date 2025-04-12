const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.listen(3000, () => {
    console.log('Started listening');
});
// app.get('/', (req, res) => {
//     res.send('we got the request');
// });
// app.get('/r/:subreddit', (req, res) => {
//     const { subreddit } = req.params;
//     res.send('This is the subreddit page');
// });
app.get('/', (req, res) => {
    res.render('homepage');
})