const adminAss = require('../models/adminAss');
const AdminAss = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateAdmin: updateAdmin,
    deleteById: deleteById,
    deleteAll:deleteAll
}



function create(ass) {
    const adminAss = new adminAss(ass);
    return adminAss.save();
}


function findAll() {
    return adminAss.findAll();
}

function findById(assID) {
    return adminAss.findByPk(assID);
}

function updateAdmin(adminAss, adminAss) {
    const update = {
        assName: adminAss.acctName,
        gender: adminAss.gender,
        email: adminAss.email,
       accountID: adminAss.accountID,

    };
    return adminAss.update(update, { where: { assID: assID }
});
}

function deleteById(assID) {
    return assID.destroy({ where: { assID: assID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}


module.exports = AdminAss;