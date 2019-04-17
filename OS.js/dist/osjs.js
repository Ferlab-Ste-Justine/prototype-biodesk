/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"osjs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~osjs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/config.js":
/*!******************************!*\
  !*** ./src/client/config.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  public: '/',
  ws: {
    connectInterval: 5000,
    disabled: false
  },
  auth: {
    ui: {
      title: '',
      stamp: '0.0.1-prototype'
    }
  },
  languages: {
    en_EN: 'English',
    //nb_NO: 'Norwegian, Norsk (bokmål)',
    //vi_VN: 'Vietnamese, Vietnamese',
    fr_FR: 'French' //de_DE: 'German',
    //sl_SI: 'Slovenian, Slovenščina',
    //zh_CN: 'Chinese (simplified)'

  },
  desktop: {
    lock: false,
    contextmenu: {
      enabled: false,
      defaults: true
    },
    settings: {
      font: 'Roboto',
      theme: 'StandardDarkTheme',
      sounds: 'FreedesktopSounds',
      icons: 'GnomeIcons',
      animations: false,
      panels: [{
        position: 'top',
        items: [{
          name: 'menu'
        }, {
          name: 'windows'
        }, {
          name: 'tray'
        }, {
          name: 'clock'
        }]
      }],
      widgets: [{
        name: 'digitalclock'
      }],
      keybindings: [],
      background: {
        color: '#ffffff'
      },
      iconview: {
        enabled: true
      }
    }
  },
  locale: {
    format: {
      shortDate: 'yyyy-mm-dd',
      mediumDate: 'dS mmm yyyy',
      longDate: 'dS mmmm yyyy',
      fullDate: 'dddd dS mmmm yyyy',
      shortTime: 'HH:MM',
      longTime: 'HH:MM:ss'
    }
  },
  vfs: {
    defaultPath: 'home:/',
    defaultAdapter: 'system',
    adapters: {},
    mountpoints: [{
      name: 'home',
      label: 'Home',
      adapter: 'system',
      icon: {
        name: 'user-home'
      },
      attributes: {
        visibility: 'restricted',
        searchable: true,
        readOnly: false
      }
    }, {
      name: 'shared',
      label: 'Shared',
      adapter: 'system',
      icon: {
        name: 'user-home'
      },
      attributes: {
        visibility: 'global',
        searchable: true,
        readOnly: true
      }
    }],
    icons: {
      '^application/zip': {
        name: 'package-x-generic'
      },
      '^application/javascript': {
        name: 'text-x-script'
      },
      '^application/json': {
        name: 'text-x-script'
      },
      '^application/x-python': {
        name: 'text-x-script'
      },
      '^application/php': {
        name: 'text-x-script'
      },
      '^application/pdf': {
        name: 'x-office-document'
      },
      '^application/rtf': {
        name: 'x-office-document'
      },
      '^application/msword': {
        name: 'x-office-document'
      },
      '^application/(xz|tar|gzip)': {
        name: 'package-x-generic'
      },
      '^text/css': {
        name: 'text-x-script'
      },
      '^text/html': {
        name: 'text-html'
      },
      '^(application|text)/xml': {
        name: 'text-html'
      },
      '^application': {
        name: 'application-x-executable'
      },
      '^text': {
        name: 'text-x-generic'
      },
      '^audio': {
        name: 'audio-x-generic'
      },
      '^video': {
        name: 'video-x-generic'
      },
      '^image': {
        name: 'image-x-generic'
      }
    }
  }
};

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../custom-client */ "./src/custom-client/dist/main.js");
/* harmony import */ var _custom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _osjs_panels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @osjs/panels */ "./node_modules/@osjs/panels/dist/main.js");
/* harmony import */ var _osjs_panels__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_osjs_panels__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _osjs_gui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @osjs/gui */ "./node_modules/@osjs/gui/dist/esm.js");
/* harmony import */ var _osjs_dialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @osjs/dialogs */ "./node_modules/@osjs/dialogs/dist/main.js");
/* harmony import */ var _osjs_dialogs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_osjs_dialogs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _osjs_gapi_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @osjs/gapi-provider */ "./node_modules/@osjs/gapi-provider/dist/main.js");
/* harmony import */ var _osjs_gapi_provider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_osjs_gapi_provider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _osjs_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @osjs/widgets */ "./node_modules/@osjs/widgets/dist/main.js");
/* harmony import */ var _osjs_widgets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_osjs_widgets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.js */ "./src/client/config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_6__);








var init = function init() {
  var osjs = new _custom_client__WEBPACK_IMPORTED_MODULE_0__["Core"](_config_js__WEBPACK_IMPORTED_MODULE_6__, {
    omit: ['auth', 'languages', 'vfs.mountpoints']
  });
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["CoreServiceProvider"]);
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["DesktopServiceProvider"]);
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["VFSServiceProvider"]);
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["NotificationServiceProvider"]);
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["SettingsServiceProvider"], {
    before: true
  });
  osjs.register(_custom_client__WEBPACK_IMPORTED_MODULE_0__["AuthServiceProvider"], {
    before: true
  });
  osjs.register(_osjs_panels__WEBPACK_IMPORTED_MODULE_1__["PanelServiceProvider"]);
  osjs.register(_osjs_dialogs__WEBPACK_IMPORTED_MODULE_3__["DialogServiceProvider"]);
  osjs.register(_osjs_gui__WEBPACK_IMPORTED_MODULE_2__["GUIServiceProvider"]);
  osjs.register(_osjs_widgets__WEBPACK_IMPORTED_MODULE_5__["WidgetServiceProvider"]);
  osjs.boot();
};

window.addEventListener('DOMContentLoaded', function () {
  return init();
});

/***/ }),

