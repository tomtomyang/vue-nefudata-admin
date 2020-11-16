<template>
<div>
    <el-row>
        <el-col :span="3">
            <el-menu class="tq-menu" router>
                <el-menu-item index="linkMysql">
                    <i class="el-icon-location"></i>
                    <span slot="title">连接mysql</span>
                </el-menu-item>
                <el-menu-item index="visualQuery">
                    <i class="el-icon-location"></i>
                    <span slot="title">可视化查询</span>
                </el-menu-item>
                <el-menu-item index="sqlQuery">
                    <i class="el-icon-location"></i>
                    <span slot="title">sql查询</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <el-card class="tq-main">
                <transition name="fade-transform" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-card>
        </el-col>
    </el-row>
</div>
  
</template>

<script>
export default {
  data () {
    return {
        
    }
  },
  methotq: {
      
  }
}
</script>
<style lang="less" scoped>
.tq-menu {
    min-height: 620px;
}
.tq-main {
    margin-left: 10px;
    min-height: 620px;
}
</style>
