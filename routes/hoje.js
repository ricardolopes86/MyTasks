var express = require('express');
var taskController = require('../controllers/task.controller');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    return taskController.listToday(req, res);
});

module.exports = router;
