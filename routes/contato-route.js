var express = require('express');
var router = express.Router();

router.get('/contato', (req, res) => {
    res.render('contato.html');
});
module.exports = router;