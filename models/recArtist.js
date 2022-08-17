const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const recArtist = connectDb.define('recArtist',{
        recArtistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        recArtistName:{type: Sequelize.STRING, allowNull: false},
        description:{type:Sequelize.STRING, allowNull: false},
        managerID:{type:Sequelize.INTEGER,
            references:{
                model: manager,
                key: managerID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: artist,
                key: artistID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},
    });
    module.exports =  recArtist;