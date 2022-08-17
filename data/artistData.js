const artist = require('../models/artist');
var Artist = {
    create: create,
    findAll: findAll,
    findById: findById,
    updateArtist: updateArtist,
    deleteById: deleteById,
    deleteAll:deleteAll
}



function create(ArtistI) {
    var artist = new adminAss(ArtistI);
    return artist.save();
}


function findAll() {
    return artist.findAll();
}

function findById(artistID) {
    return artist.findByPk(artistID);
}

function updateArtist(artistU, artist) {
    const updateArtistU = {
        artistName: artistU.artistName,
        gender: artistU.gende,
        email: artistU.email,
        genre: artistU.genre,
       accountID: artistU.accountID,
       management: artistU.management,
       managerID: artistU.managerID,
       managerName: artistU.managerName,
    };
    return artist.update(updateArtistU, { where: { artistID: artistID }
});
}

function deleteById(artistID) {
    return artistID.destroy({ where: { artistID: artitID } });
}

function deleteAll(){
    return adminAss.deleteAll();
}

module.exports = Artist;