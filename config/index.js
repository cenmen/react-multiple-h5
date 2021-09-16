const HtmlWebpackPlugin = require("html-webpack-plugin")
const {pageInfo} = require('./page.config')

module.exports.htmlList = pageInfo.map(item => {
  return new HtmlWebpackPlugin({
    title: item.title,
    filename: `${item.filename}.html`,
    template: 'template.html',
    chunks: [item.filename],
    ...item.options
  })
})

module.exports.entry = (() => {
  const map = {}
  pageInfo.forEach(({filename}) => map[filename] = `./src/pages/${filename}/index.js`)
  return map
})()