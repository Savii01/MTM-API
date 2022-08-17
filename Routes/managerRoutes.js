module.exports = app => {
const express = require('express');
const router = express.Router();
const manager = require("../controllers/managerController.js");

    // Create a new manager
    router.post("/", manager.createManager);

    // Retrieve all manager
    router.get("/", manager.findAllManager);

    // Retrieve one  manager
    router.get("/:id", manager.findManagerByID);

    // Update a manager with id
    router.put("/:id", manager.updateManager);

    // Delete a manager with id
    router.delete("/:id", manager.deleteById);

    // Delete all manager
    router.delete("/", manager.deleteAll);

    app.use('/api/manager', router);
};