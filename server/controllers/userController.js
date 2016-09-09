var User = require('./userModel');
var cookieController = require('./../util/cookieController');
var sessionController = require('sessionController');
var userController = {};

userController.createUser = function(req, res, next) {
  var userObj = req.body;
  User.create(userObj, (err, createdUser) => {
    if (err) {
      console.error(err);
      return;
    } else {
      res.userId = createdUser['_id'];
      next();
      return;
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

module.exports = 'userController';