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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (() => {

eval("\nconst HandleKeyPress = (keyCode, isPlayed) => {\n    let tile = document.querySelector(`div[data-key=\"${keyCode}\"]`);\n    let hasBeenPlayed = isPlayedStatus[keyCode];\n    if (tile) {\n        if (isPlayed == true && hasBeenPlayed == false) {\n            tile.classList.add('playing');\n            PlaySound(keyCode);\n            isPlayedStatus[keyCode] = true;\n        }\n        if (isPlayed == false) {\n            tile.classList.remove('playing');\n            isPlayedStatus[keyCode] = false;\n        }\n    }\n};\nconst PlaySound = (keyCode) => {\n    let sound = document.querySelector(`audio[data-key=\"${keyCode}\"]`);\n    if (sound) {\n        sound.currentTime = 0;\n        sound.play();\n    }\n};\ndocument.addEventListener('keydown', function (event) {\n    HandleKeyPress(event.keyCode, true);\n});\ndocument.addEventListener('keyup', function (event) {\n    HandleKeyPress(event.keyCode, false);\n});\nlet isPlayedStatus = {\n    65: false,\n    83: false,\n    68: false,\n    70: false,\n    71: false,\n    72: false,\n    74: false,\n    75: false,\n    76: false,\n};\n\n\n//# sourceURL=webpack://01---javascript-drum-kit/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"]();
/******/ 	
/******/ })()
;