var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  //consider changing the entry point
  entry: './client/src/app.jsx',
  output: { path: __dirname, filename: '/client/build/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};