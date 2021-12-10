var express = require('express');
var router = express.Router();
var db = require('../db');
var sha1 = require('sha1');

router.get('/registro', (req, res) => {
    res.render('registro.html');
});

router.post('/registro', function(req, res, next) {
    inputData = {
        nome: req.body.name+ " "+ req.body.lastname,
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
            res.render('registro.html', {alertMsg:msg});
        }else if(inputData.confirmar_senha != inputData.senha) {
            var msg = "Senha e confirmacao nao combinam";
            res.render('registro.html', {alertMsg:msg});
        }else {
            usuario = {
                nome: inputData.nome,
                email: inputData.email,
                senha: sha1(inputData.senha),
                telefone: inputData.telefone  
            }
            var sql = 'INSERT INTO usuario SET ?';
            db.query(sql, usuario, function(err, data) {
                if (err) throw err;
            });
            var msg = "Usuario cadastrado com sucesso!";
            res.redirect('login');
        }
        
    })
});
module.exports = router;