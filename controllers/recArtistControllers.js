const recArts = require('../data/recArtistData');

const RecArt = {
    createRecArt:createRecArt,
    findAllRecArt: findAllRecArt,
    findRecArtByID: findRecArtByID,
    updateRecArt: updateRecArt,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createRecArt(req, res) {
    const recc = req.body;
    recArts.create(recc).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Recommended Artist."
              });
        });
}

//Retrieving 
function findAllRecArt(req, res) {
    recArts.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Recommended Artist."
              });
        });
}

//retrieving by Id

function findRecArtByID(req, res) {
    recArts.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Recommended Artist, maybe the Recommended Artist you need doesn't exist"
              });
        });
}

//updating

function updateRecArt(req, res) {
    recArts.updateRecArt(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Recommended Artist is successfully updated",
                recArt: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the News."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    recArts.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "News successfully deleted ",
                recArt: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the News."
              });
        });
}

//delete all

function deleteAll(req,res){
    recArts.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all News."
        })
      })
}



module.exports = RecArt;