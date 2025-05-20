
const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(express.json());

const contactRoute = require("./routes/contact");
const homeRoute = require("./routes/home");
app.use("/", homeRoute);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
