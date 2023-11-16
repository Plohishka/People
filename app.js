const express = require('express');
const UserController = require('./controllers/user.controller');

const app = express();
const bodyParser = express.json();

app.use(bodyParser);

app.post('/', UserController.createUser);
app.get('/', UserController.getAllUser);
app.get('/:userId', UserController.getOneUser);
app.delete('/:userId', UserController.deleteInstance);


module.exports = app;