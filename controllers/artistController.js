const artists = require('../data/artistData');

const Artists = {
    createArtist:createArtist,
    findAllArtist: findAllArtist,
    findArtistByID: findArtistByID,
    updateArtist: updateArtist,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createArtist(req, res) {
    const artistS = req.body;
    artists.create(artistS).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Artist."
              });
        });
}

//Retrieving 
function findAllArtist(req, res) {
    artists.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Artist."
              });
        });
}

//retrieving by Id

function findArtistByID(req, res) {
    artists.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Artist, maybe the Artist you need doesn't exist"
              });
        });
}

//updating

function updateArtist(req, res) {
    artists.updateArtist(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist is successfully updated",
                artistU: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Artist."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    artists.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Artist successfully deleted ",
                artistU: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Artist."
              });
        });
}

//delete all

function deleteAll(req,res){
    artists.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Artist."
        })
      })
}



module.exports = Artists;