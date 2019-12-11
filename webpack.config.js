'use strict';
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/panel.js'), //where to build dependency graph 
  resolve: {
    extensions: ['.ts', '.tsx', '.js','jsx']
  },
  output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js'
    },
  mode: process.env.NODE_ENV,
  module:{
    rules: [
      {
        test: /\.ts|\.tsx$/, //if file ends with this text run this 
        include: path.resolve(__dirname, './app'),    
        exclude: /node_modules/,
        use: {
          loader:  'ts-loader',
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  devtool: 'inline-source-map'
};