/***/ "./src/client/index.scss":
/*!*******************************!*\
  !*** ./src/client/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/custom-client/dist/main.js":
/*!****************************************!*\
  !*** ./src/custom-client/dist/main.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else {}})(window,function(){return(/******/function(modules){// webpackBootstrap
/******/ // The module cache
/******/var installedModules={};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******/ /******/ // Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{enumerable:true,get:getter});/******/}/******/};/******/ /******/ // define __esModule on exports
/******/__webpack_require__.r=function(exports){/******/if(typeof Symbol!=='undefined'&&Symbol.toStringTag){/******/Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});/******/}/******/Object.defineProperty(exports,'__esModule',{value:true});/******/};/******/ /******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(value,mode){/******/if(mode&1)value=__webpack_require__(value);/******/if(mode&8)return value;/******/if(mode&4&&typeof value==='object'&&value&&value.__esModule)return value;/******/var ns=Object.create(null);/******/__webpack_require__.r(ns);/******/Object.defineProperty(ns,'default',{enumerable:true,value:value});/******/if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));/******/return ns;/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ /******/ // Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=0);/******/}(/************************************************************************/ /******/{/***/"./index.js":/*!******************!*\
  !*** ./index.js ***!
  \******************/ /*! exports provided: Core, Window, Desktop, Application, Notification, Notifications, WindowBehavior, Login, Auth, Websocket, CoreServiceProvider, DesktopServiceProvider, NotificationServiceProvider, VFSServiceProvider, AuthServiceProvider, SettingsServiceProvider */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _index_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./index.scss */"./index.scss");/* harmony import */var _index_scss__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _src_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./src/core */"./src/core.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Core",function(){return _src_core__WEBPACK_IMPORTED_MODULE_1__["default"];});/* harmony import */var _src_window__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./src/window */"./src/window.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Window",function(){return _src_window__WEBPACK_IMPORTED_MODULE_2__["default"];});/* harmony import */var _src_desktop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./src/desktop */"./src/desktop.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Desktop",function(){return _src_desktop__WEBPACK_IMPORTED_MODULE_3__["default"];});/* harmony import */var _src_application__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./src/application */"./src/application.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Application",function(){return _src_application__WEBPACK_IMPORTED_MODULE_4__["default"];});/* harmony import */var _src_notification__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./src/notification */"./src/notification.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Notification",function(){return _src_notification__WEBPACK_IMPORTED_MODULE_5__["default"];});/* harmony import */var _src_notifications__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./src/notifications */"./src/notifications.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Notifications",function(){return _src_notifications__WEBPACK_IMPORTED_MODULE_6__["default"];});/* harmony import */var _src_window_behavior__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./src/window-behavior */"./src/window-behavior.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"WindowBehavior",function(){return _src_window_behavior__WEBPACK_IMPORTED_MODULE_7__["default"];});/* harmony import */var _src_auth__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ./src/auth */"./src/auth.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Auth",function(){return _src_auth__WEBPACK_IMPORTED_MODULE_8__["default"];});/* harmony import */var _src_login__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ./src/login */"./src/login.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Login",function(){return _src_login__WEBPACK_IMPORTED_MODULE_9__["default"];});/* harmony import */var _src_websocket__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ./src/websocket */"./src/websocket.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"Websocket",function(){return _src_websocket__WEBPACK_IMPORTED_MODULE_10__["default"];});/* harmony import */var _src_providers_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ./src/providers/core */"./src/providers/core.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"CoreServiceProvider",function(){return _src_providers_core__WEBPACK_IMPORTED_MODULE_11__["default"];});/* harmony import */var _src_providers_desktop__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! ./src/providers/desktop */"./src/providers/desktop.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"DesktopServiceProvider",function(){return _src_providers_desktop__WEBPACK_IMPORTED_MODULE_12__["default"];});/* harmony import */var _src_providers_notifications__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ./src/providers/notifications */"./src/providers/notifications.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"NotificationServiceProvider",function(){return _src_providers_notifications__WEBPACK_IMPORTED_MODULE_13__["default"];});/* harmony import */var _src_providers_vfs__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ./src/providers/vfs */"./src/providers/vfs.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"VFSServiceProvider",function(){return _src_providers_vfs__WEBPACK_IMPORTED_MODULE_14__["default"];});/* harmony import */var _src_providers_auth__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(/*! ./src/providers/auth */"./src/providers/auth.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"AuthServiceProvider",function(){return _src_providers_auth__WEBPACK_IMPORTED_MODULE_15__["default"];});/* harmony import */var _src_providers_settings__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(/*! ./src/providers/settings */"./src/providers/settings.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"SettingsServiceProvider",function(){return _src_providers_settings__WEBPACK_IMPORTED_MODULE_16__["default"];});/**
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 * @preserve
 */ /***/},/***/"./index.scss":/*!********************!*\
  !*** ./index.scss ***!
  \********************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){// extracted by mini-css-extract-plugin
/***/},/***/"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/ /*! no static exports found */ /***/function(module,exports){function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}module.exports=_arrayWithHoles;/***/},/***/"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/ /*! no static exports found */ /***/function(module,exports){function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}module.exports=_arrayWithoutHoles;/***/},/***/"./node_modules/@babel/runtime/helpers/assertThisInitialized.js":/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/ /*! no static exports found */ /***/function(module,exports){function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}module.exports=_assertThisInitialized;/***/},/***/"./node_modules/@babel/runtime/helpers/asyncToGenerator.js":/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/ /*! no static exports found */ /***/function(module,exports){function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}module.exports=_asyncToGenerator;/***/},/***/"./node_modules/@babel/runtime/helpers/classCallCheck.js":/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/ /*! no static exports found */ /***/function(module,exports){function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;/***/},/***/"./node_modules/@babel/runtime/helpers/construct.js":/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf */"./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function _construct(Parent,args,Class){if(isNativeReflectConstruct()){module.exports=_construct=Reflect.construct;}else{module.exports=_construct=function _construct(Parent,args,Class){var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor();if(Class)setPrototypeOf(instance,Class.prototype);return instance;};}return _construct.apply(null,arguments);}module.exports=_construct;/***/},/***/"./node_modules/@babel/runtime/helpers/createClass.js":/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/ /*! no static exports found */ /***/function(module,exports){function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;/***/},/***/"./node_modules/@babel/runtime/helpers/defineProperty.js":/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/ /*! no static exports found */ /***/function(module,exports){function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=_defineProperty;/***/},/***/"./node_modules/@babel/runtime/helpers/get.js":/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var getPrototypeOf=__webpack_require__(/*! ./getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");var superPropBase=__webpack_require__(/*! ./superPropBase */"./node_modules/@babel/runtime/helpers/superPropBase.js");function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){module.exports=_get=Reflect.get;}else{module.exports=_get=function _get(target,property,receiver){var base=superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver);}return desc.value;};}return _get(target,property,receiver||target);}module.exports=_get;/***/},/***/"./node_modules/@babel/runtime/helpers/getPrototypeOf.js":/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/ /*! no static exports found */ /***/function(module,exports){function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}module.exports=_getPrototypeOf;/***/},/***/"./node_modules/@babel/runtime/helpers/inherits.js":/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf */"./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}module.exports=_inherits;/***/},/***/"./node_modules/@babel/runtime/helpers/iterableToArray.js":/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/ /*! no static exports found */ /***/function(module,exports){function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}module.exports=_iterableToArray;/***/},/***/"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/ /*! no static exports found */ /***/function(module,exports){function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}module.exports=_iterableToArrayLimit;/***/},/***/"./node_modules/@babel/runtime/helpers/nonIterableRest.js":/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/ /*! no static exports found */ /***/function(module,exports){function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}module.exports=_nonIterableRest;/***/},/***/"./node_modules/@babel/runtime/helpers/nonIterableSpread.js":/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/ /*! no static exports found */ /***/function(module,exports){function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}module.exports=_nonIterableSpread;/***/},/***/"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var _typeof=__webpack_require__(/*! ../helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");var assertThisInitialized=__webpack_require__(/*! ./assertThisInitialized */"./node_modules/@babel/runtime/helpers/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}module.exports=_possibleConstructorReturn;/***/},/***/"./node_modules/@babel/runtime/helpers/setPrototypeOf.js":/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/ /*! no static exports found */ /***/function(module,exports){function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;/***/},/***/"./node_modules/@babel/runtime/helpers/slicedToArray.js":/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var arrayWithHoles=__webpack_require__(/*! ./arrayWithHoles */"./node_modules/@babel/runtime/helpers/arrayWithHoles.js");var iterableToArrayLimit=__webpack_require__(/*! ./iterableToArrayLimit */"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var nonIterableRest=__webpack_require__(/*! ./nonIterableRest */"./node_modules/@babel/runtime/helpers/nonIterableRest.js");function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||nonIterableRest();}module.exports=_slicedToArray;/***/},/***/"./node_modules/@babel/runtime/helpers/superPropBase.js":/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var getPrototypeOf=__webpack_require__(/*! ./getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=getPrototypeOf(object);if(object===null)break;}return object;}module.exports=_superPropBase;/***/},/***/"./node_modules/@babel/runtime/helpers/toConsumableArray.js":/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var arrayWithoutHoles=__webpack_require__(/*! ./arrayWithoutHoles */"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");var iterableToArray=__webpack_require__(/*! ./iterableToArray */"./node_modules/@babel/runtime/helpers/iterableToArray.js");var nonIterableSpread=__webpack_require__(/*! ./nonIterableSpread */"./node_modules/@babel/runtime/helpers/nonIterableSpread.js");function _toConsumableArray(arr){return arrayWithoutHoles(arr)||iterableToArray(arr)||nonIterableSpread();}module.exports=_toConsumableArray;/***/},/***/"./node_modules/@babel/runtime/helpers/typeof.js":/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/ /*! no static exports found */ /***/function(module,exports){function _typeof2(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof2=function _typeof2(obj){return typeof obj;};}else{_typeof2=function _typeof2(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof2(obj);}function _typeof(obj){if(typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"){module.exports=_typeof=function _typeof(obj){return _typeof2(obj);};}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":_typeof2(obj);};}return _typeof(obj);}module.exports=_typeof;/***/},/***/"./node_modules/@babel/runtime/regenerator/index.js":/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime-module.js");/***/},/***/"./node_modules/@osjs/common/dist/main.js":/*!************************************************!*\
  !*** ./node_modules/@osjs/common/dist/main.js ***!
  \************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){!function(t,e){for(var n in e)t[n]=e[n];}(exports,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e];}.bind(null,o));return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=14);}([function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t);},n(e);}t.exports=n;},function(t,e,n){global,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e];}.bind(null,o));return r;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=2);}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");};},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t;};},function(t,e,n){t.exports=n(3);},function(t,e,n){"use strict";n.r(e),n.d(e,"EventEmitter",function(){return c;});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),a=function(t){return t instanceof Array?t:String(t).replace(/\s+/g,"").split(",");},c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined";o()(this,t),this.name=e,this.events={};}return u()(t,[{key:"destroy",value:function(){this.events={};}},{key:"on",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r=r||{},"function"!=typeof e)throw new TypeError("Invalid callback");return a(t).forEach(function(t){n.events[t]||(n.events[t]=[]),n.events[t].push({callback:e,options:r});}),this;}},{key:"once",value:function(t,e){return this.on(t,e,{once:!0});}},{key:"off",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a(t).filter(function(t){return!!e.events[t];}).forEach(function(t){if(n)for(var o=e.events[t].length;o--;){var i=e.events[t][o];(!i.options.persist||r)&&i.callback===n&&e.events[t].splice(o,1);}else e.events[t]=r?[]:e.events[t].filter(function(t){return!0!==t.options.persist;});}),this;}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return a(t).forEach(function(t){if(e.events[t])for(var n=e.events[t].length;n--;){var o=e.events[t][n],i=o.options,u=o.callback;try{u.apply(void 0,r);}catch(t){console.warn(t);}i&&i.once&&e.events[t].splice(n,1);}}),this;}}]),t;}();}]);},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function");};},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r);}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t;};},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t;};},function(t,e,n){var r=n(18),o=n(19),i=n(20);t.exports=function(t){return r(t)||o(t)||i();};},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n]);}(n(21));},function(t,e,n){t.exports=n(30);},function(t,e,n){"use strict";/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */t.exports=function(t){return null!=t&&"object"==typeof t&&!1===Array.isArray(t);};},function(t,e,n){var r=n(15),o=n(4);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e;};},function(t,e,n){n(0);var r=n(16);function o(e,n,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,n){var o=r(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value;}},o(e,n,i||e);}t.exports=o;},function(t,e,n){var r=n(17);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e);};},function(t,e,n){"use strict";var r=n(23),o=n(24);t.exports=function t(e,n){if(void 0===e)return{};if(Array.isArray(e)){for(var i=0;i<e.length;i++)e[i]=t(e[i],n);return e;}if(!r(e))return e;if("string"==typeof n&&(n=[n]),!Array.isArray(n))return e;for(var u=0;u<n.length;u++)o(e,n[u]);for(var a in e)e.hasOwnProperty(a)&&(e[a]=t(e[a],n));return e;};},function(t,e){function n(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value;}catch(t){return void n(t);}a.done?e(c):Promise.resolve(c).then(r,o);}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var u=t.apply(e,r);function a(t){n(u,o,i,a,c,"next",t);}function c(t){n(u,o,i,a,c,"throw",t);}a(void 0);});};};},function(t,e,n){t.exports=n(32);},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;})(t);}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t);}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t);},r(e);}t.exports=r;},function(t,e,n){var r=n(0);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t;};},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t;},n(e,r);}t.exports=n;},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n;}};},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t);};},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance");};},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(22),o=function(){function t(){this.nodes={},this.outgoingEdges={},this.incomingEdges={};}return t.prototype.addNode=function(t){if(this.hasNode(t.name))throw new Error('A node with the name of "'+t.name+'" already exists in the graph!');this.nodes[t.name]=t,this.outgoingEdges[t.name]=[],this.incomingEdges[t.name]=[];},t.prototype.removeNode=function(t){if(!this.hasNode(t))throw new Error('A node with the name of "'+t+'" does not exist in the graph!');for(var e in delete this.nodes[t],delete this.outgoingEdges[t],delete this.incomingEdges[t],this.incomingEdges)this.incomingEdges[e].includes(t)&&this.incomingEdges[e].splice(e.indexOf(t),1);for(var n in this.outgoingEdges)this.outgoingEdges[n].includes(t)&&this.outgoingEdges[n].splice(n.indexOf(t),1);},t.prototype.hasNode=function(t){return this.nodes.hasOwnProperty(t);},Object.defineProperty(t.prototype,"size",{get:function(){return Object.keys(this.nodes).length;},enumerable:!0,configurable:!0}),t.prototype.getNode=function(t){if(this.hasNode(t))return this.nodes[t];throw new Error('Node "'+t+'" not found!');},t.prototype.addDependency=function(t,e){if(!this.hasNode(t))throw new Error("Node does not exist: "+t);if(!this.hasNode(e))throw new Error("Node does not exist: "+e);if(t===e)throw new Error("Cannot add self dependency: "+e);this.outgoingEdges[t].includes(e)||this.outgoingEdges[t].push(e),this.incomingEdges[e].includes(t)||this.incomingEdges[e].push(t);},t.prototype.removeDependency=function(t,e){if(console.warn("removeDependency() has not been tested."),!this.hasNode(t))throw new Error("Node does not exist: "+t);if(!this.hasNode(e))throw new Error("Node does not exist: "+e);if(t===e)throw new Error("Cannot remove self dependency: "+e);this.outgoingEdges[t].includes(e)||this.outgoingEdges[t].splice(this.outgoingEdges[t].indexOf(e),1),this.incomingEdges[e].includes(t)||this.incomingEdges[e].splice(this.incomingEdges[e].indexOf(e),1);},t.prototype.dependenciesOf=function(t){return this.outgoingEdges[t];},t.prototype.dependentsOf=function(t){return this.incomingEdges[t];},t.prototype.traverse=function(){var t=this;Object.keys(this.nodes).map(function(e){return t.getNode(e).clearMutex();});var e=function(n){return Promise.all(t.dependenciesOf(n.name).map(function(e){return t.nodes[e].awaitData();})).then(function(){return n.signalDependenciesReady(),t.dependentsOf(n.name).length>0?Promise.all(t.dependentsOf(n.name).map(function(n){return e(t.getNode(n));})):n.awaitData();});},n=Object.keys(this.nodes).filter(function(e){return 0===t.dependenciesOf(e).length;});return 0===n.length&&Object.keys(this.nodes).length>0?Promise.reject(new Error("The graph is circular. Cannot traverse graph due to no root node.")):Promise.all(n.map(function(n){return e(t.nodes[n]);}));},t.prototype.clearNodeAndDependents=function(t){var e=this,n=this.getNode(t),r=function(t){return t.hasData()?(t.clearData(),Promise.all(e.dependentsOf(t.name).map(function(t){return r(e.getNode(t));}))):Promise.resolve();};return r(n);},t.prototype.reset=function(){for(var t in this.nodes)this.nodes[t].reset();},t.prototype.ls=function(){for(var t in this.nodes)console.log(t),console.log(this.dependentsOf(t));},t;}();e.Graph=o;var i=function(){function t(t,e){this.locked=!1,this._name=t,this._promise=e;}return Object.defineProperty(t.prototype,"name",{get:function(){return this._name;},enumerable:!0,configurable:!0}),t.prototype.awaitData=function(){var t=this;return this.mutex||(this.mutex=new r.Mutex(function(){return void 0!==t._data;})),new Promise(function(e,n){t.mutex.await(function(r){if(r)return n(r);e(t._data);});});},t.prototype.signalDependenciesReady=function(){var t=this;if(this.mutex||(this.mutex=new r.Mutex(function(){return void 0!==t._data;})),void 0===this._data){if(!0===this.locked)return;this.locked=!0;var e=this._promise();if(void 0===e)throw new Error('Node "'+this._name+'" has undefined promise.');e.then(function(e){t._data=e,t.locked=!1,t.mutex.ready();}).catch(function(e){t._data=null,t.locked=!1,t.mutex.ready(e);});}else this.mutex.ready();},t.prototype.setData=function(t){this._data=t,this.signalDependenciesReady();},t.prototype.reset=function(){this.clearData(),this.clearMutex();},t.prototype.clearMutex=function(){this.hasData()&&(this.mutex=void 0);},t.prototype.hasData=function(){return void 0!==this._data;},t.prototype.clearData=function(){this._data=void 0;},t;}();e.Node=i;},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.readyTest=t;}return t.prototype.await=function(t){!0===this.readyTest()?t():(this.waiting=this.waiting||[],this.waiting.push(t));},t.prototype.ready=function(t){this.waiting&&this.waiting.forEach(function(e){return e(t);}),delete this.waiting;},t;}();e.Mutex=r;},function(t,e,n){"use strict";/*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */var r=n(8);function o(t){return!0===r(t)&&"[object Object]"===Object.prototype.toString.call(t);}t.exports=function(t){var e,n;return!1!==o(t)&&"function"==typeof(e=t.constructor)&&!1!==o(n=e.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf");};},function(t,e,n){"use strict";/*!
   * unset-value <https://github.com/jonschlinkert/unset-value>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   */var r=n(8),o=n(25);t.exports=function(t,e){if(!r(t))throw new TypeError("expected an object.");if(t.hasOwnProperty(e))return delete t[e],!0;if(o(t,e)){for(var n=e.split("."),i=n.pop();n.length&&"\\"===n[n.length-1].slice(-1);)i=n.pop().slice(0,-1)+"."+i;for(;n.length;)t=t[e=n.shift()];return delete t[i];}return!0;};},function(t,e,n){"use strict";/*!
   * has-value <https://github.com/jonschlinkert/has-value>
   *
   * Copyright (c) 2014-2016, Jon Schlinkert.
   * Licensed under the MIT License.
   */var r=n(26),o=n(28),i=n(29);t.exports=function(t,e,n){return r(t)?o(i(t,e),n):o(t,e);};},function(t,e,n){"use strict";/*!
   * isobject <https://github.com/jonschlinkert/isobject>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */var r=n(27);t.exports=function(t){return null!=t&&"object"==typeof t&&!1===r(t);};},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t);};},function(t,e,n){"use strict";/*!
   * has-values <https://github.com/jonschlinkert/has-values>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */t.exports=function(t,e){if(null==t)return!1;if("boolean"==typeof t)return!0;if("number"==typeof t)return 0!==t||!0!==e;if(void 0!==t.length)return 0!==t.length;for(var n in t)if(t.hasOwnProperty(n))return!0;return!1;};},function(t,e){function n(t){return t?Array.isArray(t)?t.join("."):t:"";}/*!
   * get-value <https://github.com/jonschlinkert/get-value>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   */t.exports=function(t,e,r,o,i){if(null===(u=t)||"object"!=typeof u&&"function"!=typeof u||!e)return t;var u;if(e=n(e),r&&(e+="."+n(r)),o&&(e+="."+n(o)),i&&(e+="."+n(i)),e in t)return t[e];for(var a=e.split("."),c=a.length,s=-1;t&&++s<c;){for(var f=a[s];"\\"===f[f.length-1];)f=f.slice(0,-1)+"."+a[++s];t=t[f];}return t;};},function(t,e,n){var r=function(){return this||"object"==typeof self&&self;}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(31),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime;}catch(t){r.regeneratorRuntime=void 0;}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=w;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",y={},v={};v[u]=function(){return this;};var g=Object.getPrototypeOf,m=g&&g(g(L([])));m&&m!==r&&o.call(m,u)&&(v=m);var b=j.prototype=O.prototype=Object.create(v);E.prototype=b.constructor=j,j.constructor=E,j[c]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name));},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t;},f.awrap=function(t){return{__await:t};},P(_.prototype),_.prototype[a]=function(){return this;},f.AsyncIterator=_,f.async=function(t,e,n,r){var o=new _(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next();});},P(b),b[c]="Generator",b[u]=function(){return this;},b.toString=function(){return"[object Generator]";},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n;}return n.done=!0,n;};},f.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n);},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval;},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o;}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var c=o.call(u,"catchLoc"),s=o.call(u,"finallyLoc");if(c&&s){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc);}else if(c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc);}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break;}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(u);},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y;},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),y;}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n);}return o;}}throw new Error("illegal catch attempt");},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y;}};}function w(t,e,n,r){var o=e&&e.prototype instanceof O?e:O,i=Object.create(o.prototype),u=new N(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return M();}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var a=k(u,n);if(a){if(a===y)continue;return a;}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg);}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?d:p,c.arg===y)continue;return{value:c.arg,done:n.done};}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg);}};}(t,n,u),i;}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)};}catch(t){return{type:"throw",arg:t};}}function O(){}function E(){}function j(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t);};});}function _(t){var e;this._invoke=function(n,r){function i(){return new Promise(function(e,i){!function e(n,r,i,u){var a=x(t[n],t,r);if("throw"!==a.type){var c=a.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,u);},function(t){e("throw",t,i,u);}):Promise.resolve(s).then(function(t){c.value=t,i(c);},function(t){return e("throw",t,i,u);});}u(a.arg);}(n,r,e,i);});}return e=e?e.then(i,i):i();};}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");}return y;}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y);}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0);}function L(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e;};return i.next=i;}}return{next:M};}function M(){return{value:n,done:!0};}}(function(){return this||"object"==typeof self&&self;}()||Function("return this")());},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(3),u=n.n(i),a=n(9),c=n.n(a),s=n(0),f=n.n(s),l=n(10),p=n.n(l),h=n(11),d=n.n(h),y=n(4),v=n.n(y),g=n(5),m=n.n(g),b=n(6),w=function(t){var e={},n=[],r=[],o=function(t,e){var n=new b.Graph(),r=t.map(function(t){return"function"==typeof t.provider.provides?t.provider.provides():[];});return t.forEach(function(t,r){n.addNode(new b.Node(String(r),function(){try{return Promise.resolve(t.provider[e]());}catch(t){return Promise.reject(t);}}));}),t.forEach(function(t,e){var o,i=t.options.depends instanceof Array?t.options.depends:[],u="function"==typeof t.provider.depends?t.provider.depends():[],a=[].concat(m()(i),m()(u));if(a.length>0){var c=(o=a,r.findIndex(function(t){return t.some(function(t){return-1!==o.indexOf(t);});}));-1!==c&&n.addDependency(String(e),String(c));}}),n.traverse().catch(function(t){return console.warn(t);});};return{register:function(e,r){try{n.push({provider:new e(t,r.args),options:r});}catch(t){console.error("Provider register error",t);}},init:function(t){return e=t?n.filter(function(t){return t.options.before;}):n.filter(function(t){return!t.options.before;}),o(e,"init").then(function(){return o(e,"start");});var e;},bind:function(e,n,o){t.logger.info("Provider binding",e),r.push({singleton:n,name:e,make:function(){return o.apply(void 0,arguments);}});},has:function(t){return-1!==r.findIndex(function(e){return e.name===t;});},make:function(t){var n=r.find(function(e){return e.name===t;});if(!n)throw new Error("Provider '".concat(t,"' not found"));for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];return n.singleton?(e[t]||n&&(e[t]=n.make.apply(n,i)),e[t]):n.make.apply(n,i);},destroy:function(){var t,o;t=n,o="destroy",Promise.all(t.map(function(t){try{return t.provider[o]();}catch(t){return Promise.reject(t);}})).catch(function(t){return console.warn(t);}),e={},r=[];}};},x=n(1),O=function(t){return function(t){return!!t&&"object"==typeof t;}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===E;}(t);}(t);};var E="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function j(t,e){return!1!==e.clone&&e.isMergeableObject(t)?_((n=t,Array.isArray(n)?[]:{}),t,e):t;var n;}function P(t,e,n){return t.concat(e).map(function(t){return j(t,n);});}function _(t,e,n){(n=n||{}).arrayMerge=n.arrayMerge||P,n.isMergeableObject=n.isMergeableObject||O;var r=Array.isArray(e);return r===Array.isArray(t)?r?n.arrayMerge(t,e,n):function(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(e){r[e]=j(t[e],n);}),Object.keys(e).forEach(function(o){n.isMergeableObject(e[o])&&t[o]?r[o]=_(t[o],e[o],n):r[o]=j(e[o],n);}),r;}(t,e,n):j(e,n);}_.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(t,n){return _(t,n,e);},{});};var k=_,S=n(12),A=n.n(S),N=function(t){function e(t,n,r){var i;o()(this,e),i=c()(this,f()(e).call(this,"Core"));var u=k.default?k.default:k,a=A()(t,r.omit||[]);return i.logger=console,i.configuration=u(a,n),i.options=r,i.booted=!1,i.started=!1,i.destroyed=!1,i.providers=w(v()(v()(i))),i;}return d()(e,t),u()(e,[{key:"destroy",value:function(){return!this.destroyed&&(this.booted=!1,this.destroyed=!0,this.started=!1,this.providers.destroy(),p()(f()(e.prototype),"destroy",this).call(this),!0);}},{key:"boot",value:function(){return this.booted?Promise.resolve(!0):(this.started=!1,this.destroyed=!1,this.booted=!0,this.providers.init(!0).then(function(){return!0;}));}},{key:"start",value:function(){return this.started?Promise.resolve(!0):(this.started=!0,this.providers.init(!1).then(function(){return!0;}));}},{key:"config",value:function(t,e){return t?function(t,e,n){var r;try{r=e.split(/\./g).reduce(function(t,e){return t[e];},Object.assign({},t));}catch(t){}return void 0===r?n:r;}(this.configuration,t,e):Object.assign({},this.configuration);}},{key:"register",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.providers.register(t,e);}},{key:"instance",value:function(t,e){this.providers.bind(t,!1,e);}},{key:"singleton",value:function(t,e){this.providers.bind(t,!0,e);}},{key:"make",value:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(e=this.providers).make.apply(e,[t].concat(r));}},{key:"has",value:function(t){return this.providers.has(t);}}]),e;}(x.EventEmitter),L=n(7),M=n.n(L),D=n(13),T=n.n(D),R=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o()(this,t),this.core=e,this.options=n;}return u()(t,[{key:"provides",value:function(){return[];}},{key:"depends",value:function(){return[];}},{key:"init",value:function(){var t=T()(M.a.mark(function t(){return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop();}},t,this);}));return function(){return t.apply(this,arguments);};}()},{key:"start",value:function(){}},{key:"destroy",value:function(){}}]),t;}();n.d(e,"CoreBase",function(){return N;}),n.d(e,"ServiceProvider",function(){return R;}),n.d(e,"EventEmitter",function(){return x.EventHandler;});}]));/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../../../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"));/***/},/***/"./node_modules/@osjs/event-emitter/dist/main.js":/*!*******************************************************!*\
  !*** ./node_modules/@osjs/event-emitter/dist/main.js ***!
  \*******************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){!function(e,t){true?module.exports=t():undefined;}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t];}.bind(null,o));return r;},n.n=function(e){var t=e&&e.__esModule?function(){return e.default;}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="",n(n.s=2);}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");};},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e;};},function(e,t,n){e.exports=n(3);},function(e,t,n){"use strict";n.r(t),n.d(t,"EventEmitter",function(){return c;});var r=n(0),o=n.n(r),i=n(1),u=n.n(i),f=function(e){return e instanceof Array?e:String(e).replace(/\s+/g,"").split(",");},c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined";o()(this,e),this.name=t,this.events={};}return u()(e,[{key:"destroy",value:function(){this.events={};}},{key:"on",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(r=r||{},"function"!=typeof t)throw new TypeError("Invalid callback");return f(e).forEach(function(e){n.events[e]||(n.events[e]=[]),n.events[e].push({callback:t,options:r});}),this;}},{key:"once",value:function(e,t){return this.on(e,t,{once:!0});}},{key:"off",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return f(e).filter(function(e){return!!t.events[e];}).forEach(function(e){if(n)for(var o=t.events[e].length;o--;){var i=t.events[e][o];(!i.options.persist||r)&&i.callback===n&&t.events[e].splice(o,1);}else t.events[e]=r?[]:t.events[e].filter(function(e){return!0===e.options.persist;});}),this;}},{key:"emit",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e).forEach(function(e){if(t.events[e])for(var n=t.events[e].length;n--;){var o=t.events[e][n],i=o.options,u=o.callback;try{u.apply(void 0,r);}catch(e){console.warn(e);}i&&i.once&&t.events[e].splice(n,1);}}),this;}}]),e;}();}]);});/* WEBPACK VAR INJECTION */}).call(this,__webpack_require__(/*! ./../../../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"));/***/},/***/"./node_modules/css-mediaquery/index.js":/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){"use strict";/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/exports.match=matchQuery;exports.parse=parseQuery;// -----------------------------------------------------------------------------
var RE_MEDIA_QUERY=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,RE_MQ_EXPRESSION=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,RE_MQ_FEATURE=/^(?:(min|max)-)?(.+)/,RE_LENGTH_UNIT=/(em|rem|px|cm|mm|in|pt|pc)?$/,RE_RESOLUTION_UNIT=/(dpi|dpcm|dppx)?$/;function matchQuery(mediaQuery,values){return parseQuery(mediaQuery).some(function(query){var inverse=query.inverse;// Either the parsed or specified `type` is "all", or the types must be
// equal for a match.
var typeMatch=query.type==='all'||values.type===query.type;// Quit early when `type` doesn't match, but take "not" into account.
if(typeMatch&&inverse||!(typeMatch||inverse)){return false;}var expressionsMatch=query.expressions.every(function(expression){var feature=expression.feature,modifier=expression.modifier,expValue=expression.value,value=values[feature];// Missing or falsy values don't match.
if(!value){return false;}switch(feature){case'orientation':case'scan':return value.toLowerCase()===expValue.toLowerCase();case'width':case'height':case'device-width':case'device-height':expValue=toPx(expValue);value=toPx(value);break;case'resolution':expValue=toDpi(expValue);value=toDpi(value);break;case'aspect-ratio':case'device-aspect-ratio':case/* Deprecated */'device-pixel-ratio':expValue=toDecimal(expValue);value=toDecimal(value);break;case'grid':case'color':case'color-index':case'monochrome':expValue=parseInt(expValue,10)||1;value=parseInt(value,10)||0;break;}switch(modifier){case'min':return value>=expValue;case'max':return value<=expValue;default:return value===expValue;}});return expressionsMatch&&!inverse||!expressionsMatch&&inverse;});}function parseQuery(mediaQuery){return mediaQuery.split(',').map(function(query){query=query.trim();var captures=query.match(RE_MEDIA_QUERY),modifier=captures[1],type=captures[2],expressions=captures[3]||'',parsed={};parsed.inverse=!!modifier&&modifier.toLowerCase()==='not';parsed.type=type?type.toLowerCase():'all';// Split expressions into a list.
expressions=expressions.match(/\([^\)]+\)/g)||[];parsed.expressions=expressions.map(function(expression){var captures=expression.match(RE_MQ_EXPRESSION),feature=captures[1].toLowerCase().match(RE_MQ_FEATURE);return{modifier:feature[1],feature:feature[2],value:captures[2]};});return parsed;});}// -- Utilities ----------------------------------------------------------------
function toDecimal(ratio){var decimal=Number(ratio),numbers;if(!decimal){numbers=ratio.match(/^(\d+)\s*\/\s*(\d+)$/);decimal=numbers[1]/numbers[2];}return decimal;}function toDpi(resolution){var value=parseFloat(resolution),units=String(resolution).match(RE_RESOLUTION_UNIT)[1];switch(units){case'dpcm':return value/2.54;case'dppx':return value*96;default:return value;}}function toPx(length){var value=parseFloat(length),units=String(length).match(RE_LENGTH_UNIT)[1];switch(units){case'em':return value*16;case'rem':return value*16;case'cm':return value*96/2.54;case'mm':return value*96/2.54/10;case'in':return value*96;case'pt':return value*72;case'pc':return value*72/12;default:return value;}}/***/},/***/"./node_modules/dateformat/lib/dateformat.js":/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */(function(global){'use strict';var dateFormat=function(){var token=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;var timezone=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;var timezoneClip=/[^-+\dA-Z]/g;// Regexes and supporting functions are cached through closure
return function(date,mask,utc,gmt){// You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
if(arguments.length===1&&kindOf(date)==='string'&&!/\d/.test(date)){mask=date;date=undefined;}date=date||new Date();if(!(date instanceof Date)){date=new Date(date);}if(isNaN(date)){throw TypeError('Invalid date');}mask=String(dateFormat.masks[mask]||mask||dateFormat.masks['default']);// Allow setting the utc/gmt argument via the mask
var maskSlice=mask.slice(0,4);if(maskSlice==='UTC:'||maskSlice==='GMT:'){mask=mask.slice(4);utc=true;if(maskSlice==='GMT:'){gmt=true;}}var _=utc?'getUTC':'get';var d=date[_+'Date']();var D=date[_+'Day']();var m=date[_+'Month']();var y=date[_+'FullYear']();var H=date[_+'Hours']();var M=date[_+'Minutes']();var s=date[_+'Seconds']();var L=date[_+'Milliseconds']();var o=utc?0:date.getTimezoneOffset();var W=getWeek(date);var N=getDayOfWeek(date);var flags={d:d,dd:pad(d),ddd:dateFormat.i18n.dayNames[D],dddd:dateFormat.i18n.dayNames[D+7],m:m+1,mm:pad(m+1),mmm:dateFormat.i18n.monthNames[m],mmmm:dateFormat.i18n.monthNames[m+12],yy:String(y).slice(2),yyyy:y,h:H%12||12,hh:pad(H%12||12),H:H,HH:pad(H),M:M,MM:pad(M),s:s,ss:pad(s),l:pad(L,3),L:pad(Math.round(L/10)),t:H<12?dateFormat.i18n.timeNames[0]:dateFormat.i18n.timeNames[1],tt:H<12?dateFormat.i18n.timeNames[2]:dateFormat.i18n.timeNames[3],T:H<12?dateFormat.i18n.timeNames[4]:dateFormat.i18n.timeNames[5],TT:H<12?dateFormat.i18n.timeNames[6]:dateFormat.i18n.timeNames[7],Z:gmt?'GMT':utc?'UTC':(String(date).match(timezone)||['']).pop().replace(timezoneClip,''),o:(o>0?'-':'+')+pad(Math.floor(Math.abs(o)/60)*100+Math.abs(o)%60,4),S:['th','st','nd','rd'][d%10>3?0:(d%100-d%10!=10)*d%10],W:W,N:N};return mask.replace(token,function(match){if(match in flags){return flags[match];}return match.slice(1,match.length-1);});};}();dateFormat.masks={'default':'ddd mmm dd yyyy HH:MM:ss','shortDate':'m/d/yy','mediumDate':'mmm d, yyyy','longDate':'mmmm d, yyyy','fullDate':'dddd, mmmm d, yyyy','shortTime':'h:MM TT','mediumTime':'h:MM:ss TT','longTime':'h:MM:ss TT Z','isoDate':'yyyy-mm-dd','isoTime':'HH:MM:ss','isoDateTime':'yyyy-mm-dd\'T\'HH:MM:sso','isoUtcDateTime':'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'','expiresHeaderFormat':'ddd, dd mmm yyyy HH:MM:ss Z'};// Internationalization strings
dateFormat.i18n={dayNames:['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],monthNames:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','January','February','March','April','May','June','July','August','September','October','November','December'],timeNames:['a','p','am','pm','A','P','AM','PM']};function pad(val,len){val=String(val);len=len||2;while(val.length<len){val='0'+val;}return val;}/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */function getWeek(date){// Remove time components of date
var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());// Change date to Thursday same week
targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);// Take January 4th as it is always in week 1 (see ISO 8601)
var firstThursday=new Date(targetThursday.getFullYear(),0,4);// Change date to Thursday same week
firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);// Check if daylight-saving-time-switch occurred and correct for it
var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);// Number of weeks between target Thursday and first Thursday
var weekDiff=(targetThursday-firstThursday)/(86400000*7);return 1+Math.floor(weekDiff);}/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7;}return dow;}/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */function kindOf(val){if(val===null){return'null';}if(val===undefined){return'undefined';}if(typeof val!=='object'){return typeof val;}if(Array.isArray(val)){return'array';}return{}.toString.call(val).slice(8,-1).toLowerCase();};if(true){!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return dateFormat;}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{}})(this);/***/},/***/"./node_modules/deepmerge/dist/umd.js":/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){(function(global,factory){true?module.exports=factory():undefined;})(this,function(){'use strict';var isMergeableObject=function isMergeableObject(value){return isNonNullObject(value)&&!isSpecial(value);};function isNonNullObject(value){return!!value&&typeof value==='object';}function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return stringValue==='[object RegExp]'||stringValue==='[object Date]'||isReactElement(value);}// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=canUseSymbol?Symbol.for('react.element'):0xeac7;function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE;}function emptyTarget(val){return Array.isArray(val)?[]:{};}function cloneUnlessOtherwiseSpecified(value,options){return options.clone!==false&&options.isMergeableObject(value)?deepmerge(emptyTarget(value),value,options):value;}function defaultArrayMerge(target,source,options){return target.concat(source).map(function(element){return cloneUnlessOtherwiseSpecified(element,options);});}function getMergeFunction(key,options){if(!options.customMerge){return deepmerge;}var customMerge=options.customMerge(key);return typeof customMerge==='function'?customMerge:deepmerge;}function mergeObject(target,source,options){var destination={};if(options.isMergeableObject(target)){Object.keys(target).forEach(function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options);});}Object.keys(source).forEach(function(key){if(!options.isMergeableObject(source[key])||!target[key]){destination[key]=cloneUnlessOtherwiseSpecified(source[key],options);}else{destination[key]=getMergeFunction(key,options)(target[key],source[key],options);}});return destination;}function deepmerge(target,source,options){options=options||{};options.arrayMerge=options.arrayMerge||defaultArrayMerge;options.isMergeableObject=options.isMergeableObject||isMergeableObject;var sourceIsArray=Array.isArray(source);var targetIsArray=Array.isArray(target);var sourceAndTargetTypesMatch=sourceIsArray===targetIsArray;if(!sourceAndTargetTypesMatch){return cloneUnlessOtherwiseSpecified(source,options);}else if(sourceIsArray){return options.arrayMerge(target,source,options);}else{return mergeObject(target,source,options);}}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array)){throw new Error('first argument should be an array');}return array.reduce(function(prev,next){return deepmerge(prev,next,options);},{});};var deepmerge_1=deepmerge;return deepmerge_1;});/***/},/***/"./node_modules/hyperapp/src/index.js":/*!********************************************!*\
  !*** ./node_modules/hyperapp/src/index.js ***!
  \********************************************/ /*! exports provided: h, app */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"h",function(){return h;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"app",function(){return app;});function h(name,attributes){var rest=[];var children=[];var length=arguments.length;while(length-->2)rest.push(arguments[length]);while(rest.length){var node=rest.pop();if(node&&node.pop){for(length=node.length;length--;){rest.push(node[length]);}}else if(node!=null&&node!==true&&node!==false){children.push(node);}}return typeof name==="function"?name(attributes||{},children):{nodeName:name,attributes:attributes||{},children:children,key:attributes&&attributes.key};}function app(state,actions,view,container){var map=[].map;var rootElement=container&&container.children[0]||null;var oldNode=rootElement&&recycleElement(rootElement);var lifecycle=[];var skipRender;var isRecycling=true;var globalState=clone(state);var wiredActions=wireStateToActions([],globalState,clone(actions));scheduleRender();return wiredActions;function recycleElement(element){return{nodeName:element.nodeName.toLowerCase(),attributes:{},children:map.call(element.childNodes,function(element){return element.nodeType===3// Node.TEXT_NODE
?element.nodeValue:recycleElement(element);})};}function resolveNode(node){return typeof node==="function"?resolveNode(node(globalState,wiredActions)):node!=null?node:"";}function render(){skipRender=!skipRender;var node=resolveNode(view);if(container&&!skipRender){rootElement=patch(container,rootElement,oldNode,oldNode=node);}isRecycling=false;while(lifecycle.length)lifecycle.pop()();}function scheduleRender(){if(!skipRender){skipRender=true;setTimeout(render);}}function clone(target,source){var out={};for(var i in target)out[i]=target[i];for(var i in source)out[i]=source[i];return out;}function setPartialState(path,value,source){var target={};if(path.length){target[path[0]]=path.length>1?setPartialState(path.slice(1),value,source[path[0]]):value;return clone(source,target);}return value;}function getPartialState(path,source){var i=0;while(i<path.length){source=source[path[i++]];}return source;}function wireStateToActions(path,state,actions){for(var key in actions){typeof actions[key]==="function"?function(key,action){actions[key]=function(data){var result=action(data);if(typeof result==="function"){result=result(getPartialState(path,globalState),actions);}if(result&&result!==(state=getPartialState(path,globalState))&&!result.then// !isPromise
){scheduleRender(globalState=setPartialState(path,clone(state,result),globalState));}return result;};}(key,actions[key]):wireStateToActions(path.concat(key),state[key]=clone(state[key]),actions[key]=clone(actions[key]));}return actions;}function getKey(node){return node?node.key:null;}function eventListener(event){return event.currentTarget.events[event.type](event);}function updateAttribute(element,name,value,oldValue,isSvg){if(name==="key"){}else if(name==="style"){if(typeof value==="string"){element.style.cssText=value;}else{if(typeof oldValue==="string")oldValue=element.style.cssText="";for(var i in clone(oldValue,value)){var style=value==null||value[i]==null?"":value[i];if(i[0]==="-"){element.style.setProperty(i,style);}else{element.style[i]=style;}}}}else{if(name[0]==="o"&&name[1]==="n"){name=name.slice(2);if(element.events){if(!oldValue)oldValue=element.events[name];}else{element.events={};}element.events[name]=value;if(value){if(!oldValue){element.addEventListener(name,eventListener);}}else{element.removeEventListener(name,eventListener);}}else if(name in element&&name!=="list"&&name!=="type"&&name!=="draggable"&&name!=="spellcheck"&&name!=="translate"&&!isSvg){element[name]=value==null?"":value;}else if(value!=null&&value!==false){element.setAttribute(name,value);}if(value==null||value===false){element.removeAttribute(name);}}}function createElement(node,isSvg){var element=typeof node==="string"||typeof node==="number"?document.createTextNode(node):(isSvg=isSvg||node.nodeName==="svg")?document.createElementNS("http://www.w3.org/2000/svg",node.nodeName):document.createElement(node.nodeName);var attributes=node.attributes;if(attributes){if(attributes.oncreate){lifecycle.push(function(){attributes.oncreate(element);});}for(var i=0;i<node.children.length;i++){element.appendChild(createElement(node.children[i]=resolveNode(node.children[i]),isSvg));}for(var name in attributes){updateAttribute(element,name,attributes[name],null,isSvg);}}return element;}function updateElement(element,oldAttributes,attributes,isSvg){for(var name in clone(oldAttributes,attributes)){if(attributes[name]!==(name==="value"||name==="checked"?element[name]:oldAttributes[name])){updateAttribute(element,name,attributes[name],oldAttributes[name],isSvg);}}var cb=isRecycling?attributes.oncreate:attributes.onupdate;if(cb){lifecycle.push(function(){cb(element,oldAttributes);});}}function removeChildren(element,node){var attributes=node.attributes;if(attributes){for(var i=0;i<node.children.length;i++){removeChildren(element.childNodes[i],node.children[i]);}if(attributes.ondestroy){attributes.ondestroy(element);}}return element;}function removeElement(parent,element,node){function done(){parent.removeChild(removeChildren(element,node));}var cb=node.attributes&&node.attributes.onremove;if(cb){cb(element,done);}else{done();}}function patch(parent,element,oldNode,node,isSvg){if(node===oldNode){}else if(oldNode==null||oldNode.nodeName!==node.nodeName){var newElement=createElement(node,isSvg);parent.insertBefore(newElement,element);if(oldNode!=null){removeElement(parent,element,oldNode);}element=newElement;}else if(oldNode.nodeName==null){element.nodeValue=node;}else{updateElement(element,oldNode.attributes,node.attributes,isSvg=isSvg||node.nodeName==="svg");var oldKeyed={};var newKeyed={};var oldElements=[];var oldChildren=oldNode.children;var children=node.children;for(var i=0;i<oldChildren.length;i++){oldElements[i]=element.childNodes[i];var oldKey=getKey(oldChildren[i]);if(oldKey!=null){oldKeyed[oldKey]=[oldElements[i],oldChildren[i]];}}var i=0;var k=0;while(k<children.length){var oldKey=getKey(oldChildren[i]);var newKey=getKey(children[k]=resolveNode(children[k]));if(newKeyed[oldKey]){i++;continue;}if(newKey!=null&&newKey===getKey(oldChildren[i+1])){if(oldKey==null){removeElement(element,oldElements[i],oldChildren[i]);}i++;continue;}if(newKey==null||isRecycling){if(oldKey==null){patch(element,oldElements[i],oldChildren[i],children[k],isSvg);k++;}i++;}else{var keyedNode=oldKeyed[newKey]||[];if(oldKey===newKey){patch(element,keyedNode[0],keyedNode[1],children[k],isSvg);i++;}else if(keyedNode[0]){patch(element,element.insertBefore(keyedNode[0],oldElements[i]),keyedNode[1],children[k],isSvg);}else{patch(element,oldElements[i],null,children[k],isSvg);}newKeyed[newKey]=children[k];k++;}}while(i<oldChildren.length){if(getKey(oldChildren[i])==null){removeElement(element,oldElements[i],oldChildren[i]);}i++;}for(var i in oldKeyed){if(!newKeyed[i]){removeElement(element,oldKeyed[i][0],oldKeyed[i][1]);}}}return element;}}/***/},/***/"./node_modules/regenerator-runtime/runtime-module.js":/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g=function(){return this||typeof self==="object"&&self;}()||Function("return this")();// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0;// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime=hadRuntime&&g.regeneratorRuntime;// Force reevalutation of runtime.js.
g.regeneratorRuntime=undefined;module.exports=__webpack_require__(/*! ./runtime */"./node_modules/regenerator-runtime/runtime.js");if(hadRuntime){// Restore the original runtime.
g.regeneratorRuntime=oldRuntime;}else{// Remove the global property added by runtime.js.
try{delete g.regeneratorRuntime;}catch(e){g.regeneratorRuntime=undefined;}}/***/},/***/"./node_modules/regenerator-runtime/runtime.js":/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/ /*! no static exports found */ /***/function(module,exports){/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */!function(global){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;// More compressible than void 0.
var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
module.exports=runtime;}// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
return;}// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}runtime.wrap=wrap;// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";// Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.
var ContinueSentinel={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}genFun.prototype=Object.create(Gp);return genFun;};// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
runtime.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return Promise.resolve(value).then(function(unwrapped){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
result.value=unwrapped;resolve(result);},function(error){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return invoke("throw",error,resolve,reject);});}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
previousPromise?previousPromise.then(callInvokeWithMethodAndArg,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};runtime.AsyncIterator=AsyncIterator;// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter// If outerFn is a generator, return the full iterator.
:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
context.method="throw";context.arg=record.arg;}}};}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){// If the delegate iterator has a return method, give it a
// chance to clean up.
context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
context[delegate.resultName]=info.value;// Resume execution at the desired location (see delegateYield).
context.next=delegate.nextLoc;// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{// Re-yield the result returned by the delegate method.
return info;}// The delegate iterator is finished, so forget it and continue with
// the outer generator.
context.delegate=null;return ContinueSentinel;}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}// Return an iterator with no values.
return{next:doneResult};}runtime.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function(skipTempReset){this.prev=0;this.next=0;// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){// Not sure about the optimal order of these conditions:
if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt");},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
this.arg=undefined;}return ContinueSentinel;}};}(// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function(){return this||typeof self==="object"&&self;}()||Function("return this")());/***/},/***/"./node_modules/simplejsonconf/dist/main.js":/*!**************************************************!*\
  !*** ./node_modules/simplejsonconf/dist/main.js ***!
  \**************************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){!function(n,t){true?module.exports=t():undefined;}(window,function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports;}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e});},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0});},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t];}.bind(null,o));return e;},r.n=function(n){var t=n&&n.__esModule?function(){return n.default;}:function(){return n;};return r.d(t,"a",t),t;},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t);},r.p="",r(r.s=3);}([function(n,t){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n;}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n;})(n);}function e(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?n.exports=e=function(n){return r(n);}:n.exports=e=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":r(n);},e(t);}n.exports=e;},function(n,t,r){var e=r(5),o=r(6),u=r(7);n.exports=function(n,t){return e(n)||o(n,t)||u();};},function(n,t){n.exports=function(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n;};},function(n,t,r){n.exports=r(4);},function(n,t,r){"use strict";r.r(t);var e=r(1),o=r.n(e),u=r(2),i=r.n(u),f=r(0),c=r.n(f),a=function(n){return void 0===n?n:JSON.parse(JSON.stringify(n));},l=function(n){return n.split(/\./g);},s=function(n){return void 0===n||null===n;},p=function(n){return!!n&&"object"===c()(n)&&!Array.isArray(n);},y=function n(t,r){if(p(t)&&p(r)){for(var e in r)p(r[e])?(t[e]&&c()(t[e])===c()(r[e])||Object.assign(t,i()({},e,{})),n(t[e],r[e])):Object.assign(t,i()({},e,r[e]));return t;}return r;},b=function(n,t,r){if(s(t))return n;var e;try{e=l(t).reduce(function(n,t){return n[t];},Object.assign({},n));}catch(n){}return void 0===e?r:e;},d=function(n,t,r){var e=l(t),o=e.length;if(r)for(var u=n,i=0;i<o;i++){var f=e[i];void 0===u[f]&&(u[f]={}),u=u[f];}var c=1===o?e[0]:e.pop();return[1===o?n:b(n,e.join(".")),c];};t.default=function(n){var t,r=function(n){return t=a(n);};return r(n),{get:function(n,r){return a(b(t,n,r));},set:function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return a(function(n,t,r,e){if(!1!==e.parse)try{r=void 0===r?r:JSON.parse(r);}catch(n){}if(s(t)){var u=!1!==e.merge?y(n,r):r;return Object.assign(n,u);}var i=d(n,t,!0),f=o()(i,2),c=f[0],a=f[1];s(c[a])&&(c[a]={});var l=!1!==e.merge?y(c[a],r):r;return c[a]=l,l;}(t,n,r,e));},push:function(n,r){return a(function(n,t,r){var e=b(n,t);if(!Array.isArray(e))throw new Error("The key '".concat(t,"' is not an array"));return e.push(r),e;}(t,n,r));},remove:function(n){return a(function(n,t){var r=d(n,t),e=o()(r,2),u=e[0],i=e[1];return void 0!==u[i]&&(u instanceof Array?u.splice(u.indexOf(u[i]),1):delete u[i]),u;}(t,n));},reset:function(t){return a(r(t||n));},toString:function(){return JSON.stringify(t);}};};},function(n,t){n.exports=function(n){if(Array.isArray(n))return n;};},function(n,t){n.exports=function(n,t){var r=[],e=!0,o=!1,u=void 0;try{for(var i,f=n[Symbol.iterator]();!(e=(i=f.next()).done)&&(r.push(i.value),!t||r.length!==t);e=!0);}catch(n){o=!0,u=n;}finally{try{e||null==f.return||f.return();}finally{if(o)throw u;}}return r;};},function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance");};}]);});/***/},/***/"./node_modules/webpack/buildin/global.js":/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if(typeof window==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/***/"./src/adapters/auth/localstorage.js":/*!*******************************************!*\
  !*** ./src/adapters/auth/localstorage.js ***!
  \*******************************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var localStorageAuth=function localStorageAuth(core,options){return{login:function login(values){return Promise.resolve(values);}};};/* harmony default export */__webpack_exports__["default"]=localStorageAuth;/***/},/***/"./src/adapters/auth/server.js":/*!*************************************!*\
  !*** ./src/adapters/auth/server.js ***!
  \*************************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var serverAuth=function serverAuth(core,options){var request=function request(endpoint){var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return core.request(endpoint,{method:'POST',body:JSON.stringify(params)},'json');};return{login:function login(values){return request('/login',values);},logout:function logout(){return request('/logout');}};};/* harmony default export */__webpack_exports__["default"]=serverAuth;/***/},/***/"./src/adapters/vfs/apps.js":/*!**********************************!*\
  !*** ./src/adapters/vfs/apps.js ***!
  \**********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var adapter=function adapter(core){var pkgs=core.make('osjs/packages');return{readdir:function readdir(_ref,options){var path=_ref.path;return Promise.resolve(pkgs.getPackages()).then(function(pkgs){return pkgs.map(function(pkg){return{isDirectory:false,isFile:true,filename:pkg.name,mime:'osjs/application',path:"".concat(path.replace(/(\/+)?$/,'/')).concat(pkg.name),size:0,stat:{},icon:pkg.icon?core.url(pkg.icon,{},pkg):null};});});}};};/* harmony default export */__webpack_exports__["default"]=adapter;/***/},/***/"./src/adapters/vfs/null.js":/*!**********************************!*\
  !*** ./src/adapters/vfs/null.js ***!
  \**********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var nullAdapter={readdir:function readdir(path,options){return Promise.resolve([]);},readfile:function readfile(path,type,options){return Promise.resolve({body:new ArrayBuffer(),mime:'application/octet-stream'});},writefile:function writefile(path,data,options){return Promise.resolve(-1);},copy:function copy(from,to,options){return Promise.resolve(false);},rename:function rename(from,to,options){return Promise.resolve(false);},mkdir:function mkdir(path,options){return Promise.resolve(false);},unlink:function unlink(path,options){return Promise.resolve(false);},exists:function exists(path,options){return Promise.resolve(false);},stat:function stat(path,options){return Promise.resolve({});},url:function url(path,options){return Promise.resolve(null);},mount:function mount(options){return Promise.resolve(true);},unmount:function unmount(options){return Promise.resolve(true);},search:function search(root,pattern,options){return Promise.resolve([]);},touch:function touch(path,options){return Promise.resolve(false);}};/* harmony default export */__webpack_exports__["default"]=nullAdapter;/***/},/***/"./src/adapters/vfs/system.js":/*!************************************!*\
  !*** ./src/adapters/vfs/system.js ***!
  \************************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var getters=['exists','stat','readdir','readfile'];var requester=function requester(core){return function(fn,body,type){return core.request("/vfs/".concat(fn),{body:body,method:getters.indexOf(fn)!==-1?'get':'post'},type).then(function(response){if(type==='json'){return{mime:'application/json',body:response};}var contentType=response.headers.get('content-type')||'application/octet-stream';return response.arrayBuffer().then(function(result){return{mime:contentType,body:result};});});};};var methods=function methods(core,request){var passthrough=function passthrough(name){return function(_ref,options){var path=_ref.path;return request(name,{path:path,options:options},'json').then(function(_ref2){var body=_ref2.body;return body;});};};return{readdir:function readdir(_ref3,options){var path=_ref3.path;return request('readdir',{path:path,options:{}},'json').then(function(_ref4){var body=_ref4.body;return body;});},readfile:function readfile(_ref5,type,options){var path=_ref5.path;return request('readfile',{path:path,options:options});},writefile:function writefile(_ref6,data,options){var path=_ref6.path;var formData=new FormData();formData.append('upload',data);formData.append('path',path);formData.append('options',options);return request('writefile',formData).then(function(_ref7){var body=_ref7.body;return body;});},copy:function copy(from,to,options){return request('copy',{from:from.path,to:to.path,options:options},'json').then(function(_ref8){var body=_ref8.body;return body;});},rename:function rename(from,to,options){return request('rename',{from:from.path,to:to.path,options:options},'json').then(function(_ref9){var body=_ref9.body;return body;});},mkdir:passthrough('mkdir'),unlink:passthrough('unlink'),exists:passthrough('exists'),stat:passthrough('stat'),url:function url(_ref10,options){var path=_ref10.path;return Promise.resolve(core.url("/vfs/readfile?path=".concat(encodeURIComponent(path))));},search:function search(_ref11,pattern,options){var path=_ref11.path;return request('search',{root:path,pattern:pattern,options:options},'json').then(function(_ref12){var body=_ref12.body;return body;});},touch:function touch(_ref13,options){var path=_ref13.path;return request('touch',{path:path,options:options},'json').then(function(_ref14){var body=_ref14.body;return body;});},download:function download(_ref15){var path=_ref15.path;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var json=encodeURIComponent(JSON.stringify({download:true}));return Promise.resolve("/vfs/readfile?options=".concat(json,"&path=")+encodeURIComponent(path)).then(function(url){return(options.target||window).open(url);});}};};var adapter=function adapter(core){var request=requester(core);return methods(core,request);};/* harmony default export */__webpack_exports__["default"]=adapter;/***/},/***/"./src/application.js":/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Application;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */"./node_modules/@babel/runtime/helpers/assertThisInitialized.js");/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _websocket__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./websocket */"./src/websocket.js");/* harmony import */var _window__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ./window */"./src/window.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var applications=[];var applicationCount=0;var getSettingsKey=function getSettingsKey(metadata){return'osjs/application/'+metadata.name;};/**
 * Application
 *
 * @desc Base class for an Application
 */var Application=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Application,_EventEmitter);/**
   * Create application
   *
   * @param {Core} core Core reference
   * @param {Object} data Application data
   * @param {Map<String, *>} data.args Launch arguments
   * @param {Object} [data.options] Options
   * @param {Object} [data.options.settings] Initial settings
   * @param {Object} [data.options.restore] Restore data
   * @param {Boolean} [data.options.windowAutoFocus=true] Auto-focus first created window
   * @param {Boolean} [data.options.sessionable=true] Allow session storage
   * @param {PackageMetadata} [data.metadata] Package Metadata
   */function Application(core,data){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Application);data=Object.assign({},{args:{},options:{},metadata:{}},data);console.debug('Application::constructor()',data);var defaultSettings=data.options.settings?Object.assign({},data.options.settings):{};var name=data.metadata&&data.metadata.name?'Application@'+data.metadata.name:'Application'+String(applicationCount);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Application).call(this,name));/**
     * The Application ID
     * @type {Number}
     */_this.pid=applicationCount;/**
     * Core instance reference
     * @type {Core}
     */_this.core=core;/**
     * Application arguments
     * @type {Map<String, *>}
     */_this.args=data.args;/**
     * Application options
     * @type {Object}
     */_this.options=Object.assign({sessionable:true,windowAutoFocus:true},data.options);/**
     * Application metadata
     * @type {PackageMetadata}
     */_this.metadata=data.metadata;/**
     * Window list
     * @type {Window[]}
     */_this.windows=[];/**
     * Worker instances
     * @type {Worker[]}
     */_this.workers=[];/**
     * Options for internal fetch/requests
     * @type {Object}
     */_this.requestOptions={};/**
     * The application destruction state
     * @type {Boolean}
     */_this.destroyed=false;/**
     * Application settings
     * @type {Object}
     */_this.settings=core.make('osjs/settings').get(getSettingsKey(_this.metadata),null,defaultSettings);/**
     * Application started time
     * @type {Date}
     */_this.started=new Date();/**
     * Application WebSockets
     * @type {Websocket[]}
     */_this.sockets=[];applications.push(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));applicationCount++;_this.core.emit('osjs/application:create',_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));return _this;}/**
   * Destroy application
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Application,[{key:"destroy",value:function destroy(){var _this2=this;var remove=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(this.destroyed){return;}this.destroyed=true;this.emit('destroy');this.core.emit('osjs/application:destroy',this);var destroy=function destroy(list,fn){try{list.forEach(fn);}catch(e){console.warn('Exception on application destruction',e);}return[];};this.windows=destroy(this.windows,function(window){return window.destroy();});this.sockets=destroy(this.sockets,function(ws){return ws.close();});this.workers=destroy(this.workers,function(worker){return worker.terminate();});if(remove){var foundIndex=applications.findIndex(function(a){return a===_this2;});if(foundIndex!==-1){applications.splice(foundIndex,1);}}}/**
     * Re-launch this application
     */},{key:"relaunch",value:function relaunch(){var _this3=this;var windows=this.windows.map(function(w){return w.getSession();});this.destroy();setTimeout(function(){_this3.core.run(_this3.metadata.name,Object.assign({},_this3.args),Object.assign({},_this3.options,{forcePreload:_this3.core.config('development'),restore:{windows:windows}}));},1);}/**
     * Gets a URI to a resource for this application
     *
     * @desc If given path is an URI it will just return itself.
     *
     * @param {String} path The path
     * @param {Object} [options] Options for url() in core
     * @return {String} A complete URI
     */},{key:"resource",value:function resource(){var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'/';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return this.core.url(path,options,this.metadata);}/**
     * Performs a request to the OS.js server with the application
     * as the endpoint.
     * @param {String} [path=/] Append this to endpoint
     * @param {Options} [options] fetch options
     * @param {String} [type='json'] Request / Response type
     * @return {Promise<*, Error>} ArrayBuffer or JSON
     */},{key:"request",value:function request(){var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'/';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'json';var uri=this.resource(path);return this.core.request(uri,options,type);}/**
     * Creates a new Websocket
     * @param {String} [path=/socket] Append this to endpoint
     * @param {Object} [options] Connection options
     * @return {Websocket}
     */},{key:"socket",value:function socket(){var path=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'/socket';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};options=Object.assign({},{socket:{}},options);var uri=this.resource(path,{type:'websocket'});var ws=new _websocket__WEBPACK_IMPORTED_MODULE_7__["default"](this.metadata.name,uri,options.socket);this.sockets.push(ws);return ws;}/**
     * Sends a message over websocket via the core connection.
     * @desc This does not create a new connection, but rather uses the core connection.
     * For subscribing to messages from the server use the 'ws:message' event
     */},{key:"send",value:function send(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}this.core.ws.send(JSON.stringify({name:'osjs/application:socket:message',params:[{pid:this.pid,name:this.metadata.name,args:args}]}));}/**
     * Creates a new Worker
     * @param {String} filename Worker filename
     * @param {Object} [options] Worker options
     * @return {Worker}
     */},{key:"worker",value:function worker(filename){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var uri=this.resource(filename);var worker=new Worker(uri,Object.assign({credentials:'same-origin'},options));this.workers.push(worker);return worker;}/**
     * Create a new window belonging to this application
     * @param {Object} options Window options
     * @see {Window}
     * @return {Window}
     */},{key:"createWindow",value:function createWindow(){var _this4=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var found=this.windows.find(function(w){return w.id===options.id;});if(found){var msg=this.core.make('osjs/locale').translate('ERR_WINDOW_ID_EXISTS',options.id);throw new Error(msg);}var instance=new _window__WEBPACK_IMPORTED_MODULE_8__["default"](this.core,options);if(this.options.restore){var windows=this.options.restore.windows||[];var _found=windows.findIndex(function(r){return r.id===instance.id;});if(_found!==-1){var restore=windows[_found];instance.setPosition(restore.position,true);instance.setDimension(restore.dimension);this.options.restore.windows.splice(_found,1);}}instance.init();this.windows.push(instance);this.emit('create-window',instance);instance.on('destroy',function(){if(!_this4.destroyed){var foundIndex=_this4.windows.findIndex(function(w){return w===instance;});if(foundIndex!==-1){_this4.windows.splice(foundIndex,1);}}_this4.emit('destroy-window',instance);});if(this.options.windowAutoFocus){instance.focus();}return instance;}/**
     * Removes window(s) based on given filter
     * @param {Function} filter Filter function
     */},{key:"removeWindow",value:function removeWindow(filter){var found=this.windows.filter(filter);found.forEach(function(win){return win.destroy();});}/**
     * Gets a snapshot of the application session
     * @return {Object}
     */},{key:"getSession",value:function getSession(){var session={args:Object.assign({},this.args),name:this.metadata.name,windows:this.windows.map(function(w){return w.getSession();}).filter(function(s){return s!==null;})};return session;}/**
     * Emits an event across all (or filtered) applications
     *
     * @deprecated
     * @param {Function} [filter] A method to filter what applications to send to
     * @return {Function} Function with 'emit()' signature
     */},{key:"emitAll",value:function emitAll(filter){var _this5=this;console.warn('Application#emitAll is deprecated. Use Core#broadcast instead');var defaultFilter=function defaultFilter(proc){return proc.pid!==_this5.pid;};var filterFn=typeof filter==='function'?filter:typeof filter==='string'?function(proc){return defaultFilter(proc)&&proc.metadata.name===filter;}:defaultFilter;return function(name){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return applications.filter(filterFn).map(function(proc){return proc.emit.apply(proc,[name].concat(args));});};}/**
     * Saves settings
     * @return {Promise<Boolean, Error>}
     */},{key:"saveSettings",value:function saveSettings(){var service=this.core.make('osjs/settings');var name=getSettingsKey(this.metadata);service.set(name,null,this.settings);return service.save();}/**
     * Get a list of all running applications
     *
     * @return {Application[]}
     */}],[{key:"getApplications",value:function getApplications(){return applications;}/**
     * Kills all running applications
     */},{key:"destroyAll",value:function destroyAll(){applications.forEach(function(proc){try{proc.destroy(false);}catch(e){console.warn('Exception on destroyAll',e);}});applications.splice(0,applications.length);}}]);return Application;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]);/***/},/***/"./src/auth.js":/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Auth;});/* harmony import */var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js");/* harmony import */var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */"./node_modules/@babel/runtime/helpers/asyncToGenerator.js");/* harmony import */var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _login__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./login */"./src/login.js");/* harmony import */var _adapters_auth_server__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./adapters/auth/server */"./src/adapters/auth/server.js");/* harmony import */var _adapters_auth_localstorage__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./adapters/auth/localstorage */"./src/adapters/auth/localstorage.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Handles Authentication
 */var Auth=/*#__PURE__*/function(){/**
   * @param {Core} core OS.js Core instance reference
   * @param {Object} [args.ui] Options for default login UI adapter
   * @param {Function} [args.adapter] Custom login adapter
   * @param {Function} [args.login] Custom UI
   * @param {Object} [args.config] Configuration object to be passed on
   */function Auth(core){var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Auth);var defaultUi=core.config('auth.ui',{});var defaultAdapters={server:_adapters_auth_server__WEBPACK_IMPORTED_MODULE_5__["default"],localStorage:_adapters_auth_localstorage__WEBPACK_IMPORTED_MODULE_6__["default"]};var adapter=core.config('standalone')?_adapters_auth_localstorage__WEBPACK_IMPORTED_MODULE_6__["default"]:typeof args.adapter==='function'?args.adapter:defaultAdapters[args.adapter||'server'];this.ui=args.login?args.login(core,args.config||{}):new _login__WEBPACK_IMPORTED_MODULE_4__["default"](core,args.ui||defaultUi);this.adapter=Object.assign({login:function login(){return Promise.reject(new Error('Not implemented'));},logout:function logout(){return Promise.reject(new Error('Not implemented'));},init:function init(){return Promise.resolve(true);},destroy:function destroy(){}},adapter(core,args.config||{}));this.callback=function(){};this.core=core;}/**
   * Initializes authentication handler
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Auth,[{key:"init",value:function init(){var _this=this;this.ui.on('login:post',function(values){return _this.login(values);});return this.adapter.init();}/**
     * Destroy authentication handler
     */},{key:"destroy",value:function destroy(){this.ui.destroy();}/**
     * Run the shutdown procedure
     */},{key:"shutdown",value:function shutdown(reload){try{this.core.destroy();}catch(e){console.warn('Exception on destruction',e);}this.core.emit('osjs/core:logged-out');if(reload){setTimeout(function(){window.location.reload();// FIXME Reload, not refresh
// this.core.boot();
},1);}}/**
     * Shows Login UI
     * @return {Promise<boolean, Error>}
     */},{key:"show",value:function show(cb){var login=this.core.config('auth.login',{});var autologin=login.username&&login.password;this.callback=cb;this.ui.init(autologin);if(autologin){return this.login(login);}return Promise.resolve(true);}/**
     * Performs a login
     * @param {Object} values Form values as JSON
     */},{key:"login",value:function(){var _login=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values){var _this2=this;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:this.ui.emit('login:start');return _context.abrupt("return",this.adapter.login(values).then(function(response){if(response){_this2.ui.destroy();_this2.callback(response);_this2.core.emit('osjs/core:logged-in');_this2.ui.emit('login:stop');return true;}return false;}).catch(function(e){if(_this2.core.config('development')){console.warn('Exception on login',e);}_this2.ui.emit('login:error','Login failed');_this2.ui.emit('login:stop');return false;}));case 2:case"end":return _context.stop();}}},_callee,this);}));function login(_x){return _login.apply(this,arguments);}return login;}()/**
     * Performs a logout
     * @param {boolean} [reload=true] Reload client afterwards
     */},{key:"logout",value:function logout(){var _this3=this;var reload=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;return this.adapter.logout(reload).then(function(response){if(!response){return false;}_this3.shutdown(reload);return true;});}}]);return Auth;}();/***/},/***/"./src/basic-application.js":/*!**********************************!*\
  !*** ./src/basic-application.js ***!
  \**********************************/ /*! exports provided: BasicApplication */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BasicApplication",function(){return BasicApplication;});/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js");/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /*
 * Get basename of a file
 */var basename=function basename(path){return path.split('/').reverse()[0];};/*
 * Get path of a file
 */var pathname=function pathname(path){var split=path.split('/');split.splice(split.length-1,1);return split.join('/');};/**
 * Basic Application Helper
 *
 * @desc A class for helping creating basic applications with open/load/create functionality.
 * Also sets the internal proc args for sessions.
 */var BasicApplication=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BasicApplication,_EventEmitter);/**
   * Basic Application Constructor
   * @param {Core} core OS.js Core API
   * @param {Application} proc The application process
   * @param {Window} win The main application window
   * @param {Object} options Basic application options
   * @param {string[]} [options.mimeTypes] What MIME types to support (all/fallback)
   * @param {string[]} [options.loadMimeTypes] What MIME types to support on load
   * @param {string[]} [options.saveMimeTypes] What MIME types to support on save
   * @param {string} [options.defaultFilename] Default filename of a new file
   */function BasicApplication(core,proc,win,options){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,BasicApplication);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(BasicApplication).call(this,'BasicApplication<'+proc.name+'>'));_this.core=core;_this.proc=proc;_this.win=win;_this.options=Object.assign({mimeTypes:proc.metadata.mimes||[],loadMimeTypes:[],saveMimeTypes:[],defaultFilename:'New File'},options);return _this;}/**
   * Destroys all Basic Application internals
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BasicApplication,[{key:"destroy",value:function destroy(){this.off();}/**
     * Initializes the application
     */},{key:"init",value:function init(){if(this.proc.args.file){this.open(this.proc.args.file);}else{this.create();}return Promise.resolve(true);}/**
     * Gets options for a dialog
     * @param {string} type Dialog type
     * @return {Object}
     */},{key:"getDialogOptions",value:function getDialogOptions(type){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _this$options=this.options,defaultFilename=_this$options.defaultFilename,mimeTypes=_this$options.mimeTypes,loadMimeTypes=_this$options.loadMimeTypes,saveMimeTypes=_this$options.saveMimeTypes;var currentFile=options.file?options.file:this.proc.args.file;var defaultPath=this.core.config('vfs.defaultPath');var path=currentFile?currentFile.path:null;var mime=type==='open'?loadMimeTypes:saveMimeTypes;if(!mime.length){mime=mimeTypes;}return[{type:type,mime:mime,filename:path?basename(path):defaultFilename,path:path?pathname(path):defaultPath},{parent:this.win,attributes:{modal:true}}];}/**
     * Updates the window title to match open file
     */},{key:"updateWindowTitle",value:function updateWindowTitle(){if(this.win){var _this$core$make=this.core.make('osjs/locale'),translatableFlat=_this$core$make.translatableFlat;var prefix=translatableFlat(this.proc.metadata.title);var title=this.proc.args.file?basename(this.proc.args.file.path):this.options.defaultFilename;if(title){this.win.setTitle("".concat(prefix," - ").concat(title));}else{this.win.setTitle(prefix);}}}/**
     * Creates a new dialog of a type
     * @param {string} type Dialog type
     * @param {Function} cb Callback
     * @param {Object} [options] Override options
     */},{key:"createDialog",value:function createDialog(type,cb){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var _this$getDialogOption=this.getDialogOptions(type,options),_this$getDialogOption2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$getDialogOption,2),args=_this$getDialogOption2[0],opts=_this$getDialogOption2[1];this.core.make('osjs/dialog','file',args,opts,function(btn,item){if(btn==='ok'){cb(item);}});}/**
     * Opens given file
     * @desc Does not do any actual VFS operation
     * @param {Object} file A file object
     */},{key:"open",value:function open(item){this.proc.args.file=Object.assign({},item);this.emit('open-file',item);this.updateWindowTitle();}/**
     * Saves given file
     * @desc Does not do any actual VFS operation
     * @param {Object} file A file object
     */},{key:"save",value:function save(item){this.proc.args.file=Object.assign({},item);this.emit('save-file',item);this.updateWindowTitle();}/**
     * Create new file
     * @desc Does not do any actual VFS operation
     */},{key:"create",value:function create(){this.proc.args.file=null;this.emit('new-file');this.updateWindowTitle();}/**
     * Create new file
     * @see BasicApplication#create
     */},{key:"createNew",value:function createNew(){this.create();}/**
     * Creates a new save dialog
     */},{key:"createSaveDialog",value:function createSaveDialog(){var _this2=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.createDialog('save',function(item){return _this2.save(item);},options);}/**
     * Creates a new load dialog
     */},{key:"createOpenDialog",value:function createOpenDialog(){var _this3=this;var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};this.createDialog('open',function(item){return _this3.open(item);},options);}}]);return BasicApplication;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]);/***/},/***/"./src/clipboard.js":/*!**************************!*\
  !*** ./src/clipboard.js ***!
  \**************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Clipboard;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var Clipboard=/*#__PURE__*/function(){function Clipboard(){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Clipboard);this.value=undefined;this.clear();}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Clipboard,[{key:"destroy",value:function destroy(){this.clear();}},{key:"clear",value:function clear(){this.value=Promise.resolve();}},{key:"set",value:function set(v){this.value=v;}},{key:"get",value:function get(clear){var _this=this;var v=typeof this.value==='function'?this.value():this.value;var done=function done(ret){if(clear){_this.clear();}return ret;};return Promise.resolve(v).then(done).catch(done);}}]);return Clipboard;}();/***/},/***/"./src/config.js":/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/ /*! exports provided: defaultConfiguration */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"defaultConfiguration",function(){return defaultConfiguration;});/* harmony import */var _utils_locale_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./utils/locale.js */"./src/utils/locale.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var _window$location=window.location,pathname=_window$location.pathname,href=_window$location.href;var path=pathname.substr(-1)!=='/'?pathname+'/':pathname;var uri=href.replace(/[^/]*$/,'');var defaultConfiguration={development:!("development"||false).match(/^prod/i),standalone:false,http:{public:path,uri:uri},ws:{connectInterval:5000,uri:uri.replace(/^http/,'ws'),disabled:false},languages:{en_EN:'English',nb_NO:'Norwegian, Norsk (bokmål)',vi_VN:'Vietnamese, Vietnamese',fr_FR:'French',de_DE:'German',sl_SI:'Slovenian, Slovenščina',zh_CN:'Chinese (simplified)'},packages:{manifest:'/metadata.json'},// FIXME: Move into packages above ?!
