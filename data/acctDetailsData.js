const acctDetail = require('../models/acctDetails');
var AccountDetails = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateacctDetails: updateacctDetails,
    deleteById: deleteById,
    deleteAll:deleteAll
}



function create(acctDetails) {
    const acctDetail = new acctDetail(acctDetails);
    return acctDetail.save();
}


function findAll() {
    return acctDetail.findAll();
}

function findById(accountID) {
    return acctDetail.findByPk(accountID);
}

function updateacctDetails(acctDetails, acctDetail) {
    const updateacctDetails = {
       acctName: acctDetails.acctName,
       acctNumber: acctDetails.acctNumber,
       bank: acctDetails.bank
    };
    return acctDetail.update(updateacctDetails, { where: { accountID: accountID } });
}

function deleteById(accountID) {
    return acctDetail.destroy({ where: { accountID: accountID } });
}

function deleteAll(){
    return acctDetail.deleteAll();
}


module.exports = AccountDetails;