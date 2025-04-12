const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/farm');

const productSchema = new Schema({
    name: String,
    price: Number
})
const Product = mongoose.model('Product', productSchema);

const farmSchema = new Schema({
    name: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

})
const Farm = mongoose.model('Farm', farmSchema);

const makeProduct = async () => {
    const newProduct = new Product({
        name: "Pinapple",
        price: 40
    })
    await newProduct.save();
}
makeProduct();

const makefarm = async () => {
    const gotProduct = await Product.findOne({ name: "Mango" });
    // console.log(gotProduct)
    const newFarm = new Farm({
        name: "Kakade Farms",
    })
    newFarm.products = gotProduct;
    await newFarm.save();
    console.log(newFarm)
}
makefarm();