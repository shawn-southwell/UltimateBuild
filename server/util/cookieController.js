var sessionController = require('./../controllers/sessionController/');
var cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;


function setSSIDCookie(req, res, next) {
  res.cookie('ssid', res.userId, {httpOnly: true})
  next();
}
















module.exports = cookieController;