import {
	defineStore
} from "pinia";

import {
	getUserInfo
} from '@/request/api.js'

export const useDataStore = defineStore("data", {
	// 定义状态
	state: () => ({
		isHomeModalShow: false,
		username: {}
	}),
	// 定义计算属性
	getters: {
		// doubleCount: (state) => state.count * 2,
	},
	// 定义操作方法
	actions: {
		updateHomeModalShow() {
			this.isHomeModalShow = true
		},
		async getUserInfo() {
			const data = await getUserInfo();
			if (data?.data?.id) {
				this.username = {
					...data?.data
				}
			}
		},
	},
});