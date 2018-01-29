module.exports = {
  devTest: { //部署到测试服务器上
    remotePath: '/opt/nginx/html/tcloud/vuetcloud/', //部署到服务器的路径
    host: '172.18.1.8', //ip地址
    user: 'root', //帐号
    pass: 'tcloud', //密码
    port: 22 //端口
  },
  devDist: { //部署正式服务器上
    remotePath: '/opt/nginx/html/tcloud/vuetcloud/', //部署到服务器的路径
    host: '172.18.1.8', //ip地址
    user: 'root', //帐号
    pass: 'tcloud', //密码
    port: 22 //端口
  },
  publicPath: '/dist/', //程序在网站根路径地址 (打包文件夹路径)
  buildPath: './', //打包相对路径
  target: 'http://10.100.2.52' //连接的服务器地址 (代理服务)
}