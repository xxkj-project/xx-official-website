/*
 * @Author: wangshengxian
 * @Date: 2020-08-31 15:11:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-28 18:01:28
 * @Desc: pc端路由模块
 */

const Layout = () => import("@/views/PC/layout");
const Index = () => import("@/views/PC/indexs");

const Setup = () => import("@/views/PC/services/setup");
const Application = () => import("@/views/PC/services/application");
const Dapp = () => import("@/views/PC/services/dapp");
const InternetApp = () => import("@/views/PC/services/internetApp");

const TradingSystem = () => import("@/views/PC/details/setUp/tradingSystem");
const CurbTrading = () => import("@/views/PC/details/setUp/curbTrading");
const ContractTrading = () =>
  import("@/views/PC/details/setUp/contractTrading");
const QuantitativeTrading = () =>
  import("@/views/PC/details/setUp/quantitativeTrading");

// 区块链应用 - 模块详情页
const Farm = () => import("@/views/PC/details/application/farm");
const Wallet = () => import("@/views/PC/details/application/wallet");
const VirtualCurrency = () =>
  import("@/views/PC/details/application/virtualCurrency");
const ChainSetup = () => import("@/views/PC/details/application/chainSetup");

// 互联网应用 - 模块详情页
const LiveVideo = () => import("@/views/PC/details/internetApp/liveVideo");
const OneToOne = () => import("@/views/PC/details/internetApp/oneToOne");
const ShortVideo = () => import("@/views/PC/details/internetApp/shortVideo");
const SocialDirsir = () =>
  import("@/views/PC/details/internetApp/socialDirsir");

// DAPP落地 - 模块详情页
const DappDevelop = () => import("@/views/PC/details/dApp/dAppDevelop");

const setupDetailsRouter = [
  {
    path: "/tradingSystem",
    name: "pc_tradingSystem",
    component: TradingSystem,
    meta: {
      zh_title: "交易系统5.0",
      en_title: "Trading System 5.0",
    },
  },
  {
    path: "/curbTrading",
    name: "pc_curbTrading",
    component: CurbTrading,
    meta: {
      zh_title: "场外交易系统",
      en_title: "Over-the-counter trading system",
    },
  },
  {
    path: "/contractTrading",
    name: "pc_contractTrading",
    component: ContractTrading,
    meta: {
      zh_title: "合约交易5.1",
      en_title: "Contract transaction 5.1",
    },
  },
  {
    path: "/quantitativeTrading",
    name: "pc_quantitativeTrading",
    component: QuantitativeTrading,
    meta: {
      zh_title: "量化交易",
      en_title: "Quantitative trading",
    },
  },
];

const applicationDetailsRouter = [
  {
    path: "/farm",
    name: "pc_farm",
    component: Farm,
    meta: {
      zh_title: "区块链游戏",
      en_title: "Blockchain game",
    },
  },
  {
    path: "/wallet",
    name: "pc_wallet",
    component: Wallet,
    meta: {
      zh_title: "跨链钱包模块",
      en_title: "Cross-chain wallet module",
    },
  },
  {
    path: "/virtualCurrency",
    name: "pc_virtualCurrency",
    component: VirtualCurrency,
    meta: {
      zh_title: "虚拟币支付3.0",
      en_title: "Virtual currency payment 3.0",
    },
  },
  {
    path: "/chainSetup",
    name: "pc_chainSetup",
    component: ChainSetup,
    meta: {
      zh_title: "公、私链搭建",
      en_title: "Public and private chain construction",
    },
  },
];

const internetAppDetailsRouter = [
  {
    path: "/liveVideo",
    name: "pc_liveVideo",
    component: LiveVideo,
    meta: {
      zh_title: "视频直播模块",
      en_title: "Live video module",
    },
  },
  {
    path: "/oneToOne",
    name: "pc_oneToOne",
    component: OneToOne,
    meta: {
      zh_title: "1v1视频模块",
      en_title: "1v1 video module",
    },
  },
  {
    path: "/ShortVideo",
    name: "pc_shortVideo",
    component: ShortVideo,
    meta: {
      zh_title: "短视频平台",
      en_title: "Short video platform",
    },
  },
  {
    path: "/socialDirsir",
    name: "pc_socialDirsir",
    component: SocialDirsir,
    meta: {
      zh_title: "社交电商模块",
      en_title: "Social E-commerce Module",
    },
  },
];

const dAppDetailsRouter = [
  {
    path: "/dAppDevelop",
    name: "pc_dappDevelop",
    component: DappDevelop,
    meta: {
      zh_title: "DAPP开发",
      en_title: "Dapp development",
    },
  },
];

const pcRouter = {
  path: "/",
  name: "Layout",
  component: Layout,
  children: [
    {
      //首页
      path: "/",
      name: "pc_index",
      component: Index,
      meta: {
        zh_title: "区块链钱包-区块链游戏-短视频直播-新零售-社交电商平台",
        en_title:
          "Blockchain wallet-blockchain game-short video live broadcast-new retail-social e-commerce platform-Hangzhou Xinxin Technology",
      },
    },
    // 产品服务/交易所系统
    {
      path: "/setup",
      name: "pc_setup",
      component: Setup,
      meta: {
        zh_title: "交易所系统",
        en_title: "Trading System",
      },
    },
    // 产品服务/区块链应用
    {
      path: "/application",
      name: "pc_application",
      component: Application,
      meta: {
        zh_title: "区块链应用",
        en_title: "Blockchain Application",
      },
    },
    {
      path: "/internetApp",
      name: "pc_internetApp",
      component: InternetApp,
      meta: {
        zh_title: "互联网应用",
        en_title: "Internet application",
      },
    },
    {
      path: "/dapp",
      name: "pc_dapp",
      component: Dapp,
      meta: {
        zh_title: "DPP落地",
        en_title: "DAPP landing",
      },
    },
    {
      // 解决方案
      path: "/solution",
      name: "pc_solution",
      component: () => import("@/views/PC/solutions/index"),
      meta: {
        zh_title: "解决方案",
        en_title: "Solutions",
      },
    },
    {
      //新闻资讯
      path: "/news",
      name: "pc_news",
      component: () => import("@/views/PC/news/"),
      meta: {
        zh_title: "新闻资讯",
        en_title: "News",
      },
    },
    {
      //资讯详情
      path: "/newsDetail",
      name: "pc_newsDetail",
      component: () => import("@/views/PC/news/newsDetail"),
      meta: {
        zh_title: "新闻详情",
        en_title: "News details",
      },
    },
    {
      // 关于我们
      path: "/aboutUs",
      name: "pc_about",
      component: () => import("@/views/PC/about/aboutUs"),
      meta: {
        zh_title: "关于我们",
        en_title: "About us",
      },
    },
    {
      // 联系我们
      path: "/contactUs",
      name: "pc_contact",
      component: () => import("@/views/PC/about/contactUs"),
      meta: {
        zh_title: "联系我们",
        en_title: "Contact us",
      },
    },
    ...setupDetailsRouter,
    ...applicationDetailsRouter,
    ...internetAppDetailsRouter,
    ...dAppDetailsRouter,
  ],
};

export default pcRouter;
