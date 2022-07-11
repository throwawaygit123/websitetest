<template>
  <div class="pagemiss">
    <h1>Page missing....</h1>
  </div>
</template>
<script>
export default {
  methods:{
    fn1(){
      console.log(111)
      this.$i18n.locale='zh-CN'
    },
    fn2(){
      console.log(222)
      this.$i18n.locale='en-US'

    }
  }
}
</script>
