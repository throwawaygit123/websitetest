const { defineConfig } = require('@vue/cli-service')
let deve =process.env.NODE_ENV
module.exports = defineConfig({
  
  transpileDependencies: true,
  devServer: {
        allowedHosts: 'all',
        client: {
            webSocketURL: 'wss://javascript.info/article/websocket/demo/hello',
	          reconnect: false,
	    }
      }

})

