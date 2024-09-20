
import "/src/scss/style.scss";
import { WORDS } from "/src/js/words";

document.addEventListener('DOMContentLoaded', () => {
	const letters = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];
	const wordField = document.querySelector('.word');
	const keysBlock = document.querySelector('.keys');
	const hintBlock = document.querySelector('.hint');
	const themesBlock = document.querySelector('.themes-block');
	const winningBlock = document.querySelector('.winning');
	const losingBlock = document.querySelector('.losing');
	const btnPlay = document.querySelectorAll(".js-play");
	const btnThemes = document.querySelector(".js-themes");
	const btnRules = document.querySelector(".js-rules");
	const btnOtherGames = document.querySelector(".js-other-games");
	const btnBack = document.querySelector(".js-back");
	const themes = getThemesList();
	let selectedThemes = [];
	let word;
	let attempt = 2;
	let letterCards = []; // буквы для клавиатуры
	let activeScreen = 'start-screen';

	createThemesCheckboxes();
	initBtns();

	function resetGame() {
		keysBlock.innerHTML = '';
		wordField.innerHTML = '';
		keysBlock.style.display = 'grid';
		hintBlock.style.display = 'block';
		winningBlock.style.display = 'none';
		losingBlock.style.display = 'none';
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
	function createEmptyLetterElement(index, options = {isSpace: false}) {
		let div = document.createElement('div');
		div.classList.add('word__letter');
		if (options.isSpace) div.classList.add('word__letter_space');
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
				keysBlock.style.display = 'none';
				hintBlock.style.display = 'none';
				losingBlock.style.display = 'block';
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
		if (!document.querySelectorAll('.word__letter:not(.word__letter_space)[data-state="empty"]').length) {
			keysBlock.style.display = 'none';
			hintBlock.style.display = 'none';
			winningBlock.style.display = 'block';
		}
	}

	function initBtns() {
		btnOtherGames.addEventListener('click', () => {
			showScreen('other-games-screen');
		})
		btnRules.addEventListener('click', () => {
			showScreen('rules-screen');
		})
		btnThemes.addEventListener('click', () => {
			showScreen('themes-screen');
		})
		btnPlay.forEach(btn => {
			btn.addEventListener('click', () => {
				if (!selectedThemes.length) {
					alert('Выберите хотя бы одну тему');
					return;
				}
				resetGame();
				showScreen('game-screen');

				letters.forEach(letter => {
					let letterElement = createLetterElement(letter);
					keysBlock.appendChild(letterElement);
				})
				word = getWord();
				setTheme();
				setEmptyWord(word);
				initKeyboard();
			})
		})
		btnBack.addEventListener('click', () => {
			showScreen('start-screen');
		})

		document.querySelectorAll('.checkbox').forEach(el => {
			el.addEventListener('click', () => {
				let checkbox = el.querySelector('input');
				checkbox.checked = !checkbox.checked;
				el.children[0].classList[checkbox.checked ? 'add' : 'remove']('checkbox__checked');

				if (checkbox.value === 'Все') {
					if (checkbox.checked) {
						selectedThemes = themes
						document.querySelectorAll('.checkbox').forEach(el => {
							el.children[0].classList.add('checkbox__checked');
						})
					} else {
						selectedThemes = [];
						document.querySelectorAll('.checkbox').forEach(el => {
							el.children[0].classList.remove('checkbox__checked');
						})
					}
				} else {
					if (checkbox.checked) {
						selectedThemes.push(checkbox.value)
					} else {
						_removeElementFromArrayByIndex(selectedThemes, checkbox.value)
					}
				}
			})
		})
	}

	function showScreen(screen) {
		[...document.getElementsByClassName('screen')].forEach(screen => {
			screen.style.display = 'none'
		})
		activeScreen = screen;
		document.getElementById(screen).style.display = 'block'

		if (screen === 'start-screen') {
			btnBack.style.display = 'none'
		} else {
			btnBack.style.display = 'block'
		}
	}

	function setTheme() {
		hintBlock.innerHTML = 'Тема: ' +word.theme;
	}

	function setEmptyWord(word) {
		word.name.split('').forEach((letter, i) => {
			let emptyLetterElement;

			// если буква
			if (letter !== ' ') {
				emptyLetterElement = createEmptyLetterElement(i);
			} else { // если пробел
				emptyLetterElement = createEmptyLetterElement(i, {isSpace: true});
			}
			wordField.appendChild(emptyLetterElement);
		})
	}

	function getWord() {
		return _getRandomFromArray(WORDS.filter(word => selectedThemes.includes(word.theme)));
	}

	// получение случайного элемента из массива
	function _getRandomFromArray(items) {
		return items[Math.floor(Math.random()*items.length)];
	}

	// удаление элемента из массива
	function _removeElementFromArrayByIndex(array, el) {
		const index = array.indexOf(el);
		if (index > -1) { array.splice(index, 1);
		}
	}

	// получение списка доступных тем
	function getThemesList() {
		let themes = [];
		WORDS.forEach(word => {
			if (!themes.includes(word.theme)) {
				themes.push(word.theme);
			}
		})
		return themes;
	}

	function createThemesCheckboxes() {
		themes.forEach(theme => {
			let div = document.createElement('div');
			div.classList.add('checkbox');

			let body = document.createElement('div');
			body.classList.add('checkbox__body');

			let name = document.createElement('div');
			name.innerHTML = theme;

			let checkbox = document.createElement('input')
			checkbox.type = 'checkbox';
			checkbox.name = 'theme';
			checkbox.value = theme;

			body.appendChild(checkbox);
			body.appendChild(name);
			div.appendChild(body);

			themesBlock.appendChild(div);
		})


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
					this.ctx.lineTo(80, 10);
					this.ctx.stroke();
					break;
				case 2:
					this.ctx.lineTo(160, 10);
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
