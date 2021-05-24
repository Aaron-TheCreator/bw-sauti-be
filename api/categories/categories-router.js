const express = require('express')
const Categories = require('./categories-model.js')
const ExpressError = require('../expressError.js')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await Categories.getAllCategories())
    } catch (err) {
        next(new ExpressError(err, 500))
    }
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        res.status(200).json(await Categories.getById(id))
    } catch (err) {
        next(new ExpressError(err, 500))
    }
})

module.exports = router;