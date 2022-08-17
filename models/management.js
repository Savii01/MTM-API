const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const management = connectDb.define('management',{
        managementID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        Month:{type: Sequelize.STRING, allowNull: false},
        artistPercent:{type:Sequelize.INTEGER,allowNull:false},
        companyPercent:{type:Sequelize.INTEGER,allowNull:false},
        expenseID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.expenses,
                key: Sequelize.expenseID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }},
        eventOrgID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.eventOrg,
                key: Sequelize.eventOrgID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
        eventID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.eventTable,
                key: Sequelize.eventID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }},
        dateCreated:{type:Sequelize.DATE, allowNull:false}    
    });
  module.exports = management;