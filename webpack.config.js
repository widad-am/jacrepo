const path = require('path');

module.exports = {
  mode: 'production',  // ← ensures default optimizations and silences the warning
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'main.js',
    publicPath: '/assets/js/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(woff2?|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('../fonts', '[name][ext]'),
        },
      },
    ],
  },
};
