const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practice');
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Mongo connected')
});

const modelSchema = new mongoose.Schema({
    name: String,
    addresses: [
        {
            state: String,
            city: String,
            pincode: Number,

        }
    ]
});

const Model = mongoose.model('Model', modelSchema);

const makeuser = async () => {
    const newUser = new Model({
        name: "Prasad",
    })
    newUser.addresses.push({
        state: "Maharashtra",
        city: "Pune",
        pincode: 411041,
    })
    await newUser.save();
}

const addNew = async (id) => {
    console.log(id);
    const foundUser = await Model.findById(id);
    foundUser.addresses.push({
        state: "Maharashtra",
        city: "Ahilyanagar",
        pincode: 414002
    })
    foundUser.save();
}
addNew('67a748f02538ac4048c515bb');