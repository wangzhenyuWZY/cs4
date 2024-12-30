<template>
  <view class="myContent">
    <div class="topBox">
      <p class="phone">158 8909 9017</p>
      <div class="id">
        <p class="text">
          ID:
          <span>9010kd</span>
        </p>
        <image :src="Copy" alt="" class="img" @click="goCopy" />
      </div>

      <div class="grade">
        <div class="left">
          <p class="text">当前等级</p>
          <p class="num">v2</p>
        </div>
        <p class="show">已实名</p>
      </div>

      <image :src="Copy" class="avatar" alt="" />
    </div>
    <div class="itemBox">
      <div class="item" v-for="i in informationList" :key="i.key">
        <div class="left">
          <image :src="i.img" class="img" alt="" />
          <p class="text">{{ i.text }}</p>
        </div>
        <image :src="MyRight" class="img" alt="" @click="goDetail(i.his)" />
      </div>
      <div class="item itemLogout">
        <div class="left">
          <image :src="Logout" class="img" alt="" />
          <p class="text">退出登录</p>
        </div>
        <image :src="MyRight" class="img" alt="" @click="logout" />
      </div>
    </div>
    <!-- copy -->
    <CopyHook :isShow="isShowCopy" :change="goCopy" text="ID复制成功" />

    <!-- 退出登录 -->
    <uni-popup ref="logoutDialog" type="dialog" class="logoutBoxPopup">
      <uni-popup-dialog
        type="info"
        cancelText="取消"
        confirmText="确定"
        content="确认退出登录吗？"
        @confirm="dialogConfirm"
      ></uni-popup-dialog>
    </uni-popup>
  </view>
  <TarbarMenu />
</template>

<script setup>
import { ref } from "vue";
import { onPullDownRefresh } from "@dcloudio/uni-app";
import MyBack from "@/static/myBack.png";
import Copy from "@/static/copy.png";
import MyRight from "@/static/myRight.png";
import MyMaterial from "@/static/myMaterial.png";
import MyTeam from "@/static/myTeam.png";
import MyFriend from "@/static/myFriend.png";
import MyService from "@/static/myService.png";
import MyAbout from "@/static/myAbout.png";
import Logout from "@/static/logout.png";
import CopySuccess from "@/static/copySuccess.png";
import CopyHook from "/components/Copy/index.vue";

const isShowCopy = ref(false);

const logoutDialog = ref();
const informationList = [
  {
    img: MyMaterial,
    text: "我的资料",
    key: "Material",
    his: "/pages/contract/components/account",
  },
  {
    img: MyTeam,
    text: "我的团队",
    key: "Team",
    his: "/pages/contract/components/team",
  },
  {
    img: MyFriend,
    text: "分享好友",
    key: "Friend",
    his: "/pages/contract/components/invite",
  },
  { img: MyService, text: "联系客服", key: "Service", his: "" },
  { img: MyAbout, text: "关于我们", key: "About", his: "" },
];

const dialogConfirm = () => {
  uni.removeStorageSync("token");
  uni.navigateTo({
    url: "/pages/loginRegister/login",
  });
};

const goDetail = (key) => {
  uni.navigateTo({
    url: key,
  });
};
const goCopy = () => {
  isShowCopy.value = !isShowCopy.value;
};

const logout = () => {
  logoutDialog.value.open();
};

// 下拉刷新逻辑
onPullDownRefresh(() => {
  setTimeout(() => {
    console.log(1111111111111);
    // 停止下拉刷新动画
    uni.stopPullDownRefresh();
    console.log(222222222222);
  }, 2000); // 模拟延迟 1.5 秒
});
</script>

<style lang="scss">
@import url("./index.scss");
</style>
