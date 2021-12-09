//imports
const express = require('express');
const app = express();
const port = 3333;
const path = require('path');


//define view engine
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


//define static directories
const publicDirectory = path.join (__dirname, './assets/css')
app.use(express.static(publicDirectory));

const publicImg = path.join (__dirname, './assets/img')
app.use(express.static(publicImg));

const publicJs = path.join (__dirname, './assets/js')
app.use(express.static(publicJs));

const publicBootstrapCSS = path.join (__dirname, './assets/libs/bootstrap/css')
app.use(express.static(publicBootstrapCSS));

const publicBootstrapJS = path.join (__dirname, './assets/libs/bootstrap/js')
app.use(express.static(publicBootstrapJS));


//define routes

var indexRouter = require('./routes/index-route');
var registroRouter = require('./routes/registro-route');

app.use('/', indexRouter);
app.use('/', registroRouter);


//inicialize web server
app.listen(port, () => console.log(`Listening on port ${port}`));