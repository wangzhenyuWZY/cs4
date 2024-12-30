<template>
	<view class="PlaceAnOrderBox">
		<div class="top">
			<TopBack text="上合节点下单" url="/pages/trade/index" isTabbar="true" />
		</div>
		<div class="contentBox">
			<div class="item" v-for="i in inputList" :key="i.key">
				<p class="text">{{ i.title }}</p>
				<input type="text" class="input" @input="(e) => onChangeInput(e, i.key)" />
			</div>
			<!-- 收货人电话 收货地址  广东省广州市白云区幸福里12号901 -->
			<p class="enter" @click="enter">提交</p>
		</div>
		<TradeModal :show="popup" :change="enter" />
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import TradeModal from '/components/TradeModal/index.vue';
import Close from '@/static/close.png';
const params = ref({ person: '', phone: '', address: '' });
const popup = ref(false);
const onChangeInput = (i, e) => {
	params.value = { ...params.value, [e]: i.detail.value };
};
const enter = () => {
	popup.value = !popup.value;
};

const inputList = [
	{ title: '收货人', key: 'person' },
	{ title: '收货人电话', key: 'phone' },
	{ title: '收货地址', key: 'address' }
];

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
@import url('/components/TradeModal/index.scss');
</style>
