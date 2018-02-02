import App from '../app'
/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [{
  path: '/',
  component: App,
  children: [{
      path: '/login', //登录
      component: resolve => require(['../pages/login/'], resolve)
    },
    {
      path: '/', //首页
      component: resolve => require(['../pages/index/'], resolve)
    },
    {
      path: '*', //其他页面，强制跳转到登录页面
      component: resolve => require(['../pages/index/'], resolve)
    }
  ]
}]