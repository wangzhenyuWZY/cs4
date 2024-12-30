const BASE_URL = 'https://csapi.cips.cc'; // 基础请求地址
export const request = ({
	url,
	method,
	data,
	loading = true
}) => {
	return new Promise((resolve, reject) => {
		if (loading) {
			uni.showLoading({
				title: 'Loading',
				mask: true
			});
		}
		uni.request({
			url: BASE_URL + url, // 拼接完整的 URL
			method: method || 'POST', // 默认 GET 方法
			data: data || {}, // 请求参数
			header: {
				'Content-Type': 'application/json',
				Authorization: uni.getStorageSync('token') || '', // 动态设置 token
			},
			timeout: 20000, // 默认超时 20 秒
			success: (res) => {
				if (res.statusCode === 200) {
					// 请求成功
					resolve(res.data);
				} else {
					if (res?.data?.code === -1) {
						//   token不对  							// token过期
						if (res?.data?.message === "token error" || res?.data?.message ===
							"token is expired") {
							uni.navigateTo({
								url: '/pages/loginRegister/login'
							});
							uni.removeStorageSync('token');
							uni.showToast({
								title: '登录过期，请重新登录!', // 提示的内容
								icon: 'none', // 图标，可选值：success / none / loading
								duration: 2000 // 提示持续时间，单位毫秒
							});
						} else {
							reject({
								message: `错误码：${res.statusCode}`,
								data: res.data,
							});
						}

					} else {
						uni.showToast({
							title: '服务发生错误,请重新尝试!',
							icon: 'none',
							duration: 2000
						});
						// 服务器返回错误
						reject({
							message: `错误码：${res.statusCode}`,
							data: res.data,
						});
					}

				}
			},
			fail: (err) => {
				uni.showToast({
					title: '网络错误,请重新尝试!',
					icon: 'none',
					duration: 2000
				});
				// 网络错误
				reject(err);
			},
			// 请求完成的  操作
			complete: () => {
				uni.hideLoading(); // 请求完成后隐藏加载框
			}
		});
	});
};