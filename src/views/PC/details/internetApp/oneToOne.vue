<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 17:21:28
 * @Desc: 区块链应用 - 1v1视频
-->
<template>
  <div class="liveVideo">
    <div class="banner">
      <div class="banner-container wow fadeInLeft" data-wow-delay="0.5s">
        <p>1v1视频</p>
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
        mainTitle: "1v1视频",
        descTxt:
          " “usee” 是杭州辛鑫科技有限公司旗下的1v1视频产品。该产品提供语音聊天、短视频上传、视频聊天、付费连麦、礼物打赏等功能服务。",
        swiperList: [
          { imgUrl: require("@/assets/images/pc/live/oneToOneItem1.jpg") },
          { imgUrl: require("@/assets/images/pc/live/oneToOneItem2.jpg") },
        ],
      },
      featureList: [
        {
          title: "聊天方式",
          desc:
            "用户可选择发起语音视频聊天，主播开播自由选择语音聊天或视频聊天",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "主播筛选",
          desc: "用户根据聊天对象性别、聊天方式、付费价格，搜索主播",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "圈子动态",
          desc:
            "主播用户，柯发布语音、文字、图片等个人动态，支持用户点赞评论回复",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
        {
          title: "附近聊天",
          desc: "LBS定位功能，发现附近的一对一直播聊天对象，发起一键聊天请求",
          iconUrl: require("@/assets/images/pc/live/zb4.png"),
        },
        {
          title: "付费连麦",
          desc: "按分钟及时付费方式，结合语音或视频连麦，保障主播和平台收益",
          iconUrl: require("@/assets/images/pc/live/zb5.png"),
        },
        {
          title: "礼物打赏",
          desc: "用户可对喜欢的主播进行礼物打赏，礼物系统支持定制",
          iconUrl: require("@/assets/images/pc/live/zb6.png"),
        },
        {
          title: "私信预约",
          desc: "私信预约一对一聊天",
          iconUrl: require("@/assets/images/pc/live/zb7.png"),
        },
        {
          title: "视频互动",
          desc:
            "主播柯拍摄上传小视频，用户柯进行视频互动分享，发起一对一直播请求",
          iconUrl: require("@/assets/images/pc/live/zb8.png"),
        },
        {
          title: "三级分销系统",
          desc: "支持分销代理模式，让用户快速上涨，收益日日提升",
          iconUrl: require("@/assets/images/pc/live/zb9.png"),
        },
      ],
      advantageList: [
        {
          title: "稳定开发",
          desc:
            "成熟的直播开发团队，拥有流媒体数据处理多项专利，能提供完整的视频直播应用的网络部署架构",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "独立部署",
          desc:
            "支持独立部署，不依赖于阿里云、腾讯云，拥有自己的直播服务，运营更安心",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "运营支持",
          desc: "主播资源，运营方案，全方位主力您的运营",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
        {
          title: "可扩展",
          desc: "公司的区块链、游戏产品可与视频直播应用进行对接，更有故事可讲",
          iconUrl: require("@/assets/images/pc/live/zb4.png"),
        },
      ],
      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case1.jpg"),
        },

        {
          imgUrl: require("@/assets/images/pc/live/case4.jpg"),
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
