<template>
  <!-- 首页 home page-->
  <div class="one">
    <div class="one1">
      <el-row style="float:left;width:500px">
        <p
          style="color:#eb5350; float:left;display:inline-block;width:200px;line-height:normal;font-weight:800;font-size:22px;"
        >{{$t("m.morning")}}</p>
      </el-row>
      <el-row style="float:right;margin-bottom:15px;width:250">
        <el-button
          type="primary"
          plain
          :style="selfstyle"
          class="btnindex"
          style="float:left; text-align: center;display:block; "
        >{{ $t("m.myaccount") }}</el-button>
        <el-button
          type="primary"
          plain
          class="btnindex"
          :style="selfstyle"
          style="float:left; text-align: center;display:block;margin-left:5px"
        >{{ $t("m.aboutus") }}</el-button>
        <el-button
          type="primary"
          plain
          class="btnindex"
          :style="selfstyle"
          style="float:left; text-align: center;display:block;margin-left:5px"
        >{{ $t("m.down") }}</el-button>
      </el-row>
    </div>

    <div class="one2">
      <p style="font-size:20px;font-weight:600;">{{$t('m.recentpatient')}}</p>
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="User Name"></el-table-column>
          <el-table-column prop="name" label="Time"></el-table-column>
          <el-table-column prop="address" label="Department"></el-table-column>
        </el-table>
      </template>
      
      <!-- <ul class="one2-2">
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
      </ul>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selfstyle: {
        color: "white",
        width: "120px",
        height: "40px",
        backgroundColor: "#eb5350",
        border: "none"
      },
      tableData: [
        {
          date: "Wilson",
          name: "11:28 am",
          address: "Internal Medicine-Cardiovascular Department"
        },
        {
          date: "Alan",
          name: "11:56 am",
          address: "Department of Stomatology"
        },
        {
          date: "Jack",
          name: "11:32",
          address: "Department of Neurology"
        },
        {
          date: "Leilani",
          name: "10:48",
          address: "Internal Medicine-Cardiovascular Department"
        },
        {
          date: "Aidan",
          name: "10:45 am",
          address: "Department of Stomatology"
        },
        {
          date: "Jerome",
          name: "10:23 am",
          address: "Internal Medicine-Cardiovascular Department"
        },
        {
          date: "Fiona",
          name: "10:05",
          address: "Children's Department"
        },
        {
          date: "Harriet",
          name: "9:36",
          address: "Department of Stomatology"
        },
        {
          date: "Wilson",
          name: "11:28 am",
          address: "Internal Medicine-Cardiovascular Department"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style  scoped>
.one {
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
.one2-2 {
  height: 30px;
  border-bottom: 1px solid #999;
}
.one2-2 li {
  list-style: none;
  line-height: 30px;
  float: left;
}
.one2-2:hover {
  background-color: #f5a9a8;
}
p {
  margin: 0 0;
}
ul {
  margin: 0 0;
}
.el-button--primary.is-plain {
  color: #eb5350;
}

.btnindex:hover {
  color: white !important;
  border: 1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}

thead {
  height: 0px !important;
}
/* .el-table .cell{
 text-align: left !important;
} */
</style>
