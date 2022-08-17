module.exports = app => {
const express = require('express');
const router = express.Router();
const expenses = require("../controllers/expenseController");


    // Create a new expenses
    router.post("/", expenses.createExpense);

    // Retrieve all expenses
    router.get("/", expenses.findAllExpense);

    // Retrieve one  expenses
    router.get("/:id", expenses.findExpenseByID);

    // Update a expenses with id
    router.put("/:id", expenses.updateExpense);

    // Delete a expenses with id
    router.delete("/:id", expenses.deleteById);

    // Delete all expenses
    router.delete("/", expenses.deleteAll);
    
    app.use('/api/expenses', router);
};