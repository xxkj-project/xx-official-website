/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 15:45:23
 * @Desc:
 */
import axios from "axios";
// import { Message, MessageBox } from 'element-ui'
// import { Toast, Dialog } from 'vant'
// import store from "@/store";
// let BASE_API = ''
// if (process.env.NODE_ENV === 'development') {
//   BASE_API = 'http://test'
// } else {
//   BASE_API = '222'
// }

let baseURL = "https://dncapi.bqrank.net";

const service = axios.create({
  baseURL,
  // baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 10000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.method = config.method || "post";
    if (config.method === "post") {
      config.data = config.data || {};
    } else if (config.method === "get") {
      // console.log(111111)
      // console.log("-config-", config);
      config.params = config.data || config.params;
    }
    // if (store.state.user.accessToken) {
    //   config.headers["key"] = store.state.user.accessToken; // 让每个请求携带token-- ['Admin-Token']为自定义key 请根据实际情况自行修改
    // }
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
    const res = response.data;
    // console.log(response);
    if (res.code === 200) return res;
    if (res.code === 5000) {
      // window.location.href = '/h5/getCode?backUrl=' + window.location.href
    } else if (res.code === 1000) {
      // Dialog.alert({
      //   // title: '未登录',
      //   message: '系统内部错误，请联系管理员维护'
      // }).then(() => {
      //   // window.location.href = '/h5/getCode'
      // })
      // return Promise.reject(new Error('error'))
    } else if (res.code === 1004) {
      // Dialog.alert({
      //   // title: '未登录',
      //   message: '请求业务目前未支持'
      // }).then(() => {
      //   // window.location.href = '/h5/getCode'
      // })
    } else {
      // 其它错误码
    }
    return Promise.reject(new Error("error"));
    // return Promise.reject(res.msg);
  },
  (error) => {
    console.log("-ERROR-", error);
    // this.$toast.show("系统内部错误！"); // TODO 需要一个自定义的toast
    return Promise.reject(error);
  }
);

export default service;
