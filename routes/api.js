var express = require('express');
var taskController = require('../controllers/task.controller');
var router = express.Router();

/* GET users listing. */
router.get('/tarefas', function(req, res, next) {
    return taskController.listByMonth(req, res);
});

module.exports = router;
