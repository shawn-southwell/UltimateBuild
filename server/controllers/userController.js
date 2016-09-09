var User = require('./userModel');  ``
var cookieController = require('./../util/cookieController');
var sessionController = require('sessionController');
var userController = {};

userController.createUser = function(req, res, next) {
		var userObj = req.body;
	  	User.create(userObj, (err,createdUser) => {
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

  module.exports = 'userController';