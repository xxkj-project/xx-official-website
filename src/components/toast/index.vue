<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-23 15:43:10
 * @Desc: 
-->
<!--  -->
<template>
  <div class="toast">
    <!-- 自定义加载动画 -->
    <transition name="toast-transition">
      <div class="toast-global" v-show="isShow">
        <div class="toast-content">
          <img
            class="toast-icon"
            src="@/assets/images/common/info.png"
            alt=""
          />
          <span class="toast-text">{{ text }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.toast-transition-leave-to {
  opacity: 1;
}
.toast-transition-leave {
  opacity: 0;
}
.toast-transition-leave-active {
  transition: all 0.3s;
}

.toast-global {
  position: fixed;
  left: 50%;
  // top: 50%;
  top: 80px;
  transform: translate(-50%);
  z-index: 1999;
  display: flex;
  justify-content: center;
  transition: opacity 0.3s linear;
  .toast-content {
    display: flex;
    width: 280px;
    // width: 100%;
    height: 40px;
    // line-height: 40px;
    // font-size: 16px;
    background: #edf2fc;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    text-align: left;
    padding: 4px 8px;

    .toast-text {
      font-size: 16px;
      line-height: 32px;
      font-style: oblique;
      padding-right: 20px;
    }

    .toast-icon {
      width: 24px;
      height: 24px;
      margin-top: 4px;
      margin-right: 3px;
    }
  }
}
</style>
