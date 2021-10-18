const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const speedRunRoutes = require('./controllers/speedruns')
server.use('/speedruns', speedRunRoutes)

// Root route
server.get('/', (req, res) => res.send('Hello, runner!'))

module.exports = server