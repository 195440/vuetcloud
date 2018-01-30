## 前言
```
基于Vue2.5.0、vue-router3.0.0、vuex3.3.0、jquery2.2.4、bootstrap4.0.0 ......
```

## 源码说明
### 项目目录说明
```
.
|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- index.js                 // 加载各种公共组件
|       |-- header.vue               // 头部公共组件
|       |-- left.vue                   // 左公共组件
|       |-- right.vue                 // 右公共组件
|       |-- footer.vue               // 尾部公共组件
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- routes.js                // 配置页面路由
|   |-- css                          // 各种css文件
|       |-- common.css               // 全局通用css文件
|   |-- iconfont                     // 各种字体图标
|   |-- img                          // 公共图片
|   |-- less                         // 各种less文件
|       |-- common.less              // 全局通用less文件
|   |-- pages                        // 页面组件
|       |-- index                    // 主页
|       |-- login                    // 登录
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|       |-- info.js                  // 用户store
|   |-- template                     // 各种html文件
|       |-- index.html               // 程序入口html文件
|   |-- js                           // 公共的js
|       |-- jquery-vendor.js         // 特殊处理jquery为全局变量, 以供后续jquery插件使用
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- .babelrc                         // ES6语法编译配置
|-- .gitignore                       // git提交过滤配置
|-- gulpfile.js                      // 启动，打包，部署，自动化构建
|-- webpack.config.js                // 程序打包配置
|-- server.js                        // 代理服务器配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```

### 开发环境依赖模块说明
#### webpack相关模块
```
webpack                               // 用来构建打包程序
webpack-dev-server                    // 开发环境下，设置代理服务器
html-webpack-plugin                   // html 文件编译
url-loader                            // 图片  转化成base64格式
file-loader                           // 字体  将字体文件打包
css-loader                            // css  生成
less                                  // css  预处理器less
less-loader                           // css  预处理器less的webpack插件
style-loader                          // css  插入到style标签
autoprefixer-loader                   // css  浏览器兼容性问题处理
babel-core                            // ES6  代码转换器
babel-loader                          // ES6  代码转换器，webpack插件
babel-plugin-transform-object-assign  // ES6  Object.assign方法做兼容处理
babel-preset-es2015                   // ES6  代码编译成现在浏览器支持的ES5
babel-preset-stage-0                  // ES6  ES7要使用的语法阶段
vue-loader                            // vue  组件编译
babel-helper-vue-jsx-merge-props      // vue  jsx语法编译
babel-plugin-syntax-jsx               // vue  jsx语法编译
babel-plugin-transform-vue-jsx        // vue  jsx语法编译
```

#### gulp相关模块
```
gulp                                  // 用来构建自动化工作流
gulp-sftp                             // 将代码自动部署到服务器上
del                                   // 代码部署成功后，删除本地编译的代码
```
#### 其他模块
```
cross-env                             // 解决跨平台设置NODE_ENV的问题
```
### 生产模块依赖说明
#### vue全家桶
```
vue                                   // 构建用户界面的
vue-router                            // 路由
vuex                                  // 组件状态管理
```

### 页面说明
```
/login                                // 登录
/                                     // 首页
*                                     // 强制到首页判断
```

### 运行程序 
```
# 安装依赖
npm install
# 本地调试
npm run dev
# 只打包到dist文件夹
npm run dist
# 发布到测试服务器
npm run test
# 发布到生成环境
npm run build
http://localhost:3000/dist/
```
