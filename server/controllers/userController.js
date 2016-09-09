var User = require('./../models/userModel.js');  
var cookieController = require('./../util/cookieController.js');
var sessionController = require('sessionController');
var userController = {};

userController.createUser = function(req, res, next) {
    var userObj = req.body;
    User.create(userObj, (err,createdUser) => {
    if (err) {
        console.error(err);
    } else {
        res.userId = createdUser['_id'];
        res.USERNAME = req.body.username;
        next();
        
    }
})
};

userController.verifyUser = function(req, res, next) {
    var password = req.body.password;
    var username = req.body.username;
    User.findOne({username: username}, (err, person) => {
        if (err){
            console.error('Woah, so sad, there was an error verifying the user. :[', err);
            return;
        } else {
            if (person.password === password){
                next();
                return;
            }
        }
    })
  }


  module.exports = 'userController';