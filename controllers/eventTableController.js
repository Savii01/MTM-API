const evenTab = require('../data/eventTableData');

const EventTab= {
    createEventTable: createEventTable,
    findAllEventTable: findAllEventTable,
    findEventTableByID: findEventTableByID,
    updateEventTable: updateEventTable,
    deleteById: deleteById,
    deleteAll: deleteAll
}

//creating

function createEventTable(req, res) {
    const eventab = req.body;
    evenTab.create(eventab).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while creating the Event."
              });
        });
}

//Retrieving 
function findAllEventTable(req, res) {
    evenTab.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while finding all the Event."
              });
        });
}

//retrieving by Id

function findEventTableByID(req, res) {
    evenTab.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving the Event, maybe the Event you need doesn't exist"
              });
        });
}

//updating

function updateEventTable(req, res) {
    evenTab.updateEventTable(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event is successfully updated",
                eventTable: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while updating the Event."
              });
        });
}

//deleting by ID

function deleteById(req, res) {
    evenTab.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Event successfully deleted ",
                eventTable: data
            })
        })
        .catch((error) => {
            res.status(500).send({
                message:
                  err.message || "Some error occurred while deleting the Event."
              });
        });
}

//delete all

function deleteAll(req,res){
    evenTab.destroy({
        where: {},
        truncate: false
      })
      then((data)=>{
        res.status(200).send({
            message:
                  err.message || "Some error occurred while deleting all Event."
        })
      })
}



module.exports = EventTab;