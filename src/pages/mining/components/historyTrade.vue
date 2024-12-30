<template>
	<view class="historyTradeBox">
		<div class="topBox">
			<TopBack text="我的挖矿" url="/pages/mining/index" isTabbar="true" />
			<div class="optionBox">
				<div class="item" v-for="i in option" :key="i.key" @click="changeKey(i.key)">
					<image :src="i.img" alt="" class="img" />
					<p :style="{ color: select === i.key ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }">{{ i.text }}</p>
				</div>
			</div>
		</div>
		<div class="listBox">
			<div class="orderItemBox" style="height: calc(100vh - 170px)">
				<div class="moreBox" v-for="(i, index) in orderParams" :key="index" :style="{ display: i.status === select ? 'block' : 'none' }">
					<div class="top">
						<p clas="niu">{{ i.type === 'Beginner' ? '初级' : i.type === 'Advanced' ? '高级' : '中级' }}矿机</p>
						<div class="loading" @click="goDetail(i)">
							<span :style="{ color: i.status === 'finish' ? '#4D72E3' : '#0DC414' }">{{ i.status === 'finish' ? '已结束' : '挖矿中' }}</span>
							<image :src="GoColor" alt="" class="img" />
						</div>
					</div>
					<div class="content">
						<image :src="HistoryOrderBack" alt="" class="img" />
						<div class="box">
							<div class="item" v-for="item in i.info" :key="item.text">
								<span class="text">{{ item.text }}</span>
								<span class="num">{{ item.num }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import { onPullDownRefresh } from '@dcloudio/uni-app';
import TopBack from '/components/TopBack/index.vue';
import OptionLeft from '@/static/optionLeft.png';
import HistoryOrderBack from '@/static/historyOrderBack.png';
import OptionRight from '@/static/optionRight.png';
import GoColor from '@/static/goColor.png';

const select = ref('inProgress');
// Beginner  ---初级   Intermediate  ---中级, Advanced   ---高级
const orderParams = [
	{
		type: 'Beginner',
		status: 'finish',
		info: [
			{ text: '开始时间', num: '2024/08/30 12:00' },
			{ text: '日产出', num: '10%' },
			{ text: '价格', num: '1230 CNY' },
			{ text: '周期', num: '88天' },
			{ text: '倍数', num: '2' }
		]
	},
	{
		type: 'Advanced',
		status: 'finish',
		info: [
			{ text: '开始时间', num: '2024/08/30 12:00' },
			{ text: '日产出', num: '10%' },
			{ text: '价格', num: '1230 CNY' },
			{ text: '周期', num: '88天' },
			{ text: '倍数', num: '2' }
		]
	},
	{
		type: 'Intermediate',
		status: 'inProgress',
		info: [
			{ text: '开始时间', num: '2024/08/30 12:00' },
			{ text: '日产出', num: '10%' },
			{ text: '价格', num: '1230 CNY' },
			{ text: '周期', num: '88天' },
			{ text: '倍数', num: '2' }
		]
	},
	{
		type: 'Advanced',
		status: 'inProgress',
		info: [
			{ text: '开始时间', num: '2024/08/30 12:00' },
			{ text: '日产出', num: '10%' },
			{ text: '价格', num: '1230 CNY' },
			{ text: '周期', num: '88天' },
			{ text: '倍数', num: '2' }
		]
	}
];
const option = [
	{ text: '挖矿中', img: OptionLeft, key: 'inProgress' },
	{ text: '已结束', img: OptionRight, key: 'finish' }
];
const changeData = (i) => {};
const changeList = () => {};
const changeKey = (key) => {
	select.value = key;
};

const goDetail = (i) => {
	console.log(i);
	uni.navigateTo({
		url: '/pages/mining/components/historyDetail?id=' + i.status
	});
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