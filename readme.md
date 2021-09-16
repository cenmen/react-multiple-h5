## 参考链接
  ### framework
  - [Webpack 官方文档](https://www.webpackjs.com/concepts/)
  - [html-webpack-plugin 文档](https://github.com/jantimon/html-webpack-plugin#configuration)
  - [webpack4 + react16 多页面架构](https://www.cnblogs.com/leinov/p/9932443.html)
  - [Webpack 搭建 React 开发环境详细步骤](https://www.cnblogs.com/xps-03/p/12421600.html)
  - [webpack-dev-server 配置](https://webpack.js.org/configuration/dev-server/#devserveropen)
  - [webpack5 配置](https://webpack.docschina.org/guides/)
  ### plugin & loader
  - [url-loader 和 file-loader 的区别和使用](https://blog.csdn.net/wu_xianqiang/article/details/104558773)
  - [打包生成 zip](https://github.com/erikdesjardins/zip-webpack-plugin)
  ### document
  - [styled-jsx](https://github.com/vercel/styled-jsx)
  - [react](https://zh-hans.reactjs.org/docs/getting-started.html)
  ### blog
  - [webpack5 打包图片资源](https://www.jianshu.com/p/36e972b19b28)
  - [webpack5 开发环境基本配置](https://blog.csdn.net/zhangyang10d/article/details/115001520)
  - [分享15个 webpack 实用的插件！！！](https://juejin.cn/post/6944940506862485511)
  - [react 项目配置 eslint 总结](https://zhuanlan.zhihu.com/p/84329603)

## Task
  - ~~根据目录自动匹配打包路径~~
  - 开发环境配置
    - 使用图片
    - 使用样式
  - 瀑布流页面 list
  - 生产环境打包及优化
  - eslint
  - premitter

## Process
  1. npm init
  2. cnpm install webpack webpack-cli -D
  3. cnpm install react react-dom -S
  4. 项目目录
  5. 简单新建页面 js
  6. cnpm install html-webpack-plugin -S 新建 template.html
  7. webpack.config.js 多入口输出多 html
  8. config/index.js 多个 html 分别引入对应入口页面文件
  9. babel 处理 react
  11. webpack.dev.config.js 开发环境配置（webpack5 无需 url-loader clean-html-plugin 等处理）
  12. list 页面瀑布流布局实现
  13. 打包输出 zip & 打包优化 optimization。splitChunks

