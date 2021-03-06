module.exports = {
  entry: [
    './client/src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/\,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  output: {
    path: __dirname + './client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist'
  }
}