application:{categories:{development:{label:'LBL_APP_CAT_DEVELOPMENT',icon:'applications-development'},science:{label:'LBL_APP_CAT_SCIENCE',icon:'applications-science'},games:{label:'LBL_APP_CAT_GAMES',icon:'applications-games'},graphics:{label:'LBL_APP_CAT_GRAPHICS',icon:'applications-graphics'},network:{label:'LBL_APP_CAT_NETWORK',icon:'applications-internet'},multimedia:{label:'LBL_APP_CAT_MULTIMEDIA',icon:'applications-multimedia'},office:{label:'LBL_APP_CAT_OFFICE',icon:'applications-office'},system:{label:'LBL_APP_CAT_SYSTEM',icon:'applications-system'},utilities:{label:'LBL_APP_CAT_UTILITIES',icon:'applications-utilities'},other:{label:'LBL_APP_CAT_OTHER',icon:'applications-other'}}},auth:{ui:{},login:{username:null,password:null}},settings:{lock:[],defaults:{'osjs/session':[],'osjs/desktop':{},'osjs/locale':{}}},search:{enabled:true},notifications:{native:false},desktop:{lock:false,contextmenu:{enabled:true,defaults:true},settings:{font:'Roboto',theme:'StandardTheme',sounds:'FreedesktopSounds',icons:'GnomeIcons',animations:false,panels:[{position:'top',items:[{name:'menu'},{name:'windows'},{name:'tray'},{name:'clock'}]}],widgets:[],keybindings:[],background:{src:__webpack_require__(/*! ./styles/wallpaper.png */"./src/styles/wallpaper.png"),color:'#572a79',style:'cover'},iconview:{enabled:false}}},locale:{language:Object(_utils_locale_js__WEBPACK_IMPORTED_MODULE_0__["clientLocale"])('en_EN'),rtl:['az','fa','he','uz','ar'],format:{shortDate:'yyyy-mm-dd',mediumDate:'dS mmm yyyy',longDate:'dS mmmm yyyy',fullDate:'dddd dS mmmm yyyy',shortTime:'HH:MM',longTime:'HH:MM:ss'}},windows:{lofi:false,mobile:false,// Trigger for setting mobile UI
template:null// A string. See 'window.js' for example
},vfs:{defaultPath:'home:/',defaultAdapter:'system',adapters:{},mountpoints:[{name:'apps',label:'Applications',adapter:'apps',icon:__webpack_require__(/*! ./styles/logo-blue-32x32.png */"./src/styles/logo-blue-32x32.png"),attributes:{visibility:'restricted',readOnly:true}},{name:'osjs',label:'OS.js',adapter:'system',icon:{name:'folder-publicshare'}},{name:'home',label:'Home',adapter:'system',icon:{name:'user-home'}}],icons:{'^application/zip':{name:'package-x-generic'},'^application/javascript':{name:'text-x-script'},'^application/json':{name:'text-x-script'},'^application/x-python':{name:'text-x-script'},'^application/php':{name:'text-x-script'},'^application/pdf':{name:'x-office-document'},'^application/rtf':{name:'x-office-document'},'^application/msword':{name:'x-office-document'},'^application/(xz|tar|gzip)':{name:'package-x-generic'},'^text/css':{name:'text-x-script'},'^text/html':{name:'text-html'},'^(application|text)/xml':{name:'text-html'},'^application':{name:'application-x-executable'},'^text':{name:'text-x-generic'},'^audio':{name:'audio-x-generic'},'^video':{name:'video-x-generic'},'^image':{name:'image-x-generic'}}},providers:{globalBlacklist:['osjs/websocket','osjs/clipboard','osjs/gapi'],globalWhitelist:[]}};/***/},/***/"./src/core.js":/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Core;});/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */"./node_modules/@babel/runtime/helpers/assertThisInitialized.js");/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @babel/runtime/helpers/get */"./node_modules/@babel/runtime/helpers/get.js");/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);/* harmony import */var _application__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ./application */"./src/application.js");/* harmony import */var _websocket__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ./websocket */"./src/websocket.js");/* harmony import */var _splash__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ./splash */"./src/splash.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_12___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_12__);/* harmony import */var _config__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ./config */"./src/config.js");/* harmony import */var _utils_fetch__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ./utils/fetch */"./src/utils/fetch.js");/* harmony import */var _utils_url__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(/*! ./utils/url */"./src/utils/url.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Core
 *
 * @desc Main class for OS.js service providers and bootstrapping.
 */var Core=/*#__PURE__*/function(_CoreBase){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Core,_CoreBase);/**
   * Create core instance
   * @param {Object} config Configuration tree
   * @param {Object} [options] Options
   * @param {Element} [options.root] The root DOM element for elements
   * @param {Element} [options.resourceRoot] The root DOM element for resources
   * @param {String[]} [options.classNames] List of class names to apply to root dom element
   */function Core(){var _this;var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Core);options=Object.assign({},{classNames:['osjs-root'],root:document.body},options||{});_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Core).call(this,_config__WEBPACK_IMPORTED_MODULE_13__["defaultConfiguration"],config,options));_this.ws=null;_this.ping=null;_this.splash=new _splash__WEBPACK_IMPORTED_MODULE_11__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));_this.$root=options.root;_this.$resourceRoot=options.resourceRoot||document.querySelector('head');_this.requestOptions={};_this.urlResolver=Object(_utils_url__WEBPACK_IMPORTED_MODULE_15__["urlResolver"])(_this.configuration);_this.user={id:null,username:'osjs',groups:[]};_this.options.classNames.forEach(function(n){return _this.$root.classList.add(n);});var uri=_this.configuration.ws.uri;if(!uri.match(/^wss?:/)){var _window$location=window.location,protocol=_window$location.protocol,host=_window$location.host;_this.configuration.ws.uri=protocol.replace(/^http/,'ws')+'//'+host+uri.replace(/^\/+/,'/');}return _this;}/**
   * Destroy core instance
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Core,[{key:"destroy",value:function destroy(){if(this.destroyed){return;}this.emit('osjs/core:destroy');this.ping=clearInterval(this.ping);_application__WEBPACK_IMPORTED_MODULE_9__["default"].destroyAll();if(this.ws){this.ws.close();}this.user=null;this.ws=null;this.connecting=false;this.connectfailed=false;this.ping=null;_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Core.prototype),"destroy",this).call(this);}/**
     * Boots up OS.js
     */},{key:"boot",value:function boot(){var _this2=this;var done=function done(e){if(e){console.error('Error while booting',e);}console.groupEnd();return _this2.start();};if(this.booted){return Promise.resolve(false);}console.group('Core::boot()');this._attachEvents();this.emit('osjs/core:boot');return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Core.prototype),"boot",this).call(this).then(function(){_this2.emit('osjs/core:booted');if(_this2.has('osjs/auth')){return _this2.make('osjs/auth').show(function(user){_this2.user=user;if(_this2.has('osjs/settings')){_this2.make('osjs/settings').load().then(function(){return done();}).catch(function(){return done();});}else{done();}});}else{console.debug('OS.js STARTED WITHOUT ANY AUTHENTICATION');}return done();}).catch(done);}/**
     * Starts all core services
     */},{key:"start",value:function start(){var _this3=this;var connect=function connect(){return new Promise(function(resolve,reject){try{var valid=_this3._createConnection(function(error){return error?reject(error):resolve();});if(valid===false){// We can skip the connection
resolve();}}catch(e){reject(e);}});};var done=function done(err){_this3.emit('osjs/core:started');if(err){console.warn('Error while starting',err);}console.groupEnd();return!!err;};if(this.started){return Promise.resolve();}console.group('Core::start()');this.emit('osjs/core:start');this._createListeners();return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Core.prototype),"start",this).call(this).then(function(result){console.groupEnd();if(result){return connect().then(function(){return done();}).catch(function(err){return done(err);});}return false;}).catch(done);}/**
     * Attaches some internal events
     */},{key:"_attachEvents",value:function _attachEvents(){var _this4=this;// Attaches sounds for certain events
this.on('osjs/core:started',function(){if(_this4.has('osjs/sounds')){_this4.make('osjs/sounds').play('service-login');}});this.on('osjs/core:destroy',function(){if(_this4.has('osjs/sounds')){_this4.make('osjs/sounds').play('service-logout');}});// Forwards messages to an application from internal websocket
this.on('osjs/application:socket:message',function(_ref){var pid=_ref.pid,args=_ref.args;var found=_application__WEBPACK_IMPORTED_MODULE_9__["default"].getApplications().find(function(proc){return proc&&proc.pid===pid;});if(found){found.emit.apply(found,['ws:message'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(args)));}});// Sets up a server ping
this.on('osjs/core:connected',function(config){var pingTime=config.cookie.maxAge/2;_this4.ping=setInterval(function(){if(_this4.ws){if(_this4.ws.connected&&!_this4.ws.reconnecting){_this4.request('/ping').catch(function(e){return console.warn('Error on ping',e);});}}},pingTime);});}/**
     * Creates the main connection to server
     */},{key:"_createConnection",value:function _createConnection(cb){var _this5=this;if(this.configuration.standalone||this.configuration.ws.disabled){return false;}var _this$config=this.config('ws'),uri=_this$config.uri;var wasConnected=false;console.debug('Creating websocket connection on',uri);this.ws=new _websocket__WEBPACK_IMPORTED_MODULE_10__["default"]('CoreSocket',uri,{interval:this.config('ws.connectInterval',1000)});this.ws.once('connected',function(){// Allow for some grace-time in case we close prematurely
setTimeout(function(){wasConnected=true;cb();},100);});this.ws.on('connected',function(ev,reconnected){_this5.emit('osjs/core:connect',ev,reconnected);});this.ws.once('failed',function(ev){if(!wasConnected){cb(new Error('Connection closed'));_this5.emit('osjs/core:connection-failed',ev);}});this.ws.on('disconnected',function(ev){_this5.emit('osjs/core:disconnect',ev);});this.ws.on('message',function(ev){try{var data=JSON.parse(ev.data);var params=data.params||[];_this5.emit.apply(_this5,[data.name].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(params)));}catch(e){console.warn('Exception on websocket message',e);}});return true;}/**
     * Creates event listeners*
     */},{key:"_createListeners",value:function _createListeners(){var handle=function handle(data){var pid=data.pid,wid=data.wid,args=data.args;var proc=_application__WEBPACK_IMPORTED_MODULE_9__["default"].getApplications().find(function(p){return p.pid===pid;});var win=proc?proc.windows.find(function(w){return w.wid===wid;}):null;if(win){win.emit.apply(win,['iframe:get'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(args||[])));}};window.addEventListener('message',function(ev){var message=ev.data||{};if(message&&message.name==='osjs/iframe:message'){handle.apply(void 0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(message.params||[]));}});}/**
     * Creates an URL based on configured public path
     *
     * @desc If you give a options.type, the URL will be resolved
     * to the correct resource.
     *
     * @param {String} [endpoint=/] Endpoint
     * @param {Object} [options] Additional options for resolving url
     * @param {Boolean} [options.prefix=false] Returns a full URL complete with scheme, etc. (will always be true on websocket)
     * @param {string} [options.type] Optional URL type (websocket)
     * @param {PackageMetadata} [metadata] A package metadata
     * @return {String}
     */},{key:"url",value:function url(){var endpoint=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'/';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metadata=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return this.urlResolver(endpoint,options,metadata);}/**
     * Make a HTTP request
     *
     * @desc This is a wrapper for making a 'fetch' request with some helpers
     * and integration with OS.js
     * @param {String} url The endpoint
     * @param {Options} [options] fetch options
     * @param {String} [type] Request / Response type
     * @return {*}
     */},{key:"request",value:function request(url){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var _=this.has('osjs/locale')?this.make('osjs/locale').translate:function(t){return t;};if(this.config('standalone')){return Promise.reject(new Error(_('ERR_REQUEST_STANDALONE')));}if(!url.match(/^((http|ws|ftp)s?:)/i)){url=this.url(url);// FIXME: Deep merge
options=Object.assign({},options||{},this.requestOptions||{});}return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_14__["fetch"])(url,options,type).catch(function(error){console.warn(error);throw new Error(_('ERR_REQUEST_NOT_OK',error));});}/**
     * Create an application from a package
     *
     * @param {String} name Package name
     * @param {Object} [args] Launch arguments
     * @param {Object} [options] Launch options
     * @see {Packages}
     * @return {Application}
     */},{key:"run",value:function run(name){var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};console.debug('Core::run()',name,args,options);return this.make('osjs/packages').launch(name,args,options);}/**
     * Spawns an application based on the file given
     * @param {Object} file A file object
     * @param {Object} [options] Options
     * @return {Boolean|Application}
     */},{key:"open",value:function open(file){var _this6=this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _=this.make('osjs/locale').translate;var run=function run(app){return _this6.run(app,{file:file},options);};if(file.mime==='osjs/application'){return this.run(file.path.split('/').pop());}var compatible=this.make('osjs/packages').getCompatiblePackages(file.mime);if(compatible.length>0){if(compatible.length>1){try{this.make('osjs/dialog','choice',{title:_('LBL_LAUNCH_SELECT'),message:_('LBL_LAUNCH_SELECT_MESSAGE',file.path),choices:compatible.reduce(function(o,i){return Object.assign(o,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},i.name,i.name));},{})},function(btn,value){if(btn==='ok'&&value){run(value);}});return true;}catch(e){console.warn('Exception on compability check',e);}}run(compatible[0].name);return Promise.resolve(true);}return Promise.resolve(false);}/**
     * Removes an event handler
     * @see EventHandler#off
     */},{key:"off",value:function off(name){var callback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var force=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(name.match(/^osjs\//)&&typeof callback!=='function'){throw new TypeError('The callback must be a function');}return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Core.prototype),"off",this).call(this,name,callback,force);}/**
     * Sends a 'broadcast' event with given arguments
     * to all applications matching given filter
     *
     * @param {string|Function} pkg The filter
     * @param {string} name The event name
     * @param {*} ...args Arguments to pass to emit
     * @return {string[]} List of application names emitted to
     */},{key:"broadcast",value:function broadcast(pkg,name){for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}var filter=typeof pkg==='function'?pkg:function(p){return p.metadata.name===pkg;};var apps=_application__WEBPACK_IMPORTED_MODULE_9__["default"].getApplications().filter(filter);return apps.map(function(proc){proc.emit.apply(proc,[name].concat(args));return proc.name;});}/**
     * Set the internal fetch/request options
     * @param {Object} options Request options
     */},{key:"setRequestOptions",value:function setRequestOptions(options){this.requestOptions=Object.assign({},options);}/**
     * Gets the current user
     * @return {Map<string,*>} User object
     */},{key:"getUser",value:function getUser(){return Object.assign({},this.user);}}]);return Core;}(_osjs_common__WEBPACK_IMPORTED_MODULE_12__["CoreBase"]);/***/},/***/"./src/desktop.js":/*!************************!*\
  !*** ./src/desktop.js ***!
  \************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Desktop;});/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _application__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./application */"./src/application.js");/* harmony import */var _utils_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ./utils/dom */"./src/utils/dom.js");/* harmony import */var _window__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ./window */"./src/window.js");/* harmony import */var _search__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ./search */"./src/search.js");/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! deepmerge */"./node_modules/deepmerge/dist/umd.js");/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_11___default=/*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_11__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var TEMPLATE=function TEMPLATE(subtract){return"\n  .osjs-root[data-mobile=true] .osjs-window,\n  .osjs-window[data-maximized=true] {\n    top: ".concat(subtract.top,"px !important;\n    left: ").concat(subtract.left,"px !important;\n    right: ").concat(subtract.right,"px !important;\n    bottom: ").concat(subtract.bottom,"px !important;\n    width: calc(100% -  ").concat(subtract.left+subtract.right,"px) !important;\n    height: calc(100% - ").concat(subtract.top+subtract.bottom,"px) !important;\n  }\n");};/*
 * Creates a set of styles based on background settings
 */var applyBackgroundStyles=function applyBackgroundStyles(core,background){var $root=core.$root;var styles={backgroundRepeat:'no-repeat',backgroundPosition:'50% 50%',backgroundSize:'auto',backgroundColor:background.color,backgroundImage:'none'};if(background.style==='cover'||background.style==='contain'){styles.backgroundSize=background.style;}else if(background.style==='repeat'){styles.backgroundRepeat='repeat';}if(background.style!=='color'){if(background.src===undefined){styles.backgroundImage=undefined;}else if(typeof background.src==='string'){styles.backgroundImage="url(".concat(background.src,")");}else if(background.src){core.make('osjs/vfs').url(background.src).then(function(src){setTimeout(function(){return $root.style.backgroundImage="url(".concat(src,")");},1);}).catch(function(error){return console.warn('Error while setting wallpaper from VFS',error);});}}Object.keys(styles).forEach(function(k){return $root.style[k]=styles[k];});};/*
 * Creates a rectangle with the realestate panels takes up
 */var createPanelSubtraction=function createPanelSubtraction(panel,panels){var subtraction={top:0,left:0,right:0,bottom:0};var set=function set(p){return subtraction[p.options.position]=p.$element.offsetHeight;};if(panels.length>0){panels.forEach(set);}else{// Backward compability
set(panel);}return subtraction;};/**
 * Desktop Class
 *
 * @desc Handles the Desktop
 */var Desktop=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Desktop,_EventEmitter);/**
   * Create Desktop
   *
   * @param {Core} core Core reference
   */function Desktop(core,options){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Desktop);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Desktop).call(this,'Desktop'));_this.core=core;_this.options=Object.assign({contextmenu:[]},options);_this.$theme=[];_this.$icons=[];_this.$styles=document.createElement('style');_this.$styles.setAttribute('type','text/css');_this.contextmenuEntries=[];_this.search=core.config('search.enabled')?new _search__WEBPACK_IMPORTED_MODULE_10__["default"](core):null;_this.subtract={left:0,top:0,right:0,bottom:0};return _this;}/**
   * Destroy Desktop
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Desktop,[{key:"destroy",value:function destroy(){if(this.search){this.search=this.search.destroy();}if(this.$styles&&this.$styles.parentNode){this.$styles.remove();}this.$styles=null;this._removeIcons();this._removeTheme();}/**
     * Initializes Desktop
     */},{key:"init",value:function init(){this.initConnectionEvents();this.initUIEvents();this.initDragEvents();this.initKeyboardEvents();this.initMouseEvents();this.initBaseEvents();this.initLocales();this.initDeveloperTray();this.core.$resourceRoot.appendChild(this.$styles);}},{key:"initConnectionEvents",value:function initConnectionEvents(){var _this2=this;this.core.on('osjs/core:disconnect',function(ev){console.warn('Connection closed',ev);var _=_this2.core.make('osjs/locale').translate;_this2.core.make('osjs/notification',{title:_('LBL_CONNECTION_LOST'),message:_('LBL_CONNECTION_LOST_MESSAGE')});});this.core.on('osjs/core:connect',function(ev,reconnected){console.debug('Connection opened');if(reconnected){var _=_this2.core.make('osjs/locale').translate;_this2.core.make('osjs/notification',{title:_('LBL_CONNECTION_RESTORED'),message:_('LBL_CONNECTION_RESTORED_MESSAGE')});}});this.core.on('osjs/core:connection-failed',function(ev){console.warn('Connection failed');var _=_this2.core.make('osjs/locale').translate;_this2.core.make('osjs/notification',{title:_('LBL_CONNECTION_FAILED'),message:_('LBL_CONNECTION_FAILED_MESSAGE')});});}},{key:"initUIEvents",value:function initUIEvents(){var _this3=this;this.core.on(['osjs/panel:create','osjs/panel:destroy'],function(panel){var panels=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];_this3.subtract=createPanelSubtraction(panel,panels);try{_this3._updateCSS();_window__WEBPACK_IMPORTED_MODULE_9__["default"].getWindows().forEach(function(w){return w.clampToViewport();});}catch(e){console.warn('Panel event error',e);}_this3.core.emit('osjs/desktop:transform',_this3.getRect());});this.core.on('osjs/window:transitionend',function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this3.emit.apply(_this3,['theme:window:transitionend'].concat(args));});this.core.on('osjs/window:change',function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_this3.emit.apply(_this3,['theme:window:change'].concat(args));});}},{key:"initDeveloperTray",value:function initDeveloperTray(){var _this4=this;if(!this.core.config('development')){return;}// Creates tray
var tray=this.core.make('osjs/tray').create({title:'OS.js developer tools'},function(ev){return _this4.onDeveloperMenu(ev);});this.core.on('destroy',function(){return tray.destroy();});}},{key:"initDragEvents",value:function initDragEvents(){// Handles dnd
this.core.$root.addEventListener('dragover',function(e){e.preventDefault();});this.core.$root.addEventListener('drop',function(e){e.preventDefault();});}},{key:"initKeyboardEvents",value:function initKeyboardEvents(){var _this5=this;// Forward keypress events
var isVisible=function isVisible(w){return w&&!w.getState('minimized')&&w.getState('focused');};var forwardKeyEvent=function forwardKeyEvent(n,e){var w=_window__WEBPACK_IMPORTED_MODULE_9__["default"].lastWindow();if(isVisible(w)){w.emit(n,e,w);}};var isWithinWindow=function isWithinWindow(w,target){return w&&w.$element.contains(target);};['keydown','keyup','keypress'].forEach(function(n){_this5.core.$root.addEventListener(n,function(e){return forwardKeyEvent(n,e);});});this.core.$root.addEventListener('keydown',function(e){if(!e.target){return;}if(e.keyCode===114){// F3
e.preventDefault();if(_this5.search){_this5.search.show();}}else if(e.keyCode===9){// Tab
var tagName=e.target.tagName;var isInput=['INPUT','TEXTAREA','SELECT','BUTTON'].indexOf(tagName)!==-1;var w=_window__WEBPACK_IMPORTED_MODULE_9__["default"].lastWindow();if(isWithinWindow(w,e.target)){if(isInput){if(tagName==='TEXTAREA'){Object(_utils_dom__WEBPACK_IMPORTED_MODULE_8__["handleTabOnTextarea"])(e);}}else{e.preventDefault();}}else{e.preventDefault();}}});}},{key:"initMouseEvents",value:function initMouseEvents(){var _this6=this;// Custom context menu
this.core.$root.addEventListener('contextmenu',function(ev){if(ev.target===_this6.core.$root){_this6.onContextMenu(ev);}});// A hook to prevent iframe events when dragging mouse
window.addEventListener('mousedown',function(){var moved=false;var onmousemove=function onmousemove(){if(!moved){moved=true;_this6.core.$root.setAttribute('data-mousemove',String(true));}};var onmouseup=function onmouseup(){moved=false;_this6.core.$root.setAttribute('data-mousemove',String(false));window.removeEventListener('mousemove',onmousemove);window.removeEventListener('mouseup',onmouseup);};window.addEventListener('mousemove',onmousemove);window.addEventListener('mouseup',onmouseup);});}},{key:"initBaseEvents",value:function initBaseEvents(){var _this7=this;// Resize hook
var resizeDebounce;window.addEventListener('resize',function(){clearTimeout(resizeDebounce);resizeDebounce=setTimeout(function(){return _this7._updateCSS();},200);});// Prevent navigation
history.pushState(null,null,document.URL);window.addEventListener('popstate',function(){history.pushState(null,null,document.URL);});// Prevents background scrolling on iOS
this.core.$root.addEventListener('touchmove',function(e){return e.preventDefault();});}},{key:"initLocales",value:function initLocales(){var _this8=this;// Right-to-left support triggers
var rtls=this.core.config('locale.rtl');var checkRTL=function checkRTL(){var locale=_this8.core.make('osjs/locale').getLocale().split('_')[0].toLowerCase();var isRtl=rtls.indexOf(locale)!==-1;_this8.core.$root.setAttribute('data-dir',isRtl?'rtl':'ltr');};this.core.on('osjs/settings:load',checkRTL);this.core.on('osjs/settings:save',checkRTL);this.core.on('osjs/core:started',checkRTL);}},{key:"start",value:function start(){if(this.search){this.search.init();}this._updateCSS();}/**
     * Update CSS
     */},{key:"_updateCSS",value:function _updateCSS(){if(!this.$styles){return;}var mobile=this.core.config('windows.mobile');var isMobile=!mobile?false:this.core.$root.offsetWidth<=mobile;this.core.$root.setAttribute('data-mobile',isMobile);this.$styles.innerHTML=TEMPLATE(this.subtract);}},{key:"addContextMenu",value:function addContextMenu(entries){this.contextmenuEntries=this.contextmenuEntries.concat(entries);}/**
     * Applies settings and updates desktop
     * @param {Object} [settings] Use this set instead of loading from settings
     */},{key:"applySettings",value:function applySettings(settings){var _this9=this;var lockSettings=this.core.config('desktop.lock');var defaultSettings=this.core.config('desktop.settings');var newSettings;if(lockSettings){newSettings=defaultSettings;}else{var userSettings=settings?settings:this.core.make('osjs/settings').get('osjs/desktop');newSettings=deepmerge__WEBPACK_IMPORTED_MODULE_11___default()(defaultSettings,userSettings,{arrayMerge:function arrayMerge(dest,source){return source;}});}var applyOverlays=function applyOverlays(test,list){if(_this9.core.has(test)){var instance=_this9.core.make(test);instance.removeAll();list.forEach(function(item){return instance.create(item);});}};var applyCss=function applyCss(_ref){var font=_ref.font,background=_ref.background;_this9.core.$root.style.fontFamily="".concat(font,", sans-serif");applyBackgroundStyles(_this9.core,background);};applyCss(newSettings);applyOverlays('osjs/panels',newSettings.panels);applyOverlays('osjs/widgets',newSettings.widgets);this.applyTheme(newSettings.theme);this.applyIcons(newSettings.icons);return Object.assign({},newSettings);}/**
     * Removes current style theme from DOM
     */},{key:"_removeTheme",value:function _removeTheme(){this.emit('theme:destroy');this.off(['theme:init','theme:destroy','theme:window:change','theme:window:transitionend']);this.$theme.forEach(function(el){if(el&&el.parentNode){el.remove();}});this.$theme=[];}/**
     * Removes current icon theme from DOM
     */},{key:"_removeIcons",value:function _removeIcons(){this.$icons.forEach(function(el){if(el&&el.parentNode){el.remove();}});this.$icons=[];}/**
     * Sets the current icon theme from settings
     */},{key:"applyIcons",value:function applyIcons(name){var _this10=this;name=name||this.core.config('desktop.icons');return this._applyTheme(name).then(function(_ref2){var elements=_ref2.elements,errors=_ref2.errors,callback=_ref2.callback,metadata=_ref2.metadata;_this10._removeIcons();_this10.$icons=Object.values(elements);_this10.emit('icons:init');});}/**
     * Sets the current style theme from settings
     */},{key:"applyTheme",value:function applyTheme(name){var _this11=this;name=name||this.core.config('desktop.theme');return this._applyTheme(name).then(function(_ref3){var elements=_ref3.elements,errors=_ref3.errors,callback=_ref3.callback,metadata=_ref3.metadata;_this11._removeTheme();if(callback&&metadata){try{callback(_this11.core,_this11,{},metadata);}catch(e){console.warn('Exception while calling theme callback',e);}}_this11.$theme=Object.values(elements);_this11.emit('theme:init');});}},{key:"_applyTheme",value:function _applyTheme(name,cb){return this.core.make('osjs/packages').launch(name).then(function(result){if(result.errors.length){console.error(result.errors);}return result;});}},{key:"_applySettingsByKey",value:function _applySettingsByKey(k,v){var _this12=this;return this.core.make('osjs/settings').set('osjs/desktop',k,v).save().then(function(){return _this12.applySettings();});}},{key:"onDeveloperMenu",value:function onDeveloperMenu(ev){var _this13=this;var _=this.core.make('osjs/locale').translate;var s=this.core.make('osjs/settings').get();var storageItems=Object.keys(s).map(function(k){return{label:k,onclick:function onclick(){_this13.core.make('osjs/settings').clear(k).then(function(){return _this13.applySettings();});}};});this.core.make('osjs/contextmenu').show({position:ev,menu:[{label:_('LBL_KILL_ALL'),onclick:function onclick(){return _application__WEBPACK_IMPORTED_MODULE_7__["default"].destroyAll();}},{label:_('LBL_APPLICATIONS'),items:_application__WEBPACK_IMPORTED_MODULE_7__["default"].getApplications().map(function(proc){return{label:"".concat(proc.metadata.name," (").concat(proc.pid,")"),items:[{label:_('LBL_KILL'),onclick:function onclick(){return proc.destroy();}},{label:_('LBL_RELOAD'),onclick:function onclick(){return proc.relaunch();}}]};})},{label:'Clear Storage',items:storageItems}]});}},{key:"onContextMenu",value:function onContextMenu(ev){var _ref4,_this14=this;var lockSettings=this.core.config('desktop.lock');var extras=(_ref4=[]).concat.apply(_ref4,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.contextmenuEntries.map(function(e){return typeof e==='function'?e():e;})));var config=this.core.config('desktop.contextmenu');if(config===false||config.enabled===false){return;}var useDefaults=config===true||config.defaults;// NOTE: Backward compability
var _=this.core.make('osjs/locale').translate;var __=this.core.make('osjs/locale').translatableFlat;var themes=this.core.make('osjs/packages').getPackages(function(p){return p.type==='theme';});var defaultItems=lockSettings?[]:[{label:_('LBL_DESKTOP_SELECT_WALLPAPER'),onclick:function onclick(){_this14.core.make('osjs/dialog','file',{mime:['^image']},function(btn,file){if(btn==='ok'){_this14._applySettingsByKey('background.src',file);}});}},{label:_('LBL_DESKTOP_SELECT_THEME'),items:themes.map(function(t){return{label:__(t.title,t.name),onclick:function onclick(){_this14._applySettingsByKey('theme',t.name);}};})}];var base=useDefaults==='function'?config.defaults(this,defaultItems):useDefaults?defaultItems:[];var provided=typeof this.options.contextmenu==='function'?this.options.contextmenu(this,defaultItems):this.options.contextmenu||[];var menu=[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(base),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(provided),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(extras));if(menu.length){this.core.make('osjs/contextmenu').show({menu:menu,position:ev});}}/**
     * Gets the rectangle of available space
     *
     * @desc This is based on any panels etc taking up space
     * @return {Object}
     */},{key:"getRect",value:function getRect(){var root=this.core.$root;var _this$subtract=this.subtract,left=_this$subtract.left,top=_this$subtract.top,right=_this$subtract.right,bottom=_this$subtract.bottom;var width=root.offsetWidth-left-right;var height=root.offsetHeight-top-bottom;return{width:width,height:height,top:top,bottom:bottom,left:left,right:right};}}]);return Desktop;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]);/***/},/***/"./src/filesystem.js":/*!***************************!*\
  !*** ./src/filesystem.js ***!
  \***************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Filesystem;});/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js");/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _vfs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ./vfs */"./src/vfs.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_8___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_8__);/* harmony import */var _adapters_vfs_null__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ./adapters/vfs/null */"./src/adapters/vfs/null.js");/* harmony import */var _adapters_vfs_system__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ./adapters/vfs/system */"./src/adapters/vfs/system.js");/* harmony import */var _adapters_vfs_apps__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ./adapters/vfs/apps */"./src/adapters/vfs/apps.js");/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! deepmerge */"./node_modules/deepmerge/dist/umd.js");/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_12___default=/*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_12__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * VFS Mountpoint
 * @param {String} name Name
 * @param {String} label Label
 * @param {String} adapter Adater name
 * @param {Boolean} [enabled=true] Enabled state
 * @param {Object} [attributes] Attributes
 * @param {String} [attributes.visibility='global'] Visibility in UI
 * @param {Boolean} [attributes.local=true] Local filesystem ?
 * @param {Boolean} [attributes.searchable=true] If can be searched
 * @param {Boolean} [attributes.readOnly=false] Readonly
 * @typedef Mountpoint
 */ /**
 * Filesystem Manager
 *
 * @desc Class that manages filesystems
 */var Filesystem=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Filesystem,_EventEmitter);/**
   * Create filesystem manager
   *
   * @param {Core} core Core reference
   * @param {Object} [options] Options
   * @param {Map<String,Adapter>} [options.adapters] Adapter registry
   * @param {Mountpoint[]} [options.mounts] Mountpoints
   */function Filesystem(core){var _this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,Filesystem);options=Object.assign({},{adapters:{},mounts:[]},options);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Filesystem).call(this,'Filesystem'));/**
     * Core instance reference
     * @type {Core}
     */_this.core=core;/**
     * Adapter registry
     * @type {Map<String, Adapter>}
     */_this.adapters=Object.assign({},{system:_adapters_vfs_system__WEBPACK_IMPORTED_MODULE_10__["default"],apps:_adapters_vfs_apps__WEBPACK_IMPORTED_MODULE_11__["default"]},_this.core.config('vfs.adapters',{}),options.adapters);/**
     * Mountpoints
     * @type {Mountpoint[]}
     */_this.mounts=[];/**
     * Options
     * @type {Object}
     */_this.options={};/**
     * A wrapper for VFS method requests
     * @type {Map<String, Function>}
     */_this.proxy=Object.keys(_vfs__WEBPACK_IMPORTED_MODULE_7__).reduce(function(result,method){return Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({},method,function(){var _this2;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_this2=_this)._request.apply(_this2,[method].concat(args));}),result);},{});return _this;}/**
   * Mounts all configured mountpoints
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Filesystem,[{key:"mountAll",value:function mountAll(){var _this3=this;var stopOnError=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this.mounts=this.core.config('vfs.mountpoints').concat(this.options.mounts||[]).map(function(mount){try{return _this3.createMountpoint(mount);}catch(e){console.warn('Error while creating mountpoint',e);}return null;}).filter(function(mount,pos,arr){var index=arr.findIndex(function(item){return item.label===mount.label||item.root===mount.label;});if(index===pos){return true;}console.warn('Removed duplicate mountpoint',mount);return false;}).filter(function(mount){return mount!==null;});var fn=function fn(m){return stopOnError?_this3._mountpointAction(m):_this3._mountpointAction(m).catch(function(err){return console.warn('Error while mounting',m,err);});};return Promise.all(this.mounts.map(fn));}/**
     * Mount given filesystem
     * @param {String} name Filesystem name
     * @throws {Error} On invalid name or if already mounted
     */},{key:"mount",value:function mount(name){return this._mountAction(name,false);}/**
     * Unmount given filesystem
     * @param {String} name Filesystem name
     * @throws {Error} On invalid name or if already unmounted
     */},{key:"unmount",value:function unmount(name){return this._mountAction(name,true);}/**
     * Internal wrapper for mounting/unmounting
     *
     * @param {Mountpoint} mountpoint The mountpoint
     * @param {boolean} [unmount=false] If action is unmounting
     * @return {Promise<Boolean, Error>}
     */},{key:"_mountpointAction",value:function _mountpointAction(mountpoint){var _this4=this;var unmount=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var eventName=unmount?'unmounted':'mounted';var coreEventName=unmount?'unmount':'mount';return mountpoint._adapter[coreEventName]({},mountpoint).then(function(result){if(result){mountpoint.mounted=!unmount;_this4.emit(eventName,mountpoint);_this4.core.emit('osjs/fs:'+coreEventName);}return result;});}/**
     * Internal wrapper for mounting/unmounting by name
     *
     * @param {string} name Mountpoint name
     * @param {boolean} [unmount=false] If action is unmounting
     * @return {Promise<Boolean, Error>}
     */},{key:"_mountAction",value:function _mountAction(name,unmount){var _this5=this;return Promise.resolve(this.mounts.find(function(m){return m.name===name;})).then(function(found){var _=_this5.core.make('osjs/locale').translate;// FIXME: Add already mounting state
if(!found){throw new Error(_('ERR_VFS_MOUNT_NOT_FOUND',name));}else if(unmount&&!found.mounted){throw new Error(_('ERR_VFS_MOUNT_NOT_MOUNTED',name));}else if(!unmount&&found.mounted){throw new Error(_('ERR_VFS_MOUNT_ALREADY_MOUNTED',name));}return _this5._mountpointAction(found,unmount);});}/**
     * Gets the proxy for VFS methods
     * @return {Map<String, Function>} A map of VFS functions
     */},{key:"request",value:function request(){return this.proxy;}/**
     * Perform a VFS method request
     * @param {String} method VFS method name
     * @param {*} ...args Arguments
     * @return {*}
     */},{key:"_request",value:function _request(method){var _this$core;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}if(['rename','move','copy'].indexOf(method)!==-1){var src=args[0],dest=args[1];var srcMount=this.getMountpointFromPath(src);var destMount=this.getMountpointFromPath(dest);var sameAdapter=srcMount.adapter===destMount.adapter;if(!sameAdapter){return _vfs__WEBPACK_IMPORTED_MODULE_7__["readfile"](srcMount._adapter,srcMount)(src).then(function(ab){return _vfs__WEBPACK_IMPORTED_MODULE_7__["writefile"](destMount._adapter,destMount)(dest,ab);}).then(function(result){return method==='rename'?_vfs__WEBPACK_IMPORTED_MODULE_7__["unlink"](srcMount._adapter,srcMount)(src).then(function(){return result;}):result;});}}var file=args[0];var mount=this.getMountpointFromPath(file);(_this$core=this.core).emit.apply(_this$core,["osjs/vfs:".concat(method)].concat(args));return _vfs__WEBPACK_IMPORTED_MODULE_7__[method](mount._adapter,mount).apply(void 0,args);}/**
     * Creates a new mountpoint based on given properties
     * @param {object} props Properties (see Mountpoint)
     * @return {Mountpoint}
     */},{key:"createMountpoint",value:function createMountpoint(props){var name=props.adapter||this.core.config('vfs.defaultAdapter');var adapter=Object.assign({},_adapters_vfs_null__WEBPACK_IMPORTED_MODULE_9__["default"],this.adapters[name](this.core));var result=deepmerge__WEBPACK_IMPORTED_MODULE_12___default()({enabled:true,mounted:false,adapter:name,attributes:{visibility:'global',local:true,searchable:true,readOnly:false}},props);return Object.assign({_adapter:adapter,label:name,root:"".concat(result.name||name,":/")},result);}/**
     * Gets mountpoint from given path
     * @param {string|object} file The file object
     * @return {Mountpoint|null}
     */},{key:"getMountpointFromPath",value:function getMountpointFromPath(file){var path=typeof file==='string'?file:file.path;var re=/^(\w+):(.*)/;var match=String(path).replace(/\+/g,'/').match(re);var _Array$from$slice=Array.from(match||[]).slice(1),_Array$from$slice2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Array$from$slice,1),prefix=_Array$from$slice2[0];var _=this.core.make('osjs/locale').translate;if(!prefix){throw new Error(_('ERR_VFS_PATH_FORMAT_INVALID',path));}var found=this.mounts.find(function(m){return m.name===prefix;});if(!found){throw new Error(_('ERR_VFS_MOUNT_NOT_FOUND_FOR',"".concat(prefix,":")));}return found;}/**
     * Gets all mountpoints
     * @return {Object[]}
     */},{key:"getMounts",value:function getMounts(){var all=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var theme=this.core.make('osjs/theme');var icon=function icon(str){return str?typeof str==='string'?str:theme.icon(str.name):theme.icon('drive-harddisk');};return this.mounts.filter(function(m){return all||m.mounted;}).filter(function(m){return m.enabled!==false;}).map(function(m){return{attributes:Object.assign({},m.attributes),icon:icon(m.icon),name:m.name,label:m.label,root:m.root};});}}]);return Filesystem;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_8__["EventEmitter"]);/***/},/***/"./src/locale/de_DE.js":/*!*****************************!*\
  !*** ./src/locale/de_DE.js ***!
  \*****************************/ /*! exports provided: de_DE */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"de_DE",function(){return de_DE;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Julien Gomes Dias <abld@abld.info
 * @licence Simplified BSD License
 */var de_DE={// Core
ERR_REQUEST_STANDALONE:'Cannot make requests in standalone mode.',ERR_REQUEST_NOT_OK:'An error occured while performing a request: {0}',ERR_VFS_MOUNT_NOT_FOUND:'Filesystem \'{0}\' nicht gefunden',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Filesystem für \'{0}\' nicht gefunden',ERR_VFS_MOUNT_NOT_MOUNTED:'Filesystem \'{0}\' nicht gemountet',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Filesystem \'{0}\' schon gemountet',ERR_VFS_PATH_FORMAT_INVALID:'Given path \'{0}\' does not match \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Paket-Metadaten  \'{0}\' nicht gefunden',ERR_PACKAGE_LOAD:'Paket Laden \'{0}\' ist fehlgeschlagen: {1}',ERR_PACKAGE_NO_RUNTIME:'Paketlaufzeit \'{0}\' nicht gefunden',ERR_PACKAGE_NO_METADATA:'Metadaten für \'{0}\' nicht gefunden. Ist es in der Manifest?',ERR_PACKAGE_EXCEPTION:'Eine Ausnahme trat in \'{0}\' auf.',ERR_WINDOW_ID_EXISTS:'Fenster mit der ID \'{0}\' existiert schon',ERR_INVALID_LOCALE:'Invalid locale \'{0}\'',LBL_CONNECTION_LOST:'Verbindung unterbrochen',LBL_CONNECTION_LOST_MESSAGE:'Die Verbindung zu OS.js wurde unterbrochen. Wiederverbinden... ',LBL_CONNECTION_RESTORED:'Verbindung wiederhergestellt',LBL_CONNECTION_RESTORED_MESSAGE:'Die Verbindung OS.js server was restored.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'IT-Entwicklung',LBL_APP_CAT_SCIENCE:'Wissenschaft',LBL_APP_CAT_GAMES:'Spiels',LBL_APP_CAT_GRAPHICS:'Grafiken',LBL_APP_CAT_NETWORK:'Netzwerk',LBL_APP_CAT_MULTIMEDIA:'Multimedia',LBL_APP_CAT_OFFICE:'Office',LBL_APP_CAT_SYSTEM:'System',LBL_APP_CAT_UTILITIES:'Dienstprogramme',LBL_APP_CAT_OTHER:'Andere',// UI
LBL_LAUNCH_SELECT:'Applikation auswählen',LBL_LAUNCH_SELECT_MESSAGE:'Applikation für \'{0}\' auswählen',LBL_DESKTOP_SELECT_WALLPAPER:'Wallpaper auswählen',LBL_DESKTOP_SELECT_THEME:'Theme auswählen',LBL_SEARCH_TOOLTOP:'Dateisysteme ({0}) finden',LBL_SEARCH_PLACEHOLDER:'Dateisysteme finden...',LBL_SEARCH_WAIT:'Suche...',LBL_SEARCH_RESULT:'Anzeige von {0} Ergebnissen',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'Oben',LBL_LEFT:'Links',LBL_RIGHT:'Rechts',LBL_BOTTOM:'Unten',LBL_MENU:'Menü',LBL_ERROR:'Error',LBL_INFO:'Info',LBL_MESSAGE:'Message',LBL_WARNINIG:'Warnung',LBL_SUCCESS:'Success',LBL_FAILURE:'Failure',LBL_WINDOW:'Fenster',LBL_WINDOWS:'Fenster',LBL_NOTIFICATION:'Benachrichtigung',LBL_NOTIFICATIONS:'Benachrichtigungen',LBL_TRAY:'Infobereich-Eintrag',LBL_NAME:'Name',LBL_TYPE:'Typ',LBL_SIZE:'Größe',LBL_FILE:'Datei',LBL_NEW:'Neue',LBL_OPEN:'Öffnen',LBL_SAVE:'Speichern',LBL_SAVEAS:'Speichern als',LBL_OK:'OK',LBL_ABORT:'Abbrechen',LBL_CANCEL:'Beenden',LBL_CLOSE:'Schließen',LBL_QUIT:'Verlassen',LBL_YES:'Ja',LBL_NO:'Nein',LBL_GO:'Los',LBL_MKDIR:'Neues Verzeichnis erstellen',LBL_MKFILE:'Neue Datei erstellen',LBL_COPY:'Kopieren',LBL_PASTE:'Einfügen',LBL_CUT:'Ausschneiden',LBL_MOVE:'Verschieben',LBL_RENAME:'Umbenennen',LBL_DELETE:'Löschen',LBL_DOWNLOAD:'Herunterladen',LBL_REFRESH:'Aktualisieren',LBL_RELOAD:'Neu laden',LBL_HOME:'Startseite',LBL_VIEW:'Ansicht',LBL_HELP:'Hilfe',LBL_ABOUT:'Über',LBL_APPLICATION:'Anwendungsprogramme',LBL_APPLICATIONS:'Anwendungsprogrammen',LBL_KILL:'Beenden',LBL_KILL_ALL:'Beenden alle'};/***/},/***/"./src/locale/en_EN.js":/*!*****************************!*\
  !*** ./src/locale/en_EN.js ***!
  \*****************************/ /*! exports provided: en_EN */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"en_EN",function(){return en_EN;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var en_EN={// Core
ERR_REQUEST_STANDALONE:'Cannot make requests in standalone mode.',ERR_REQUEST_NOT_OK:'An error occured while performing a request: {0}',ERR_VFS_MOUNT_NOT_FOUND:'Filesystem \'{0}\' not found',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Filesystem not found for \'{0}\'',ERR_VFS_MOUNT_NOT_MOUNTED:'Filesystem \'{0}\' not mounted',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Filesystem \'{0}\' already mounted',ERR_VFS_PATH_FORMAT_INVALID:'Given path \'{0}\' does not match \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Package Metadata \'{0}\' not found',ERR_PACKAGE_LOAD:'Package Loading \'{0}\' failed: {1}',ERR_PACKAGE_NO_RUNTIME:'Package Runtime \'{0}\' not found',ERR_PACKAGE_NO_METADATA:'Metadata not found for \'{0}\'. Is it in the manifest?',ERR_PACKAGE_EXCEPTION:'An exception occured in \'{0}\'',ERR_WINDOW_ID_EXISTS:'Window with ID \'{0}\' already exists',ERR_INVALID_LOCALE:'Invalid locale \'{0}\'',LBL_CONNECTION_LOST:'Connection Lost',LBL_CONNECTION_LOST_MESSAGE:'The connection was lost. Reconnecting....',LBL_CONNECTION_RESTORED:'Connection Restored',LBL_CONNECTION_RESTORED_MESSAGE:'The connection to the server was restored.',LBL_CONNECTION_FAILED:'Connection Failed',LBL_CONNECTION_FAILED_MESSAGE:'The connection could not be established. Some features might not work properly.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'Development',LBL_APP_CAT_SCIENCE:'Science',LBL_APP_CAT_GAMES:'Games',LBL_APP_CAT_GRAPHICS:'Graphics',LBL_APP_CAT_NETWORK:'Network',LBL_APP_CAT_MULTIMEDIA:'Multimedia',LBL_APP_CAT_OFFICE:'Office',LBL_APP_CAT_SYSTEM:'System',LBL_APP_CAT_UTILITIES:'Utilities',LBL_APP_CAT_OTHER:'Other',// UI
LBL_LAUNCH_SELECT:'Select application',LBL_LAUNCH_SELECT_MESSAGE:'Select application for \'{0}\'',LBL_DESKTOP_SELECT_WALLPAPER:'Select wallpaper',LBL_DESKTOP_SELECT_THEME:'Select theme',LBL_SEARCH_TOOLTOP:'Search Filesystem ({0})',LBL_SEARCH_PLACEHOLDER:'Search filesystems...',LBL_SEARCH_WAIT:'Searching...',LBL_SEARCH_RESULT:'Showing {0} results',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'Top',LBL_LEFT:'Left',LBL_RIGHT:'Right',LBL_BOTTOM:'Bottom',LBL_MENU:'Menu',LBL_ERROR:'Error',LBL_INFO:'Info',LBL_MESSAGE:'Message',LBL_WARNINIG:'Warning',LBL_SUCCESS:'Success',LBL_FAILURE:'Failure',LBL_WINDOW:'Window',LBL_WINDOWS:'Windows',LBL_NOTIFICATION:'Notification',LBL_NOTIFICATIONS:'Notifications',LBL_TRAY:'Tray Entry',LBL_NAME:'Name',LBL_TYPE:'Type',LBL_SIZE:'Size',LBL_FILE:'File',LBL_NEW:'New',LBL_OPEN:'Open',LBL_SAVE:'Save',LBL_SAVEAS:'Save As',LBL_OK:'OK',LBL_ABORT:'Abort',LBL_CANCEL:'Cancel',LBL_CLOSE:'Close',LBL_QUIT:'Quit',LBL_YES:'Yes',LBL_NO:'No',LBL_GO:'Go',LBL_MKDIR:'Create new directory',LBL_MKFILE:'Create new file',LBL_COPY:'Copy',LBL_PASTE:'Paste',LBL_CUT:'Cut',LBL_MOVE:'Move',LBL_RENAME:'Rename',LBL_DELETE:'Delete',LBL_DOWNLOAD:'Download',LBL_REFRESH:'Refresh',LBL_RELOAD:'Reload',LBL_HOME:'Home',LBL_VIEW:'View',LBL_HELP:'Help',LBL_ABOUT:'About',LBL_APPLICATION:'Application',LBL_APPLICATIONS:'Applications',LBL_KILL:'Kill',LBL_KILL_ALL:'Kill all',LBL_MINIMIZE:'Minimize',LBL_MAXIMIZE:'Maximize',LBL_RESTORE:'Restore',LBL_RAISE:'Raise',LBL_SHADE:'Shade',LBL_UNSHADE:'Unshade',LBL_ONTOP:'On top',LBL_RESIZE:'Resize',LBL_BACK:'Back',LBL_FORWARD:'Forward',LBL_UPLOAD:'Upload',LBL_IMAGE:'Image'};/***/},/***/"./src/locale/fr_FR.js":/*!*****************************!*\
  !*** ./src/locale/fr_FR.js ***!
  \*****************************/ /*! exports provided: fr_FR */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"fr_FR",function(){return fr_FR;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Julien Gomes Dias <abld@abld.info>
 * @licence Simplified BSD License
 */var fr_FR={// Core
ERR_REQUEST_STANDALONE:'Impossible d\'effectuer des requêtes en mode autonome.',ERR_REQUEST_NOT_OK:'Une erreur s\'est produite en exécutant une requête : {0}',ERR_VFS_MOUNT_NOT_FOUND:'Système de fichier \'{0}\' absent',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Système de fichier pour \'{0}\' absent',ERR_VFS_MOUNT_NOT_MOUNTED:'Le système de fichier \'{0}\' n\'est pas encore monté',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Le système de fichier \'{0}\' est déjà monté',ERR_VFS_PATH_FORMAT_INVALID:'Le dossier \'{0}\' ne correspond pas \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Les métadonnées du paquet \'{0}\' n\'ont pas été touvées',ERR_PACKAGE_LOAD:'Le chargement du paquet \'{0}\' a échoué: {1}',ERR_PACKAGE_NO_RUNTIME:'Durée d\'exécution du paquet \'{0}\' absente',ERR_PACKAGE_NO_METADATA:'Métadonnée absentes pour \'{0}\'. Sont-elles dans le manifeste ?',ERR_PACKAGE_EXCEPTION:'Une exception s\'est produite dans \'{0}\'',ERR_WINDOW_ID_EXISTS:'La fénêtre avec l\'identifiant \'{0}\' existe déjà',ERR_INVALID_LOCALE:'Paramètre de langue invalide \'{0}\'',LBL_CONNECTION_LOST:'Connexion perdue',LBL_CONNECTION_LOST_MESSAGE:'La connexion a été perdue. Reconnexion...',LBL_CONNECTION_RESTORED:'Connexion Restaurée',LBL_CONNECTION_RESTORED_MESSAGE:'La connexion a été restaurée.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'Développement',LBL_APP_CAT_SCIENCE:'Science',LBL_APP_CAT_GAMES:'Jeux',LBL_APP_CAT_GRAPHICS:'Graphisme',LBL_APP_CAT_NETWORK:'Réseau',LBL_APP_CAT_MULTIMEDIA:'Multimédia',LBL_APP_CAT_OFFICE:'Bureautique',LBL_APP_CAT_SYSTEM:'Système',LBL_APP_CAT_UTILITIES:'Utilitaires',LBL_APP_CAT_OTHER:'Autre',// UI
LBL_LAUNCH_SELECT:'Sélectionner l\'application',LBL_LAUNCH_SELECT_MESSAGE:'Sélectionner l\'application pour \'{0}\'',LBL_DESKTOP_SELECT_WALLPAPER:'Sélectionner le fond d\'écran',LBL_DESKTOP_SELECT_THEME:'Sélectionner le thème',LBL_SEARCH_TOOLTOP:'Recherche d\'un système de fichier ({0})',LBL_SEARCH_PLACEHOLDER:'Recherche des systèmes de fichiers...',LBL_SEARCH_WAIT:'Recherche...',LBL_SEARCH_RESULT:'Affichage des résultats {0}',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'En Haut',LBL_LEFT:'À Gauche',LBL_RIGHT:'À Droite',LBL_BOTTOM:'En Bas',LBL_MENU:'Menu',LBL_ERROR:'Erreur',LBL_INFO:'Info',LBL_MESSAGE:'Message',LBL_WARNINIG:'Attention',LBL_SUCCESS:'Succés',LBL_FAILURE:'Échec',LBL_WINDOW:'Fenêtre',LBL_WINDOWS:'Fenêtres',LBL_NOTIFICATION:'Notification',LBL_NOTIFICATIONS:'Notifications',LBL_TRAY:'Accès au plateau',LBL_NAME:'Nom',LBL_TYPE:'Type',LBL_SIZE:'Taille',LBL_FILE:'Fichier',LBL_NEW:'Nouveau',LBL_OPEN:'Ouvrir',LBL_SAVE:'Sauvegarder',LBL_SAVEAS:'Sauvegarder comme',LBL_OK:'OK',LBL_ABORT:'Abandonner',LBL_CANCEL:'Annuler',LBL_CLOSE:'Fermer',LBL_QUIT:'Quitter',LBL_YES:'Oui',LBL_NO:'Non',LBL_GO:'C\'est parti !',LBL_MKDIR:'Créer nouveau dossier',LBL_MKFILE:'Créer nouveau fichier',LBL_COPY:'Copier',LBL_PASTE:'Coller',LBL_CUT:'Couper',LBL_MOVE:'Déplacer',LBL_RENAME:'Renommer',LBL_DELETE:'Supprimer',LBL_DOWNLOAD:'Télécharger',LBL_REFRESH:'Rafraichir',LBL_RELOAD:'Recharger',LBL_HOME:'Accueil',LBL_VIEW:'Aperçu',LBL_HELP:'Aide',LBL_ABOUT:'À propos',LBL_APPLICATION:'Application',LBL_APPLICATIONS:'Applications',LBL_KILL:'Tuer',LBL_KILL_ALL:'Tuer tout'};/***/},/***/"./src/locale/index.js":/*!*****************************!*\
  !*** ./src/locale/index.js ***!
  \*****************************/ /*! exports provided: en_EN, fr_FR, nb_NO, sl_SI, vi_VN, de_DE, zh_CN */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _en_EN__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./en_EN */"./src/locale/en_EN.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"en_EN",function(){return _en_EN__WEBPACK_IMPORTED_MODULE_0__["en_EN"];});/* harmony import */var _fr_FR__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! ./fr_FR */"./src/locale/fr_FR.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"fr_FR",function(){return _fr_FR__WEBPACK_IMPORTED_MODULE_1__["fr_FR"];});/* harmony import */var _nb_NO__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./nb_NO */"./src/locale/nb_NO.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"nb_NO",function(){return _nb_NO__WEBPACK_IMPORTED_MODULE_2__["nb_NO"];});/* harmony import */var _sl_SI__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./sl_SI */"./src/locale/sl_SI.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"sl_SI",function(){return _sl_SI__WEBPACK_IMPORTED_MODULE_3__["sl_SI"];});/* harmony import */var _vi_VN__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./vi_VN */"./src/locale/vi_VN.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"vi_VN",function(){return _vi_VN__WEBPACK_IMPORTED_MODULE_4__["vi_VN"];});/* harmony import */var _de_DE__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ./de_DE */"./src/locale/de_DE.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"de_DE",function(){return _de_DE__WEBPACK_IMPORTED_MODULE_5__["de_DE"];});/* harmony import */var _zh_CN__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./zh_CN */"./src/locale/zh_CN.js");/* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__,"zh_CN",function(){return _zh_CN__WEBPACK_IMPORTED_MODULE_6__["zh_CN"];});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /***/},/***/"./src/locale/nb_NO.js":/*!*****************************!*\
  !*** ./src/locale/nb_NO.js ***!
  \*****************************/ /*! exports provided: nb_NO */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"nb_NO",function(){return nb_NO;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var nb_NO={// Core
ERR_REQUEST_STANDALONE:'Kan ikke gjøre spørringer i standalone modus.',ERR_REQUEST_NOT_OK:'En feil oppstod under spørring: {0}',ERR_VFS_MOUNT_NOT_FOUND:'Filsystem \'{0}\' ikke funnet',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Filsystem ikke funnet for \'{0}\'',ERR_VFS_MOUNT_NOT_MOUNTED:'Filsystem \'{0}\' ikke montert',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Filesystem \'{0}\' allerede montert',ERR_VFS_PATH_FORMAT_INVALID:'Angitt sti \'{0}\' tilfredstiller ikke format \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Pakke Metadata \'{0}\' ikke funnet',ERR_PACKAGE_LOAD:'Pakke Lasting \'{0}\' feilet: {1}',ERR_PACKAGE_NO_RUNTIME:'Pakke Runtime \'{0}\' ikke funnet',ERR_PACKAGE_NO_METADATA:'Metadata ikke funnet for \'{0}\'. Er den i manifestet?',ERR_PACKAGE_EXCEPTION:'En unntaksfeil oppstod i \'{0}\'',ERR_WINDOW_ID_EXISTS:'Vindu med ID \'{0}\' eksisterer allerede',ERR_INVALID_LOCALE:'Ugyldig lokalisering \'{0}\'',LBL_CONNECTION_LOST:'Tilkobling tapt',LBL_CONNECTION_LOST_MESSAGE:'Tilkobling til OS.js var tapt. Kobler til på nytt....',LBL_CONNECTION_RESTORED:'Tilkobling gjenopprettet',LBL_CONNECTION_RESTORED_MESSAGE:'Tilkobling til OS.js var gjenopprettet.',LBL_CONNECTION_FAILED:'Tilkobling feilet',LBL_CONNECTION_FAILED_MESSAGE:'Tilkobling til OS.js var ikke vellykket. Noen egenskaper er utilgjenglig.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'Utvikling',LBL_APP_CAT_SCIENCE:'Vitenskap',LBL_APP_CAT_GAMES:'Spill',LBL_APP_CAT_GRAPHICS:'Grafikk',LBL_APP_CAT_NETWORK:'Nettverk',LBL_APP_CAT_MULTIMEDIA:'Multimedia',LBL_APP_CAT_OFFICE:'Kontor',LBL_APP_CAT_SYSTEM:'System',LBL_APP_CAT_UTILITIES:'Verktøy',LBL_APP_CAT_OTHER:'Andre',// UI
LBL_LAUNCH_SELECT:'Velg applikasjon',LBL_LAUNCH_SELECT_MESSAGE:'Velg applikasjon for \'{0}\'',LBL_DESKTOP_SELECT_WALLPAPER:'Velg bakgrunnsbilde',LBL_DESKTOP_SELECT_THEME:'Velg tema',LBL_SEARCH_TOOLTOP:'Søk i filsystemer ({0})',LBL_SEARCH_PLACEHOLDER:'Søker filsystemer...',LBL_SEARCH_WAIT:'Søker...',LBL_SEARCH_RESULT:'Viser {0} resultater',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'Topp',LBL_LEFT:'Venstre',LBL_RIGHT:'Høyre',LBL_BOTTOM:'Bunn',LBL_MENU:'Meny',LBL_ERROR:'Feil',LBL_INFO:'Info',LBL_MESSAGE:'Melding',LBL_WARNINIG:'Advarsel',LBL_SUCCESS:'Velykket',LBL_FAILURE:'Svikt',LBL_WINDOW:'Vindu',LBL_WINDOWS:'Vinduer',LBL_NOTIFICATION:'Notifikasjon',LBL_NOTIFICATIONS:'Notifikasjoner',LBL_TRAY:'Tray Oppføring',LBL_NAME:'Navn',LBL_TYPE:'Type',LBL_SIZE:'Størrelse',LBL_FILE:'Fil',LBL_NEW:'Ny',LBL_OPEN:'Åpne',LBL_SAVE:'Lagre',LBL_SAVEAS:'Lagre Som',LBL_OK:'OK',LBL_ABORT:'Abort',LBL_CANCEL:'Avbryt',LBL_CLOSE:'Lukk',LBL_QUIT:'Slutt',LBL_YES:'Ja',LBL_NO:'Nei',LBL_GO:'Gå',LBL_MKDIR:'Lag ny mappe',LBL_MKFILE:'Lag ny fil',LBL_COPY:'Kopier',LBL_PASTE:'Lim inn',LBL_CUT:'Kutt',LBL_MOVE:'Flytt',LBL_RENAME:'Navngi',LBL_DELETE:'Slett',LBL_DOWNLOAD:'Last ned',LBL_REFRESH:'Gjenoppfrisk',LBL_RELOAD:'Last på nytt',LBL_HOME:'Hjem',LBL_VIEW:'Visning',LBL_HELP:'Hjelp',LBL_ABOUT:'Om',LBL_APPLICATION:'Applikasjon',LBL_APPLICATIONS:'Applikasjoner',LBL_KILL:'Drep',LBL_KILL_ALL:'Drep alle',LBL_MINIMIZE:'Minimisèr',LBL_MAXIMIZE:'Maksimisèr',LBL_RESTORE:'Gjenopprett',LBL_RAISE:'Løft',LBL_SHADE:'Rull opp',LBL_UNSHADE:'Rull ned',LBL_ONTOP:'Alltid øverst',LBL_RESIZE:'Endre størrelse',LBL_BACK:'Tilbake',LBL_FORWARD:'Frem',LBL_UPLOAD:'Last opp',LBL_IMAGE:'Bilde'};/***/},/***/"./src/locale/sl_SI.js":/*!*****************************!*\
  !*** ./src/locale/sl_SI.js ***!
  \*****************************/ /*! exports provided: sl_SI */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"sl_SI",function(){return sl_SI;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Filip Š <projects@filips.com>
 * @licence Simplified BSD License
 */var sl_SI={// Core
ERR_REQUEST_STANDALONE:'Zahteve v samostojnem načinu niso mogoče.',ERR_REQUEST_NOT_OK:'Pri zahtevi je prišlo do napake: {0}',ERR_VFS_MOUNT_NOT_FOUND:'Datotečni sistem \'{0}\' ni najden',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Datotečni sistem ni najden \'{0}\'',ERR_VFS_MOUNT_NOT_MOUNTED:'Datotečni sistem \'{0}\' ni nameščen',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Datotečni sistem \'{0}\' že nameščen',ERR_VFS_PATH_FORMAT_INVALID:'Podana pot \'{0}\' se ne ujema z \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Metapodatki paketa \'{0}\' niso najdeni',ERR_PACKAGE_LOAD:'Pri nalaganju pageta \'{0}\' je prišlo do napake: {1}',ERR_PACKAGE_NO_RUNTIME:'Koda paketa \'{0}\' ni najdena',ERR_PACKAGE_NO_METADATA:'Metapodatki \'{0}\' niso najdeni. Ali so v datoteki manifest?',ERR_PACKAGE_EXCEPTION:'Sprožena je bila izjema v \'{0}\'',ERR_WINDOW_ID_EXISTS:'Okno z ID-jem \'{0}\' že obstaja',ERR_INVALID_LOCALE:'Neveljaven prevod \'{0}\'',LBL_CONNECTION_LOST:'Izguba povezave',LBL_CONNECTION_LOST_MESSAGE:'Povezava do strežnika je bila izgubljena. Ponovno povezovanje ...',LBL_CONNECTION_RESTORED:'Vzpostavitev povezave',LBL_CONNECTION_RESTORED_MESSAGE:'Povezava do strežnika je bila ponovno vzpostavljena.',LBL_CONNECTION_FAILED:'Povezava ni uspela',LBL_CONNECTION_FAILED_MESSAGE:'Povezave z OS.js ni bilo mogoče vzpostaviti. Nekatere funkcije morda ne bodo delovale pravilno.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'Razvoj',LBL_APP_CAT_SCIENCE:'Znanost',LBL_APP_CAT_GAMES:'Igre',LBL_APP_CAT_GRAPHICS:'Grafika',LBL_APP_CAT_NETWORK:'Omrežje',LBL_APP_CAT_MULTIMEDIA:'Multimedija',LBL_APP_CAT_OFFICE:'Pisarna',LBL_APP_CAT_SYSTEM:'Sistem',LBL_APP_CAT_UTILITIES:'Orodja',LBL_APP_CAT_OTHER:'Drugo',// UI
LBL_LAUNCH_SELECT:'Izberite aplikacijo',LBL_LAUNCH_SELECT_MESSAGE:'Izberite aplikacijo za \'{0}\'',LBL_DESKTOP_SELECT_WALLPAPER:'Izberite ozadje',LBL_DESKTOP_SELECT_THEME:'Izberite temo',LBL_SEARCH_TOOLTOP:'Išči datotečni sistem ({0})',LBL_SEARCH_PLACEHOLDER:'Iskanje po datotečnih sistemih ...',LBL_SEARCH_WAIT:'Iskanje ...',LBL_SEARCH_RESULT:'Prikaz {0} rezultatov',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'Zgoraj',LBL_LEFT:'Levo',LBL_RIGHT:'Desno',LBL_BOTTOM:'Spodaj',LBL_MENU:'Meni',LBL_ERROR:'Napaka',LBL_INFO:'Informacije',LBL_MESSAGE:'Sporočilo',LBL_WARNINIG:'Opozorilo',LBL_SUCCESS:'Uspeh',LBL_FAILURE:'Neuspeh',LBL_WINDOW:'Okno',LBL_WINDOWS:'Okna',LBL_NOTIFICATION:'Obvestilo',LBL_NOTIFICATIONS:'Obvestila',LBL_TRAY:'Element vrstice',LBL_NAME:'Ime',LBL_TYPE:'Vrsta',LBL_SIZE:'Velikost',LBL_FILE:'Datoteka',LBL_NEW:'Novo',LBL_OPEN:'Odpri',LBL_SAVE:'Shrani',LBL_SAVEAS:'Shrani kot',LBL_OK:'V redu',LBL_ABORT:'Prekini',LBL_CANCEL:'Prekliči',LBL_CLOSE:'Zapri',LBL_QUIT:'Izklopi',LBL_YES:'Da',LBL_NO:'Ne',LBL_GO:'Pojdi',LBL_MKDIR:'Ustvari novo mapo',LBL_MKFILE:'Ustvari novo datoteko',LBL_COPY:'Kopiraj',LBL_PASTE:'Prilepi',LBL_CUT:'Izreži',LBL_MOVE:'Premakni',LBL_RENAME:'Preimenuj',LBL_DELETE:'Izbriši',LBL_DOWNLOAD:'Prenesi',LBL_REFRESH:'Osveži',LBL_RELOAD:'Osveži',LBL_HOME:'Domov',LBL_VIEW:'Pogled',LBL_HELP:'Pomoč',LBL_ABOUT:'O programu',LBL_APPLICATION:'Aplikacija',LBL_APPLICATIONS:'Aplikacije',LBL_KILL:'Končaj',LBL_KILL_ALL:'Končaj vse',LBL_MINIMIZE:'Pomanjšaj',LBL_MAXIMIZE:'Povečaj',LBL_RESTORE:'Obnovi',LBL_RAISE:'Dvigni',LBL_SHADE:'Zasenči',LBL_UNSHADE:'Odsenči',LBL_ONTOP:'Na vrhu',LBL_RESIZE:'Spremeni velikost',LBL_BACK:'Nazaj',LBL_FORWARD:'Naprej',LBL_UPLOAD:'Naloži',LBL_IMAGE:'Slika'};/***/},/***/"./src/locale/vi_VN.js":/*!*****************************!*\
  !*** ./src/locale/vi_VN.js ***!
  \*****************************/ /*! exports provided: vi_VN */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"vi_VN",function(){return vi_VN;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Nguyễn Anh Khoa <khoaakt@gmail.com>
 * @licence Simplified BSD License
 */var vi_VN={// Core
ERR_REQUEST_STANDALONE:'Không thể gửi yêu cầu ở chế độ độc lập.',ERR_REQUEST_NOT_OK:'Đã xảy ra lỗi khi thực hiện yêu cầu: {0}',ERR_VFS_MOUNT_NOT_FOUND:'Không tìm thấy hệ thống tập tin \'{0}\'',ERR_VFS_MOUNT_NOT_FOUND_FOR:'Không tìm thấy hệ thống tập tin cho \'{0}\'',ERR_VFS_MOUNT_NOT_MOUNTED:'Hệ thống tập tin \'{0}\' không được gắn kết',ERR_VFS_MOUNT_ALREADY_MOUNTED:'Hệ thống tập tin \'{0}\' đã được gắn kết',ERR_VFS_PATH_FORMAT_INVALID:'Định dạng đường dẫn \'{0}\' không khớp với \'name:/path\'',ERR_PACKAGE_NOT_FOUND:'Không tìm thấy siêu dữ liệu của gói \'{0}\'',ERR_PACKAGE_LOAD:'Tải gói \'{0}\' thất bại: {1}',ERR_PACKAGE_NO_RUNTIME:'Không tìm thấy Runtime của gói \'{0}\'',ERR_PACKAGE_NO_METADATA:'Không tìm thấy siêu dữ liệu cho \'{0}\'. Bạn có chắc nó đã được báo cáo trong manifest không?',ERR_PACKAGE_EXCEPTION:'Đã xảy ra lỗi trong \'{0}\'',ERR_WINDOW_ID_EXISTS:'Cửa sổ với ID \'{0}\' đã tồn tại',ERR_INVALID_LOCALE:'Ngôn ngữ không hợp lệ \'{0}\'',LBL_CONNECTION_LOST:'Mất kết nối',LBL_CONNECTION_LOST_MESSAGE:'Kết nối với OS.js đã bị mất. Đang kết nối lại....',LBL_CONNECTION_RESTORED:'Đã khôi phục kết nối',LBL_CONNECTION_RESTORED_MESSAGE:'Kết nối với máy chủ OS.js đã được khôi phục.',LBL_CONNECTION_FAILED:'Kết nối thất bại',LBL_CONNECTION_FAILED_MESSAGE:'Không thể kết nối đến máy chủ OS.js. Một số tính năng có thể không hoạt động ổn định.',// Application categories
LBL_APP_CAT_DEVELOPMENT:'Phát triển',LBL_APP_CAT_SCIENCE:'Khoa học',LBL_APP_CAT_GAMES:'Trò chơi',LBL_APP_CAT_GRAPHICS:'Đồ họa',LBL_APP_CAT_NETWORK:'Mạng',LBL_APP_CAT_MULTIMEDIA:'Đa phương tiện',LBL_APP_CAT_OFFICE:'Văn phòng',LBL_APP_CAT_SYSTEM:'Hệ thống',LBL_APP_CAT_UTILITIES:'Tiện ích',LBL_APP_CAT_OTHER:'Ứng dụng khác',// UI
LBL_LAUNCH_SELECT:'Chọn ứng dụng',LBL_LAUNCH_SELECT_MESSAGE:'Chọn ứng dụng để mở tập tin \'{0}\'',LBL_DESKTOP_SELECT_WALLPAPER:'Thay đổi hình nền',LBL_DESKTOP_SELECT_THEME:'Thay đổi chủ đề',LBL_SEARCH_TOOLTOP:'Tìm kiếm dữ liệu ({0})',LBL_SEARCH_PLACEHOLDER:'Tìm kiếm...',LBL_SEARCH_WAIT:'Đang tìm kiếm...',LBL_SEARCH_RESULT:'Đang hiển thị {0} kết quả',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KiB',LBL_FS_MIB:'MiB',LBL_FS_GIB:'GiB',// Generic
LBL_TOP:'Phía trên',LBL_LEFT:'Trái',LBL_RIGHT:'Phải',LBL_BOTTOM:'Phía dưới',LBL_MENU:'Menu',LBL_ERROR:'Lỗi',LBL_INFO:'Thông tin',LBL_MESSAGE:'Thông báo',LBL_WARNINIG:'Cảnh báo',LBL_SUCCESS:'Thành công',LBL_FAILURE:'Thất bại',LBL_WINDOW:'Cửa sổ',LBL_WINDOWS:'Các cửa sổ',LBL_NOTIFICATION:'Thông báo',LBL_NOTIFICATIONS:'Các thông báo',LBL_TRAY:'Mục khay hệ thống',LBL_NAME:'Tên',LBL_TYPE:'Kiểu',LBL_SIZE:'Kích thước',LBL_FILE:'Tập tin',LBL_NEW:'Mới',LBL_OPEN:'Mở',LBL_SAVE:'Lưu',LBL_SAVEAS:'Lưu như',LBL_OK:'OK',LBL_ABORT:'Hủy thao tác',LBL_CANCEL:'Hủy bỏ',LBL_CLOSE:'Đóng',LBL_QUIT:'Thoát',LBL_YES:'Có',LBL_NO:'Không',LBL_GO:'Đi',LBL_MKDIR:'Tạo thư mục mới',LBL_MKFILE:'Tạo tệp mới',LBL_COPY:'Sao chép',LBL_PASTE:'Dán',LBL_CUT:'Cắt',LBL_MOVE:'Di chuyển',LBL_RENAME:'Đổi tên',LBL_DELETE:'Xóa',LBL_DOWNLOAD:'Tải về',LBL_REFRESH:'Làm mới',LBL_RELOAD:'Tải lại',LBL_HOME:'Trang chủ',LBL_VIEW:'Xem',LBL_HELP:'Hướng dẫn',LBL_ABOUT:'Thông tin',LBL_APPLICATION:'Ứng dụng',LBL_APPLICATIONS:'Các ứng dụng',LBL_KILL:'Đóng',LBL_KILL_ALL:'Đóng tất cả',LBL_MINIMIZE:'Thu nhỏ',LBL_MAXIMIZE:'Tối đa',LBL_RESTORE:'Phục hồi',LBL_RAISE:'Nâng lên',LBL_SHADE:'Làm mở',LBL_UNSHADE:'Bỏ làm mờ',LBL_ONTOP:'Ở trên cùng',LBL_RESIZE:'Thay đổi kích thước',LBL_BACK:'Lùi',LBL_FORWARD:'Tiến',LBL_UPLOAD:'Tải lên',LBL_IMAGE:'Ảnh'};/***/},/***/"./src/locale/zh_CN.js":/*!*****************************!*\
  !*** ./src/locale/zh_CN.js ***!
  \*****************************/ /*! exports provided: zh_CN */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"zh_CN",function(){return zh_CN;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  lijun <lijun_ay@126.com>
 * @licence Simplified BSD License
 */var zh_CN={// Core
ERR_REQUEST_STANDALONE:'无法在独立模式下发出请求。',ERR_REQUEST_NOT_OK:'执行请求时发生错误：{0}',ERR_VFS_MOUNT_NOT_FOUND:'找不到文件系统 \'{0}\' ',ERR_VFS_MOUNT_NOT_FOUND_FOR:'找不到\'{0}\'的文件系统',ERR_VFS_MOUNT_NOT_MOUNTED:'文件系统 \'{0}\' 未挂载',ERR_VFS_MOUNT_ALREADY_MOUNTED:'文件系统 \'{0}\' 已挂载',ERR_VFS_PATH_FORMAT_INVALID:'给定路径\'{0}\'与\'name:/path\'不匹配',ERR_PACKAGE_NOT_FOUND:'未找到包的元数据\'{0}\'',ERR_PACKAGE_LOAD:'加载包 \'{0}\' 失败： {1}',ERR_PACKAGE_NO_RUNTIME:'未找到运行包 \'{0}\' ',ERR_PACKAGE_NO_METADATA:'找不到 \'{0}\' 的元数据。它在清单（manifest）中吗？',ERR_PACKAGE_EXCEPTION:'\'{0}\'发生异常',ERR_WINDOW_ID_EXISTS:'ID为\'{0}\'的窗口已存在',ERR_INVALID_LOCALE:'无效的区域设置 \'{0}\'',LBL_CONNECTION_LOST:'连接丢失',LBL_CONNECTION_LOST_MESSAGE:'与OS.js的连接丢失了。重新连接....',LBL_CONNECTION_RESTORED:'连接已恢复',LBL_CONNECTION_RESTORED_MESSAGE:'已恢复与OS.js服务器的连接。',LBL_CONNECTION_FAILED:'连接失败',LBL_CONNECTION_FAILED_MESSAGE:'无法建立与OS.js的连接。 某些功能可能无法正常工作。',// Application categories
LBL_APP_CAT_DEVELOPMENT:'开发',LBL_APP_CAT_SCIENCE:'科学',LBL_APP_CAT_GAMES:'游戏',LBL_APP_CAT_GRAPHICS:'图像',LBL_APP_CAT_NETWORK:'网络',LBL_APP_CAT_MULTIMEDIA:'媒体',LBL_APP_CAT_OFFICE:'办公',LBL_APP_CAT_SYSTEM:'系统',LBL_APP_CAT_UTILITIES:'工具',LBL_APP_CAT_OTHER:'其他',// UI
LBL_LAUNCH_SELECT:'选择应用程序',LBL_LAUNCH_SELECT_MESSAGE:'选择\'{0}\'的应用程序',LBL_DESKTOP_SELECT_WALLPAPER:'选择壁纸',LBL_DESKTOP_SELECT_THEME:'选择主题',LBL_SEARCH_TOOLTOP:'搜索文件系统 ({0})',LBL_SEARCH_PLACEHOLDER:'搜索文件系统...',LBL_SEARCH_WAIT:'搜索...',LBL_SEARCH_RESULT:'显示{0}个结果',// FS
LBL_FS_B:'B',LBL_FS_M:'M',LBL_FS_G:'G',LBL_FS_KIB:'KB',LBL_FS_MIB:'MB',LBL_FS_GIB:'GB',// Generic
LBL_TOP:'上',LBL_LEFT:'左',LBL_RIGHT:'右',LBL_BOTTOM:'下',LBL_MENU:'菜单',LBL_ERROR:'错误',LBL_INFO:'信息',LBL_MESSAGE:'消息',LBL_WARNINIG:'警告',LBL_SUCCESS:'成功',LBL_FAILURE:'失败',LBL_WINDOW:'窗口',LBL_WINDOWS:'窗口',LBL_NOTIFICATION:'通知',LBL_NOTIFICATIONS:'通知',LBL_TRAY:'托盘',LBL_NAME:'名称',LBL_TYPE:'类型',LBL_SIZE:'大小',LBL_FILE:'文件',LBL_NEW:'新建',LBL_OPEN:'打开',LBL_SAVE:'保存',LBL_SAVEAS:'另存为',LBL_OK:'确定',LBL_ABORT:'中止',LBL_CANCEL:'取消',LBL_CLOSE:'关闭',LBL_QUIT:'退出',LBL_YES:'是',LBL_NO:'否',LBL_GO:'进行',LBL_MKDIR:'创建新目录',LBL_MKFILE:'创建新文件',LBL_COPY:'复制',LBL_PASTE:'粘贴',LBL_CUT:'剪切',LBL_MOVE:'移动',LBL_RENAME:'重命名',LBL_DELETE:'删除',LBL_DOWNLOAD:'下载',LBL_REFRESH:'刷新',LBL_RELOAD:'刷新',LBL_HOME:'主页',LBL_VIEW:'视图',LBL_HELP:'帮助',LBL_ABOUT:'关于',LBL_APPLICATION:'应用程序',LBL_APPLICATIONS:'应用程序',LBL_KILL:'杀死',LBL_KILL_ALL:'全部杀死',LBL_MINIMIZE:'最小化',LBL_MAXIMIZE:'最大化',LBL_RESTORE:'恢复',LBL_RAISE:'上浮',LBL_SHADE:'置后',LBL_UNSHADE:'置前',LBL_ONTOP:'顶端',LBL_RESIZE:'调整',LBL_BACK:'后退',LBL_FORWARD:'前进',LBL_UPLOAD:'上传',LBL_IMAGE:'图像'};/***/},/***/"./src/login-ui.js":/*!*************************!*\
  !*** ./src/login-ui.js ***!
  \*************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var hyperapp__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! hyperapp */"./node_modules/hyperapp/src/index.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_2__);var createAttributes=function createAttributes(props,field,disabled){disabled=disabled?'disabled':undefined;if(field.tagName==='input'){if(field.attributes.type!=='submit'){return Object.assign({},{autocapitalize:'off',autocomplete:'new-'+field.attributes.name,disabled:disabled,oncreate:function oncreate(el){return el.value=props[field.attributes.name]||field.value||'';}},field.attributes);}}return Object.assign({disabled:disabled},field.attributes);};var createFields=function createFields(props,fields,disabled){var children=function children(f){if(f.tagName==='select'&&f.choices){return f.choices.map(function(c){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('option',{current:c.current?'current':undefined,value:c.value},c.label);});}return[];};return fields.map(function(f){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-field osjs-login-field-'+f.tagName},Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])(f.tagName,createAttributes(props,f,disabled),children(f)));});};var createView=function createView(options){var _options$logo=options.logo,src=_options$logo.src,position=_options$logo.position;var logo=function logo(){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-logo','data-position':position,style:{backgroundImage:"url('".concat(src,"')")}});};var fields=function fields(state){var result=createFields(state,options.fields,state.loading);if(src&&position==='bottom'){result.push(logo());}if(options.stamp){result.push(Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-stamp'},options.stamp));}return result;};return function(state,actions){var header=[];if(options.title){header.push(Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-header'},Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('span',{},options.title)));}if(src&&['top','middle'].indexOf(position)!==-1){var m=position==='top'?'unshift':'push';header[m](logo());}var createSide=function createSide(side){return position===side?Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{'data-position':position},logo()):null;};var left=function left(){return createSide('left');};var right=function right(){return createSide('right');};var middle=function middle(){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-content'},children);};var formFields=fields(state);var children=[].concat(header,[Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login-error',style:{display:state.error?'block':'none'}},Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('span',{},state.error)),Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('form',{loading:false,method:'post',action:'#',autocomplete:'off',onsubmit:actions.submit},formFields)]);return Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["h"])('div',{class:'osjs-login',id:options.id,style:{display:state.hidden?'none':undefined}},[left(),middle(),right()].filter(function(el){return!!el;}));};};var create=function create(options,login,startHidden,$container){var ee=new _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]('LoginUI');var view=createView(options);var a=Object(hyperapp__WEBPACK_IMPORTED_MODULE_1__["app"])(Object.assign({hidden:startHidden},login),{setLoading:function setLoading(loading){return{loading:loading};},setError:function setError(error){return{error:error,hidden:false};},submit:function submit(ev){return function(state){ev.preventDefault();if(state.loading){return;}var values=Array.from(ev.target.elements).filter(function(el){return el.type!=='submit';}).reduce(function(o,el){return Object.assign(o,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},el.name,el.value));},{});ee.emit('login:post',values);};}},view,$container);ee.on('login:start',function(){return a.setLoading(true);});ee.on('login:stop',function(){return a.setLoading(false);});ee.on('login:error',function(err){return a.setError(err);});return ee;};/* harmony default export */__webpack_exports__["default"]=create;/***/},/***/"./src/login.js":/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Login;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _login_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./login-ui */"./src/login-ui.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Login UI
 *
 * @desc Handles the Login UI and its events
 */var Login=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Login,_EventEmitter);/**
   * Create authentication handler
   *
   * @param {Core} core Core reference
   * @param {Object} [options] Options
   * @param {String} [options.title] Title
   * @param {Array} [options.fields] Fields
   */function Login(core,options){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Login);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Login).call(this,'Login'));_this.$container=null;_this.core=core;_this.options=Object.assign({id:'osjs-login',title:'Welcome to OS.js',stamp:core.config('version'),logo:{position:'top',src:null},fields:[{tagName:'input',attributes:{name:'username',type:'text',placeholder:'Username'}},{tagName:'input',attributes:{name:'password',type:'password',placeholder:'Password'}},{tagName:'input',attributes:{type:'submit',value:'Login'}}]},options);return _this;}/**
   * Initializes the UI
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Login,[{key:"init",value:function init(startHidden){this.$container=document.createElement('div');this.$container.id=this.options.id;this.$container.className='osjs-login-base';this.core.$root.classList.add('login');this.core.$root.appendChild(this.$container);this.render(startHidden);}/**
     * Destroys the UI
     */},{key:"destroy",value:function destroy(){this.core.$root.classList.remove('login');if(this.$container){this.$container.remove();}}/**
     * Renders the UI
     */},{key:"render",value:function render(startHidden){var _this2=this;var login=this.core.config('auth.login',{});var ui=Object(_login_ui__WEBPACK_IMPORTED_MODULE_6__["default"])(this.options,login,startHidden,this.$container);ui.on('login:post',function(values){return _this2.emit('login:post',values);});this.on('login:start',function(){return ui.emit('login:start');});this.on('login:stop',function(){return ui.emit('login:stop');});this.on('login:error',function(err){return ui.emit('login:error',err);});}}]);return Login;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]);/***/},/***/"./src/notification.js":/*!*****************************!*\
  !*** ./src/notification.js ***!
  \*****************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Notification;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var hyperapp__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! hyperapp */"./node_modules/hyperapp/src/index.js");/* harmony import */var _utils_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./utils/dom */"./src/utils/dom.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Notification
 *
 * @desc Class that creates a notification
 */var Notification=/*#__PURE__*/function(){/**
   * Create notification
   *
   * @param {Core} core Core reference
   * @param {Node} root Root DOM element
   * @param {object} options Options
   * @param {string} options.title Title
   * @param {string} options.message Message
   * @param {string} [options.sound=message] Sound to play
   * @param {string} [options.icon] Icon source
   * @param {number} [options.timeout=5000] Timeout value (0=infinite)
   */function Notification(core,root){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Notification);var defaultLabel=core.make('osjs/locale').translate('LBL_NOTIFICATION');/**
     * Core instance reference
     * @type {Core}
     */this.core=core;/**
     * Root node reference
     * @type {Node}
     */this.$root=root;/**
     * Notification DOM node
     * @type {Node}
     */this.$element=document.createElement('div');/**
     * The notification destruction state
     * @type {Boolean}
     */this.destroyed=false;/**
     * Options
     * @type {Object}
     */this.options=Object.assign({icon:null,title:defaultLabel,message:defaultLabel,timeout:5000,native:core.config('notifications.native',false),sound:'message'},options);this.core.emit('osjs/notification:create',this);}/**
   * Destroy notification
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Notification,[{key:"destroy",value:function destroy(){if(this.destroyed){return;}this.destroyed=true;this.core.emit('osjs/notification:destroy',this);this.$element.remove();this.$element=null;this.$root=null;}/**
     * Render notification
     */},{key:"render",value:function render(){var _this=this;var onclick=function onclick(){return _this.destroy();};var renderCustom=function renderCustom(){var view=function view(state){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_2__["h"])('div',{class:'osjs-notification-wrapper','data-has-icon':!!state.icon,style:{backgroundImage:state.icon?"url(".concat(state.icon,")"):undefined}},[Object(hyperapp__WEBPACK_IMPORTED_MODULE_2__["h"])('div',{class:'osjs-notification-title'},state.title),Object(hyperapp__WEBPACK_IMPORTED_MODULE_2__["h"])('div',{class:'osjs-notification-message'},state.message)]);};_this.$element.classList.add('osjs-notification');if(_this.options.timeout){setTimeout(function(){return _this.destroy();},_this.options.timeout);}_this.$element.addEventListener('click',onclick);_this.$root.appendChild(_this.$element);Object(hyperapp__WEBPACK_IMPORTED_MODULE_2__["app"])(_this.options,{},view,_this.$element);};if(this.options.native){Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__["createNativeNotification"])(this.options,onclick).catch(function(err){console.warn('Error on native notification',err);renderCustom();});}else{renderCustom();if(this.options.sound){this.core.make('osjs/sounds').play(this.options.sound);}}}}]);return Notification;}();/***/},/***/"./src/notifications.js":/*!******************************!*\
  !*** ./src/notifications.js ***!
  \******************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Notifications;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _notification__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./notification */"./src/notification.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Handles Notifications
 */var Notifications=/*#__PURE__*/function(){/**
   * @param {Core} core OS.js Core instance reference
   */function Notifications(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Notifications);this.core=core;}/**
   * Destroy notification handler
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Notifications,[{key:"destroy",value:function destroy(){this.$element.remove();this.$element=null;}/**
     * Initialize notification handler
     */},{key:"init",value:function init(){this.$element=document.createElement('div');this.$element.classList.add('osjs-notifications');this.core.$root.appendChild(this.$element);}/**
     * Create a new notification
     * @param {Object} options See notification class for options
     * @return {Notification}
     */},{key:"create",value:function create(options){if(!options){throw new Error('Notification options not given');}var notification=new _notification__WEBPACK_IMPORTED_MODULE_2__["default"](this.core,this.$element,options);notification.render();return notification;}}]);return Notifications;}();/***/},/***/"./src/packages.js":/*!*************************!*\
  !*** ./src/packages.js ***!
  \*************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Packages;});/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _application__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./application */"./src/application.js");/* harmony import */var _utils_preloader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./utils/preloader */"./src/utils/preloader.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * A registered package reference
 * @property {Object} metadata Package metadata
 * @property {Function} callback Callback to instanciate
 * @typedef PackageReference
 */ /**
 * A package metadata
 * @property {String} name The package name
 * @property {String} [category] Package category
 * @property {String} [icon] Package icon
 * @property {Boolean} [singleton] If only one instance allowed
 * @property {Boolean} [autostart] Autostart on boot
 * @property {Boolean} [hidden] Hide from launch menus etc.
 * @property {String} [server] Server script filename
 * @property {String[]} [groups] Only available for users in this group
 * @property {String[]} [files] Files to preload
 * @property {Map<String, String>} title A map of locales and titles
 * @property {Map<String, String>} description A map of locales and titles
 * @typedef PackageMetadata
 */ /**
 * Package Manager
 *
 * @desc Handles indexing, loading and launching of OS.js packages
 */var Packages=/*#__PURE__*/function(){/**
   * Create package manage
   *
   * @param {Core} core Core reference
   */function Packages(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Packages);/**
     * Core instance reference
     * @type {Core}
     */this.core=core;/**
     * A list of registered packages
     * @type {PackageReference[]}
     */this.packages=[];/**
     * The lost of loaded package metadata
     * @type {PackageMetadata[]}
     */this.metadata=[];/**
     * A list of running application names
     * @desc Mainly used for singleton awareness
     * @type {String[]}
     */this.running=[];/**
     * Preloader
     * @type {Preloader}
     */this.preloader=new _utils_preloader__WEBPACK_IMPORTED_MODULE_4__["default"](core.$resourceRoot);/**
     * If inited
     * @type {boolean}
     */this.inited=false;}/**
   * Destroy package manager
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Packages,[{key:"destroy",value:function destroy(){this.packages=[];this.metadata=[];this.preloader.destroy();}/**
     * Initializes package manager
     * @return {Promise<boolean, Error>}
     */},{key:"init",value:function init(){var _this=this;console.debug('Packages::init()');if(!this.inited){this.core.on('osjs/core:started',function(){return _this._autostart();});}this.inited=true;var manifest=this.core.config('packages.manifest');return manifest?this.core.request(manifest,{},'json').then(function(metadata){return _this.addPackages(metadata);}).then(function(){return true;}).catch(function(error){return console.error(error);}):Promise.resolve(true);}/**
     * Launches a (application) package
     *
     * @param {String} name Package name
     * @param {Object} [args] Launch arguments
     * @param {Object} [options] Launch options
     * @param {Boolean} [options.forcePreload=false] Force preload reloading
     * @see PackageServiceProvider
     * @throws {Error}
     * @return {Promise<Application, Error>}
     */},{key:"launch",value:function launch(name){var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};console.debug('Packages::launch()',name,args,options);var _=this.core.make('osjs/locale').translate;var metadata=this.metadata.find(function(pkg){return pkg.name===name;});if(!metadata){throw new Error(_('ERR_PACKAGE_NOT_FOUND',name));}if(['theme','icons','sounds'].indexOf(metadata.type)!==-1){return this._launchTheme(name,metadata.type);}return this._launchApplication(name,metadata,args,options);}/**
     * Launches an application package
     *
     * @param {String} name Application package name
     * @param {Metadata} metadata Application metadata
     * @param {Array} args Launch arguments
     * @param {Object} options Launch options
     */},{key:"_launchApplication",value:function _launchApplication(name,metadata,args,options){var _this2=this;var signaled=false;if(metadata.singleton){var foundApp=_application__WEBPACK_IMPORTED_MODULE_3__["default"].getApplications().find(function(app){return app.metadata.name===metadata.name;});if(foundApp){foundApp.emit('attention',args,options);signaled=true;return Promise.resolve(foundApp);}var found=this.running.filter(function(n){return n===name;});if(found.length>0){return new Promise(function(resolve,reject){_this2.core.once("osjs/application:".concat(name,":launched"),function(a){if(signaled){resolve(a);}else{a.emit('attention',args,options);resolve(a);}});});}}this.core.emit('osjs/application:launch',name,args,options);this.running.push(name);return this._launch(name,metadata,args,options);}/**
     * Launches a (theme) package
     *
     * @param {String} name Package name
     * @param {String} type Package type
     * @throws {Error}
     * @return {Promise<Object, Error>}
     */},{key:"_launchTheme",value:function _launchTheme(name,type){var _this3=this;var _=this.core.make('osjs/locale').translate;var metadata=this.getPackages(function(iter){return['theme','icons','sounds'].indexOf(iter.type)!==-1;}).find(function(pkg){return pkg.name===name;});if(!metadata){throw new Error(_('ERR_PACKAGE_NOT_FOUND',name));}var preloads=(metadata.files||[]).map(function(f){return _this3.core.url(f,{},Object.assign({type:type},metadata));});return this.preloader.load(preloads).then(function(result){return Object.assign({elements:{}},result,_this3.packages.find(function(pkg){return pkg.metadata.name===name;})||{});});}/**
     * Wrapper for launching a (application) package
     *
     * @param {String} name Package name
     * @param {Object} args Launch arguments
     * @param {Object} options Launch options
     * @return {Application}
     */},{key:"_launch",value:function _launch(name,metadata,args,options){var _this4=this;var _=this.core.make('osjs/locale').translate;var dialog=function dialog(e){if(_this4.core.has('osjs/dialog')){_this4.core.make('osjs/dialog','alert',{type:'error',title:_('ERR_PACKAGE_EXCEPTION',name),message:_('ERR_PACKAGE_EXCEPTION',name),error:e},function(){/* noop */});}else{alert("".concat(_('ERR_PACKAGE_EXCEPTION',name),": ").concat(e.stack||e));}};var fail=function fail(err){_this4.core.emit('osjs/application:launched',name,false);_this4.core.emit("osjs/application:".concat(name,":launched"),false);dialog(err);throw new Error(err);};var preloads=metadata.files.map(function(f){return _this4.core.url(f,{},Object.assign({type:'apps'},metadata));});var create=function create(found){var app;try{console.group('Packages::_launch()');app=found.callback(_this4.core,args,options,found.metadata);if(app instanceof _application__WEBPACK_IMPORTED_MODULE_3__["default"]){app.on('destroy',function(){var foundIndex=_this4.running.findIndex(function(n){return n===name;});if(foundIndex!==-1){_this4.running.splice(foundIndex,1);}});}else{console.warn('The application',name,'did not return an Application instance from registration');}}catch(e){dialog(e);console.warn('Exception when launching',name,e);}finally{_this4.core.emit('osjs/application:launched',name,app);_this4.core.emit("osjs/application:".concat(name,":launched"),app);console.groupEnd();}return app;};return this.preloader.load(preloads,options.forcePreload===true).then(function(_ref){var errors=_ref.errors;if(errors.length){fail(_('ERR_PACKAGE_LOAD',name,errors.join(', ')));}var found=_this4.packages.find(function(pkg){return pkg.metadata.name===name;});if(!found){fail(_('ERR_PACKAGE_NO_RUNTIME',name));}return create(found);});}/**
     * Autostarts tagged packages
     */},{key:"_autostart",value:function _autostart(){var _this5=this;this.metadata.filter(function(pkg){return pkg.autostart===true;}).forEach(function(pkg){return _this5.launch(pkg.name);});}/**
     * Registers a package
     *
     * @param {String} name Package name
     * @param {Function} callback Callback function to construct application instance
     * @throws {Error}
     */},{key:"register",value:function register(name,callback){console.debug('Packages::register()',name);var _=this.core.make('osjs/locale').translate;var metadata=this.metadata.find(function(pkg){return pkg.name===name;});if(!metadata){throw new Error(_('ERR_PACKAGE_NO_METADATA',name));}var foundIndex=this.packages.findIndex(function(pkg){return pkg.metadata.name===name;});if(foundIndex!==-1){this.packages.splice(foundIndex,1);}this.packages.push({metadata:metadata,callback:callback});}/**
     * Adds a set of packages
     * @param {PackageMetadata[]} list Package list
     * @return {PackageMetadata[]} Current list of packages
     */},{key:"addPackages",value:function addPackages(list){if(list instanceof Array){var append=list.map(function(iter){return Object.assign({type:'application',files:[]},iter);});this.metadata=[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.metadata),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(append));}return this.getPackages();}/**
     * Gets a list of packages (metadata)
     * @param {Function} [filter] A filter function
     * @return {PackageMetadata[]}
     */},{key:"getPackages",value:function getPackages(filter){filter=filter||function(){return true;};var user=this.core.getUser();var metadata=this.metadata.map(function(m){return Object.assign({},m);});var filterGroups=function filterGroups(iter){return iter.groups instanceof Array?iter.groups.every(function(g){return user.groups.indexOf(g)!==-1;}):true;};var filterBlacklist=function filterBlacklist(iter){return user.blacklist instanceof Array?user.blacklist.indexOf(iter.name)===-1:true;};return metadata.filter(filterGroups).filter(filterBlacklist).filter(filter);}/**
     * Gets a list of packages compatible with the given mime type
     * @param {string} mimeType MIME Type
     * @see PackageManager#getPackages
     * @return {PackageMetadata[]}
     */},{key:"getCompatiblePackages",value:function getCompatiblePackages(mimeType){return this.getPackages(function(meta){if(meta.mimes){return!!meta.mimes.find(function(mime){try{var re=new RegExp(mime);return re.test(mimeType);}catch(e){console.warn('Compability check failed',e);}return mime===mimeType;});}return false;});}}]);return Packages;}();/***/},/***/"./src/providers/auth.js":/*!*******************************!*\
  !*** ./src/providers/auth.js ***!
  \*******************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return AuthServiceProvider;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/get */"./node_modules/@babel/runtime/helpers/get.js");/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _auth__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../auth */"./src/auth.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Auth Service Provider
 *
 * @desc Creates the login prompt and handles authentication flow
 */var AuthServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AuthServiceProvider,_ServiceProvider);/**
   * @param {Object} core OS.js Core
   * @param {Object} [args] Arguments
   * @see Auth
   */function AuthServiceProvider(core){var _this;var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,AuthServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AuthServiceProvider).call(this,core));_this.auth=new _auth__WEBPACK_IMPORTED_MODULE_7__["default"](core,args);return _this;}/**
   * Initializes authentication
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AuthServiceProvider,[{key:"init",value:function init(){var _this2=this;this.core.singleton('osjs/auth',function(){return{show:function show(cb){return _this2.auth.show(cb);},login:function login(values){return _this2.auth.login(values);},logout:function logout(reload){return _this2.auth.logout(reload);},user:function user(){return _this2.core.getUser();}};});return this.auth.init();}/**
     * Destroys authentication
     */},{key:"destroy",value:function destroy(){this.auth.destroy();return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AuthServiceProvider.prototype),"destroy",this).call(this);}/**
     * Get a list of services this provider registers
     */},{key:"provides",value:function provides(){return['osjs/auth'];}}]);return AuthServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_6__["ServiceProvider"]);/***/},/***/"./src/providers/core.js":/*!*******************************!*\
  !*** ./src/providers/core.js ***!
  \*******************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return CoreServiceProvider;});/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/construct */"./node_modules/@babel/runtime/helpers/construct.js");/* harmony import */var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @babel/runtime/helpers/get */"./node_modules/@babel/runtime/helpers/get.js");/* harmony import */var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);/* harmony import */var _application__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ../application */"./src/application.js");/* harmony import */var _window__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ../window */"./src/window.js");/* harmony import */var _window_behavior__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(/*! ../window-behavior */"./src/window-behavior.js");/* harmony import */var _session__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(/*! ../session */"./src/session.js");/* harmony import */var _packages__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(/*! ../packages */"./src/packages.js");/* harmony import */var _tray__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(/*! ../tray */"./src/tray.js");/* harmony import */var _websocket__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(/*! ../websocket */"./src/websocket.js");/* harmony import */var _clipboard__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(/*! ../clipboard */"./src/clipboard.js");/* harmony import */var _locale__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(/*! ../locale */"./src/locale/index.js");/* harmony import */var _utils_locale__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(/*! ../utils/locale */"./src/utils/locale.js");/* harmony import */var _utils_dom__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(/*! ../utils/dom */"./src/utils/dom.js");/* harmony import */var _utils_dnd__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(/*! ../utils/dnd */"./src/utils/dnd.js");/* harmony import */var _basic_application_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(/*! ../basic-application.js */"./src/basic-application.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_21___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_21__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_22___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_22__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /*
 * Gets the public facting API object
 */var getPublicApi=function getPublicApi(core){var globalBlacklist=core.config('providers.globalBlacklist',[]);var globalWhitelist=core.config('providers.globalWhitelist',[]);var register=function register(){var _core$make;return(_core$make=core.make('osjs/packages')).register.apply(_core$make,arguments);};var make=function make(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var name=args[0];if(core.has(name)){var blacklisted=globalBlacklist.length>0&&globalBlacklist.indexOf(name)!==-1;var notWhitelisted=globalWhitelist.length>0&&globalWhitelist.indexOf(name)===-1;if(blacklisted||notWhitelisted){throw new Error("The provider '".concat(name,"' cannot be used via global scope"));}}return core.make.apply(core,args);};return Object.freeze({make:make,register:register,url:function url(){return core.url.apply(core,arguments);},run:function run(){return core.run.apply(core,arguments);},open:function open(){return core.open.apply(core,arguments);},request:function request(){return core.request.apply(core,arguments);}});};/*
 * Resolves various resources
 */var resourceResolver=function resourceResolver(core){var media=Object(_utils_dom__WEBPACK_IMPORTED_MODULE_18__["supportedMedia"])();var themeResource=function themeResource(path){var defaultTheme=core.config('desktop.settings.theme');var theme=core.make('osjs/settings').get('osjs/desktop','theme',defaultTheme);return core.url("themes/".concat(theme,"/").concat(path));// FIXME: Use metadata ?
};var getSoundThemeName=function getSoundThemeName(){var defaultTheme=core.config('desktop.settings.sounds');return core.make('osjs/settings').get('osjs/desktop','sounds',defaultTheme);};var soundResource=function soundResource(path){if(!path.match(/\.([a-z]+)$/)){var defaultExtension='mp3';var checkExtensions=['oga','mp3'];var found=checkExtensions.find(function(str){return media.audio[str]===true;});var use=found||defaultExtension;path+='.'+use;}var theme=getSoundThemeName();return theme?core.url("sounds/".concat(theme,"/").concat(path)):null;// FIXME: Use metadata ?
};var soundsEnabled=function soundsEnabled(){return!!getSoundThemeName();};var icon=function icon(path){var defaultTheme=core.config('desktop.settings.icons');var theme=core.make('osjs/settings').get('osjs/desktop','icons',defaultTheme);return core.url("icons/".concat(theme,"/icons/").concat(path));// FIXME: Use metadata ?
};return{themeResource:themeResource,soundResource:soundResource,soundsEnabled:soundsEnabled,icon:icon};};/**
 * OS.js Core Service Provider
 *
 * @desc Provides base services
 */var CoreServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(CoreServiceProvider,_ServiceProvider);/**
   * @param {Object} core OS.js Core
   * @param {Object} [args] Arguments
   * @param {Function} [args.windowBehavior] Custom Window Behavior
   */function CoreServiceProvider(core){var _this;var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,CoreServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CoreServiceProvider).call(this,core));window.OSjs=getPublicApi(core);_this.session=new _session__WEBPACK_IMPORTED_MODULE_11__["default"](core);_this.tray=new _tray__WEBPACK_IMPORTED_MODULE_13__["default"](core);_this.pm=new _packages__WEBPACK_IMPORTED_MODULE_12__["default"](core);_this.clipboard=new _clipboard__WEBPACK_IMPORTED_MODULE_15__["default"]();return _this;}/**
   * Get a list of services this provider registers
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CoreServiceProvider,[{key:"provides",value:function provides(){return['osjs/application','osjs/basic-application','osjs/window','osjs/windows','osjs/event-handler','osjs/window-behaviour','osjs/dnd','osjs/dom','osjs/clipboard','osjs/tray','osjs/locale','osjs/packages','osjs/websocket','osjs/session','osjs/theme','osjs/sounds'];}},{key:"destroy",value:function destroy(){this.tray.destroy();this.pm.destroy();this.clipboard.destroy();_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CoreServiceProvider.prototype),"destroy",this).call(this);}},{key:"init",value:function init(){var _this2=this;var _resourceResolver=resourceResolver(this.core),themeResource=_resourceResolver.themeResource,soundResource=_resourceResolver.soundResource,soundsEnabled=_resourceResolver.soundsEnabled,_icon=_resourceResolver.icon;var createWindow=function createWindow(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new _window__WEBPACK_IMPORTED_MODULE_9__["default"](_this2.core,options);};this.core.instance('osjs/websocket',function(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(_websocket__WEBPACK_IMPORTED_MODULE_14__["default"],args);});this.core.instance('osjs/application',function(){var data=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new _application__WEBPACK_IMPORTED_MODULE_8__["default"](_this2.core,data);});this.core.instance('osjs/basic-application',function(proc,win){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return new _basic_application_js__WEBPACK_IMPORTED_MODULE_20__["BasicApplication"](_this2.core,proc,win,options);});this.core.instance('osjs/window',createWindow);this.core.singleton('osjs/windows',function(){return{create:createWindow,list:function list(){return _window__WEBPACK_IMPORTED_MODULE_9__["default"].getWindows();},last:function last(){return _window__WEBPACK_IMPORTED_MODULE_9__["default"].lastWindow();}};});this.core.instance('osjs/event-handler',function(){console.warn('osjs/event-handler is deprecated, use osjs/event-emitter');for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_22__["EventEmitter"],args);});this.core.instance('osjs/event-emitter',function(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_1___default()(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_22__["EventEmitter"],args);});this.core.singleton('osjs/window-behavior',function(){if(typeof _this2.options.windowBehavior==='function'){return _this2.options.windowBehavior(_this2.core);}return new _window_behavior__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.core);});this.core.singleton('osjs/session',function(){return{save:function save(){return _this2.session.save();},load:function load(){var fresh=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;return _this2.session.load(fresh);}};});this.core.singleton('osjs/dnd',function(){return _utils_dnd__WEBPACK_IMPORTED_MODULE_19__;});this.core.singleton('osjs/dom',function(){return{script:_utils_dom__WEBPACK_IMPORTED_MODULE_18__["script"],style:_utils_dom__WEBPACK_IMPORTED_MODULE_18__["style"]};});var trayApi={create:function create(options,handler){return _this2.tray.create(options,handler);},list:function list(){return _this2.tray.entries.map(function(e){return Object.assign({},e);});}};this.core.instance('osjs/tray',function(options){if(typeof options!=='undefined'){return trayApi.create(options);}return trayApi;});var localeApi={format:Object(_utils_locale__WEBPACK_IMPORTED_MODULE_17__["format"])(this.core),translate:Object(_utils_locale__WEBPACK_IMPORTED_MODULE_17__["translatable"])(this.core)(_locale__WEBPACK_IMPORTED_MODULE_16__),translatable:Object(_utils_locale__WEBPACK_IMPORTED_MODULE_17__["translatable"])(this.core),translatableFlat:Object(_utils_locale__WEBPACK_IMPORTED_MODULE_17__["translatableFlat"])(this.core),getLocale:function getLocale(){var key=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'language';var ref=Object(_utils_locale__WEBPACK_IMPORTED_MODULE_17__["getLocale"])(_this2.core,key);return ref.userLocale||ref.defaultLocale;},setLocale:function setLocale(name){return name in _locale__WEBPACK_IMPORTED_MODULE_16__?_this2.core.make('osjs/settings').set('osjs/locale','language',name).save().then(function(){return _this2.core.emit('osjs/locale:change',name);}):Promise.reject(localeApi.translate('ERR_INVALID_LOCALE',name));}};this.core.singleton('osjs/locale',function(){return localeApi;});this.core.singleton('osjs/packages',function(){return{getCompatiblePackages:function getCompatiblePackages(){var _this2$pm;return(_this2$pm=_this2.pm).getCompatiblePackages.apply(_this2$pm,arguments);},getPackages:function getPackages(){var _this2$pm2;return(_this2$pm2=_this2.pm).getPackages.apply(_this2$pm2,arguments);},register:function register(){var _this2$pm3;return(_this2$pm3=_this2.pm).register.apply(_this2$pm3,arguments);},launch:function launch(){var _this2$pm4;return(_this2$pm4=_this2.pm).launch.apply(_this2$pm4,arguments);},preload:function preload(){var _this2$pm5;return(_this2$pm5=_this2.pm).preload.apply(_this2$pm5,arguments);},running:function running(){return _this2.pm.running;}};});this.core.instance('osjs/clipboard',function(){return{set:function set(v){return _this2.clipboard.set(v);},get:function get(clear){return _this2.clipboard.get(clear);},clear:function clear(){return _this2.clipboard.clear();}};});this.core.on('osjs/core:started',function(){_this2.session.load();});this.core.singleton('osjs/theme',function(){return{resource:themeResource,icon:function icon(name){return _icon(name.replace(/(\.png)?$/,'.png'));}};});this.core.singleton('osjs/sounds',function(){return{resource:soundResource,play:function play(src){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(soundsEnabled()){var absoluteSrc=src.match(/^(\/|https?:)/)?src:soundResource(src);if(absoluteSrc){return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_18__["playSound"])(absoluteSrc,options);}}return false;}};});return this.pm.init();}},{key:"start",value:function start(){var _this3=this;if(this.core.config('development')){this.core.on('osjs/dist:changed',function(filename){var url=_this3.core.url(filename).replace(/^\//,'');var found=_this3.core.$resourceRoot.querySelectorAll('link[rel=stylesheet]');var map=Array.from(found).reduce(function(result,item){var src=item.getAttribute('href').split('?')[0].replace(/^\//,'');return Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},src,item),result);},{});if(map[url]){console.debug('Hot-reloading',url);setTimeout(function(){map[url].setAttribute('href',url);},100);}});this.core.on('osjs/packages:package:changed',function(name){// TODO: Reload themes as well
_application__WEBPACK_IMPORTED_MODULE_8__["default"].getApplications().filter(function(proc){return proc.metadata.name===name;}).forEach(function(proc){return proc.relaunch();});});}this.core.on('osjs/packages:metadata:changed',function(){_this3.pm.init();});}}]);return CoreServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_21__["ServiceProvider"]);/***/},/***/"./src/providers/desktop.js":/*!**********************************!*\
  !*** ./src/providers/desktop.js ***!
  \**********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return DesktopServiceProvider;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _desktop__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../desktop */"./src/desktop.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Desktop Service Provider
 *
 * @desc Provides desktop features
 */var DesktopServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DesktopServiceProvider,_ServiceProvider);function DesktopServiceProvider(core){var _this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,DesktopServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(DesktopServiceProvider).call(this,core,options||{}));_this.desktop=null;return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DesktopServiceProvider,[{key:"destroy",value:function destroy(){this.desktop=this.desktop.destroy();}/**
     * Get a list of services this provider registers
     */},{key:"provides",value:function provides(){return['osjs/desktop'];}},{key:"init",value:function init(){var _this2=this;this.desktop=new _desktop__WEBPACK_IMPORTED_MODULE_6__["default"](this.core,this.options);this.desktop.init();this.core.singleton('osjs/desktop',function(){return{addContextMenuEntries:function addContextMenuEntries(entries){return _this2.desktop.addContextMenu(entries);},applySettings:function applySettings(settings){return _this2.desktop.applySettings(settings);},getRect:function getRect(){return _this2.desktop.getRect();}};});this.core.on('osjs/core:started',function(){_this2.desktop.applySettings();});}},{key:"start",value:function start(){this.desktop.start();}}]);return DesktopServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_5__["ServiceProvider"]);/***/},/***/"./src/providers/notifications.js":/*!****************************************!*\
  !*** ./src/providers/notifications.js ***!
  \****************************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return NotificationServiceProvider;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _notifications__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! ../notifications */"./src/notifications.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_6__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Notification Service Provider
 *
 * @desc Provides methods to create notifications
 */var NotificationServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(NotificationServiceProvider,_ServiceProvider);function NotificationServiceProvider(core){var _this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,NotificationServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(NotificationServiceProvider).call(this,core));_this.notifications=new _notifications__WEBPACK_IMPORTED_MODULE_5__["default"](core);return _this;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(NotificationServiceProvider,[{key:"destroy",value:function destroy(){this.notifications.destroy();}},{key:"provides",value:function provides(){return['osjs/notification'];}},{key:"init",value:function init(){var _this2=this;this.notifications.init();this.core.instance('osjs/notification',function(options){return _this2.notifications.create(options);});}}]);return NotificationServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_6__["ServiceProvider"]);/***/},/***/"./src/providers/settings.js":/*!***********************************!*\
  !*** ./src/providers/settings.js ***!
  \***********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return SettingsServiceProvider;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _settings__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../settings */"./src/settings.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Settings Service Provider
 *
 * @desc Provides services for settings
 */var SettingsServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SettingsServiceProvider,_ServiceProvider);function SettingsServiceProvider(core){var _this;var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,SettingsServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SettingsServiceProvider).call(this,core));_this.settings=new _settings__WEBPACK_IMPORTED_MODULE_6__["default"](core,Object.assign({config:{}},args));return _this;}/**
   * Get a list of services this provider registers
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsServiceProvider,[{key:"provides",value:function provides(){return['osjs/settings'];}},{key:"init",value:function init(){var _this2=this;this.core.singleton('osjs/settings',function(){return{save:function save(){return _this2.settings.save();},load:function load(){return _this2.settings.load();},clear:function clear(){var _this2$settings;return(_this2$settings=_this2.settings).clear.apply(_this2$settings,arguments);},get:function get(){var _this2$settings2;return(_this2$settings2=_this2.settings).get.apply(_this2$settings2,arguments);},set:function set(){var _this2$settings3;return(_this2$settings3=_this2.settings).set.apply(_this2$settings3,arguments);}};});return this.settings.init();}}]);return SettingsServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_5__["ServiceProvider"]);/***/},/***/"./src/providers/vfs.js":/*!******************************!*\
  !*** ./src/providers/vfs.js ***!
  \******************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return VFSServiceProvider;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @osjs/common */"./node_modules/@osjs/common/dist/main.js");/* harmony import */var _osjs_common__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_osjs_common__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _filesystem__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ../filesystem */"./src/filesystem.js");/* harmony import */var _utils_vfs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! ../utils/vfs */"./src/utils/vfs.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * OS.js Virtual Filesystem Service Provider
 *
 * @desc Provides methods to interact with filesystems
 */var VFSServiceProvider=/*#__PURE__*/function(_ServiceProvider){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VFSServiceProvider,_ServiceProvider);function VFSServiceProvider(core){var _this;var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,VFSServiceProvider);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(VFSServiceProvider).call(this,core));_this.fs=new _filesystem__WEBPACK_IMPORTED_MODULE_6__["default"](core,{adapters:args.adapters||{},mounts:args.mounts||[]});return _this;}/**
   * Get a list of services this provider registers
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VFSServiceProvider,[{key:"provides",value:function provides(){return['osjs/vfs','osjs/fs'];}},{key:"init",value:function init(){var _this2=this;this.core.singleton('osjs/vfs',function(){return _this2.fs.request();});var iconMap=this.core.config('vfs.icons',{});var icon=_utils_vfs__WEBPACK_IMPORTED_MODULE_7__["getFileIcon"](iconMap);this.core.singleton('osjs/fs',function(){return{pathJoin:function pathJoin(){return _utils_vfs__WEBPACK_IMPORTED_MODULE_7__["pathJoin"].apply(_utils_vfs__WEBPACK_IMPORTED_MODULE_7__,arguments);},icon:icon,mountpoints:function mountpoints(){var _this2$fs;return(_this2$fs=_this2.fs).getMounts.apply(_this2$fs,arguments);},mount:function mount(){var _this2$fs2;return(_this2$fs2=_this2.fs).mount.apply(_this2$fs2,arguments);},unmount:function unmount(){var _this2$fs3;return(_this2$fs3=_this2.fs).unmount.apply(_this2$fs3,arguments);},register:function register(){var _this2$fs4;return(_this2$fs4=_this2.fs).register.apply(_this2$fs4,arguments);}};});return this.fs.mountAll(false);}}]);return VFSServiceProvider;}(_osjs_common__WEBPACK_IMPORTED_MODULE_5__["ServiceProvider"]);/***/},/***/"./src/search-ui.js":/*!**************************!*\
  !*** ./src/search-ui.js ***!
  \**************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony import */var hyperapp__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! hyperapp */"./node_modules/hyperapp/src/index.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_1__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var createView=function createView(core,fs,icon,_){var resultView=function resultView(_ref,actions){var results=_ref.results,index=_ref.index;return results.map(function(r,i){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('li',{onclick:function onclick(){return actions.open(i);},onupdate:function onupdate(el){if(i===index){el.scrollIntoView();}},class:['osjs-search-result',index===i?'osjs__active':''].join(' ')},[Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('img',{src:icon(fs.icon(r).name+'.png')}),Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('span',{},"".concat(r.path," (").concat(r.mime,")"))]);});};return function(state,actions){return Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('div',{class:'osjs-search-container osjs-notification',style:{display:state.visible?undefined:'none'}},[Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('input',{type:'text',placeholder:_('LBL_SEARCH_PLACEHOLDER'),class:'osjs-search-input',value:state.query,onblur:function onblur(){if(!state.value){setTimeout(function(){return actions.toggle(false);},300);}},oninput:function oninput(ev){return actions.setQuery(ev.target.value);},onkeydown:function onkeydown(ev){if(ev.keyCode===38){// Up
