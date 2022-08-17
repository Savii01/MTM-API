const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const manager = connectDb.define('manager',{
        managerID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        managerName:{type: Sequelize.STRING, allowNull: false},
        gender:{type:Sequelize.STRING, allowNull: false},
        email:{type:Sequelize.STRING, allowNull: false},
        address:{type:Sequelize.STRING, allowNull: false},
        accountID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.acctDetail,
                key: Sequelize.accountID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
        assID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.adminAss,
                key: Sequelize.assID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
        assName:{type: Sequelize.STRING, allowNull: false},
    });
    module.exports =  manager;