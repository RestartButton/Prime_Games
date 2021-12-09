var express = require('express');
var router = express.Router();

router.get('/sobre', (req, res) => {
    res.render('sobre.html');
});
module.exports = router;