module.exports = app => {
const express = require('express');
const router = express.Router();
const eventTable = require("../controllers/eventTableController.js");

    // Create a new eventTable
    router.post("/", eventTable.createEventTable);

    // Retrieve all eventTable
    router.get("/", eventTable.findAllEventTable);

    // Retrieve one  eventTable
    router.get("/:id", eventTable.findEventTableByID);

    // Update a eventTable with id
    router.put("/:id", eventTable.updateEventTable);

    // Delete a eventTable with id
    router.delete("/:id", eventTable.deleteById);

    // Delete all eventTable
    router.delete("/", eventTable.deleteAll);

    app.use('/api/eventTable', router);
}