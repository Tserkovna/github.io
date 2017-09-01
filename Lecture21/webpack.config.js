const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin'); 
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry : [
    './src/js/app.ts',
    './src/scss/styles.scss'
  ],
  output: {
    path: `${__dirname}/build`,
    filename: 'app.js'
  },
  module: {
    rules: [ 

      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre',
        options: {
          configuration: {
            rules: {
              quotemark: [true, 'double']
            }
          },
          configFile: false,
          emitErrors: false,
        }
      },

      { 
        test: /\.ts?$/, loader: 'ts-loader' 
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }

    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/index.html'
    }]),

    new StyleLintPlugin({
      configFile: 'stylelint.json',
      context: 'src/scss',
      files: '*.scss',
      failOnError: false,
      quiet: false,
    }),

    new ExtractTextPlugin("styles.css"),

    new WebpackCleanupPlugin({
      preview: true,
    })
 
  ]
}