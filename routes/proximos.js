var express = require('express');
var taskController = require('../controllers/task.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    return taskController.listSevenDays(req, res);
});

module.exports = router;
