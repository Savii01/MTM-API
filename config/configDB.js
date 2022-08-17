const {Sequelize} = require('sequelize');

//connection string
const connectDb = new Sequelize({
    dialect: "mssql",
    dialectModulePath: 'sequelize-msnodesqlv8',
    connectionstring:'Server=localhost\DESKTOP-9FGJI9C; Database= MusicTalentManagement; Trusted_Connection=yes; Intergrated Secuirity=true'
,
    pool: {
        max:7,
        min: 0,
        acquire: 3000,
        idle:1000,
    }
}

);

try {
    connectDb.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = connectDb