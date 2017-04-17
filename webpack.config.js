const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: {
    index: './lib/index.scss',
  },
  output: {
    filename: './lib/empty.js',
  },
  plugins: [
    new ExtractTextPlugin('./lib/index.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ]
  },
};

module.exports = config;
