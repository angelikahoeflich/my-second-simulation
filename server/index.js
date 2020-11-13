require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require ('./controller');

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

app.post('/api/auth/register', ctrl.register );
app.post('/api/auth/login', ctrl.login );
app.post('/api/post/:userid', );
app.get('/api/posts/:userid', );
app.get('/api/post/:postid')


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`));