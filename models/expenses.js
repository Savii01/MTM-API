const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const expenses = connectDb.define('expenses',{
        expenseID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        expenses:{type: Sequelize.STRING, allowNull: false},
        dateCreated:{type:Sequelize.DATE, allowNull: false},
        companyID:{type:Sequelize.INTEGER,
            references:{
                model: general,
                key: companyID,
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
    module.exports =  expenses;