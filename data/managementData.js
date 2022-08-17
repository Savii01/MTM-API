const managements = require('../models/management');
var Management = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateManagement: updateManagement,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(Managements) {
    const managements = new adminAss(Managements);
    return managements.save();
}


function findAll() {
    return managements.findAll();
}

function findById(managementID) {
    return managements.findByPk(managementID);
}

function updateManagement(management, managements) {
    const updatemanagement = {
        Month: management.Month,
        totalIncome: management.totalIncome,
        artsistPercent: management.artsistPercent,
        CompanyPercent: management.CompanyPercent,
        expenseID: management.expenseID,
        eventOrgID: management.eventOrgID,
        eventTable: management.eventTable,
        dateCreated: management.dateCreated
    };
    return managements.update(updatemanagement, { where: { managementID: managementID }
});
}

function deleteById(managementID) {
    return managementID.destroy({ where: {managementID: managementID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = Management;