/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operations__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultOutput__ = __webpack_require__(3);




window.addEventListener( 'load', function() {
	let parentNode = document.getElementsByTagName( 'main' )[0];
	Object(__WEBPACK_IMPORTED_MODULE_0__interface__["a" /* default */])( parentNode );

	document.getElementsByClassName( 'buttonsSection' )[0].addEventListener( 'click', function( event ) {
		event.preventDefault();
		let buttonText = event.target.innerText;
		let firstNumber = parseInt( document.getElementsByClassName( 'textInput' )[0].value );
		let secondNumber = parseInt( document.getElementsByClassName( 'textInput' )[1].value );
		let result;
		switch( buttonText ) {
			case 'Add':
				result = __WEBPACK_IMPORTED_MODULE_1__operations__["a" /* default */].addition( firstNumber, secondNumber );
				break;
			case 'Substract':
				result = __WEBPACK_IMPORTED_MODULE_1__operations__["a" /* default */].subtraction( firstNumber, secondNumber );
				break;
			case 'Division':
				result = __WEBPACK_IMPORTED_MODULE_1__operations__["a" /* default */].division( firstNumber, secondNumber );
				break;
			case 'Multiplication':
				result = __WEBPACK_IMPORTED_MODULE_1__operations__["a" /* default */].multiplication( firstNumber, secondNumber );
				break;
		}
		Object(__WEBPACK_IMPORTED_MODULE_2__resultOutput__["a" /* default */])( result, document.getElementsByClassName( 'arithmetic' )[0] );

	} );

});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (( parentNode ) => {
	let form = document.createElement( 'form' );
	let fieldset = document.createElement( 'fieldset' );
	fieldset.classList.add( 'arithmetic' );
	let legend = document.createElement( 'legend' );
	legend.innerText = 'ARITHMETIC OPERATIONS';
	fieldset.appendChild( legend );
	let inputFirst = document.createElement( 'input' );
	inputFirst.setAttribute( 'type', 'number' );
	inputFirst.setAttribute( 'placeholder', 'First number' );
	inputFirst.classList.add( 'textInput' );
	fieldset.appendChild( inputFirst ); 
	let inputSecond = document.createElement( 'input' );
	inputSecond.setAttribute( 'type', 'number' );
	inputSecond.setAttribute( 'placeholder', 'Second number' );
	inputSecond.classList.add( 'textInput' );
	fieldset.appendChild( inputSecond ); 
	let section = document.createElement( 'section' );
	section.classList.add( 'buttonsSection' );
	let buttonAdd = document.createElement( 'button' );
	buttonAdd.innerText = 'Add';
	buttonAdd.classList.add( 'arithmeticButton' );
	buttonAdd.classList.add( 'addButton' );
	section.appendChild( buttonAdd );
	let buttonSubstract = document.createElement( 'button' );
	buttonSubstract.innerText = 'Substract';
	buttonSubstract.classList.add( 'arithmeticButton' );
	buttonSubstract.classList.add( 'substractButton' );
	section.appendChild( buttonSubstract );
	let buttonDivision = document.createElement( 'button' );
	buttonDivision.innerText = 'Division';
	buttonDivision.classList.add( 'arithmeticButton' );
	buttonDivision.classList.add( 'divisionButton' );
	section.appendChild( buttonDivision );
	let buttonMultiplication = document.createElement( 'button' );
	buttonMultiplication.innerText = 'Multiplication';
	buttonMultiplication.classList.add( 'arithmeticButton' );
	buttonMultiplication.classList.add( 'multiplicationButton' );
	section.appendChild( buttonMultiplication );
	fieldset.appendChild( section );
	form.appendChild( fieldset );
	parentNode.appendChild( form );
});




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let addition = ( firstNumber = 0, secondNumber = 0 ) => {
	return firstNumber + secondNumber;
};

let subtraction = ( firstNumber = 0, secondNumber = 0 ) => {
	return firstNumber - secondNumber;
};

let division = ( firstNumber = 0, secondNumber = 0 ) => {
	return firstNumber / secondNumber;
};

let multiplication = ( firstNumber = 0, secondNumber = 0 ) => {
	return firstNumber * secondNumber;
};


/* harmony default export */ __webpack_exports__["a"] = ({
	addition: addition,
	subtraction: subtraction,
	division: division,
	multiplication: multiplication
});




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (( result, parentNode ) => {
	if ( parentNode.lastChild.classList.contains( 'result' ) ) {
		parentNode.lastChild.value = result;
	} else {
		let resultLabel = document.createElement( 'label' );
		resultLabel.innerText = 'Result:';
		resultLabel.classList.add( 'resultLabel' );
		parentNode.appendChild( resultLabel );
		let resultInput = document.createElement( 'input' );
		resultInput.setAttribute( 'type', 'text' );
		resultInput.setAttribute( 'readonly', 'readonly' );
		resultInput.classList.add( 'result' );
		resultInput.classList.add( 'textInput' );
		resultInput.value = result;
		parentNode.appendChild( resultInput );
	}
});

/***/ })
/******/ ]);