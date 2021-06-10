<template>
  <div class="contact">
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
      <div class="About_Main">
        <ul class="About_Main_item wow fadeInLeft" data-wow-delay="0.3s">
          <li>
            <img src="@/assets/images/common/phone.png" alt="" />
            <p>{{ $t("About.word15") }}</p>
            <p class="itemP">{{ tel }}</p>
          </li>
          <li>
            <img src="@/assets/images/common/mail.png" alt="" />
            <p>{{ $t("About.word16") }}</p>
            <p class="itemP">{{ email }}</p>
          </li>
        </ul>
        <ul class="About_Main_item wow fadeInRight" data-wow-delay="0.4s">
          <li>
            <img src="@/assets/images/common/address.png" alt="" />
            <p>{{ $t("About.word17") }}</p>
            <p class="address itemP">
              {{ $t("About.word20") }}
            </p>
          </li>
          <li>
            <img
              class="ewm"
              src="@/assets/images/common/icon-qrcode.png"
              alt=""
            />
            <p>{{ $t("About.word18") }}</p>
          </li>
        </ul>
      </div>
      <baidu-map
        :center="center"
        :zoom="zoom"
        class="map wow fadeInUp"
        data-wow-delay="0.3s"
      >
        <bm-marker :position="center" animation="BMAP_ANIMATION_BOUNCE">
        </bm-marker>
      </baidu-map>

      <div class="ways">
        <div class="way_item wow fadeInLeft" data-wow-delay="0.4s">
          <img src="@/assets/images/common/aircraft.png" alt="" />
          <p class="title">
            <span>{{ $t("About.word21") }}</span>
          </p>
          <p>
            {{ $t("About.word24") }}
          </p>
        </div>
        <div class="way_item wow fadeInUp" data-wow-delay="0.2s">
          <img src="@/assets/images/common/train.png" alt="" />
          <p class="title">{{ $t("About.word22") }}</p>
          <p>{{ $t("About.word25") }}</p>
        </div>
        <div class="way_item wow fadeInRight" data-wow-delay="0.4s">
          <img src="@/assets/images/common/car.png" alt="" />
          <p class="title">{{ $t("About.word23") }}</p>
          <p class="way">{{ $t("About.word26") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wowMixins from "@/mixins/wowMixins";
import banner from "@/views/Mobile/components/banner";
import { mobilePhone, mailBox } from "@/utils/globalData";
export default {
  mixins: [wowMixins],
  data() {
    return {
      tel: mobilePhone,
      email: mailBox,
      center: { lng: 120.07115, lat: 30.315416 },
      zoom: 15,
    };
  },
  computed: {
    i18nData() {
      return this.$t("About");
    },
    bannerData() {
      let bannerDesc1 = this.i18nData.word0;
      let bannerDesc2 = this.i18nData.word111;
      return [bannerDesc1, bannerDesc2];
    },
  },
  mounted() {},
  components: { banner },
};
</script>
<style lang="scss" scoped>
$imgUrl: "~@/assets/images/mobile/banner/";

.en {
  .contact {
    .bannerMainTitle {
      letter-spacing: 0;
    }
  }
}

.bannerMainTitle {
  padding-bottom: 15px;
}
.contact {
  background: rgba(255, 255, 255, 1);
  .main {
    padding: 20px 12px;
  }
}
.About_Main {
  &_item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    li {
      width: 169px;
      min-height: 135px;
      padding: 10px 9px;
      background: rgba(242, 245, 251, 1);
      img {
        width: 24px;
        margin: 15px 0 10px 63px;
        height: 24px;
      }
      .ewm {
        width: 62px;
        height: 62px;
        margin-left: 44px;
      }
      p {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(27, 28, 29, 1);
        text-align: center;
        line-height: 21px;
      }
    }
  }
}
.map {
  // width: 7.02rem;
  margin: 0 auto 20px;
  height: 193px;
  /deep/ .anchorBL {
    display: none;
  }
}
.ways {
  .way_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(242, 245, 251, 1);
    padding: 16px 16px 20px;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 25px;
      height: 25px;
    }
    p {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #1c1c1e;
      line-height: 25px;
    }
  }
}
</style>
