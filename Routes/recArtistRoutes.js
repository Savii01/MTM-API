const express = require('express');
const router = express.Router();
const recArtist = require("../controllers/recArtistController.js");


    // Create a new recArtist
    router.post("/", recArtist.create);

    // Retrieve all nrecArtistews
    router.get("/", recArtist.findAll);

    // Retrieve one  recArtist
    router.get("/:id", recArtist.findOne);

    // Update a recArtist with id
    router.put("/:id", recArtist.update);

    // Delete a recArtist with id
    router.delete("/:id", recArtist.delete);

    // Delete all recArtist
    router.delete("/", recArtist.deleteAll);
    
module.exports = router;