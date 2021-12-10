var express = require('express');
var router = express.Router();
var db = require('../db');
var sha1 = require('sha1');


router.get('/login', (req, res) => {
    if(req.session.loggedinUser != true) {
        res.render('login.html');
    }else {
        res.redirect('conta');
    }
});


router.post('/login', function(req, res){
    var email = req.body.email;
    var senha = sha1(req.body.password);
    var sql='SELECT * FROM usuario WHERE email =? AND senha =?';
    db.query(sql, [email, senha], function(err, data, fields) {
        if(err) throw err
        if(data.length > 0){
            req.session.loggedinUser = true;
            req.session.email= email;
            res.redirect('index');
        }else {
            res.render('login',{alertMsg:"Your Email Address or password is wrong"});
        }
    })
})

module.exports = router;