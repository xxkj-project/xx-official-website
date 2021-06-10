<template>
  <div class="contact_wrap">
    <div class="contact_header">
      <div class="header_main">
        <div class="header_text wow fadeInDown" data-wow-delay="0.1s">
          {{ $t("About.word1") }}
        </div>
        <div class="header_tx wow fadeInUp" data-wow-delay="0.3s">
          CONTACT US
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_item  wow fadeInLeft" data-wow-delay="0.4s">
        <img src="@/assets/images/common/phone.png" alt="" />
        <p>{{ $t("About.word15") }}</p>
        <p class="itemP">{{ tel }}</p>
      </div>
      <div class="contact_item  wow fadeInLeft" data-wow-delay="0.2s">
        <img src="@/assets/images/common/mail.png" alt="" />
        <p>{{ $t("About.word16") }}</p>
        <p class="itemP">{{ mail }}</p>
      </div>
      <div class="contact_item  wow fadeInRight" data-wow-delay="0.2s">
        <img src="@/assets/images/common/address.png" alt="" />
        <p>{{ $t("About.word17") }}</p>
        <p class="address itemP">
          {{ $t("About.word20") }}
        </p>
      </div>
      <div class="contact_item  wow fadeInRight" data-wow-delay="0.4s">
        <div class="qrcodeBox">
          <qrCode />
        </div>
        <p>{{ $t("About.word18") }}</p>
      </div>
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
    <div class="ridingMode contact">
      <div class="ridingMode_item wow fadeInLeft" data-wow-delay="0.4s">
        <img src="@/assets/images/common/aircraft.png" alt="" />
        <p>{{ $t("About.word21") }}</p>
        <p class="ways">
          {{ $t("About.word24") }}
        </p>
      </div>
      <div class="ridingMode_item wow fadeInUp" data-wow-delay="0.2s">
        <img src="@/assets/images/common/train.png" alt="" />
        <p>{{ $t("About.word22") }}</p>
        <p class="ways">{{ $t("About.word25") }}</p>
      </div>
      <div class="ridingMode_item wow fadeInRight" data-wow-delay="0.4s">
        <img src="@/assets/images/common/car.png" alt="" />
        <p>{{ $t("About.word23") }}</p>
        <p class="ways">{{ $t("About.word26") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
// import BMapGL from "BMap";
import qrCode from "@/components/qrCode";
import wowMixins from "@/mixins/wowMixins";
import { mobilePhone, mailBox } from "@/utils/globalData";
export default {
  mixins: [wowMixins],
  data() {
    return {
      tel: mobilePhone,
      mail: mailBox,
      center: { lng: 120.07115, lat: 30.315416 },
      zoom: 18,
    };
  },
  computed: {},
  mounted() {
    // var map = new BMapGL.Map("allmap");
    // var point = new BMapGL.Point(116.404, 39.925);
    // map.centerAndZoom(point, 15);
    // var marker = new BMapGL.Marker(point); // 创建标注
    // map.addOverlay(marker); // 将标注添加到地图中
    // var opts = {
    //   width: 200, // 信息窗口宽度
    //   height: 100, // 信息窗口高度
    //   title: "故宫博物院", // 信息窗口标题
    //   message: "这里是故宫",
    // };
    // var infoWindow = new BMapGL.InfoWindow(
    //   "地址：北京市东城区王府井大街88号乐天银泰百货八层",
    //   opts
    // ); // 创建信息窗口对象
    // marker.addEventListener("click", function() {
    //   map.openInfoWindow(infoWindow, point); //开启信息窗口
    // });
  },
  components: { qrCode },
};
</script>
<style lang="scss" scoped>
$bannerUrl: "~@/assets/images/pc/";
.contact_wrap {
  background: rgba(255, 255, 255, 1);
  &.en {
    .contact_header {
      .header_text,
      .header_tx {
        letter-spacing: 0;
      }
    }
  }
  .contact_header {
    background-image: url($bannerUrl+"aboutBannerBg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    .header_main {
      text-align: center;
      color: rgba(255, 255, 255, 1);
    }
    .header_text {
      font-size: 80px;
      left: 80px;
      letter-spacing: 10px;
    }
    .header_tx {
      font-size: 66px;
      line-height: 26px;
      margin-top: 86px;
      letter-spacing: 8px;
    }
  }
  .contact {
    width: 1300px;
    min-height: 270px;
    margin: 100px auto;
    // background: red;
    display: flex;
    justify-content: space-between;
    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 306px;
      min-height: 270px;
      padding: 38px 43px;
      text-align: center;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(27, 28, 29, 1);
      background: rgba(242, 245, 251, 1);
      .itemP {
        font-size: 16px;
      }
      img {
        width: 52px;
        height: 52px;
        // margin-left: 84px;
        margin-bottom: 19px;
      }
      p {
        line-height: 36px;
      }
      .address {
        text-align: left;
        line-height: 30px;
      }

      .qrcodeBox {
        margin: 10px 0;
      }
      // .qrImg {
      //   width: 125px;
      //   height: 125px;
      //   margin: 10px 47.5px;
      // }
    }
  }
  .map {
    width: 1300px;
    height: 480px;
    margin: 100px auto;
    /deep/ .anchorBL {
      display: none;
    }
  }
  .ridingMode {
    width: 1300px;
    min-height: 354px;
    margin: 100px auto;
    &_item {
      width: 416px;
      min-height: 354px;
      padding: 40px 35px;
      text-align: center;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(27, 28, 29, 1);
      background: rgba(242, 245, 251, 1);
      img {
        width: 52px;
        height: 52px;
        margin-left: 146px;
        margin-bottom: 19px;
      }
      p {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 30px;
        color: rgba(27, 28, 29, 1);
      }
      .ways {
        font-size: 16px;
        margin-top: 7px;
        text-align: left;
      }
    }
  }
}
</style>
