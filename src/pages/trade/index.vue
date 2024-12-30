<template>
  <view class="tradeBox">
    <!-- <input type="number" placeholder="" class="input" /> -->
    <!-- 交易 -->
    <div class="trade">
      <p class="title">CIPS交易</p>
      <div class="token">
        <div class="item">
          <p class="name">
            <span class="one">CIPS</span>
            <span class="two">/CNY</span>
          </p>
          <p class="num">+30.20%</p>
        </div>
        <image :src="Img" alt="" class="img" />
      </div>
      <!-- 操作 -->
      <div class="priceBox">
        <!-- 左边 -->
        <div class="operate">
          <div class="tabs">
            <p
              v-for="i in tradeTab"
              :key="i.key"
              @click="changeOperate(i.key)"
              :style="{
                color: operateTab === i.key ? 'white' : 'rgba(17,17,17,0.4)',
              }"
            >
              <image
                :src="operateTab === i.key ? i.acImg : i.img"
                alt=""
                class="img"
              />
              <span>{{ i.text }}</span>
            </p>
          </div>
          <picker
            class="pickerBox"
            @change="bindPickerChange"
            :value="marketIndex"
            :range="market"
          >
            <div class="item">
              <image :src="SelectUp" alt="" class="img" />
              <view class="uni-input">{{ market[marketIndex] }}</view>
            </div>
          </picker>
          <!--  加或者减 -->
          <div class="buySell">
            <div class="addOrJian">
              <p class="left" @click="addOrSub('buy', 'sub')"><span>—</span></p>
              <p class="center">
                <span>{{ needNum.buy }}</span>
              </p>
              <p class="right" @click="addOrSub('buy', 'add')">
                <span>+</span>
              </p>
            </div>
            <div class="price">
              <p class="yue">
                <span>~</span>
                <span>~</span>
              </p>
              <p class="num">200 CNY</p>
            </div>
          </div>
          <div class="buySell" style="margin: 18px 0">
            <div class="addOrJian">
              <p class="left" @click="addOrSub('use', 'sub')"><span>—</span></p>
              <input
                type="number"
                :value="needNum.use"
                @input="changeInput"
                class="input"
                placeholder="数量 CNY"
                placeholder-class="placeholderClass"
              />
              <p class="right" @click="addOrSub('use', 'add')">
                <span>+</span>
              </p>
            </div>
            <div class="price">
              <p class="yue">可用:</p>
              <p class="num">200 CNY</p>
            </div>
          </div>
          <!-- 百分比 -->
          <div class="percentage">
            <div class="box">
              <p
                @click="usePercent(i.key)"
                class="item"
                v-for="i in [
                  { key: '25', text: '25%' },
                  { key: '50', text: '50%' },
                  { key: '75', text: '75%' },
                  { key: '100', text: '100%' },
                ]"
                :key="i.key"
              >
                {{ i.text }}
              </p>
            </div>
            <p class="text">
              <span>交易额:</span>
              <span>1000.0000 CNY</span>
            </p>
          </div>
          <!-- 购买 -->
          <p class="buy" @click="surePopupTrade">
            {{ operateTab === "buy" ? "买入" : "卖出" }}CIPS
          </p>
        </div>
        <!-- 右边 -->
        <div class="priceList">
          <div class="top">
            <span>价格</span>
            <span>数量</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 订单 -->
    <div class="order">
      <div class="top">
        <span class="name">当前委托</span>
        <span class="list">全部订单</span>
      </div>
      <div class="orderItem" v-for="(i, index) in orderList" :key="index">
        <div class="top">
          <span
            :style="{ color: i.status === 'buy' ? '#0bb375' : '#F05938' }"
            class="type"
            >{{ i.status === "buy" ? "买入" : "卖出" }}</span
          >
          <span class="cancel" @click="revokeDelegation(i)">撤销委托</span>
        </div>
        <div class="info" style="margin: 14px 0">
          <div class="item">
            <p class="name">时间</p>
            <p class="value">{{ i.time }}</p>
          </div>
          <div class="item itemCenter">
            <p class="name">委托价 CNY</p>
            <p class="value">{{ i.entrust }}</p>
          </div>
          <div class="item itemRight">
            <p class="name">委托量 CIPS</p>
            <p class="value">{{ i.entrustNum }}</p>
          </div>
        </div>

        <div class="info">
          <div class="item">
            <p class="name">成交总额 CNY</p>
            <p class="value">{{ i.markAll }}</p>
          </div>
          <div class="item itemCenter">
            <p class="name">成交均价 CNY</p>
            <p class="value">{{ i.markAverage }}</p>
          </div>
          <div class="item itemRight">
            <p class="name">成交量 CIPS</p>
            <p class="value">{{ i.markNum }}</p>
          </div>
        </div>
      </div>
    </div>

    <uni-popup
      ref="popupOperate"
      class="PlaceAnOrderPopupBoxMore"
      background-color="#fff"
    >
      <view class="popup-content">
        <p class="title">卖出CIPS</p>
        <div class="item">
          <span>类型</span>
          <span>限价卖出</span>
        </div>
        <div class="item">
          <span>价格</span>
          <span>14 cips</span>
        </div>
        <div class="item">
          <span>数量</span>
          <span>14.00 CIPS</span>
        </div>
        <div class="item">
          <span>交易额</span>
          <span>14.00 CNY</span>
        </div>
        <p class="tradeSure" @click="tradeSure">确定卖出</p>
      </view>
    </uni-popup>

    <uni-popup
      ref="popupEntrust"
      class="tradeZonePopupBox"
      background-color="#fff"
    >
      <view class="popup-content">
        <p class="title">确认撤销该委托吗？</p>
        <div class="content">
          <p @click="cancel">取消</p>
          <p class="sure" @click="sure">确认</p>
        </div>
      </view>
    </uni-popup>
  </view>
  <TarbarMenu />