actions.setPreviousIndex();}else if(ev.keyCode===40){// Down
actions.setNextIndex();}else if(ev.keyCode===27){// Escape
actions.resetIndex();if(state.index===-1){actions.hide();}}},onkeypress:function onkeypress(ev){if(ev.keyCode===13){if(state.index>=0){actions.open(state.index);}else{actions.search(state.query.replace(/\*?$/,'*').replace(/^\*?/,'*'));}}}}),Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('div',{'data-error':!!state.error,class:'osjs-search-message',style:{display:state.error||state.status?'block':'none'}},state.error||state.status),Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["h"])('ol',{class:'osjs-search-results',style:{display:state.results.length?undefined:'none'}},resultView(state,actions))]);};};var create=function create(core,$element){var _=core.make('osjs/locale').translate;var fs=core.make('osjs/fs');var _core$make=core.make('osjs/theme'),icon=_core$make.icon;var view=createView(core,fs,icon,_);var ee=new _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]('SearchUI');var hyperapp=Object(hyperapp__WEBPACK_IMPORTED_MODULE_0__["app"])({query:'',index:-1,status:undefined,error:null,visible:false,results:[]},{search:function search(query){ee.emit('search',query);return{status:_('LBL_SEARCH_WAIT')};},open:function open(index){return function(state,actions){var iter=state.results[index];if(iter){ee.emit('open',iter);}actions.toggle(false);};},resetIndex:function resetIndex(){return function(){return{index:-1};};},setNextIndex:function setNextIndex(){return function(state){return{index:(state.index+1)%state.results.length};};},setPreviousIndex:function setPreviousIndex(){return function(state){return{index:state.index<=0?state.results.length-1:state.index-1};};},setError:function setError(error){return function(){return{error:error,status:undefined,index:-1};};},setResults:function setResults(results){return function(){return{results:results,index:-1,status:_('LBL_SEARCH_RESULT',results.length)};};},setQuery:function setQuery(query){return function(){return{query:query};};},hide:function hide(){ee.emit('hide');},toggle:function toggle(visible){return function(state){return{query:'',results:[],index:-1,status:undefined,error:null,visible:typeof visible==='boolean'?visible:!state.visible};};}},view,$element);ee.on('error',function(error){return hyperapp.setError(error);});ee.on('success',function(results){return hyperapp.setResults(results);});ee.on('toggle',function(toggle){return hyperapp.toggle(toggle);});ee.on('focus',function(){var el=$element.querySelector('.osjs-search-input');if(el){el.focus();}});return ee;};/* harmony default export */__webpack_exports__["default"]=create;/***/},/***/"./src/search.js":/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Search;});/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./window */"./src/window.js");/* harmony import */var _search_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! ./search-ui */"./src/search-ui.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Search Service
 */var Search=/*#__PURE__*/function(){function Search(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Search);this.core=core;this.ui=null;this.focusLastWindow=null;this.$element=document.createElement('div');}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Search,[{key:"destroy",value:function destroy(){if(this.ui){this.ui.destroy();}}/**
     * Initializes Search Service
     */},{key:"init",value:function init(){var _this=this;var _this$core$make=this.core.make('osjs/theme'),icon=_this$core$make.icon;var _=this.core.make('osjs/locale').translate;this.$element.className='osjs-search';this.core.$root.appendChild(this.$element);this.core.make('osjs/tray').create({title:_('LBL_SEARCH_TOOLTOP','F3'),icon:icon('system-search.png')},function(){return _this.show();});this.ui=Object(_search_ui__WEBPACK_IMPORTED_MODULE_4__["default"])(this.core,this.$element);this.ui.on('hide',function(){return _this.hide();});this.ui.on('open',function(iter){return _this.core.open(iter);});this.ui.on('search',function(query){_this.search(query).then(function(results){return _this.ui.emit('success',results);}).catch(function(error){return _this.ui.emit('error',error);});});}/**
     * Performs a search across all mounts
     * @param {string} pattern Search query
     * @return {Promise<FileMetadata[], Error>}
     */},{key:"search",value:function search(pattern){var vfs=this.core.make('osjs/vfs');var promises=this.core.make('osjs/fs').mountpoints().map(function(mount){return"".concat(mount.name,":/");}).map(function(path){return vfs.search({path:path},pattern).catch(function(error){console.warn('Error while searching',error);return[];});});return Promise.all(promises).then(function(lists){var _ref;return(_ref=[]).concat.apply(_ref,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(lists));});}/**
     * Focuses UI
     */},{key:"focus",value:function focus(){if(this.ui){this.ui.emit('focus');}}/**
     * Hides UI
     */},{key:"hide",value:function hide(){if(this.ui){this.ui.emit('toggle',false);var win=_window__WEBPACK_IMPORTED_MODULE_3__["default"].lastWindow();if(this.focusLastWindow&&win){win.focus();}}}/**
     * Shows UI
     */},{key:"show",value:function show(){var _this2=this;if(this.ui){var win=_window__WEBPACK_IMPORTED_MODULE_3__["default"].lastWindow();this.focusLastWindow=win&&win.blur();this.ui.emit('toggle',true);setTimeout(function(){return _this2.focus();},1);}}}]);return Search;}();/***/},/***/"./src/session.js":/*!************************!*\
  !*** ./src/session.js ***!
  \************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Session;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _application__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./application */"./src/application.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Session Handler
 *
 * @desc Handles Sessions
 */var Session=/*#__PURE__*/function(){/**
   * Creates the Session Handler
   *
   * @param {Core} core Core reference
   */function Session(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Session);/**
     * Core instance reference
     * @type {Core}
     */this.core=core;}/**
   * Saves session
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Session,[{key:"save",value:function save(){var apps=_application__WEBPACK_IMPORTED_MODULE_2__["default"].getApplications().filter(function(a){return a.options.sessionable!==false;});var session=apps.map(function(app){return app.getSession();});return this.core.make('osjs/settings').set('osjs/session',null,session).save();}/**
     * Loads session
     * @param {Boolean} [fresh=false] Kill all current applications first
     */},{key:"load",value:function load(){var _this=this;var fresh=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(fresh){_application__WEBPACK_IMPORTED_MODULE_2__["default"].destroyAll();}var session=this.core.make('osjs/settings').get('osjs/session');if(session&&!(session instanceof Array)){session=Object.values(session);}if(session){console.group('Session::load()');session.forEach(function(app){try{_this.core.run(app.name,app.args,{restore:{windows:app.windows}});}catch(e){console.warn('Error while loading session entry',e);}});console.groupEnd();}return Promise.resolve(true);}}]);return Session;}();/***/},/***/"./src/settings.js":/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Settings;});/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js");/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! deepmerge */"./node_modules/deepmerge/dist/umd.js");/* harmony import */var deepmerge__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var simplejsonconf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! simplejsonconf */"./node_modules/simplejsonconf/dist/main.js");/* harmony import */var simplejsonconf__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(simplejsonconf__WEBPACK_IMPORTED_MODULE_5__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var serverSettings=function serverSettings(core){return{save:function save(settings){return core.request(core.url('/settings'),{method:'post',body:settings},'json');},load:function load(){return core.request(core.url('/settings'),{method:'get'},'json');}};};var localStorageSettings=function localStorageSettings(core){return{clear:function clear(ns){localStorage.removeItem(ns);return Promise.resolve(true);},save:function save(settings){Object.keys(settings).forEach(function(k){localStorage.setItem(k,JSON.stringify(settings[k]));});return Promise.resolve(true);},load:function load(){return Promise.resolve(Object.keys(localStorage).reduce(function(o,v){var value=localStorage.getItem(v);try{value=JSON.parse(value);}catch(e){console.warn('localStorageAdapter parse error',e);}return Object.assign(o,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()({},v,value));},{}));}};};var defaultAdapters={server:serverSettings,localStorage:localStorageSettings};/**
 * OS.js Settings Manager
 */var Settings=/*#__PURE__*/function(){function Settings(core,args){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Settings);var adapter=core.config('standalone')?localStorageSettings:typeof args.adapter==='function'?args.adapter:defaultAdapters[args.adapter||'localStorage'];this.adapter=Object.assign({load:function load(){return Promise.reject(new Error('Not implemented'));},save:function save(){return Promise.reject(new Error('Not implemented'));},init:function init(){return Promise.resolve(true);},clear:function clear(){return Promise.resolve(true);},destroy:function destroy(){}},adapter(core,args.config));/**
     * Internal timeout reference used for debouncing
     * @type {Object}
     */this.debounce=null;/**
     * The settings tree
     * @type {Object}
     */this.settings={};this.core=core;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Settings,[{key:"init",value:function init(){return this.adapter.init();}/**
     * Saves settings
     * @return {Promise<boolean,  Error>}
     */},{key:"save",value:function save(){var _this=this;return new Promise(function(resolve,reject){if(_this.debounce){var _this$debounce=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this.debounce,2),promise=_this$debounce[0],timer=_this$debounce[1];promise.resolve(false);_this.debounce=clearTimeout(timer);}_this.debounce=[{resolve:resolve,reject:reject},setTimeout(function(){_this.adapter.save(_this.settings).then(function(){_this.core.emit('osjs/settings:save');resolve.apply(void 0,arguments);}).catch(reject);},100)];});}/**
     * Loads settings
     * @return {Promise<boolean,  Error>}
     */},{key:"load",value:function load(){var _this2=this;this.core.emit('osjs/settings:load');var defaults=this.core.config('settings.defaults',{});return this.adapter.load().then(function(settings){_this2.settings=deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(defaults,settings,{arrayMerge:function arrayMerge(dest,source){return source;}});return true;}).catch(function(e){console.warn('Failed to set settings',e);_this2.settings=defaults;return false;});}/**
     * Gets a settings entry by key
     *
     * @desc Gets a setting (from cache)
     * @param {String} [ns] The namespace
     * @param {String} [key] The key to get the value from
     * @param {*} [defaultValue] If result is undefined, return this instead
     * @return {*}
     */},{key:"get",value:function get(ns,key,defaultValue){if(typeof ns==='undefined'){return Object.assign({},this.settings);}else if(typeof this.settings[ns]==='undefined'){return key?defaultValue:{};}var tree=simplejsonconf__WEBPACK_IMPORTED_MODULE_5___default()(this.settings[ns]);return key?tree.get(key,defaultValue):tree.get()||defaultValue;}/**
     * Sets a settings entry by root key.
     * @desc Sets a setting, but does not save.
     * @param {String} ns The namespace
     * @param {String} [key] The key to set
     * @param {*} value The value to set
     * @return {Settings} This
     */},{key:"set",value:function set(ns,key,value){var lock=this.core.config('settings.lock',[]);if(lock.indexOf(ns)!==-1){return this;}if(typeof this.settings[ns]==='undefined'){this.settings[ns]={};}if(key){try{var sjc=simplejsonconf__WEBPACK_IMPORTED_MODULE_5___default()(this.settings[ns]);sjc.set(key,value);this.settings[ns]=sjc.get();}catch(e){console.warn('Error while setting settings for',key,e);}}else{this.settings[ns]=Object.assign({},value);}return this;}/**
     * Clears a namespace by root key
     * @param {String} ns The namespace
     * @return {Promise<boolean, Error>}
     */},{key:"clear",value:function clear(ns){var _this3=this;return this.adapter.clear(ns).then(function(result){if(result&&_this3.settings[ns]){delete _this3.settings[ns];}return result;});}}]);return Settings;}();/***/},/***/"./src/splash.js":/*!***********************!*\
  !*** ./src/splash.js ***!
  \***********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Splash;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var Splash=/*#__PURE__*/function(){function Splash(core){var _this=this;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Splash);this.core=core;this.$loading=document.createElement('div');this.$loading.className='osjs-boot-splash';this.$loading.appendChild(document.createTextNode('Loading...'));core.on('osjs/core:boot',function(){return _this.show();});core.on('osjs/core:booted',function(){return _this.destroy();});core.on('osjs/core:logged-in',function(){return _this.show();});core.on('osjs/core:started',function(){return _this.destroy();});}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Splash,[{key:"show",value:function show(){if(!this.$loading.parentNode){this.core.$root.appendChild(this.$loading);}}},{key:"destroy",value:function destroy(){if(this.$loading.parentNode){this.$loading.remove();}}}]);return Splash;}();/***/},/***/"./src/styles/logo-blue-32x32.png":/*!****************************************!*\
  !*** ./src/styles/logo-blue-32x32.png ***!
  \****************************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"881c86876af63b732063d7bdd51bb226.png";/***/},/***/"./src/styles/wallpaper.png":/*!**********************************!*\
  !*** ./src/styles/wallpaper.png ***!
  \**********************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"944151751b7adab74d8bc588ac2f57c1.png";/***/},/***/"./src/tray.js":/*!*********************!*\
  !*** ./src/tray.js ***!
  \*********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Tray;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * A Tray Icon ("Entry")
 * @property {Object} entry The given entry data
 * @property {Function} update Updates entry with given data
 * @property {Function} destroy Destroy the entry
 * @typedef TrayEntry
 */ /**
 * Tray Handler
 *
 * @desc Handles OS.js Tray Icons
 */var Tray=/*#__PURE__*/function(){/**
   * Creates the Tray Handler
   *
   * @param {Core} core Core reference
   */function Tray(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Tray);/**
     * Core instance reference
     * @type {Core}
     */this.core=core;/**
     * All Tray entries
     * @type {TrayEntry[]}
     */this.entries=[];}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Tray,[{key:"destroy",value:function destroy(){this.entries=[];}/**
     * Creates a new Tray entry
     * @param {Object} options Options
     * @param {String} [options.icon] Icon source
     * @param {String} [options.title] The title and tooltip
     * @param {Function} [options.onclick] The callback function for clicks
     * @param {Function} [options.oncontextmenu] The callback function for contextmenu
     * @param {Function} [handler] The callback function for all events
     * @return {TrayEntry}
     */},{key:"create",value:function create(options,handler){var _this=this;var defaultTitle=this.core.make('osjs/locale').translate('LBL_TRAY');handler=handler||function(){};var entry=Object.assign({},{icon:__webpack_require__(/*! ./styles/logo-blue-32x32.png */"./src/styles/logo-blue-32x32.png"),title:defaultTitle,onclick:handler,oncontextmenu:handler,handler:handler},options);console.debug('Created new tray entry',entry);this.entries.push(entry);this.core.emit('osjs/tray:create',entry);this.core.emit('osjs/tray:update',this.entries);var obj={entry:entry,update:function update(u){Object.keys(u).forEach(function(k){return entry[k]=u[k];});_this.core.emit('osjs/tray:update',_this.entries);},destroy:function destroy(){return _this.remove(entry);}};return obj;}/**
     * Removes a Tray entry
     * @param {TrayEntry} entry The tray entry
     */},{key:"remove",value:function remove(entry){var foundIndex=this.entries.findIndex(function(e){return e===entry;});if(foundIndex!==-1){this.entries.splice(foundIndex,1);this.core.emit('osjs/tray:remove',entry);this.core.emit('osjs/tray:update',this.entries);}}}]);return Tray;}();/***/},/***/"./src/utils/dnd.js":/*!**************************!*\
  !*** ./src/utils/dnd.js ***!
  \**************************/ /*! exports provided: draggable, droppable */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"draggable",function(){return draggable;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"droppable",function(){return droppable;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Creates a "draggable" element
 * @param {Element} el The DOM element to apply to
 * @param {string} [options.type=application/json] Content Type
 * @param {string} [options.effect=move] DnD effect (cursor)
 * @param {Function} [options.ondragstart] Callback to event (ev) => {}
 * @param {Function} [options.ondragend] Callback to event (ev) => {}
 * @param {Function} [options.setDragImage] Set custom drag image (browser dependent)
 * @return {Object} An object with a destructor
 */var draggable=function draggable(el){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _Object$assign=Object.assign({},{type:'application/json',effect:'move',ondragstart:function ondragstart(){return true;},ondragend:function ondragend(){return true;},setDragImage:null},options),type=_Object$assign.type,effect=_Object$assign.effect,data=_Object$assign.data,ondragstart=_Object$assign.ondragstart,ondragend=_Object$assign.ondragend,setDragImage=_Object$assign.setDragImage;var hasDragImage=typeof setDragImage==='function';var transferData=type==='application/json'?JSON.stringify(data):data;var dragstart=function dragstart(ev){el.setAttribute('aria-grabbed','true');if(ev.dataTransfer){if(ev.dataTransfer.setDragImage&&hasDragImage){try{setDragImage(ev,el,options);}catch(e){console.warn('draggable dragstart setDragImage error',e);}}try{ev.dataTransfer.effectAllowed=effect;ev.dataTransfer.setData(type,transferData);}catch(e){console.warn('draggable dragstart dataTransfer error',e);}}return ondragstart(ev);};var dragend=function dragend(ev){el.setAttribute('aria-grabbed','false');return ondragend(ev);};var destroy=function destroy(){el.removeAttribute('draggable');el.removeAttribute('aria-grabbed');el.removeEventListener('dragstart',dragstart);el.removeEventListener('dragend',dragend);el.classList.remove('osjs__draggable');};el.setAttribute('draggable','true');el.setAttribute('aria-grabbed','false');el.addEventListener('dragstart',dragstart);el.addEventListener('dragend',dragend);el.classList.add('osjs__draggable');return{destroy:destroy};};/**
 * Creates a "droppable" element
 * @param {Element} el The DOM element to apply to
 * @param {string} [options.type=application/json] Content Type
 * @param {string} [options.effect=move] DnD effect (cursor)
 * @param {Function} [options.ondragenter] Callback to event (ev) => {}
 * @param {Function} [options.ondragover] Callback to event (ev) => {}
 * @param {Function} [options.ondragleave] Callback to event (ev) => {}
 * @param {Function} [options.ondrop] Callback to event (ev, data, files) => {}
 * @return {Object} An object with a destructor
 */var droppable=function droppable(el){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var _Object$assign2=Object.assign({},{type:'application/json',effect:'move',ondragenter:function ondragenter(){return true;},ondragover:function ondragover(){return true;},ondragleave:function ondragleave(){return true;},ondrop:function ondrop(){return true;}},options),type=_Object$assign2.type,effect=_Object$assign2.effect,ondragenter=_Object$assign2.ondragenter,ondragover=_Object$assign2.ondragover,ondragleave=_Object$assign2.ondragleave,ondrop=_Object$assign2.ondrop;var retval=function retval(fn){try{for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var result=fn.apply(void 0,args);if(typeof result==='boolean'){return result;}}catch(e){console.warn('droppable value parsing error',e);}return true;};var dragenter=function dragenter(ev){return ondragenter(ev);};var dragleave=function dragleave(ev){el.classList.remove('osjs__drop');return retval(ondragleave,ev);};var dragover=function dragover(ev){ev.preventDefault();var inside=el.contains(ev.target);if(!inside){el.classList.remove('osjs__drop');return false;}ev.stopPropagation();ev.dataTransfer.dropEffect=effect;el.classList.add('osjs__drop');return retval(ondragover,ev);};var drop=function drop(ev){var data;var files=[];if(ev.dataTransfer){files=ev.dataTransfer.files?Array.from(ev.dataTransfer.files):[];try{var transfer=ev.dataTransfer.getData(type);try{if(type==='application/json'){data=typeof transfer==='undefined'?transfer:JSON.parse(transfer);}else{data=transfer;}}catch(e){data=transfer;console.warn('droppable dataTransfer parsing error',e);}}catch(e){console.warn('droppable dataTransfer parsing error',e);}}ev.stopPropagation();ev.preventDefault();el.classList.remove('osjs__drop');return retval(ondrop,ev,data,files);};var destroy=function destroy(){el.removeAttribute('aria-dropeffect',effect);el.removeEventListener('dragenter',dragenter);el.removeEventListener('dragover',dragover);el.removeEventListener('dragleave',dragleave);el.removeEventListener('drop',drop);el.classList.remove('osjs__droppable');};el.setAttribute('aria-dropeffect',effect);el.addEventListener('dragenter',dragenter);el.addEventListener('dragover',dragover);el.addEventListener('dragleave',dragleave);el.addEventListener('drop',drop);el.classList.add('osjs__droppable');return{destroy:destroy};};/***/},/***/"./src/utils/dom.js":/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/ /*! exports provided: style, script, escapeHtml, createCssText, handleTabOnTextarea, getActiveElement, supportsPassive, playSound, supportedMedia, createNativeNotification */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"style",function(){return style;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"script",function(){return script;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"escapeHtml",function(){return escapeHtml;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createCssText",function(){return createCssText;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"handleTabOnTextarea",function(){return handleTabOnTextarea;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getActiveElement",function(){return getActiveElement;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"supportsPassive",function(){return supportsPassive;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"playSound",function(){return playSound;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"supportedMedia",function(){return supportedMedia;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createNativeNotification",function(){return createNativeNotification;});/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var supportsNativeNotification='Notification'in window;/**
 * Creates a new CSS DOM element
 * @param {Element} root Root node
 * @param {String} src Source
 * @return {Promise<ScriptElement, Error>}
 */var style=function style(root,src){return new Promise(function(resolve,reject){var el=document.createElement('link');el.setAttribute('rel','stylesheet');el.setAttribute('type','text/css');el.onload=function(){return resolve(el);};el.onerror=function(err){return reject(err);};el.setAttribute('href',src);root.appendChild(el);return el;});};/**
 * Creates a new Script DOM element
 * @param {Element} root Root node
 * @param {String} src Source
 * @return {Promise<StyleElement>, Error>}
 */var script=function script(root,src){return new Promise(function(resolve,reject){var el=document.createElement('script');el.onreadystatechange=function(){if(this.readyState==='complete'||this.readyState==='loaded'){resolve(el);}};el.onerror=function(err){return reject(err);};el.onload=function(){return resolve(el);};el.src=src;root.appendChild(el);return el;});};/**
 * Escape text so it is "safe" for HTML usage
 * @param {String} text Input text
 * @return {String}
 */var escapeHtml=function escapeHtml(text){var div=document.createElement('div');div.innerHTML=text;return div.textContent;};/**
 * Serialize an object to CSS
 * @param {Object} obj Object
 * @return {String} CSS text
 */var createCssText=function createCssText(obj){return Object.keys(obj).map(function(k){return[k,k.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase()];}).map(function(k){return"".concat(k[1],": ").concat(obj[k[0]]);}).join(';');};/**
 * Inserts a tab in the given event target
 * @param {Event} ev DOM Event
 */var handleTabOnTextarea=function handleTabOnTextarea(ev){var input=ev.target;var selectionStart=input.selectionStart,selectionEnd=input.selectionEnd,value=input.value;input.value=value.substring(0,selectionStart)+'\t'+value.substring(selectionEnd,value.length);selectionStart++;input.selectionStart=selectionStart;input.selectionEnd=selectionStart;};/*
 * Get active element if belonging to root
 * @param {Element} root DOM Element
 * @return {Element|null}
 */var getActiveElement=function getActiveElement(root){if(root){var ae=document.activeElement;return root.contains(ae)?ae:null;}return null;};/**
 * Checks if passive events is supported
 * @link https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {boolean}
 */var supportsPassive=function(){var supportsPassive=false;try{var opts=Object.defineProperty({},'passive',{get:function get(){return supportsPassive=true;}});window.addEventListener('testPassive',null,opts);window.removeEventListener('testPassive',null,opts);}catch(e){/* noop */}return function(){return supportsPassive;};}();/**
 * Plays a sound
 * @param {string} src Sound source
 * @param {Object} [options] Options
 * @return {Promise<HTMLAudioElement>}
 */var playSound=function playSound(src){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var opts=Object.assign({volume:1.0},options);var audio=new Audio();audio.voule=opts.volume;audio.src=src;try{var p=audio.play();if(p instanceof Promise){return p.then(function(){return audio;}).catch(function(err){return console.warn('Failed to play sound',src,err);});}}catch(e){console.warn('Failed to play sound',src,e);}return Promise.resolve(audio);};/**
 * Gets supported media types
 * @return {object}
 */var supportedMedia=function supportedMedia(){var videoFormats={mp4:'video/mp4',ogv:'video/ogg'};var audioFormats={mp3:'audio/mpeg',mp4:'audio/mp4',oga:'audio/ogg'};var reduce=function reduce(list,elem){return Object.keys(list).reduce(function(result,format){return Object.assign(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},format,elem.canPlayType(list[format])==='probably'),result);},{});};return{audio:reduce(audioFormats,document.createElement('audio')),video:reduce(videoFormats,document.createElement('video'))};};/**
 * Creates a native notification
 * @param {object} options Notification options
 * @param {Function} [onclick] Callback on click
 * @return {Promise<window.Notification>}
 */var createNativeNotification=function createNativeNotification(options,onclick){var Notif=window.Notification;var create=function create(){var notification=new Notif(options.title,{body:options.message,icon:options.icon});notification.onclick=onclick;return notification;};if(supportsNativeNotification){if(Notif.permission==='granted'){return Promise.resolve(create());}else if(Notif.permission!=='denied'){return new Promise(function(resolve,reject){Notif.requestPermission(function(permission){return permission==='granted'?resolve(true):reject(permission);});}).then(create);}}return Promise.reject('Unsupported');};/***/},/***/"./src/utils/fetch.js":/*!****************************!*\
  !*** ./src/utils/fetch.js ***!
  \****************************/ /*! exports provided: fetch */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"fetch",function(){return fetch;});/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */"./node_modules/@babel/runtime/helpers/slicedToArray.js");/* harmony import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/typeof */"./node_modules/@babel/runtime/helpers/typeof.js");/* harmony import */var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /*
 * Creates URL request path
 */var encodeQueryData=function encodeQueryData(data){return Object.keys(data).filter(function(k){return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(data[k])!=='object';}).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(data[k]);}).join('&');};var bodyTypes=[window.ArrayBuffer,window.ArrayBufferView,window.Blob,window.File,window.URLSearchParams,window.FormData].filter(function(t){return!!t;});/*
 * Creates fetch() options
 */var createFetchOptions=function createFetchOptions(url,options,type){var fetchOptions=Object.assign({},{credentials:'same-origin',method:'get',headers:{}},options);if(type==='json'){fetchOptions.headers=Object.assign(fetchOptions.headers,{'Accept':'application/json, text/plain, */*','Content-Type':'application/json'});}if(fetchOptions.body&&fetchOptions.method.toLowerCase()==='get'){url+='?'+encodeQueryData(fetchOptions.body);delete fetchOptions.body;}var hasBody=typeof fetchOptions.body!=='undefined';var stringBody=typeof fetchOptions.body==='string';if(type==='json'&&hasBody&&!stringBody){if(!(fetchOptions.body instanceof FormData)){var found=bodyTypes.find(function(t){return fetchOptions.body instanceof t;});if(!found){fetchOptions.body=JSON.stringify(fetchOptions.body);}}}return[url,fetchOptions];};/**
 * Make a HTTP request
 *
 * @param {String} url The endpoint
 * @param {Options} [options] fetch options
 * @param {String} [type] Request / Response type
 * @return {*}
 */var fetch=function fetch(url){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var type=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var _createFetchOptions=createFetchOptions(url,options,type),_createFetchOptions2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_createFetchOptions,2),target=_createFetchOptions2[0],fetchOptions=_createFetchOptions2[1];var createErrorRejection=function createErrorRejection(response,error){return Promise.reject(new Error(error?error:"".concat(response.status," (").concat(response.statusText,")")));};return window.fetch(target,fetchOptions).then(function(response){if(!response.ok){var contentType=response.headers.get('content-type');var method=contentType&&contentType.indexOf('application/json')!==-1?'json':'text';return response[method]().then(function(data){return createErrorRejection(response,data.error);});}return type==='json'?response.json():response;});};/***/},/***/"./src/utils/locale.js":/*!*****************************!*\
  !*** ./src/utils/locale.js ***!
  \*****************************/ /*! exports provided: getLocale, translatableFlat, translatable, format, clientLocale */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getLocale",function(){return getLocale;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"translatableFlat",function(){return translatableFlat;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"translatable",function(){return translatable;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"format",function(){return format;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"clientLocale",function(){return clientLocale;});/* harmony import */var dateformat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! dateformat */"./node_modules/dateformat/lib/dateformat.js");/* harmony import */var dateformat__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_0__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var FALLBACK_LOCALE='en_EN';// TODO
