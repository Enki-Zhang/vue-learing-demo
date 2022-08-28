import axios from "axios";
import nProgress from "nprogress";
// 进度条样式
import "nprogress/nprogress.css";
console.log(nProgress);
// 创建axios实例
//2:request就是axios,只不过稍微配置一下
const request = axios.create({
  // 接口当中：路径都带有/api
  baseURL: "/api",
  //   请求超时时间
  timeout: 5000,
});
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情

request.interceptors.request.use((config) => {
  // 进度条开始
  nProgress.start();
  return config;
});
request.interceptors.response.use(
  (res) => {
    nProgress.done();
    // 成功
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export default request;
