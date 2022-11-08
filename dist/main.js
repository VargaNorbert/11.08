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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    var _a, _b, _c;\r\n    let eredmeny;\r\n    function adatBetoltes() {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let response = yield fetch('/users.json');\r\n            eredmeny = yield response.json();\r\n        });\r\n    }\r\n    ;\r\n    function torol() {\r\n        let termekLista = document.getElementById('list');\r\n        termekLista.textContent = '';\r\n    }\r\n    ;\r\n    adatBetoltes();\r\n    function adatMegjelenites(usersLista) {\r\n        let szulo = document.getElementById('list');\r\n        usersLista = usersLista.sort((a, b) => { return a.lastName > b.lastName ? 1 : -1; });\r\n        for (let e of usersLista) {\r\n            let li = document.createElement('li');\r\n            li.textContent = e.lastName.toUpperCase() + \" \" + e.firstName;\r\n            szulo.appendChild(li);\r\n        }\r\n    }\r\n    ;\r\n    function adatMegjelenites2(usersLista) {\r\n        let szulo = document.getElementById('tabla');\r\n        usersLista = usersLista.sort((a, b) => { return a.username > b.username ? 1 : -1; });\r\n        for (let e of usersLista) {\r\n            let tr = document.createElement('tr');\r\n            let td1 = document.createElement('td');\r\n            let td2 = document.createElement('td');\r\n            let td3 = document.createElement('td');\r\n            td1.textContent = e.username;\r\n            td2.textContent = e.email;\r\n            td3.textContent = e.phone;\r\n            tr.appendChild(td1);\r\n            tr.appendChild(td2);\r\n            tr.appendChild(td3);\r\n            szulo.appendChild(tr);\r\n        }\r\n    }\r\n    ;\r\n    function adatMegjelenites3(usersLista, min) {\r\n        let szulo = document.getElementById('list2');\r\n        let ossz = 0;\r\n        for (let e of usersLista) {\r\n            if (e.height > min) {\r\n                ossz += e.weight;\r\n            }\r\n        }\r\n        let li = document.createElement('li');\r\n        li.textContent = ossz.toString();\r\n        szulo === null || szulo === void 0 ? void 0 : szulo.appendChild(li);\r\n    }\r\n    ;\r\n    (_a = document.getElementById('feladat1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {\r\n        adatMegjelenites(eredmeny.users);\r\n    });\r\n    (_b = document.getElementById('feladat2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {\r\n        adatMegjelenites2(eredmeny.users);\r\n    });\r\n    (_c = document.getElementById('feladat3')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {\r\n        adatMegjelenites3(eredmeny.users, 180);\r\n    });\r\n});\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;