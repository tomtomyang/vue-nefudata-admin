<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-setting"></i> 主题管理</span>
                <theme-setting></theme-setting>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-setting"></i> 层级管理</span>
                <class-setting></class-setting>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import themeSetting from '../../components/setting/themeSetting'
import classSetting from '../../components/setting/classSetting'

export default {
    components: {
        themeSetting,
        classSetting
    },
    data() {
      return {
      };
    }
}
</script>

<style lang='less' scoped>

</style>
