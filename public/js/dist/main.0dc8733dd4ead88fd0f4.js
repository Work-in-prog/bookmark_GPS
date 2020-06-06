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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home.js */ \"./src/components/Home.js\");\n/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Listing */ \"./src/components/Listing.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map.js */ \"./src/components/Map.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE';\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.handleLogin = event => {\n      event.preventDefault(); //make .post dynamic for heroku//\n\n      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('http://localhost:8080/users/login', {\n        email: this.state.email,\n        password: this.state.password\n      }).then(response => {\n        localStorage.setItem('token', response.data.token);\n        this.setState({\n          isLoggedIn: true\n        });\n      }).catch(err => console.error(err));\n    };\n\n    this.state = {\n      name: 'Arthur',\n      isLoggedIn: false,\n      email: '',\n      password: ''\n    };\n  }\n\n  logout() {\n    this.setState({\n      isLoggedIn: false\n    });\n  }\n\n  handleLogOut() {\n    this.setState({\n      email: '',\n      password: '',\n      isLoggedIn: false\n    });\n    localStorage.clear();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Page-wrapper\"\n    }, this.state.isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleLogin\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"email\",\n      type: \"email\",\n      onChange: this.handleChange\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"password\",\n      type: \"password\",\n      onChange: this.handleChange\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"input\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      value: \"login\"\n    })))));\n  }\n\n} ///-----------------------------Main Page -------------------------------/////////\n\nclass Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Main Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppMap, {\n      defaultZoom: 4\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.props.handleLogOut\n    }, \"Log out\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Link */ \"a\"], {\n      to: \"/home\"\n    }, \"Go to Other Page\"));\n  }\n\n} ///----------------------------------------------------------------------/////////\n\n\nclass AppMap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      places: [{\n        latitude: 25.8103146,\n        longitude: -80.1751609\n      }, {\n        latitude: 22.8103146,\n        longitude: -80.1751609\n      }]\n    };\n\n    this.getLocation = () => {\n      if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition(this.getCoordinates);\n      } else {\n        alert('Geolocation not supported by this browser');\n      }\n    };\n\n    this.getCoordinates = position => {\n      console.log(position);\n      this.setState({\n        places: [{\n          latitude: position.coords.latitude,\n          longitude: position.coords.longitude\n        }]\n      });\n    };\n  }\n\n  componentDidMount() {\n    this.getLocation();\n  }\n\n  render() {\n    const {\n      loadingElement,\n      containerElement,\n      mapElement,\n      defaultCenter,\n      defaultZoom\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n      googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=' + googleMapsApiKey + '&libraries=geometry,drawing,places',\n      markers: this.state.places,\n      loadingElement: loadingElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"700px\"\n        }\n      }),\n      containerElement: containerElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"700px\"\n        }\n      }),\n      mapElement: mapElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: \"700px\"\n        }\n      }),\n      center: {\n        lat: 0,\n        lng: -180\n      },\n      defaultCenter: defaultCenter || {\n        lat: 37.0902405,\n        lng: -95.7128906\n      },\n      defaultZoom: defaultZoom\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Listing */ \"./src/components/Listing.js\");\n/* harmony import */ var _components_Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map.js */ \"./src/components/Map.js\");\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"New Page\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Link */ \"a\"], {\n      to: \"/Main\"\n    }, \"Go Back\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Listing.js":
/*!***********************************!*\
  !*** ./src/components/Listing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export default */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst googleMapsApiKey = 'AIzaSyCskdHri23YrHhmv4dJ5zwKm6WpCXPY9BE'; //div for displaying an individual bookmark\n\nclass BookmarkCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  // state={\n  //     lat:this.props.lat,\n  //     lon:this.props.lon,\n  //     address:this.props.address\n  // }\n  render() {\n    const {\n      lat,\n      lon,\n      address\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"bookmark-box\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Lat:\", lat, \", Lon:\", lon));\n  }\n\n}\n\nclass Listing extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  //Listing inherits scrollToBookmark function from the top-level\n  //react class, with 'this' bound to that original class. it assigns\n  //this function as the onClick event of individual bookmarks.\n  //back in the top-level class, scrollToBookmark calls another function\n  // sending data back to the map.\n  constructor() {\n    super();\n    this.state = {\n      bookmarksList: []\n    };\n  }\n\n  componentDidMount() {//set pinList to the masterlist received from database\n  }\n\n  render() {\n    return (\n      /*#__PURE__*/\n      //a box to contain all the bookmarks\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is a test card\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookmarkCard, {\n        lat: 10,\n        lon: 20,\n        address: '123 Main Street USA',\n        scrollToBookmark: this.state.scrollToBookmark\n      }), this.state.bookmarksList.map((bookmark, index) => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookmarkCard, {\n          lat: bookmark.lat,\n          lon: bookmark.lon,\n          address: bookmark.addess,\n          scrollToBookmark: this.state.scrollToBookmark\n        });\n      }))\n    );\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/Listing.js?");

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ \"./node_modules/react-google-maps/lib/index.js\");\n/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);\n/* global google */\n\n\n\nclass MapDirectionsRenderer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {}\n\nclass Map extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  getLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition(this.getCoordinates);\n    } else {\n      alert('Geolocation not supported by this browser');\n    }\n  }\n\n  getCoordinates(position) {\n    console.log(position);\n    this.setState({\n      latitude: position.coords.latitude,\n      longitude: position.coords.longitude\n    });\n  }\n\n  render() {\n    if (this.state.error) {\n      console.log(this.state.error);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.error);\n    }\n\n    return this.state.directions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"DirectionsRenderer\"], {\n      directions: this.state.directions\n    });\n  }\n\n  getLocation() {\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition(this.getCoordinates);\n    } else {\n      alert('Geolocation not supported by this browser');\n    }\n  }\n\n  getCoordinates(position) {\n    console.log(position);\n    this.setState({\n      latitude: position.coords.latitude,\n      longitude: position.coords.longitude\n    });\n  }\n\n  render() {\n    if (this.state.error) {\n      console.log(this.state.error);\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.error);\n    }\n\n    return this.state.directions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"DirectionsRenderer\"], {\n      directions: this.state.directions\n    });\n  }\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      directions: null,\n      error: null,\n      longitude: null,\n      latitude: null,\n      travelMode: 'DRIVING',\n      origin: '',\n      destination: ''\n    };\n    this.state = {\n      directions: null,\n      error: null,\n      longitude: null,\n      latitude: null,\n      travelMode: 'DRIVING',\n      origin: '',\n      destination: ''\n    };\n    this.state = {\n      response: null,\n      travelMode: 'DRIVING',\n      origin: '',\n      destination: ''\n    };\n    this.directionsCallback = this.directionsCallback.bind(this);\n    this.checkDriving = this.checkDriving.bind(this);\n    this.checkBicycling = this.checkBicycling.bind(this);\n    this.checkTransit = this.checkTransit.bind(this);\n    this.checkWalking = this.checkWalking.bind(this);\n    this.getOrigin = this.getOrigin.bind(this);\n    this.getDestination = this.getDestination.bind(this);\n    this.onClick = this.onClick.bind(this);\n    this.onMapClick = this.onMapClick.bind(this);\n  }\n\n  directionsCallback(response) {\n    console.log(response);\n\n    if (response !== null) {\n      if (response.status === 'OK') {\n        this.setState(() => ({\n          response\n        }));\n      } else {\n        console.log('response: ', response);\n      }\n    }\n  }\n\n  checkDriving(_ref) {\n    let {\n      target: {\n        checked\n      }\n    } = _ref;\n    checked && this.setState(() => ({\n      travelMode: 'DRIVING'\n    }));\n  }\n\n  checkBicycling(_ref2) {\n    let {\n      target: {\n        checked\n      }\n    } = _ref2;\n    checked && this.setState(() => ({\n      travelMode: 'BICYCLING'\n    }));\n  }\n\n  checkTransit(_ref3) {\n    let {\n      target: {\n        checked\n      }\n    } = _ref3;\n    checked && this.setState(() => ({\n      travelMode: 'TRANSIT'\n    }));\n  }\n\n  checkWalking(_ref4) {\n    let {\n      target: {\n        checked\n      }\n    } = _ref4;\n    checked && this.setState(() => ({\n      travelMode: 'WALKING'\n    }));\n  }\n\n  getOrigin(ref) {\n    this.origin = ref;\n  }\n\n  getDestination(ref) {\n    this.destination = ref;\n  }\n\n  onClick() {\n    if (this.origin.value !== '' && this.destination.value !== '') {\n      this.setState(() => ({\n        origin: this.origin.value,\n        destination: this.destination.value\n      }));\n    }\n  }\n\n  onMapClick() {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    console.log('onClick args: ', args);\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"map\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"map-settings\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", {\n      className: \"mt-0 mb-3\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-6 col-lg-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"ORIGIN\"\n    }, \"Origin\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"ORIGIN\",\n      className: \"form-control\",\n      type: \"text\",\n      ref: this.getOrigin\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-md-6 col-lg-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"DESTINATION\"\n    }, \"Destination\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"DESTINATION\",\n      className: \"form-control\",\n      type: \"text\",\n      ref: this.getDestination\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"d-flex flex-wrap\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group custom-control custom-radio mr-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"DRIVING\",\n      className: \"custom-control-input\",\n      name: \"travelMode\",\n      type: \"radio\",\n      checked: this.state.travelMode === 'DRIVING',\n      onChange: this.checkDriving\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label\",\n      htmlFor: \"DRIVING\"\n    }, \"Driving\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group custom-control custom-radio mr-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"BICYCLING\",\n      className: \"custom-control-input\",\n      name: \"travelMode\",\n      type: \"radio\",\n      checked: this.state.travelMode === 'BICYCLING',\n      onChange: this.checkBicycling\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label\",\n      htmlFor: \"BICYCLING\"\n    }, \"Bicycling\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group custom-control custom-radio mr-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"TRANSIT\",\n      className: \"custom-control-input\",\n      name: \"travelMode\",\n      type: \"radio\",\n      checked: this.state.travelMode === 'TRANSIT',\n      onChange: this.checkTransit\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label\",\n      htmlFor: \"TRANSIT\"\n    }, \"Transit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"form-group custom-control custom-radio mr-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      id: \"WALKING\",\n      className: \"custom-control-input\",\n      name: \"travelMode\",\n      type: \"radio\",\n      checked: this.state.travelMode === 'WALKING',\n      onChange: this.checkWalking\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      className: \"custom-control-label\",\n      htmlFor: \"WALKING\"\n    }, \"Walking\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"btn btn-primary\",\n      type: \"button\",\n      onClick: this.onClick\n    }, \"Build Route\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"map-container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"GoogleMap\"] // required\n    , {\n      id: \"direction-example\" // required\n      ,\n      mapContainerStyle: {\n        height: '400px',\n        width: '100%'\n      } // required\n      ,\n      zoom: 2 // required\n      ,\n      center: {\n        lat: 0,\n        lng: -180\n      } // optional\n      ,\n      onClick: this.onMapClick // optional\n      ,\n      onLoad: map => {\n        console.log('DirectionsRenderer onLoad map: ', map);\n      } // optional\n      ,\n      onUnmount: map => {\n        console.log('DirectionsRenderer onUnmount map: ', map);\n      }\n    }, this.state.destination !== '' && this.state.origin !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DirectionsService // required\n    , {\n      options: {\n        // eslint-disable-line react-perf/jsx-no-new-object-as-prop\n        destination: this.state.destination,\n        origin: this.state.origin,\n        travelMode: this.state.travelMode\n      } // required\n      ,\n      callback: this.directionsCallback // optional\n      ,\n      onLoad: directionsService => {\n        console.log('DirectionsService onLoad directionsService: ', directionsService);\n      } // optional\n      ,\n      onUnmount: directionsService => {\n        console.log('DirectionsService onUnmount directionsService: ', directionsService);\n      }\n    }), this.state.response !== null && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__[\"DirectionsRenderer\"] // required\n    , {\n      options: {\n        // eslint-disable-line react-perf/jsx-no-new-object-as-prop\n        directions: this.state.response\n      } // optional\n      ,\n      onLoad: directionsRenderer => {\n        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer);\n      } // optional\n      ,\n      onUnmount: directionsRenderer => {\n        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer);\n      }\n    }))));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Map);\n\n//# sourceURL=webpack:///./src/components/Map.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_Listing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Listing */ \"./src/components/Listing.js\");\n\n\n\n\n\n\n\nconst routes = [{\n  path: '/home',\n  name: 'NewPage',\n  component: _components_Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n}, {\n  path: '/',\n  name: 'HomePage',\n  component: _components_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n}];\nconst hist = Object(history__WEBPACK_IMPORTED_MODULE_3__[/* createBrowserHistory */ \"a\"])();\nconst root = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Router */ \"b\"], {\n  history: hist\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ \"c\"], null, routes.map(routes => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n    key: routes.name,\n    path: routes.path,\n    component: routes.component\n  });\n}))), root);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });