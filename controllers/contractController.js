const contracts = require('../data/contractData');

const Contracts = {
    createContract:createContract,
    findAllContracts: findAllContracts,
    findContractByID: findContractByID,
    updateContracts: updateContracts,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createContract(req, res) {
    const contrac = req.body;
    contracts.create(contrac).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Contract."
              });
        });
}

//Retrieving 
function findAllContracts(req, res) {
    contracts.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Contract."
              });
        });
}

//retrieving by Id

function findContractByID(req, res) {
    contracts.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Contract, maybe the Contract you need doesn't exist"
              });
        });
}

//updating

function updateContracts(req, res) {
    contracts.updateContracts(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract is successfully updated",
                contract: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Contract."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    contracts.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Contract successfully deleted ",
                contract: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Contract."
              });
        });
}

//delete all

function deleteAll(req,res){
    contracts.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Contract."
        })
      })
}



module.exports = Contracts;