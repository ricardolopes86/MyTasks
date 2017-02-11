var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var taskController = require('../controllers/task.controller');
var router = express.Router();

/* GET home page. */

 router.all('*', function(req,res,next) {
     if (req.path === '/' || req.path === '/signup' || req.path === '/login')
         next();
     else
         isLoggedIn(req,res,next);
 });

router.get('/', function(req, res, next) {
    res.render('login', { message: req.flash('loginMessage') });
});

router.get('/home', function(req, res, next) {
    return taskController.list(req, res);
});
router.get('/login', function(req, res, next) {
    res.render('login', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
    res.render('signup', { message: req.flash('loginMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', { user: req.user });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
}));

router.post('/adicionar', function (req, res) {
    return taskController.create(req, res);
});

router.delete('/tarefa/delete/:id', function (req, res) {
    return taskController.deleteTask(req, res);
});

router.get('/tarefa/delete/:id', function (req, res) {
    return taskController.deleteTask(req, res);
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}