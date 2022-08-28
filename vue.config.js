module.exports = {
  productionSourceMap: false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      // 出翔/api的请求 转向target
      "/api": {
        // 获取数据的api的服务器地址 代理问题
        target: "http://gmall-h5-api.atguigu.cn",
      },
    },
  },
};
