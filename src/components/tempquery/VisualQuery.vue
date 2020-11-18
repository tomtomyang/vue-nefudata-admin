<template>
  <el-row>
    <el-col :span="4">
      <div class="db-menu">
          <div class="menu-block" v-for="(item, index) in mysqlDbList" :key="index">
            <el-button type="info" size="small" @click="showView( item )">{{item}}</el-button>
          </div>
      </div>
    </el-col>
    <el-col :span="20">
        <el-card style="margin-bottom:10px">
            <div slot="header" class="clearfix">
            <span>选择查询字段</span>
            <el-button style="float: right" type="primary" size="mini">确定</el-button>
            </div>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="字段1"></el-checkbox>
                <el-checkbox label="字段2"></el-checkbox>
                <el-checkbox label="字段3"></el-checkbox>
                <el-checkbox label="字段4"></el-checkbox>
                <el-checkbox label="字段5"></el-checkbox>
                <el-checkbox label="字段6"></el-checkbox>
                <el-checkbox label="字段7"></el-checkbox>
            </el-checkbox-group>
        </el-card>
        <el-card>
            <div slot="header" class="clearfix">
                <span>查询结果</span>
            </div>
            <el-table
                :data="tableData"
                style="width: 100%"
                height="380">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
        </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { mysqlTable } from '../../api/dbmanage_api'

export default {
  data () {
    return {
        checkList: [],
        mysqlDbList: [],
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  created () {
    // 发送获取所有表列表请求
    mysqlTable({'prefix':'test'}).then(res => {
      console.log(res.data.Data)
      // 如果状态码为1 说明查询成功 提示并展示信息
      if (res.data.Meta.Status == 1) {
        this.$message.success(res.data.Meta.Msg)
        this.mysqlDbList = res.data.Data
      }
      // 如果状态码为0 说明未登录数据库 提示并跳转登录数据库页面
      else if (res.data.Meta.Status == 0) {
        this.$message.error(res.data.Meta.Msg)
        this.$router.push('/dbManage/dbConnect/mysqlConn')
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
}
</script>
<style lang="less" scoped>
.db-menu {
    height: 620px;
    margin-right: 10px;
}
.transfer-footer {
    margin-left: 5px;
}
.view-transfer {
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-table {
    margin-top: 0;
    max-height: 360px;
    overflow-y: auto;
}
</style>
