var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/registro', (req, res) => {
    res.render('registro.html');
});

router.post('/registro', function(req, res, next) {
    inputData = {
        nome: req.body.name+ req.body.lastname,
        email: req.body.email,
        telefone: req.body.telefone,
        senha: req.body.password,
        confirmar_senha: req.body.passconfirmation
    }

    var sql = 'SELECT * FROM usuario WHERE email =?';
    db.query(sql, [inputData.email], function(err, data, fields) {
        if(err) throw err
        if(data.length > 1) {
            var msg = inputData.email+ " ja existe";
        }else if(inputData.confirmar_senha != inputData.senha) {
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