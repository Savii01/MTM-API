const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const acctDetails = connectDb.define('acctDetail',{
    accountID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    accountName:{type: Sequelize.STRING, allowNull: false},
    accountNumber:{type:Sequelize.INTEGER, allowNull: false},
    bank:{type:Sequelize.STRING, allowNull: false}
});

module.exports = acctDetails;