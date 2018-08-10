const router = require('express').Router();
const faker = require('faker');
const Product = require('../models/products');

router.get('/', (req, res) => {
    Product.find( {}, { category: 1, name:1, cover:1, price:1 },(err,categories)=>{
        res.json(categories);
    });
});


router.get('/datos-falsos',(req, res)=>{
    for(let i=1; i<80;i++){
        const product = new Product();
        product.category = faker.commerce.department();
        product.name = faker.commerce.productName();
        product.price = faker.commerce.price();
        product.cover = i;
        product.save(err=>{
            if (err) {return next(err);}
        });
    }
    res.redirect('/');
});

module.exports = router;
