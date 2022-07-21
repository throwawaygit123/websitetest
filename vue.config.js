const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    host: '192.168.3.9',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'wss://192.168.3.9:8080/wss',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  transpileDependencies: true
})
