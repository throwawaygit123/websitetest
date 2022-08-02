<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>


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
