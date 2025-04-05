/*
Comments api Rotes in RESTful manner
GET /comments - will list all the comments
POST /comments - to create a new comments
GET /comments/:id - to get unique comment
PATCH /comments/:id - to update a unique comment
DELETE /comments/:id - to delete a unique comment
*/

const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
uuid()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

let comments = [
    {
        id: uuid(),
        username: "prasad",
        comment: "Hello"
    },
    {
        id: uuid(),
        username: "Kapirath",
        comment: "bye"
    },
    {
        id: uuid(),
        username: "Pratik",
        comment: "Bsdk"
    },
    {
        id: uuid(),
        username: "Ishan",
        comment: "lol"
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    console.log(req.body);
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments')
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.editedComment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
    // res.send('updating');
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log("connected on port number 3000")
});