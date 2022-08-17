const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const eventTable = connectDb.define('eventTable',{
        eventID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        eventType:{type: Sequelize.STRING, allowNull: false},
        description:{type:Sequelize.STRING, allowNull: false},
        date:{type:Sequelize.DATEONLY(), allowNull: false, set(valuesToBeAdded){this.setdatavalue(date,valuesToBeAdded)}},
        time:{type:Sequelize.TIME, allowNull: false, defaultValue: '00:00:00', field: 'hour', set (valueToBeSet) {this.setDataValue('timeTo', valueToBeSet)}},
        location:{type:Sequelize.STRING, allowNull: false},
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
        dateCreated:{type:Sequelize.DATE, allowNull: false}

    })

    module.exports = eventTable;