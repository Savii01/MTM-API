const express = require('express');
const router = express.Router();
const contract = require("../controllers/contractController");

    // Create a new Contract
    router.post("/", contract.create);

    // Retrieve all Contract
    router.get("/", contract.findAll);

    // Retrieve one  Contract
    router.get("/:id", contract.findOne);

    // Update a Contract with id
    router.put("/:id", contract.update);

    // Delete a Contract with id
    router.delete("/:id", contract.delete);

    // Delete all Contract
    router.delete("/", contract.deleteAll);
    app.use('/api/Contract', router);

    module.exports = router;