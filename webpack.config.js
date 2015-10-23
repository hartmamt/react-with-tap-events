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
  // resolve: {
  //   alias: {
  //     'react': path.resolve(__dirname, 'src/react-patch.js'),
  //   },
  // },
  devtools: 'eval',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        /(?!node_modules)/,
        path.resolve(__dirname, 'node_modules/material-ui'),
        path.resolve(__dirname, 'node_modules/ih-portal-theme'),
        // /node_modules.(?:ih)/
      ],
    }, {
      test: /\.(?:c|le)ss$/,
      loader: ExtractTextPlugin.extract('style', 'css!less'),
    }, {
      test: /\.(?:pn|jpe?)g$/,
      loader: 'url?limit=8192',
    }],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __TEST__: env === 'test',
      __PRODUCTION__: env === 'production',
      __PROFILE_URL__: JSON.stringify(config.get('getProfileUrl')),
      __USERNAME__: JSON.stringify(config.get('username')),
      __PASSWORD__: JSON.stringify(config.get('password')),
    }),
  ],
};
