/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lesson 9.2/src/cart.js":
/*!********************************!*\
  !*** ./lesson 9.2/src/cart.js ***!
  \********************************/
/***/ ((module) => {

eval("var cart = [];\nfunction addToCart(product) {\n  cart.push(product);\n}\nfunction removeFromCart(product) {\n  cart = cart.filter(function (item) {\n    return item.id !== product.id;\n  });\n}\nmodule.exports = {\n  addToCart: addToCart,\n  removeFromCart: removeFromCart,\n  cart: cart\n};\n\n//# sourceURL=webpack:///./lesson_9.2/src/cart.js?");

/***/ }),

/***/ "./lesson 9.2/src/index.js":
/*!*********************************!*\
  !*** ./lesson 9.2/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./lesson 9.2/src/cart.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cart__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./lesson 9.2/src/product.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.css */ \"./lesson 9.2/src/card.css\");\n/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body.css */ \"./lesson 9.2/src/body.css\");\n\n\n\n\nfunction renderProducts(products) {\n  var productList = document.querySelector(\"#product-list\");\n  products.forEach(function (product) {\n    productList.innerHTML += \"\\n            <div class=\\\"card\\\">\\n                <div class=\\\"card-body\\\">\\n                    <h5 class=\\\"card-title\\\">\".concat(product.name, \"</h5>\\n                    <h5 class=\\\"card-price\\\">\").concat(product.price, \"</h5>\\n                    <h5 class=\\\"card-year\\\">\").concat(product.year, \"</h5>\\n                    <button class=\\\"btn btn-primary\\\" onclick=\\\"addToCart(\").concat(product.id, \")\\\">Add to cart</button>\\n                </div>\\n            </div>\\n        \");\n  });\n}\nrenderProducts(_product__WEBPACK_IMPORTED_MODULE_1__.products);\n\n// function init() {\n//     addToCart(products[0]);\n//     addToCart(products[1]);\n//     addToCart(products[2]);\n//     console.log(cart);\n// }\n\n// init();\n\n//# sourceURL=webpack:///./lesson_9.2/src/index.js?");

/***/ }),

/***/ "./lesson 9.2/src/product.js":
/*!***********************************!*\
  !*** ./lesson 9.2/src/product.js ***!
  \***********************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Product = /*#__PURE__*/_createClass(function Product(id, name, price, year) {\n  _classCallCheck(this, Product);\n  this.id = id;\n  this.name = name;\n  this.price = price;\n  this.year = year;\n});\nvar products = [new Product(1, 'Laptop', 1000, 2021), new Product(2, 'Mouse', 100, 2021), new Product(3, 'Keyboard', 200, 2021)];\nmodule.exports = {\n  products: products\n};\n\n//# sourceURL=webpack:///./lesson_9.2/src/product.js?");

/***/ }),

/***/ "./lesson 9.2/src/body.css":
/*!*********************************!*\
  !*** ./lesson 9.2/src/body.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./lesson_9.2/src/body.css?");

/***/ }),

/***/ "./lesson 9.2/src/card.css":
/*!*********************************!*\
  !*** ./lesson 9.2/src/card.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./lesson_9.2/src/card.css?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lesson 9.2/src/index.js");
/******/ 	
/******/ })()
;