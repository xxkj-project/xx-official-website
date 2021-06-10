<!--
 * @Author: wangshengxian
 * @Date: 2020-09-07 15:35:06
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-21 10:16:55
 * @Desc: 消息弹框
-->
<template>
  <div class="message-dialog" v-show="dialogVisiable">
    <div class="message-wrapper">
      <div class="main">
        <h2>{{ i18nData.title }}</h2>
        <div class="consult">
          <span class="telIcon iconfont icon-dianhua"></span>
          <span>{{ hotLineTxt }}</span>
        </div>
        <div class="content">
          <div class="inputBox">
            <div class="nameInput inputItem">
              <input
                v-model="formData.name"
                type="text"
                id="txtName"
                :placeholder="phTxts.placeholder1"
              />
            </div>
            <div class="phoneInput inputItem">
              <input
                v-model="formData.mobile"
                type="number"
                id="txtPhone"
                :placeholder="phTxts.placeholder2"
              />
            </div>
            <div class="userNeed">
              <textarea
                v-model="formData.content"
                id="txtarea"
                :placeholder="phTxts.placeholder3"
              ></textarea>
            </div>
          </div>
          <div class="submitBtn" @click="onSubmit">{{ i18nData.btnTxt }}</div>
        </div>
        <div class="closeBtn iconfont icon-cancel" @click="onClose"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { submitMsg } from "@/api";
import { mobilePhone } from "@/utils/globalData";
export default {
  name: "",
  data() {
    return {
      tel: mobilePhone,
      formData: {
        name: "",
        mobile: "",
        content: "",
      },
    };
  },
  props: {
    dialogVis: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialogVisiable: {
      get() {
        return this.dialogVis;
      },
      set(val) {
        this.$emit("update:dialogVis", val);
      },
    },
    i18nData() {
      return this.$t("Other").messageBox;
    },
    hotLineTxt() {
      const { desc1, desc2 } = this.i18nData;
      return `${desc1}${this.tel}${desc2}`;
    },
    phTxts() {
      return this.i18nData.phTxts;
    },
    toastMsgs() {
      return this.i18nData.toastMsgs;
    },
  },
  watch: {
    dialogVis(newVal, oldVal) {
      console.log("-watch-messageBox-", newVal, oldVal);
    },
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      console.log("-formData-", this.formData);
      const { name, mobile } = this.formData;
      if (!name) {
        this.$toast.show({ text: this.toastMsgs.nameMsg, duration: 2000 });
        return;
      }

      if (!mobile || mobile.length !== 11) {
        this.$toast.show({ text: this.toastMsgs.phoneMsg });
        return;
      }

      submitMsg(this.formData).then((res) => {
        console.log("-res-", res);
        this.$toast.show({ text: this.toastMsgs.successMsg });
        setTimeout(() => {
          this.dialogVisiable = false;
        }, 1000);
      });
    },
    onClose() {
      this.dialogVisiable = false;
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类

.message-dialog {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);

  .message-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 650px;
    // height: 700px;
    background: #fff;
    border-radius: 4px;
    padding-top: 30px;

    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      height: 100%;
      margin: 0 auto 60px;

      h2 {
        font-size: 36px;
        line-height: 56px;
        padding-bottom: 12px;
      }

      .consult {
        display: flex;
        align-items: center;
        padding-bottom: 30px;

        span {
          font-size: 24px;
          color: #505050;
        }

        .icon-dianhua {
          font-size: 36px;
          margin-right: 10px;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        // padding-bottom: 40px;

        .inputBox {
          display: flex;
          flex-direction: column;
          width: 100%;

          .inputItem {
            width: 100%;
            height: 60px;
            background: #fff;
            margin: 0 auto;
            border: 1px solid #e9e9e9;
            margin-bottom: 20px;

            input {
              width: 100%;
              height: 100%;
              font-size: 22px;
              color: #333333;
              text-indent: 20px;
            }
          }
          .userNeed {
            width: 100%;
            height: 200px;
            margin: 0 auto 34px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(233, 233, 233, 1);
            border-radius: 2px;
            padding-top: 25px;
            box-sizing: border-box;

            textarea {
              width: 100%;
              height: 100%;
              font-size: 22px;
              font-family: -webkit-body;
              color: #333333;
              text-indent: 20px;
              // border: 1px solid #e9e9e9;
            }
          }

          // textarea::-webkit-input-placeholder {
          //   color: rgb(180, 180, 180);
          // }
          // textarea::-moz-input-placeholder {
          //   color: rgb(180, 180, 180);
          // }
        }

        .submitBtn {
          width: 100%;
          height: 70px;
          background: #0084ff;
          font-size: 24px;
          line-height: 70px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          box-shadow: 5px 2px 18px rgba(0, 162, 255, 0.46);
          border-radius: 6px;
          margin: 0 auto;
        }
      }

      .closeBtn {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 28px;
        cursor: pointer;
      }
    }
  }
}
</style>
