const contracts = require('../models/contract');
var Contract = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateContract: updateContract,
    deleteById: deleteById,
    deleteAll:deleteAll
}



function create(contractI) {
    var contracts = new adminAss(contractI);
    return contracts.save();
}


function findAll() {
    return contracts.findAll();
}

function findById(contractID) {
    return contracts.findByPk(contractID);
}

function updateContract(contract, contracts) {
    const updatecontract = {
        DateSigned: contract.DateSigned,
        DateTerminated: contract.DateTerminated,
        artistID: contract.artistID
    };
    return contracts.update(updatecontract, { where: { contractID: contractID }
});
}

function deleteById(contractID) {
    return contractID.destroy({ where: { contractID: contractID } });
}

function deleteAll(){
    return contracts.deleteAll();
}

module.exports = Contract;