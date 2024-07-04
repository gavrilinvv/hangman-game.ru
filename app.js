
import "/src/scss/style.scss";
import { WORDS } from "/src/js/words";

document.addEventListener('DOMContentLoaded', () => {
	const letters = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
	const wordField = document.querySelector('.word');
	const keysBlock = document.querySelector('.keys');
	const hintBlock = document.querySelector('.hint');
	const winningBlock = document.querySelector('.winning');
	const losingBlock = document.querySelector('.losing');
	const btnPlay = document.querySelectorAll(".js-play");
	const btnRules = document.querySelector(".js-rules");
	const btnOtherGames = document.querySelector(".js-other-games");
	const btnBack = document.querySelectorAll(".js-back");
	let word;
	let attempt = 2;
	let letterCards = []; // буквы для клавиатуры

	initBtns();

	function resetGame() {
		keysBlock.innerHTML = '';
		wordField.innerHTML = '';
		keysBlock.style.visibility = 'visible';
		hintBlock.style.visibility = 'visible';
		winningBlock.style.visibility = 'hidden';
		losingBlock.style.visibility = 'hidden';
		attempt = 2;

		hangman.reset();
		hangman.init();
		hangman.drawStep(1);
		hangman.drawStep(2);
	}

	function initKeyboard() {
		letterCards = document.querySelectorAll('.letter-card');

		document.addEventListener('keydown', e => {
			if ( /^[абвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ]*$/.test(e.key) ) {
				[...letterCards].forEach(letter => {
					if (letter.getAttribute('letter') === e.key && !letter.classList.contains('_blocked')) {
						letter.click();
					}
				})
			}
		})
	}

	function createLetterElement(letter) {
		let div = document.createElement('div');
		div.classList.add('letter-card');
		div.setAttribute('letter', letter);
		div.innerHTML = letter;

		div.addEventListener('click', checkLetter);

		return div
	}
	function createEmptyLetterElement(index) {
		let div = document.createElement('div');
		div.classList.add('word__letter');
		div.setAttribute('data-state', 'empty');
		div.setAttribute('index', index);
		return div
	}

	function checkLetter() {
		let letterArr = word.name.split('')
		let selectLetter = this.getAttribute('letter');
		this.classList.add('_blocked')

		if (!letterArr.includes(selectLetter)) {
			attempt++;
			hangman.drawStep(attempt);

			// проигрыш
			if (attempt === 9) {
				keysBlock.style.visibility = 'hidden';
				hintBlock.style.visibility = 'hidden';
				losingBlock.style.visibility = 'visible';
			}
			return;
		}

		// перебираем загаданное слово по буквам
		for (let i = 0; i < letterArr.length; i++) {
			let letter = letterArr[i];
			// если в загаданном слове есть выбранная буква
			if (letter === selectLetter) {
				let emptyLetter = document.querySelector('.word__letter[index="' + i + '"]')
				emptyLetter.setAttribute('data-state', 'filled');
				emptyLetter.innerHTML = selectLetter;
				continue;
			}
		}

		// выигрыш
		console.log(document.querySelectorAll('.word__letter[data-state="empty"]'), document.querySelectorAll('.word__letter[data-state="empty"]').length);
		if (!document.querySelectorAll('.word__letter[data-state="empty"]').length) {
			keysBlock.style.visibility = 'hidden';
			hintBlock.style.visibility = 'hidden';
			winningBlock.style.visibility = 'visible';
		}
	}

	function initBtns() {
		btnOtherGames.addEventListener('click', () => {
			showScreen('other-games-screen');
		})
		btnRules.addEventListener('click', () => {
			showScreen('rules-screen');
		})
		btnPlay.forEach(btn => {
			btn.addEventListener('click', () => {
				resetGame();
				showScreen('game-screen');

				letters.forEach(letter => {
					let letterElement = createLetterElement(letter);
					keysBlock.appendChild(letterElement);
				})
				word = getWord();
				setHint();
				setEmptyWord(word);
				initKeyboard();
			})
		})
		btnBack.forEach(btn => {
			btn.addEventListener('click', () => {
				showScreen('start-screen');
			})
		})
	}

	function showScreen(screen) {
		[...document.getElementsByClassName('screen')].forEach(screen => {
			screen.style.display = 'none'
		})
		document.getElementById(screen).style.display = 'block'
	}

	function setHint() {
		hintBlock.innerHTML = word.desc;
	}

	function setEmptyWord(word) {
		word.name.split('').forEach((letter, i) => {
			let emptyLetterElement = createEmptyLetterElement(i);
			wordField.appendChild(emptyLetterElement);
		})
	}

	function getWord() {
		return _getRandomFromArray(WORDS);
	}

	// получение случайного элемента из массива
	function _getRandomFromArray(items) {
		return items[Math.floor(Math.random()*items.length)];
	}


	class Hangman {
		constructor() {
			this.canvas = document.getElementById("hangman");
		}
		init() {
			this.ctx = this.canvas.getContext("2d");
			this.ctx.lineWidth = 5;
			this.ctx.lineHeight = 10;
			this.ctx.strokeStyle = '#fff';
		}

		reset() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		}

		drawStep(step) {
			switch(step) {
				case 1:
					this.ctx.beginPath();
					this.ctx.moveTo(80, 200);
					this.ctx.lineTo(80, 0);
					this.ctx.stroke();
					break;
				case 2:
					this.ctx.lineTo(160, 0);
					this.ctx.stroke();
					break;
				case 3:
					this.ctx.lineTo(160, 40);
					this.ctx.stroke();
					break;
				case 4:// head
					this.ctx.beginPath();
					this.ctx.arc(160, 55, 15, 0, 2 * Math.PI);
					this.ctx.stroke();
					break;
				case 5:// body
					this.ctx.beginPath();
					this.ctx.moveTo(160, 70);
					this.ctx.lineTo(160, 120);
					this.ctx.stroke();
					break;
				case 6:// right hand
					this.ctx.beginPath();
					this.ctx.moveTo(160, 70);
					this.ctx.lineTo(180, 110);
					this.ctx.stroke();
					break;
				case 7:// left hand
					this.ctx.beginPath();
					this.ctx.moveTo(160, 70);
					this.ctx.lineTo(140, 110);
					this.ctx.stroke();
					break;
				case 8:// right leg
					this.ctx.beginPath();
					this.ctx.moveTo(160, 120);
					this.ctx.lineTo(180, 180);
					this.ctx.stroke();
					break;
				case 9:// left leg
					this.ctx.beginPath();
					this.ctx.moveTo(160, 120);
					this.ctx.lineTo(140, 180);
					this.ctx.stroke();
					break;
			}
		}
	}

	let hangman = new Hangman();
	hangman.init();
	hangman.drawStep(1);
	hangman.drawStep(2);
})
