var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/register', function(req, res, next) {
    res.render('registration-form');
});

router.post('/register', function(req, res, next) {
    inputData = {
        first_name: req.body.name+ req.body.lastname,
        email_address: req.body.email,
        telefone: req.body.telefone,
        password: req.body.password,
        confirm_password: req.body.passconfirmation
    }

    var sql = 'SELECT * FROM usuario WHERE email =?';
    db.query(sql, [inputData.email_address], function(err, data, fields) {
        if(err) throw err
        if(data.length > 1) {
            var msg = inputData.email_address+ " ja existe";
        }else if(inputData.confirm_password != inputData.password) {
            var msg = "Senha e confirmacao nao combinam";
        }else {
            var sql = 'INSERT INTO usuario SET ?';
            db.query(sql, inputData, function(err, data) {
                if (err) throw err;
            });
            var msg = "Usuario cadastrado com sucesso!";
        }
        res.render('registration-form', {alertMsg:msg});
    })
});
module.exports = router;