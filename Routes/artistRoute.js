const express = require('express');
const router = express.Router();
const artist = require("../controllers/artistController.js");

// Create a new Artist
router.post("/", artist.create);

// Retrieve all Artist
router.get("/", artist.findAll);

// Retrieve one  Artist
router.get("/:id", artist.findOne);

// Update a Artist with id
router.put("/:id", artist.update);

// Delete a Artist with id
router.delete("/:id", artist.delete);

// Delete all Artist
router.delete("/", artist.deleteAll);

module.exports = router;