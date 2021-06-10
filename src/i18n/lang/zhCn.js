/*
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 18:17:41
 * @Desc: 简体中文入口模块
 */
import { zhCnPcHeader, zhCnMobileHeader } from "./modules/header";
import { zhCnFooter } from "./modules/footer";
import { zhCnHome } from "./modules/home";
import { zhCnService } from "./modules/service";
import { zhCnSolution } from "./modules/solution";
import { zhCnNews } from "./modules/news";
import { zhCnAbout } from "./modules/about";
import { zhCnNewsDetail } from "./modules/newsDetail";
import { zhCnOther } from "./modules/other";

export default {
  MobileHeader: zhCnMobileHeader,
  Header: zhCnPcHeader,
  Footer: zhCnFooter,
  Index: zhCnHome,
  Service: zhCnService,
  Solution: zhCnSolution,
  About: zhCnAbout,
  News: zhCnNews,
  NewsDetail: zhCnNewsDetail,
  Other: zhCnOther,
};
