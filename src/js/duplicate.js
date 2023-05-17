export function CheckDuplicate(number, numbers) {
	// 입력된 값 number로 가져오기
	const value = parseInt(number.value);

	// 1부터 45까지의 숫자가 아닌 경우
	if (value < 1 || value > 45) {
		alert('1부터 45까지의 숫자를 입력해주세요!');
		number.value = '';
		return;
	}
	// $allWinningNumbers 내 중복 검사
	for (let i of numbers) {
		if (number !== i && value === parseInt(i.value)) {
			alert('중복된 숫자입니다!');
			number.value = '';
			return;
		}
	}
}
