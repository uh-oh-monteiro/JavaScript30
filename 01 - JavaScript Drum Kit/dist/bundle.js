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

eval("\nvar isPlayedStatus = {};\ndocument.addEventListener('DOMContentLoaded', function () {\n    InitialiseKeyPlayingStatus();\n});\ndocument.addEventListener('keydown', function (event) {\n    HandleKeyDown(`${event.keyCode}`);\n});\ndocument.addEventListener('keyup', function (event) {\n    HandleKeyUp(`${event.keyCode}`);\n});\nconst InitialiseKeyPlayingStatus = () => {\n    const playableKeysDivs = GetPlayableDivs();\n    CreateHashTable(playableKeysDivs);\n};\nconst GetPlayableDivs = () => {\n    const keysDiv = document.querySelector('.keys');\n    let playableKeysDivs = null;\n    if (keysDiv) {\n        const playableKeysDivs = keysDiv.querySelectorAll(':scope > div');\n    }\n    return playableKeysDivs;\n};\nconst HandleKeyDown = (keyCode) => {\n    const [tile, audio] = FetchComponents(keyCode);\n    HandlePlaying(tile, audio, keyCode);\n};\nconst HandleKeyUp = (keyCode) => {\n    const [tile, audio] = FetchComponents(keyCode);\n    HandleMuted(tile, keyCode);\n};\nconst FetchComponents = (keyCode) => {\n    const tile = document.querySelector(`div[data-key=\"${keyCode}\"]`);\n    const audio = document.querySelector(`audio[data-key=\"${keyCode}\"]`);\n    return [tile, audio];\n};\nconst HandlePlaying = (tile, audio, keyCode) => {\n    if (tile && audio) {\n        let hasBeenPlayed = isPlayedStatus[keyCode];\n        if (!hasBeenPlayed) {\n            tile.classList.add('playing');\n            PlaySound(audio);\n            isPlayedStatus[keyCode] = true;\n        }\n    }\n};\nconst HandleMuted = (tile, keyCode) => {\n    if (tile) {\n        isPlayedStatus[keyCode] = false;\n        tile.classList.remove('playing');\n    }\n};\nconst PlaySound = (audio) => {\n    audio.currentTime = 0;\n    audio.play();\n};\nconst CreateHashTable = (playableKeysDivs) => {\n    if (playableKeysDivs) {\n        const playableKeysDivsArray = Array.from(playableKeysDivs);\n        const dataKeys = playableKeysDivsArray.map(div => div.getAttribute('data-key'));\n        dataKeys.forEach(key => {\n            if (key) {\n                isPlayedStatus[key] = false;\n            }\n        });\n    }\n};\n\n\n//# sourceURL=webpack://01---javascript-drum-kit/./index.ts?");

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