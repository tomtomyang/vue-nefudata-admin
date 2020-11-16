<template>
  <el-row>
    <el-col :span="4">
      <el-card class="view-tree">
          <el-tree :data="data2"></el-tree>
      </el-card>
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
export default {
  data () {
    return {
        checkList: [],
        data2: [{
          label: '数据库 1',
          children: []
        }, {
          label: '数据库 2',
          children: []
        }, {
          label: '数据库 3',
          children: []
        }, {
          label: '数据库 4',
          children: []
        }, {
          label: '数据库 5',
          children: []
        }],
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
  }
}
</script>
<style lang="less" scoped>
.view-tree {
    height: 580px;
    margin-right: 20px;
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
