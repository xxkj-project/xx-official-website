/*
 * @Author: wangshengxian
 * @Date: 2020-08-31 15:12:17
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-28 18:24:29
 * @Desc: mobile路由模块
 */

// import MobileHome from "@/views/Mobile/Home.vue";
import Layout from "@/views/Mobile/layout";

const Setup = () => import("@/views/Mobile/serve/setups");
const Application = () => import("@/views/Mobile/serve/applications");
const Dapp = () => import("@/views/Mobile/serve/dapp");
const InternetApp = () => import("@/views/Mobile/serve/internetApp");

const TradingSystem = () =>
  import("@/views/Mobile/details/setUp/tradingSystem");
const CurbTrading = () => import("@/views/Mobile/details/setUp/curbTrading");
const ContractTrading = () =>
  import("@/views/Mobile/details/setUp/contractTrading");
const QuantitativeTrading = () =>
  import("@/views/Mobile/details/setUp/quantitativeTrading");

// 区块链应用 - 模块详情页
const Farm = () => import("@/views/Mobile/details/application/farm");
const Wallet = () => import("@/views/Mobile/details/application/wallet");
const VirtualCurrency = () =>
  import("@/views/Mobile/details/application/virtualCurrency");
const ChainSetup = () =>
  import("@/views/Mobile/details/application/chainSetup");

// 互联网应用 - 模块详情页
const LiveVideo = () => import("@/views/Mobile/details/internetApp/liveVideo");
const OneToOne = () => import("@/views/Mobile/details/internetApp/oneToOne");
const ShortVideo = () =>
  import("@/views/Mobile/details/internetApp/shortVideo");
const SocialDirsir = () =>
  import("@/views/Mobile/details/internetApp/socialDirsir");

// DAPP落地 - 模块详情页
const DappDevelop = () => import("@/views/Mobile/details/dapp/dappDevelop");

const setupDetailsRouter = [
  {
    path: "tradingSystem",
    name: "mobile_tradingSystem",
    component: TradingSystem,
  },
  {
    path: "curbTrading",
    name: "mobile_curbTrading",
    component: CurbTrading,
  },
  {
    path: "contractTrading",
    name: "mobile_contractTrading",
    component: ContractTrading,
  },
  {
    path: "quantitativeTrading",
    name: "mobile_quantitativeTrading",
    component: QuantitativeTrading,
  },
];

const applicationDetailsRouter = [
  {
    path: "virtualCurrency",
    name: "mobile_virtualCurrency",
    component: VirtualCurrency,
  },
  {
    path: "farm",
    name: "mobile_farm",
    component: Farm,
  },
  {
    path: "wallet",
    name: "mobile_wallet",
    component: Wallet,
  },
  {
    path: "chainSetup",
    name: "mobile_chainSetup",
    component: ChainSetup,
  },
];

const internetAppDetailsRouter = [
  {
    path: "liveVideo",
    name: "mobile_liveVideo",
    component: LiveVideo,
  },
  {
    path: "oneToOne",
    name: "mobile_oneToOne",
    component: OneToOne,
  },
  {
    path: "shortVideo",
    name: "mobile_shortVideo",
    component: ShortVideo,
  },
  {
    path: "socialDirsir",
    name: "mobile_socialDirsir",
    component: SocialDirsir,
  },
];

const dappDetailsRouter = [
  {
    path: "dappDevelop",
    name: "mobile_dappDevelop",
    component: DappDevelop,
  },
];

const mobileRouter = {
  path: "/mobile",
  name: "mobileLayout",
  component: Layout,
  children: [
    {
      //首页
      path: "index",
      name: "mobile_index",
      component: () => import("@/views/Mobile/index"),
    },
    {
      // 产品服务/区块链搭建
      path: "setup",
      name: "mobile_setup",
      component: Setup,
    },
    {
      // 产品服务/区块链应用
      path: "application",
      name: "mobile_application",
      component: Application,
    },
    {
      // 产品服务/ 互联网应用
      path: "internetApp",
      name: "mobile_internetApp",
      component: InternetApp,
    },
    {
      path: "dapp",
      name: "mobile_dapp",
      component: Dapp,
    },
    {
      // 解决方案
      path: "solution",
      name: "mobile_solution",
      component: () => import("@/views/Mobile/solution"),
    },
    {
      //案例
      path: "news",
      name: "mobile_news",
      component: () => import("@/views/Mobile/news/index"),
    },
    {
      //案例
      path: "newsDetail",
      name: "mobile_newsDetail",
      component: () => import("@/views/Mobile/news/newsDetail"),
    },
    {
      // 关于我们
      path: "about",
      name: "mobile_about",
      component: () => import("@/views/Mobile/about"),
    },
    {
      // 联系我们
      path: "contact",
      name: "mobile_contact",
      component: () => import("@/views/Mobile/contact"),
    },
    ...setupDetailsRouter,
    ...applicationDetailsRouter,
    ...internetAppDetailsRouter,
    ...dappDetailsRouter,
  ],
};

export default mobileRouter;
