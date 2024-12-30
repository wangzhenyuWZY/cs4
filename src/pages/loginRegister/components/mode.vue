<template>
  <view class="moreBoxToken">
    <div class="topBox">
      <image :src="LoginTopBack" alt="" class="img" />
      <div class="content">
        <p class="title">hi！</p>
        <p class="text">欢迎使用sips数据服务平台</p>
      </div>
    </div>

    <div class="contentBox">
      <view v-for="i in inputList" :key="i.key">
        <div v-if="i.hide"></div>
        <div class="passwordBox" v-else-if="i.password">
          <div class="inputBox inputBoxPass">
            <input
              @input="(e) => changeInput(e, i.key)"
              :type="passwordStatus[i.key] ? 'text' : 'password'"
              :placeholder="i.pl"
              placeholder-class="placeholderClass"
              class=""
            />
          </div>

          <image
            :src="passwordStatus[i.key] ? ShowEare : Hide"
            alt=""
            class="img"
            @click="showHide(i.key)"
          />
        </div>
        <div class="inputBox" v-else>
          <input
            type="text"
            @input="(e) => changeInput(e, i.key)"
            :placeholder="i.pl"
            placeholder-class="placeholderClass"
          />
        </div>
      </view>
      <!-- 登录 -->
      <p class="enter" @click="enter">
        {{ props.status === "login" ? "登录" : "注册" }}
      </p>
      <p class="go">
        {{ props.status === "login" ? "没有账号?" : "已有账号?" }}
        <span @click="goHis">{{
          props.status === "login" ? "去注册" : "去登录"
        }}</span>
      </p>
      <p :class="{ agree: true, position: true }">
        <image
          :src="agreeStatus ? AgreeActive : Agree"
          alt=""
          class="img"
          @click="changeAgree"
        />
        我已阅读并同意
        <span class="text" @click="UserAgreement">《用户协议》</span>
        及
        <span class="text" @click="privacy">《隐私条款》</span>
      </p>
    </div>
    <!-- 提示信息 -->
    <uni-popup ref="message" type="message" class="loginPopupBoxMessage">
      <uni-popup-message
        :type="msgType"
        :message="messageText"
        :duration="2000"
      ></uni-popup-message>
    </uni-popup>
    <!--  条款 信息 -->
    <uni-popup ref="popup" class="loginPopupBoxMore" background-color="#fff">
      <div class="boxMore">
        <rich-text
          v-if="TextStatus === 'UserAgreement'"
          :nodes="UserAgreementText"
        ></rich-text>
        <rich-text v-else :nodes="PrivacyPolicy"></rich-text>
      </div>
    </uni-popup>
  </view>
</template>

<script setup>
import { onPullDownRefresh } from "@dcloudio/uni-app";
import { ref, defineProps, watch } from "vue";
import LoginTopBack from "@/static/loginTopBack.png";
import Agree from "@/static/agree.png";
import AgreeActive from "@/static/agreeActive.png";
import Hide from "@/static/hide.png";
import ShowEare from "@/static/showEare.png";
import {
  getTermsAgreement,
  getPrivacyPolicy,
  goUserRegister,
  goUserLogin,
} from "@/request/api";
import { isPhoneNumber } from "@/utils/index";
const props = defineProps({
  status: String, // 定义要接收的参数
});
const popup = ref();
const UserAgreementText = ref();
const TextStatus = ref("");
const PrivacyPolicy = ref();
const message = ref();
const msgType = ref("");
const messageText = ref("");

const inputList = [
  { pl: "请输入手机号码", key: "phone" },
  { pl: "请输入密码(6-12位字母或数字)", key: "passwordOne", password: true },
  {
    pl: "请再次输入密码",
    key: "passwordTwo",
    password: true,
    hide: props.status === "login",
  },
  { pl: "请输入您的真实姓名", key: "name", hide: props.status === "login" },
  { pl: "请输入身份证号码", key: "card", hide: props.status === "login" },
  { pl: "邀请码", key: "code", hide: props.status === "login" },
];
// 两个密码框的  显示隐藏
const passwordStatus = ref({ passwordOne: false, passwordTwo: false });
// input  value
const allValue = ref({
  phone: "",
  passwordOne: "",
  passwordTwo: "",
  code: "",
  card: "",
  name: "",
});
// 是否同意
const agreeStatus = ref(false);
const showHide = (key) => {
  passwordStatus.value = {
    ...passwordStatus.value,
    [key]: !passwordStatus.value[key],
  };
};
const changeAgree = () => {
  agreeStatus.value = !agreeStatus.value;
};
//  输入框  值
const changeInput = (e, key) => {
  allValue.value = { ...allValue.value, [key]: e.detail.value };
};

const changeMessage = (type, text) => {
  msgType.value = type;
  messageText.value = text;
  message.value.open();
};

const UserAgreement = async () => {
  TextStatus.value = "UserAgreement";
  if (UserAgreementText.value) {
    popup.value.open("bottom");
  } else {
    const data = await getTermsAgreement();
    if (data?.data?.content) {
      UserAgreementText.value = data?.data?.content;
      popup.value.open("bottom");
    }
  }
};
const privacy = async () => {
  TextStatus.value = "PrivacyPolicy";
  if (PrivacyPolicy.value) {
    popup.value.open("bottom");
  } else {
    const data = await getPrivacyPolicy();
    if (data?.data?.content) {
      PrivacyPolicy.value = data?.data?.content;
      popup.value.open("bottom");
    }
  }
};

const goHis = () => {
  if (props.status === "login") {
    uni.navigateTo({
      url: "/pages/loginRegister/register",
    });
  } else {
    uni.navigateTo({
      url: "/pages/loginRegister/login",
    });
  }
};
// 确认
const enter = async () => {
  const { phone, passwordOne, passwordTwo, card, name, code } = allValue.value;
  if (props.status === "login") {
    // 判断手机号是否合法
    if (isPhoneNumber(phone)) {
      // 是否输入密码
      if (passwordOne) {
        const data = await goUserLogin({
          account: phone,
          password: passwordOne,
        });
        if (data?.data?.token) {
          uni.setStorageSync("token", data?.data?.token);
          uni.reLaunch({
            url: "/pages/index/index",
          });
        }
      } else {
        changeMessage("warnning", "请正确输入密码");
      }
    } else {
      changeMessage("warnning", "请正确输入手机号码");
    }
  } else {
    // 判断手机号是否合法
    if (isPhoneNumber(phone)) {
      // 判断数据是否有
      if (passwordOne && passwordTwo && card && name) {
        if (passwordOne === passwordTwo) {
          const data = await goUserRegister({
            account: phone,
            password: passwordOne,
            realName: name,
            idCard: card,
            inviteCode: code,
          });
          if (data?.data?.token) {
            uni.setStorageSync("token", data?.data?.token);
            uni.reLaunch({
              url: "/pages/index/index",
            });
          }
        } else {
          changeMessage("warnning", "两次密码不一致");
        }
      } else {
        changeMessage("warnning", "数据请填写完整");
      }
    } else {
      changeMessage("warnning", "请正确输入手机号码");
    }
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
</style>