var prefixMap={nb:'nb_NO'};var sprintfRegex=/\{(\d+)\}/g;var sprintfMatcher=function sprintfMatcher(args){return function(m,n){return n in args?args[n]:m;};};var getDefaultLocale=function getDefaultLocale(core,key){return core.config('locale.'+key);};var getUserLocale=function getUserLocale(core,key,defaultLocale){return core.make('osjs/settings').get('osjs/locale',key,defaultLocale);};/**
 * Gest the set localization
 * @param {Core} core OS.js Core IoC
 * @param {string} key Settings key (locales.*)
 * @return {Object} An object with defaultLocale and userLocale
 */var getLocale=function getLocale(core,key){var defaultLocale=getDefaultLocale(core,key);var userLocale=getUserLocale(core,key,defaultLocale);return{defaultLocale:defaultLocale,userLocale:userLocale};};/**
 * Gets a raw string from a tree of translations based on key
 *
 * Note that this function will fall back to a pre-configured locale
 * if the given locale names were not found.
 *
 * @private
 * @param {Object}  list      The tree of translations
 * @param {string}  ul        User locale name
 * @param {string}  dl        Default locale name
 * @param {string}  k         The key to translate from tree
 * @return {string}           The raw string
 */var getFromList=function getFromList(list,ul,dl,k){var localizedList=list[ul]||list[dl]||list[FALLBACK_LOCALE]||{};return localizedList[k]||k;};/**
 * Translates a key + arguments from a tree of translations
 *
 * @example
 *  translate({en_EN: {foo: 'Hello {0}'}}, 'nb_NO', 'en_EN', 'foo', 'World') => 'Hello World'
 *
 * @private
 * @param {Object}  list      The tree of translations
 * @param {string}  ul        User locale name
 * @param {string}  dl        Default locale name
 * @param {string}  k         The key to translate from tree
 * @param {...*}    args      A list of arguments that are defined in the translation string
 * @return {string}           The translated string
 */var translate=function translate(list,ul,dl,k){var fmt=getFromList(list,ul,dl,k);for(var _len=arguments.length,args=new Array(_len>4?_len-4:0),_key=4;_key<_len;_key++){args[_key-4]=arguments[_key];}return fmt.replace(sprintfRegex,sprintfMatcher(args));};/**
 * Translates a given flat tree of locales
 *
 * Will automatically detect the current locale from the user.
 *
 * Returns a function that takes a key and returns the correct string.
 *
 * @example
 *  translatableFlat({en_EN: 'Hello World'}); // => 'Hello World'
 *
 * @param {Object} list The tree of translations
 * @param {string} defaultValue Default value if none found
 * @return {string} The translated string
 */var translatableFlat=function translatableFlat(core){return function(list,defaultValue){var _getLocale=getLocale(core,'language'),defaultLocale=_getLocale.defaultLocale,userLocale=_getLocale.userLocale;return list[userLocale]||list[defaultLocale]||list[FALLBACK_LOCALE]||defaultValue;};};/**
 * Translates a given tree of locales.
 *
 * Will automatically detect the current locale from the user.
 *
 * Returns a `translate` function that takes a key and list of arguments.
 *
 * @see translate
 * @example
 *  translatable({en_EN: {foo: 'Hello {0}'}})
 *    ('foo', 'World'); // => 'Hello World'
 * @param {string} k List key
 * @param {...args} Format arguments
 * @return {Function} A translation function
 */var translatable=function translatable(core){return function(list){var _getLocale2=getLocale(core,'language'),defaultLocale=_getLocale2.defaultLocale,userLocale=_getLocale2.userLocale;return function(k){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}return translate.apply(void 0,[list,userLocale,defaultLocale,k].concat(args));};};};/**
 * Formats a given Date to a specified format
 *
 * Will automatically detect the current locale from the user.
 *
 * Formats are 'shortDate', 'mediumDate', 'longDate', 'fullDate',
 *       'shortTime' and 'longTime'
 *
 * @param {Date} date Date object
 * @param {string} fmt Format
 * @return {string}
 */var format=function format(core){return function(date,fmt){var _getLocale3=getLocale(core,'format.'+fmt),defaultLocale=_getLocale3.defaultLocale,userLocale=_getLocale3.userLocale;var useFormat=userLocale||defaultLocale||fmt;return dateformat__WEBPACK_IMPORTED_MODULE_0___default()(date,useFormat);};};/**
 * Figures out what locale the browser is running as
 *
 * @param {string} [defaultLocale=en_EN] Default locale if none found
 * @return {string} The browser locale
 */var clientLocale=function(){var nav=window.navigator||{};var browserLanguage=nav.userLanguage||nav.language||'';var get=function get(l){return prefixMap[l]?prefixMap[l]:l.match(/_/)?l:l?"".concat(l,"_").concat(l.toUpperCase()):'';};var langs=(nav.languages||[browserLanguage]).map(function(l){return get(l.replace('-','_'));});var lang=langs[langs.length-1];return function(){var defaultLocale=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'en_EN';return lang||defaultLocale;};}();/***/},/***/"./src/utils/preloader.js":/*!********************************!*\
  !*** ./src/utils/preloader.js ***!
  \********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Preloader;});/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */"./node_modules/@babel/runtime/helpers/defineProperty.js");/* harmony import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! ./dom */"./src/utils/dom.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * The Preloader loads styles and scripts
 */var Preloader=/*#__PURE__*/function(){function Preloader(root){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Preloader);/**
     * A list of cached preloads
     * @type {String[]}
     */this.loaded=[];this.$root=root;}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Preloader,[{key:"destroy",value:function destroy(){this.loaded=[];}/**
     * Loads all resources required for a package
     * @param {Array} list A list of resources
     * @param {Boolean} [force=false] Force loading even though previously cached
     * @return {String[]} A list of failed resources
     */},{key:"load",value:function load(list){var _this=this;var force=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var cached=function cached(entry){return force?false:_this.loaded.find(function(src){return src===entry;});};var promises=list.filter(function(entry){return!cached(entry);}).map(function(entry){console.debug('Packages::preload()',entry);var p=entry.match(/\.js$/)?Object(_dom__WEBPACK_IMPORTED_MODULE_3__["script"])(_this.$root,entry):Object(_dom__WEBPACK_IMPORTED_MODULE_3__["style"])(_this.$root,entry);return p.then(function(el){return{success:true,entry:entry,el:el};}).catch(function(error){return{success:false,entry:entry,error:error};});});return Promise.all(promises).then(function(results){return _this._load(results,cached);});}/**
     * Checks the loaded list
     * @param {Object[]} results Preload results
     * @param {string[]} cached Already cached preloads
     */},{key:"_load",value:function _load(results,cached){var _this2=this;var successes=results.filter(function(res){return res.success;});successes.forEach(function(entry){if(!cached(entry)){_this2.loaded.push(entry);}});var failed=results.filter(function(res){return!res.success;});failed.forEach(function(failed){return console.warn('Failed loading',failed.entry,failed.error);});return{errors:failed.map(function(failed){return failed.entry;}),elements:successes.reduce(function(result,iter){return Object.assign({},result,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},iter.entry,iter.el));},{})};}}]);return Preloader;}();/***/},/***/"./src/utils/url.js":/*!**************************!*\
  !*** ./src/utils/url.js ***!
  \**************************/ /*! exports provided: urlResolver */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"urlResolver",function(){return urlResolver;});/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var urlResolver=function urlResolver(configuration){var http=configuration.http,ws=configuration.ws;return function(){var endpoint=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'/';var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var metadata=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(typeof endpoint!=='string'){return http.public;}else if(endpoint.match(/^(http|ws|ftp)s?:/i)){return endpoint;}var _Object$assign=Object.assign({},{type:null,prefix:options.type==='websocket'},options),type=_Object$assign.type,prefix=_Object$assign.prefix;var str=type==='websocket'?ws.uri:http.uri;var url=endpoint.replace(/^\/+/,'');if(metadata.type){var path=endpoint.replace(/^\/?/,'/');var _type=metadata.type==='theme'?'themes':metadata.type==='icons'?'icons':'apps';url="".concat(_type,"/").concat(metadata.name).concat(path);}return prefix?str.replace(/\/$/,'')+url.replace(/^\/?/,'/'):http.public.replace(/^\/?/,'/')+url;};};/***/},/***/"./src/utils/vfs.js":/*!**************************!*\
  !*** ./src/utils/vfs.js ***!
  \**************************/ /*! exports provided: parentDirectory, pathJoin, humanFileSize, transformReaddir, transformArrayBuffer, getFileIcon, createFileIter */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"parentDirectory",function(){return parentDirectory;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"pathJoin",function(){return pathJoin;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"humanFileSize",function(){return humanFileSize;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"transformReaddir",function(){return transformReaddir;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"transformArrayBuffer",function(){return transformArrayBuffer;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"getFileIcon",function(){return getFileIcon;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"createFileIter",function(){return createFileIter;});/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Get parent directory
 * @param {String} path Directory
 * @return {String} Parent directory
 */var parentDirectory=function parentDirectory(path){return path.replace(/\/$/,'').split('/').filter(function(item,index,arr){return index<arr.length-1;}).join('/').replace(/(\/+)?$/,'/');};/**
 * Joins paths
 * @param {String[]} args paths
 * @return {String}
 */var pathJoin=function pathJoin(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return args.reduce(function(o,a,i){return o.concat([i>0?a.replace(/\/$/,''):a]);},[]).join('/');};/*
 * Sorts an array of files
 */var sortFn=function sortFn(t){return function(k,d){return function(a,b){if(t==='string'){return d==='asc'?String(a[k]).localeCompare(b[k]):String(b[k]).localeCompare(a[k]);}else if(t==='date'){return d==='asc'?new Date(a[k])>new Date(b[k]):new Date(b[k])>new Date(a[k]);}return a[k]<b[k]?-1:a[k]>b[k]?d==='asc'?1:0:d==='asc'?0:1;};};};/*
 * Map of sorters from readdir attributes
 */var sortMap={size:sortFn('number'),mtime:sortFn('date'),ctime:sortFn('date'),atime:sortFn('date')};/**
 * Creates "special" directory entries
 * @param {String} path The path to the readdir root
 * @return {Object[]}
 */var createSpecials=function createSpecials(path){var specials=[];var stripped=path.replace(/\/+/g,'/').replace(/^(\w+):/,'')||'/';if(stripped!=='/'){specials.push({isDirectory:true,isFile:false,mime:null,size:0,stat:{},filename:'..',path:parentDirectory(path)||'/'});}return specials;};/**
 * Creates a FileReader (promisified)
 * @param {String} method The method to call
 * @param {ArrayBuffer} ab The ArrayBuffer
 * @param {String} mime The MIME type
 * @return {Promise}
 */var createFileReader=function createFileReader(method,ab,mime){return new Promise(function(resolve,reject){var b=new Blob([ab],{type:mime});var r=new FileReader();r.onerror=function(e){return reject(e);};r.onloadend=function(){return resolve(r.result);};r[method](b);});};/**
 * Converts a number (bytez) into human-readable string
 * @param {Number} bytes Input
 * @param {Boolean} [si=false] Use SI units
 * @return {String}
 */var humanFileSize=function humanFileSize(bytes){var si=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;if(isNaN(bytes)||typeof bytes!=='number'){bytes=0;}var thresh=si?1000:1024;var units=si?['kB','MB','GB','TB','PB','EB','ZB','YB']:['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];if(bytes<thresh){return bytes+' B';}var u=-1;do{bytes/=thresh;++u;}while(bytes>=thresh);return"".concat(bytes.toFixed(1)," ").concat(units[u]);};/**
 * Transforms a readdir result
 * @param {Object} root The path to the readdir root
 * @param Object[] files An array of readdir results
 * @param {Object} options Options
 * @param {Boolean} [options.showHiddenFiles=true] Show hidden files
 * @param {Function} [options.filter] A filter
 * @param {String} [options.sortBy='filename'] Sort by this attribute
 * @param {String} [options.sortDir='asc'] Sort in this direction
 * @return {Object[]}
 */var transformReaddir=function transformReaddir(_ref,files){var path=_ref.path;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};options=Object.assign({},{showHiddenFiles:false,sortBy:'filename',sortDir:'asc'},options);var _options=options,sortDir=_options.sortDir,sortBy=_options.sortBy,filter=_options.filter;if(typeof filter!=='function'){filter=function filter(){return true;};}if(['asc','desc'].indexOf(sortDir)===-1){sortDir='asc';}var filterHidden=options.showHiddenFiles?function(){return true;}:function(file){return file.filename.substr(0,1)!=='.';};var sorter=sortMap[sortBy]?sortMap[sortBy]():sortFn('string');var modify=function modify(file){return Object.assign(file,{humanSize:humanFileSize(file.size)});};var sortedSpecial=createSpecials(path).sort(sorter(sortBy,sortDir)).map(modify);var sortedDirectories=files.filter(function(file){return file.isDirectory;}).sort(sorter(sortBy,sortDir)).filter(filterHidden).filter(filter).map(modify);var sortedFiles=files.filter(function(file){return!file.isDirectory;}).sort(sorter(sortBy,sortDir)).filter(filterHidden).filter(filter).map(modify);return[].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sortedSpecial),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sortedDirectories),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sortedFiles));};/**
 * Transform an ArrayBuffer
 * @param {ArrayBuffer} ab The ArrayBuffer
 * @param {String} mime The MIME type
 * @param {String} type Transform to this type
 * @return {DOMString|String|Blob|ArrayBuffer}
 */var transformArrayBuffer=function transformArrayBuffer(ab,mime,type){if(type==='string'){return createFileReader('readAsText',ab,mime);}else if(type==='uri'){return createFileReader('readAsDataURL',ab,mime);}else if(type==='blob'){return Promise.resolve(new Blob([ab],{type:mime}));}return Promise.resolve(ab);};/**
 * Gets an icon from file stat
 * @param {Object} file The file stat object
 * @return {String|Object}
 */var getFileIcon=function getFileIcon(map){var find=function find(file){var found=Object.keys(map).find(function(re){var regexp=new RegExp(re);return regexp.test(file.mime);});return found?map[found]:{name:'application-x-executable'};};return function(file){return file.isDirectory?{name:'folder'}:find(file);};};/**
 * Creates a file iter for scandir
 * @param {Object} stat file stat
 * @return {Object}
 */var createFileIter=function createFileIter(stat){return Object.assign({isDirectory:false,isFile:true,mime:'application/octet-stream',icon:null,size:-1,path:null,filename:null,label:null,stat:{},id:null,parent_id:null},stat);};/***/},/***/"./src/vfs.js":/*!********************!*\
  !*** ./src/vfs.js ***!
  \********************/ /*! exports provided: readdir, readfile, writefile, copy, rename, move, mkdir, unlink, exists, stat, url, download, search, touch */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"readdir",function(){return readdir;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"readfile",function(){return readfile;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"writefile",function(){return writefile;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"copy",function(){return copy;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"rename",function(){return rename;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"move",function(){return move;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"mkdir",function(){return mkdir;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"unlink",function(){return unlink;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"exists",function(){return exists;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"stat",function(){return stat;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"url",function(){return url;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"download",function(){return download;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"search",function(){return search;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"touch",function(){return touch;});/* harmony import */var _utils_vfs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! ./utils/vfs */"./src/utils/vfs.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ // Makes sure our input paths are object(s)
var pathToObject=function pathToObject(path){return Object.assign({id:null},typeof path==='string'?{path:path}:path);};// Handles directory listing result(s)
var handleDirectoryList=function handleDirectoryList(path,options){return function(result){return Promise.resolve(result.map(function(stat){return Object(_utils_vfs__WEBPACK_IMPORTED_MODULE_0__["createFileIter"])(stat);})).then(function(result){return Object(_utils_vfs__WEBPACK_IMPORTED_MODULE_0__["transformReaddir"])(pathToObject(path),result,{showHiddenFiles:options.showHiddenFiles!==false,filter:options.filter});});};};/**
 * Read a directory
 *
 * @param {Object|String} path The path to read
 * @param {Object} [options] Options
 * @return {Promise<Object[], Error>} A list of files
 */var readdir=function readdir(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.readdir(pathToObject(path),options,mount).then(handleDirectoryList(path,options));};};/**
 * Reads a file
 *
 * Available types are 'arraybuffer', 'blob', 'uri' and 'string'
 *
 * @param {Object|String} path The path to read
 * @param {String} [type=string] Return this content type
 * @param {Object} [options] Options
 * @return {Promise<ArrayBuffer, Error>}
 */var readfile=function readfile(adapter,mount){return function(path){var type=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'string';var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return adapter.readfile(pathToObject(path),type,options,mount).then(function(response){return Object(_utils_vfs__WEBPACK_IMPORTED_MODULE_0__["transformArrayBuffer"])(response.body,response.mime,type);});};};/**
 * Writes a file
 * @param {Object|String} path The path to write
 * @param {ArrayBuffer|Blob|String} data The data
 * @param {Object} [options] Options
 * @return {Promise<number, Error>} File size
 */var writefile=function writefile(adapter,mount){return function(path,data){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var binary=data instanceof ArrayBuffer||data instanceof Blob?data:new Blob([data],{type:'application/octet-stream'});return adapter.writefile(pathToObject(path),binary,options,mount);};};/**
 * Copies a file or directory (move)
 * @param {Object|String} from The source (from)
 * @param {Object|String} to The destination (to)
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var copy=function copy(adapter,mount){return function(from,to){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return adapter.copy(pathToObject(from),pathToObject(to),options,mount);};};/**
 * Renames a file or directory (move)
 * @param {Object|String} from The source (from)
 * @param {Object|String} to The destination (to)
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var rename=function rename(adapter,mount){return function(from,to){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return adapter.rename(pathToObject(from),pathToObject(to),options,mount);};};/**
 * Alias of 'readme'
 * @param {Object|String} from The source (from)
 * @param {Object|String} to The destination (to)
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var move=rename;/**
 * Creates a directory
 * @param {Object|String} path The path to new directory
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var mkdir=function mkdir(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.mkdir(pathToObject(path),options,mount);};};/**
 * Removes a file or directory
 * @param {Object|String} path The path to remove
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var unlink=function unlink(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.unlink(pathToObject(path),options,mount);};};/**
 * Checks if path exists
 * @param {Object|String} path The path to check
 * @param {Object} [options] Options
 * @return {Promise<boolean, Error>}
 */var exists=function exists(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.exists(pathToObject(path),options,mount);};};/**
 * Gets the stats of the file or directory
 * @param {Object|String} path The path to check
 * @param {Object} [options] Options
 * @return {Promise<Object, Error>}
 */var stat=function stat(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.stat(pathToObject(path),options,mount).then(function(stat){return Object(_utils_vfs__WEBPACK_IMPORTED_MODULE_0__["createFileIter"])(stat);});};};/**
 * Gets an URL to a resource defined by file
 * @param {Object|String} path The file
 * @param {Object} [options] Options
 * @return {Promise<string, Error>}
 */var url=function url(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.url(pathToObject(path),options,mount);};};/**
 * Initiates a native browser download of the file
 * @param {Object|String} path The file
 * @param {Object} [options] Options
 * @return {Promise}
 */var download=function download(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return typeof adapter.download==='function'&&options.readfile!==true?adapter.download(pathToObject(path),options,mount):readfile(adapter)(path,'blob').then(function(body){var filename=pathToObject(path).path.split('/').splice(-1)[0];var url=window.URL.createObjectURL(body);var a=document.createElement('a');a.style.display='none';a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){window.URL.revokeObjectURL(url);a.remove();},1);});};};/**
 * Searches for files and folders
 * @param {Object|String} root The root
 * @param {String} pattern Search pattern
 * @param {Object} [options] Options
 * @return {Promise<Object[], Error>} A list of files
 */var search=function search(adapter,mount){return function(root,pattern){var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if(mount.attributes&&mount.attributes.searchable===false){return Promise.resolve([]);}return adapter.search(pathToObject(root),pattern,options,mount).then(handleDirectoryList(root,options));};};/**
 * Touches a file
 * @param {Object|String} path File path
 * @return {Promise<boolean, Error>}
 */var touch=function touch(adapter,mount){return function(path){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};return adapter.touch(pathToObject(path),options,mount);};};/***/},/***/"./src/websocket.js":/*!**************************!*\
  !*** ./src/websocket.js ***!
  \**************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Websocket;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var eventNames=['open','close','message','error'];/**
 * Application Socket
 *
 * @desc This is just an abstraction above the standard browser provided `WebSocket` class.
 * Since this class implements the EventHandler, use the `.on('event')` pattern instead of `.onevent`.
 *
 */var Websocket=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Websocket,_EventEmitter);/**
   * Create a new Websocket
   * @param {String} uri Connection URI
   * @param {Object} options Websocket options
   */function Websocket(name,uri){var _this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Websocket);console.debug('Websocket::constructor()',name,uri);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Websocket).call(this,'Websocket@'+name));_this.uri=uri;_this.connected=false;_this.connecting=false;_this.reconnecting=false;_this.connectfailed=false;_this.options=Object.assign({interval:1000,open:true},options);/**
     * The Websocket
     * @type {WebSocket}
     */_this.connection=null;_this._attachEvents();if(_this.options.open){_this.open();}return _this;}/**
   * Destroys the current connection
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Websocket,[{key:"_destroyConnection",value:function _destroyConnection(){var _this2=this;if(!this.connection){return;}eventNames.forEach(function(name){_this2.connection["on".concat(name)]=function(){};});this.reconnecting=clearInterval(this.reconnecting);this.connection=null;}/**
     * Attaches internal events
     */},{key:"_attachEvents",value:function _attachEvents(){var _this3=this;this.on('open',function(ev){var reconnected=!!_this3.reconnecting;_this3.connected=true;_this3.reconnecting=false;_this3.connectfailed=false;_this3.reconnecting=clearInterval(_this3.reconnecting);_this3.emit('connected',ev,reconnected);});this.on('close',function(ev){if(!_this3.connected&&!_this3.connectfailed){_this3.emit('failed',ev);_this3.connectfailed=true;}clearInterval(_this3.reconnecting);_this3._destroyConnection();_this3.connected=false;_this3.reconnecting=setInterval(function(){_this3.open();},_this3.options.interval);_this3.emit('disconnected',ev);});}/**
     * Opens the connection
     * @param {boolean} [reconnect=false] Force reconnection
     */},{key:"open",value:function open(){var _this4=this;var reconnect=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;if(this.connection&&!reconnect){return;}this._destroyConnection();this.reconnecting=clearInterval(this.reconnecting);this.connection=new WebSocket(this.uri);eventNames.forEach(function(name){_this4.connection["on".concat(name)]=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this4.emit.apply(_this4,[name].concat(args));};});}/**
     * Wrapper for sending data
     */},{key:"send",value:function send(){var _this$connection;return(_this$connection=this.connection).send.apply(_this$connection,arguments);}/**
     * Wrapper for closing
     */},{key:"close",value:function close(){var _this$connection2;return(_this$connection2=this.connection).close.apply(_this$connection2,arguments);}}]);return Websocket;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]);/***/},/***/"./src/window-behavior.js":/*!********************************!*\
  !*** ./src/window-behavior.js ***!
  \********************************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return WindowBehavior;});/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! ./utils/dom.js */"./src/utils/dom.js");/* harmony import */var css_mediaquery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js");/* harmony import */var css_mediaquery__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(css_mediaquery__WEBPACK_IMPORTED_MODULE_3__);/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */var CASCADE_DISTANCE=10;var isPassive=Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__["supportsPassive"])();var touchArg=isPassive?{passive:true}:false;/*
 * Map of available "actions"
 */var actionMap={maximize:function maximize(win){return win.maximize()?null:win.restore();},minimize:function minimize(win){return win.minimize();},close:function close(win){return win.close();}};/*
 * Creates a clamper for resize/move
 */var clamper=function clamper(win){var _win$attributes=win.attributes,maxDimension=_win$attributes.maxDimension,minDimension=_win$attributes.minDimension;var _win$state=win.state,position=_win$state.position,dimension=_win$state.dimension;var maxPosition={left:position.left+dimension.width-minDimension.width,top:position.top+dimension.height-minDimension.height};var clamp=function clamp(min,max,current){var value=min===-1?current:Math.max(min,current);return max===-1?value:Math.min(max,value);};return function(width,height,top,left){return{width:clamp(minDimension.width,maxDimension.width,width),height:clamp(minDimension.height,maxDimension.height,height),top:clamp(-1,maxPosition.top,top),left:clamp(-1,maxPosition.left,left)};};};/*
 * Creates a resize handler
 */var resizer=function resizer(win,handle){var clamp=clamper(win);var _win$state2=win.state,position=_win$state2.position,dimension=_win$state2.dimension;var directions=handle.getAttribute('data-direction').split('');var going=function going(dir){return directions.indexOf(dir)!==-1;};var xDir=going('e')?1:going('w')?-1:0;var yDir=going('s')?1:going('n')?-1:0;return function(diffX,diffY){var width=dimension.width+diffX*xDir;var height=dimension.height+diffY*yDir;var top=yDir===-1?position.top+diffY:position.top;var left=xDir===-1?position.left+diffX:position.left;return clamp(width,height,top,left);};};/*
 * Creates a movement handler
 */var mover=function mover(win,rect){var position=win.state.position;return function(diffX,diffY){var top=Math.max(position.top+diffY,rect.top);var left=position.left+diffX;return{top:top,left:left};};};/*
 * Calculates a new initial position for window
 */var getCascadePosition=function getCascadePosition(win,rect,pos){var startX=CASCADE_DISTANCE+rect.left;var startY=CASCADE_DISTANCE+rect.top;var distance=CASCADE_DISTANCE;var wrap=CASCADE_DISTANCE*2;var newX=startX+win.wid%wrap*distance;var newY=startY+win.wid%wrap*distance;var top=typeof pos.top==='number'&&Number.isInteger(pos.top)?Math.max(rect.top,pos.top):newY;var left=typeof pos.left==='number'&&Number.isInteger(pos.left)?Math.max(rect.left,pos.left):newX;return{top:top,left:left};};/*
 * Normalizes event input (position)
 */var getEvent=function getEvent(ev){var clientX=ev.clientX,clientY=ev.clientY,target=ev.target;var touch=ev.touches||ev.changedTouches||[];if(touch.length){clientX=touch[0].clientX;clientY=touch[0].clientY;}return{clientX:clientX,clientY:clientY,touch:touch.length>0,target:target};};var getScreenOrientation=function getScreenOrientation(screen){return screen&&screen.orientation?screen.orientation.type:window.matchMedia('(orientation: portrait)')?'portrait':'landscape';};/*
 * Gets a media query name from a map
 */var getMediaQueryName=function getMediaQueryName(win){return Object.keys(win.attributes.mediaQueries).filter(function(name){return css_mediaquery__WEBPACK_IMPORTED_MODULE_3__["match"](win.attributes.mediaQueries[name],{type:'screen',orientation:getScreenOrientation(window.screen),width:win.$element.offsetWidth||win.state.dimension.width,height:win.$element.offsetHeight||win.state.dimension.height});}).pop();};/**
 * Default Window Behavior
 *
 * @desc Controls certain events and their interaction with a window
 */var WindowBehavior=/*#__PURE__*/function(){/**
   * Create window behavior
   *
   * @param {Core} core Core reference
   */function WindowBehavior(core){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,WindowBehavior);this.core=core;this.lastAction=null;this.$lofi=document.createElement('div');this.$lofi.className='osjs-window-behavior-lofi';}/**
   * Initializes window behavior
   * @param {Window} win Window reference
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WindowBehavior,[{key:"init",value:function init(win){var _this=this;var ontouchstart=function ontouchstart(ev){return _this.mousedown(ev,win);};var onmousedown=function onmousedown(ev){return _this.mousedown(ev,win);};var onclick=function onclick(ev){return _this.click(ev,win);};var ondblclick=function ondblclick(ev){return _this.dblclick(ev,win);};var onicondblclick=function onicondblclick(ev){ev.stopPropagation();ev.preventDefault();_this.iconDblclick(ev,win);};var oniconclick=function oniconclick(ev){ev.stopPropagation();ev.preventDefault();_this.iconClick(ev,win);};var ontrasitionend=function ontrasitionend(ev){if(win){win.emit('transitionend');}_this.core.emit('osjs/window:transitionend',ev,win);};win.$element.addEventListener('touchstart',ontouchstart,touchArg);win.$element.addEventListener('mousedown',onmousedown);win.$element.addEventListener('click',onclick);win.$element.addEventListener('dblclick',ondblclick);win.$element.addEventListener('transitionend',ontrasitionend);if(win.$icon){win.$icon.addEventListener('dblclick',onicondblclick);win.$icon.addEventListener('click',oniconclick);}win.on('resized,rendered',function(){win.setState('media',getMediaQueryName(win));});win.on('destroy',function(){if(win.$element){win.$element.removeEventListener('touchstart',ontouchstart,touchArg);win.$element.removeEventListener('mousedown',onmousedown);win.$element.removeEventListener('click',onclick);win.$element.removeEventListener('dblclick',ondblclick);win.$element.removeEventListener('transitionend',ontrasitionend);}if(win.$icon){win.$icon.removeEventListener('dblclick',onicondblclick);win.$icon.removeEventListener('click',oniconclick);}});var rect=this.core.has('osjs/desktop')?this.core.make('osjs/desktop').getRect():{top:0,left:0};var _getCascadePosition=getCascadePosition(win,rect,win.state.position),top=_getCascadePosition.top,left=_getCascadePosition.left;win.state.position.top=top;win.state.position.left=left;win.state.media=getMediaQueryName(win);}/**
     * Handles Mouse Click Event
     * @param {Event} ev Browser Event
     * @param {Window} win Window reference
     */},{key:"click",value:function click(ev,win){if(this.lastAction){return;}var target=ev.target;var hitButton=target.classList.contains('osjs-window-button');if(hitButton){var action=ev.target.getAttribute('data-action');actionMap[action](win);}}/**
     * Handles Mouse Double Click Event
     * @param {Event} ev Browser Event
     * @param {Window} win Window reference
     */},{key:"dblclick",value:function dblclick(ev,win){if(this.lastAction){return;}var target=ev.target;var hitTitle=target.classList.contains('osjs-window-header');if(hitTitle){if(win.state.maximized){win.restore();}else if(win.state.minimized){win.raise();}else{win.maximize();}}}/**
     * Handles Mouse Down Event
     * @param {Event} ev Browser Event
     * @param {Window} win Window reference
     */},{key:"mousedown",value:function mousedown(ev,win){var _this2=this;var attributeSet=false;var _win$attributes2=win.attributes,moveable=_win$attributes2.moveable,resizable=_win$attributes2.resizable;var _this$core$config=this.core.config('windows'),lofi=_this$core$config.lofi;var _getEvent=getEvent(ev),clientX=_getEvent.clientX,clientY=_getEvent.clientY,touch=_getEvent.touch,target=_getEvent.target;var checkMove=ev.ctrlKey?win.$element.contains(target):target.classList.contains('osjs-window-header');var rect=this.core.has('osjs/desktop')?this.core.make('osjs/desktop').getRect():{top:0,left:0};var resize=target.classList.contains('osjs-window-resize')?resizer(win,target):null;var move=checkMove?mover(win,rect):null;var actionCallback;var mousemove=function mousemove(ev){if(!isPassive){ev.preventDefault();}if(!moveable&&move||!resizable&&resize){return;}var transformedEvent=getEvent(ev);var posX=resize?Math.max(rect.left,transformedEvent.clientX):transformedEvent.clientX;var posY=resize?Math.max(rect.top,transformedEvent.clientY):transformedEvent.clientY;var diffX=posX-clientX;var diffY=posY-clientY;if(resize){var _resize=resize(diffX,diffY),width=_resize.width,height=_resize.height,top=_resize.top,left=_resize.left;actionCallback=function actionCallback(){win._setState('dimension',{width:width,height:height},false);win._setState('position',{top:top,left:left},false);};if(lofi){_this2.$lofi.style.top="".concat(top,"px");_this2.$lofi.style.left="".concat(left,"px");_this2.$lofi.style.width="".concat(width,"px");_this2.$lofi.style.height="".concat(height,"px");}else{actionCallback();}_this2.lastAction='resize';}else if(move){var position=move(diffX,diffY);actionCallback=function actionCallback(){win._setState('position',position,false);};if(lofi){_this2.$lofi.style.top="".concat(position.top,"px");_this2.$lofi.style.left="".concat(position.left,"px");}else{actionCallback();}_this2.lastAction='move';}if(_this2.lastAction){win._setState(_this2.lastAction==='move'?'moving':'resizing',true);// NOTE: This also updates DOM!
if(!attributeSet){_this2.core.$root.setAttribute('data-window-action',String(true));attributeSet=true;}}};var mouseup=function mouseup(){if(touch){document.removeEventListener('touchmove',mousemove,touchArg);document.removeEventListener('touchend',mouseup,touchArg);}else{document.removeEventListener('mousemove',mousemove);document.removeEventListener('mouseup',mouseup);}if(lofi){_this2.$lofi.remove();if(actionCallback){actionCallback();}actionCallback=undefined;}if(_this2.lastAction==='move'){win.emit('moved',Object.assign({},win.state.position),win);win._setState('moving',false);}else if(_this2.lastAction==='resize'){win.emit('resized',Object.assign({},win.state.dimension),win);win._setState('resizing',false);}_this2.core.$root.setAttribute('data-window-action',String(false));};if(!win.focus()){win.setNextZindex();}if(move||resize){if(touch){document.addEventListener('touchmove',mousemove,touchArg);document.addEventListener('touchend',mouseup,touchArg);}else{document.addEventListener('mousemove',mousemove);document.addEventListener('mouseup',mouseup);}}this.lastAction=null;if(this.core.has('osjs/contextmenu')){this.core.make('osjs/contextmenu').hide();}if(lofi){this.$lofi.style.zIndex=win.state.zIndex+1;this.$lofi.style.top="".concat(win.state.position.top,"px");this.$lofi.style.left="".concat(win.state.position.left,"px");this.$lofi.style.width="".concat(win.state.dimension.width,"px");this.$lofi.style.height="".concat(win.state.dimension.height,"px");if(!this.$lofi.parentNode){document.body.appendChild(this.$lofi);}}}/**
     * Handles Icon Double Click Event
     * @param {Event} ev Browser Event
     * @param {Window} win Window reference
     */},{key:"iconDblclick",value:function iconDblclick(ev,win){win.close();}/**
     * Handles Icon Click Event
     * @param {Event} ev Browser Event
     * @param {Window} win Window reference
     */},{key:"iconClick",value:function iconClick(ev,win){var _win$state3=win.state,minimized=_win$state3.minimized,maximized=_win$state3.maximized;var _win$attributes3=win.attributes,minimizable=_win$attributes3.minimizable,maximizable=_win$attributes3.maximizable,closeable=_win$attributes3.closeable;var _=this.core.make('osjs/locale').translate;this.core.make('osjs/contextmenu',{position:ev,menu:[{label:minimized?_('LBL_RAISE'):_('LBL_MINIMIZE'),disabled:!minimizable,onclick:function onclick(){return minimized?win.raise():win.minimize();}},{label:maximized?_('LBL_RESTORE'):_('LBL_MAXIMIZE'),disabled:!maximizable,onclick:function onclick(){return maximized?win.restore():win.maximize();}},{label:_('LBL_CLOSE'),disabled:!closeable,onclick:function onclick(){return win.close();}}]});}}]);return WindowBehavior;}();/***/},/***/"./src/window.js":/*!***********************!*\
  !*** ./src/window.js ***!
  \***********************/ /*! exports provided: default */ /***/function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"default",function(){return Window;});/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */"./node_modules/@babel/runtime/helpers/toConsumableArray.js");/* harmony import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */"./node_modules/@babel/runtime/helpers/classCallCheck.js");/* harmony import */var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @babel/runtime/helpers/createClass */"./node_modules/@babel/runtime/helpers/createClass.js");/* harmony import */var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");/* harmony import */var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */"./node_modules/@babel/runtime/helpers/getPrototypeOf.js");/* harmony import */var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */"./node_modules/@babel/runtime/helpers/assertThisInitialized.js");/* harmony import */var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @babel/runtime/helpers/inherits */"./node_modules/@babel/runtime/helpers/inherits.js");/* harmony import */var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default=/*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(/*! @osjs/event-emitter */"./node_modules/@osjs/event-emitter/dist/main.js");/* harmony import */var _osjs_event_emitter__WEBPACK_IMPORTED_MODULE_7___default=/*#__PURE__*/__webpack_require__.n(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_7__);/* harmony import */var _utils_dnd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(/*! ./utils/dnd */"./src/utils/dnd.js");/* harmony import */var _utils_dom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(/*! ./utils/dom */"./src/utils/dom.js");/*
 * OS.js - JavaScript Cloud/Web Desktop Platform
 *
 * Copyright (c) 2011-2019, Anders Evenrud <andersevenrud@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 * @licence Simplified BSD License
 */ /**
 * Window dimension definition
 * @property {number} width Width in pixels
 * @property {number} height Height in pixels
 * @typedef WindowDimension
 */ /**
 * Window position definition
 * @property {number} left Left in pixels
 * @property {number} top Top in pixels
 * @typedef WindowPosition
 */ /**
 * Window attributes definition
 *
 * @desc Contains attributes for a window.
 * Media queries will add a given name as a `data-media` attribute to the window
 * root DOM element.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
 *
 * @property {String[]} [classNames=[]] A list of class names
 * @property {Boolean} [ontop=false] If always on top
 * @property {String} [gravity] Gravity (center/top/left/right/bottom or any combination)
 * @property {Boolean} [resizable=true] If resizable
 * @property {Boolean} [focusable=true] If focusable
 * @property {Boolean} [maximizable=true] If window if maximizable
 * @property {Boolean} [minimizable=true] If minimizable
 * @property {Boolean} [moveable=true] If moveable
 * @property {Boolean} [closeable=true] If closeable
 * @property {Boolean} [header=true] Show header
 * @property {Boolean} [controls=true] Show controls
 * @property {String} [visibility=global] Global visibility, 'restricted' to hide from window lists etc.
 * @property {boolean} [clamp=true] Clamp the window position upon creation
 * @property {WindowDimension} [minDimension] Minimum dimension
 * @property {WindowDimension} [maxDimension] Maximum dimension
 * @property {Map<String,String>} [mediaQueries] A map of matchMedia to name
 * @typedef WindowAttributes
 */ /**
 * Window state definition
 * @property {String} title Title
 * @property {String} icon Icon
 * @property {Boolean} [moving=false] If moving
 * @property {Boolean} [resizing=false] If resizing
 * @property {Boolean} [loading=false] If loading
 * @property {Boolean} [focused=false] If focused
 * @property {Boolean} [maximized=false] If maximized
 * @property {Boolean} [mimimized=false] If mimimized
 * @property {Boolean} [modal=false] If modal to the parent
 * @property {number} [zIndex=1] The z-index (auto calculated)
 * @property {WindowPosition} [position] Position
 * @property {WindowDimension} [dimension] Dimension
 * @typedef WindowState
 */var MINIMUM_WIDTH=100;var MINIMUM_HEIGHT=100;var ONTOP_ZINDEX=8388635;var windows=[];var windowCount=0;var nextZindex=1;var _lastWindow=null;/*
 * Creates window attributes from an object
 */var createAttributes=function createAttributes(attrs){return Object.assign({classNames:[],modal:false,ontop:false,gravity:false,moveable:true,resizable:true,focusable:true,maximizable:true,minimizable:true,sessionable:true,closeable:true,header:true,controls:true,visibility:'global',shadowDOM:false,clamp:true,mediaQueries:{small:'screen and (max-width: 640px)',medium:'screen and (min-width: 640px) and (max-width: 1024px)',big:'screen and (min-width: 1024px)'},minDimension:{width:MINIMUM_WIDTH,height:MINIMUM_HEIGHT},maxDimension:{width:-1,height:-1}},attrs);};/*
 * Creates window state from an object
 */var createState=function createState(state,options,attrs){return Object.assign({title:options.title||options.id,icon:options.icon||__webpack_require__(/*! ./styles/logo-blue-32x32.png */"./src/styles/logo-blue-32x32.png"),media:null,moving:false,resizing:false,loading:false,focused:false,maximized:false,minimized:false,zIndex:1,styles:{},position:Object.assign({},{left:null,top:null},options.position),dimension:Object.assign({},{width:Math.max(attrs.minDimension.width,MINIMUM_WIDTH),height:Math.max(attrs.minDimension.height,MINIMUM_HEIGHT)},options.dimension)},state);};/*
 * Creates a window id
 */var createWindowId=function createWindowId(win){var id=windowCount;windowCount++;windows.push(win);return id;};/*
 * Check if we have to set next zindex
 */var checkNextZindex=function checkNextZindex(_ref){var wid=_ref.wid,attributes=_ref.attributes,state=_ref.state;var ontop=attributes.ontop;var zIndex=state.zIndex;var windexes=windows.filter(function(w){return w.attributes.ontop===ontop;}).filter(function(w){return w.wid!==wid;}).map(function(w){return w.state.zIndex;});var max=windexes.length>0?Math.max.apply(null,windexes):0;return zIndex<max;};/*
 * Clamps position to viewport
 */var clampPosition=function clampPosition(rect,_ref2){var dimension=_ref2.dimension,position=_ref2.position;var maxLeft=rect.width-dimension.width;var maxTop=rect.height-dimension.height+rect.top;return{left:Math.min(maxLeft,position.left),top:Math.max(rect.top,Math.min(maxTop,position.top))};};/*
 * Window rendering callback function
 */var renderCallback=function renderCallback(win,callback){if(typeof callback==='function'){if(win.attributes.shadowDOM){try{var mode=typeof win.attributes.shadowDOM==='string'?win.attributes.shadowDOM:'open';var shadow=win.$content.attachShadow({mode:mode});callback(shadow,win);return;}catch(e){console.warn('Shadow DOM not supported?',e);}}callback(win.$content,win);}};/*
 * Adds a list of classnames to window element
 */var addClassNames=function addClassNames(win,names){return names.filter(function(val){return!!val;}).forEach(function(val){return win.$element.classList.add(val);});};var transformVectors=function transformVectors(rect,_ref3,_ref4){var width=_ref3.width,height=_ref3.height;var top=_ref4.top,left=_ref4.left;var transform=function transform(val,attr){if(!isNaN(val)){return Number.isInteger(val)?val:Math.round(rect[attr]*parseFloat(val));}return val;};return{dimension:{width:transform(width,'width'),height:transform(height,'height')},position:{top:transform(top,'height'),left:transform(left,'width')}};};/*
 * Default window template
 */var TEMPLATE="<div class=\"osjs-window-inner\">\n  <div class=\"osjs-window-header\">\n    <div class=\"osjs-window-icon\">\n      <div></div>\n    </div>\n    <div class=\"osjs-window-title\"></div>\n    <div class=\"osjs-window-button\" data-action=\"minimize\">\n      <div></div>\n    </div>\n    <div class=\"osjs-window-button\" data-action=\"maximize\">\n      <div></div>\n    </div>\n    <div class=\"osjs-window-button\" data-action=\"close\">\n      <div></div>\n    </div>\n  </div>\n  <div class=\"osjs-window-content\">\n  </div>\n  <div class=\"osjs-window-resize\" data-direction=\"n\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"nw\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"w\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"sw\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"s\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"se\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"e\"></div>\n  <div class=\"osjs-window-resize\" data-direction=\"ne\"></div>\n</div>".replace(/\n\s+/g,'').trim();/**
 * Window
 *
 * @desc Class for a OS.js Window
 */var Window=/*#__PURE__*/function(_EventEmitter){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Window,_EventEmitter);/**
   * Create window
   *
   * @param {Core} core Core reference
   * @param {Object} options Options
   * @param {String} options.id Window Id (not globaly unique)
   * @param {String} [options.title] Window Title
   * @param {String} [options.icon] Window Icon
   * @param {Window} [options.parent] The parent Window reference
   * @param {String|Function} [options.template] The Window HTML template (or function with signature (el, win) for programatic construction)
   * @param {WindowPosition|String} [options.position] Window position
   * @param {WindowDimension} [options.dimension] Window dimension
   * @param {WindowAttributes} [options.attributes] Apply Window attributes
   * @param {WindowState} [options.state] Apply Window state
   */function Window(core){var _this;var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this,Window);options=Object.assign({id:null,title:null,parent:null,template:null,attributes:{},position:{},dimension:{},state:{}},options);console.debug('Window::constructor()',options);_this=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Window).call(this,'Window@'+options.id));if(typeof options.position==='string'){options.attributes.gravity=options.position;options.position={};}/**
     * The Window ID
     * @type {String}
     */_this.id=options.id;/**
     * The Window ID
     * @type {Number}
     */_this.wid=createWindowId(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));/**
     * Parent Window reference
     * @type {Window}
     */_this.parent=options.parent;/**
     * Child windows (via 'parent')
     * @type {Window[]}
     */_this.children=[];/**
     * Core instance reference
     * @type {Core}
     */_this.core=core;/**
     * The window destruction state
     * @type {Boolean}
     */_this.destroyed=false;/**
     * The window rendered state
     * @type {Boolean}
     */_this.rendered=false;/**
     * The window attributes
     * @type {WindowAttributes}
     */_this.attributes=createAttributes(options.attributes);/**
     * The window state
     * @type {WindowState}
     */_this.state=createState(options.state,options,_this.attributes);/**
     * The window container
     * @type {Node}
     */_this.$element=document.createElement('div');/**
     * The content container
     * @type {Node}
     */_this.$content=null;/**
     * The header container
     * @type {Node}
     */_this.$header=null;/**
     * The icon container
     * @type {Node}
     */_this.$icon=null;/**
     * The title container
     * @type {Node}
     */_this.$title=null;/**
     * Internal variable to signal not to use default position
     * given by user (used for restore)
     * @type {Boolean}
     */_this._preventDefaultPosition=false;/**
     * Internal timeout reference used for triggering the loading
     * overlay.
     * @type {Boolean}
     */_this._loadingDebounce=null;/**
     * The window template
     * @type {String|Function}
     */_this._template=options.template;return _this;}/**
   * Destroy window
   */_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Window,[{key:"destroy",value:function destroy(){var _this2=this;if(this.destroyed){return;}this.destroyed=true;console.debug('Window::destroy()');this.emit('destroy',this);this.core.emit('osjs/window:destroy',this);this.children.forEach(function(w){return w.destroy();});if(this.$element){this.$element.remove();}if(_lastWindow===this){_lastWindow=null;}var foundIndex=windows.findIndex(function(w){return w===_this2;});if(foundIndex!==-1){windows.splice(foundIndex,1);}this.children=[];this.parent=null;this.$element=null;this.$content=null;this.$header=null;this.$icon=null;this.$title=null;}/**
     * Initialize window
     */},{key:"init",value:function init(){var _this3=this;if(this.inited){return this;}// Assign the window if it is a child
if(this.parent){this.on('destroy',function(){var foundIndex=_this3.parent.children.findIndex(function(w){return w===_this3;});if(foundIndex!==-1){_this3.parent.children.splice(foundIndex,1);}});this.parent.children.push(this);}// Insert template
var tpl=this.core.config('windows.template')||TEMPLATE;if(this._template){this.$element.innerHTML=typeof this._template==='function'?this._template(this,tpl):this._template;}else{this.$element.innerHTML=tpl;}this.$content=this.$element.querySelector('.osjs-window-content');this.$header=this.$element.querySelector('.osjs-window-header');this.$icon=this.$element.querySelector('.osjs-window-icon > div');this.$title=this.$element.querySelector('.osjs-window-title');// Transform percentages in dimension to pixels etc
if(this.core.has('osjs/desktop')){var rect=this.core.make('osjs/desktop').getRect();var _transformVectors=transformVectors(rect,this.state.dimension,this.state.position),dimension=_transformVectors.dimension,position=_transformVectors.position;this.state.dimension=dimension;this.state.position=position;}// Behavior
var behavior=this.core.make('osjs/window-behavior');if(behavior){behavior.init(this);}// DnD functionality
var d=Object(_utils_dnd__WEBPACK_IMPORTED_MODULE_8__["droppable"])(this.$element,{ondragenter:function ondragenter(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this3.emit.apply(_this3,['dragenter'].concat(args,[_this3]));},ondragover:function ondragover(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return _this3.emit.apply(_this3,['dragover'].concat(args,[_this3]));},ondragleave:function ondragleave(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}return _this3.emit.apply(_this3,['dragleave'].concat(args,[_this3]));},ondrop:function ondrop(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4];}return _this3.emit.apply(_this3,['drop'].concat(args,[_this3]));}});this.on('destroy',function(){return d.destroy();});this.inited=true;this.emit('init',this);this.core.emit('osjs/window:create',this);return this;}/**
     * Updates the window buttons
     */},{key:"_updateButtons",value:function _updateButtons(){var _this4=this;var hideButton=function hideButton(action){return _this4.$header.querySelector(".osjs-window-button[data-action=".concat(action,"]")).style.display='none';};if(this.attributes.controls){if(!this.attributes.maximizable){hideButton('maximize');}if(!this.attributes.minimizable){hideButton('minimize');}if(!this.attributes.closeable){hideButton('close');}}else{Array.from(this.$header.querySelectorAll('.osjs-window-button')).forEach(function(el){return el.style.display='none';});}}/**
     * Render window
     * @param {Function} [callback] Callback when window DOM has been constructed
     * @return {Window} this instance
     */},{key:"render",value:function render(){var _this5=this;var callback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};if(this.rendered){return this;}else if(!this.inited){this.init();}var classNames=['osjs-window'].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.attributes.classNames));if(this.id){classNames.push("Window_".concat(this.id));}addClassNames(this,classNames);this._updateButtons();this._updateDOM();if(!this._preventDefaultPosition){this.gravitate(this.attributes.gravity);}if(!this.attributes.header){this.$header.style.display='none';}// Clamp the initial window position to viewport