</template>
<script setup>
import { ref } from "vue";
import { onPullDownRefresh } from "@dcloudio/uni-app";
import Img from "@/static/kxian.png";
import SelectUp from "@/static/selectUp.png";

import Buy from "@/static/buy.png";
import BuyAc from "@/static/buyAc.png";
import Sell from "@/static/sell.png";
import SellAc from "@/static/sellAc.png";

const operateTab = ref("buy");
const popupOperate = ref();
const popupEntrust = ref();
const orderList = [
  {
    status: "buy",
    time: "07/18 12:34",
    entrust: "市价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
  {
    status: "buy",
    time: "07/18 12:34",
    entrust: "限价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
  {
    status: "sell",
    time: "07/18 12:34",
    entrust: "市价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
  {
    status: "sell",
    time: "07/18 12:34",
    entrust: "限价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
  {
    status: "buy",
    time: "07/18 12:34",
    entrust: "市价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
  {
    status: "buy",
    time: "07/18 12:34",
    entrust: "限价",
    entrustNum: "111.75",
    markAll: "13242.4535",
    markAverage: "0.24242",
    markNum: "555",
  },
];
const market = ["限价委托", "市价委托"];
const tradeTab = [
  { text: "买入", key: "buy", img: Buy, acImg: BuyAc },
  { text: "卖出", key: "sell", img: Sell, acImg: SellAc },
];
const marketIndex = ref(0);
const needNum = ref({ buy: 0, use: 0 });
const placeAnOrder = (i) => {
  uni.navigateTo({
    url: "/pages/trade/components/PlaceAnOrder",
  });
};
const bindPickerChange = (e) => {
  marketIndex.value = e.detail.value;
};
const changeOperate = (key) => {
  operateTab.value = key;
};

const addOrSub = (status, key) => {
  //  status = buy,use(是购买   还是花费的)
  if (key === "sub") {
    if (Number(needNum.value[status]) > 0) {
      needNum.value = {
        ...needNum.value,
        [status]: Number(needNum.value[status]) - 1,
      };
    }
  } else {
    needNum.value = {
      ...needNum.value,
      [status]:
        (Number(needNum.value[status]) ? Number(needNum.value[status]) : 0) + 1,
    };
  }
};

// 撤销委托
const revokeDelegation = (i) => {
  popupEntrust.value.open("center");
};
const sure = () => {};
const cancel = () => {
  popupEntrust.value.close();
};

const changeInput = (e) => {
  needNum.value = { ...needNum.value, use: e.detail.value };
};

// 确认 弹出窗
const surePopupTrade = () => {
  popupOperate.value.open("bottom");
};
// 确认交易
const tradeSure = () => {};

const usePercent = (key) => {};

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
</style>
