import {
	request
} from '@/request/index';

// 用户协议
export const getTermsAgreement = () => {
	return request({
		url: '/terms/agreement',
	});
};

//隐私条款
export const getPrivacyPolicy = () => {
	return request({
		url: '/terms/privacy',
	});
};

// 注册
export const goUserRegister = (data) => {
	return request({
		url: '/user/register',
		data
	});
};

// 登录
export const goUserLogin = (data) => {
	return request({
		url: '/auth',
		data
	});
};

//   获取用户信息
export const getUserInfo = (data) => {
	return request({
		url: '/user/center/info',
		data,
		loading: false
	});
};