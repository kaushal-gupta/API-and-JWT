const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());
// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
