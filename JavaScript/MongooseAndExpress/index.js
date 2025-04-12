const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');
const categories = ['fruit', 'vegetable', 'dairy'];
const AppError = require('./AppError');
const Farm = require('./models/farm');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo connected')
    })
    .catch((err) => {
        console.log(err);
        console.log("Mongo Error")
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/farms/index', async (req, res) => {
    const farms = await Farm.find();
    res.render('farms/index', { farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})

app.post('/farms', async (req, res) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.redirect('/farms/index');
})

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category: category });
        res.render('products/index', { products, category })
    }
    else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)

})

app.delete('/farms/:id', async (req, res) => {
    const foundFarm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/products');
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const foundFarm = await Farm.findById(id);
    res.render('farms/products/new', { categories, foundFarm });
})

app.post('/farm/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const foundFarm = await Farm.findById(id);
    const newProduct = await new Product(req.body);
    newProduct.farm = foundFarm;
    foundFarm.products.push(newProduct);
    await newProduct.save();
    await foundFarm.save();
    res.redirect(`/farms/${foundFarm._id}`);

})

app.get('/farms/:id', async (req, res) => {
    const foundFarm = await Farm.findById(req.params.id).populate('products');
    // const products = await foundFarm.products.populate();
    res.render('farms/show', { foundFarm });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const foundProduct = await Product.findById(id);
    res.render('products/edit', { foundProduct, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${foundProduct._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm');
    res.render('products/details', { product })
})

const handleValidation = function (err) {
    // console.log(err);
    // return err
    // throw new AppError(`validation failed${err.message}`, 400);
}

app.use((err, req, res, next) => {
    if (err.message === "ValidationError") {
        err = handleValidation(err);
        // next(err);
    }

})

app.listen(3000, () => {
    console.log('connected on 3000')
})