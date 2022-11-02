const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description: String,
    done: String,
    dateStart: {
        type: String,
        default: new Date().toISOString()
    }
});

module.exports = mongoose.model('todo', todoSchema);