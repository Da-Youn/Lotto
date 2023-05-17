// 금액 입력
export function HandlePayment(paymentAmount) {
	if (paymentAmount % 1000 !== 0) {
		alert('1000원 단위의 금액을 입력해 주세요.');
		return 0;
	} else if (paymentAmount > 1000000) {
		alert('입금할 수 있는 최대 금액은 1,000,000원 입니다.');
		return 0;
	} else if (paymentAmount < 0) {
		alert('유효한 금액을 입력해 주세요.');
		return 0;
	} else {
		return paymentAmount / 1000;
	}
}
