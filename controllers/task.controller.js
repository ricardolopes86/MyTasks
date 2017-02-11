var Tarefa = require('../models/task');

exports.list = function (req, res) {
    var query = Tarefa.find();

    query.sort({data: 'desc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('index', {
                tarefas: results,
                user: req.user
            });
        });
};

exports.listToday = function (req, res) {
    var data = new Date(Date.now);
    var query = Tarefa.find({data: data});

    console.log(query);

    query.sort({data: 'desc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('hoje', {
                tarefas: results,
                user: req.user
            });
        });
};

exports.listSevenDays = function (req, res) {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    var query = Tarefa.find( {'$gte': Date.now() , '$lt': targetDate});

    query.sort({data: 'desc'})
        .limit(10)
        .exec(function (err, results) {
            res.render('proximos', {
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
    console.log(entry);

    var Data = new Date(entry.data);

    entry.data = Data;
    console.log(entry.data+"\n"+entry.updated_at+"\n"+entry.created_at);

    entry.save(function (err) {
        console.log(err);
    });
    console.log("objeto salvo");
    res.redirect(301, '/home');
};

exports.getTarefa = function (req, res) {
    res.render('/index', {user: req.user});
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


};