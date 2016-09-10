'use strict';

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const configTranspiler = require('./controllers/transpileController.js');
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

app.post('/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => res.json({ username: res.USERNAME }));

app.post('/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => res.json({ username: res.USERNAME }))

app.post('/logout',
  sessionController.endSession,
  (req, res) => res.end())

//Config Routes//
app.post('/createconfig', userController.createConfig);

app.get('/configlist', userController.configList);

app.get('/configbyid/:conID', userController.findConfigByID);

app.delete('/deleteconfig/:conID', userController.deleteConfig);

app.listen(9090, () => console.log('listening on port 9090'));