const management = require('../data/managementData');

const Management = {
    createManagement:createManagement,
    findAllManagment: findAllManagment,
    findManagementByID: findManagementByID,
    updateManagement: updateManagement,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createManagement(req, res) {
    const manage = req.body;
    management.create(manage).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Management."
              });
        });
}

//Retrieving 
function findAllManagment(req, res) {
    management.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Management."
              });
        });
}

//retrieving by Id

function findManagementByID(req, res) {
    management.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Management, maybe the Management you need doesn't exist"
              });
        });
}

//updating

function updateManagement(req, res) {
    management.updateManagement(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Management is successfully updated",
                management: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Management."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    management.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Management successfully deleted ",
                management: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Management."
              });
        });
}

//delete all

function deleteAll(req,res){
    management.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Management"
        })
      })
}



module.exports = Management;