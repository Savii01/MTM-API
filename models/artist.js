const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const artistU = connectDb.define('artist',{
    artistID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
    artistName:{type: Sequelize.STRING,validate:{isAlpha: true}, allowNull: false},
    gender:{type:Sequelize.STRING, allowNull: false},
    email:{type:Sequelize.STRING, allowNull: false},
    genre:{type:Sequelize.STRING, allowNull: false},
    accountID:{type:Sequelize.INTEGER,
        references:{
            model:Sequelize.acctDetail,
            key: Sequelize.accountID,
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }},
    managementID:{type:Sequelize.INTEGER,
            references:{
                model: Sequelize.management,
                key: Sequelize.managementID,
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }},    
    managerID:{type:Sequelize.INTEGER,
        references:{
            model: Sequelize.manager,
            key: Sequelize.managerID,
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }},
    managerName:{type:Sequelize.INTEGER, allowNull: false},
})

module.exports = artistU;