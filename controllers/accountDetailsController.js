const accountDetail = require('../data/acctDetailsData');

const acctDetailS = {
    createAcctDetail: createAcctDetail,
    findAllAcctDetail: findAllAcctDetail,
    findAccountDetailByID: findAccountDetailByID,
    updateAcctDetails: updateAcctDetails,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createAcctDetail(req, res) {
    const accountDetails = req.body;
    accountDetail.create(accountDetails).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Account Details."
              });
        });
}

//Retrieving 
function findAllAcctDetail(req, res) {
    accountDetail.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Account Details."
              });
        });
}

//retrieving by Id

function findAccountDetailByID(req, res) {
    accountDetail.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Account Details, maybe the Account Detail you need doesn't exist"
              });
        });
}

//updating

function updateAcctDetails(req, res) {
    accountDetail.updateAcctDetails(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Account Details is successfully updated",
                acctDetails: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Account Details."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    accountDetail.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Account Details successfully deleted ",
                acctDetails: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Account Details."
              });
        });
}

//delete all

function deleteAll(req,res){
    accountDetail.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Account Details."
        })
      })
}



module.exports = acctDetailS;