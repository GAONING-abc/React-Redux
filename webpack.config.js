const path = require("path");
module.exports = {
  entry:"./app/main.js",
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"all.js",
  },
  module:{
    rules:[
      {
          test:/\.js$/,//所有以js结尾的文件
          exclude:/(node_modules|bower_components)/,//排除
          use:{
              loader:'babel-loader',//加载器
              options:{
                    presets:['es2015','react'],
                    plugins:['transform-object-rest-spread']
              }
          }
      },
      {
          test:/\.less$/,
          use:[{
            loader:"style-loader" //creates style nodes from JS strings
          },{
            loader:"css-loader" //translates css into CommonJS
          },{
            loader:"less-loader" //compiles less to css
          }
          ]
      }
    ]
  },
  watch:true
}
