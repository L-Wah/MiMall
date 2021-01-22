module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // 打包的资源公共路径
  // publicPath:'/app',
  // 打包目录
  // outputDir:'dist',
  // 打包单页面的入口页面名字
  // indexPath:'index.html',
  // 取消eslint的启用
  // lintOnSave:false,
  // 减少包大小且加密
  productionSourceMap:false,
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}