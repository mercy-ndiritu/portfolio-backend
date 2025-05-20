const { ObjectId } = require("mongodb");
const connectDB = require("../db/connect");

async function getContactCollection() {
  const client = await connectDB();
  const db = client.db("contactForm");
  return db.collection("messages");
}

module.exports = { getContactCollection };
