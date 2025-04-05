const express = require('express');
const app = express();
// app.use((req, res) => {
//     console.log('We get a new request');
//     res.send('<h1>We got your request</h1>');
// });

app.listen(8080, () => {
    console.log('Listening on port 8080');
});

app.get('/', (req, res) => {
    res.send('Home !!!');
});

// app.get('/cats', (req, res) => {
//     res.send('Meow');
// });

// app.get('/dog', (req, res) => {
//     res.send('Woof');
// });

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`This is the ${subreddit}`);
});

app.get('/r/:subreddit/:postid', (req, res) => {
    const { subreddit, postid } = req.params;
    res.send(`This is the ${subreddit} and Post ID : ${postid}`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Query is ${q}`);
});

app.get('*', (req, res) => {
    res.send('Dont know that path');
});
