var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: false
    },
    data: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Task', taskSchema);