<!--
 * @Author: wangshengxian
 * @Date: 2020-08-31 14:31:57
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-16 16:47:08
 * @Desc: 区块链应用 - 短视频平台
-->
<template>
  <div class="liveVideo">
    <banner type="live">
      <div class="bannerTxtBox">
        <p class="bannerTitle wow fadeInLeft" data-wow-delay="0.5s">
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
        { imgUrl: require("@/assets/images/pc/live/shortVideoItem1.jpg") },
        { imgUrl: require("@/assets/images/pc/live/shortVideoItem2.jpg") },
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
      infoData: {
        bannerMainTitle: "短视频平台",
        mainTitle: "短视频平台",
        descTxt:
          " “伊恋”是杭州辛鑫科技有限公司旗下的短视频内容产品。该产品提供优质的短视频、热门视频等功能服务。",
        content: [
          {
            title: "系统功能：",
            list: [
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
          },
          {
            title: "系统优势：",
            list: [
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
                desc:
                  "一系列的优质短视频推广算法方案、优质短视频资源助力您的运营。",
                iconUrl: require("@/assets/images/pc/live/zb3.png"),
              },
              {
                title: "扩展性",
                desc: "在原有的基础上进行其他功能的开发，更有多功能丰富产品。",
                iconUrl: require("@/assets/images/pc/live/zb4.png"),
              },
            ],
          },
        ],
      },
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
