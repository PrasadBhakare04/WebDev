const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        //save the new Person
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log('error');
        return res.status(500).json({ error: "internal error occurred" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err);
        console.log('Error Occurred');
    }
});

router.get('/:workType', async (req, res) => {
    const workType = req.params.workType; //what is the workType parameter passed by the user
    try {
        if (workType == "chef" || workType == "manager" || workType == "waiter") {
            const response = await Person.find({ work: workType });
            console.log('data fetched');
            res.status(200).json(response)
        } else {
            return res.status(404).json({ error: "Invalid Work type" })
        }
    } catch (err) {
        return res.status(500).json({ error: "Internal error" })
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const data = req.body;
        const response = await Person.findByIdAndUpdate(personId, data, {
            new: true,
            runValidators: true,
        });

        if (!response) {
            return res.status(404).json({ error: 'Cannot find person' })
        }

        console.log('Updated successfully');
        res.status(200).json(response)

    } catch (error) {
        console.log('An error occurred');
        return res.status(400).json({ error: 'an error occurred' })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)

        if (!response) {
            return res.status(404).json({ error: 'Person not found' })
        }

        console.log('successfully deleted the data');
        res.status(200).json({ state: 'deleted successfully' })

    } catch (error) {
        console.log('an error occurred');
        return res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router;