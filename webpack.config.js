const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client/index.js'), //where to build dependency graph 
  output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js'
    },
  mode: process.env.NODE_ENV,
  module:{
    rules: [
      {
        test: /\.jsx?/,//if file ends with this text run this 
        exclude: /(node_modules|bower_components)/,
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
  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/api/leaders': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
};