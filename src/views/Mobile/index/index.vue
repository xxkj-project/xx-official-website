<!--
 * @Author: wangshengxian
 * @Date: 2020-08-19 10:06:48
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 17:36:01
 * @Desc: 首页
-->
<template>
  <div class="home">
    <banner type="home" :bannerTextList="textList">
      <div class="bannerTitle">
        <p
          class="title wow"
          :class="index % 2 == 1 ? 'fadeInUp' : 'fadeInDown'"
          :data-wow-delay="index % 2 == 1 ? '0.3s' : '0.1s'"
          v-for="(item, index) in textList"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
      <div class="bannerDesc">
        <p
          class="wow fadeInUp"
          data-wow-delay="0.3s"
          v-for="(item, index) in bannerContentList"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </banner>

    <div class="main">
      <div class="product">
        <h4>{{ productInfoData.title }}</h4>
        <div
          class="item wow fadeInLeft"
          data-wow-delay="0.3s"
          v-for="(item, index) in productInfoData.list"
          :key="index"
        >
          <div class="productTop">
            <div
              class="icon setupIcon"
              :class="'icon_' + index"
              v-if="index % 2 === 0"
            ></div>
            <div
              class="desc "
              :class="index % 2 === 0 ? 'descRight' : 'descLeft'"
            >
              <h5>{{ item.title }}</h5>
              <p>{{ item.desc1 }}</p>
              <p>{{ item.desc2 }}</p>
            </div>
            <div
              class="icon setupIcon"
              :class="'icon_' + index"
              v-if="index % 2 === 1"
            ></div>
          </div>
          <btnComp :routerName="item.path" />
        </div>
      </div>

      <div class="solution">
        <h4>{{ $t("Index.solution.title") }}</h4>
        <div class="solutionContent">
          <div
            class="item"
            v-for="(item, index) in $t('Solution.content')"
            :key="index"
          >
            <img
              class="wow fadeIn"
              data-wow-delay="0.3s"
              :src="iconArr[index].iconUrl"
              alt=""
            />
            <span class="wow slideInLeft" data-wow-delay="0.4s">{{
              item.smallTitle
            }}</span>
          </div>
        </div>

        <btnComp routerName="solution" />
      </div>

      <div class="news">
        <h4>{{ $t("Index.news.title") }}</h4>
        <div class="newsContent">
          <homeSwiper :list="newsList"></homeSwiper>
        </div>
        <div class="newsBtnBox">
          <btnComp routerName="news" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
import homeSwiper from "@/views/Mobile/components/homeSwiper";
import btnComp from "@/views/Mobile/components/btnComp";
import { getNewsList } from "@/api/news";

export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      pathNameObj: {
        setupPath: "setup",
        applicationPath: "application",
        internetAppPath: "internetApp",
        dAppPath: "dapp",
      },

      iconArr: [
        { iconUrl: require("@/assets/images/home/solutionIcon1.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon2.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon3.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon4.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon5.png") },
        { iconUrl: require("@/assets/images/home/solutionIcon6.png") },
      ],
      newsList: [],
    };
  },
  computed: {
    i18nData() {
      console.log(this.$t("Index"));
      return this.$t("Index");
    },
    bannerInfoData() {
      const { banner } = this.i18nData;
      return banner;
    },
    textList() {
      const { title1, title2 } = this.bannerInfoData;
      let textArr = [title1, title2];
      return textArr;
    },
    bannerContentList() {
      const { content } = this.bannerInfoData;
      return content;
    },
    productInfoData() {
      const { title } = this.i18nData;
      let { setup, application, internetApp, dApp } = this.i18nData.product;
      const {
        setupPath,
        applicationPath,
        internetAppPath,
        dAppPath,
      } = this.pathNameObj;
      setup = { path: setupPath, ...setup };
      application = { path: applicationPath, ...application };
      internetApp = { path: internetAppPath, ...internetApp };
      dApp = { path: dAppPath, ...dApp };
      // console.log([setup, application, internetApp, dApp]);
      return {
        title,
        list: [setup, application, internetApp, dApp],
      };
    },
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      let params = { page: 1, per_page: 3, webp: 1 };
      getNewsList(params).then((res) => {
        const { data } = res;
        // console.log("-news-data-", data);
        let list = data.list;
        let result = [];
        list.map((val) => {
          let mid = { ...val };
          mid.coverurl = mid.coverurl.split("?")[0];
          result.push(mid);
        });
        // console.log("-home-news-", result);
        this.newsList = result;
      });
    },
  },
  components: { banner, btnComp, homeSwiper },
};
</script>
<style lang="scss" scoped>
$imgUrl: "~@/assets/images/home/";

.en {
  .bannerDesc {
    flex-direction: column;

    p {
      width: 100%;
      padding-left: 70px;
    }
  }
}

.bannerTitle {
  .title {
    position: relative;
    z-index: 20;
    text-align: center;
    color: #fff;
    font-size: 25px;
    letter-spacing: 2px;
    margin-bottom: 32px;
    padding: 0 15px;

    &:first-of-type {
      font-size: 32px;
    }
  }
}

.bannerDesc {
  display: flex;
  flex-wrap: wrap;
  font-size: 17px;
  color: #fff;

  p {
    display: flex;
    align-items: center;
    width: 50%;
    padding: 0 0 20px 50px;

    &:before {
      content: "";
      display: inline-block;
      width: 2px;
      height: 14px;
      background: #fff;
      margin-right: 6px;
    }
  }
}
.home {
  width: 100vw;

  /deep/ .bannerWrap {
    height: 503px;
  }

  .main {
    background: #f5f6f8;

    h4 {
      font-weight: 600;
      font-size: 18px;
      color: #222222;
      text-align: center;
      padding: 15px 0 25px 0;
    }
  }
}

.product {
  background: #fff;
  margin-bottom: 10px;

  .item {
    font-size: 12px;
    padding: 0 12px 16px;

    .productTop {
      display: flex;
      line-height: 16px;
      color: #999;
      margin-bottom: 8px;

      .icon {
        width: 150px;
        height: 130px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &:nth-child(2n + 1) {
          margin-right: 15px;
        }

        &:nth-child(2n + 2) {
          margin-left: 15px;
        }

        &.icon_0 {
          background-image: url("#{$imgUrl}productIcon1.png");
        }

        &.icon_1 {
          background-image: url("#{$imgUrl}productIcon2.png");
        }

        &.icon_2 {
          background-image: url("#{$imgUrl}productIcon3.png");
        }

        &.icon_3 {
          background-image: url("#{$imgUrl}productIcon4.png");
        }
      }

      .desc {
        flex: 1;
        letter-spacing: 2px;
        padding-top: 12px;

        h5 {
          font-size: 15px;
          color: #222;
          padding-bottom: 13px;
        }

        &.descRight {
          text-align: right;
        }

        &.descLeft {
          text-align: left;
        }
      }
    }
  }
}

.solution {
  background: #fff;
  padding: 0 12px 18px;
  margin-bottom: 10px;

  .solutionContent {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 28px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 132px;
      background: #f6f9ff;

      img {
        width: 57px;
        height: 65px;
      }

      span {
        font-size: 15px;
        color: #1b1c1d;
        text-align: center;
        padding-top: 12px;
      }
    }

    .item:nth-child(1),
    .item:nth-child(4),
    .item:nth-child(5) {
      background: #f2f5fb;
    }
  }
}

.news {
  background: #fff;

  .newsBtnBox {
    padding: 10px 0 20px 0;
  }
}
</style>
