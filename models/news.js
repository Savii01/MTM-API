const Sequelize = require('sequelize');
const connectDb = require ('../config/configDB');

const news = connectDb.define('news',{
        newsID:{type: Sequelize.INTEGER, primaryKey:true, autoIncrement: true},
        newsSource:{type:Sequelize.STRING, allowNull: false},
        content:{type: Sequelize.INTEGER, allowNull: false, comment:'some content goes in here'},
        artistName:{type:Sequelize.STRING, allowNull: false},
        artistID:{type:Sequelize.INTEGER,
            references:{
                model: artist,
                key: artistID,
                deferrable: Deferrable.INITIALLY_IMMEDIATE
            }},
    });
    module.exports = news;