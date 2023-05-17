// ---------------------- 로또 생성 ----------------------//

// 로또 태그생성
export function GenerateLottoEl(lottoArr) {
	const lottoNumbersContainer = document.getElementById('lotto-after');

	lottoArr.forEach((lotto) => {
		const lottoNumbersWrapper = document.createElement('div');
		lottoNumbersWrapper.classList.add('lotto-numbers', 'd-flex', 'justify-around');
		lotto.forEach((number) => {
			const lottoNumber = document.createElement('div');
			lottoNumber.classList.add('lotto-number');
			lottoNumber.innerText = number;
			lottoNumbersWrapper.appendChild(lottoNumber);
		});
		lottoNumbersContainer.appendChild(lottoNumbersWrapper);
	});
}

// 로또 생성
export function GenerateLotto() {
	let lottoNums = [];
	while (lottoNums.length < 6) {
		let number = parseInt(Math.random() * 45) + 1;
		if (lottoNums.indexOf(number) === -1) lottoNums.push(number);
	}
	return lottoNums;
}

// 로또 배열 생성
export function GenerateLottoArr(lottoCount) {
	let lottoArr = [];
	for (let i = 0; i < lottoCount; i++) {
		lottoArr.push(GenerateLotto());
	}
	return lottoArr;
}
