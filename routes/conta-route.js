var express = require('express');
var router = express.Router();


router.get('/conta', (req, res) => {
    if(req.session.loggedinUser != true) {
        res.redirect('login');
    }else {
        res.render('conta.html');
    }
});

module.exports = router;