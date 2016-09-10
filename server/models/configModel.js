var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reqConfig = {
  entry: 'entry',
  output: 'output',
  test: 'test',
  loader: 'loader',
  exclude: 'exclude',
  presets: 'presets',
  refID: 'refID',
};

var configSchema = new Schema({
  entry: { type: String, required: true },
  output: { type: String, required: true },
  test: { type: String, required: true },
  loader: { type: String, required: true },
  exclude: { type: String, required: true },
  presets: { type: String, required: true },
  refID: { type: Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('ConfigCollection', configSchema);