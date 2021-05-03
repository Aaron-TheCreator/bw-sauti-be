const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const ExpressError = require('./expressError.js');


// role authorization middleware goes here

// router declarations / imports go here
const authRouter = require("./auth/auth-router.js");
const productsRouter = require("./products/products-router.js");

const server = express();

// global middleware for request and response config
server.use(helmet());
server.use(express.json());
server.use(cors());

// router instantiation goes here
server.use("/api/auth", authRouter);
server.use("/api/products", productsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Sauti Market API"
    });
});



module.exports = server;