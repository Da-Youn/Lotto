export function ShowLotto(winningNumbers) {
	const getLottos = document.querySelectorAll('.lotto-numbers');
	const countLottoArr = CountLotto(getLottos, winningNumbers);
	const winningCntArr = document.querySelectorAll('[class*="winning-cnt"]');
	for (let i = 0; i < 5; i++) {
		winningCntArr[i].textContent = `${countLottoArr[i]}개`;
	}
}

function CompareLotto(lottoNumbers, winningNumbers) {
	const lottoNumArr = Array.from(lottoNumbers.children).map((child) => child.textContent);
	const winningNumArr = winningNumbers.map((num) => num.value);
	let winningCnt = 0;
	let isBonus = false;
	lottoNumArr.forEach((number) => {
		if (winningNumArr.indexOf(number) !== -1) {
			winningCnt++;
			if (winningNumArr.indexOf(number) === 6) {
				isBonus = true;
			}
		}
	});
	// 5 + bonus 처리

	return [winningCnt, isBonus];
}

function CountLotto(lottos, winningNumbers) {
	const winningCntArr = new Array(5).fill(0);
	lottos.forEach((numbers) => {
		const [cnt, isBonus] = CompareLotto(numbers, winningNumbers);
		switch (cnt) {
			case 3:
				winningCntArr[0]++;
				break;
			case 4:
				winningCntArr[1]++;
				break;
			case 5:
				winningCntArr[2]++;
				break;
			case 6:
				if (isBonus) {
					winningCntArr[3]++;
					break;
				} else {
					winningCntArr[4]++;
					break;
				}

				break;
		}
	});

	return winningCntArr;
}
