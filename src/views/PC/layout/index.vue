<!--
 * @Author: wangshengxian
 * @Date: 2020-09-01 11:08:34
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 17:05:50
 * @Desc: pc -- layout布局
-->
<template>
  <div class="pc-layout">
    <header class="layout-header">
      <headerBar :isScroll="scrollTop != 0" />
    </header>

    <main class="layout-main" :class="{ en: locale === 'en' }">
      <transition name="fade" mode="out-in">
        <router-view class="pc-main" :key="key" />
      </transition>
    </main>

    <footer class="layout-footer">
      <footerLink />
    </footer>

    <fixedRC @openMsg="handleOpenMsg" />

    <messageBox :dialogVis.sync="isShowMessageBox" />
  </div>
</template>

<script>
import headerBar from "./headerBar";
import footerLink from "./footerLink";
import fixedRC from "./fixed/fixedRC";
import messageBox from "./messageBox";
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      scrollTop: 0,
      isShowMessageBox: false,
    };
  },
  computed: {
    ...mapState("global", {
      locale: "locale",
    }),
    key() {
      return this.$router.path;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      console.log("-clientHeight-", clientHeight);
      this.scrollTop = window.scrollY;
    },
    handleOpenMsg(data) {
      // console.log(data);
      this.isShowMessageBox = data;
    },
  },
  components: { headerBar, footerLink, fixedRC, messageBox },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.webside-layout {
  height: 100%;
  // overflow-y: auto;
}
</style>
