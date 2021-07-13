const path = require('path');

const CopyPlugin = require("copy-webpack-plugin");
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');


const ROOT_DIR = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(ROOT_DIR, 'build');

const MANIFEST_FILE = require('../src/manifest.json');
module.exports = {
  target: 'web',
  context: ROOT_DIR,
  entry: {
    action: './src/action/index',
    options: './src/options/index',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      src: path.resolve(ROOT_DIR, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new GenerateJsonPlugin('manifest.json', MANIFEST_FILE),
    new CopyPlugin({
      patterns: [
        {
          from: '**/*.html'
        },
        {          
          from: '**/*.png'
        },
        {          
          from: '**/*.css'
        },
      ].map((p) => ({
        ...p,
        context: 'src/',
      })),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'vue-style-loader'},
          {loader: 'css-loader'},
        ],
      },
    ],
  },
}