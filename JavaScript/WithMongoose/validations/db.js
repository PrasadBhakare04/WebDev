const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("Error")
    })
const db = mongoose.connection;


const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model("Item", itemSchema);
// const item1 = new Item({
//     name: "Helmet",
//     price: 3000
// });

// item1.save()
//     .then((data) => {
//         console.log("Saved");
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("Error");
//         console.log(err)
//     })

itemSchema.methods.gate = function () {
    console.log("Hello ! Hi ! Howdy !");
}

const findProduct = async function () {
    const foundProduct = await Item.findOne({ name: "Bike" });
    foundProduct.gate();
}

findProduct();