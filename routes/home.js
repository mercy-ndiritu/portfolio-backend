
const express = require("express");
const homeRouter = express.Router();


homeRouter.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello from the home route!",
        
    });
  
});

module.exports = homeRouter;