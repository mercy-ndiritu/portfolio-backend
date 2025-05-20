// controllers/contactController.js
const connectDB = require("../db/connect");

async function submitContact(req, res) {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const db = await connectDB();
        const result = await db.collection("messages").insertOne({ name, email, subject, message, createdAt: new Date() });
        res.status(201).json({ success: true, messageId: result.insertedId });
    } catch (error) {
        res.status(500).json({ error: `Failed to send message: ${error.message}` });
    }
}

module.exports = { submitContact };
