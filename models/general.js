const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const general = connectDb.define('general',{
        companyID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        companyName:{type: Sequelize.STRING, allowNull: false},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: eventOrg,
                key: eventOrgID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: artist,
                key: artistID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},
        managerID:{type:Sequelize.INTEGER,
            references:{
                model: acctDetail,
                key: accountID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},

    });
module.exports =  general;
