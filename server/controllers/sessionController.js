var Session = require('./../models/sessionModel');

var sessionController = {};

sessionController.isLoggedIn = function(req, res, next){
    Session.findOne({cookieId: req.cookies.ssid}, (err,person) => {
        if (err){
            console.error('There was an error in sessionController.isLoggedIn', err);
            return;
        } else {
            console.log('this person exists in the database',person);
            next();
        }
    })
}

sessionController.startSession = function(req, res, next) {
  Session.create({cookieId: res.userId},function(err,sessionCreated){
  	if (err) {
        console.log('inside start session')
  		console.error(err);
  	} else {
  		next();
  	}
  });
};

sessionController.endSession = function(req, res, next){
    Session.remove({cookieId: req.cookies.ssid}, function(err, sessionRemoved){
        if (err){
            console.log('there was an error removing this session');
        } else {
            console.log('record deleted');
        } 
    })
    res.clearCookie('ssid');
    next()
}

module.exports = sessionController;