## 参考链接
  ### document
  - [webpack5](https://webpack.docschina.org/guides/)
  - [webpack5 命令行接口（CLI）](https://webpack.docschina.org/api/cli/#environment-options)
  - [styled-jsx](https://github.com/vercel/styled-jsx)
  - [react](https://zh-hans.reactjs.org/docs/getting-started.html)
  - [eslint 规则](http://eslint.cn/docs/rules/)
  - [babel](https://babel.docschina.org/docs/en/)
  ### plugin & loader
  - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#configuration)
  - [webpack-dev-server 配置](https://webpack.js.org/configuration/dev-server/#devserveropen)
  - [zip-webpack-plugin](https://github.com/erikdesjardins/zip-webpack-plugin)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  ### blog
  - [webpack 搭建 eeact 开发环境详细步骤](https://www.cnblogs.com/xps-03/p/12421600.html)
  - [webpack4 + react16 多页面架构](https://www.cnblogs.com/leinov/p/9932443.html)
  - [webpack5 打包图片资源](https://www.jianshu.com/p/36e972b19b28)
  - [webpack5 开发环境基本配置](https://blog.csdn.net/zhangyang10d/article/details/115001520)
  - [分享15个 webpack 实用的插件！！！](https://juejin.cn/post/6944940506862485511)
  - [url-loader 和 file-loader 的区别和使用](https://blog.csdn.net/wu_xianqiang/article/details/104558773)
  - [react 项目配置 eslint 总结](https://zhuanlan.zhihu.com/p/84329603)
  - [eslint 命令行使用](https://www.jianshu.com/p/4133063d1785)
  - [eslint + prettier 代码规范实践](https://www.jianshu.com/p/dd07cca0a48e)
  - [使用 eslint + prettier 来统一前端代码风格](https://segmentfault.com/a/1190000015315545)

## Skill
  - webpack5
  - react
  - axios
  - styled-jsx
  - eslint
  - prettier

## Task
  - 初始化项目&安装需要依赖
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
  10. webpack.dev.config.js 开发环境配置（webpack5 无需 url-loader clean-html-plugin 等处理）
  11. list 页面瀑布流布局实现
  12. 打包输出 zip & 打包优化 optimization.splitChunks
  13. 配置 eslint + prettier


## Git command
### 参考链接
  - [每个开发者都应该知道的 10 个 Git 命令](https://chinese.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/)
  - [撤销 commit](https://www.cnblogs.com/lfxiao/p/9378763.html)
  - [git reset 和 git revert 的理解](https://vue3js.cn/interview/git/git%20reset_%20git%20revert.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)

  