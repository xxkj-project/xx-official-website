<!-- 
   区块链搭建/区块链应用公共模块
-->
<template>
  <div class="serveWrap">
    <div class="module">
      <ul>
        <li v-for="(item, index) in infoData.content" :key="index">
          <div class="" @click="onOpenPage(item)">
            <img
              class="wow slideInRight"
              data-wow-delay="0.3s"
              :src="item.iconUrl"
              alt=""
            />
            <p class="wow slideInLeft" data-wow-delay="0.2s">
              {{ item.smallTitle }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    infoData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {},
  mounted() {},
  methods: {
    onOpenPage(item) {
      console.log(item);
      const { path } = item;
      this.$router.push({ path });
    },
  },
  components: {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.serveWrap {
  // .introduce {
  //   padding: 5px 12px 20px;

  //   h1 {
  //     font-size: 18px;
  //     font-family: PingFang SC;
  //     font-weight: bold;
  //     color: rgba(34, 34, 34, 1);
  //     line-height: 36px;
  //     text-align: center;
  //   }

  //   p {
  //     font-size: 12px;
  //     font-family: Microsoft YaHei;
  //     font-weight: 400;
  //     color: rgba(119, 119, 119, 1);
  //     line-height: 23px;
  //     text-align: center;
  //   }
  // }

  .module {
    padding: 14px 3.2vw;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        display: flex;
        flex-direction: column;
        // width: 168px;
        width: 45vw;
        background: #fff;
        box-shadow: 0px 3px 21px 0px rgba(0, 0, 0, 0.1);
        margin-bottom: 14px;

        img {
          width: 100%;
          // height: 110px;
        }

        p {
          font-size: 12px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
          text-align: center;
          line-height: 40px;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
