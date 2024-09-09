const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Contact = require('./database');

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});