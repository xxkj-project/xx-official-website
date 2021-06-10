/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 15:45:03
 * @Desc: 请求拦截器
 */
import axios from "axios";

const service = axios.create({
  timeout: 10000, // request timeout
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

console.log(
  "__nodeEnv",
  process.env.NODE_ENV,
  "__serverUrl_",
  process.env.VUE_APP_SERVER_ENV
);

// request interceptor
service.interceptors.request.use(
  (config) => {
    // baseURL "http://new.hzxinxinkeji.com"
    // config.baseURL = "http://new.hzxinxinkeji.com/official";
    config.baseURL = "/official";
    // config.baseURL = config.baseURL || "/official";
    // if (process.env.NODE_ENV === "development") {
    //   config.baseURL = `${process.env.VUE_APP_PROXY_CODE}/${process.env.VUE_APP_SERVER_ENV}${config.baseURL}`;
    // }

    config.method = config.method || "post";
    if (config.method === "post") {
      config.data = config.data || {};
    } else if (config.method === "get") {
      // console.log("-config-", config);
      config.params = config.data || config.params;
    }

    // console.log("-config-", config);
    return config;
  },
  (error) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone interceptor
service.interceptors.response.use(
  (response) => {
    console.log("-res-", response);
    const res = response.data;
    if (res.code == 200) return res;
    if (res.code == 5000) {
      // window.location.href = '/h5/getCode?backUrl=' + window.location.href
    } else if (res.code == 1000) {
      // Dialog.alert({
      //   // title: '未登录',
      //   message: '系统内部错误，请联系管理员维护'
      // }).then(() => {
      //   // window.location.href = '/h5/getCode'
      // })
      // return Promise.reject(new Error('error'))
    } else if (res.code == 1004) {
      // Dialog.alert({
      //   // title: '未登录',
      //   message: '请求业务目前未支持'
      // }).then(() => {
      //   // window.location.href = '/h5/getCode'
      // })
    } else {
      // 其它错误码
    }
    console.log("error");
    return Promise.reject(res.msg);
  },
  (error) => {
    console.log("-ERROR-", error);
    // this.$toast.show("系统内部错误！"); // TODO 需要一个自定义的toast
    return Promise.reject(error);
  }
);

export default service;
