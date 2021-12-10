var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/login', (req, res) => {
    res.render('login.html');
});

router.post('/login', function(req, res){
    var email = req.body.email;
    var senha = req.body.password;
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