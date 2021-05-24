const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const ExpressError = require('./expressError.js');


// role authorization middleware goes here

// router declarations / imports go here
const authRouter = require("./auth/auth-router.js");
const productsRouter = require("./products/products-router.js");
const categoriesRouter = require("./categories/categories-router.js");

const server = express();

// global middleware for request and response config
server.use(helmet());
server.use(express.json());
server.use(cors());

// router instantiation goes here
server.use("/api/auth", authRouter);
server.use("/api/products", productsRouter);
server.use("/api/categories", categoriesRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Sauti Market API. See ' https://github.com/Aaron-TheCreator/bw-sautimarket-be ' for instructions. './api/products/' should return JSON data for all current products "
    });
});



module.exports = server;