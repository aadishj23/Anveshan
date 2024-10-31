const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config("../.env")

const URL=process.env.DATABASE_URL;
console.log("mongodb url is: ", URL);

mongoose.connect(URL).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
    console.log(err);
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
