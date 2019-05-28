const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');
const users = require('./controllers/userController');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.listen(3000, function () {
    console.log('API iniciada na porta 3000')
    
});

