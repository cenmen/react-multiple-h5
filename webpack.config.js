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
  // https://webpack.docschina.org/guides/caching/
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      chunks: "all",
    },
  },
}
