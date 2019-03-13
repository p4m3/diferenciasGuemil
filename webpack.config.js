const path = require('path');


module.exports = {
  entry: {
    index: './js/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'guemil.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  },
};
