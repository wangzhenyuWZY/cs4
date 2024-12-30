<template>
	<view class="AddPayMoreBox">
		<div class="topBox">
			<TopBack :text="status === 'unionpay' ? '添加银行卡' : '添加支付宝'" url="/pages/contract/components/pay" />
		</div>
		<div class="contentBox">
			<div class="item" v-for="i in list[status]" :key="i.key">
				<p class="title">{{ i.title }}</p>
				<input type="text" class="input" @input="(e) => change(e, i.key)" :placeholder="i.pl" placeholder-class="placeholderClass" />
			</div>
		</div>
		<p class="enter" @click="enter">确认</p>
	</view>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import TopBack from '/components/TopBack/index.vue';
//alipay   unionpay
const { status } = defineProps({
	status: String // 定义要接收的参数
});
const params = ref({ unionpay: { name: '', banlName: '', card: '', address: '' }, alipay: { name: '', account: '' } });

const list = {
	unionpay: [
		{ title: '户名', key: 'name', pl: '输入户名' },
		{ title: '银行名', key: 'banlName', pl: '输入银行名' },
		{ title: '银行卡号', key: 'card', pl: '输入银行卡号' },
		{ title: '开户行', key: 'address', pl: '输入开户行' }
	],
	alipay: [
		{ title: '支付宝姓名', key: 'name', pl: '输入姓名' },
		{ title: '支付宝账号', key: 'account', pl: '输入支付宝账号' }
	]
};

const change = (e, key) => {
	params.value = { ...params.value, [status]: { ...params.value[status], [key]: e.detail.value } };
};

const enter = () => {
	console.log(params.value[status]);
};
</script>
<style lang="scss">
@import url('./index.scss');
</style>
