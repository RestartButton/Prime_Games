var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render('login.html');
});
module.exports = router;