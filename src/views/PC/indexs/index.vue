<template>
  <div class="index_wrap">
    <div class="banner">
      <homeBanner />
    </div>

    <div class="service">
      <div class="serviceWrap">
        <div class="mainTitle wow fadeInDown" data-wow-delay="0.1s">
          {{ productData.title }}
        </div>
        <ul>
          <li
            class="setupWrap wow zoomIn"
            data-wow-delay="0.2s"
            v-for="(item, index) in productData.list"
            :key="index"
          >
            <div class="item">
              <div class="itemWrap">
                <span
                  class="itemIcon wow fadeIn"
                  :class="'icon' + '_' + index"
                  data-wow-delay="0.3s"
                ></span>
                <p class="itemTitle wow fadeInUp" data-wow-delay="0.3s">
                  {{ item.title }}
                </p>
                <p class="itemDesc wow fadeInUp" data-wow-delay="0.3s">
                  {{ item.desc1 }}<br />
                  {{ item.desc2 }}
                </p>
              </div>

              <router-link :to="{ path: '/' + item.pathName }">
                <div
                  class="comMoreBtn applicationMoreBtn wow lightSpeedIn"
                  data-wow-delay="0.5s"
                >
                  {{ moreBtnText }}
                </div>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="solutions">
      <div class="solutionsWrap">
        <div class="mainTitle wow fadeInDown" data-wow-delay="0.1s">
          {{ $t("Index.solution.title") }}
        </div>
        <ul class="content">
          <li>
            <span class="solutionIcon1 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[0] }}
            </p>
          </li>
          <li>
            <span class="solutionIcon2 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[1] }}
            </p>
          </li>
          <li>
            <span class="solutionIcon3 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[2] }}
            </p>
          </li>
          <li>
            <span class="solutionIcon4 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[3] }}
            </p>
          </li>
          <li>
            <span class="solutionIcon5 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[4] }}
            </p>
          </li>
          <li>
            <span class="solutionIcon6 wow fadeIn" data-wow-delay="0.3s"></span>
            <p class="wow slideInLeft" data-wow-delay="0.6s">
              {{ $t("Index").solution.content[5] }}
            </p>
          </li>
        </ul>
        <div
          class="comMoreBtn solutionMoreBtn wow lightSpeedIn"
          data-wow-delay="0.5s"
          @click="onOpenPage('solution')"
        >
          {{ moreBtnText }}
        </div>
      </div>
    </div>

    <div class="news">
      <div class="newsWrap">
        <div class="mainTitle wow fadeInDown" data-wow-delay="0.1s">
          {{ $t("Index.news.title") }}
        </div>
        <ul>
          <li
            @mouseenter="newsMouseEnterHandle(index)"
            @mouseleave="newsMouseLeaveHandle(index)"
            :class="{ active: index == newsActive }"
            v-for="(item, index) in newsList"
            :key="index"
          >
            <div class="item" @click="onOpenNewsDetail(item)">
              <img :src="item.coverurl" alt="" />
              <p class="one-txt-cut">{{ item.title }}</p>
            </div>
          </li>
        </ul>
        <div
          class="comMoreBtn newsMoreBtn wow lightSpeedIn"
          data-wow-delay="0.5s"
          @click="onOpenPage('news')"
        >
          {{ moreBtnText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeBanner from "@/views/PC/components/homeBanner";
import wowMixins from "@/mixins/wowMixins";
import { getNewsList } from "@/api/news";

export default {
  name: "index",
  mixins: [wowMixins],
  data() {
    return {
      newsActive: "1",
      newsList: [],
    };
  },
  components: { homeBanner },
  computed: {
    i18nData() {
      return this.$t("Index");
    },
    moreBtnText() {
      const { btnText } = this.i18nData;
      return btnText;
    },
    productData() {
      let {
        title,
        setup,
        application,
        internetApp,
        dApp,
      } = this.i18nData.product;
      setup = { pathName: "setup", ...setup };
      application = { pathName: "application", ...application };
      internetApp = { pathName: "internetApp", ...internetApp };
      dApp = { pathName: "dAppDevelop", ...dApp };
      return {
        title,
        list: [setup, application, internetApp, dApp],
      };
    },
  },
  watch: {},
  created() {
    this.getNewsData();
  },
  mounted() {},

  methods: {
    onOpenPage(pathName) {
      // console.log("-pathname-", pathName);
      this.$router.push({ path: `/${pathName}` });
    },

    refresh() {
      this.$router.replace({
        path: "/index ",
      });
    },

    newsMouseEnterHandle(index) {
      // console.log(index);
      this.newsActive = index;
    },
    newsMouseLeaveHandle() {
      // console.log(index);
    },
    onOpenNewsDetail(item) {
      // console.log("-item-data-", item.id);
      const { id } = item;
      const linkObj = this.$router.resolve({
        path: "/newsDetail",
        query: { id },
      });
      window.open(linkObj.href, "_blank");
    },
    getNewsData() {
      let params = { page: 1, per_page: 3, webp: 1 };
      // console.log(params);
      getNewsList(params).then((res) => {
        // console.log("-res-", res);
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
};
</script>

<style lang="scss">
@import "./index";
</style>
