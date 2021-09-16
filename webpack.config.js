const path = require("path")
const ZipWebpackPlugin = require('zip-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { htmlList, entry } = require("./config/index")

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.[contenthash:10].js",
  },
  plugins: [
    ...htmlList,
    new ZipWebpackPlugin({
      path: path.resolve(__dirname, "deploy-zip"),
      filename: 'production.zip',
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 8081 })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },
      {
        test: /\.jsx?$/, // jsx/js文件的正则
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          // loader 是 babel
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), { modules: false }],
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  optimization: {
    /*
    1. 可以将node_modules中代码单独打包一个chunk最终输出
    2. 自动分析多入口chunk中，有没有公共的文件。如果有会打包成单独一个chunk
  */
    splitChunks: {
      //这表明将选择哪些 chunk 进行优化。当提供一个字符串，有效值为 all，async 和 initial。
      //设置为 all 可能特别强大，因为这意味着 chunk 可以在异步和非异步 chunk 之间共享。
      chunks: "all",
    },
  },
}
