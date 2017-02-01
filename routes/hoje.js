var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    router.use(function (rea, res, next) {
        if (!req.user){
            res.redirect('/auth');
        }
        next();
    });

  res.render('hoje', {title: "Atividades para Hoje"});
});

module.exports = router;
