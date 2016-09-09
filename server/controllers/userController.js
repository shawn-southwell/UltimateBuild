var User = require('./../models/userModel.js');  
var cookieController = require('./../util/cookieController.js');
var Config = require('./../models/configModel.js');
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
        console.log(res.userId,res.USERNAME);
        next();   
    }
})
};

//deletes config from database. 
//incomplete, need database implemented before testing. 
userController.deleteConfig = function(req, res, next) {
  let record = req.body.userID;
  //find record then delete.
  databasePlaceholder.findOne({}).delete();
  //check database to confirm it is deleted. will remove this later. 
  console.log(databasePlaceholder.collection());
  res.send(record + 'deleted');
  next();
};

//find config by id. 
//incomplete, need database implemented before testing. 
userController.findConfigByID = function(req, res, next) {
  let record = req.body.userID;
  //find record then send as response.
  databasePlaceholder.findOne(record).then((data) => {
    res.json();
  });
  next();
}

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

module.exports = userController;