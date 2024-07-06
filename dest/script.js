/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../src/scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _src_js_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../src/js/words */ \"./src/js/words.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\tconst letters = [\"а\",\"б\",\"в\",\"г\",\"д\",\"е\",\"ё\",\"ж\",\"з\",\"и\",\"й\",\"к\",\"л\",\"м\",\"н\",\"о\",\"п\",\"р\",\"с\",\"т\",\"у\",\"ф\",\"х\",\"ц\",\"ч\",\"ш\",\"щ\",\"ъ\",\"ы\",\"ь\",\"э\",\"ю\",\"я\"];\r\n\tconst wordField = document.querySelector('.word');\r\n\tconst keysBlock = document.querySelector('.keys');\r\n\tconst hintBlock = document.querySelector('.hint');\r\n\tconst winningBlock = document.querySelector('.winning');\r\n\tconst losingBlock = document.querySelector('.losing');\r\n\tconst btnPlay = document.querySelectorAll(\".js-play\");\r\n\tconst btnRules = document.querySelector(\".js-rules\");\r\n\tconst btnOtherGames = document.querySelector(\".js-other-games\");\r\n\tconst btnBack = document.querySelector(\".js-back\");\r\n\tlet word;\r\n\tlet attempt = 2;\r\n\tlet letterCards = []; // буквы для клавиатуры\r\n\tlet activeScreen = 'start-screen';\r\n\r\n\tinitBtns();\r\n\r\n\tfunction resetGame() {\r\n\t\tkeysBlock.innerHTML = '';\r\n\t\twordField.innerHTML = '';\r\n\t\tkeysBlock.style.visibility = 'visible';\r\n\t\thintBlock.style.visibility = 'visible';\r\n\t\twinningBlock.style.visibility = 'hidden';\r\n\t\tlosingBlock.style.visibility = 'hidden';\r\n\t\tattempt = 2;\r\n\r\n\t\thangman.reset();\r\n\t\thangman.init();\r\n\t\thangman.drawStep(1);\r\n\t\thangman.drawStep(2);\r\n\t}\r\n\r\n\tfunction initKeyboard() {\r\n\t\tletterCards = document.querySelectorAll('.letter-card');\r\n\r\n\t\tdocument.addEventListener('keydown', e => {\r\n\t\t\tif ( /^[абвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ]*$/.test(e.key) ) {\r\n\t\t\t\t[...letterCards].forEach(letter => {\r\n\t\t\t\t\tif (letter.getAttribute('letter') === e.key && !letter.classList.contains('_blocked')) {\r\n\t\t\t\t\t\tletter.click();\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t}\r\n\r\n\tfunction createLetterElement(letter) {\r\n\t\tlet div = document.createElement('div');\r\n\t\tdiv.classList.add('letter-card');\r\n\t\tdiv.setAttribute('letter', letter);\r\n\t\tdiv.innerHTML = letter;\r\n\r\n\t\tdiv.addEventListener('click', checkLetter);\r\n\r\n\t\treturn div\r\n\t}\r\n\tfunction createEmptyLetterElement(index) {\r\n\t\tlet div = document.createElement('div');\r\n\t\tdiv.classList.add('word__letter');\r\n\t\tdiv.setAttribute('data-state', 'empty');\r\n\t\tdiv.setAttribute('index', index);\r\n\t\treturn div\r\n\t}\r\n\r\n\tfunction checkLetter() {\r\n\t\tlet letterArr = word.name.split('')\r\n\t\tlet selectLetter = this.getAttribute('letter');\r\n\t\tthis.classList.add('_blocked')\r\n\r\n\t\tif (!letterArr.includes(selectLetter)) {\r\n\t\t\tattempt++;\r\n\t\t\thangman.drawStep(attempt);\r\n\r\n\t\t\t// проигрыш\r\n\t\t\tif (attempt === 9) {\r\n\t\t\t\tkeysBlock.style.visibility = 'hidden';\r\n\t\t\t\thintBlock.style.visibility = 'hidden';\r\n\t\t\t\tlosingBlock.style.visibility = 'visible';\r\n\t\t\t}\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// перебираем загаданное слово по буквам\r\n\t\tfor (let i = 0; i < letterArr.length; i++) {\r\n\t\t\tlet letter = letterArr[i];\r\n\t\t\t// если в загаданном слове есть выбранная буква\r\n\t\t\tif (letter === selectLetter) {\r\n\t\t\t\tlet emptyLetter = document.querySelector('.word__letter[index=\"' + i + '\"]')\r\n\t\t\t\temptyLetter.setAttribute('data-state', 'filled');\r\n\t\t\t\temptyLetter.innerHTML = selectLetter;\r\n\t\t\t\tcontinue;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t// выигрыш\r\n\t\tconsole.log(document.querySelectorAll('.word__letter[data-state=\"empty\"]'), document.querySelectorAll('.word__letter[data-state=\"empty\"]').length);\r\n\t\tif (!document.querySelectorAll('.word__letter[data-state=\"empty\"]').length) {\r\n\t\t\tkeysBlock.style.visibility = 'hidden';\r\n\t\t\thintBlock.style.visibility = 'hidden';\r\n\t\t\twinningBlock.style.visibility = 'visible';\r\n\t\t}\r\n\t}\r\n\r\n\tfunction initBtns() {\r\n\t\tbtnOtherGames.addEventListener('click', () => {\r\n\t\t\tshowScreen('other-games-screen');\r\n\t\t})\r\n\t\tbtnRules.addEventListener('click', () => {\r\n\t\t\tshowScreen('rules-screen');\r\n\t\t})\r\n\t\tbtnPlay.forEach(btn => {\r\n\t\t\tbtn.addEventListener('click', () => {\r\n\t\t\t\tresetGame();\r\n\t\t\t\tshowScreen('game-screen');\r\n\r\n\t\t\t\tletters.forEach(letter => {\r\n\t\t\t\t\tlet letterElement = createLetterElement(letter);\r\n\t\t\t\t\tkeysBlock.appendChild(letterElement);\r\n\t\t\t\t})\r\n\t\t\t\tword = getWord();\r\n\t\t\t\tsetHint();\r\n\t\t\t\tsetEmptyWord(word);\r\n\t\t\t\tinitKeyboard();\r\n\t\t\t})\r\n\t\t})\r\n\t\tbtnBack.addEventListener('click', () => {\r\n\t\t\tshowScreen('start-screen');\r\n\t\t})\r\n\t}\r\n\r\n\tfunction showScreen(screen) {\r\n\t\t[...document.getElementsByClassName('screen')].forEach(screen => {\r\n\t\t\tscreen.style.display = 'none'\r\n\t\t})\r\n\t\tactiveScreen = screen;\r\n\t\tdocument.getElementById(screen).style.display = 'block'\r\n\r\n\t\tif (screen === 'start-screen') {\r\n\t\t\tbtnBack.style.display = 'none'\r\n\t\t} else {\r\n\t\t\tbtnBack.style.display = 'block'\r\n\t\t}\r\n\t}\r\n\r\n\tfunction setHint() {\r\n\t\thintBlock.innerHTML = word.desc;\r\n\t}\r\n\r\n\tfunction setEmptyWord(word) {\r\n\t\tword.name.split('').forEach((letter, i) => {\r\n\t\t\tlet emptyLetterElement = createEmptyLetterElement(i);\r\n\t\t\twordField.appendChild(emptyLetterElement);\r\n\t\t})\r\n\t}\r\n\r\n\tfunction getWord() {\r\n\t\treturn _getRandomFromArray(_src_js_words__WEBPACK_IMPORTED_MODULE_1__.WORDS);\r\n\t}\r\n\r\n\t// получение случайного элемента из массива\r\n\tfunction _getRandomFromArray(items) {\r\n\t\treturn items[Math.floor(Math.random()*items.length)];\r\n\t}\r\n\r\n\r\n\tclass Hangman {\r\n\t\tconstructor() {\r\n\t\t\tthis.canvas = document.getElementById(\"hangman\");\r\n\t\t}\r\n\t\tinit() {\r\n\t\t\tthis.ctx = this.canvas.getContext(\"2d\");\r\n\t\t\tthis.ctx.lineWidth = 5;\r\n\t\t\tthis.ctx.lineHeight = 10;\r\n\t\t\tthis.ctx.strokeStyle = '#fff';\r\n\t\t}\r\n\r\n\t\treset() {\r\n\t\t\tthis.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n\t\t}\r\n\r\n\t\tdrawStep(step) {\r\n\t\t\tswitch(step) {\r\n\t\t\t\tcase 1:\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(80, 200);\r\n\t\t\t\t\tthis.ctx.lineTo(80, 0);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 2:\r\n\t\t\t\t\tthis.ctx.lineTo(160, 0);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 3:\r\n\t\t\t\t\tthis.ctx.lineTo(160, 40);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 4:// head\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.arc(160, 55, 15, 0, 2 * Math.PI);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 5:// body\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(160, 70);\r\n\t\t\t\t\tthis.ctx.lineTo(160, 120);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 6:// right hand\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(160, 70);\r\n\t\t\t\t\tthis.ctx.lineTo(180, 110);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 7:// left hand\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(160, 70);\r\n\t\t\t\t\tthis.ctx.lineTo(140, 110);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 8:// right leg\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(160, 120);\r\n\t\t\t\t\tthis.ctx.lineTo(180, 180);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase 9:// left leg\r\n\t\t\t\t\tthis.ctx.beginPath();\r\n\t\t\t\t\tthis.ctx.moveTo(160, 120);\r\n\t\t\t\t\tthis.ctx.lineTo(140, 180);\r\n\t\t\t\t\tthis.ctx.stroke();\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tlet hangman = new Hangman();\r\n\thangman.init();\r\n\thangman.drawStep(1);\r\n\thangman.drawStep(2);\r\n})\r\n\n\n//# sourceURL=webpack://fillwords/./app.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../../src/fonts/Chalkcyrillicfreehand.ttf */ \"./src/fonts/Chalkcyrillicfreehand.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../../../src/img/bg.webp */ \"./src/img/bg.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Chalk\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n* {\n  font-family: \"Chalk\", sans-serif;\n  font-size: 2.2222222222vw;\n}\n@media screen and (min-width: 1441px) {\n  * {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  * {\n    font-size: 8.8888888889vw;\n  }\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: contain;\n  background-size: auto;\n  height: 100svh;\n  color: #fff;\n}\n\na {\n  display: block;\n  text-decoration: none;\n}\n\n#app {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100svh;\n  position: relative;\n}\n\n.container {\n  width: 100vw;\n  margin: 0 auto;\n  height: 100vh;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n._inner-padding {\n  width: 47.2222222222vw;\n}\n@media screen and (min-width: 1441px) {\n  ._inner-padding {\n    width: 680px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  ._inner-padding {\n    width: 188.8888888889vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  ._inner-padding {\n    width: 90%;\n    padding-left: 1.1111111111vw;\n    padding-right: 1.1111111111vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (min-width: 1441px) {\n  ._inner-padding {\n    padding-left: 16px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (max-width: 1000px) and (orientation: portrait) {\n  ._inner-padding {\n    padding-left: 4.4444444444vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (min-width: 1441px) {\n  ._inner-padding {\n    padding-right: 16px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (max-width: 1000px) and (orientation: portrait) {\n  ._inner-padding {\n    padding-right: 4.4444444444vw;\n  }\n}\n\n._dflex {\n  display: flex;\n}\n\n._text-center {\n  text-align: center;\n}\n\n.h1 {\n  font-size: 6.6666666667vw;\n}\n@media screen and (min-width: 1441px) {\n  .h1 {\n    font-size: 96px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .h1 {\n    font-size: 20vw;\n  }\n}\n\n.h2 {\n  font-size: 4.4444444444vw;\n}\n@media screen and (min-width: 1441px) {\n  .h2 {\n    font-size: 64px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .h2 {\n    font-size: 13.3333333333vw;\n  }\n}\n\n.button {\n  color: rgba(255, 255, 255, 0.8784313725);\n  cursor: pointer;\n  font-size: 3.75vw;\n  margin-bottom: 1.1111111111vw;\n  text-align: center;\n}\n@media screen and (min-width: 1441px) {\n  .button {\n    font-size: 54px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .button {\n    font-size: 10vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .button {\n    margin-bottom: 16px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .button {\n    margin-bottom: 4.4444444444vw;\n  }\n}\n.button:hover {\n  color: #fff;\n}\n.button-back {\n  position: absolute;\n  display: none;\n  top: 0.5555555556vw;\n  z-index: 1;\n  left: 0;\n}\n@media screen and (min-width: 1441px) {\n  .button-back {\n    top: 8px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .button-back {\n    top: 2.2222222222vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .button-back {\n    left: 0.5555555556vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (min-width: 1441px) {\n  .button-back {\n    left: 8px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) and (max-width: 1000px) and (orientation: portrait) {\n  .button-back {\n    left: 2.2222222222vw;\n  }\n}\n\n#game-screen {\n  display: none;\n}\n\n#levels-screen {\n  display: none;\n}\n\n#settings-screen {\n  display: none;\n}\n\n#rules-screen {\n  display: none;\n}\n\n#not-support-screen {\n  display: none;\n}\n\n#other-games-screen {\n  display: none;\n}\n\n.letter-card {\n  font-size: 3.3333333333vw;\n  display: inline-block;\n  cursor: pointer;\n  text-transform: capitalize;\n  text-align: center;\n  user-select: none;\n}\n@media screen and (min-width: 1441px) {\n  .letter-card {\n    font-size: 48px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .letter-card {\n    font-size: 8.8888888889vw;\n  }\n}\n.letter-card:last-child {\n  margin-right: 0;\n}\n.letter-card._blocked {\n  pointer-events: none;\n  opacity: 0.3;\n}\n\ncanvas#hangman {\n  display: block;\n  margin: 0 auto;\n}\n\n.hint {\n  font-size: 2.2222222222vw;\n  margin-bottom: 2.2222222222vw;\n  text-align: center;\n}\n@media screen and (min-width: 1441px) {\n  .hint {\n    font-size: 32px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .hint {\n    font-size: 6.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .hint {\n    margin-bottom: 32px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .hint {\n    margin-bottom: 8.8888888889vw;\n  }\n}\n\n.word {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.2222222222vw;\n}\n@media screen and (min-width: 1441px) {\n  .word {\n    margin-bottom: 32px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word {\n    margin-bottom: 8.8888888889vw;\n  }\n}\n.word__letter {\n  border-bottom: 4px solid #fff;\n  padding-bottom: 0.4166666667vw;\n  width: 3.75vw;\n  height: 3.75vw;\n  display: inline-block;\n  margin-right: 0.2777777778vw;\n  font-size: 3.8888888889vw;\n  text-align: center;\n  text-transform: capitalize;\n  user-select: none;\n}\n@media screen and (min-width: 1441px) {\n  .word__letter {\n    padding-bottom: 6px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word__letter {\n    padding-bottom: 1.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .word__letter {\n    width: 54px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word__letter {\n    width: 6.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .word__letter {\n    height: 54px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word__letter {\n    height: 6.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .word__letter {\n    margin-right: 4px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word__letter {\n    margin-right: 1.1111111111vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .word__letter {\n    font-size: 56px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .word__letter {\n    font-size: 7.7777777778vw;\n  }\n}\n.word__letter:last-child {\n  margin-right: 0;\n}\n\n.banner-right {\n  width: 16.6666666667vw;\n  height: 27.7777777778vw;\n}\n@media screen and (min-width: 1441px) {\n  .banner-right {\n    width: 240px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-right {\n    width: 66.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .banner-right {\n    height: 400px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-right {\n    height: 111.1111111111vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-right {\n    display: none;\n  }\n}\n.banner-left {\n  width: 16.6666666667vw;\n  height: 27.7777777778vw;\n}\n@media screen and (min-width: 1441px) {\n  .banner-left {\n    width: 240px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-left {\n    width: 66.6666666667vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .banner-left {\n    height: 400px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-left {\n    height: 111.1111111111vw;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-left {\n    display: none;\n  }\n}\n.banner-bottom {\n  width: 22.2222222222vw;\n  height: 3.4722222222vw;\n  position: absolute;\n  bottom: 1.25vw;\n}\n@media screen and (min-width: 1441px) {\n  .banner-bottom {\n    width: 320px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-bottom {\n    width: 88.8888888889vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .banner-bottom {\n    height: 50px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-bottom {\n    height: 13.8888888889vw;\n  }\n}\n@media screen and (min-width: 1441px) {\n  .banner-bottom {\n    bottom: 18px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .banner-bottom {\n    bottom: 3.3333333333vw;\n  }\n}\n\n.keys {\n  display: grid;\n  grid-gap: 1.1111111111vw;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n@media screen and (min-width: 1441px) {\n  .keys {\n    grid-gap: 16px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .keys {\n    grid-gap: 1.1111111111vw;\n  }\n}\n\n.winning {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 100%);\n}\n.winning__title {\n  font-size: 3.8888888889vw;\n}\n@media screen and (min-width: 1441px) {\n  .winning__title {\n    font-size: 56px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .winning__title {\n    font-size: 10vw;\n  }\n}\n\n.losing {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, 100%);\n}\n.losing__title {\n  font-size: 3.8888888889vw;\n}\n@media screen and (min-width: 1441px) {\n  .losing__title {\n    font-size: 56px;\n  }\n}\n@media screen and (max-width: 1000px) and (orientation: portrait) {\n  .losing__title {\n    font-size: 10vw;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fillwords/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fillwords/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://fillwords/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fillwords/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fillwords/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fillwords/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/words.js":
/*!*************************!*\
  !*** ./src/js/words.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WORDS: () => (/* binding */ WORDS)\n/* harmony export */ });\nconst WORDS = [\r\n\r\n\t// //6\r\n\t{name: 'болото', desc: 'Топкое место со стоячей водой.'},\r\n\t{name: 'пробка', desc: 'Закупорка для бутылок.'},\r\n\t{name: 'орбита', desc: 'Путь движения небесного тела или космического корабля.'},\r\n\t{name: 'грация', desc: 'Изящество, красота в движениях.'},\r\n\t{name: 'гурман', desc: 'Любитель и ценитель изысканной пищи.'},\r\n\t{name: 'фигура', desc: 'Наружный вид предмета, внешнее очертание.'},\r\n\t{name: 'пасека', desc: 'Пчеловодное хозяйство, место, где расположены ульи.'},\r\n\r\n\t// //7\r\n\t{name: 'шампунь', desc: 'Мыльная жидкость или порошок.'},\r\n\t{name: 'трактор', desc: 'Самоходная машина для тяги.'},\r\n\t{name: 'автобус', desc: 'Многоместный автомобиль для перевозки пассажиров.'},\r\n\t{name: 'майонез', desc: 'Соус из масла, яичного желтка и различных приправ.'},\r\n\t{name: 'начинка', desc: 'То, что кладётся внутрь пирога, конфет и т. п.'},\r\n\t{name: 'иллюзия', desc: 'Обман чувств, нечто кажущееся.'},\r\n\t{name: 'арсенал', desc: 'Склад оружия и военного снаряжения.'},\r\n\t{name: 'марафон', desc: 'Спортивный бег на дистанцию 42 км 195 м.'},\r\n\t{name: 'антенна', desc: 'Устройство, принимающее или излучающее радиоволны.'},\r\n\r\n\t// //8\r\n\t{name: 'гангстер', desc: 'Член преступного сообщества.'},\r\n\t{name: 'кастрюля', desc: 'Металлическая посуда для варки пищи.'},\r\n\t{name: 'насмешка', desc: 'Обидная шутка, издёвка.'},\r\n\t{name: 'лабиринт', desc: 'Структура, состоящая из запутанных путей к выходу.'},\r\n\t{name: 'ландшафт', desc: 'Вид земной поверхности, общий вид местности.'},\r\n\t{name: 'гардероб', desc: 'Шкаф для одежды.'},\r\n\t{name: 'сенсация', desc: 'Необычное происшествие, получившее широкую огласку.'},\r\n\t{name: 'батискаф', desc: 'Самоходный аппарат для исследования морских глубин.'},\r\n\t{name: 'фрагмент', desc: 'Какая-либо часть от целого.'},\r\n\r\n\t// // 9\r\n\t{name: 'бутерброд', desc: 'Ломтик хлеба с маслом, с сыром, колбасой и т. п.'},\r\n\t{name: 'жемчужина', desc: 'Зерно жемчуга.'},\r\n\t{name: 'авторитет', desc: 'Общепризнанное значение, влияние.'},\r\n\t{name: 'пластилин', desc: 'Материал для ручной лепки.'},\r\n\r\n\t// 10\r\n\t{name: 'саламандра', desc: 'Название некоторых хвостатых земноводных.'},\r\n\t{name: 'аккредитив', desc: 'Условное денежное обязательство, принимаемое банком по поручению приказодателя.'},\r\n\t{name: 'аттракцион', desc: 'Устройство для развлечений в местах общественных гуляний.'},\r\n\t{name: 'провокатор', desc: 'Тайный агент, действующий путём провокации.'},\r\n\t{name: 'сертификат', desc: 'Официальное письменное удостоверение о чём-нибудь.'},\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n]\r\n\n\n//# sourceURL=webpack://fillwords/./src/js/words.js?");

/***/ }),

/***/ "./src/fonts/Chalkcyrillicfreehand.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/Chalkcyrillicfreehand.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d6f3081b06be699c94e.ttf\";\n\n//# sourceURL=webpack://fillwords/./src/fonts/Chalkcyrillicfreehand.ttf?");

/***/ }),

/***/ "./src/img/bg.webp":
/*!*************************!*\
  !*** ./src/img/bg.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"934f3f7d56fe10ee05fd.webp\";\n\n//# sourceURL=webpack://fillwords/./src/img/bg.webp?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;