var sessionController = require('../controllers/sessionController.js');
var cookieController = {};

cookieController.setSSIDCookie = function(req, res, next) {
  console.log('in SSID cookie controller')
  res.cookie('ssid', res.userId, {httpOnly: false});
  console.log('inside setSSIDCooki, this is the cookie',res.userId);
  next();
}

module.exports = cookieController;














module.exports = cookieController;