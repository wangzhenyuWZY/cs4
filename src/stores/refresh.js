import {
	defineStore
} from "pinia";
export const useRefreshStore = defineStore("refresh", {
	// 定义状态
	state: () => ({
		count: 0,
	}),
	// 定义计算属性
	getters: {
		doubleCount: (state) => state.count * 2,
	},
	// 定义操作方法
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
});