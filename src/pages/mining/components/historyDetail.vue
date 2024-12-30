<template>
	<view class="historyDetailsBox">
		<div class="topBack">
			<TopBack text="详情" url="/pages/mining/components/historyTrade" />
		</div>
		<div class="contentBox">
			<div class="quantity">
				<image :src="DetailNumberBack" alt="" class="img" />
				<div class="text">
					<p class="name">已产出CIPS</p>
					<p class="num">40000.00</p>
				</div>
			</div>
			<div class="miningInfo">
				<div class="top">
					<div class="title">
						<span class="name">初级矿机</span>
						<span class="status">挖矿中</span>
					</div>
					<div class="content">
						<image :src="HistoryOrderBack" alt="" class="img" />
						<div class="item">
							<p class="box" v-for="(i, index) in infoList" :key="index">
								<span class="name">{{ i.name }}</span>
								<span class="num">{{ i.num }}</span>
							</p>
						</div>
					</div>
					<div class="time">
						<p class="title" style="margin-bottom: 8px">
							<span>开始时间</span>
							<span>结束时间</span>
						</p>
						<p class="title">
							<span class="time">2024/08/30 12:00</span>
							<span class="time">---</span>
						</p>
					</div>
				</div>
				<div class="details">
					<p class="title">产出明细</p>
					<div class="table">
						<!-- tabs -->
						<div class="item" v-for="(i, index) in tabs.concat(detailList)" :key="index" :style="{ color: index === 0 ? 'rgba(17,17,17,0.4)' : 'rgba(17,17,17,1)' }">
							<span>{{ i.time }}</span>
							<span>{{ i.token }}</span>
							<span>{{ i.num }}</span>
							<span>{{ i.type }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script setup>
import TopBack from '/components/TopBack/index.vue';
import HistoryOrderBack from '@/static/historyOrderBack.png';
import DetailNumberBack from '@/static/detailNumberBack.png';
import { onLoad } from '@dcloudio/uni-app';
const infoList = [
	{ name: '日产出', num: '10%' },
	{ name: '价格', num: '1230 CNY' },
	{ name: '周期', num: '88天' },
	{ name: '倍数', num: '2' }
];
const tabs = [{ time: '时间', token: '币种', num: '数量', type: '类型' }];
const detailList = [
	{ time: '2024.09.09 12:09:00', token: 'CIPS', num: '+500', type: '产出' },
	{ time: '2024.09.09 12:09:00', token: 'CIPS', num: '+500', type: '产出' },
	{ time: '2024.09.09 12:09:00', token: 'CIPS', num: '+500', type: '产出' },
	{ time: '2024.09.09 12:09:00', token: 'CIPS', num: '+500', type: '产出' }
];
onLoad((options) => {
	console.log(options);
});
</script>

<style lang="scss">
@import url('./index.scss');
</style>
