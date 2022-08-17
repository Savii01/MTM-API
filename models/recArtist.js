const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const recArtist = connectDb.define('recArtist',{
        recArtistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        recArtistName:{type: Sequelize.STRING,validate:{isAlpha: true}, allowNull: false},
        description:{type:Sequelize.STRING, allowNull: false},
        managerID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.manager,
                key: Sequelize.Sequelize.managerID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.artist,
                key: Sequelize.artistID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
    });
    module.exports =  recArtist;