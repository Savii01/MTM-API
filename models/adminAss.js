const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const adminAss = connectDb.define('adminAss',{
    assID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    assName:{type: Sequelize.STRING, allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    accountID:{type:Sequelize.INTEGER,
        references:{
            model: acctDetail,
            key: accountID,
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = adminAss;