if(this.attributes.clamp){this.clampToViewport(false);}this.core.$root.appendChild(this.$element);if(this.attributes.modal){if(this.parent){this.on('render',function(){return _this5.parent.setState('loading',true);});this.on('destroy',function(){_this5.parent.setState('loading',false);_this5.parent.focus();});}// TODO: Global modal
}renderCallback(this,callback);this.rendered=true;this.setNextZindex(true);setTimeout(function(){_this5.emit('render',_this5);_this5.core.emit('osjs/window:render',_this5);},1);return this;}/**
     * Close the window
     */},{key:"close",value:function close(){if(this.destroyed){return false;}this.emit('close',this);this.destroy();return true;}/**
     * Focus the window
     * @return {Boolean}
     */},{key:"focus",value:function focus(){if(!this.state.minimized){if(this._toggleState('focused',true,'focus')){if(_lastWindow&&_lastWindow!==this){_lastWindow.blur();}this.setNextZindex();_lastWindow=this;return true;}}return false;}/**
     * Blur (un-focus) the window
     * @return {Boolean}
     */},{key:"blur",value:function blur(){// Forces blur-ing of browser input element belonging to this window
var activeElement=Object(_utils_dom__WEBPACK_IMPORTED_MODULE_9__["getActiveElement"])(this.$element);if(activeElement){activeElement.blur();}return this._toggleState('focused',false,'blur');}/**
     * Minimize (hide) the window
     * @return {Boolean}
     */},{key:"minimize",value:function minimize(){if(this.attributes.minimizable){if(this._toggleState('minimized',true,'minimize')){this.blur();return true;}}return false;}/**
     * Raise (un-minimize) the window
     * @return {Boolean}
     */},{key:"raise",value:function raise(){return this._toggleState('minimized',false,'raise');}/**
     * Maximize the window
     * @return {Boolean}
     */},{key:"maximize",value:function maximize(){var _this6=this;if(this.attributes.maximizable){if(this._toggleState('maximized',true,'maximize')){this.once('transitionend',function(){return _this6.emit('resized');});return true;}}return false;}/**
     * Restore (un-maximize) the window
     * @return {Boolean}
     */},{key:"restore",value:function restore(){var _this7=this;if(this._toggleState('maximized',false,'restore')){this.once('transitionend',function(){return _this7.emit('resized');});return true;}return false;}/**
     * Resize to fit to current container
     * @param {Element} [container] The DOM element to use
     */},{key:"resizeFit",value:function resizeFit(container){container=container||this.$content.firstChild;if(!container){return;}var innerBox=(container.parentNode.classList.contains('osjs-gui')?container.parentNode:container).getBoundingClientRect();var outerBox=this.$content.getBoundingClientRect();var diffY=Math.ceil(outerBox.height-innerBox.height);var diffX=Math.ceil(outerBox.width-innerBox.width);var topHeight=this.$header.offsetHeight;var _this$state$position=this.state.position,left=_this$state$position.left,top=_this$state$position.top;var min=this.attributes.minDimension;var max=this.attributes.maxDimension;var width=Math.max(container.offsetWidth+diffX,min.width);var height=Math.max(container.offsetHeight+diffY+topHeight,min.height);if(max.width>0){width=Math.min(width,max.width);}if(max.height>0){height=Math.min(height,max.height);}width=Math.max(width,container.offsetWidth);height=Math.max(height,container.offsetHeight);if(this.core.has('osjs/desktop')){var rect=this.core.make('osjs/desktop').getRect();width=Math.min(width,rect.width-left);height=Math.min(height,rect.height-top);}if(!isNaN(width)&&!isNaN(height)){this.setDimension({width:width,height:height});}}/**
     * Clamps the position to viewport
     * @param {boolean} [update=true] Update DOM
     */},{key:"clampToViewport",value:function clampToViewport(){var update=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(!this.core.has('osjs/desktop')){return;}var rect=this.core.make('osjs/desktop').getRect();this.state.position=Object.assign({},this.state.position,clampPosition(rect,this.state));if(update){this._updateDOM();}}/**
     * Set the Window icon
     * @param {String} uri Icon URI
     */},{key:"setIcon",value:function setIcon(uri){this.state.icon=uri;this._updateDOM();}/**
     * Set the Window title
     * @param {String} title Title
     */},{key:"setTitle",value:function setTitle(title){this.state.title=title||'';this._updateDOM();this.core.emit('osjs/window:change',this,'title',title);}/**
     * Set the Window dimension
     * @param {WindowDimension} dimension The dimension
     */},{key:"setDimension",value:function setDimension(dimension){var _Object$assign=Object.assign({},this.state.dimension,dimension||{}),width=_Object$assign.width,height=_Object$assign.height;this.state.dimension.width=width;this.state.dimension.height=height;this._updateDOM();}/**
     * Set the Window position
     * @param {WindowPosition} position The position
     * @param {Boolean} [preventDefault=false] Prevents any future position setting in init procedure
     */},{key:"setPosition",value:function setPosition(position){var preventDefault=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var _Object$assign2=Object.assign({},this.state.position,position||{}),left=_Object$assign2.left,top=_Object$assign2.top;this.state.position.top=top;this.state.position.left=left;if(preventDefault){this._preventDefaultPosition=true;}this._updateDOM();}/**
     * Set the Window z index
     * @param {Number} zIndex the index
     */},{key:"setZindex",value:function setZindex(zIndex){this.state.zIndex=zIndex;console.debug('Window::setZindex()',zIndex);this._updateDOM();}/**
     * Sets the Window to next z index
     * @param {boolean} [force] Force next index
     */},{key:"setNextZindex",value:function setNextZindex(force){var setNext=force||checkNextZindex(this);if(setNext){this.setZindex(nextZindex);nextZindex++;}}/**
     * Set a state by value
     * @param {String} name State name
     * @param {*} value State value
     * @param {Boolean} [update=true] Update the DOM
     * @see {WindowState}
     */},{key:"setState",value:function setState(name,value){var _this8=this;var update=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var set=function set(){return _this8._setState(name,value,update);};// Allows for some "grace time" so the overlay does not
// "blink"
if(name==='loading'&&update){clearTimeout(this._loadingDebounce);if(value===true){this._loadingDebounce=setTimeout(function(){return set();},250);return;}}set();}/**
     * Gravitates window towards a certain area
     * @param {String} gravity Gravity
     */},{key:"gravitate",value:function gravitate(gravity){if(!this.core.has('osjs/desktop')){return;}var rect=this.core.make('osjs/desktop').getRect();var _this$state$position2=this.state.position,left=_this$state$position2.left,top=_this$state$position2.top;if(gravity==='center'){left=rect.width/2-this.state.dimension.width/2;top=rect.height/2-this.state.dimension.height/2;}else if(gravity){var hasVertical=gravity.match(/top|bottom/);var hasHorizontal=gravity.match(/left|rigth/);if(gravity.match(/top/)){top=rect.top;}else if(gravity.match(/bottom/)){top=rect.height-this.state.dimension.height+rect.top;}if(gravity.match(/left/)){left=rect.left;}else if(gravity.match(/right/)){left=rect.width-this.state.dimension.width;}if(!hasVertical&&gravity.match(/center/)){top=rect.height/2-this.state.dimension.height/2;}else if(!hasHorizontal&&gravity.match(/center/)){left=rect.width/2-this.state.dimension.width/2;}}this.setPosition({left:left,top:top});}/**
     * Gets a astate
     * @return {*}
     */},{key:"getState",value:function getState(n){var value=this.state[n];return['position','dimension','styles'].indexOf(n)!==-1?Object.assign({},value):value;}/**
     * Get a snapshot of the Window session
     * @return {Object}
     */},{key:"getSession",value:function getSession(){return this.attributes.sessionable===false?null:{id:this.id,position:Object.assign({},this.state.position),dimension:Object.assign({},this.state.dimension)};}/**
     * Get a list of all windows
     *
     * @return {Window[]}
     */},{key:"_setState",/**
     * Internal method for setting state
     * @param {String} name State name
     * @param {*} value State value
     * @param {Boolean} [update=true] Update the DOM
     */value:function _setState(name,value){var update=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;var oldValue=this.state[name];this.state[name]=value;if(update){if(oldValue!==value){console.debug('Window::_setState()',name,value);}this._updateDOM();}}/**
     * Internal method for toggling state
     * @param {String} name State name
     * @param {*} value State value
     * @param {String} eventName Name of event to emit
     * @param {Boolean} [update=true] Update the DOM
     */},{key:"_toggleState",value:function _toggleState(name,value,eventName){var update=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;if(this.state[name]===value){return false;}console.debug('Window::_toggleState()',name,value,eventName,update);this.state[name]=value;this.emit(eventName,this);this.core.emit('osjs/window:change',this,name,value);if(update){this._updateDOM();}return true;}/**
     * Updated the Window DOM
     */},{key:"_updateDOM",value:function _updateDOM(){if(!this.inited){return;}var $element=this.$element,$title=this.$title,$icon=this.$icon,id=this.id,state=this.state,attributes=this.attributes;var _state$dimension=state.dimension,width=_state$dimension.width,height=_state$dimension.height;var _state$position=state.position,top=_state$position.top,left=_state$position.left;var title=state.title,icon=state.icon,zIndex=state.zIndex,styles=state.styles;var attrs={id:id,media:state.media,moving:state.moving,resizing:state.resizing,loading:state.loading,focused:state.focused,maximized:state.maximized,minimized:state.minimized,modal:attributes.modal,ontop:attributes.ontop,resizable:attributes.resizable,moveable:attributes.moveable,maximizable:attributes.maximizable,minimizable:attributes.minimizable};var cssText=Object(_utils_dom__WEBPACK_IMPORTED_MODULE_9__["createCssText"])(Object.assign({top:String(top)+'px',left:String(left)+'px',height:String(height)+'px',width:String(width)+'px',zIndex:(attrs.ontop?ONTOP_ZINDEX:0)+zIndex},styles));if($title){$title.innerHTML=Object(_utils_dom__WEBPACK_IMPORTED_MODULE_9__["escapeHtml"])(title);}if($icon){$icon.style.backgroundImage="url(".concat(icon,")");}if($element){Object.keys(attrs).forEach(function(a){return $element.setAttribute("data-".concat(a),String(attrs[a]));});$element.style.cssText=cssText;}}}],[{key:"getWindows",value:function getWindows(){return windows;}/**
     * Gets the lastly focused Window
     * @return {Window}
     */},{key:"lastWindow",value:function lastWindow(){return _lastWindow;}}]);return Window;}(_osjs_event_emitter__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]);/***/},/***/0:/*!************************!*\
  !*** multi ./index.js ***!
  \************************/ /*! no static exports found */ /***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(/*! /Users/paulelepage/Documents/workspace/prototype-biodesk/OS.js/src/kf-client/index.js */"./index.js");/***/}/******/}));});//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/*!***********************************************************!*\
  !*** multi ./src/client/index.js ./src/client/index.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/paulelepage/Documents/workspace/prototype-biodesk/OS.js/src/client/index.js */"./src/client/index.js");
module.exports = __webpack_require__(/*! /Users/paulelepage/Documents/workspace/prototype-biodesk/OS.js/src/client/index.scss */"./src/client/index.scss");


/***/ })

/******/ });
//# sourceMappingURL=osjs.js.map