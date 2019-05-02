const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("@babel/register");

const config = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'bundle.js'
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './dev/index.html',
        inject: 'body'
    })
  ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dev'),
    port: 3000,
    inline: true
  },
  watch: true,
  devtool: 'source-map',
};

module.exports = config;