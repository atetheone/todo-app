module.exports = (app) => {
    app.get('/', (req, res) => {
        res.json({msg: 'Welcome to my todo app'})
        console.log('Here is my first message...')
    });

    app.route('/todo').get((req, res) => {
        res.json(
          {todoapp: 'Welcome to my todo app\'s backend'}
        );
    });
};