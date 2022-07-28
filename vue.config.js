const { defineConfig } = require('@vue/cli-service')
let deve =process.env.NODE_ENV
module.exports = defineConfig({
  
  transpileDependencies: true,
  
  // devServer: {
  //       allowedHosts: 'all',
    
  //       client: {

  //     // webSocketURL: 'wss://127.0.0.0:8080/wss'
          
  //     //  webSocketURL: 'wss://127.0.0.0:8080/wss'
      

  //       }
    
  //     },
})

// if (process.env.NODE_ENV !== "development") {    //开发环境
//   // console.log(1)
//   webSocketURL: 'wss://127.0.0.0:8080/wss'
//   // console.log(1)
// } else {  //生产环境
//   console.log(2)
//   return
// }