
import { merge } from 'webpack-merge';
import common from './base.conf.mjs';

module.exports = merge(common, {
  mode: 'production',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.min.js',
    },
  },
});