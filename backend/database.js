const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const URL=process.env.DATABASE_URL;

mongoose.connect(URL).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
});
