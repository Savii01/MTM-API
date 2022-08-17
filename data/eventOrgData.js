const eventOrgs = require('../models/eventOrg');
var EventOrg = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateEventOrg: updateEventOrg,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(eventOrgI) {
    const eventOrgs = new adminAss(eventOrgI);
    return eventOrgs.save();
}


function findAll() {
    return eventOrgs.findAll();
}

function findById(eventOrgID) {
    return eventOrgs.findByPk(eventOrgID);
}

function updateEventOrg(eventOrg, eventOrgs) {
    const updateeventOrg = {
        eventOrgName: eventOrg.eventOrgName,
        phone: eventOrg.phone,
        email: eventOrg.email,
        companyName: eventOrg.companyName,
        location: eventOrg.location,
        artistID: eventOrg.artistID,
       managerID: eventOrg.managerID,
       dateCreated: eventOrg.dateCreated,
    };
    return eventOrgs.update(updateeventOrg, { where: { eventOrgID: eventOrgID }
});
}

function deleteById(eventOrgID) {
    return artistID.destroy({ where: { eventOrgID: eventOrgID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = EventOrg;