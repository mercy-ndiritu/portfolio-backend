
const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

const client = new MongoClient(process.env.ATLAS_URI);
let db;

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("contactForm");
    }
    return db;
}

module.exports = connectDB;
