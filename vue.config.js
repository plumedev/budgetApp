const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    allowedHosts: 'all',
  },

  publicPath: '/',

  chainWebpack: (config) => {
    config.resolve.symlinks(false);

    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .end();

    config.resolve.alias.set('vue$', 'vue/dist/vue.esm-bundler');
  },
};
