const express = require('express');
const router = express.Router();
const eventTable = require("../controllers/eventTableController.js");

    // Create a new eventTable
    router.post("/", eventTable.create);

    // Retrieve all eventTable
    router.get("/", eventTable.findAll);

    // Retrieve one  eventTable
    router.get("/:id", eventTable.findOne);

    // Update a eventTable with id
    router.put("/:id", eventTable.update);

    // Delete a eventTable with id
    router.delete("/:id", eventTable.delete);

    // Delete all eventTable
    router.delete("/", eventTable.deleteAll);

module.export = router;