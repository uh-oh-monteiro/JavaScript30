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

eval("\ndocument.addEventListener('keydown', function (event) {\n    HandleKeyDown(event.keyCode);\n});\ndocument.addEventListener('keyup', function (event) {\n    HandleKeyUp(event.keyCode);\n});\nconst HandleKeyDown = (keyCode) => {\n    const [tile, audio] = FetchComponents(keyCode);\n    HandlePlaying(tile, audio, keyCode);\n};\nconst HandleKeyUp = (keyCode) => {\n    const [tile, audio] = FetchComponents(keyCode);\n    HandleMuted(tile, keyCode);\n};\nconst FetchComponents = (keyCode) => {\n    const tile = document.querySelector(`div[data-key=\"${keyCode}\"]`);\n    const audio = document.querySelector(`audio[data-key=\"${keyCode}\"]`);\n    return [tile, audio];\n};\nconst HandlePlaying = (tile, audio, keyCode) => {\n    if (tile && audio) {\n        let hasBeenPlayed = isPlayedStatus[keyCode];\n        if (!hasBeenPlayed) {\n            tile.classList.add('playing');\n            PlaySound(audio);\n            isPlayedStatus[keyCode] = true;\n        }\n    }\n};\nconst HandleMuted = (tile, keyCode) => {\n    if (tile) {\n        isPlayedStatus[keyCode] = false;\n        tile.classList.remove('playing');\n    }\n};\nconst PlaySound = (audio) => {\n    audio.currentTime = 0;\n    audio.play();\n};\nlet isPlayedStatus = {\n    65: false,\n    83: false,\n    68: false,\n    70: false,\n    71: false,\n    72: false,\n    74: false,\n    75: false,\n    76: false,\n};\n\n\n//# sourceURL=webpack://01---javascript-drum-kit/./index.ts?");

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