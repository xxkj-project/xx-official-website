<template>
  <div class="header">
    <div class="headerWrap" :class="{ scroll: isScroll }">
      <div class="leftIcon " @click="openPanel">
        <i :class="{ activeDao: addressShow == true }"></i>
      </div>
      <div class="logo">
        <img class="logoIcon" :src="logoUrl" alt @click="onOpenIndex" />
      </div>
      <div class="rightIcon" @click.stop="openLang" v-if="isOpenedI18n">
        {{ langText }}
        <i
          class="iconfont icon-icon--"
          style="font-size:.3rem;margin-left:.003rem;"
        ></i>
      </div>
      <div class="language" id="lang" v-if="langShow" @click.stop="closeLang()">
        <div class="lang_padding"></div>
        <div class="choose_lang">
          <div
            class="lang_ "
            :class="{ langActive: lang == 'zh' }"
            @click.stop="setLanguage('zh')"
          >
            简体中文
          </div>
          <div
            class="lang_"
            :class="{ langActive: lang == 'tw' }"
            @click.stop="setLanguage('tw')"
          >
            繁体中文
          </div>
          <div
            class="lang_"
            :class="{ langActive: lang == 'en' }"
            @click.stop="setLanguage('en')"
          >
            English
          </div>
        </div>
      </div>
      <transition name="show">
        <nav class="nav_menu" v-show="addressShow" @click="closePanel">
          <ul>
            <li
              class="menu-item"
              :class="{ active: currPagePath === item.path }"
              v-for="(item, index) in panelList"
              :key="index"
              @click.stop="onOpenPage(index, item.path)"
            >
              {{ item.text }}
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookies from "js-cookie";
export default {
  name: "publicHeader",
  data() {
    return {
      currPagePath: "index",
      panelPathObj: [
        "index",
        "setup",
        "application",
        "internetApp",
        "dapp",
        "solution",
        "news",
        "about",
        "contact",
      ],
      langShow: false,
      langText: "简",
      addressShow: false,
      lang: "",
    };
  },
  components: {},
  props: {
    isScroll: Boolean,
  },
  computed: {
    ...mapState("global", {
      locale: "locale",
      isOpenedI18n: "isOpenedI18n",
      activeRouter: "activeRouter",
    }),
    logoUrl() {
      let logoArr = {
        zh: require("@/assets/images/common/logoZh.png"),
        en: require("@/assets/images/common/logoEn.png"),
      };
      return this.locale === "en" ? logoArr.en : logoArr.zh;
    },
    panelList() {
      let result = [];
      let panelArr = this.$t("MobileHeader").content;
      panelArr.map((val, index) => {
        let mid = { path: this.panelPathObj[index], text: val };
        result.push(mid);
      });
      return result;
    },
  },
  watch: {
    activeRouter(newVal, oldVal) {
      console.log("-watch-headerbar-router-", newVal, oldVal);
      this.currPagePath = newVal;
    },
  },
  created() {
    this.getLanguage();
  },
  mounted() {
    this.currPagePath = this.activeRouter;
  },
  methods: {
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
    onOpenIndex() {
      if (this.currPagePath === "index") return;
      this.currPagePath = "index";
      this.$router.push("/mobile/index");
    },
    onOpenPage(index, path) {
      console.log("-curr-path-", this.currPagePath, "-to-path-", path);
      console.log("-panel-show-", this.addressShow);
      if (this.currPagePath === path) return;
      this.currPagePath = path;
      if (this.addressShow) {
        // 防止在 panel 未消失的时候快速点击新打开的界面跳转选项，造成点击的任然是 panel 的菜单项
        this.$router.push("/mobile/" + path);
        this.addressShow = false;
      }
    },
    // toWeb() {
    //   window.open("https://www.xxclub.vip");
    // },

    setLanguage(language) {
      console.log("-set-language-", language);
      this.setTitle(language);
      this.lang = language;
      this.$i18n.locale = language;
      // this.langShow = false;
      this.$store.commit("global/setLanguage", language);
      switch (language) {
        case "zh":
          this.langText = "简";
          break;
        case "tw":
          this.langText = "繁";
          break;
        case "en":
          this.langText = "En";
          break;
        default:
          this.langText = "简";
          break;
      }
    },
    getLanguage() {
      var lang = Cookies.get("locale") || "zh";
      this.lang = lang;
      console.log(this.lang);
      switch (lang) {
        case "zh":
          this.langText = "简";
          break;
        case "tw":
          this.langText = "繁";
          break;
        case "en":
          this.langText = "En";
          break;
        default:
          this.langText = "简";
          break;
      }
    },
    // 打开左边面板
    openPanel() {
      this.addressShow = true;
    },
    closePanel() {
      this.addressShow = false;
    },
    // 打开语言设置选择框
    openLang() {
      // console.log("choose");
      this.langShow = true;
    },
    closeLang() {
      this.langShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$imgUrl: "~@/assets/images/mobile/";
$headerHeight: 50px;
$menuChildWidth: 260px;

.header {
  height: $headerHeight;
}

.headerWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: $headerHeight;
  background-color: #fff;
  line-height: $headerHeight;
  box-sizing: content-box;
  .leftIcon {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: $headerHeight;
    padding: 0 10px;
    i {
      width: 22px;
      height: 22px;
      background: url("#{$imgUrl}navIcon.png") no-repeat center / cover;
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: $headerHeight;
    .logoIcon {
      height: 20px;
    }
  }
  .rightIcon {
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 15px;
    line-height: $headerHeight;
    text-align: right;
    padding: 0 10px;
  }
  .language {
    position: fixed;
    top: 0;
    z-index: 99;
    // background: rgba(39, 43, 47, 0.6);
    // transition: all 0.25s ease;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0.3rem;

    .choose_lang {
      float: right;
      width: 25%;
      background: rgba(39, 43, 47, 0.8);
      box-shadow: -0.01rem 0.01rem 0.02rem 0.01rem rgba(255, 255, 255, 0.2);
      padding: 0.3rem 0.2rem 0.5rem 0.2rem;
      margin-top: 1rem;

      .lang_ {
        height: 0.7rem;
        line-height: 0.7rem;
        color: rgba(255, 255, 255, 0.8);
        transition: 400ms ease all;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      }

      .langActive {
        color: #00ccff;
        border-bottom: 1px solid #00ccff;
      }
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      right: 80%;
    }
    100% {
      opacity: 1;
      right: 0;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
      left: 0;
    }
    100% {
      opacity: 0;
      left: -80%;
    }
  }

  .show-enter-active,
  .show-leave-active {
    transition: left 2s;
  }

  .show-enter-active {
    animation: show 0.5s;
  }

  .show-leave-active {
    animation: hide 0.5s;
  }

  .show-enter,
  .show-leave-to {
    opacity: 0;
  }

  .nav_menu {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    padding-top: $headerHeight;
    z-index: 100;

    ul {
      position: relative;
      width: $menuChildWidth;
      height: 100%;
      background: #fff;
      padding: 20px 0 0 20px;

      li {
        position: relative;
        font-size: 18px;
        color: #222;
        // padding: 10px 0;
        transition: all 0.25s ease;

        &.active {
          color: #00ccff;
        }
      }
    }
  }
}
</style>
