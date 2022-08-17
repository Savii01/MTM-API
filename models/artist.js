const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const artistU = connectDb.define('artist',{
    artistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    artistName:{type: Sequelize.STRING, allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    genre:{type:Sequelize.STRING, allowNull: false},
    accountID:{type:Sequelize.INTEGER,
        references:{
            model: acctDetail,
            key: accountID,
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }},
    managementID:{type:Sequelize.INTEGER,
            references:{
                model: management,
                key: managementID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},    
    managerID:{type:Sequelize.INTEGER,
        references:{
            model: manager,
            key: managerID,
            deferrable: Deferrable.INITIALLY_IMMEDIATE
    }},
    managerName:{type:Sequelize.INTEGER, allowNull: false},
})

module.exports = artistU;