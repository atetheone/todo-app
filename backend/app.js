const Todo = require('./todo-schema');

const addTodo = async (desc, status, done) => {

    const todo_elt = new Todo({
        description: desc,
        done: status
    });

    todo_elt.save((err, data) => {
        if (err) {
            done(null, {error: err});
        } if (data) {
            done(null, data);
        }
    });
};

const removeTodo = (id, done) => {

};

const updateTodo = (newTodo, done) => {

};
 
const  getTodos = async () => {
    let todos;
    try {
        todos = await Todo.find();
    } catch (err) {
        console.log(err);
    }
    return todos;
} 


module.exports = { addTodo, removeTodo, updateTodo, getTodos };