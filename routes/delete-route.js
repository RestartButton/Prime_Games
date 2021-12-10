var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/delete', (req, res) => {
    if(req.session.loggedinUser != true) {
        res.redirect('login');
    }else {
        var email = req.session.email;
        var sql='DELETE FROM usuario WHERE email =?';
        db.query(sql, email, function(err, data) {
            if (err) throw err;

        });
        req.session.destroy();
        res.redirect('/login');
    }
});
module.exports = router;