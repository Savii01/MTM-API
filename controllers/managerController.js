const manager = require('../data/managerData');

const Manager= {
    createManager:createManager,
    findAllManager: findAllManager,
    findManagerByID: findManagerByID,
    updateManager: updateManager,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createManager(req, res) {
    const manag = req.body;
    manager.create(manag).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Manager."
              });
        });
}

//Retrieving 
function findAllManager(req, res) {
    manager.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Manager."
              });
        });
}

//retrieving by Id

function findManagerByID(req, res) {
    manager.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Manager, maybe the Manager you need doesn't exist"
              });
        });
}

//updating

function updateManager(req, res) {
    manager.updateManager(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Manager is successfully updated",
                manager: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Manager."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    manager.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Manager successfully deleted ",
                manager: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Manager."
              });
        });
}

//delete all

function deleteAll(req,res){
    manager.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Manager"
        })
      })
}



module.exports = Manager;