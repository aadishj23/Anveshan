const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.use(dotenv.config());

const URL=process.env.DATABASE_URL;

mongoose.connect(URL).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
});
