<template>
<!-- 病人管理  Patient management-->
  <div class="personal">
    <el-row style="float:left">
      <router-link to="/patientaddv1" style="text-decoration: none; color: white">
        <el-button type="primary" :style="selfstyle" class="btnper1" plain style="float: left; text-align: center;">{{ $t("m.add") }} Patient</el-button>
      </router-link>
    </el-row>
    <el-input
      v-model="search"
      size="mini"
      style="width:20%;float:right"
      :placeholder="$t('m.ekts')"
    />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" :label="$t('m.patientid')" width="100"></el-table-column>
      <el-table-column prop="admin" :label="$t('m.patientidname')" width="150"></el-table-column>

      <el-table-column prop="name" :label="$t('m.historymedical')" width="230">
        <router-link to="/historymedical">
          <template>
            <el-tag type="warning">{{ $t("m.historymedical") }}</el-tag>
          </template>
        </router-link>
      </el-table-column>
      <el-table-column prop="name" :label="$t('m.testresult')" width="150">
        <router-link to="testresult">
          <template>
            <el-tag type="success">{{ $t("m.clicktoview") }}</el-tag>
          </template>
        </router-link>
      </el-table-column>
      <el-table-column prop="name" :label="$t('m.uaf')" width="230">
        <!-- <router-link to="/historymedical"> -->
        <template>
          <!-- <el-tag type="warning">点击上传</el-tag> -->
          <el-upload
          action="http://localhost:8080"
            class="upload-demo"
            multiple
            :limit="3"
            :show-file-list="true"
          >
            <el-tag  type="primary">{{ $t("m.clickupload") }}</el-tag>
          </el-upload>
        </template>
        <!-- </router-link> -->
      </el-table-column>

      

      <el-table-column prop="address" :label="$t('m.operation')">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            {{
            $t("m.edit")
            }}
          </el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
          >{{ $t("m.examine") }}</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >{{ $t("m.delete") }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="margin-top:20px;float:left"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search:'',
      selfstyle: {
					color: "white",
          width:'120px',
          height:'40px',
          backgroundColor: "#eb5350",
          border:'none'
        },
      
      tableData: [
        {
          date: "1",
          name: "administrators(管理员)",
          admin: "Cora"
        },
        {
          date: "2",
          name: "doctor(医生)",
          admin: "Debbie"
        },
        {
          date: "3",
          name: "administrators(管理员)",
          admin: "Bonnie"
        },
        {
          date: "4",
          name: "doctor(医生)",
          admin: "Candice"
        },
        {
          date: "5",
          name: "administrators(管理员)",
          admin: "Wesley"
        },
        {
          date: "6",
          name: "doctor(医生)",
          admin: "Donna"
        },
        {
          date: "7",
          name: "administrators(管理员)",
          admin: "Estelle"
        },
        {
          date: "8",
          name: "doctor(医生)",
          admin: "Grace"
        },
        {
          date: "9",
          name: "doctor(医生)",
          admin: "Helena"
        },
        {
          date: "10",
          name: "doctor(医生)",
          admin: "Edith"
        },
        {
          date: "11",
          name: "administrators(管理员)",
          admin: "Carmen"
        },
        {
          date: "12",
          name: "doctor(医生)",
          admin: "Amanda"
        }
      ]
    };
  }
};
</script>

<style scoped>
.personal {
  width: 100% !important;
}
.btnper1:hover{
color: white !important;
  /* border:none !important; */
  /* border:1px solid #999 !important; */
  border:1px solid #f5a9a8 !important;

  background-color: #f5a9a8 !important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{

  background-color: #eb5350 !important;
}
.el-pager li:hover{
  color:#f5a9a8 !important;
}
/* .el-main{
    line-height: 0px;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background-color: #14a17e;
} */
</style>