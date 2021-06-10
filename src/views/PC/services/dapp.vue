<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 16:37:17
 * @Desc: DAPP落地
-->
<template>
  <div class="dAppDevelop">
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
          path: "/dAppDevelop",
          iconUrl: require("@/assets/images/pc/applicationIcon7.png"),
        },
      ],
    };
  },
  computed: {
    i18nData() {
      return this.$t("Service").dApp;
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
.dAppDevelop {
  .main {
    display: flex;
    justify-content: center;
    background: #f5f6f8;
  }
}
</style>
