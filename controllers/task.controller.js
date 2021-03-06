var Tarefa = require('../models/task');

exports.list = function (req, res) {
    var query = Tarefa.find();

    query.sort({data: 'asc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('index', {
                tarefas: results,
                user: req.user
            });
        });
};

exports.listTarefa = function (req, res) {
    var id = req.params.id;

    Tarefa.findById(id, function (err, result) {
        res.render('detalhe', {
            tarefa: result,
            user: req.user
        });
        });
};

exports.listByMonth = function (req, res) {
    var query = Tarefa.find();

    query.sort({data: 'asc'})
        .exec(function (err, results) {
            res.json(results);
        });
};

exports.listToday = function (req, res) {
    var data = new Date(Date.now());
    data.setHours(0,0,0,0);

    var data1 = new Date(Date.now());
    data1.setHours(23,59,59,0);

    var query = Tarefa.find({
        data: {
            $gte: data,
            $lt:data1
        }});

    query.sort({data: 'asc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('hoje', {
                tarefas: results,
                user: req.user
            });
        });
};

exports.listSevenDays = function (req, res) {
    var data = new Date(Date.now());
    data.setHours(0,0,0,0);

    var targetDate = new Date(Date.now());
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23,59,59,0);

    var query = Tarefa.find({
        data: {
            $gte: data,
            $lt:targetDate
        }});

    query.sort({data: 'asc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('proximos', {
                tarefas: results,
                user: req.user
            });
        });
};

exports.listCalendar = function (req, res) {
    // var date = new Date();
    // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    var query = Tarefa.find();

    // var query = Tarefa.find({
    //     data: {
    //         $gte: firstDay,
    //         $lt:lastDay
    //     }});

    query.sort({data: 'asc'})
        .exec(function (err, results) {
            res.render('calendario', {
                tarefas: results,
                user: req.user
            });
        });
};


exports.create = function (req, res) {
    var entry = new Tarefa({
        titulo: req.body.titulo,
        data: req.body.data,
        created_at: req.body.data,
        updated_at: req.body.data
    });

    var Data = new Date(entry.data);

    entry.data = Data;

    entry.save(function (err) {
        console.log(err);
    });
    console.log("objeto salvo");
    res.redirect(301, '/home');
};

exports.deleteTask = function (req, res) {

    var query = Tarefa.find({_id: req.params.id});

    query.findOneAndRemove(function (err) {
        if (err){
            console.log(err);
        }else{
            res.render('delete', {user: req.user});
        }
    });


exports.getTarefa = function (req, res) {
    res.render('/index', {user: req.user});
};

};