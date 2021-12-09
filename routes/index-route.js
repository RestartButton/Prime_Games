var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/index', (req, res) => {
    res.render('../views/index.html');
});
module.exports = router;