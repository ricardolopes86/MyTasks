var express = require('express');
var taskController = require('../controllers/task.controller');
var router = express.Router();

router.delete('/delete/:id', function (req, res) {
    return taskController.deleteTask(req, res);
});

router.get('/delete/:id', function (req, res) {
    return taskController.deleteTask(req, res);
});

router.get('/detalhe/:id', function (req, res) {
    return taskController.listTarefa(req, res);
});

module.exports = router;