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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./cartridges/int_adyen_SFRA/cartridge/client/default/js/threeds2-js-utils.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cartridges/int_adyen_SFRA/cartridge/client/default/js/threeds2-js-utils.js":
/*!************************************************************************************!*\
  !*** ./cartridges/int_adyen_SFRA/cartridge/client/default/js/threeds2-js-utils.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,n){ true?module.exports=n():undefined}(this,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){\"undefined\"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&\"object\"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&n&&\"string\"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,\"a\",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p=\"\",t(t.s=0)}([function(e,n,t){\"use strict\";t.r(n);var r={container:void 0},o={\"01\":[\"250px\",\"400px\"],\"02\":[\"390px\",\"400px\"],\"03\":[\"500px\",\"600px\"],\"04\":[\"600px\",\"400px\"],\"05\":[\"100%\",\"100%\"]};function a(e){return o.hasOwnProperty(e)?e:\"01\"}var i={createIframe:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:\"0\",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:\"0\",a=arguments.length>4?arguments[4]:void 0;if(!n||0===n.length)throw new Error(\"Name parameter missing for iframe\");e instanceof HTMLElement?r.container=e:r.container=document.body;var i=document.createElement(\"iframe\");i.classList.add(n+\"Class\"),i.width=t,i.height=o,i.name=n,i.setAttribute(\"frameborder\",\"0\"),i.setAttribute(\"border\",\"0\");var d=document.createTextNode(\"<p>Your browser does not support iframes.</p>\");return i.appendChild(d),r.container.appendChild(i),function(e,n){e.attachEvent?e.attachEvent(\"onload\",function(){n&&\"function\"===typeof n&&n(e.contentWindow)}):e.onload=function(){n&&\"function\"===typeof n&&n(e.contentWindow)}}(i,a),i},createForm:function(e,n,t,r,o){if(!e||!n||!t||!r||!o)throw new Error(\"Not all required parameters provided for form creation\");if(0===e.length||0===n.length||0===t.length||0===r.length||0===o.length)throw new Error(\"Not all required parameters have suitable values\");var a=document.createElement(\"form\");a.style.display=\"none\",a.name=e,a.action=n,a.method=\"POST\",a.target=t;var i=document.createElement(\"input\");return i.name=r,i.value=o,a.appendChild(i),a},getBrowserInfo:function(){var e=window&&window.screen?window.screen.width:\"\",n=window&&window.screen?window.screen.height:\"\",t=window&&window.screen?window.screen.colorDepth:\"\",r=window&&window.navigator?window.navigator.userAgent:\"\",o=!(!window||!window.navigator)&&navigator.javaEnabled(),a=\"\";return window&&window.navigator&&(a=window.navigator.language?window.navigator.language:window.navigator.browserLanguage),{screenWidth:e,screenHeight:n,colorDepth:t,userAgent:r,timeZoneOffset:(new Date).getTimezoneOffset(),language:a,javaEnabled:o}},base64Url:{encode:function(e){var n=window.btoa(e).split(\"=\")[0];return n=(n=n.replace(\"/+/g\",\"-\")).replace(\"///g\",\"_\")},decode:function(e){var n=e;switch((n=(n=n.replace(\"/-/g\",\"+\")).replace(\"/_/g\",\"/\")).length%4){case 0:break;case 2:n+=\"==\";break;case 3:n+=\"=\";break;default:window.console&&window.console.log&&window.console.log(\"### base64url::decodeBase64URL::  Illegal base64url string!\")}try{return window.atob(n)}catch(e){throw new Error(e)}}},config:{challengeWindowSizes:o,validateChallengeWindowSize:a,getChallengeWindowSize:function(e){return o[a(e)]},THREEDS_METHOD_TIMEOUT:1e4,CHALLENGE_TIMEOUT:6e5}};n.default=i}]).default});\n\n//# sourceURL=webpack:///./cartridges/int_adyen_SFRA/cartridge/client/default/js/threeds2-js-utils.js?");

/***/ })

/******/ });