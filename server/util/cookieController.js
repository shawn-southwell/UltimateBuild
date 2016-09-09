var sessionController = require('./../controllers/sessionController.js/');
var cookieController = {};

cookieController.setSSIDCookie = setSSIDCookie;


function setSSIDCookie(req, res, next) {
  res.cookie('ssid', res.userId, {httpOnly: true})
  next();
}
















module.exports = cookieController;