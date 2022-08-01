<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>
// import websocket from '@/js/websocket'
export default{
  name:'App',
created(){
  // websocket.Init('user1')
}
}

  // el:'#app',
  // created:function () {
  //   this.initConn()
  // },
  // data:{
  //   server:"wss://javascript.info/article/websocket/demo/hello",
  //   socket:null
  // },
  // methods:{
  //   initConn(){
  //     let socket = new WebSocket(this.server)
  //     this.socket=socket
  //     this.socket.onmessage=this.OnMessage;
  //     this.socket.onOpen=this.OnOpen
  //   },
  //   OnOpen(){
  //     console.log('建立成功')
  //   },
  //   OnMessage(e){
  //     console.log(e)
  //   }
  // },
</script>

<style>
body{
  background-color: #e9eef3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  padding: 0 !important;
  margin: 0 !important;
  /* overflow: hidden; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.el-table .cell{
  text-align: center !important;
}
.el-select .el-input__inner:focus{
  border:1px solid #eb5350 !important;
}
.el-input__inner:focus{
  border:1px solid #eb5350 !important;
}
.el-select-dropdown__item{
  color:#eb5350 ;
}
::-webkit-scrollbar{

    display:none !important; 

}
</style>
