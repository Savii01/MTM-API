const express = require('express');
const router = express.Router();
const manager = require("../controllers/managerController.js");

    // Create a new manager
    router.post("/", manager.create);

    // Retrieve all manager
    router.get("/", manager.findAll);

    // Retrieve one  manager
    router.get("/:id", manager.findOne);

    // Update a manager with id
    router.put("/:id", manager.update);

    // Delete a manager with id
    router.delete("/:id", manager.delete);

    // Delete all manager
    router.delete("/", manager.deleteAll);

module.exports = router;