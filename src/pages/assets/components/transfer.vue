<template>
	<view class="transferBox">
		<TopBack text="转账" url="/pages/assets/index" isTabbar="true" />
		<div class="item" v-for="i in wayList">
			<div class="top">
				<div class="textAll">
					<p class="text">{{ i.textIn }}</p>
					<p class="num">{{ i.numIn }}</p>
				</div>
				<div class="textA">
					<image :src="Money" alt="" class="img" />
				</div>
				<div class="textAll">
					<p class="text">{{ i.textOut }}</p>
					<p class="num">{{ i.numOut }}</p>
				</div>
			</div>
			<input type="text" class="input" @input="(e) => changInput(e, i.key)" :placeholder="i.pl ? i.pl : '请输入转账金额'" placeholder-class="placeholderClass" />
			<p class="change" :style="{ display: i.hide ? 'block' : 'none' }">转换比例：0</p>
			<p class="enter" @click="withdraw(i.key)">转账</p>
		</div>

		<div class="amountBox">
			<p class="title">账户余额</p>
			<p class="num">190.00</p>
			<input type="text" @input="(e) => amountInput(e, 'account')" class="account" placeholder="请输入对方账号" placeholder-class="placeholderClass" />
			<input type="text" @input="(e) => amountInput(e, 'amount')" class="account accountMargin" placeholder="请输入转账金额" placeholder-class="placeholderClass" />
			<p class="enter" @click="withdrawCash">转账</p>
		</div>
	</view>
</template>

<script setup>
import { onPullDownRefresh } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Money from '@/static/money.png';
import TopBack from '/components/TopBack/index.vue';
const inputValue = ref({ withdrawCash: '', signIn: '', node: '' });
const amountValue = ref({ account: '', amount: '' });
const wayList = [
	{ textIn: '从可提现余额', textOut: '到账户余额', numIn: '190.00', numOut: '110.00', key: 'withdrawCash' },
	{ textIn: '从签到参会补贴', textOut: '到节点补贴', numIn: '190.00', numOut: '110.00', key: 'signIn' },
	{ textIn: '从节点数据值', textOut: '到节点补贴', pl: '请输入节点数据值', numIn: '190.00', numOut: '110.00', key: 'node', hide: true }
];

const changInput = (e, i) => {
	inputValue.value = { ...inputValue.value, [i]: e.detail.value };
};

const withdraw = (key) => {
	console.log(inputValue.value);
};

const amountInput = (e, i) => {
	amountValue.value = { ...amountValue.value, [i]: e.detail.value };
};

const withdrawCash = () => {
	console.log(amountValue.value);
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
