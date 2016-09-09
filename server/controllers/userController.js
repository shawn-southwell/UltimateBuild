'use strict';

var User = require('./../models/userModel.js');
var cookieController = require('./../util/cookieController.js');
var configModel = require('./../models/configModel.js');
var cookieController = require('./../util/cookieController');
var sessionController = require('./sessionController.js');
var userController = {};

userController.createUser = function(req, res, next) {
    var userObj = req.body;
    User.create(userObj, (err,createdUser) => {
      if (err) {
        console.log('in error block')
        console.error(err);
        console.log('error in creating user');
      } else {
        console.log('in else of creation')
        res.userId = createdUser['_id'];
        res.USERNAME = req.body.username;
        next();   
    }
  })
};

userController.verifyUser = function(req, res, next) {
  var password = req.body.password;
  var username = req.body.username;
  User.findOne({ username: username }, (err, person) => {
    if (err) {
      console.error('Woah, so sad, there was an error verifying the user. :[', err);
      console.log('error in verification');
    } else {
      if (person[password] === password) {
        next();

      }
    }
  })
}

userController.createConfig = function(req, res) {
  console.log('req findconfigbyid', req.body);
  let newConfig = req.body;
  //find record then send as response.
  configModel.create(newConfig, (data) => {
    res.send(data);
  })
};

//find config by id. 
//incomplete, need database implemented before testing. 
userController.findConfigByID = function(req, res) {
  console.log('req findconfigbyid', req.body);
  res.end();
  //find record then send as response.
  configModel.findOne(req.body, (data) => {
    console.log('data', data)
    res.json(data);
  });
};

//deletes config from database. 
//incomplete, need database implemented before testing. 
userController.deleteConfig = function(req, res, next) {
  let record = req.body.userID;
  console.log('req', req.body.data)
    //find record then delete.
  configModel.findOne({}, (data) => {
    res.send(record + 'deleted');
    next();
  });
  //check database to confirm it is deleted. will remove this later. 

};

module.exports = userController;