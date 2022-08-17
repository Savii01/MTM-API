const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const eventOrg = connectDb.define('eventOrg',{
        eventOrgID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        eventOrgName:{type: Sequelize.STRING,validate:{isAlpha: true},allowNull: false},
        phone:{type:Sequelize.INTEGER, allowNull: false},
        email:{type:Sequelize.STRING, allowNull: false},
        companyName:{type:Sequelize.STRING, allowNull: false},
        location:{type:Sequelize.STRING, allowNull: false},
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
        dateCreated:{type:Sequelize.DATE, allowNull: false}

    });

    module.exports = eventOrg;