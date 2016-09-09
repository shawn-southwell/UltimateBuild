var User = require('./../models/userModel.js');
var cookieController = require('./../util/cookieController.js');
var configModel = require('./../models/configModel.js');
var cookieController = require('./../util/cookieController');
var sessionController = require('./sessionController.js');
var userController = {};

userController.createUser = function(req, res, next) {
  var userObj = req.body;
  User.create(userObj, (err, createdUser) => {
    if (err) {
      console.error(err);
    } else {
      res.userId = createdUser['_id'];
      res.USERNAME = req.body.username;
      next();
    }
  })
};

//find config by id. 
//incomplete, need database implemented before testing. 
userController.findConfigByID = function(req, res, next) {
  console.log(req.body);
  //find record then send as response.
  configModel.findOne(req.body).then((data) => {
    console.log('data', data)
    res.json(data);
  });
  next();
}

//deletes config from database. 
//incomplete, need database implemented before testing. 
userController.deleteConfig = function(req, res, next) {
  let record = req.body.userID;
  console.log('req', req.body)
    //find record then delete.
  configModel.findOne({});
  //check database to confirm it is deleted. will remove this later. 
  res.send(record + 'deleted');
  next();
};

userController.verifyUser = function(req, res, next) {
  var password = req.body.password;
  var username = req.body.username;
  User.findOne({ username: username }, (err, person) => {
    if (err) {
      console.error('Woah, so sad, there was an error verifying the user. :[', err);
      return;
    } else {
      if (person[password] === password) {
        next();
        return;
      }
    }
  })
}

module.exports = userController;