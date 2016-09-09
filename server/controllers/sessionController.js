var Session = require('./../models/sessionModel');

var sessionController = {};

sessionController.isLoggedIn = function(req, res, next){
    Session.findOne({cookieId: req.cookies.ssid}, (err,person) => {
        if (err){
            console.error('There was an error in sessionController.isLoggedIn', err);
            return;
        } else {
            next();
        }
    })
}

sessionController.startSession = function(req,res,next) {
  Session.create({cookieId: res.userId},function(err,sessionCreated){
  	if (err) {
  		console.error(err);
  	} else {
  		next();
  	}
  });
};

module.exports = sessionController;