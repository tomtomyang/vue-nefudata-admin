<template>
<div>
    <el-row>
        <el-col :span="3">
            <el-menu class="ds-menu" router>
                <el-menu-item index="oracleView">
                    <i class="iconfont icon-chaxun"></i>
                    <span slot="title">查看视图</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="21">
            <el-card class="ds-main">
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
.ds-menu {
    min-height: 670px;
}
.ds-main {
    margin-left: 10px;
    min-height: 670px;
}
</style>
