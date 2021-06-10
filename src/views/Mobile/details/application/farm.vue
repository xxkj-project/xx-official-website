<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:18:15
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 11:27:33
 * @Desc: 区块链应用 - 区块链农场模块详情
-->
<template>
  <div class="virtualCurrency">
    <banner type="farm">
      <div class="bannerTxtBox">
        <span class="bannerTitle wow fadeInLeft" data-wow-delay="0.5s">{{
          infoData.bannerTitle
        }}</span>
      </div>
    </banner>
    <div class="main">
      <div class="content">
        <div class="contentComWrap topWrap">
          <h1>{{ infoData.mainTitle }}</h1>
          <p class="descTxt">{{ infoData.descTxt }}</p>
          <div class="swiperBox">
            <swiperComp :itemStyle="swiperItemStyle" :list="swiperList" />
          </div>
        </div>

        <div class="introWrap">
          <p class="blockTitle">
            <strong>{{ playMethodData.title }}</strong>
          </p>
          <h3>{{ playMethodData.descTxt }}</h3>

          <div class="contentImgBox">
            <img class="introImg" :src="playMethodData.imgUrl" alt="" />
          </div>
        </div>

        <div class="caseWrap">
          <p class="blockTitle">
            <strong>{{ caseData.title }}</strong>
          </p>
          <div class="contentImgBox">
            <img class="caseImg" :src="caseData.imgUrl" alt="" />
          </div>
        </div>

        <div class="advantageWrap">
          <p class="blockTitle">
            <strong>{{ advantageData.title }}</strong>
          </p>
          <div class="contentImgBox">
            <img class="advantageImg" :src="advantageData.imgUrl" alt="" />
          </div>
        </div>

        <div class="productQAWrap">
          <p class="blockTitle">
            <strong>{{ productQAData.title }}</strong>
          </p>
          <ul class="listBox">
            <li class="item" v-for="item in productQAData.list" :key="item.id">
              <div>
                <p class="question">
                  <span>{{ item.id }}、</span>{{ item.question }}
                </p>
              </div>
              <div>
                <p class="answer"><span>答：</span>{{ item.answer }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "@/views/Mobile/components/banner";
import swiperComp from "@/views/Mobile/details/components/swiperComp";
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      swiperItemStyle: {
        width: "100%",
        height: "156px",
      },
      swiperList: [
        { imgUrl: require("@/assets/images/pc/farm/swiperItem1.png") },
        { imgUrl: require("@/assets/images/pc/farm/swiperItem2.png") },
      ],
      infoData: {
        bannerTitle: "区块链农场",
        mainTitle: "区块链农场",
        descTxt:
          "“加州农场”是杭州辛鑫科技有限公司的区块链游戏产品。该产品由拥有多年休闲游戏开发经验的团队开发打造，结合了公司的区块链技术，内容包括：作物种植、果实收益、收益分红、交易售卖、资产充值提现、动静态收益、团队分销、任务系统、会员系统、多语言切换等等。",
      },
      playMethodData: {
        title: "游戏玩法介绍：",
        descTxt:
          "游戏玩法为通过充值货币、兑换种子、种植收获果实、果实收益的形式，以农场种菜、收菜、偷菜的玩法进行收益养成的模式。期间结合分销代理模式，分销代理获得伞下的动态收益，动静态收益相结合。",
        imgUrl: require("@/assets/images/pc/farm/nc2.jpg"),
      },

      caseData: {
        title: "产品玩法举例：",
        imgUrl: require("@/assets/images/pc/farm/nc3.jpg"),
      },
      advantageData: {
        title: "产品优势：",
        imgUrl: require("@/assets/images/pc/farm/nc4.png"),
      },

      productQAData: {
        title: "产品QA：",
        list: [
          {
            id: 1,
            question: "此产品有哪些终端？",
            answer: "此游戏基于unity 3D引擎开发，支持苹果、安卓app等终端。",
          },
          {
            id: 3,
            question: "可以上架到应用市场吗?",
            answer:
              "目前支持上架苹果TestFlight内测商店、企业签名等多种模式。如需上架应用市场，需要满足应用市场本身的规则，可以协助进行应用市场审核。",
          },
          {
            id: 4,
            question: "支持哪些虚拟货币支付？",
            answer:
              "支持市场上所有主流货币的虚拟货币支付，也可支持未上链自发行的货币，可以定制开发所有内容。",
          },
          {
            id: 5,
            question: "游戏内容和表现形式",
            answer:
              "目前游戏是3D的，支持3D角色移动、视角旋转、种植采摘等农场基础玩法",
          },
          {
            id: 6,
            question: "游戏玩法可以定制开发吗？",
            answer:
              "可以。所有内容均可定制开发，包括游戏玩法、制度、体系、收益机制、美术画面、接入三方应用小游戏等等。所有你能想到的均可以定制开发。",
          },
        ],
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { banner, swiperComp },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/farm/";
$contentWidth: 1320px;
$txtBg: "#0595C7";

.virtualCurrency {
  background: #f5f5f5;

  .main {
    .content {
      background: #fff;
      padding: 20px 12px 20px;

      .blockTitle {
        height: 38px;
        font-size: 16px;
        color: rgb(5, 149, 199);

        strong {
          font-weight: 600;
        }
      }
    }
  }

  .contentImgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    .introImg {
      width: 0.4 * 780px;
      height: 0.4 * 400px;
    }

    .caseImg {
      width: 0.4 * 780px;
      height: 0.4 * 488px;
    }

    .advantageImg {
      width: 0.4 * 775px;
      height: 0.4 * 475px;
    }
  }
}

// .banner {
//   display: flex;
//   width: 100%;
//   height: 680px;
//   background: url("#{$imgUrl}bannerBg.jpg") no-repeat center / cover;
// }

.topWrap {
  h1 {
    font-size: 24px;
    padding-bottom: 16px;
  }

  .descTxt {
    background: rgb(234, 234, 234);
    color: #555;
    padding: 15px;
  }

  .swiperBox {
    display: flex;
    justify-content: center;
    padding: 20px 10px;
  }
}

.introWrap {
  h3 {
    font-size: 12px;
    line-height: 18px;
    color: rgb(95, 95, 95);
    margin-bottom: 10px;
  }
}

.productQAWrap {
  .listBox {
    .item {
      p {
        display: inline-block;
        line-height: 34px;
        margin-bottom: 10px;
      }
      .question {
        background: #d2f3f9;
        color: rgba(5, 149, 199, 1);
        padding: 0 10px 0 5px;
      }
      .answer {
        background: #efefef;
        color: rgb(148, 89, 89);
        padding: 0 15px;
        span {
          color: red;
        }
      }
    }
  }
}
</style>
