require('dotenv').config();
const express = require('express');
const massive = require('massive');

const port = 2345

const app = express();


//middleware
app.use(express.json());

//endpoints


app.listen(port, console.log(`listening on port ${port}`));