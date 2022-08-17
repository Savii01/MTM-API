module.exports = app => {
const express = require('express');
const router = express.Router();
const general = require("../controllers/generalController.js");


    // Create a new general
    router.post("/", general.createGen);

    // Retrieve all general
    router.get("/", general.findAllGen);

    // Retrieve one  general
    router.get("/:id", general.findGenByID);

    // Update a general with id
    router.put("/:id", general.updateGen);

    // Delete a general with id
    router.delete("/:id", general.deleteById);

    // Delete all general
    router.delete("/", general.deleteAll);
    
    app.use('/api/general', router);
};