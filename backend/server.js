const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const URI = process.env.MONGO_URI; 
mongoose.connect(
  URI, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
);
const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log('Connected successfully to the db...'));


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan("dev"));

routes(app);


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
