const mongoose = require('mongoose');
const Todo = require('./todo-schema').todo;

mongoose.connect('http://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, data) => {
    if (err)
        console.log('Unable to connect to the database');
    if (data)
        console.log('Connected successfully to the database')
});

const addTodo = (todo, done) => {

    const todo_elt = Todo({
        done: todo.done,
        desc: todo.desc
    });
    todo_elt.save(
        (err, data) => {
            if (err) console.log({error: 'Error occured'});
            else {
                console.log({success: 'Successsss!! ' + JSON.stringify(data, null, 3)});

                done(null, data);
            }
        }
    );
};

const removeTodo = (id, done) => {

};

const updateTodo = (newTodo, done) => {

};


module.exports = { addTodo, removeTodo, updateTodo };