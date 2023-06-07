const { defineConfig } = require('@vue/cli-service')
const config = require('./build/config')
module.exports = defineConfig({
  transpileDependencies: true,
  ...config
})
