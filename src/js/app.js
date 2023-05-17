import { HandlePayment } from './payment.js';
import { GenerateLottoEl, GenerateLotto, GenerateLottoArr } from './lotto_generate.js';
import { CheckDuplicate } from './duplicate.js';
import { ShowLotto } from './lotto_show.js';

// ---------------------- 금액 입력 event ----------------------//
const $paymentForm = document.getElementById('payment-form');
const $paymentBtn = document.getElementById('payment-btn');
const $paymentCnt = document.getElementById('payment-cnt');

$paymentBtn.addEventListener('click', () => {
	// 구입한 로또 개수 표시
	$paymentCnt.textContent = parseInt($paymentCnt.textContent) + HandlePayment($paymentForm.value);
	// 로또 생성
	const newLotto = GenerateLottoArr(HandlePayment($paymentForm.value));
	// 로또 출력
	GenerateLottoEl(newLotto);
	$paymentForm.value = '';
});
$paymentForm.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault();
		// 구입한 로또 개수 표시
		$paymentCnt.textContent =
			parseInt($paymentCnt.textContent) + HandlePayment(paymentForm.value);
		// 로또 생성
		lottoArr = Array.from({ length: $paymentCnt.textContent }, () => GenerateLotto());
		// 로또 출력
		GenerateLottoEl(lottoArr);
		$paymentForm.value = '';
	}
});

// ---------------------- 당첨 번호 입력 event ----------------------- //
const $winningNumbers = document.querySelectorAll('.winning-number');
const $bonusNumber = document.querySelector('.bonus-number');
const $allWinningNumbers = [...$winningNumbers, $bonusNumber];

$allWinningNumbers.forEach((winningNumber) => {
	winningNumber.addEventListener('change', () => {
		CheckDuplicate(winningNumber, $allWinningNumbers);
	});
});

// ---------------------- 모달 open 및 당첨 번호 비교 ----------------- //
const $showResultButton = document.querySelector('.open-result-modal-button');
const $modalClose = document.querySelector('.modal-close');
const $modal = document.querySelector('.modal');
const $lottoViewBox = document.getElementById('lotto-after');
$showResultButton.addEventListener('click', () => {
	if (!$lottoViewBox.textContent) {
		alert('로또를 구매해 주세요!');
	} else if ($allWinningNumbers.some((element) => !element.value.trim())) {
		alert('당첨 번호를 모두 입력해 주세요!');
	} else {
		ShowLotto($allWinningNumbers);
		$modal.classList.add('open');
	}
});

$modalClose.addEventListener('click', () => {
	$modal.classList.remove('open');
});

// ---------------------- 번호 보기 toggle event ----------------------//

const $lottoNumbersToggleButton = document.querySelector('.lotto-numbers-toggle-button');

$lottoNumbersToggleButton.addEventListener('click', checkToggle);

function checkToggle() {
	if ($lottoNumbersToggleButton.checked) {
		$lottoViewBox.classList.remove('d-none');
	} else {
		$lottoViewBox.classList.add('d-none');
	}
}

// ----------------------- 다시 시작하기 버튼 event -------------------//

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
	$modal.classList.remove('open');
	$paymentCnt.textContent = '0';
	$lottoViewBox.innerHTML = '';
	$allWinningNumbers.map((el) => (el.value = ''));
	$lottoNumbersToggleButton.checked = false;
});
