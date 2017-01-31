var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('proximos', {title: "Tarefas para os Próximos Dias"});
});

module.exports = router;
