const express = require('express');
const router = express.Router();
const acctDetail = require("../controllers/accountDetailsController");

    // Create a new Account details
    router.post("/", acctDetail.create);

    // Retrieve all Account details
    router.get("/", acctDetail.findAll);

    // Retrieve one  Account details
    router.get("/:id", acctDetail.findOne);

    // Update a Account details with id
    router.put("/:id", acctDetail.update);

    // Delete a Account details with id
    router.delete("/:id", acctDetail.delete);

    // Delete all Account details
    router.delete("/", acctDetail.deleteAll);


    module.export = router;