const recArt = require('../models/recArtist');
const RecArtist = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateRecArtist: updateRecArtist,
    deleteById: deleteById,
    deleteAll: deleteAll
}



function create(Rec) {
    const recArt = new adminAss(rec);
    return recArt.save();
}


function findAll() {
    return recArt.findAll();
}

function findById(recArtistID) {
    return recArt.findByPk(recArtistID);
}

function updateRecArtist(recArtist, recArt) {
    const updaterecArtist = {
        recArtistName: recArtist.recArtistName,
        description: recArtist.description,
        managerID: recArtist.managerID,
       artistID: recArtist.artistID,

    };
    return recArt.update(updaterecArtist, { where: { recArtistID: recArtistID}
});
}

function deleteById(recArtistID) {
    return recArtistID.destroy({ where: { recArtistID: newsID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = RecArtist;