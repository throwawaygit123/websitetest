const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    host: '10.10.0.71',
    // https:true,
      port: 8080,
      client: {
        webSocketURL: 'wss://10.10.0.71:8080/wss',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
  },
  transpileDependencies: true
})
