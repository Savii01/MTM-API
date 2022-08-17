module.exports = app => {const express = require('express');
    const router = express.Router();
    const adminAss = require("../controllers/adminAssController");
   

    // Create a new Admin Assistant
    router.post("/", adminAss.createAdminAss);

    // Retrieve all Admin Assistant
    router.get("/", adminAss.findAllAdminAss);

    // Retrieve one  Admin Assistant
    router.get("/:id", adminAss.findAdminAssByID);

    // Update a Admin Assistant with id
    router.put("/:id", adminAss.updateAdminAss);

    // Delete a Admin Assistant with id
    router.delete("/:id", adminAss.deleteById);

    // Delete all Admin Assistant
    router.delete("/", adminAss.deleteAll);
    
    app.use('/api/AdminAssistant', router);

}     
