<template>
	<view class="orderItemBox" :style="{ height: props.height }">
		<div class="moreBox" v-for="(i, index) in props.orderParams" :key="index">
			<div class="top">
				<p clas="niu">超级加速包</p>
				<p class="loading">{{ i.status ? '已结束' : '进行中' }}</p>
			</div>
			<div class="content">
				<div class="left">
					<image :src="HistoryOrderBack" alt="" class="img" />
					<div class="textMore" style="color: rgba(17, 17, 17, 0.4)">
						<p v-for="(item, ind) in changeList()" :key="ind">{{ item }}</p>
					</div>
				</div>
				<div class="textMore" style="text-align: right; color: #111111">
					<p v-for="(it, indexs) in changeData(i)" :key="indexs">{{ i.start ? i.start : '--' }}</p>
					<p>{{ i.end ? i.end : '--' }}</p>
					<p>{{ i.price }} CNY</p>
					<p>{{ i.get }} CNY</p>
				</div>
			</div>
		</div>
	</view>
</template>
<script setup>
import HistoryOrderBack from '@/static/historyOrderBack.png';
import { defineProps, watch, ref } from 'vue';
// status-----  node,tradeZoneIncome,tradeZoneHistory
const props = defineProps({
	orderParams: Array, // 定义要接收的参数
	height: String,
	status: String
});
const optionStatus = ref(props.status);
const nodeOption = ['开始时间', '结束时间', '价格', '5天释放'];
const tradeZoneHistoryOption = ['生效时间', '结束时间', '价格', '5天释放', '5周期'];
const tradeZoneIncomeOption = ['价格', '收益', '周期', '下级姓名', '手机号'];
const changeList = () => {
	if (optionStatus.value === 'node') {
		return nodeOption;
	} else if (optionStatus.value === 'tradeZoneHistory') {
		return tradeZoneHistoryOption;
	} else if (optionStatus.value === 'tradeZoneIncome') {
		return tradeZoneIncomeOption;
	}
};
const changeData = (i) => {
	if (optionStatus.value === 'node') {
		// return nodeOption;
	} else if (optionStatus.value === 'tradeZoneHistory') {
		// return tradeZoneOption;
	} else if (optionStatus.value === 'tradeZoneHistory') {
		// return tradeZoneOption;
	}
};
// 监听响应式变量
watch(
	() => props.status,
	(oldValue, _) => {
		optionStatus.value = oldValue;
	}
);
</script>

<style lang="scss">
@import url('./index.scss');
</style>
