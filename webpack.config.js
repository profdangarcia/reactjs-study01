const path = require('path');

module.exports = {
  //arquivo com dados de entrada na formatação do JS6
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //arquivo convertido para formato antigo gerado pelo babel+webpack
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [ 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ]
      }, {
        test: /.*\.(gif|jpe?g|png)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ],
  }
};