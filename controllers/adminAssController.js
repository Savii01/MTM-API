const adminAsst = require('../data/adminAssData');

const AdminAssT = {
    createAdminAss: createAdminAss,
    findAllAdminAss: findAllAdminAss,
    findAdminAssByID: findAdminAssByID,
    updateAdminAss: updateAdminAss,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createAdminAss(req, res) {
    const adminAss = req.body;
    adminAsst.create(adminAss).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Admin Assistant."
              });
        });
}

//Retrieving 
function findAllAdminAss(req, res) {
    adminAsst.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Admin Assistant."
              });
        });
}

//retrieving by Id

function findAdminAssByID(req, res) {
    adminAsst.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Admin Assistant, maybe the Admin Assistant you need doesn't exist"
              });
        });
}

//updating

function updateAdminAss(req, res) {
    adminAsst.updateAdminAss(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Admin Assistant is successfully updated",
                adminAss: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Admin Assistant."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    adminAsst.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Admin Assistant successfully deleted ",
                adminAss: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Admin Assistant."
              });
        });
}

//delete all

function deleteAll(req,res){
    adminAsst.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Admin Assistant."
        })
      })
}



module.exports = AdminAssT;