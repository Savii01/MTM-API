const managers = require('../models/manager');
var Manager= {
    create: create,
    findAll: findAll,
    findById: findById,
    updateManager: updateManager,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(Manager) {
    const managers = new adminAss(Manager);
    return managers.save();
}


function findAll() {
    return managers.findAll();
}

function findById(managerID) {
    return managers.findByPk(managerID);
}

function updateManager(manager, managers) {
    const updatemanager = {
        managerName: manager.managerName,
        gender: manager.gender,
        email: manager.email,
        address: manager.address,
        accountID: manager.accountID,
        assID: manager.assID,
        assName: manager.assName
    };
    return manager.update(updatemanager, { where: { managerID: managerID }
});
}

function deleteById(managerID) {
    return manager.destroy({ where: {managerID: managerID } });
}

function deleteAll(){
    return manager.deleteAll();
}

module.exports = Manager;