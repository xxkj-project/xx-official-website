/*
 * @Author: wangshengxian
 * @Date: 2020-08-31 15:09:07
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-28 17:57:35
 * @Desc: 路由出口模块
 */
import Vue from "vue";
import Router from "vue-router";

// import pcRouter from "./module/pc";
// import mobileRouter from "./module/mobile";

// 导入对应的某个模块(遍历目录下的文件名，再用文件名来加载文件中的模块。)
const context = require.context("./module/", true, /\.js$/);
// console.log(context);
// 获取导入的所有模块的集合
const imp = context.keys().map(context);
// console.log("-req-module-list-", imp);
// 获取过滤后的所有模块
const totalModules = imp.map((e) => e.default);
// console.log(totalModules);

// 区块链钱包 - 区块链游戏 - 短视频直播 - 新零售 - 社交电商平台 - 杭州辛鑫科技;

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  // {
  //   path: "/",
  //   redirect: "/index",
  // },
  ...totalModules,
];

console.log("-base-url-", process.env.BASE_URL);

const baseUrl = process.env.BASE_URL;

export default new Router({
  mode: "history",
  base: baseUrl,
  routes,
});
