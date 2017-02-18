var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var taskController = require('../controllers/task.controller');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    return taskController.listCalendar(req, res);

});

module.exports = router;