const express = require('express');
const router = express.Router();
const general = require("../controllers/generalContoller.js");


    // Create a new general
    router.post("/", general.create);

    // Retrieve all general
    router.get("/", general.findAll);

    // Retrieve one  general
    router.get("/:id", general.findOne);

    // Update a general with id
    router.put("/:id", general.update);

    // Delete a general with id
    router.delete("/:id", general.delete);

    // Delete all general
    router.delete("/", general.deleteAll);
    
module.exports = router;    