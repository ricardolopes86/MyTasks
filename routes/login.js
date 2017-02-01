var express = require('express');
var loginRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');

var router = function () {
    loginRouter.route('/signin').post(passport.authenticate('local', {
        failureRedirect: '/'
    }), function (req, res) {
        res.redirect('/');
    });

    return loginRouter;
};

module.exports = router;