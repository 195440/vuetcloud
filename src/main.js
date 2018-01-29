import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './config/routes'
import store from './store/'
import components from './components/' //加载公共组件

import $ from './js/jquery-vendor.js' //jQuery引入转换

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import './css/common.css'
import './less/common.less'

//全局变量
global.restpath = 'http://172.18.5.62:5002/mock/25';

Object
  .keys(components)
  .forEach((key) => {
    var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
    Vue.component(`v${name}`, components[key])
  })

Vue.use(VueRouter)

const router = new VueRouter({routes})
router.beforeEach(({
  meta,
  path
}, from, next) => {

  var isLogin = Boolean(store.state.info.id) //true用户已登录， false用户未登录
  if (!isLogin && path !== '/login') {
    store.commit('SET_STORE', {oldRoutePath: path})
    return next({path: '/login'})
  }
  next()

})

new Vue({store, router}).$mount('#t3cloud')