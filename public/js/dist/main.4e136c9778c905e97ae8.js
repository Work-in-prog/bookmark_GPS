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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 		"main": 0
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
/******/ 	deferredModules.push(["./src/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.js */ \"./src/components/Home.js\");\n/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listing */ \"./src/components/Listing.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map.js */ \"./src/components/Map.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.handleLogin = event => {\n      event.preventDefault(); //make .post dynamic for heroku//\n\n      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:8080/users/login', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(response => {\n        localStorage.setItem('token', response.data.token);\n        this.setState({\n          isLoggedIn: true\n        });\n      }).catch(err => console.error(err));\n    };\n\n    this.state = {\n      name: 'Arthur',\n      isLoggedIn: false,\n      email: '',\n      password: '',\n      currentPin: {\n        lat: 0,\n        lon: 0,\n        address: ''\n      }\n    };\n    this.scrollToBookmark = this.scrollToBookmark.bind(this);\n  }\n\n  scrollToBookmark(lat, lon, address) {\n    //get info from a bookmark and send it to the map\n    console.log('scrollToBookmark() was called', lat, lon, address); // this.setState({\n    // \tcurrentPin: {\n    // \t\tlat: lat,\n    // \t\tlon: lon,\n    // \t\taddress: address\n    // \t}\n    // });\n    // const myLatlng = new google.maps.LatLng(lat, lon);\n    // const mapOptions = {\n    // \tzoom: 4,\n    // \tcenter: myLatlng\n    // };\n    // const map = new google.maps.Map(\n    // \tdocument.getElementById('mainmap'),\n    // \tmapOptions\n    // );\n    // var marker = new google.maps.Marker({\n    // \tposition: myLatlng,\n    // \ttitle: 'Hello World!'\n    // });\n    // marker.setMap(map);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Page-wrapper\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Link */ \"a\"], {\n      to: \"/home\"\n    }, \"Go to Other Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Link */ \"a\"], {\n      to: \"/listing\"\n    }, \"See All Bookmarks\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is the home page.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleLogin\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"email\",\n      type: \"email\",\n      onChange: this.handleChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"password\",\n      type: \"password\",\n      onChange: this.handleChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      value: \"login\"\n    })), this.state.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"We are logged in\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sorry you are not logged in\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is the home page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppMap, {\n      id: \"mainmap\",\n      defaultZoom: 7,\n      defaultCenter: {\n        lat: this.state.currentPin.lat,\n        lng: this.state.currentPin.lon\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.currentPin.address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Listing__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      scrollToBookmark: this.scrollToBookmark\n    }));\n  }\n\n}\n\nclass AppMap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      places: [{\n        latitude: 25.8103146,\n        longitude: -80.1751609\n      }, {\n        latitude: 22.8103146,\n        longitude: -80.1751609\n      }]\n    };\n\n    this.getLocation = () => {\n      if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition(this.getCoordinates);\n      } else {\n        alert('Geolocation not supported by this browser');\n      }\n    };\n\n    this.getCoordinates = position => {\n      console.log(position);\n      this.setState({\n        places: [{\n          latitude: position.coords.latitude,\n          longitude: position.coords.longitude\n        }]\n      });\n    };\n  }\n\n  componentDidMount() {\n    this.getLocation();\n  }\n\n  render() {\n    const {\n      loadingElement,\n      containerElement,\n      mapElement,\n      defaultCenter,\n      defaultZoom\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n      googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&libraries=geometry,drawing,places',\n      markers: this.state.places,\n      loadingElement: loadingElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"500px\"\n        }\n      }),\n      containerElement: containerElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"500px\"\n        }\n      }),\n      mapElement: mapElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"500px\"\n        }\n      }),\n      defaultCenter: defaultCenter || {\n        lat: 25.798939,\n        lng: -80.291409\n      },\n      defaultZoom: defaultZoom || 11\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listing */ \"./src/components/Listing.js\");\n // import ReactDOM from 'react-dom';\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"New Page\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"a\"], {\n      to: \"/\"\n    }, \"Go Back\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Listing.js":
/*!***********************************!*\
  !*** ./src/components/Listing.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Listing; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n //import '../../public/css/Listing.css';\n\nconst googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE'; //div for displaying an individual bookmark\n\nclass BookmarkCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      address: '',\n      lat: 0,\n      lon: 0,\n      bookmarks: []\n    };\n  }\n\n  STB() {\n    this.props.scrollToBookmark(lat, lon, address);\n    console.log('STB() was called');\n  }\n\n  render() {\n    const {\n      lat,\n      lon,\n      address,\n      scrollToBookmark,\n      deleteBookmark,\n      id,\n      index\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"bookmark-box\",\n      onClick: () => {\n        scrollToBookmark(lat, lon, address);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Lat:\", lat, \", Lon:\", lon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Edit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: () => {\n        deleteBookmark(id, index);\n      }\n    }, \"Delete\"));\n  }\n\n}\n\nclass Listing extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  //Listing inherits scrollToBookmark function from the top-level\n  //react class, with 'this' bound to that original class. it assigns\n  //this function as the onClick event of individual bookmarks.\n  //back in the top-level class, scrollToBookmark calls another function\n  // sending data back to the map.\n  constructor() {\n    super();\n\n    this.getData = () => {\n      fetch('/bookmarks').then(response => response.json()).then(data => {\n        this.setState({\n          bookmarks: data\n        });\n      });\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.handleSubmit = event => {\n      event.preventDefault();\n      console.log('Listing Component handleSubmit Accessed');\n      fetch('/', {\n        body: JSON.stringify({\n          address: this.state.address,\n          lat: this.state.lat,\n          lon: this.state.lon\n        }),\n        method: 'POST',\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(response => response.json()).then(newBookmark => {\n        this.setState({\n          bookmarks: [newBookmark, ...this.state.bookmarks],\n          address: '',\n          lat: 0,\n          lon: 0\n        });\n        console.log(newBookmark);\n      });\n    };\n\n    this.deleteBookmark = (id, index) => {\n      fetch(\"/bookmarks/\".concat(id), {\n        method: 'DELETE'\n      }).then(response => {\n        this.setState({\n          bookmarks: [...this.state.bookmarks.slice(0, index), ...this.state.bookmarks.slice(index + 1)]\n        });\n      });\n    };\n\n    this.updateBookmark = void 0;\n    this.state = {\n      bookmarks: [],\n      address: '',\n      lat: 0,\n      lon: 0\n    };\n    this.deleteBookmark = this.deleteBookmark.bind(this);\n  }\n\n  componentDidMount() {\n    this.getData();\n  }\n\n  componentDidMount() {\n    //set pinList to the masterlist received from database\n    console.log('Listing mounted', this.props);\n  }\n\n  render() {\n    const {\n      scrollToBookmark\n    } = this.props;\n    const deleteBookmark = this.deleteBookmark;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Entry Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"address\"\n    }, \"Address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      value: this.state.address,\n      onChange: this.handleChange,\n      id: \"address\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is a test card\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookmarkCard, {\n      lat: 80,\n      lon: -20,\n      address: '123 Main Street USA',\n      scrollToBookmark: scrollToBookmark\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookmarkCard, {\n      lat: -80,\n      lon: 20,\n      address: '456 Who Knows Where',\n      scrollToBookmark: scrollToBookmark\n    }), this.state.bookmarks.map((bookmark, index) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookmarkCard, {\n        lat: bookmark.lat,\n        lon: bookmark.lon,\n        address: bookmark.addess,\n        scrollToBookmark: scrollToBookmark,\n        deleteBookmark: deleteBookmark,\n        id: bookmark._id,\n        index: index\n      });\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/Listing.js?");

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ \"./node_modules/react-google-maps/lib/index.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);\n/* global google */\n\n\n\nclass MapDirectionsRenderer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      directions: null,\n      error: null,\n      longitude: null,\n      latitude: null\n    };\n  }\n\n  getLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition(this.getCoordinates);\n    } else {\n      alert('Geolocation not supported by this browser');\n    }\n  }\n\n  getCoordinates(position) {\n    console.log(position);\n    this.setState({\n      latitude: position.coords.latitude,\n      longitude: position.coords.longitude\n    });\n  }\n\n  render() {\n    if (this.state.error) {\n      console.log(this.state.error);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.error);\n    }\n\n    return this.state.directions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"DirectionsRenderer\"], {\n      directions: this.state.directions\n    });\n  }\n\n}\n\nconst Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"withScriptjs\"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"withGoogleMap\"])(props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"GoogleMap\"], {\n  defaultCenter: props.defaultCenter,\n  defaultZoom: props.defaultZoom,\n  onLoad: () => {\n    console.log('Helooooo');\n  }\n}, props.markers.map((marker, index) => {\n  const position = {\n    lat: marker.latitude,\n    lng: marker.longitude\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    key: index,\n    position: position\n  });\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapDirectionsRenderer, {\n  places: props.markers,\n  travelMode: google.maps.TravelMode.DRIVING\n}))));\n/* harmony default export */ __webpack_exports__[\"a\"] = (Map);\n\n//# sourceURL=webpack:///./src/components/Map.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_Listing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Listing */ \"./src/components/Listing.js\");\n\n\n\n\n\n\n\nconst routes = [{\n  path: '/home',\n  name: 'NewPage',\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n}, {\n  path: '/',\n  name: 'HomePage',\n  component: _components_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n}, {\n  path: '/listing',\n  name: 'Listing',\n  component: _components_Listing__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"]\n}];\nconst hist = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createBrowserHistory */ \"a\"])();\nconst root = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ \"b\"], {\n  history: hist\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ \"c\"], null, routes.map(routes => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n    key: routes.name,\n    path: routes.path,\n    component: routes.component\n  });\n}))), root);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });