var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('adicionar', {
        title: "Adicionar Tarefa",
        user: req.user
    });
});

module.exports = router;