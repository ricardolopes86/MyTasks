var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('hoje', {title: "Atividades para Hoje"});
});

module.exports = router;
