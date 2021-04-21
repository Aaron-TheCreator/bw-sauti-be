const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const errorHandler = require('./auth/errorHandler.js')

// role authorization middle ware goes here

// router declarations / imports go here

const server = express();

// global middleware for request and response config
server.use(helmet());
server.use(express.json());
server.use(cors());

// router instantiation goes here

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to Sauti Market API"
    });
});

module.exports = server;