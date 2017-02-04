var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    router.use(function (rea, res, next) {
        if (!req.user){
            res.redirect('/auth');
        }
        next();
    });

    res.render('adicionar', {
        title: "Adicionar Tarefa",
        user: req.user
    });
});

module.exports = router;