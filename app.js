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

const publicImg = path.join (__dirname, './assets/img/')
app.use(express.static(publicImg));

const publicJs = path.join (__dirname, './assets/js/')
app.use(express.static(publicJs));

const publicLibs = path.join (__dirname, './assets/libs/')
app.use(express.static(publicLibs));


//define routes
app.get('/', (req,res) => {
    // res.send('{"content": "Node JS: Express home page - First access"}');
    res.render("index.html");
});


//inicialize web server
app.listen(port, () => console.log(`Listening on port ${port}`));