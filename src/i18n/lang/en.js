/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 18:18:29
 * @Desc: 英文入口模块
 */
import { enPcHeader, enMobileHeader } from "./modules/header";
import { enFooter } from "./modules/footer";
import { enHome } from "./modules/home";
import { enService } from "./modules/service";
import { enSolution } from "./modules/solution";
import { enAbout } from "./modules/about";
import { enNews } from "./modules/news";
import { enNewsDetail } from "./modules/newsDetail";
import { enOther } from "./modules/other";

export default {
  MobileHeader: enMobileHeader,
  Header: enPcHeader,
  Footer: enFooter,
  Index: enHome,
  Service: enService,
  Solution: enSolution,
  About: enAbout,
  News: enNews,
  NewsDetail: enNewsDetail,
  Other: enOther,
};
