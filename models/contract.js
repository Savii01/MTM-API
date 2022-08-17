const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const contract = connectDb.define('contract',{
    contractID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    DateSigned:{type: Sequelize.DATE, allowNull: false},
    dateTerminated:{type:Sequelize.DATE, allowNull: false},
    artistID:{type:Sequelize.INTEGER,
        references:{
            model: artist,
            key: artistID,
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},
});

module.exports = contract;