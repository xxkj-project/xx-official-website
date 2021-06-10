<!--
 * @Author: wangshengxian
 * @Date: 2020-09-08 09:42:25
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-10 17:20:07
 * @Desc: 浏览器窗口 right-center 定位 
-->
<template>
  <div class="fixed-box fixed-right-center">
    <div class="fixed-global">
      <div class="fixed-content">
        <div class="itemBox msgBox" @click="onOperate('message')">
          <div class="slipOut">
            <div class="leftBox">
              <span class="iconfont icon-message1"></span>
              <span class="txt">留言</span>
            </div>
          </div>
        </div>
        <div class="itemBox phoneBox">
          <div class="slipOut">
            <div class="leftBox">
              <span class="iconfont icon-dianhua"></span>
              <span class="txt">咨询</span>
            </div>
            <div class="rightBox">
              <p class="txt">{{ tel }}</p>
            </div>
          </div>
        </div>
        <div class="itemBox weixinBox">
          <div class="slipOut">
            <div class="leftBox">
              <span class="iconfont icon-weixin"></span>
              <span class="txt">微信</span>
            </div>
          </div>

          <div class="qrcodeBox">
            <div class="qr">
              <qrCode />
            </div>
            <div class="triangle"></div>
          </div>
        </div>
        <!-- <div class="icon qrcode" @click="onOperate('message')">
          <span class="icon-qrcode"></span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import qrCode from "@/components/qrCode";
import { mobilePhone } from "@/utils/globalData";
export default {
  name: "",
  data() {
    return {
      tel: mobilePhone,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onOperate(type) {
      // console.log(type);
      // console.log(this.scrollTop);
      // console.log(
      //   "-scrollTop-",
      //   document.querySelector(".layout-main").scrollTop
      // );
      switch (type) {
        case "message":
          this.$emit("openMsg", true);
          break;
        case "phone":
          console.log("咨询");
          break;
        case "top":
          console.log("回到顶部");
          // window.scrollY = 0;
          break;
        default:
          break;
      }
    },
  },
  components: { qrCode },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$hoverColor: #0084ff;
$transtionAttr: all 0.75s ease;

.fixed-box {
  position: fixed;
  z-index: 999;
}

.fixed-right-center {
  right: 0;
  bottom: 20%;
  // top: 50%;
  // transform: translateY(-50%);

  .fixed-global {
    .fixed-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      // height: 70px;
      width: 70px;

      .slipOut {
        display: flex;

        .leftBox {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          font-size: 16px;

          .iconfont {
            font-size: 28px;
          }
        }

        .rightBox {
          flex: 1;
          .txt {
            font-size: 16px;
            text-align: center;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

.itemBox {
  position: relative;
  width: 70px;
  height: 70px;
  margin-bottom: 6px;
  cursor: pointer;

  .slipOut {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    // background: #0595c7;
    background-color: #353535;
    color: #fff;
  }
}

.msgBox {
  .slipOut {
    transition: $transtionAttr;

    &:hover {
      background: $hoverColor;
      transition: $transtionAttr;
    }
  }
}

.phoneBox {
  .slipOut {
    width: 190px;
    left: 0;
    // left: -120px;
    top: 0;
    transition: $transtionAttr;

    &:hover {
      background: $hoverColor;
      left: -120px;
      transition: $transtionAttr;
    }
  }
}

.weixinBox {
  .slipOut {
    &:hover {
      background: $hoverColor;
      transition: $transtionAttr;
    }
    // 选取兄弟元素节点，设置hover样式变化
    &:hover + .qrcodeBox {
      opacity: 1;
      transition: $transtionAttr;
    }
  }
  .qrcodeBox {
    position: absolute;
    top: -25px;
    left: -136px;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: $transtionAttr;

    .qr {
      background: #fff;
      padding: 10px;
    }

    .triangle {
      display: inline-block;
      content: "";
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-left: 8px solid #fff;
      border-bottom: 8px solid transparent;
    }
  }
}
</style>
