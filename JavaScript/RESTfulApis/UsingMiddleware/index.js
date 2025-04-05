const express = require('express');
const app = express();

// Use express.urlencoded() to parse form data
app.use(express.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/tacos', (req, res) => {
    const { name, qty } = req.body;
    res.send(`Here are your ${qty} ${name} tacos`);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Connected to port number 3000');
});
