import path from 'path';
import { fileURLToPath } from 'url';

import { merge } from 'webpack-merge';
import common from './base.conf.mjs';
import WebExtPlugin from 'web-ext-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT_DIR = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(ROOT_DIR, 'build');

export default merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.js',
    },
  },
  plugins: [new WebExtPlugin({
    startUrl: 'https://www.takealot.com/', 
    sourceDir: BUILD_DIR })],
});