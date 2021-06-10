/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-28 18:26:03
 * @Desc: 全局路由守卫
 */
import router from "@/router";
import store from "@/store";
import platform from "@/utils/platform";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import glg from "./globalGuards";

NProgress.configure({
  showSpinner: false,
  ease: "ease",
  speed: 400,
});

router.beforeEach((to, from, next) => {
  // console.log(to, from);
  // first progress bar
  NProgress.start();
  glg.setDocumentTitle(to, from);
  let path = to.path;
  console.log("-path-", path);
  let routerPath = path.replace("/mobile", "").replace("/", "");
  store.commit("global/setActiveRouter", routerPath);
  const regNum = path.indexOf("/mobile") == -1 ? true : false;
  console.log("-reg-num-", regNum);
  // console.log("-path-", path);
  if (platform.isPC()) {
    // pc端
    next();
  } else {
    // 移动端
    if (path == "/") {
      // 首页
      path = "/mobile/index";
      next(path);
    } else {
      // 其它页
      next();
    }
  }
  // if ((platform.isPC() && regNum) || (!platform.isPC() && !regNum)) {
  //   // pc端/移动端除了首页
  //   // console.log(111);
  //   next();
  // } else {
  //   if (platform.isPC() && !regNum) {
  //     console.log(222);
  //     path = path.replace("/mobile", "");
  //   } else {
  //     console.log(333,"-path-", path);
  //     path = "/mobile" + path;
  //   }
  //   next(path);
  // }

  window.scrollTo(0, 0);
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
