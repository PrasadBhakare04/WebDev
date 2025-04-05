const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({
    name:'session',
    secret: 'thisshouldbesecret',
    resave: false,
    saveUninitialized: true
}));

app.get('/',(req, res) => {
    req.session.user = "this is a session";
    res.json({message : "welcome to the sesssion tutorial"});
    console.log(req.session.user)
})


app.listen(3000, ()=> {
    console.log("Server is up on port 3000");
})