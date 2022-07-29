import path from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from "copy-webpack-plugin";
import GenerateJsonPlugin from 'generate-json-webpack-plugin';
import { readFile } from 'fs/promises';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT_DIR = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(ROOT_DIR, 'build');

// import MANIFEST_FILE from '../src/manifest.json';
const MANIFEST_FILE = JSON.parse(await readFile(new URL('../src/manifest.json', import.meta.url)));
export default  {
  target: 'web',
  context: ROOT_DIR,
  entry: {
    actions: './src/actions/index',
    options: './src/options/index',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      actions: path.resolve(ROOT_DIR, 'src/actions'),
      options: path.resolve(ROOT_DIR, 'src/options'),
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