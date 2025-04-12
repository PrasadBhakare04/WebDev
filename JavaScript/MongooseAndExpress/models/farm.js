const mongoose = require('mongoose');
const Product = require('./product');
const farmSchema = new mongoose.Schema({
    title: String,
    city: String,
    email: String,
    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    ]
})

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        await Product.deleteMany({ _id: { $in: farm.products } })
    }
})

const Farm = mongoose.model('Farm', farmSchema);
module.exports = Farm;