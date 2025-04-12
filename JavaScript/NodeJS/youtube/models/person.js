const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//define person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//Hashing the password
personSchema.pre('save', async function (next) {
    const person = this;

    if (!person.isModified(password)) {
        return next()
    }
    //Generating salt and hashing the password
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await hash(person.password, salt);
        person.password = hashedPassword;
    } catch (error) {
        return next();
    }
})

//Comparing password entered with the stored one
personSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (err) {
        throw err;
    }

}
//Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;