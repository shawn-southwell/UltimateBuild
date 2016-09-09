var User = require('./../models/userModel.js');
var cookieController = require('./../util/cookieController.js');
var configModel = require('./../models/configModel.js');
var cookieController = require('./../util/cookieController');
var sessionController = require('./sessionController.js');
var configTranspiler = require('./transpileController.js');

var userController = {};

userController.createUser = function(req, res, next) {
  var userObj = req.body;
  console.log(userObj);
  User.create(userObj, (err, createdUser) => {
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

//Config Controllers//
//create new user config. 
userController.createConfig = function(req, res) { //create config
  let newConfig = req.body; //set newconfig as config enterd by user 
  configModel.create(newConfig, (data) => { //create new record in db.
    res.send(data);
  });
  res.end();
};

userController.configList = function(req, res) { //query database for all configs matching user's id.
  // console.log('ssid', req.cookies.ssid);
  configModel.find({ refID: req.cookies.ssid }, (err, data) => { //find record then send as response.
    if (err) {
      console.log('in error block')
      console.log(err);
    } else {
      console.log('data', data)
      res.json(data); //send returned data as response. 
    }
  });
};

//find config by id. 
userController.findConfigByID = function(req, res) {
  let conID = req.body._id
  configModel.findOne({ _id: conID }, (err, data) => { //find record then send as response.
    if (err) {
      console.log('in error block')
      console.log(err);
    } else {
      let configJSON = configTranspiler(data)
      console.log(data);
      console.log(configJSON);
      res.send(configJSON); //send returned data as response. 
    }
  });
};

//deletes config from database. 
userController.deleteConfig = function(req, res, next) {
  let record = req.body.userID;
  console.log(record)
    // find record then delete.
  configModel.remove({ _id: record }, (err, data) => {
    if (err) {
      console.log('in error block')
      console.log(err);
    } else {
      console.log('record deleted')
    }
  });
  res.end();
};

module.exports = userController;