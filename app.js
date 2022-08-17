const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const config = require('./config/configDB');
// config.authenticate().then(() => {
//     console.log('connection Successful');
// }).catch(err => {
//     console.log('Error: ' + err);
// })

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors("*"));


app.get('/', (req,res)=>{
    res.send('Welcome to artist management');
  });


//Routes  
app.use('/', require('./Routes/indexRoutes'));



const port = process.env.PORT || 8080;
connectDb.sync().then(() => {
  app.listen(port, console.log(`app is listening on port:  ${port}....`)
  )})

  .catch((error) => {
    res.status(500).send({
        message:
          err.message
    });
});
  