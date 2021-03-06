const axios = require("axios");

var instance = axios.create({
  // baseURL: "https://some-domain.com/api/",
  timeout: 3000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    // console.log("请求出错了");
    // console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // console.log("服务器出错了");
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default instance;
