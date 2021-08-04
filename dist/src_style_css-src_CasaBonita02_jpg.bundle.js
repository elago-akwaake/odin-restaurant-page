"use strict";
(self["webpackChunkproject_restaurant_page"] = self["webpackChunkproject_restaurant_page"] || []).push([["src_style_css-src_CasaBonita02_jpg"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* 00 General Styles */\n:root {\n  --color-header: peachpuff;\n  --color-white: #ebebeb;\n  --color-light-blue: #1792d2;\n  --color-dark-blue: #143774;\n  --color-grey: #707070;\n  --color-light-grey: #efefef;\n  --color-yellow: ;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*::before,\n::after {\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 300;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n.image-full {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n}\n\n/* ========================================================= */\n/* 01 Container Styles */\n.container {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n/* ========================================================= */\n/* 02 Typorgraphy */\nh1,\nh2,\nh3 {\n  color: var(--color-dark-blue);\n  font-family: \"Lora\", serif;\n  font-weight: 400;\n  margin-top: 0;\n}\n\n/* the site title */\nh1 {\n  font-size: 2.125rem;\n  margin: 0;\n}\n\na {\n  color: var(--color-light-blue);\n}\n\na:hover,\na:focus {\n  color: var(--color-dark-blue);\n}\n\nstrong {\n  font-weight: 700;\n}\n\n/* The subtitle for the h1 title. */\n.h1-subtitle {\n  font-weight: 700;\n  /* --color-light-blue: #1792D2; */\n  color: var(--color-light-blue);\n  font-size: 0.75rem;\n  margin: 0;\n  text-transform: capitalize;\n}\n\nmain p {\n  line-height: 1.5;\n}\n\n.price {\n  color: var(--color-light-blue);\n}\n/* ===================================================\nLayout\n=================================================== */\n\n.container {\n  width: 90%;\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n/* The font of the site title computes to 56px. Excluding \n2em top and bottom padding and 3rem of margin bottom. */\nheader {\n  background: var(--color-header);\n  padding: 1.25em 0 1em;\n  text-align: center;\n}\n\n.section {\n  padding-top: 2em;\n}\n\nfooter {\n  background-color: var(--color-dark-blue);\n  color: var(--color-white);\n  text-align: center;\n  padding: 2.5em 0;\n}\n\n/********************* navigation *********************/\n\n.container-flex-header {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 735px) {\n  .container-flex-header {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  header {\n    padding: 1.25em 0;\n    text-align: left;\n  }\n}\n\n/* An ordered list has a default margin-top and bottom  of 16px */\n\nnav ul {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\nnav li:nth-child(2) {\n  margin: 0;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n\nnav a {\n  text-decoration: none;\n  color: var(--color-grey);\n  font-weight: 700;\n  padding: 0.25em 0;\n  border-bottom: 2px solid transparent;\n}\n\nnav a:hover,\nnav a:focus {\n  color: var(--color-light-blue);\n  border-bottom: 2px solid var(--color-light-blue);\n}\n\n.current-page {\n  border-bottom: 2px solid #707070;\n}\n\n.current-page:hover {\n  color: var(--color-grey);\n  border-bottom: 2px solid #707070;\n}\n\n/* ========================================================= */\n/* 04 Hero Styles */\n#hero-text {\n  padding: .5em 0;\n  background-color: #222;\n  color: white;\n  font-size: .725rem;\n  text-align: center;\n}\n\n.section .container {\n  padding-bottom: 2em;\n}\n\n/* ========================================================= */\n/* Menu */\n#thai {\n  background-color: #EECF5C;\n}\n#salads {\n  background-color: #00461E;\n}\n\n.menu-section-headline {\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.menu-section-headline p {\n  font-style: italic;\n}\n\n.menu-section-body {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-subsection:not(:last-of-type) {\n  border-bottom: #707070 1px solid;\n  padding-bottom: 1em;\n  margin-bottom: 2em;\n  width: 100%;\n}\n\n@media (min-width: 735px) {\n  .menu-section-body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  \n  .menu-subsection {\n    border-bottom: none;\n    width: 47%;\n  }\n\n  .menu-subsection:not(:last-of-type) {\n    border-bottom: none;\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }  \n}\n\n/* ========================================================= */\n#contact-details {\n  background-color: #F3ADA0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,yBAAyB;EACzB,sBAAsB;EACtB,2BAA2B;EAC3B,0BAA0B;EAC1B,qBAAqB;EACrB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,eAAe;EACf,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA,8DAA8D;AAC9D,wBAAwB;AACxB;EACE,UAAU;EACV,cAAc;EACd,gBAAgB;AAClB;;AAEA,8DAA8D;AAC9D,mBAAmB;AACnB;;;EAGE,6BAA6B;EAC7B,0BAA0B;EAC1B,gBAAgB;EAChB,aAAa;AACf;;AAEA,mBAAmB;AACnB;EACE,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;EAEE,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;AAClB;;AAEA,mCAAmC;AACnC;EACE,gBAAgB;EAChB,iCAAiC;EACjC,8BAA8B;EAC9B,kBAAkB;EAClB,SAAS;EACT,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;AACA;;qDAEqD;;AAErD;EACE,UAAU;EACV,gBAAgB;EAChB,cAAc;AAChB;;AAEA;uDACuD;AACvD;EACE,+BAA+B;EAC/B,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wCAAwC;EACxC,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA,uDAAuD;;AAEvD;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA,iEAAiE;;AAEjE;EACE,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,iBAAiB;AACnB;;;AAGA;EACE,qBAAqB;EACrB,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;;EAEE,8BAA8B;EAC9B,gDAAgD;AAClD;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA,8DAA8D;AAC9D,mBAAmB;AACnB;EACE,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,8DAA8D;AAC9D,SAAS;AACT;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA,8DAA8D;AAC9D;EACE,yBAAyB;AAC3B","sourcesContent":["/* 00 General Styles */\n:root {\n  --color-header: peachpuff;\n  --color-white: #ebebeb;\n  --color-light-blue: #1792d2;\n  --color-dark-blue: #143774;\n  --color-grey: #707070;\n  --color-light-grey: #efefef;\n  --color-yellow: ;\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*::before,\n::after {\n  box-sizing: inherit;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 1rem;\n  font-family: \"Ubuntu\", sans-serif;\n  font-weight: 300;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n.image-full {\n  width: 100%;\n  max-height: 400px;\n  object-fit: cover;\n}\n\n/* ========================================================= */\n/* 01 Container Styles */\n.container {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 800px;\n}\n\n/* ========================================================= */\n/* 02 Typorgraphy */\nh1,\nh2,\nh3 {\n  color: var(--color-dark-blue);\n  font-family: \"Lora\", serif;\n  font-weight: 400;\n  margin-top: 0;\n}\n\n/* the site title */\nh1 {\n  font-size: 2.125rem;\n  margin: 0;\n}\n\na {\n  color: var(--color-light-blue);\n}\n\na:hover,\na:focus {\n  color: var(--color-dark-blue);\n}\n\nstrong {\n  font-weight: 700;\n}\n\n/* The subtitle for the h1 title. */\n.h1-subtitle {\n  font-weight: 700;\n  /* --color-light-blue: #1792D2; */\n  color: var(--color-light-blue);\n  font-size: 0.75rem;\n  margin: 0;\n  text-transform: capitalize;\n}\n\nmain p {\n  line-height: 1.5;\n}\n\n.price {\n  color: var(--color-light-blue);\n}\n/* ===================================================\nLayout\n=================================================== */\n\n.container {\n  width: 90%;\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n/* The font of the site title computes to 56px. Excluding \n2em top and bottom padding and 3rem of margin bottom. */\nheader {\n  background: var(--color-header);\n  padding: 1.25em 0 1em;\n  text-align: center;\n}\n\n.section {\n  padding-top: 2em;\n}\n\nfooter {\n  background-color: var(--color-dark-blue);\n  color: var(--color-white);\n  text-align: center;\n  padding: 2.5em 0;\n}\n\n/********************* navigation *********************/\n\n.container-flex-header {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (min-width: 735px) {\n  .container-flex-header {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  header {\n    padding: 1.25em 0;\n    text-align: left;\n  }\n}\n\n/* An ordered list has a default margin-top and bottom  of 16px */\n\nnav ul {\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\nnav li:nth-child(2) {\n  margin: 0;\n  margin-left: 1em;\n  margin-right: 1em;\n}\n\n\nnav a {\n  text-decoration: none;\n  color: var(--color-grey);\n  font-weight: 700;\n  padding: 0.25em 0;\n  border-bottom: 2px solid transparent;\n}\n\nnav a:hover,\nnav a:focus {\n  color: var(--color-light-blue);\n  border-bottom: 2px solid var(--color-light-blue);\n}\n\n.current-page {\n  border-bottom: 2px solid #707070;\n}\n\n.current-page:hover {\n  color: var(--color-grey);\n  border-bottom: 2px solid #707070;\n}\n\n/* ========================================================= */\n/* 04 Hero Styles */\n#hero-text {\n  padding: .5em 0;\n  background-color: #222;\n  color: white;\n  font-size: .725rem;\n  text-align: center;\n}\n\n.section .container {\n  padding-bottom: 2em;\n}\n\n/* ========================================================= */\n/* Menu */\n#thai {\n  background-color: #EECF5C;\n}\n#salads {\n  background-color: #00461E;\n}\n\n.menu-section-headline {\n  margin-bottom: 2em;\n  text-align: center;\n}\n\n.menu-section-headline p {\n  font-style: italic;\n}\n\n.menu-section-body {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-subsection:not(:last-of-type) {\n  border-bottom: #707070 1px solid;\n  padding-bottom: 1em;\n  margin-bottom: 2em;\n  width: 100%;\n}\n\n@media (min-width: 735px) {\n  .menu-section-body {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  \n  .menu-subsection {\n    border-bottom: none;\n    width: 47%;\n  }\n\n  .menu-subsection:not(:last-of-type) {\n    border-bottom: none;\n    padding-bottom: 0;\n    margin-bottom: 0;\n  }  \n}\n\n/* ========================================================= */\n#contact-details {\n  background-color: #F3ADA0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/CasaBonita02.jpg":
/*!******************************!*\
  !*** ./src/CasaBonita02.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22bfb5ef4468087af9ed.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3N0eWxlX2Nzcy1zcmNfQ2FzYUJvbml0YTAyX2pwZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsMEVBQTBFLDhCQUE4QiwyQkFBMkIsZ0NBQWdDLCtCQUErQiwwQkFBMEIsZ0NBQWdDLHFCQUFxQixHQUFHLFVBQVUsMkJBQTJCLGlCQUFpQixHQUFHLDZCQUE2Qix3QkFBd0IsR0FBRyxpQkFBaUIsY0FBYyxlQUFlLG9CQUFvQix3Q0FBd0MscUJBQXFCLEdBQUcsU0FBUyxvQkFBb0IsaUJBQWlCLG1CQUFtQixHQUFHLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHNCQUFzQixHQUFHLDRHQUE0RyxlQUFlLG1CQUFtQixxQkFBcUIsR0FBRyx5R0FBeUcsa0NBQWtDLGlDQUFpQyxxQkFBcUIsa0JBQWtCLEdBQUcsOEJBQThCLHdCQUF3QixjQUFjLEdBQUcsT0FBTyxtQ0FBbUMsR0FBRyx1QkFBdUIsa0NBQWtDLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyx3REFBd0QscUJBQXFCLG9DQUFvQyxxQ0FBcUMsdUJBQXVCLGNBQWMsK0JBQStCLEdBQUcsWUFBWSxxQkFBcUIsR0FBRyxZQUFZLG1DQUFtQyxHQUFHLHdJQUF3SSxlQUFlLHFCQUFxQixtQkFBbUIsR0FBRyxrSUFBa0ksb0NBQW9DLDBCQUEwQix1QkFBdUIsR0FBRyxjQUFjLHFCQUFxQixHQUFHLFlBQVksNkNBQTZDLDhCQUE4Qix1QkFBdUIscUJBQXFCLEdBQUcsd0ZBQXdGLGtCQUFrQiwyQkFBMkIsR0FBRywrQkFBK0IsNEJBQTRCLDBCQUEwQixxQ0FBcUMsMEJBQTBCLEtBQUssY0FBYyx3QkFBd0IsdUJBQXVCLEtBQUssR0FBRyxrRkFBa0YsZUFBZSxxQkFBcUIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyx5QkFBeUIsY0FBYyxxQkFBcUIsc0JBQXNCLEdBQUcsYUFBYSwwQkFB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QTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogMDAgR2VuZXJhbCBTdHlsZXMgKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yLWhlYWRlcjogcGVhY2hwdWZmO1xcbiAgLS1jb2xvci13aGl0ZTogI2ViZWJlYjtcXG4gIC0tY29sb3ItbGlnaHQtYmx1ZTogIzE3OTJkMjtcXG4gIC0tY29sb3ItZGFyay1ibHVlOiAjMTQzNzc0O1xcbiAgLS1jb2xvci1ncmV5OiAjNzA3MDcwO1xcbiAgLS1jb2xvci1saWdodC1ncmV5OiAjZWZlZmVmO1xcbiAgLS1jb2xvci15ZWxsb3c6IDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW1hZ2UtZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIDAxIENvbnRhaW5lciBTdHlsZXMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIDAyIFR5cG9yZ3JhcGh5ICovXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4vKiB0aGUgc2l0ZSB0aXRsZSAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG5hOmhvdmVyLFxcbmE6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxufVxcblxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBUaGUgc3VidGl0bGUgZm9yIHRoZSBoMSB0aXRsZS4gKi9cXG4uaDEtc3VidGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIC8qIC0tY29sb3ItbGlnaHQtYmx1ZTogIzE3OTJEMjsgKi9cXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5tYWluIHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLnByaWNlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTGF5b3V0XFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBUaGUgZm9udCBvZiB0aGUgc2l0ZSB0aXRsZSBjb21wdXRlcyB0byA1NnB4LiBFeGNsdWRpbmcgXFxuMmVtIHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgYW5kIDNyZW0gb2YgbWFyZ2luIGJvdHRvbS4gKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaGVhZGVyKTtcXG4gIHBhZGRpbmc6IDEuMjVlbSAwIDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMi41ZW0gMDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKiBuYXZpZ2F0aW9uICoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY29udGFpbmVyLWZsZXgtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzM1cHgpIHtcXG4gIC5jb250YWluZXItZmxleC1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxLjI1ZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG59XFxuXFxuLyogQW4gb3JkZXJlZCBsaXN0IGhhcyBhIGRlZmF1bHQgbWFyZ2luLXRvcCBhbmQgYm90dG9tICBvZiAxNnB4ICovXFxuXFxubmF2IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubmF2IGxpOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcblxcbm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxubmF2IGE6aG92ZXIsXFxubmF2IGE6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uY3VycmVudC1wYWdlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzA3MDcwO1xcbn1cXG5cXG4uY3VycmVudC1wYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzA3MDcwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiAwNCBIZXJvIFN0eWxlcyAqL1xcbiNoZXJvLXRleHQge1xcbiAgcGFkZGluZzogLjVlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogLjcyNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24gLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBNZW51ICovXFxuI3RoYWkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQ0Y1QztcXG59XFxuI3NhbGFkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NjFFO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uLWhlYWRsaW5lIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbi1oZWFkbGluZSBwIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc2VjdGlvbi1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1zdWJzZWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiAjNzA3MDcwIDFweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDczNXB4KSB7XFxuICAubWVudS1zZWN0aW9uLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBcXG4gIC5tZW51LXN1YnNlY3Rpb24ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB3aWR0aDogNDclO1xcbiAgfVxcblxcbiAgLm1lbnUtc3Vic2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH0gIFxcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jY29udGFjdC1kZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0FEQTA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSw4REFBOEQ7QUFDOUQsd0JBQXdCO0FBQ3hCO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUEsOERBQThEO0FBQzlELG1CQUFtQjtBQUNuQjs7O0VBR0UsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7O3FEQUVxRDs7QUFFckQ7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7dURBQ3VEO0FBQ3ZEO0VBQ0UsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUEsdURBQXVEOztBQUV2RDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBLGlFQUFpRTs7QUFFakU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9DQUFvQztBQUN0Qzs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQzs7QUFFQSw4REFBOEQ7QUFDOUQsbUJBQW1CO0FBQ25CO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSw4REFBOEQ7QUFDOUQsU0FBUztBQUNUO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQSw4REFBOEQ7QUFDOUQ7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogMDAgR2VuZXJhbCBTdHlsZXMgKi9cXG46cm9vdCB7XFxuICAtLWNvbG9yLWhlYWRlcjogcGVhY2hwdWZmO1xcbiAgLS1jb2xvci13aGl0ZTogI2ViZWJlYjtcXG4gIC0tY29sb3ItbGlnaHQtYmx1ZTogIzE3OTJkMjtcXG4gIC0tY29sb3ItZGFyay1ibHVlOiAjMTQzNzc0O1xcbiAgLS1jb2xvci1ncmV5OiAjNzA3MDcwO1xcbiAgLS1jb2xvci1saWdodC1ncmV5OiAjZWZlZmVmO1xcbiAgLS1jb2xvci15ZWxsb3c6IDtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJVYnVudHVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uaW1hZ2UtZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIDAxIENvbnRhaW5lciBTdHlsZXMgKi9cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxufVxcblxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIDAyIFR5cG9yZ3JhcGh5ICovXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxuICBmb250LWZhbWlseTogXFxcIkxvcmFcXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4vKiB0aGUgc2l0ZSB0aXRsZSAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMi4xMjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG5hOmhvdmVyLFxcbmE6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxufVxcblxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4vKiBUaGUgc3VidGl0bGUgZm9yIHRoZSBoMSB0aXRsZS4gKi9cXG4uaDEtc3VidGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIC8qIC0tY29sb3ItbGlnaHQtYmx1ZTogIzE3OTJEMjsgKi9cXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5tYWluIHAge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLnByaWNlIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ibHVlKTtcXG59XFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuTGF5b3V0XFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4vKiBUaGUgZm9udCBvZiB0aGUgc2l0ZSB0aXRsZSBjb21wdXRlcyB0byA1NnB4LiBFeGNsdWRpbmcgXFxuMmVtIHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgYW5kIDNyZW0gb2YgbWFyZ2luIGJvdHRvbS4gKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItaGVhZGVyKTtcXG4gIHBhZGRpbmc6IDEuMjVlbSAwIDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24ge1xcbiAgcGFkZGluZy10b3A6IDJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhcmstYmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMi41ZW0gMDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKiBuYXZpZ2F0aW9uICoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uY29udGFpbmVyLWZsZXgtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzM1cHgpIHtcXG4gIC5jb250YWluZXItZmxleC1oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBwYWRkaW5nOiAxLjI1ZW0gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG59XFxuXFxuLyogQW4gb3JkZXJlZCBsaXN0IGhhcyBhIGRlZmF1bHQgbWFyZ2luLXRvcCBhbmQgYm90dG9tICBvZiAxNnB4ICovXFxuXFxubmF2IHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubmF2IGxpOm50aC1jaGlsZCgyKSB7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcblxcbm5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxubmF2IGE6aG92ZXIsXFxubmF2IGE6Zm9jdXMge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4uY3VycmVudC1wYWdlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzA3MDcwO1xcbn1cXG5cXG4uY3VycmVudC1wYWdlOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNzA3MDcwO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiAwNCBIZXJvIFN0eWxlcyAqL1xcbiNoZXJvLXRleHQge1xcbiAgcGFkZGluZzogLjVlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogLjcyNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNlY3Rpb24gLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKiBNZW51ICovXFxuI3RoYWkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFQ0Y1QztcXG59XFxuI3NhbGFkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0NjFFO1xcbn1cXG5cXG4ubWVudS1zZWN0aW9uLWhlYWRsaW5lIHtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbi1oZWFkbGluZSBwIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc2VjdGlvbi1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVudS1zdWJzZWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiAjNzA3MDcwIDFweCBzb2xpZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDczNXB4KSB7XFxuICAubWVudS1zZWN0aW9uLWJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICBcXG4gIC5tZW51LXN1YnNlY3Rpb24ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB3aWR0aDogNDclO1xcbiAgfVxcblxcbiAgLm1lbnUtc3Vic2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIH0gIFxcbn1cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jY29udGFjdC1kZXRhaWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0FEQTA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=