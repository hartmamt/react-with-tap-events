var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');

module.exports = {
  entry: {
    React: ['./src/react-patch.js'],
  },
  output: {
    libraryTarget: 'var',
    library: '[name]',
    path: __dirname + '/build/',
    publicPath: 'http://localhost:8080/build/',
    filename: 'react-with-addons.js',
  },
  devtools: 'eval',
  plugins: [],
};
