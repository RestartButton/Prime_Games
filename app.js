//imports
const express = require('express');
const app = express();
const port = 3333;
const path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var serveStatic = require('serve-static');

//define view engine
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

//define static directories
const publicDirectory = path.join (__dirname, './assets');
app.use(serveStatic(publicDirectory));

//define routes

var indexRouter = require('./routes/index-route');
var registroRouter = require('./routes/registro-route');
var catalogoRouter = require('./routes/catalogo-route');
var contatoRouter = require('./routes/contato-route');
var loginRouter = require('./routes/login-route');
var sobreRouter = require('./routes/sobre-route');
var contaRouter = require('./routes/conta-route');
var logoutRouter = require('./routes/logout-route');
var deleteRouter = require('./routes/delete-route');


app.use('/', indexRouter);
app.use('/', registroRouter);
app.use('/', catalogoRouter);
app.use('/', contatoRouter);
app.use('/', loginRouter);
app.use('/', sobreRouter);
app.use('/', contaRouter);
app.use('/', logoutRouter);
app.use('/', deleteRouter);


//inicialize web server
app.listen(port, () => console.log(`Listening on port ${port}`));