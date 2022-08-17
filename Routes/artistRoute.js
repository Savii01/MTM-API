module.exports = app => {
const express = require('express');
const router = express.Router();
const artist = require("../controllers/artistController.js");

// Create a new Artist
router.post("/", artist.createArtist);

// Retrieve all Artist
router.get("/", artist.findAllArtist);

// Retrieve one  Artist
router.get("/:id", artist.findArtistByID);

// Update a Artist with id
router.put("/:id", artist.updateArtist);

// Delete a Artist with id
router.delete("/:id", artist.deleteById);

// Delete all Artist
router.delete("/", artist.deleteAll);

app.use('/api/Artist', router);
};