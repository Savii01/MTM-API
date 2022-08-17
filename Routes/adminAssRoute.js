   const express = require('express');
    const router = express.Router();
    const adminAss = require("../controllers/adminAssController");
   

    // Create a new Admin Assistant
    router.post("/", adminAss.create);

    // Retrieve all Admin Assistant
    router.get("/", adminAss.findAll);

    // Retrieve one  Admin Assistant
    router.get("/:id", adminAss.findOne);

    // Update a Admin Assistant with id
    router.put("/:id", adminAss.update);

    // Delete a Admin Assistant with id
    router.delete("/:id", adminAss.delete);

    // Delete all Admin Assistant
    router.delete("/", adminAss.deleteAll);


    module.exports = router;
