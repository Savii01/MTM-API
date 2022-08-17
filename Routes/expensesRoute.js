const express = require('express');
const router = express.Router();
const expenses = require("../controllers/expensesController.js");


    // Create a new expenses
    router.post("/", expenses.create);

    // Retrieve all expenses
    router.get("/", expenses.findAll);

    // Retrieve one  expenses
    router.get("/:id", expenses.findOne);

    // Update a expenses with id
    router.put("/:id", expenses.update);

    // Delete a expenses with id
    router.delete("/:id", expenses.delete);

    // Delete all expenses
    router.delete("/", expenses.deleteAll);
    
module.exports = router;