<template>
  <el-row>
    <el-col :span="4">
      <div class="view-menu">
          <div class="menu-block" v-for="(item, index) in oracleViewList" :key="index">
            <el-button type="info" size="small" @click="showView( item )">{{item}}</el-button>
          </div>
      </div>
    </el-col>
    <el-col :span="20">
      <el-table :data="viewInfo" style="width: 100%" class="viewInfo-table">
        <el-table-column prop="CHAR_LENGTH" label="CHAR_LENGTH" ></el-table-column>
        <el-table-column prop="COLUMN_ID" label="COLUMN_ID" ></el-table-column>
        <el-table-column prop="COLUMN_NAME" label="COLUMN_NAME"></el-table-column>
        <el-table-column prop="DATA_TYPE" label="DATA_TYPE"></el-table-column>
        <el-table-column prop="NULLABLE" label="NULLABLE"></el-table-column>
    </el-table>
    </el-col>
  </el-row>
</template>

<script>
import { oracleView } from '../../api/dbmanage_api'
import { oracleViewInfo } from '../../api/dbmanage_api'


export default {
  data () {
    return {
      // 数据库视图列表
      oracleViewList: [],
      // 视图详细信息
      viewInfo: [],
    }
  },
  created () {
    // 发送获取所有视图列表请求
    oracleView().then(res => {
      console.log(res.data.Data)
      // 如果状态码为1 说明查询成功 提示并展示信息
      if (res.data.Meta.Status == 1) {
        this.$message.success(res.data.Meta.Msg)
        this.oracleViewList = res.data.Data
      }
      // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
      else if (res.data.Meta.Status == 0) {
        this.$message.error(res.data.Meta.Msg)
        this.$router.push('/dbManage/dbConnect/oracleConn')
      }
      // 如果状态码为其他 提示错误信息
      else {
        this.$message.error(res.data.Meta.Msg)
      }
    }).catch(error => {
      console.log(error)
      this.$message.error('网络错误')
    })
  },
  methods: {
      showView( viewName ) {
        // 发送获取视图信息请求
        oracleViewInfo({'name': viewName}).then( res =>{
          console.log(res.data.Data)
          // 如果状态码为1 说明查询成功 提示并展示信息
          if (res.data.Meta.Status == 1) {
            this.$message.success(res.data.Meta.Msg)
            this.viewInfo = res.data.Data
          }
          // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
          else if (res.data.Meta.Status == 0) {
            this.$message.error(res.data.Meta.Msg)
            this.$router.push('/dbManage/dbConnect/oracleConn')
          }
          // 如果状态码为其他 提示错误信息
          else {
            this.$message.error(res.data.Meta.Msg)
          }
        }).catch(error => {
          console.log(error)
          this.$message.error('网络错误')
        })
        
      }
  }
}
</script>
<style lang="less" scoped>
.view-menu {
  height: 620px;
  margin-right: 20px;
}
.viewInfo-table {
  margin-top: 0;
}

</style>
