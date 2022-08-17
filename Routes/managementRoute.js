const express = require('express');
const router = express.Router();
const management = require("../controllers/managementController.js");


    // Create a new management
    router.post("/", management.create);

    // Retrieve all management
    router.get("/", management.findAll);

    // Retrieve one  management
    router.get("/:id", management.findOne);

    // Update a management with id
    router.put("/:id", management.update);

    // Delete a management with id
    router.delete("/:id", management.delete);

    // Delete all management
    router.delete("/", management.deleteAll);
    
module.exports = router;