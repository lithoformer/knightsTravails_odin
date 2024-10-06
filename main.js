/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Knight: () => (/* binding */ Knight)\n/* harmony export */ });\nclass Knight {\n    constructor(boardLength) {\n        this.boardLength = boardLength;\n        this.board = this.createBoard();\n    }\n\n    createBoard() {\n        let board = new Array(this.boardLength);\n        for (let i = 0; i < this.boardLength; i++) {\n            board[i] = new Array(this.boardLength).fill(0);\n        }\n        return board;\n    }\n\n    knightMoves(start, end) {\n\n        const queue = [];\n\n        this.board[start[0]][start[1]] = 1;\n\n        queue.push([start]);\n\n        while (queue.length) {\n            const current = queue.shift();\n            const pos = current[current.length - 1];\n\n            for (const x of this.getAdj(pos)) {\n                if (x[0] === end[0] && x[1] === end[1]) {\n                    return current.concat([end]);\n                }\n                if (this.board[x[0]][x[1]] !== 0) {\n                    continue;\n                }\n                this.board[x[0]][x[1]] = 1;\n                queue.push(current.concat([x]));\n            }\n        }\n    }\n\n    getAdj(coord) {\n        const adj = [];\n\n        if (coord[0] + 1 < this.boardLength && coord[1] + 2 < this.boardLength) {\n            adj.push([coord[0] + 1, coord[1] + 2]);\n        }\n        if (coord[0] + 2 < this.boardLength && coord[1] + 1 < this.boardLength) {\n            adj.push([coord[0] + 2, coord[1] + 1]);\n        }\n        if (coord[0] - 2 >= 0 && coord[1] + 1 < this.boardLength) {\n            adj.push([coord[0] - 2, coord[1] + 1]);\n        }\n        if (coord[0] - 1 >= 0 && coord[1] + 2 < this.boardLength) {\n            adj.push([coord[0] - 1, coord[1] + 2]);\n        }\n        if (coord[0] - 2 >= 0 && coord[1] - 1 >= 0) {\n            adj.push([coord[0] - 2, coord[1] - 1]);\n        }\n        if (coord[0] - 1 >= 0 && coord[1] - 2 >= 0) {\n            adj.push([coord[0] - 1, coord[1] - 2]);\n        }\n        if (coord[0] + 2 < this.boardLength && coord[1] - 1 >= 0) {\n            adj.push([coord[0] + 2, coord[1] - 1]);\n        }\n        if (coord[0] + 1 < this.boardLength && coord[1] - 2 >= 0) {\n            adj.push([coord[0] + 1, coord[1] - 2]);\n        }\n\n        return adj;\n    }\n}\n\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHN0cmF2YWlsc19vZGluLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEtuaWdodCB7XG4gICAgY29uc3RydWN0b3IoYm9hcmRMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5ib2FyZExlbmd0aCA9IGJvYXJkTGVuZ3RoO1xuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUJvYXJkKCkge1xuICAgICAgICBsZXQgYm9hcmQgPSBuZXcgQXJyYXkodGhpcy5ib2FyZExlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2FyZFtpXSA9IG5ldyBBcnJheSh0aGlzLmJvYXJkTGVuZ3RoKS5maWxsKDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBrbmlnaHRNb3ZlcyhzdGFydCwgZW5kKSB7XG5cbiAgICAgICAgY29uc3QgcXVldWUgPSBbXTtcblxuICAgICAgICB0aGlzLmJvYXJkW3N0YXJ0WzBdXVtzdGFydFsxXV0gPSAxO1xuXG4gICAgICAgIHF1ZXVlLnB1c2goW3N0YXJ0XSk7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBjdXJyZW50W2N1cnJlbnQubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgeCBvZiB0aGlzLmdldEFkaihwb3MpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhbMF0gPT09IGVuZFswXSAmJiB4WzFdID09PSBlbmRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQuY29uY2F0KFtlbmRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeFswXV1beFsxXV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeFswXV1beFsxXV0gPSAxO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goY3VycmVudC5jb25jYXQoW3hdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBZGooY29vcmQpIHtcbiAgICAgICAgY29uc3QgYWRqID0gW107XG5cbiAgICAgICAgaWYgKGNvb3JkWzBdICsgMSA8IHRoaXMuYm9hcmRMZW5ndGggJiYgY29vcmRbMV0gKyAyIDwgdGhpcy5ib2FyZExlbmd0aCkge1xuICAgICAgICAgICAgYWRqLnB1c2goW2Nvb3JkWzBdICsgMSwgY29vcmRbMV0gKyAyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzBdICsgMiA8IHRoaXMuYm9hcmRMZW5ndGggJiYgY29vcmRbMV0gKyAxIDwgdGhpcy5ib2FyZExlbmd0aCkge1xuICAgICAgICAgICAgYWRqLnB1c2goW2Nvb3JkWzBdICsgMiwgY29vcmRbMV0gKyAxXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzBdIC0gMiA+PSAwICYmIGNvb3JkWzFdICsgMSA8IHRoaXMuYm9hcmRMZW5ndGgpIHtcbiAgICAgICAgICAgIGFkai5wdXNoKFtjb29yZFswXSAtIDIsIGNvb3JkWzFdICsgMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFswXSAtIDEgPj0gMCAmJiBjb29yZFsxXSArIDIgPCB0aGlzLmJvYXJkTGVuZ3RoKSB7XG4gICAgICAgICAgICBhZGoucHVzaChbY29vcmRbMF0gLSAxLCBjb29yZFsxXSArIDJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRbMF0gLSAyID49IDAgJiYgY29vcmRbMV0gLSAxID49IDApIHtcbiAgICAgICAgICAgIGFkai5wdXNoKFtjb29yZFswXSAtIDIsIGNvb3JkWzFdIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFswXSAtIDEgPj0gMCAmJiBjb29yZFsxXSAtIDIgPj0gMCkge1xuICAgICAgICAgICAgYWRqLnB1c2goW2Nvb3JkWzBdIC0gMSwgY29vcmRbMV0gLSAyXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkWzBdICsgMiA8IHRoaXMuYm9hcmRMZW5ndGggJiYgY29vcmRbMV0gLSAxID49IDApIHtcbiAgICAgICAgICAgIGFkai5wdXNoKFtjb29yZFswXSArIDIsIGNvb3JkWzFdIC0gMV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZFswXSArIDEgPCB0aGlzLmJvYXJkTGVuZ3RoICYmIGNvb3JkWzFdIC0gMiA+PSAwKSB7XG4gICAgICAgICAgICBhZGoucHVzaChbY29vcmRbMF0gKyAxLCBjb29yZFsxXSAtIDJdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhZGo7XG4gICAgfVxufVxuXG5leHBvcnQgeyBLbmlnaHQgfSAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/src.js":
/*!********************!*\
  !*** ./src/src.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\nconst myKnight = new _app_js__WEBPACK_IMPORTED_MODULE_0__.Knight(8);\n\nconst moves = myKnight.knightMoves([0, 0], [7, 7]);\n\nconsole.log(JSON.stringify(moves));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3JjLmpzIiwibWFwcGluZ3MiOiI7O0FBQWtDOztBQUVsQyxxQkFBcUIsMkNBQU07O0FBRTNCOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0c3RyYXZhaWxzX29kaW4vLi9zcmMvc3JjLmpzPzIxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5cbmNvbnN0IG15S25pZ2h0ID0gbmV3IEtuaWdodCg4KTtcblxuY29uc3QgbW92ZXMgPSBteUtuaWdodC5rbmlnaHRNb3ZlcyhbMCwgMF0sIFs3LCA3XSk7XG5cbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1vdmVzKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/src.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/src.js");
/******/ 	
/******/ })()
;