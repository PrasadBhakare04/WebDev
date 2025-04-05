const express = require('express');
const router = express.Router();
const item = require('./../models/menu');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new item(data);

        const response = await newItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log('error');
        res.status(500).json({ error: "internal error occurred" });
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await menu.find();
        console.log("data fetched");
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: "Internal error occurred" })
    }
})

module.exports = router;