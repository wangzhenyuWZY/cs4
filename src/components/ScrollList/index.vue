<template>
	<view class="listBox">
		<div class="FieldBox">
			<div class="left">
				<p class="text">名称</p>
				<div class="operate">
					<div class="triangle triangleRotate"></div>
					<div class="triangle"></div>
				</div>
			</div>
			<div class="right">
				<div class="left">
					<p class="text">最新价</p>
					<div class="operate">
						<div class="triangle triangleRotate"></div>
						<div class="triangle"></div>
					</div>
				</div>
				<div class="left right">
					<p class="text">涨跌幅</p>
					<div class="operate">
						<div class="triangle triangleRotate"></div>
						<div class="triangle"></div>
					</div>
				</div>
			</div>
		</div>
		<view :style="{ height: height }">
			<z-paging ref="paging" use-virtual-list :cell-height-mode="'fixed'" :force-close-inner-list="true" @virtualListChange="virtualListChange" @query="queryList">
				<view class="lineItemMore" :id="`zp-id-${item.zp_index}`" :key="item.zp_index" v-for="item in virtualList" @click="itemClick(item, item.zp_index)">
					<div class="left">
						<image src="@/static/combine.svg" alt="" class="img" />
						<div class="content">
							<p class="en">
								<span class="name">{{ item.enName }}</span>
								<span class="u">/usdt</span>
							</p>
							<p class="cn">{{ item.name }}</p>
						</div>
					</div>
					<div class="right">
						<p class="price">${{ item.price }}</p>
						<p class="fluctuation" :style="{ backgroundColor: Number(item.flux) === 0 ? '#a88a8a' : Number(item.flux) > 0 ? '#1EA266' : '#CF3F48' }">
							{{ item.flux }}%
						</p>
					</div>
				</view>
			</z-paging>
		</view>
	</view>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const { params, height } = defineProps({
	height: String, // 定义要接收的参数
	params: Array
});

const paging = ref(null);
const virtualList = ref([]);

const virtualListChange = (list) => {
	virtualList.value = list;
};
const itemClick = (i, index) => {
	console.log(i, index);
};
const queryList = (pageNo, pageSize) => {
	setTimeout(() => {
		paging.value?.complete(params);
	}, 1500);
};
</script>

<style lang="scss">
@import url('./index.scss');
</style>
