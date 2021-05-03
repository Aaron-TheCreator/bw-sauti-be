const express = require('express');
const Products = require('./products-model.js');
const ExpressError = require('../expressError');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Products.getAllProducts());
    } catch (err) {
        next(new ExpressError(err, 500));
    }
})

module.exports = router;