const expenses = require('../data/expenseData');

const Expenses= {
    createExpense: createExpense,
    findAllExpense: findAllExpense,
    findExpenseByID: findExpenseByID,
    updateExpense: updateExpense,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createExpense(req, res) {
    const expe = req.body;
    expenses.create(expe).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Expense."
              });
        });
}

//Retrieving 
function findAllExpense(req, res) {
    expenses.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Expense."
              });
        });
}

//retrieving by Id

function findExpenseByID(req, res) {
    expenses.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Expense, maybe the Expense you need doesn't exist"
              });
        });
}

//updating

function updateExpense(req, res) {
    expenses.updateeXpense(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Expense is successfully updated",
                expense: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Expense."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    expenses.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Expense successfully deleted ",
                expense: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Expense."
              });
        });
}

//delete all

function deleteAll(req,res){
    expenses.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Expense."
        })
      })
}



module.exports = Expenses;