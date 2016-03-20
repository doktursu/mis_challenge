/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _overlayEs = __webpack_require__(1);
	
	var _overlayEs2 = _interopRequireDefault(_overlayEs);
	
	var _menuEs = __webpack_require__(2);
	
	var _menuEs2 = _interopRequireDefault(_menuEs);
	
	var _popupEs = __webpack_require__(3);
	
	var _popupEs2 = _interopRequireDefault(_popupEs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	
	    document.registerElement('pop-up', _popupEs2.default);
	
	    var menuOverlay = new _overlayEs2.default(document.querySelector('#menu-overlay'));
	    var menu = new _menuEs2.default(menuOverlay);
	    // const popupOverlay = new Overlay(document.querySelector('#popup-overlay'));
	    var popup = document.querySelector('.popup');
	    console.log('popup', popup);
	
	    menuOverlay.onOverlayClick = function () {
	        return menu.hide();
	    };
	
	    // popupOverlay.onOverlayClick = () => popup.hide();
	
	    menu.onOptionClick = function (key) {
	        var inputEl = document.querySelector('#name-input');
	        var name = inputEl.value.trim();
	        var message = "Please enter a name first";
	
	        if (name) {
	            switch (key) {
	                case 'say-hello':
	                    message = 'Hello ' + name;
	                    break;
	
	                case 'say-goodbye':
	                    message = 'Goodbye ' + name;
	                    break;
	
	                case 'say-thanks':
	                    message = 'Thanks ' + name;
	                    break;
	
	                default:
	            }
	        }
	        console.log('message', message);
	        popup.display(message);
	    };
	
	    window.onresize = function () {
	        if (window.innerWidth > 768) {
	            menu.setDefaultOpen();
	            menu.display();
	        } else if (menu.isDefaultDisplaying) {
	            menu.setDefaultClosed();
	            menu.hide();
	        }
	    };
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Overlay = function () {
	    function Overlay(element) {
	        var _this = this;
	
	        _classCallCheck(this, Overlay);
	
	        this.overlayEl = element;
	        this.overlayEl.onclick = function () {
	            return _this.onOverlayClick();
	        };
	    }
	
	    _createClass(Overlay, [{
	        key: 'display',
	        value: function display() {
	            this.overlayEl.className = 'overlay overlay-display';
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.overlayEl.className = 'overlay overlay-hidden';
	        }
	    }]);
	
	    return Overlay;
	}();
	
	exports.default = Overlay;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	    function Menu(overlay) {
	        var _this = this;
	
	        _classCallCheck(this, Menu);
	
	        this.menuEl = document.querySelector('#menu');
	
	        this.iconEl = document.querySelector('#menu-icon');
	        this.iconEl.onclick = function () {
	            return _this.toggle();
	        };
	
	        this.menuOptions = document.querySelector('#menu-options');
	        this.menuOptions.onclick = function (e) {
	            if (!_this.isDefaultDisplaying) {
	                _this.hide();
	            }
	            var key = e.target.dataset.menuOptionKey;
	            _this.onOptionClick(key);
	        };
	
	        this.onOptionClick = null;
	
	        this.isDisplaying = window.innerWidth >= 768;
	        this.isDefaultDisplaying = window.innerWidth >= 768;
	
	        this.menuEl.className = this.isDisplaying ? 'opened' : 'closed';
	
	        this.overlay = overlay;
	    }
	
	    _createClass(Menu, [{
	        key: 'toggle',
	        value: function toggle() {
	            if (this.isDisplaying) {
	                this.hide();
	            } else {
	                this.display();
	            }
	        }
	    }, {
	        key: 'display',
	        value: function display() {
	            this.menuEl.className = 'opened';
	            this.isDisplaying = true;
	            if (this.isDefaultDisplaying) {
	                this.overlay.hide();
	            } else {
	                this.overlay.display();
	            }
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.menuEl.className = 'closed';
	            this.isDisplaying = false;
	            this.overlay.hide();
	        }
	    }, {
	        key: 'setDefaultOpen',
	        value: function setDefaultOpen() {
	            this.isDefaultDisplaying = true;
	        }
	    }, {
	        key: 'setDefaultClosed',
	        value: function setDefaultClosed() {
	            this.isDefaultDisplaying = false;
	        }
	    }]);
	
	    return Menu;
	}();
	
	exports.default = Menu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Popup = function (_HTMLElement) {
	    _inherits(Popup, _HTMLElement);
	
	    function Popup() {
	        _classCallCheck(this, Popup);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).apply(this, arguments));
	    }
	
	    _createClass(Popup, [{
	        key: 'createdCallback',
	        value: function createdCallback(overlay) {
	            var _this2 = this;
	
	            this.className = 'popup popup-display';
	
	            this.innerHTML = Popup.TEMPLATE;
	            this.textEl = this.querySelector('.popup-message');
	            this.closeEl = this.querySelector('.popup-close');
	            this.closeEl.onclick = function () {
	                return _this2.hide();
	            };
	
	            // this.overlay = overlay;
	        }
	    }, {
	        key: 'display',
	        value: function display(message) {
	            this.textEl.innerText = message;
	            this.className = 'popup popup-display';
	            // this.overlay.display();
	        }
	    }, {
	        key: 'hide',
	        value: function hide() {
	            this.className = 'popup popup-hidden';
	            // this.overlay.hide();
	        }
	    }]);
	
	    return Popup;
	}(HTMLElement);
	
	Popup.TEMPLATE = '\n    <div class="popup-close"></div>\n    <div class="popup-message"></div>\n';
	
	exports.default = Popup;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map