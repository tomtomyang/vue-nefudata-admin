<template>
<div>
    <el-row>
        <el-col :span="3">
            <el-menu class="tq-menu" router>
                <el-menu-item index="visualQuery">
                    <i class="iconfont icon-chakan"></i>
                    <span slot="title">可视化查询</span>
                </el-menu-item>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="iconfont icon-sql"></i>
                        <span>sql查询</span>
                    </template>
                    <el-menu-item index="oracleSqlQuery">
                        <i class="iconfont icon-sql"></i>
                        <span slot="title">oracle sql</span>
                    </el-menu-item>
                    <el-menu-item index="mysqlSqlQuery">
                        <i class="iconfont icon-sql"></i>
                        <span slot="title">mysql sql</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="iconfont icon-chakan"></i>
                    <span slot="title">历史记录</span>
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
  methods: {
      
  }
}
</script>
<style lang="less" scoped>
.tq-menu {
    min-height: 670px;
    overflow-x: hidden;
}
.tq-main {
    margin-left: 10px;
    min-height: 670px;
}
</style>
