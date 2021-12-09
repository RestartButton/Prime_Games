//npm install express
//npm install mysql
const express = require('express');
const mysql = require('mysql');


const app = express();


//initialize mysql connection
const MYSQL_IP = "localhost";
const MYSQL_LOGIN = "root";
const { MYSQL_PASSWORD } = require('../../config.json');

let con = mysql.createConnection({
  host:  MYSQL_IP,
  user: MYSQL_LOGIN,
  password: MYSQL_PASSWORD,
  database: "primegames"
});

con.connect(function(err) {
  if (err){
    console.log(err);
    throw err;
  }
  console.log("Connection with mysql established");
});

//inicialize web server
app.listen(3333);

/*
app.post('/messages', function (req, res) {
  console.log("POST received.");
  let sentBy=req.query.sent_by;
  let sentTo=req.query.sent_to;
  let message=req.query.message;
  let paramenters=[sentBy,sentTo,message];
  const sql="insert into messages (sent_by,sent_to,message,`when`) values(?,?,?,now())";
  con.query(sql,paramenters, function (err, result) {
    if (err) throw err;
    console.log("SQL executed.");
    res.status(200);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
  });
})

*/

app.get('/cardapioJSON', function(req, res){
  console.log("GET")
  const sql = "select * from cardapio";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Result: ", result)
    res.status(200);
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(result))
  })
})

  //define routes and its behaviors
app.get('/', function (req, res) {
  res.send('{"content": "Node JS: Express home page - First access"}');
  
})



/*
app.get('/index', function (req, res) {
  res.send('GET request to the index page');
  //Acesses http get attributes>req.query.attribute_name
  console.log("Parameter id:",req.query.id);
})

  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })
*/
console.log("node express is running");

  /*
    result = convert.js2xml(js, options);     // to convert javascript object to xml text
    result = convert.json2xml(json, options); // to convert json text to xml text
    result = convert.xml2js(xml, options);    // to convert xml text to javascript object
    result = convert.xml2json(xml, options);  // to convert xml text to json text
    */