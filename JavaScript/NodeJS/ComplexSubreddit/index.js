const express = require('express');
const app = express();
const redditData = require('./data.json');
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.send('This is the home page')
});
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit.ejs', { ...data });//spreaded the data
    }
    else {
        res.render('cannotFind.ejs', { subreddit });
    }
})