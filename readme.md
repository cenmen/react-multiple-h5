## 参考链接
  ### document
  - [webpack5](https://webpack.docschina.org/guides/)
  - [styled-jsx](https://github.com/vercel/styled-jsx)
  - [react](https://zh-hans.reactjs.org/docs/getting-started.html)
  - [eslint 规则](http://eslint.cn/docs/rules/)
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

  基于仓库中项目的最新版本生成一个相同的副本，并将其保存到你的计算机中 
  ``` 
  git clone <https://name-of-the-repository-link>
  ```
  在本地创建一个分支  
  ```
  git branch <branch-name>
  ```
  查看分支  
  ```
  git branch or git branch --list
  ```
  删除分支  
  ```
  git branch -d <branch-name>
  ```
  切换到该分支
   1. 在切换之前，必须先提交或保存当前分支中的更改
   2. 你要切换的分支应该存在于你的本地  
  ```
  git checkout <name-of-your-branch>
  ```
  同时创建并切换到分支  
  ```
  git checkout -b <name-of-your-branch>
  ```
  删除分支  
  1. 当前分支是否是最新的
  2. 是否有任何要提交、推送或拉取的东西
  3. 是否有暂存的、未暂存的或未跟踪的文件
  4. 是否有创建的、修改的或删除的文件
  ```
  git status
  ```
  暂存文件  
  ```
  git add <file>
  ```
  保存本地更改
  ```
  git commit -m "commit message"
  ```
  将分支上已提交的更改推送到远程仓库（-u 为新分支）
  ``` 
  git push -u <remote> <branch-name>
  ```
  git pull 命令用于从远程仓库获取更新。此命令是 git fetch 和 git merge 的组合。这意味着，当我们使用 git pull 时，它将从远程仓库（git fetch）获取更新，并立即在本地应用最新更改（git merge）。
  1. 这个操作可能会导致冲突，你需要手动解决。
  ```
  git pull <remote>
  ```
  查看远程仓库地址
  ```
  git remote -v
  ```
  将本地仓库与远程仓库地址关联
  ```
  git remote add origin \<address>
  ```
  查看提交记录信息
  ```
  git log
  ```
  撤销到指定版本
  - --mixed（默认）：默认的时候，只有暂存区变化
  - --hard参数：如果使用 --hard 参数，那么工作区也会变化
  - --soft：如果使用 --soft 参数，那么暂存区和工作区都不会变化
  ```
  git reset <ID>
  ```
  把这次撤销，作为一次最新的提交
  ```
  git revert <ID>
  ```