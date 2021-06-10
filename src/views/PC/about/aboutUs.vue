<template>
  <div class="about_wrap">
    <div class="about_header">
      <div class="header_main">
        <div class="header_text wow fadeInDown" data-wow-delay="0.1s">
          {{ $t("About.word1") }}
        </div>
        <div class="header_tx wow fadeInUp" data-wow-delay="0.3s">
          ABOUT US
        </div>
      </div>
    </div>
    <div class="About_Main">
      <div class="main_tlx wow fadeInUp" data-wow-delay="0.1s">
        <div class="main_tlx_tx">{{ $t("About.word2") }}</div>
        <div class="main_tlx_tx">{{ $t("About.word3") }}</div>
        <div class="main_tlx_tx">{{ $t("About.word4") }}</div>
      </div>
      <div class="main_culture">
        <div class="culture">
          <div class="culture_cm">
            <div
              class="cm_img wow rotateInDownLeft"
              data-wow-delay="0.1s"
            ></div>
            <div class="cm_tl wow fadeInRight" data-wow-delay="0.1s">
              <div class="cm_right">
                <h1>{{ $t("About.word19") }}</h1>
                <div class="cm_main">
                  <div class="tl_title">{{ $t("About.word5") }}</div>
                  <div class="tl_cl">{{ $t("About.word6") }}</div>
                </div>
                <div class="cm_main">
                  <div class="tl_title">{{ $t("About.word7") }}</div>
                  <div class="tl_cl">{{ $t("About.word8") }}</div>
                </div>
                <div class="cm_main">
                  <div class="tl_title">{{ $t("About.word9") }}</div>
                  <div class="tl_cl">{{ $t("About.word10") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_brand">
        <div class="interpretation wow fadeInLeft" data-wow-delay="0.1s">
          <div class="brand_tl wow flipInX" data-wow-delay="0.3s">
            {{ $t("About.word11") }}
          </div>
          <div class="brand_center">
            <div class="brandCenter_tx wow flipInY">
              {{ $t("About.word12") }}
            </div>
          </div>
        </div>
        <div
          class="brand_Icon wow rotateInDownRight"
          data-wow-delay="0.1s"
        ></div>
      </div>
      <div class="main_culture">
        <div class="culture">
          <div class="culture_cm">
            <div
              class="standard_img wow rotateInDownLeft"
              data-wow-delay="0.1s"
            ></div>
            <div class="cm_tl wow fadeInRight" data-wow-delay="0.1s">
              <div class="standard_right">
                <h1>{{ $t("About.word13") }}</h1>
                <div class="standard_main">
                  <p>
                    {{ $t("About.word14") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wowMixins from "@/mixins/wowMixins";
export default {
  mixins: [wowMixins],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
$imgUrl: "~@/assets/images/pc/";
$commonImgUrl: "~@/assets/images/common/";
.en {
  .about_wrap {
    .about_header {
      .header_text,
      .header_tx {
        letter-spacing: 0;
      }
    }
    .About_Main .main_brand .interpretation .brand_center {
      line-height: 30px;
    }
    .About_Main .team .team_center {
      letter-spacing: 0;
    }
  }
}

.about_wrap {
  background: rgba(255, 255, 255, 1);
  // &.en {
  //   .about_header {
  //     .header_text,
  //     .header_tx {
  //       letter-spacing: 0;
  //     }
  //   }
  //   .About_Main .main_brand .interpretation .brand_center {
  //     line-height: 30px;
  //   }
  //   .About_Main .team .team_center {
  //     letter-spacing: 0;
  //   }
  // }
  .about_header {
    background-image: url($imgUrl+"aboutBannerBg.jpg");
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
      // font-weight: 600;
      line-height: 26px;
      margin-top: 86px;
      letter-spacing: 8px;
    }
  }
  .About_Main {
    .main_tlx {
      width: 1320px;
      margin: 69px auto;
      font-size: 16px;
      color: rgba(102, 102, 102, 1);
      line-height: 34px;
      text-indent: 40px;
      // letter-spacing: 4.6px;
      .main_tlx_tx {
        padding: 0 10px 10px;
      }
    }
    // .Icon {
    //   background-image: url($imgUrl+"about_icon.png");
    //   background-size: 100% 100%;
    //   background-repeat: no-repeat;
    //   width: 110px;
    //   height: 30px;
    // }
    .main_culture {
      background: #f2f5fb;
      .culture {
        width: 1320px;
        margin: 0 auto;
        padding-top: 77px;
        padding-bottom: 100px;
      }
      .culture_title {
        width: 400px;
        margin: 0 auto;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: rgba(19, 55, 97, 1);
        .title_header {
          height: 40px;
        }
        .title_img {
          margin: 50px auto 0 auto;
        }
      }
      .culture_cm {
        display: flex;
        margin-top: 46px;
        // overflow: hidden;
        .cm_img {
          width: 468px;
          height: 468px;
          margin-left: 240px;
          background-image: url($commonImgUrl+"culture.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .standard_img {
          width: 468px;
          height: 468px;
          margin-left: 240px;
          background-image: url($commonImgUrl+"standard.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        .cm_tl {
          width: 660px;
          height: 420px;
          // background: rgba(51, 217, 243, 0.08);
          .cm_right {
            padding: 37px 85px;
            height: 420px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h1 {
              font-size: 36px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: rgba(27, 28, 29, 1);
              text-align: center;
            }
            .tl_title {
              font-size: 20px;
              font-weight: bold;
              color: rgba(23, 33, 81, 1);
              line-height: 20px;
            }
            .tl_cl {
              font-size: 16px;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
              margin-top: 19px;
            }
            .standard_main {
              font-size: 16px;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              text-indent: 40px;
              line-height: 40px;
            }
          }
          .standard_right {
            padding: 47px 0px 0px 85px;
            height: 420px;
            h1 {
              font-size: 36px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: rgba(27, 28, 29, 1);
              text-align: center;
              line-height: 50px;
              margin-bottom: 30px;
            }
            .standard_main {
              font-size: 16px;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              text-indent: 40px;
              line-height: 40px;
            }
          }
        }
      }
    }
    .main_brand {
      width: 1320px;
      margin: 100px auto;
      display: flex;
      .interpretation {
        width: 590px;
        margin-left: 170px;
        .brand_tl {
          height: 80px;
          padding: 0 85px 0px 25px;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
          color: rgba(19, 55, 97, 1);
          margin-top: 49px;
        }
        .brand_img {
          margin: 55px 0;
        }
        .brand_center {
          width: 608px;
          font-size: 16px;
          color: rgba(102, 102, 102, 1);
          line-height: 40px;
          text-indent: 35px;
          letter-spacing: 2.5px;
          .brandCenter_tx {
            padding: 0 85px 0px 25px;
          }
        }
      }
      .brand_Icon {
        width: 468px;
        height: 468px;
        margin-top: 50px;
        background-image: url($commonImgUrl+"/brand.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
