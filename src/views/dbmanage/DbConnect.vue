<template>
<div>
    <el-row>
        <el-col :span="3">
            <el-menu class="dc-menu" router>
                <el-menu-item index="oracleConn">
                    <i class="iconfont icon-oracle"></i>
                    <span slot="title">连接oracle</span>
                </el-menu-item>
                <el-menu-item index="mysqlConn">
                    <i class="iconfont icon-mysql"></i>
                    <span slot="title">连接mysql</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <el-card class="dc-main">
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
.dc-menu {
    min-height: 670px;
}
.dc-main {
    margin-left: 10px;
    min-height: 670px;
}
</style>
