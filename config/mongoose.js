const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/codeial_development');

const db = mongoose.connection;
mongoose.set('strictQuery', false)
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;