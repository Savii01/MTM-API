const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const adminAss = connectDb.define('adminAss',{
    assID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    assName:{type: Sequelize.STRING, validate:{isAlpha:true}, allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    accountID:{type:Sequelize.INTEGER,
        references:{
            model: Sequelize.acctDetails,
            key: Sequelize.accountID,
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
})

module.exports = adminAss;