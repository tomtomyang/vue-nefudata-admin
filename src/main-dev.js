import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入normalize样式
import 'normalize.css/normalize.css'
// 导入elementUI、axios、quillEditor插件
import './plugins/element.js'
import './plugins/axios.js'
import './plugins/quillEditor.js'
// 导入全局样式
// import './assets/styles/global.less'
import './assets/styles/transition.less'
// 导入全局js
import './utils/directives.js'
import './utils/filters.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入表格树
import TreeTable from 'vue-table-with-tree-grid'
Vue.component('tree-table', TreeTable)

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 挂载路由
  router,
  // 挂在vuex的store对象
  store,
  // 渲染根组件
  render: h => h(App)
})
