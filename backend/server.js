const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

require('./connection');


app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' | q= ' + JSON.stringify(req.query, null, 2) + ' - ip: ' + req.ip);
  next();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

routes(app);


const listener = app.listen(process.env.PORT || 3001, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
