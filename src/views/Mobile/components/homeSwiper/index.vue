<!-- 
   首页新闻资讯轮播
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="item" @click="onOpenNewsDetail(item)">
          <img :src="item.coverurl" alt="" />
          <p class="one-txt-cut">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <!-- 分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- 导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
    <!-- 滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import wowMixins from "@/mixins/wowMixins";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  created() {},
  mounted() {
    this.initSwiper();
  },
  methods: {
    onOpenNewsDetail(item) {
      const { id } = item;
      console.log("-id-", id);
      this.$router.push({ path: "newsDetail", query: { id } });
    },
    initSwiper(index = 1) {
      let swiper = new Swiper(".swiper-container", {
        initialSlide: index, // 初始化slide索引
        direction: "horizontal", // 设置为水平方向切换(horizontal)或垂直方向切换(vertical)。
        // grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。（根据浏览器形状有所不同）
        loop: true,
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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },

        // // 如果需要滚动条
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });
      // 注册事件
      swiper.on("slideChange", function() {
        console.log("-slide-change-");
      });
      // swiper.on("click", function() {
      //   console.log("-click-", this.activeIndex);
      // });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.swiper-container {
  padding-bottom: 20px;
  /deep/ .swiper-slide-active {
    // box-shadow:0px 5px 29px 1px red;
  }
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item {
      // box-shadow: -5px 5px 10px 2px red;
      box-shadow: 0px 5px 29px 1px rgba(0, 0, 0, 0.1);

      img {
        width: 200px;
        height: 138px;
      }

      p {
        width: 200px;
        background: #fff;
        text-align: center;
        font-size: 13px;
        color: #1a1a1a;
        padding: 10px 12px;
      }
    }
  }
}
</style>
