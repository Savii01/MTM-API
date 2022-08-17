const express = require('express');
const router = express.Router();
const eventOrg = require("../controllers/eventOrgController.js");


    // Create a new  Event Organiser
    router.post("/", eventOrg.create);

    // Retrieve all  Event Organiser
    router.get("/", eventOrg.findAll);

    // Retrieve one   Event Organiser
    router.get("/:id", eventOrg.findOne);

    // Update a  Event Organiser with id
    router.put("/:id", eventOrg.update);

    // Delete a  Event Organiser with id
    router.delete("/:id", eventOrg.delete);

    // Delete all  Event Organiser
    router.delete("/", eventOrg.deleteAll);
    app.use('/api/ EventOrganiser', router);

    module.exports = router;