const eventOrgs = require('../data/eventOrgData');

const EventOrg = {
    createEventOrg: createEventOrg,
    findAllEventOrg: findAllEventOrg,
    findEventOrgByID: findEventOrgByID,
    updateEventOrg: updateEventOrg,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createEventOrg(req, res) {
    const eventOr = req.body;
    eventOrgs.create(eventOr).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Event Organiser."
              });
        });
}

//Retrieving 
function findAllEventOrg(req, res) {
    eventOrgs.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Event Organiser."
              });
        });
}

//retrieving by Id

function findEventOrgByID(req, res) {
    eventOrgs.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Event Organiser, maybe the Event Organiser you need doesn't exist"
              });
        });
}

//updating

function updateEventOrg(req, res) {
    eventOrgs.updateEventOrg(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event Organiser is successfully updated",
                eventOrgs: data
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
    eventOrgs.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event Organiser successfully deleted ",
                eventOrgs: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Event Organiser."
              });
        });
}

//delete all

function deleteAll(req,res){
    eventOrgs.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Event Organiser."
        })
      })
}



module.exports = Contracts;