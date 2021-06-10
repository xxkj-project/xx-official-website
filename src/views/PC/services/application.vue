<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:37:30
 * @Desc: 区块链应用
-->
<template>
  <div class="application">
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
          path: "/farm",
          iconUrl: require("@/assets/images/pc/applicationIcon2.png"),
        },
        {
          path: "/wallet",
          iconUrl: require("@/assets/images/pc/applicationIcon3.png"),
        },
        {
          path: "/virtualCurrency",
          iconUrl: require("@/assets/images/pc/applicationIcon7.png"),
        },
        {
          path: "/chainSetup",
          iconUrl: require("@/assets/images/pc/applicationIcon8.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").application;
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
.application {
  .main {
    display: flex;
    justify-content: center;
    background: #f5f6f8;
  }
}
</style>
