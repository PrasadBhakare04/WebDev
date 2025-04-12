const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'Public')));
app.listen(3000, () => {
    console.log('listening on port 3000');
})

app.get('/', (req, res) => {
    // res.send('Hello');
    res.render('home.ejs');
})
app.get('/random', (req, res) => {
    let num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { num });
})

app.get('/cats', (req, res) => {
    const cats = ['monty', 'blue', 'milo', 'kitty']
    res.render('cats', { cats });
});
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})
