const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production';

const plugins = PRODUCTION
  ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: 'config/index-template.html',
    })
  ]
  : '';

module.exports = {
  entry: './src/index.js',
  plugins,
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js',
  },
  devtool: 'source-map',
  performance: {
    hints: PRODUCTION ? 'warning' : false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
          postcss: [require('autoprefixer')()],
        },
      },
      {
        test: /\.sass/,
        loader: 'css-loader!sass-loader?indentedSyntax',
        exclude: '/node_modules/'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: '/\.(png|gif|jpg|svg)$/',
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      }
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
  },
};
