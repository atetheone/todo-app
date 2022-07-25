const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    done: Boolean,
    desc: String
});

const todo = mongoose.Model('todo', todoSchema);

module.exports = { todo };