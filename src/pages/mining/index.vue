<template>
  <view class="tradeZoneContent">
    <div class="topBox">
      <div class="top" v-for="(i, index) in topRightList" :key="index">
        <image :src="i.img" alt="" class="img" />
        <div class="content">
          <div class="text">
            <p class="name">{{ i.title }}</p>
            <p class="num">{{ i.text }}</p>
          </div>
          <image :src="Next" alt="" class="poImg" @click="goOrder(i.his)" />
        </div>
      </div>
    </div>
    <div class="MiningMachineBox">
      <p class="title">购买矿机</p>
      <div class="item" v-for="i in miningList" :key="i.key">
        <div class="top">
          <p class="text">{{ i.name }}</p>
          <p class="num">{{ i.price }}</p>
        </div>
        <div class="content">
          <image :src="i.img" alt="" class="img" />
          <div class="box">
            <div
              class="textItem"
              :style="{
                marginBottom: i.info.length - 1 === index ? '0px' : '8px',
              }"
              v-for="(item, index) in i.info"
              :key="index"
            >
              <p class="text">{{ item.text }}</p>
              <p class="num">{{ item.num }}</p>
            </div>
          </div>
        </div>
        <div class="buy" @click="goBuy(i)">购买</div>
      </div>
    </div>
    <uni-popup
      ref="popup"
      class="tradeZonePopupBox"
      background-color="#fff"
      @change="changePopup"
    >
      <view class="popup-content">
        <p class="title">购买确认</p>
        <p class="text">
          您当前正在进行购买
          <span>{{ popupDetails.name }}</span>
          , 预计支付
          <span>{{ popupDetails.price }}</span>
          请确认？
        </p>
        <div class="content">
          <p @click="cancel">取消</p>
          <p class="sure" @click="sure">确认</p>
        </div>
      </view>
    </uni-popup>
    <TradeModal :show="show" :change="enter" status="buyMining" />
  </view>
  <TarbarMenu />
</template>

<script setup>
import { onPullDownRefresh } from "@dcloudio/uni-app";
import { ref } from "vue";
import TradeZoneOne from "@/static/miningTop1.png";
import TradeZoneTwo from "@/static/miningTop2.png";
import Next from "@/static/next.png";
import Advanced from "@/static/Advanced.png";
import Beginner from "@/static/Beginner.png";
import Intermediate from "@/static/Intermediate.png";
import TradeModal from "@/components/TradeModal/index.vue";
const popup = ref();
const popupDetails = ref({});
const show = ref(false);
// Beginner --- 初级  ，Advanced --- 高级 ， Intermediate ---- 中级
const topRightList = [
  { img: TradeZoneOne, title: "累计产出(CIPS)", text: "7980.00", his: "" },
  {
    img: TradeZoneTwo,
    title: "我的挖矿",
    text: "挖矿订单",
    his: "/pages/mining/components/historyTrade",
  },
];
const miningList = [
  {
    img: Beginner,
    name: "初级矿机",
    price: "1000CNY",
    key: "Beginner",
    info: [
      { text: "日产出", num: "10%" },
      { text: "倍数", num: "1.5" },
      { text: "周期", num: "15天" },
    ],
  },
  {
    img: Intermediate,
    name: "中级矿机",
    price: "6000CNY",
    key: "Intermediate",
    info: [
      { text: "日产出", num: "10%" },
      { text: "倍数", num: "1.5" },
      { text: "周期", num: "15天" },
    ],
  },
  {
    img: Advanced,
    name: "高级矿机",
    price: "9000CNY",
    key: "Advanced",
    info: [
      { text: "日产出", num: "10%" },
      { text: "倍数", num: "1.5" },
      { text: "周期", num: "15天" },
    ],
  },
];

const enter = () => {
  show.value = !show.value;
};

const cancel = () => {
  popup.value.close();
};
const sure = () => {
  popup.value.close();
  enter();
};
const goBuy = (i) => {
  const data = {
    name:
      i.key === "Beginner"
        ? "初级矿机"
        : i.key === "Advanced"
          ? "高级矿机"
          : "中级矿机",
    price:
      i.key === "Beginner"
        ? "1000 RMB"
        : i.key === "Advanced"
          ? "9000 RMB"
          : "6000 RMB",
  };
  popup.value.open("center");
  popupDetails.value = data;
};

const changePopup = (e) => {
  console.log(e);
};

const goAmount = () => {};
const goOrder = (url) => {
  if (url) {
    uni.navigateTo({
      url: url,
    });
  }
};

// 下拉刷新逻辑
onPullDownRefresh(() => {
  setTimeout(() => {
    // 停止下拉刷新动画
    uni.stopPullDownRefresh();
  }, 2000); // 模拟延迟 1.5 秒
});
</script>

<style lang="scss">
@import url("./index.scss");
@import url("@/components/TradeModal/index.scss");
</style>
