var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    router.use(function (rea, res, next) {
        if (!req.user){
            res.redirect('/auth');
        }
        next();
    });

  res.render('proximos', {title: "Tarefas para os Próximos Dias"});
});

module.exports = router;
