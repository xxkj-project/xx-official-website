<!--
 * @Author: wangshengxian
 * @Date: 2020-09-11 17:24:43
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-23 17:42:34
 * @Desc: 
-->
<template>
  <div class="btnWrap wow fadeInRight" data-wow-delay="0.4s">
    <span class="btn" @click="onOpenPage">{{ btnText }}</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    onEvent: {
      type: Function,
    },
    btnText: {
      type: String,
      default: "查看更多",
    },
    routerName: {
      type: String,
      default: "",
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onOpenPage() {
      if (this.onEvent) {
        this.onEvent();
        return;
      }
      if (!this.routerName) {
        new Error("请添加需要跳转的路由path,不带/");
      }
      console.log("查看更多-btn：", "-routerName-", this.routerName);
      this.$store.commit("global/setActiveRouter", this.routerName);
      this.$router.push({ path: this.routerName });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.btnWrap {
  display: flex;
  justify-content: center;
  width: 100%;
  .btn {
    border-radius: 2px;
    background: #21bdff;
    font-size: 15px;
    color: #fff;
    padding: 6px 8px;
    letter-spacing: 1px;
    &:after {
      content: ">>";
      padding-left: 6px;
    }
  }
}
</style>
