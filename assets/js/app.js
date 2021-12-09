//npm install express
//npm install mysql
const express = require('express');

const app = express();

//inicialize web server
app.listen(3333);

console.log("node express is running");

var registrationRouter = require('./registro');

app.use('/', registrationRouter);
