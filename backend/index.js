const express = require("express");
const app = express();
const dotenv = require("dotenv");
const Contact = require("./database");
const cors = require("cors");

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Anveshan!");
});

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await Contact.create({
            name,
            email,
            message,
        });
        res.status(201).send("Message sent successfully");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
