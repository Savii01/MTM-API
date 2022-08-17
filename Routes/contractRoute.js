module.exports = app => {const express = require('express');
const router = express.Router();
const contract = require("../controllers/contractController");

    // Create a new Contract
    router.post("/", contract.createContract);

    // Retrieve all Contract
    router.get("/", contract.findAllContracts);

    // Retrieve one  Contract
    router.get("/:id", contract.findContractByID);

    // Update a Contract with id
    router.put("/:id", contract.updateContracts);

    // Delete a Contract with id
    router.delete("/:id", contract.deleteById);

    // Delete all Contract
    router.delete("/", contract.deleteAll);

    app.use('/api/Contract', router);
};