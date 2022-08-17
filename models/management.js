const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const management = connectDb.define('management',{
        managementID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        Month:{type: Sequelize.STRING, allowNull: false},
        artistPercent:{type:Sequelize.INTEGER,allowNull:false},
        companyPercent:{type:Sequelize.INTEGER,allowNull:false},
        expenseID:{type:Sequelize.INTEGER,
            references:{
                model: expenses,
                key: expenseID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: eventOrg,
                key: eventOrgID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},
        eventID:{type:Sequelize.INTEGER,
            references:{
                model: eventTable,
                key: eventID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},
        dateCreated:{type:Sequelize.DATE, allowNull:false}    
    });
  module.exports = management;