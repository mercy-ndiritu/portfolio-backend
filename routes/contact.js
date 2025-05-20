const express = require("express");
const router = express.Router();
const { getContactCollection } = require("../models/contactModel");

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ msg: "Please fill all fields" });
  }

  try {
    const collection = await getContactCollection();
    await collection.insertOne({ name, email, subject, message, createdAt: new Date() });
    res.status(201).json({ msg: "Message received!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong!" });
  }
});

module.exports = router;
