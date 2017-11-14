const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
  })


const config = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname + '/dist'),
      filename: 'index_bundle.js'
    },
    resolve: {
      mainFields: ["browser", "module", "main"] //fix for brace
    },
    target: "node",
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname + '/src')
          ]
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/,
          include: [
            path.resolve(__dirname + '/src')
          ]
        }
      ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 9000
    }
  }

  module.exports = config
