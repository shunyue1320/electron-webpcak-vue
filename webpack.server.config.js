const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  target: 'node',
  entry: { server: './src/server/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new NodemonPlugin()
  ]
}