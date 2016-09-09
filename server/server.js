'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const transpileConfig = require('./controllers/transpile_config_form.js');
const userController = require('./controllers/userController.js');
const cookieController = require('./util/cookieController.js');
const sessionController = require('./controllers/sessionController.js');

const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/test' : 'mongodb://localhost/dev';
mongoose.connect(mongoURI);

app.use(express.static(path.join(__dirname, '../client/')));
//app.use(express.static(path.resolve(__dirname + '../client/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})

app.post('/createconfig', userController.createConfig);

app.post('/configbyid', userController.findConfigByID);

app.post('/deleteconfig', userController.deleteConfig);

//app.post to signup should:
//creater a user
//setSSIDcookie,
//start a session
//send a 200 response to the client
//on success, send client object 
//with client username and username value
app.post('/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {console.log('before end'); res.end();});


app.post('/login',
  // userController.verifyUser,
  // cookieController, setSSIDcookie,
  // sessionController.startSession,
  (req, res) => res.end()
)

app.listen(9090, () => console.log('listening on port 9090'));