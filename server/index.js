require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();


//middleware
app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log('db is connected yo!')
}).catch(err => console.log(err))

//endpoints


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`));