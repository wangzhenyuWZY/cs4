//  是否是手机号码
export function isPhoneNumber(phone) {
	const phoneRegex = /^1[3-9]\d{9}$/;
	return phoneRegex.test(phone);
}