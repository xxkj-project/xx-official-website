import axios from "axios";
// import { Toast, Dialog } from "vant";
// import store from "@/store";

console.log("-http-domain-", process.env.VUE_APP_SERVER_URL);

const service = axios.create();

// 定义额外配置
let configMore;

function request(config) {
  const { isSelf } = config;
  configMore = {
    isSelf,
  };
  return service(config);
}

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // baseURL
    config.baseURL = config.baseURL || process.env.VUE_APP_SERVER_URL; //
    // 超时
    config.timeout = config.timeout || 100000;
    // header

    //
    // if (store.state.user.accessToken) {
    //   config.headers["key"] = store.state.user.accessToken; // 让每个请求携带token-- ['Admin-Token']为自定义key 请根据实际情况自行修改
    // }
    config.headers["language"] = 0;

    // 请求方法
    config.method = config.method || "post";
    // 参数
    if (config.method === "get") {
      config.params = config.data || config.params;
    } else {
      config.data = config.data || {};
    }
    console.log("-config-", config);
    return config;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // isSelf为true，直接返回数据
    if (configMore.isSelf) {
      return res;
    }
    if (res.code === 5000) {
      console.log("响应状态码5000");
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
      //   Dialog.alert({
      //     // title: '未登录',
      //     message: "请求业务目前未支持",
      //   }).then(() => {
      //     // window.location.href = '/h5/getCode'
      //   });
      return Promise.reject(new Error("error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("-response-error-:", error);
    // TODO 缺少一个消失提示框
    // Toast({
    //   message: "err" + error.message,
    //   duration: 2000,
    // });
    Promise.reject(error);
  }
);

// 请求实例
export default request;
