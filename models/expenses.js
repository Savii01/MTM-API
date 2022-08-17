const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const expenses = connectDb.define('expenses',{
        expenseID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        expenses:{type: Sequelize.STRING, allowNull: false},
        dateCreated:{type:Sequelize.DATE, allowNull: false},
        companyID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.general,
                key: Sequelize.companyID,
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
    module.exports =  expenses;