<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-18 11:20:53
 * @Desc: 互联网应用
-->
<template>
  <div class="internetApp">
    <banner type="product">
      <div class="bannerTxtBox">
        <p
          class="bannerTitle wow fadeInLeft"
          data-wow-delay="0.5s"
          v-for="(item, index) in bannerData"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </banner>
    <div class="main">
      <mainComp :infoData="infoData" />
    </div>
  </div>
</template>

<script>
import banner from "@/views/Mobile/components/banner";
import mainComp from "./components/mainComp";
import wowMixins from "@/mixins/wowMixins";
import { mapState } from "vuex";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      iconAndPathList: [
        {
          path: "liveVideo",
          iconUrl: require("@/assets/images/pc/applicationIcon1.png"),
        },
        {
          path: "oneToOne",
          iconUrl: require("@/assets/images/pc/applicationIcon2.png"),
        },
        {
          path: "socialDirsir",
          iconUrl: require("@/assets/images/pc/applicationIcon3.png"),
        },
        {
          path: "shortVideo",
          iconUrl: require("@/assets/images/pc/applicationIcon6.png"),
        },
      ],
    };
  },
  computed: {
    ...mapState("global", {
      activeRouter: "activeRouter",
    }),
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
  components: { banner, mainComp },
};
</script>

<style lang="scss" scoped>
.internetApp {
  .main {
    display: flex;
    background: #f5f6f8;
  }
}
</style>
