require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const ctrl = require ('./controller');
const session = require('express-session');

const app = express();


//middleware
app.use(express.json());
app.use(session({
  resave:false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 100 * 60 * 60 * 24 * 7,
  }, 
})
);

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
app.post('/api/auth/logout', ctrl.logout);
app.get('/api/posts/:userid', ctrl.getPosts );
app.get('/api/post/:postid')


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`));