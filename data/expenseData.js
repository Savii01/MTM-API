const expense = require('../models/expenses');
const Expense = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateExpense: updateExpense,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(expe) {
    const expense = new adminAss(expe);
    return expense.save();
}


function findAll() {
    return expense.findAll();
}

function findById(expenseID) {
    return expense.findByPk(expenseID);
}

function updateExpense(expenses, expense) {
    const updateXpense = {
        expenses: expenses.expenses,
        dateCreated: expenses.dateCreated,
        companyID: expenses.companyID,
       artistID: expenses.artistID,
       managerID: expenses.managerID

    };
    return expense.update(updateXpense, { where: { expenseID: expenseID}
});
}

function deleteById(expenseID) {
    return expenseID.destroy({ where: { expenseID: expenseID } });
}

function deleteAll(){
    return expense.deleteAll();
}

module.exports = Expense;