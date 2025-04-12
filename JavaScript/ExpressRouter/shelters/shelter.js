const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionOptions = { secret: 'thisisnotagreatesecret', resave: false, saveUninitialized: false }

router.use(session(sessionOptions));
router.use(cookieParser());
router.get('/view', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }
    res.send(`You have visited ${req.session.count} times`)
})

router.get('/new', (req, res) => {
    res.cookie('name', 'Prasad')
    res.send("Add new Shelter")

})

module.exports = router;