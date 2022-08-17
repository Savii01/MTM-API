module.exports = app => {
const express = require('express');
const router = express.Router();
const recArtist = require("../controllers/recArtistControllers.js");


    // Create a new recArtist
    router.post("/", recArtist.createRecArt);

    // Retrieve all nrecArtistews
    router.get("/", recArtist.findAllRecArt);

    // Retrieve one  recArtist
    router.get("/:id", recArtist.findAllRecArt);

    // Update a recArtist with id
    router.put("/:id", recArtist.updateRecArt);

    // Delete a recArtist with id
    router.delete("/:id", recArtist.deleteById);

    // Delete all recArtist
    router.delete("/", recArtist.deleteAll);
    
    app.use('/api/reca]Artist', router);
};