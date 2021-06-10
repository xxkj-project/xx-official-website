<template>
  <div class="header_wrapper">
    <header
      :class="{
        scroll: isScroll,
      }"
    >
      <div class="header">
        <router-link class="logo" to="/">
          <img :src="logoIcon" alt="杭州辛鑫科技-logo" />
        </router-link>

        <nav class="navWrap">
          <ul class="oneMenuBox">
            <li
              class="oneMenu"
              :class="{
                isSecondMenu: item.url === '',
                active: currentActIdx === index,
              }"
              v-for="(item, index) in oneMenuPaths"
              :key="index"
            >
              <div class="oneMenuItem" v-if="item.url === ''">
                {{ oneMenuList[index] }}
                <div class="secondMenuBox">
                  <router-link
                    class="secondItemTxt secondMenuItem"
                    :to="{ path: '/' + secondMenuPathObj[item.type][idx] }"
                    v-for="(subItem, idx) in secondMenuObj[item.type]"
                    :key="idx"
                    >{{ subItem }}</router-link
                  >
                </div>
              </div>
              <div class="oneMenuItem" v-else>
                <router-link class="oneItemTxt" :to="item.url">{{
                  oneMenuList[index]
                }}</router-link>
              </div>
            </li>
          </ul>
          <div class="languageBox" v-if="isOpenedI18n">
            <span
              :class="{ actLang: locale === 'en' }"
              @click="setLanguage('en')"
              >EN</span
            >
            /
            <span
              :class="{ actLang: locale === 'zh' }"
              @click="setLanguage('zh')"
              >中</span
            >
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "publicHeader",
  data() {
    return {
      currentActIdx: 0,
      oneMenuPaths: [
        { type: "home", url: "/" },
        { type: "product", url: "" },
        { type: "solution", url: "/solution" },
        { type: "news", url: "/news" },
        { type: "about", url: "" },
      ],
      secondMenuPathObj: {
        product: ["setup", "application", "internetApp", "dappDevelop"],
        about: ["aboutus", "contactUs"],
      },
    };
  },
  props: {
    isScroll: Boolean,
  },
  computed: {
    ...mapState("global", {
      locale: "locale",
      isOpenedI18n: "isOpenedI18n",
      activeRouter: "activeRouter",
    }),
    logoIcon() {
      let logoUrl =
        this.locale === "en"
          ? require("@/assets/images/common/logoEn.png")
          : require("@/assets/images/common/logoZh.png");
      return logoUrl;
    },
    i18nData() {
      console.log(this.$t("Header"));
      return this.$t("Header");
    },
    oneMenuList() {
      return this.i18nData.oneMenus;
    },
    secondMenuObj() {
      return this.i18nData.secondMenuObj;
    },
  },
  watch: {
    activeRouter(val) {
      // console.log("-header-watch-path-", val);
      this.currentActIdx = this.setCurrentActIdx(val);
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      console.log("-is-open-i18n-", this.isOpenedI18n);
      console.log("-current-router-", this.activeRouter);
      this.currentActIdx = this.setCurrentActIdx(this.activeRouter);
    });
  },
  methods: {
    setCurrentActIdx(val) {
      let idx = 0;
      if (this.secondMenuPathObj.product.includes(val)) {
        idx = 1;
      } else if (val === "solution") {
        idx = 2;
      } else if (val === "news") {
        idx = 3;
      } else if (this.secondMenuPathObj.about.includes(val)) {
        idx = 4;
      } else if (val === "") {
        idx = 0;
      } else {
        idx = -1;
      }
      return idx;
    },
    setTitle(locale) {
      const { meta } = this.$route;
      if (locale === "zh") {
        document.title =
          meta && meta.zh_title
            ? meta.zh_title + " - " + "杭州辛鑫科技"
            : "杭州辛鑫科技";
      } else {
        document.title =
          meta && meta.en_title
            ? meta.en_title + " - " + "Hangzhou Xinxin Technology"
            : "Hangzhou Xinxin Technology";
      }
    },

    // toWeb() {
    //   // 辛鑫俱乐部官网
    //   window.open("https://www.xxclub.vip");
    // },
    setLanguage(language) {
      this.setTitle(language);
      this.$store.commit("global/setLanguage", language);
      this.$i18n.locale = language;
    },
  },
};
</script>

<style lang="scss" scoped>
$insideWidth: 1320px;
$pcHeaderHeight: 72px;
.header_wrapper {
  height: $pcHeaderHeight;

  header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background: #fff;
    transition: all 0.25s ease;

    &:hover {
      transition: all 0.25s ease;
    }
    &.scroll {
      // 滑动改变头部背景色
      // background-color: #1b1c1d;
      // background-color: #fff;
      box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: $insideWidth;
      height: $pcHeaderHeight;
      margin: 0 auto;
      .logo {
        float: left;
        height: 40px;
        margin-left: 18px;
        cursor: pointer;

        img {
          height: 40px;
        }
      }
    }
  }
}

.navWrap {
  display: flex;
  align-items: center;

  .languageBox {
    margin-left: 30px;
    cursor: pointer;

    .actLang {
      color: #00ccff;
    }
  }
}

.oneMenuBox {
  display: flex;
  position: relative;
  line-height: 40px;

  .oneMenu {
    position: relative;
    font-size: 18px;
    padding: 0;
    margin: 0 10px;
    color: #222;
    cursor: pointer;
    transition: all 0.25s ease;

    width: 120px;
    text-align: center;
    &:first-child {
      width: 80px;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: #00ccff;
      transition: 400ms ease all;
    }
    &.active {
      color: #00ccff;
      &:after {
        width: 100%;
      }
    }
    .oneMenuItem {
      .secondMenuBox {
        position: absolute;
        top: 35px;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
        display: none;
        // padding: 0 20px;

        .secondMenuItem {
          display: block;
          color: rgba(255, 255, 255, 0.8);
          line-height: 40px;
          cursor: pointer;
          transition: 400ms ease all;

          &:hover {
            background: #00ccff;
            transition: 400ms ease all;
          }
        }
      }
    }

    &:hover {
      color: #00ccff;
      transition: all 0.25s ease;
      &:after {
        width: 100%;
        transition: 400ms ease all;
      }
    }

    &.isSecondMenu:hover {
      .oneMenuItem {
        .secondMenuBox {
          display: block;
        }
      }
    }
  }
}
</style>
