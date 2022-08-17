const gen = require('../data/generalData');

const General = {
    createGen:createGen,
    findAllGen: findAllGen,
    findGenByID: findGenByID,
    updateGen: updateGen,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createGen(req, res) {
    const Gen = req.body;
    gen.create(Gen).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Company."
              });
        });
}

//Retrieving 
function findAllGen(req, res) {
    gen.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Company."
              });
        });
}

//retrieving by Id

function findGenByID(req, res) {
    gen.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Company, maybe the Company you need doesn't exist"
              });
        });
}

//updating

function updateGen(req, res) {
    gen.updateGen(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Company is successfully updated",
                general: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Company."
              }); console.log(error);
        });
}

//deleting by ID

function deleteById(req, res) {
    gen.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Company successfully deleted ",
                general: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Company."
              });
        });
}

//delete all

function deleteAll(req,res){
    gen.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Company."
        })
      })
}



module.exports = General;