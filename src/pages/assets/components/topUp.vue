<template>
	<view class="topUpBox">
		<TopBack text="充值" url="/pages/assets/index" isTabbar="true" />
		<div class="optionBox">
			<p v-for="i in optionList" :key="i.key" @click="selectOption(i.key)">{{ i.text }}</p>
		</div>

		<div class="orderList">
			<div :class="{ item: true, activeItem: active === i.key ? true : false }" v-for="i in UnionPayList" :key="i.key" @click="getNumber(i.key)">
				<p class="title">
					<image class="img" :src="option === 'UnionPay' ? UnionPay : option === 'WeChat' ? WeChat : Alipay" alt="" />
					<span>{{ option === 'UnionPay' ? '银联支付' : option === 'WeChat' ? '微信支付' : '支付宝支付' }}</span>
				</p>
				<p class="text">{{ i.text }}</p>
			</div>
		</div>

		<div class="amountBox">
			<p class="title">充值金额</p>
			<input type="text" class="input" v-model="value" @input="changeAmount" placeholder="请输入充值金额" placeholder-class="placeholderClassBox" />
			<p class="hint">
				*如需线下支付，请点击联系
				<span>在线客服</span>
			</p>
		</div>
		<div class="topUpBoxMore" @click="goTopUp">充值</div>

		<uni-popup ref="popup" class="topUpPopupBoxMore" background-color="#fff" @change="changePopup">
			<view class="topUpBoxMore">
				<div class="title">
					<image :src="option === 'UnionPay' ? UnionPay : option === 'WeChat' ? WeChat : Alipay" alt="" class="img" />
					<span class="text">{{ option === 'UnionPay' ? '银联支付' : option === 'WeChat' ? '微信支付' : '支付宝支付' }}</span>
				</div>
				<p class="num">¥200</p>
				<p class="time">
					剩余支付时间：
					<span>12:09</span>
				</p>
				<div class="hint">
					<p class="title">
						{{ option === 'UnionPay' ? '截图二维码，图片保存到相册' : option === 'WeChat' ? '截图二维码，打开微信扫一扫' : '截图二维码，打开支付宝扫一扫' }}
					</p>
					<p class="text" v-if="option === 'UnionPay'">
						请使用
						<span>云闪付</span>
						或
						<span>任何银联app</span>
						扫一扫向我付款
					</p>

					<p class="text" v-else>请在规定时间内付款，过期后请勿支付，二维码一 次有效，请勿重复支付，二次支付不到账无法退款</p>
				</div>
				<image :src="WechatCode" class="qrCode" alt="" />
				<div class="question">
					<p class="text">
						{{ option === 'UnionPay' ? '*如遇云闪付app出现风控，请移至手机银行app付款' : '*支付遇到风险交易点击申请解除限制,如下图操作 即可完成支付' }}
					</p>
					<image :src="HintBack" class="code" alt="" :style="{ display: option !== 'UnionPay' ? 'block' : 'none' }" />
				</div>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import WeChat from '@/static/unionPay.png';
import UnionPay from '@/static/WeChat.png';
import Alipay from '@/static/Alipay.png';
import HintBack from '@/static/hintBack.png';
import WechatCode from '@/static/wechatCode.png';
const optionList = [
	{ text: '银联', key: 'UnionPay' },
	{ text: '微信', key: 'WeChat' },
	{ text: '支付宝', key: 'Alipay' }
];
// 选中金额
const active = ref('');
// 支付弹窗
const popup = ref('');
//  选中  支付方式
const option = ref('UnionPay');
const value = ref('');
const UnionPayList = [
	{ text: '单笔：100-10000', key: '1' },
	{ text: '单笔：200-30000', key: '2' },
	{ text: '单笔：300-40000', key: '3' }
];

const changePopup = (e) => {};

const getNumber = (i) => {
	if (active.value === i) {
		active.value = '';
	} else {
		active.value = i;
	}
};

const changeAmount = (e) => {};

const goTopUp = () => {
	if (option.value !== 'Alipay') {
		popup.value.open('bottom');
	}
};

const selectOption = (key) => {
	if (option.value !== key) {
		option.value = key;
		value.value = '';
		active.value = '';
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
@import url('./index.scss');
</style>
