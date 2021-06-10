<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-17 11:30:53
 * @Desc: 区块链应用 - 视频直播
-->
<template>
  <div class="internet-main">
    <div class="content">
      <div class="topWrap">
        <h1>{{ title }}</h1>
        <div class="descTxt">{{ descTxt }}</div>
        <div class="swiperBox">
          <swiperComp :itemStyle="swiperItemStyle" :list="swiperList" />
        </div>
      </div>
      <div
        class="commonWrap featureWrap"
        v-for="(itemOptions, index) in infoList"
        :key="index"
      >
        <div class="blockTitle">
          <strong>{{ itemOptions.title }}</strong>
        </div>
        <ul class="commonContent">
          <li class="item" v-for="(item, idx) in itemOptions.list" :key="idx">
            <div class="titleBox">
              <div class="icon">
                <img :src="item.iconUrl" alt="" />
              </div>

              <p class="title">{{ item.title }}</p>
            </div>
            <p class="desc">{{ item.desc }}</p>
          </li>
        </ul>
      </div>

      <div class="caseWrap">
        <p class="blockTitle">
          <strong>{{ caseData.title }}</strong>
        </p>
        <p class="subTitle">{{ caseData.descTxt }}</p>
        <ul class="caseContent">
          <li class="caseItem" v-for="(item, index) in caseList" :key="index">
            <img :src="item.imgUrl" alt="" />
          </li>
          <li class="caseItem">{{ caseData.lastTxt }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import swiperComp from "@/views/Mobile/details/components/swiperComp";

export default {
  name: "",
  data() {
    return {
      swiperItemStyle: {
        width: "100%",
        height: "176px",
      },
      infoData: {
        bannerMainTitle: "视频直播",
        mainTitle: "直播",
        descTxt:
          " “唐僧直播”是杭州辛鑫科技有限公司旗下的视频直播产品。该产品提供优质主播直播、优质短视频、精彩回放、礼物打赏等功能服务。",
        swiperList: [
          { imgUrl: require("@/assets/images/pc/live/liveVideoItem1.jpg") },
        ],
      },
      featureData: {
        title: "系统功能：",
        list: [
          {
            title: "直播",
            desc: "优质主播每天直播，内容精彩，用户实时与主播进行互动。",
            iconUrl: require("@/assets/images/pc/live/zb8.png"),
          },
          {
            title: "视频美颜",
            desc: "功能齐全的美颜，让每个主播添上一份更加极致的容颜。",
            iconUrl: require("@/assets/images/pc/live/zb3.png"),
          },
          {
            title: "礼物打赏",
            desc:
              "最切合实际的个性化礼物，“爱你”、“笔芯”，统统为主播献上一份真挚的爱意。",
            iconUrl: require("@/assets/images/pc/live/zb6.png"),
          },
          {
            title: "短视频",
            desc:
              "每个用户都可以发短视频、包含话题、图片等信息，支持热门，点赞评论。",
            iconUrl: require("@/assets/images/pc/live/zb5.png"),
          },
          {
            title: "精彩回放",
            desc:
              "错过主播精彩的直播内容？不，精彩回放让您不错过每一个精彩的瞬间。 ",
            iconUrl: require("@/assets/images/pc/live/zb4.png"),
          },
          {
            title: "实名认证",
            desc:
              "最安全的个人信息认证，保证个人信息安全的同时也保障该产品的真实、正规。",
            iconUrl: require("@/assets/images/pc/live/zb7.png"),
          },
        ],
      },
      advantageData: {
        title: "系统优势：",
        list: [
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
            desc:
              "公司的区块链、游戏产品可与视频直播应用进行对接，更有故事可讲",
            iconUrl: require("@/assets/images/pc/live/zb4.png"),
          },
        ],
      },
      caseData: {
        title: "案例：",
        descTxt: "案例包含技术团队从事的一些应用开发",
        lastTxt: "更多案例敬请期待",
      },
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    descTxt: {
      type: String,
      required: true,
    },
    swiperList: {
      type: Array,
      default() {
        return [];
      },
    },
    infoList: {
      type: Array,
      default() {
        return [];
      },
    },
    caseList: {
      type: Array,
      required: true,
    },
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

.internet-main {
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
    padding: 20px 10px;
  }
}

.commonWrap {
  .commonContent {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 49%;
      margin-right: 2%;
      margin-bottom: 25px;

      &:nth-child(2n + 2) {
        margin-right: 0;
      }

      .titleBox {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .icon {
          margin-right: 10px;
          img {
            width: 26px;
            height: 26px;
          }
        }

        .title {
          font-weight: 600;
          font-size: 14px;
        }
      }

      .desc {
        font-size: 12px;
        color: rgba(153, 153, 153, 1);
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
    justify-content: space-between;
    flex-wrap: wrap;

    .caseItem {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48%;
      height: 74px;
      text-align: center;

      img {
        width: 100%;
      }
    }
  }
}
</style>
