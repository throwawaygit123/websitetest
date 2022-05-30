<template>
  <div class="one">
    <div class="one1">
      <el-row style="float:left;width:500px">
        <p
          style="color:#eb5350; float:left;display:inline-block;width:200px;line-height:normal;font-weight:600;font-size:20px;"
        >{{$t("m.morning")}}</p>
      </el-row>
      <el-row style="float:right;margin-bottom:15px;width:250">
        <router-link to style="text-decoration: none; color: white">
          <el-button
            type="primary"
            plain
            :style="selfstyle"
            style="float:left; text-align: center;display:block; "
          >{{ $t("m.myaccount") }}</el-button>
        </router-link>
        <el-button
          type="primary"
          plain
          :style="selfstyle"
          style="float:left; text-align: center;display:block;margin-left:5px"
        >{{ $t("m.aboutus") }}</el-button>
      </el-row>
    </div>

    <div class="one2">
      <p style="border-bottom:2px solid black;">{{$t('m.recentpatient')}}</p>
      <ul class="one2-2">
        <li>Wilson</li>
        <li style="margin-left:250px;margin-right :300px;">11:28</li>
        <li>Internal Medicine-Cardiovascular Department</li>
      </ul>
      <ul class="one2-2">
        <li>Alan</li>
        <li  style="margin-left:267px;margin-right :300px;">11:56</li>
        <li>Department of Stomatology</li>
      </ul>
      <ul class="one2-2">
        <li>Jack</li>
        <li style="margin-left:267px;margin-right :300px;">11:32</li>
        <li>Department of Neurology</li>
      </ul>
      <ul class="one2-2">
        <li>Leilani</li>
        <li style="margin-left:253px;margin-right :300px;">10:48</li>
        <li>Internal Medicine-Cardiovascular Department</li>
      </ul>
      <ul class="one2-2">
        <li>Aidan</li>
        <li style="margin-left:260px;margin-right :300px;">10:45</li>
        <li>Department of Stomatology</li>
      </ul>
      <ul class="one2-2">
        <li>Jerome</li>
        <li style="margin-left:248px;margin-right :300px;">10:23</li>
        <li>Internal Medicine-Cardiovascular Department</li>
      </ul>
      <ul class="one2-2">
        <li>Fiona</li>
        <li style="margin-left:263px;margin-right :300px;">10:05</li>
        <li>Children's Department</li>
      </ul>
      <ul class="one2-2">
        <li>Harriet</li>
        <li style="margin-left:258px;margin-right :300px;">9:36</li>
        <li>Department of Stomatology</li>
      </ul>
      <ul class="one2-2">
        <li>Paul</li>
        <li style="margin-left:274px;margin-right :300px;">9:28</li>
        <li>Department of Neurology</li>
      </ul>
      <ul class="one2-2">
        <li>Glen</li>
        <li style="margin-left:273px;margin-right :300px;">9:15</li>
        <li>Children's Department</li>
      </ul>
      <ul class="one2-2">
        <li>Phoebe</li>
        <li style="margin-left:252px;margin-right :300px;">9:13</li>
        <li>Department of Stomatology</li>
      </ul>
      <ul class="one2-2">
        <li>Ben</li>
        <li style="margin-left:280px;margin-right :300px;">9:09</li>
        <li>Children's Department</li>
      </ul>
      <ul class="one2-2">
        <li>Paul</li>
        <li style="margin-left:274px;margin-right :300px;">9:28</li>
        <li>Department of Neurology</li>
      </ul>
      <ul class="one2-2">
        <li>Glen</li>
        <li style="margin-left:273px;margin-right :300px;">9:15</li>
        <li>Children's Department</li>
      </ul>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfstyle: {
					color: "white",
					
          backgroundColor: "#eb5350",
          border:'none'
				}
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style  scoped>
.one{
  background-color: white;
  padding: 5px 5px;
}
.one1 {
  width: 100%;
  height: 50px;
}
.one2 {
  width: 100%;
  height: 500px;
}
.one2-2{
  height: 30px;
  border-bottom: 1px solid #999;
}
.one2-2 li {
  list-style: none;
  line-height: 30px;
  float: left;
}
.one2-2:hover{
  background-color: #f5a9a8;
}
p{
  margin: 0 0;
}
ul{
  margin: 0 0;
}
.el-button--primary.is-plain{
  color:#eb5350;
}
/* .el-button--primary{
  color:blue;
} */
/* .el-button–primary{
color: #fff !important;
background-color: #8B83D2 !important;
border-color: #8B83D2 !important;
}
.el-button–primary:hover{
background-color: #0ABBF9 !important;
border-color: #0ABBF9 !important;
}
.el-button–primary:focus{
background-color: #0ABBF9 !important;
border-color: #0ABBF9 !important;
} */
</style>
