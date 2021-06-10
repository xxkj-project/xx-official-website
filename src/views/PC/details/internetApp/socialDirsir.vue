<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 17:21:43
 * @Desc: 区块链应用 - 社交电商
-->
<template>
  <div class="liveVideo">
    <div class="banner">
      <div class="banner-container wow fadeInLeft" data-wow-delay="0.5s">
        <p>社交电商</p>
      </div>
    </div>
    <div class="main">
      <div class="container">
        <div class="content">
          <div class="topWrap">
            <h1>{{ infoData.mainTitle }}</h1>
            <div class="descTxt">{{ infoData.descTxt }}</div>
            <div class="swiperBox">
              <swiperComp
                :itemStyle="swiperItemStyle"
                :list="infoData.swiperList"
              />
              <!-- <div
                class="item"
                v-for="(item, index) in infoData.swiperList"
                :key="index"
              >
                <img :src="item.imgUrl" alt="" />
              </div> -->
            </div>
          </div>
          <div class="featureWrap">
            <div class="blockTitle">
              <strong>系统功能：</strong>
            </div>
            <ul class="featureContent">
              <li
                class="commonItem item"
                v-for="(item, index) in featureList"
                :key="index"
              >
                <div class="left">
                  <img class="icon" :src="item.iconUrl" alt="" />
                </div>
                <div class="right">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="advantageWrap">
            <p class="blockTitle">
              <strong>系统优势：</strong>
            </p>
            <ul class="featureContent">
              <li
                class="commonItem item"
                v-for="(item, index) in advantageList"
                :key="index"
              >
                <div class="left">
                  <img class="icon" :src="item.iconUrl" alt="" />
                </div>
                <div class="right">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc">{{ item.desc }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="caseWrap">
            <p class="blockTitle">
              <strong>案例：</strong>
            </p>
            <p class="subTitle">案例包含技术团队从事的一些应用开发</p>
            <ul class="caseContent">
              <li
                class="caseItem"
                v-for="(item, index) in caseList"
                :key="index"
              >
                <img :src="item.imgUrl" alt="" />
              </li>
              <li class="caseItem caseTxt">更多案例敬请期待</li>
            </ul>
          </div>

          <!-- <qrcodeComp /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import swiperComp from "@/views/PC/components/swiperComp";
// import qrcodeComp from "@/views/PC/components/qrcodeComp";

export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      swiperItemStyle: {
        width: "626px",
        height: "353px",
      },
      infoData: {
        mainTitle: "社交电商",
        descTxt:
          "“鱼多多”是杭州辛鑫科技有限公司旗下的社交电商模块产品。该产品提供高品质的商品、最有社交氛围的社交圈子等功能服务。",
        swiperList: [
          { imgUrl: require("@/assets/images/pc/live/socialDirsirItem1.jpg") },
        ],
      },
      featureList: [
        {
          title: "商品分享",
          desc: "商品分享传播，通过社会化分享将商品直接对外传播。",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "圈子动态",
          desc:
            "发布帖子关联商品，打造内容电商模式，通过社交功能体系，扩展平台的海量曝光入口。",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "多人拼团",
          desc: "购买商品的同时还能开个团邀请他人一起组个团，拼个单。",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
        {
          title: "会员专属",
          desc: "会员都有属于自己的特权并可以折扣购买商品。",
          iconUrl: require("@/assets/images/pc/live/zb4.png"),
        },
        {
          title: "优惠卷营销",
          desc: "吸引用户关注，定期推送优惠券活动消息。",
          iconUrl: require("@/assets/images/pc/live/zb5.png"),
        },
      ],
      advantageList: [
        {
          title: "稳定开发",
          desc:
            "强大的开发团队，拥有最先进的技术，可以提供完整的社交电商平台部署架构。",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "独立部署",
          desc: "支持独立部署，拥有自己的电商平台服务，运营更安心。",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "运营支持",
          desc: "一系列的推广方案、商家、商品资源，全方位助力您的运营。",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
        {
          title: "可扩展",
          desc: "公司的区块链、游戏产品可与社交电商应用进行对接，更有故事可讲",
          iconUrl: require("@/assets/images/pc/live/zb4.png"),
        },
      ],
      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case5.jpg"),
        },
        {
          imgUrl: require("@/assets/images/pc/live/case6.jpg"),
        },
      ],
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { swiperComp },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$imgUrl: "~@/assets/images/pc/";
$contentWidth: 1320px;
// $contentWidth: 1200px;
.liveVideo {
  .main {
    .container {
      width: $contentWidth;
      min-width: $contentWidth;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
}

.content {
  background: #fff;
  padding: 20px;

  .blockTitle {
    color: rgb(5, 149, 199);
    height: 38px;

    strong {
      font-weight: 600;
    }
  }

  .commonItem {
    .left {
      width: 60px;
      height: 85px;
      padding-top: 24px;

      .icon {
        width: 35px;
      }
    }
    .right {
      flex: 1;

      .title {
        font-weight: 600;
        font-size: 16px;
        padding-bottom: 5px;
      }

      .desc {
        font-size: 14px;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  background: url("#{$imgUrl}setupBannerBg.png") no-repeat center / cover;

  .banner-container {
    width: $contentWidth;
    font-size: 60px;
    line-height: 90px;
    color: #fff;

    p {
      width: 60%;
    }
  }
}

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
    padding: 30px 100px;
  }
}

.featureWrap {
  margin-bottom: 20px;

  .featureContent {
    display: flex;
    flex-wrap: wrap;

    .item {
      display: flex;
      width: 32%;
      height: 85px;
      margin-right: 2%;
      margin-bottom: 25px;

      &:nth-child(3n + 3) {
        margin-right: 0;
      }
    }
  }
}

.advantageWrap {
  margin-bottom: 20px;

  .featureContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      display: flex;
      width: 36%;
      height: 85px;
      margin-right: 28%;
      margin-bottom: 25px;

      &:nth-child(2n + 2) {
        margin-right: 0;
      }
    }
  }
}

.caseWrap {
  .subTitle {
    padding-bottom: 15px;
  }

  .caseContent {
    display: flex;
    flex-wrap: wrap;

    .caseItem {
      width: 25%;
      // width: 248px;
      height: 74px;
      text-align: center;
      line-height: 74px;
      margin: 10px 0;

      &.caseTxt {
        width: 248px;
      }
    }
  }
}
</style>
