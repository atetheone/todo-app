const addTodo = require('./app').addTodo;
const getTodos = require('./app').getTodos;

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({msg: 'Welcome to my todo app'})
        console.log('Here is my first message...')
    });

    app.route('/todos').get(async (req, res) => {
        let todos = await getTodos();
        res.json(todos);
    });

    app.post('/addTodo', (req, res) => {
        console.log('task: ' + JSON.stringify(req.body, null, 3))
        let todo = {
            description: req.body.description,
            done: req.body.done
        };
        addTodo(req.body.description, req.body.done, (err, data) => {
            if (err) res.status(400).json(err);
            else {
                res.status(201).json({message: "Todo added successfully", ...data._doc});
            }
        });
        
    });
};