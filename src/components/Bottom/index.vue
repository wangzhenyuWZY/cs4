<template>
	<view class="bottomBox">
		<view class="tabItem" v-for="item in tabList" :key="item.key" @click="switchTab(item.pagePath)">
			<div :class="{ showBack: item.key === 'trade' }">
				<image class="imgs" :src="current === item.pagePath ? item.selectedIconPath : item.iconPath" />
			</div>
			<image :class="{ hideImg: true, hideMoreImg: item.key === 'trade' }" :src="item.iconPath" />
			<p class="text" :style="{ color: current === item.pagePath ? '#024DF6' : 'rgba(17, 17, 17, 0.4)' }">{{ item.name }}</p>
		</view>
	</view>
</template>
<script setup>
import { onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';
import Home from '/static/home.png';
import HomeActive from '/static/homeActive.png';
import Assets from '/static/abc.png';
import AssetsActive from '/static/assetsActive.png';
import Contract from '/static/contract.png';
import ContractActive from '/static/contractActive.png';
import Mining from '/static/mining.png';
import MiningActive from '/static/miningActive.png';
import Trade from '/static/node.png';
const current = ref('pages/index/index');
const tabList = [
	{
		pagePath: 'pages/index/index',
		state: true,
		iconPath: Home,
		selectedIconPath: HomeActive,
		name: '首页',
		key: 'home'
	},
	{
		pagePath: 'pages/mining/index',
		state: false,
		iconPath: Mining,
		selectedIconPath: MiningActive,
		name: '挖矿',
		key: 'mining'
	},
	{
		pagePath: 'pages/trade/index',
		state: false,
		iconPath: Trade,
		selectedIconPath: Trade,
		name: '交易',
		key: 'trade'
	},
	{
		pagePath: 'pages/contract/index',
		state: false,
		iconPath: Contract,
		selectedIconPath: ContractActive,
		name: '合约',
		key: 'contract'
	},
	{
		pagePath: 'pages/assets/index',
		state: false,
		iconPath: Assets,
		selectedIconPath: AssetsActive,
		name: '资产',
		key: 'assets'
	}
];

const switchTab = (pagePath) => {
	uni.reLaunch({
		url: '/' + pagePath
	});
};
const getRouter = async () => {
	const data = await getCurrentPages();
	const currentPage = data[data.length - 1];
	const route = currentPage.route;
	current.value = route;
};
onShow(() => {
	getRouter();
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
