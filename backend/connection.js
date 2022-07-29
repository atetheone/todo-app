const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
require('dotenv').config();

const main = () => {
    const URI = process.env.MONGO_URI; 
    mongoose.connect(
        URI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },
        (err) => {
            if (err) {
                console.log(err)
            } else  {
                console.log('Connected successfully to the db...')
            }
        }
    );
};

module.exports = main;
