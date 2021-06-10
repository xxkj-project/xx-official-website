<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 16:35:44
 * @Desc: 区块链应用 - 视频直播
-->
<template>
  <div class="liveVideo">
    <banner type="live">
      <div class="bannerTxtBox">
        <p class="bannerMainTitle wow fadeInLeft" data-wow-delay="0.5s">
          {{ bannerMainTitle }}
        </p>
      </div>
    </banner>

    <div class="main">
      <internetMain
        :title="mainTitle"
        :descTxt="descTxt"
        :swiperList="swiperList"
        :infoList="infoList"
        :caseList="caseList"
      />
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
import internetMain from "@/views/Mobile/details/components/internetMain";

export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      swiperList: [
        { imgUrl: require("@/assets/images/pc/live/liveVideoItem1.jpg") },
      ],
      infoData: {
        bannerMainTitle: "视频直播",
        mainTitle: "直播",
        descTxt:
          " “唐僧直播”是杭州辛鑫科技有限公司旗下的视频直播产品。该产品提供优质主播直播、优质短视频、精彩回放、礼物打赏等功能服务。",
        content: [
          {
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
          {
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
        ],
      },

      caseList: [
        {
          imgUrl: require("@/assets/images/pc/live/case2.jpg"),
        },
        {
          imgUrl: require("@/assets/images/pc/live/case3.jpg"),
        },
      ],
    };
  },

  computed: {
    bannerMainTitle() {
      return this.infoData.bannerMainTitle;
    },
    mainTitle() {
      return this.infoData.mainTitle;
    },
    descTxt() {
      return this.infoData.descTxt;
    },
    infoList() {
      return this.infoData.content;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { banner, internetMain },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
