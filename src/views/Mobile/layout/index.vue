<!--
 * @Author: wangshengxian
 * @Date: 2020-09-01 11:08:34
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-21 10:06:51
 * @Desc: mobile -- layout布局
-->
<template>
  <div class="mobile-layout" :class="{ en: locale === 'en' }">
    <header class="layout-header">
      <headerBar :isScroll="scrollTop != 0" />
    </header>
    <main class="layout-main">
      <transition name="fade" mode="out-in">
        <router-view class="mobile-main" :key="key" />
      </transition>
    </main>
    <footer class="layout-footer">
      <footerLink ref="child" />
    </footer>

    <div class="fixedBox" @click="onOpenMsgDialog">
      <span class="iconfont icon-message1"></span>
      <span class="txt">留言</span>
    </div>

    <messageBox :dialogVis.sync="isShowMessageBox" />
  </div>
</template>

<script>
import headerBar from "./headerBar";
import footerLink from "./footerLink";
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
  watch: {
    $route() {
      // 初始化 footerLink组件数据模型
      this.$refs.child.init();
    },
  },
  created() {},
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
    onOpenMsgDialog() {
      this.isShowMessageBox = true;
    },
  },
  components: { headerBar, footerLink, messageBox },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类

.mobile-layout {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.fixedBox {
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  // background: rgba(0, 0, 0, 0.7);
  background: rgba(255, 255, 255, 1);
  font-size: 12px;
  // color: #fff;
  color: #000;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 1px #ccc;

  .iconfont {
    font-size: 16px;
  }

  // span {
  //   width: 40px;
  //   height: 40px;
  //   background: rgba(0, 0, 0, 0.7);
  //   color: #fff;
  //   font-size: 12px;
  // }
}
</style>
