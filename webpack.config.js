const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'electron',
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/build/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['css?sourceMap']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?modules', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.(jpg|png)$/,
        loaders: [
          'url?limit=10000&name=../build/img/[hash].[ext]'
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=../build/fonts/[hash].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=../build/fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
