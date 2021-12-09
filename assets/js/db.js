const mysql = require('mysql');
const { MYSQL_PASSWORD } = require('../../config.json');

let con = mysql.createConnection({
  host:  "localhost",
  user: "root",
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
module.exports = con;