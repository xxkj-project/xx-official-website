/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-09 16:51:38
 * @Desc: 接口请求模块
 */

import request from "@/utils/request";

export function submitMsg(data) {
  return request({
    url: "/api/contact",
    method: "post",
    data,
  });
}

// 获取新闻详情
export function getNewsDetail(id) {
  return request({
    url: `/official/news/news/info/${id}`,
    method: "get",
  });
}
