const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//console.log(__dirname);

module.exports = {
  mode: 'development',
  watch: true,
  entry: './app/main.js',
  output: {
    path:  path.resolve(__dirname , 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }],
          ["@babel/preset-react"]
        ],
        plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-transform-runtime"]
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new HtmlWebpackPlugin({
      title: 'index',
      template: 'index.html',  // 指定产出的 html 模板
      filename: 'index.html',   // 产出的html 文件名
      hash: true,  // 会在引入的 js 里加入查询字符串避免缓存
      minify: {
        removeAttributeQuotes: true
      }
    })
  ]
};
