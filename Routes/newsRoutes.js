module.exports = app => {
const express = require('express');
const router = express.Router();
const news = require("../controllers/newsController.js");
  

    // Create a new news
    router.post("/", news.createNews);

    // Retrieve all news
    router.get("/", news.findAllNews);

    // Retrieve one  news
    router.get("/:id", news.findNewsByID);

    // Update a news with id
    router.put("/:id", news.updateNews);

    // Delete a news with id
    router.delete("/:id", news.deleteById);

    // Delete all news
    router.delete("/", news.deleteAll);
    
    app.use('/api/news', router);
  };