<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 17:21:35
 * @Desc: 区块链应用 - 短视频平台
-->
<template>
  <div class="liveVideo">
    <div class="banner">
      <div class="banner-container wow fadeInLeft" data-wow-delay="0.5s">
        <p>短视频平台</p>
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
        mainTitle: "短视频平台",
        descTxt:
          " “伊恋”是杭州辛鑫科技有限公司旗下的短视频内容产品。该产品提供优质的短视频、热门视频等功能服务。",
        swiperList: [
          { imgUrl: require("@/assets/images/pc/live/shortVideoItem1.jpg") },
          { imgUrl: require("@/assets/images/pc/live/shortVideoItem2.jpg") },
        ],
      },
      featureList: [
        {
          title: "视频拍摄",
          desc: "高清细腻，剪辑、美化、滤镜特效等多功能的视频编辑。",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "小视频",
          desc:
            "优质视频内容的推广算法，让你的作品脱颖而出，每个人都可以看见。",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "圈子动态",
          desc: "对于喜欢的视频内容可以点赞收藏，评论发表自己的观点。",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
      ],
      advantageList: [
        {
          title: "稳定开发",
          desc:
            "强大的开发团队，拥有最先进的技术，可以提供完整的短视频应用的网络部署架构。",
          iconUrl: require("@/assets/images/pc/live/zb1.png"),
        },
        {
          title: "独立部署",
          desc: "支持独立部署，拥有自己的短视频服务，运营更安心。",
          iconUrl: require("@/assets/images/pc/live/zb2.png"),
        },
        {
          title: "运营支持",
          desc: "一系列的优质短视频推广算法方案、优质短视频资源助力您的运营。",
          iconUrl: require("@/assets/images/pc/live/zb3.png"),
        },
        {
          title: "扩展性",
          desc: "在原有的基础上进行其他功能的开发，更有多功能丰富产品。",
          iconUrl: require("@/assets/images/pc/live/zb4.png"),
        },
      ],
      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case1.jpg"),
        },
        {
          imgUrl: require("@/assets/images/pc/live/case2.jpg"),
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
