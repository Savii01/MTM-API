const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const general = connectDb.define('general',{
        companyID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        companyName:{type: Sequelize.STRING, allowNull: false},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.eventOrg,
                key: Sequelize.eventOrgID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.artist,
                key: Sequelize.artistID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }},
        managerID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.acctDetail,
                key: Sequelize.accountID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},

    });
module.exports =  general;
