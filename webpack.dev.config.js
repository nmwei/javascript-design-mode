const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js' 
  },
  module: {
    rules: [{
    test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env'],
          plugins: ['babel-plugin-transform-decorators-legacy']
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    open: true, //浏览器自动打开
    port: 9000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8880'
        //访问hocalhost:9000/api:*时，被代理到hocalhost:8880/api:*
      }
    }
  }
}