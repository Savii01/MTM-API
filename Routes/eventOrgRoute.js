module.exports = app => {
const express = require('express');
const router = express.Router();
const eventOrg = require("../controllers/eventOrgController.js");


    // Create a new  Event Organiser
    router.post("/", eventOrg.createEventOrg);

    // Retrieve all  Event Organiser
    router.get("/", eventOrg.findAllEventOrg);

    // Retrieve one   Event Organiser
    router.get("/:id", eventOrg.findEventOrgByID);

    // Update a  Event Organiser with id
    router.put("/:id", eventOrg.updateEventOrg);

    // Delete a  Event Organiser with id
    router.delete("/:id", eventOrg.deleteById);

    // Delete all  Event Organiser
    router.delete("/", eventOrg.deleteAll);

    app.use('/api/ EventOrganiser', router);
}