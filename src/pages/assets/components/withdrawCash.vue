<template>
	<view class="withdrawCashBox">
		<TopBack text="提现" url="/pages/assets/index" isTabbar="true" />
		<div class="amount">
			<image :src="AmountBack" alt="" class="img" />
			<div class="content">
				<p class="text">可提现余额</p>
				<p class="num">40000.00</p>
			</div>
		</div>
		<div class="item" v-for="i in inputList" :key="i.key">
			<p class="text">{{ i.text }}</p>
			<input type="text" @input="(e) => changeInput(e, i.key)" class="input" :placeholder="i.pl" placeholder-class="placeholderClass" />
		</div>
		<div class="enter" @click="enter">提现</div>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import AmountBack from '@/static/amountBack.png';
const valueParams = ref({ account: '', card: '', amount: '' });
const inputList = [
	{ text: '支付宝账号', key: 'account', pl: '请输入账号' },
	{ text: '卡号', key: 'card', pl: '请输入卡号' },
	{ text: '金额', key: 'amount', pl: '请输入提现金额' }
];

const changeInput = (e, i) => {
	valueParams.value = { ...valueParams.value, [i]: e.detail.value };
};
const enter = () => {
	console.log(valueParams.value);
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
@import url('./index.scss');
</style>
