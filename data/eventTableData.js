const eventTables = require('../models/eventTable');
var EventTable = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateEventTable: updateEventTable,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(eventTableQ) {
    const eventTable = new adminAss(eventTableQ);
    return eventTable.save();
}


function findAll() {
    return eventTables.findAll();
}

function findById(eventID) {
    return eventTable.findByPk(eventID);
}

function updateEventTable(eventTable, eventTables) {
    const updatetable = {
        eventType: eventTable.eventType,
        description: eventTable.description,
        date: eventTable.date,
        time: eventTable.time,
        location: eventTable.location,
        artistID: eventTable.artistID,
       managerID: eventTable.managerID,
    };
    return eventTables.update(updatetable, { where: { eventID: eventID }
});
}

function deleteById(eventID) {
    return eventID.destroy({ where: { eventID: eventID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = EventTable;