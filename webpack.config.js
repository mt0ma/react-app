const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: {
    app: ['./client/react-ui/app/App.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { 
        test: /\.(ts|tsx)$/, 
        exclude: /node_modules/, 
        loader: 'awesome-typescript-loader'
      },
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:3400'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './dist/index.html'
    })
  ]
}