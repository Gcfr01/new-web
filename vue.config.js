const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // This ensures relative paths for assets
});
