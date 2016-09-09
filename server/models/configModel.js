var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var configSchema = new Schema({
  entry: { type: String, required: true },
  output: { type: String, required: true },
  test: { type: String, required: true },
  loader: { type: String, required: true },
  exclude: { type: String, required: true },
  presets: { type: String, required: true },

})

module.exports = 'configModel';