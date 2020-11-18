import Vue from 'vue'
import axios from 'axios'
// nprogress加载动画
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 配置请求根路径
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.defaults.baseURL = 'http://192.168.1.104:3000/'
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 在request 拦截器中，展示进度条，添加请求头信息
axios.interceptors.request.use(
  config => {
    NProgress.start()
    // 为请求头对象，添加token验证的Authorization字段
    config.headers.Authorization = window.sessionStorage.getItem('token')
    // 在最后必须 return config
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response 拦截器中，隐藏进度条
axios.interceptors.response.use(
  config => {
    NProgress.done()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios

// 导出一个方法
export default function (method, url, data = null) {
  method = method.toLowerCase();
  if (method == 'post') {
      return axios.post(url, data)
  } 
  else if (method == 'get') {
      return axios.get(url, { params: data })
  }
  else {
    console.log('未知方法'+method)
    return false
  }
}