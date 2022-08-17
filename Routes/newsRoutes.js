const express = require('express');
const router = express.Router();
const news = require("../controllers/newsController.js");
  

    // Create a new news
    router.post("/", news.create);

    // Retrieve all news
    router.get("/", news.findAll);

    // Retrieve one  news
    router.get("/:id", news.findOne);

    // Update a news with id
    router.put("/:id", news.update);

    // Delete a news with id
    router.delete("/:id", news.delete);

    // Delete all news
    router.delete("/", news.deleteAll);
    
  module.exports = router;