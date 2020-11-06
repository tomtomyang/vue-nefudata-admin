<template>
  <div>
    <breadcrumb class="breadcrumb-container" />
    <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb/Bread.vue'
export default {
  components: {
    Breadcrumb,
  },
  data () {
    return {}
  },
}
</script>
<style lang="less" scoped>
</style>
