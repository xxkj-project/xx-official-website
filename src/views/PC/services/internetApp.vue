<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:37:03
 * @Desc: 互联网应用
-->
<template>
  <div class="internetApp">
    <bannerComp :descList="bannerData" />
    <div class="main">
      <mainComp :infoData="infoData" />
    </div>
  </div>
</template>

<script>
import bannerComp from "./components/bannerComp";
import mainComp from "./components/mainComp";
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "/liveVideo",
          iconUrl: require("@/assets/images/pc/applicationIcon1.png"),
        },
        {
          path: "/oneToOne",
          iconUrl: require("@/assets/images/pc/applicationIcon2.png"),
        },
        {
          path: "/socialDirsir",
          iconUrl: require("@/assets/images/pc/applicationIcon3.png"),
        },
        {
          path: "/shortVideo",
          iconUrl: require("@/assets/images/pc/applicationIcon6.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").internetApp;
    },
    bannerData() {
      let bannerDesc = this.i18nData.bannerText1;
      return [bannerDesc];
    },
    infoData() {
      let obj = this.i18nData;
      obj.content.map((val, index) => {
        obj.content[index] = { ...val, ...this.iconAndPathList[index] };
      });
      console.log("-infoData-", obj);
      return obj;
    },
  },
  created() {},
  mounted() {},
  methods: {},
  components: { bannerComp, mainComp },
};
</script>

<style lang="scss" scoped>
.internetApp {
  .main {
    display: flex;
    justify-content: center;
    background: #f5f6f8;
  }
}
</style>
