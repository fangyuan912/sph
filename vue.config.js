const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //忽略lint检查
  lintOnSave:false,

  devServer:{
    open: true,
    host:"fangyuan.com",
    port:80,
    proxy:{
      "/api":{
        target:"http://sph-h5-api.atguigu.cn",
        changeOrigin:true
      }
    },
  },

  pages:{
    index:{
      //page的入口
      entry:'src/index.js',
      //设置网站标题
      title:"尚品汇"
    }
  }
})
