<!--
 * @Author: wangshengxian
 * @Date: 2020-09-01 14:12:10
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-15 10:49:46
 * @Desc: pc轮播图组件
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="item" :style="itemStyle">
          <img :src="item.imgUrl" alt="" />
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- 导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    isLoop: {
      type: Boolean,
      default: true,
    },
    itemStyle: {
      type: Object,
      default: function() {
        return { width: "600px", height: "300px" };
      },
    },
    list: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  created() {},
  mounted() {
    // console.log(this.list);
    this.initSwiper();
  },
  methods: {
    initSwiper(index = 0) {
      const loop = this.isLoop;
      let swiper = new Swiper(".swiper-container", {
        initialSlide: index, // 初始化slide索引
        direction: "horizontal", // 设置为水平方向切换(horizontal)或垂直方向切换(vertical)。
        grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        loop,
        effect: "coverflow",
        // slidesPerView: 'auto',
        coverflowEffect: {
          // rotate: 30,
          // stretch: 10,
          // depth: 60,
          // modifier: 2,
          // slideShadows: true,
          slideShadows: false,
          rotate: 0,
          stretch: 140,
          depth: 180,
          modifier: 1,
        },
        observer: true,
        observeParents: true,
        // autoplay: true,
        // loop: true,
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
      // 注册事件
      swiper.on("slideChange", function() {
        // console.log(111, this.activeIndex);
      });
      swiper.on("click", function() {
        // console.log("-click-", this.activeIndex);
      });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.swiper-container {
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;

    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
