<template>
  <uni-popup
    ref="popup"
    class="PlaceAnOrderPopupBoxMore"
    background-color="#fff"
    @change="changePopup"
  >
    <view class="popup-content">
      <div class="topBox">
        <div class="top">
          <p class="close" @click="close">X</p>
          <p class="text">请输入交易密码</p>
          <span></span>
        </div>
        <div class="num">88.88 CNY</div>
        <div class="kuang">
          <p
            class="num"
            :style="{
              borderRadius:
                index === 0
                  ? '8px 0 0 8px'
                  : passwordAll.length - 1 === index
                    ? '0 8px 8px 0'
                    : '0',
            }"
            v-for="(i, index) in passwordAll"
            :key="index"
          >
            <span class="Location">
              {{ i }}
            </span>
          </p>
        </div>
        <p class="password">忘记密码？</p>
      </div>
      <div class="botBox">
        <div
          class="item"
          v-for="(i, index) in phone"
          :style="{
            background: i.hide ? 'none' : '#ffffff',
            boxShadow: i.hide ? 'none' : '0px 1px 0px 0px rgba(0, 0, 0, 0.3)',
          }"
          :key="index"
          @click="getPhone(i.key)"
        >
          <div
            class="two"
            v-if="i.two"
            :style="{ visibility: i.hide ? 'hidden' : 'visible' }"
          >
            <p class="t">{{ i.number }}</p>
            <p class="t1">{{ i.en }}</p>
          </div>
          <div class="one" v-else>
            <image :src="i.img" alt="" class="imgClose" v-if="i.img" />
            <span v-else>{{ i.number }}</span>
          </div>
        </div>
      </div>
    </view>
  </uni-popup>
</template>

<script setup>
import { watch, defineProps, ref } from "vue";
import Close from "@/static/close.png";
const props = defineProps({
  show: Boolean,
  change: Function,
});

const popup = ref();
const p = ["", "", "", "", "", ""];
const passwordAll = ref(p);
const changePopup = (e) => {
  if (!e.show) {
    passwordAll.value = p;
    props.change();
  }
};
const close = () => {
  popup.value.close();
};

const getPhone = (key) => {
  if (key) {
    let data = passwordAll.value;
    if (key === "close") {
      if (data[0]) {
        let lastIndex = data.lastIndexOf(data.filter((item) => item).pop());
        data[lastIndex] = "";
        passwordAll.value = data;
      }
    } else {
      if (!data[data.length - 1]) {
        let lastIndex = data.lastIndexOf(data.filter((item) => item).pop());
        const index = lastIndex > -1 ? lastIndex + 1 : 0;
        data[index] = key;
        passwordAll.value = data;
      }
    }
  }
};
const phone = [
  { two: true, number: "1", en: "1", key: "1" },
  { two: true, number: "2", en: "ABC", key: "2" },
  { two: true, number: "3", en: "DEF", key: "3" },
  { two: true, number: "4", en: "GHI", key: "4" },
  { two: true, number: "5", en: "JKL", key: "5" },
  { two: true, number: "6", en: "MNO", key: "6" },
  { two: true, number: "7", en: "PQRS", key: "7" },
  { two: true, number: "8", en: "TUV", key: "8" },
  { two: true, number: "9", en: "WXYZ", key: "9" },
  { hide: true, two: true, number: "9", en: "WXYZ" },
  { one: true, number: "0", key: "0" },
  { hide: true, img: Close, one: true, key: "close" },
];

// 监听响应式变量
watch(
  () => props.show,
  (oldValue, _) => {
    if (oldValue) {
      popup.value.open("bottom");
    }
  },
);
</script>

<style lang="scss">
@import url("@/components/TradeModal/index.scss");
</style>
