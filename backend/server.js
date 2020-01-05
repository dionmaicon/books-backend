'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const dbConfig = require('./src/config/database.js');
const bookRouter = require('./src/routes/book.router.js')
const authorRouter = require('./src/routes/author.router.js')
const publishingRouter = require('./src/routes/publishing.router.js')
const mockRouter  = require('./src/routes/mock.router.js')
const mongoose = require('mongoose');

const API_PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;

app.use('/books', bookRouter);
app.use('/authors', authorRouter);
app.use('/publishings', publishingRouter);
app.use('/mocks', mockRouter);

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log("Couldn't connect to the database. Exiting now...", err);
    process.exit();
});


app.listen(API_PORT, HOST);

console.log(`Running on http://${HOST}:${API_PORT}`);
