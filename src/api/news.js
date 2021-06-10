/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-09 14:20:05
 * @Desc: 新闻接口请求模块
 */
// import http from "@/utils/http";

// export default {
//   // 新闻接口
//   getNewsList: (params) => http("/api/v4/news/hot", params, "get"),
// };

import request from "@/utils/requestNews";

export function getNewsList(params) {
  return request({
    url: "/api/v4/news/hot",
    method: "get",
    params,
  });
}
