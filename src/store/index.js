import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import test_x from './modules/test_x'
import dbmanage_x from './modules/dbmanage_x'

// 创建store对象
const store = new Vuex.Store({
  // 唯一的公共数据源
  state: {
    count: 0,
    menuActivePath: ''
  },
  // 计算部件
  // getter可以对state中的数据进行加工计算处理，形成新的数据
  // store中的数据发生变化后，getter包装出来的数据也会随之变化
  // 
  getters: {
    showCount(state) {
      return '当前最新的数量是' + state.count + '个'
    }
  },
  // 同步事件
  // 只有mutation中定义的函数才有权力修改state中的数据
  mutations: {
    add(state) {
      state.count++
      console.log(state.count)
    },
    add2(state) {
      state.count += 2
      console.log(state.count)
    }
  },
  // 异步事件
  // 在action中不能直接修改state中的数据，需要调用mutation修改
  actions: {
    addAsync(context) {
      context.commit('add')
    }
  },
  modules: {
    test_x,
    dbmanage_x
  }
})
// 导出store
export default store