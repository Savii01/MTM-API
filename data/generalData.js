const gen = require('../models/general');
var General = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateGeneral: updateGeneral,
    deleteById: deleteById,
    deleteAll:deleteAll
}



function create(Gen) {
    const generals = new adminAss(Gen);
    return generals.save();
}


function findAll() {
    return gen.findAll();
}

function findById(companyID) {
    return gen.findByPk(companyID);
}

function updateGeneral(general, gen) {
    const updategen = {
        companyName: general.eventType,
        eventOrgID: general.description,
        artistID: general.artistID,
       managerID: general.managerID,
    };
    return gen.update(updatetable, { where: { companyID: companyID }
});
}

function deleteById(companyID) {
    return companyID.destroy({ where: { companyID: companyID } });
}

function deleteAll(){
    return gen.deleteAll();
}

module.exports = General;