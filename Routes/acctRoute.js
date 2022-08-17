module.exports = app => {
const express = require('express');
const router = express.Router();
const acctDetail = require("../controllers/accountDetailsController");

    // Create a new Account details
    router.post("/", acctDetail.createAcctDetail);

    // Retrieve all Account details
    router.get("/", acctDetail.findAllAcctDetail);

    // Retrieve one  Account details
    router.get("/:id", acctDetail.findAccountDetailByID);

    // Update a Account details with id
    router.put("/:id", acctDetail.updateAcctDetails);

    // Delete a Account details with id
    router.delete("/:id", acctDetail.deleteById);

    // Delete all Account details
    router.delete("/", acctDetail.deleteAll);
    
    app.use('/api/acctDetails', router);
};

