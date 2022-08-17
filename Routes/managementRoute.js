module.exports = app => {
const express = require('express');
const router = express.Router();
const management = require("../controllers/managementController.js");


    // Create a new management
    router.post("/", management.createManagement);

    // Retrieve all management
    router.get("/", management.findAllManagment);

    // Retrieve one  management
    router.get("/:id", management.findManagementByID);

    // Update a management with id
    router.put("/:id", management.updateManagement);

    // Delete a management with id
    router.delete("/:id", management.deleteById);

    // Delete all management
    router.delete("/", management.deleteAll);
    
    app.use('/api/management', router);
};