const { merge } = require('webpack-merge');
const common = require('./base.conf.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.js',
    },
  },
});