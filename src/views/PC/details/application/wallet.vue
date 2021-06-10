<!--
 * @Author: wangshengxian
 * @Date: 2020-09-04 10:05:53
 * @LastEditors: wangshengxian
 * @LastEditTime: 2020-09-30 17:47:34
 * @Desc:  - 跨链钱包详情
-->
<template>
  <div class="wallet">
    <bannerComp :infoData="bannerData">
      <p>即时透明，坐享收益</p>
      <p>去中心化理财，收益实时获取</p>
    </bannerComp>

    <div class="main">
      <div class="contro">
        <div class="list">
          <img src="@/assets/images/wallet/kualian.jpg" alt="" />
          <ul>
            <li>跨链是信息的传输</li>
            <li>跨链是信息流背后的需要被精确记账的价值</li>
          </ul>
        </div>
      </div>
      <div>
        <div class="container">
          跨链的应用场景
        </div>
        <div class="scene_one">
          <div class="sceneList">
            <img src="@/assets/images/wallet/scene1.png" alt="" />
            <ul>
              <li class="title">分布式交易</li>
              <li>分布式交易所</li>
              <li>分布式场外交易</li>
              <li>中心化竞价撮合与分布式清结算混合模式的交易所</li>
            </ul>
          </div>
        </div>
        <div class="scene_two">
          <div class="sceneList">
            <div>
              <h2>数字金融创新</h2>
              <p>
                金融衍生品或者类金融合约应用，也是智能合约可以发挥最大价值的应用场景之一
              </p>
            </div>
            <img src="@/assets/images/wallet/scene2.png" alt="" />
          </div>
        </div>
        <div class="scene_three">
          <div class="sceneList">
            <img
              class="imgSize"
              src="@/assets/images/wallet/scene3.png"
              alt=""
            />
            <div>
              <h2>打通两个平行世界</h2>
              <p>
                跨链能力是推动基于区块链的数字经济全面发展和融合的技术驱动力
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          跨链机制的四大改进和创新
        </div>
        <div class="scene_four">
          <div class="changeList">
            <ul>
              <li>
                <img src="@/assets/images/pc/change4.png" alt="" />
                <p>跨链签名算法的升级</p>
              </li>
              <li>
                <img src="@/assets/images/pc/change1.png" alt="" />
                <p>MPC模块化，提供多方签名解决方案</p>
              </li>
              <li>
                <img src="@/assets/images/pc/change2.png" alt="" />
                <p>通用化HTLC跨链合约，真正的一链跨万链的跨链平台</p>
              </li>
              <li>
                <img src="@/assets/images/pc/change3.png" alt="" />
                <p>释放storemanGroup锁定资金账户的角色，让跨链更加去中心化</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wowMixins from "@/mixins/wowMixins";
import bannerComp from "@/views/PC/components/banner";
export default {
  name: "",
  mixins: [wowMixins],
  data() {
    return {
      bannerData: {
        imgUrl: require("@/assets/images/pc/wallet.jpg"),
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  components: { bannerComp },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
$contentWidth: 1320px;

.main {
  .container {
    height: 120px;
    font-size: 36px;
    line-height: 108px;
    text-align: center;
    margin: 10px auto 0px;
  }
  .contro {
    width: 100%;
    background: white;
    height: 400px;
    padding: 50px;
    box-sizing: border-box;
    .list {
      width: 1020px;
      margin: 0px auto;
      display: flex;
      justify-content: space-around;
      img {
        height: 300px;
      }
      ul {
        margin-top: 50px;
        li {
          line-height: 80px;
          font-size: 18px;
          list-style-type: disc;
        }
      }
    }
  }
  .scene_one {
    width: 100%;
    height: 340px;
    background: white;
    // .container {
    //   background: #f5f5f5;
    // }
  }
  .scene_three {
    width: 100%;
    height: 440px;
    background: white;
    .imgSize {
      height: 360px;
    }
  }
  .scene_three,
  .scene_two {
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-top: 100px;
    }
    p {
      line-height: 90px;
      font-size: 18px;
    }
  }
  .sceneList {
    width: 1220px;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
    img {
      height: 250px;
      margin-top: 30px;
    }
    ul {
      margin-top: 50px;
      li {
        line-height: 40px;
        font-size: 18px;
        list-style-type: disc;
      }
      .title {
        list-style-type: none;
        font-size: 20px;
        line-height: 70px;
        font-weight: 600;
      }
    }
  }
  .scene_two {
    height: 390px;
    background: #f5f5f5;
    .sceneList {
      img {
        height: 340px;
      }
    }
  }
  .scene_four {
    width: 100%;
    background: white;
    // background: #0483f8;
    height: 400px;
    .changeList {
      width: 1300px;
      margin: 0px auto;
      ul {
        display: flex;
        justify-content: space-around;
        padding-top: 60px;
        li {
          border-radius: 5px;
          background: rgba(#0483f8, 0.8);
          width: 230px;
          height: 300px;
          img {
            width: 60px;
            margin: 60px 85px 30px;
          }
          p {
            padding: 10px 20px;
            box-sizing: border-box;
            text-align: center;
            font-size: 18px;
            color: white;
          }
        }
      }
    }
  }
}
</style>
