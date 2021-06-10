<template>
  <div class="about">
    <banner type="aboutUs">
      <div class="bannerTxtBox">
        <p
          class="bannerMainTitle wow fadeInLeft"
          data-wow-delay="0.5s"
          v-for="(item, index) in bannerData"
          :key="index"
        >
          {{ item }}
        </p>
      </div>
    </banner>

    <div class="main">
      <div class="main_tlx">
        <div class="wow fadeInLeft" data-wow-delay="0.1s">
          {{ $t("About.word2") }}
        </div>
        <div class="wow fadeInLeft" data-wow-delay="0.1s">
          {{ $t("About.word3") }}
        </div>
        <div class="wow fadeInRight" data-wow-delay="0.3s">
          {{ $t("About.word4") }}
        </div>
      </div>
      <div class="main_culture">
        <div class="culture">
          <img
            class="wow fadeInLeft"
            src="@/assets/images/common/culture.png"
            alt=""
          />
          <div class="content wow fadeInRight">
            <h1>{{ $t("About.word19") }}</h1>
            <h2>{{ $t("About.word5") }}</h2>
            <p>{{ $t("About.word6") }}</p>
            <h2>{{ $t("About.word7") }}</h2>
            <p>{{ $t("About.word8") }}</p>
            <h2>{{ $t("About.word9") }}</h2>
            <p>{{ $t("About.word10") }}</p>
          </div>
        </div>
      </div>
      <div class="main_brand">
        <div class="culture">
          <div class="placehold"></div>
          <div>
            <img
              class="wow fadeInRight"
              src="@/assets/images/common/brand.png"
              alt=""
            />
          </div>
          <div class="content wow fadeInLeft">
            <h1>{{ $t("About.word11") }}</h1>
            <p>{{ $t("About.word12") }}</p>
          </div>
        </div>
      </div>
      <div class="main_standard">
        <div class="culture">
          <img
            class="wow fadeInLeft"
            src="@/assets/images/common/standard.png"
            alt=""
          />
          <div class="content wow fadeInRight">
            <h1>{{ $t("About.word13") }}</h1>
            <p>{{ $t("About.word14") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
export default {
  mixins: [wowMixins],
  data() {
    return {};
  },
  computed: {
    i18nData() {
      return this.$t("About");
    },
    bannerData() {
      let bannerDesc1 = this.i18nData.word0;
      let bannerDesc2 = this.i18nData.word1;
      return [bannerDesc1, bannerDesc2];
    },
  },
  mounted() {},
  components: { banner },
};
</script>
<style lang="scss">
$imgUrl: "~@/assets/images/mobile/banner/";
.en {
  .about {
    .bannerMainTitle {
      letter-spacing: 0;
    }
  }
}

.bannerMainTitle {
  padding-bottom: 15px;
}

.about {
  background: rgba(255, 255, 255, 1);

  .main {
    padding: 20px 0 0;
    .main_tlx {
      padding: 0 12px;
      font-size: 15px;
      text-indent: 2em;
      line-height: 25px;
      padding-bottom: 20px;
      color: rgba(102, 102, 102, 1);
      & > div {
        &:nth-child(2) {
          margin: 8px 0;
        }
      }
    }
    .main_culture {
      background: rgba(242, 245, 251, 1);
      .culture {
        padding: 12px;
        width: 100%;
        height: 100%;

        img {
          width: 150px;
          height: 160px;
          margin: 15px 0;
          float: left;
        }
        .content {
          font-size: 12px;
          text-align: right;
          h1 {
            font-size: 15px;
            font-weight: bold;
            line-height: 32px;
          }
          h2 {
            font-size: 12px;
            font-weight: bold;
            line-height: 35px;
          }
          p {
            line-height: 24px;
          }
        }
      }
    }
    .main_brand {
      .culture {
        padding: 12px;
        width: 100%;
        height: 100%;
        position: relative;
        .placehold {
          float: right;
          height: 1.2rem;
          width: 0.9rem;
        }
        img {
          width: 150px;
          height: 160px;
          clear: right;
          float: right;
        }
        .content {
          font-size: 12px;
          text-align: left;
          h1 {
            font-size: 15px;
            font-weight: bold;
            line-height: 0.68rem;
          }
          p {
            line-height: 25px;
          }
        }
      }
    }
    .main_standard {
      background: rgba(242, 245, 251, 1);
      .culture {
        padding: 12px;
        width: 100%;
        height: 100%;
        img {
          width: 150px;
          height: 160px;
          margin: 15px 10px 0 0;
          float: left;
        }
        .content {
          font-size: 12px;
          text-align: right;
          h1 {
            font-size: 15px;
            font-weight: bold;
            line-height: 35px;
          }
          p {
            line-height: 25px;
          }
        }
      }
    }
  }
}
</style>
