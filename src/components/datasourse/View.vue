<template>
  <el-row>
    <el-col :span="4">
      <el-card class="view-tree">
          <el-tree :data="data2"></el-tree>
      </el-card>
    </el-col>
    <el-col :span="20">
      <el-card class="view-main">
        <div slot="header" class="clearfix">
          <span>选择需要的字段</span>
        </div>
        <el-transfer v-model="value" :data="data" :titles="['剩余字段', '已选择字段']" class="view-transfer">
          <el-button type="primary" class="transfer-footer" slot="right-footer" size="small">确定</el-button>
        </el-transfer>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`
          });
        }
        return data;
    };
    return {
        data: generateData(),
        value: [],
        data2: [{
          label: '视图 1',
          children: []
        }, {
          label: '视图 2',
          children: []
        }, {
          label: '视图 3',
          children: []
        }, {
          label: '视图 4',
          children: []
        }, {
          label: '视图 5',
          children: []
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  methods: {
      handleNodeClick(data) {
        console.log(data);
      }
  }
}
</script>
<style lang="less" scoped>
.view-tree {
  height: 580px;
  margin-right: 20px;
}
.view-main {
  height: 580px;
}
.transfer-footer {
    margin-left: 5px;
}
.view-transfer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
