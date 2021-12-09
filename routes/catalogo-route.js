var express = require('express');
var router = express.Router();

router.get('/catalogo', (req, res) => {
    res.render('catalogo.html');
});
module.exports = router;