const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('connected')
    })
    .catch((err) => {
        console.log(err);
        console.log("Some error occured")
    })

const productSchema = new mongoose.Schema({
    first: String,
    last: String
});
productSchema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})
const Product = new mongoose.model('Product', productSchema);
const p1 = new Product({ first: "Prasad", last: "Bhakare" });
p1.save();
productSchema.virtual('fullname').get(function () {
    return `${this.first} ${this.last}`
})