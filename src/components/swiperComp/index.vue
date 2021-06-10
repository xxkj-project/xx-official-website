<!-- 
   轮播图
-->
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="content">
          <div class="slide_title wow fadeInDown" data-wow-delay="0.1s">
            {{ $t("Index.word1") }}
          </div>
          <!-- <div
            v-if="app.locale == 'en'"
            class="slide_title wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {{ $t("Index.word111") }}
          </div> -->
          <div class="slide_title wow fadeInDown" data-wow-delay="0.1s">
            {{ $t("Index.word2") }}
          </div>
          <!-- <div
            v-if="app.locale == 'en'"
            class="slide_title wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {{ $t("Index.word222") }}
          </div> -->
        </div>
      </div>
      <div class="swiper-slide">
        <div class="content">
          <div class="slide_title">{{ $t("Index.word3") }}</div>
          <div class="slide_title">{{ $t("Index.word4") }}</div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
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
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.swiper-slide {
  &:nth-child(2n) {
    .slide_title {
      &:nth-child(2n + 1) {
        margin-bottom: 0;
      }
    }
  }
  &:nth-child(2n + 1) {
    .slide_title {
      &:last-child {
        font-size: 74px;
        font-weight: bold;
      }
    }
  }
}
.swiper-container {
  // display: none;
}
.swiper-slide {
  position: relative;
  height: 600px;
  // &:nth-child(2n) {
  //   .content {
  //     background: url("../../assets/images/index_banner1.png") no-repeat center /
  //       cover;
  //   }
  // }
  // &:nth-child(2n + 1) {
  //   .content {
  //     background: url("../../assets/images/index_banner2.png") no-repeat center /
  //       cover;
  //   }
  // }
  .content {
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding-top: 120px;
  }
  .slide_title {
    width: 1300px;
    font-size: 90px;
    line-height: 90px;
    margin-bottom: 60px;
    letter-spacing: 4px;
    color: #fff;
  }
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  margin: 0 6px !important;
  background-color: rgba(255, 255, 255, 0.8);
}
.swiper-pagination-bullet-active {
  background-color: #00ccff;
}
</style>
