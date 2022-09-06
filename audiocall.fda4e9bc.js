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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call/audition.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call/audition.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_img_AudioEnglish3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/AudioEnglish3.jpg */ \"./src/assets/img/AudioEnglish3.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_img_AudioEnglish3_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.menu {\\r\\n  width: 100%;\\r\\n  height: 70px;\\r\\n  background: #7a9ce7;\\r\\n  text-align: center;\\r\\n  padding-top: 30px;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  height: 100vh;\\r\\n  background: #7a9ce7;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.overlay {   \\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  /* background-color: rgba(0, 0, 0, 1.0); */\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;  \\r\\n  z-index: 3;\\r\\n  transition: .3s all;\\r\\n}\\r\\n\\r\\n.diff-wrapper {\\r\\n  display: flex;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px 0;\\r\\n  width: 40vw;\\r\\n  height: 30vh;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background: #767e8f;  \\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2);\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n.diff-change {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  margin: 0 auto;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.diff-level {\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background: aqua;\\r\\n  border-radius: 50%;\\r\\n  text-align: center;\\r\\n  font-size: 20px;\\r\\n  color: blue;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/*---------------------------------acting--------------------------------*/\\r\\n\\r\\n.acting{\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    /* min-height: 100vh; */\\r\\n    padding: 10px;\\r\\n    /* background-image: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0.4)),url(img/b.jpg); */\\r\\n\\r\\n}\\r\\n\\r\\n.sound{\\r\\n  padding-bottom: 2%;\\r\\n  padding-top: 2%;\\r\\n}\\r\\n\\r\\n/* .photo {\\r\\n  width: 180px;\\r\\n  height: 180px;\\r\\n  margin: 0 auto;\\r\\n  overflow: hidden;\\r\\n  border-radius: 50%;\\r\\n} */\\r\\n\\r\\n\\r\\n\\r\\n/* .cont{\\r\\n  padding-top: 2%;\\r\\n} */\\r\\n\\r\\n#wordOriginal {\\r\\n  font-size: 124px;\\r\\n\\r\\n}\\r\\n\\r\\n#words ol{\\r\\n  display: grid;\\r\\n  grid-template-areas:\\r\\n  \\\"a a a a a\\\";\\r\\n  grid-gap: 50px;\\r\\n  padding-left: 50px;\\r\\n  margin-bottom: 50px;\\r\\n  margin-top: 50px;\\r\\n  font-size: 23px;\\r\\n}\\r\\n\\r\\n#words li{\\r\\n  background: #A2B5CD;        \\r\\n  border-radius: 6px 6px 6px 6px;\\r\\n  color: rgb(18, 3, 3); \\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n#words li:active {  \\r\\n  background: gold;\\r\\n  float: left;\\r\\n}\\r\\n#words li::before {\\r\\n  background: gold;\\r\\n  float: left;\\r\\n}\\r\\n.btn-main {\\r\\n  font-size: 24px;\\r\\n  text-align: center;\\r\\n  padding: 15px 25px;\\r\\n  min-width: 200px;\\r\\n  color: black;\\r\\n  background: #275dd3;\\r\\n  border-radius: 4px;\\r\\n  transition: .15s;\\r\\n  box-shadow: 0 0 0 1px rgba(255,255,255,.1), 0 2px 4px 0 rgba(14,30,37,.12);\\r\\n  cursor: pointer;\\r\\n  font-weight: 300;\\r\\n  margin: 20px auto;\\r\\n  max-width: 40%;\\r\\n}\\r\\n\\r\\n.btn-main:hover {\\r\\n  background: #163372;\\r\\n}\\r\\n\\r\\n.btn-main:active{\\r\\n  background: #1751cd;\\r\\n}\\r\\n\\r\\n#sound :active {\\r\\n translate: 15px 5px;\\r\\n}\\r\\n\\r\\n #wordOriginal{\\r\\n  font-size: x-large;\\r\\n }\\r\\n\\r\\n .instrucntion{\\r\\n  font-size: 24px;\\r\\n  color: black;\\r\\n  caret-color: blue;\\r\\n }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/pages/audio-call/audition.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/pages/audio-call/index.html":
/*!*****************************************!*\
  !*** ./src/pages/audio-call/index.html ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../../assets/img/sound-full-icon.svg */ \"./src/assets/img/sound-full-icon.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  \\r\\n  <title>Document</title>\\r\\n</head>\\r\\n<body>\\r\\n  <header class=\\\"menu\\\"></header>\\r\\n  <main class=\\\"main\\\">\\r\\n    <h1>Аудиовызов</h1>    \\r\\n    <div class=\\\"acting\\\" id=\\\"acting\\\">\\r\\n      <div class=\\\"sound\\\" id=\\\"sound\\\"> <a href=\\\"#\\\" id=\\\"myLink\\\" /*onclick=\\\"playAudio();\\\"*/> <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"\\\" height=\\\"100px\\\" width=\\\"100px\\\" /></a></div>\\r\\n      <!-- <div class = \\\"cont\\\"><div class=\\\"photo\\\" src></div></div> -->\\r\\n      <div><div id = \\\"wordOriginal\\\"></div></div>\\r\\n      <!-- <div class=\\\"obj noise\\\">\\r\\n        <div class=\\\"little-sound noise\\\" id=\\\"little-sound\\\"></div>\\r\\n        <div class = \\\"word noise\\\">\\r\\n      </div> -->\\r\\n    </div>\\r\\n    <div id = \\\"words\\\">\\r\\n          <ol>\\r\\n            <li><input type=\\\"radio\\\" id = \\\"word1Selected\\\" name = \\\"variant\\\"><p class=\\\"cell\\\" id = \\\"word1\\\"></p></li>\\r\\n            <li><input type=\\\"radio\\\" id = \\\"word2Selected\\\" name = \\\"variant\\\"><p class=\\\"cell\\\" id = \\\"word2\\\"></p></li>\\r\\n            <li><input type=\\\"radio\\\" id = \\\"word3Selected\\\" name = \\\"variant\\\"><p class=\\\"cell\\\" id = \\\"word3\\\"></p></li>\\r\\n            <li><input type=\\\"radio\\\" id = \\\"word4Selected\\\" name = \\\"variant\\\"><p class=\\\"cell\\\" id = \\\"word4\\\"></p></li>        \\r\\n          </ol>\\r\\n    </div>\\r\\n    <div class=\\\"instrucntion\\\"> Вам необходимо прослушать слово нажав на значек \\\"Звук\\\" и выбрать правильный вариант.</div>\\r\\n    <div class=\\\"btn-main hide next\\\" id=\\\"check\\\" /*onclick=\\\"onNext()\\\"*/>Сheck</div>\\r\\n    \\r\\n\\r\\n    <!-- <div countdown=\\\"60\\\"></div> -->\\r\\n    \\r\\n    <!-- <div class=\\\"diff\\\">\\r\\n      <div class=\\\"overlay\\\"></div>\\r\\n      <div class=\\\"diff-wrapper\\\">\\r\\n        <h2>Выберите сложность:</h2>\\r\\n        <div class=\\\"diff-change\\\">\\r\\n          <div class=\\\"diff-level\\\">1</div>\\r\\n          <div class=\\\"diff-level\\\">2</div>\\r\\n          <div class=\\\"diff-level\\\">3</div>\\r\\n          <div class=\\\"diff-level\\\">4</div>\\r\\n          <div class=\\\"diff-level\\\">5</div>\\r\\n          <div class=\\\"diff-level\\\">6</div>\\r\\n        </div>\\r\\n\\r\\n      </div>\\r\\n      <button class=\\\"diff-back\\\"><a href=\\\"./index.html\\\">Выбрать другую игру</a></button>\\r\\n    </div> -->\\r\\n    \\r\\n  </main>\\r\\n\\r\\n  \\r\\n  \\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack/./src/pages/audio-call/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/pages/audio-call/audition.css":
/*!*******************************************!*\
  !*** ./src/pages/audio-call/audition.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_audition_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./audition.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pages/audio-call/audition.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_audition_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_audition_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack://webpack/./src/pages/audio-call/audition.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/pages/audio-call/audition.ts":
/*!******************************************!*\
  !*** ./src/pages/audio-call/audition.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n// import \"./../../assets/styles/audition.scss\"\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! ./index.html */ \"./src/pages/audio-call/index.html\");\r\n__webpack_require__(/*! ./audition.css */ \"./src/pages/audio-call/audition.css\");\r\nvar divDiff;\r\nvar diffGroup;\r\nvar wordList = [];\r\nvar wordIndex = 0;\r\nvar wrongAnswersArray = [];\r\nvar rightAnswerIndex = 0;\r\nvar wrongAnswersCount = 0;\r\nstart();\r\nfunction start() {\r\n    wordIndex = 0;\r\n    wrongAnswersArray = [];\r\n    rightAnswerIndex = 0;\r\n    wrongAnswersCount = 0;\r\n    divDiff = document.createElement('div'); /* Создаем модалку с выбором уровня */\r\n    divDiff.innerHTML = \"\\n    <div class=\\\"overlay\\\"></div>\\n    <div class=\\\"diff-wrapper\\\">\\n      <h2>\\u0412\\u044B\\u0431\\u0435\\u0440\\u0438\\u0442\\u0435 \\u0441\\u043B\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C:</h2>\\n      <div class=\\\"diff-change\\\">\\n        <div class=\\\"diff-level\\\">1</div>\\n        <div class=\\\"diff-level\\\">2</div>\\n        <div class=\\\"diff-level\\\">3</div>\\n        <div class=\\\"diff-level\\\">4</div>\\n        <div class=\\\"diff-level\\\">5</div>\\n        <div class=\\\"diff-level\\\">6</div>\\n      </div>\\n      <button class=\\\"diff-back\\\"><a href=\\\"https://olyapolya.github.io/rslang/main\\\">\\u0412\\u044B\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u0440\\u0443\\u0433\\u0443\\u044E \\u0438\\u0433\\u0440\\u0443</a></button>\\n    </div>\\n  \";\r\n    var main = document.querySelector('.main');\r\n    main.append(divDiff); /* Вставляем в main(или куда надо) */\r\n    var diffLevels = document.querySelectorAll('.diff-level');\r\n    diffLevels.forEach(function (item) { return item.addEventListener('click', startSprint); }); /* навешиваем листнеры с функцией запуска игры на кнопки сложности */\r\n}\r\nfunction startSprint(event) {\r\n    diffGroup = +event.target.innerHTML; /* берем значение кнопок */\r\n    divDiff.remove(); /* удаляем модалку с выборм сложности */\r\n    getWords().then(startGame); /* запрашиваем список слов и запускаем игру*/\r\n}\r\nfunction getRandomNum(n) {\r\n    var randomNum; /* получение рандомного числа */\r\n    return randomNum = Math.floor((Math.random() * n) + 1);\r\n}\r\n;\r\nfunction getWords() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var firstResponse, firstContent, secondResponse, secondContent;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, fetch(\"https://easy-english-rss.herokuapp.com/words?group=\" + (diffGroup - 1) + \"&page=\" + getRandomNum(30), {\r\n                        method: 'GET',\r\n                        headers: {\r\n                            'Accept': 'application/json',\r\n                            'Content-Type': 'application/json'\r\n                        },\r\n                        body: JSON.stringify(Object)\r\n                    })];\r\n                case 1:\r\n                    firstResponse = _a.sent();\r\n                    return [4 /*yield*/, firstResponse.json()];\r\n                case 2:\r\n                    firstContent = _a.sent();\r\n                    return [4 /*yield*/, fetch(\"https://easy-english-rss.herokuapp.com/words?group=\" + (diffGroup - 1) + \"&page=\" + getRandomNum(30), {\r\n                            method: 'GET',\r\n                            headers: {\r\n                                'Accept': 'application/json',\r\n                                'Content-Type': 'application/json'\r\n                            },\r\n                            body: JSON.stringify(Object)\r\n                        })];\r\n                case 3:\r\n                    secondResponse = _a.sent();\r\n                    return [4 /*yield*/, secondResponse.json()];\r\n                case 4:\r\n                    secondContent = _a.sent();\r\n                    wordList = firstContent.concat(secondContent);\r\n                    console.log(wordList);\r\n                    return [2 /*return*/, wordList];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction startGame() {\r\n    makeWrongAnswers();\r\n    nextWord();\r\n}\r\nfunction makeWrongAnswers() {\r\n    for (var i = 0; i < wordList.length; i++) {\r\n        wrongAnswersArray.push(wordList[i].wordTranslate);\r\n    }\r\n    console.log('wrongAnswersArray: ');\r\n    console.log(wrongAnswersArray);\r\n}\r\nvar check = document.getElementById(\"check\");\r\ncheck.addEventListener('click', onNext);\r\nfunction onNext() {\r\n    var selectedIndex = 0;\r\n    for (var i = 1; i <= 4; i++) {\r\n        var input = document.getElementById('word' + i + 'Selected');\r\n        if (input.checked == true) {\r\n            selectedIndex = i;\r\n        }\r\n    }\r\n    if (selectedIndex == 0) {\r\n        return;\r\n    }\r\n    if (selectedIndex == rightAnswerIndex) {\r\n        clearSelection();\r\n        nextWord();\r\n    }\r\n    else {\r\n        markWrongAnswer(selectedIndex);\r\n        wrongAnswersCount++;\r\n    }\r\n}\r\nfunction nextWord() {\r\n    if (wordIndex < wordList.length - 20) {\r\n        rightAnswerIndex = getRandomNum(4);\r\n        var word = wordList[wordIndex];\r\n        for (var i = 1; i <= 4; i++) {\r\n            document.getElementById('word' + i).innerHTML = i == rightAnswerIndex ? word.wordTranslate : getWrongWord();\r\n        }\r\n        document.getElementById('wordOriginal').innerHTML = word.word;\r\n        // document.getElementById('word1').innerHTML = word.wordTranslate;\r\n        // document.getElementById('word2').innerHTML = getWrongWord ();\r\n        // document.getElementById('word3').innerHTML = getWrongWord ();\r\n        // document.getElementById('word4').innerHTML = getWrongWord ();\r\n        // console.log('word audio: ' + word.audio);\r\n        // console.log('word: ' + word.word);\r\n        // console.log('right: ' + word.wordTranslate);\r\n        // console.log('wrong1: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);\r\n        // console.log('wrong2: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);\r\n        // console.log('wrong3: ' + wrongAnswersArray[getRandomNum(wordList.length) - 1]);\r\n        wordIndex++;\r\n    }\r\n    else {\r\n        endGame();\r\n    }\r\n}\r\nfunction getWrongWord() {\r\n    var word = wordList[wordIndex];\r\n    var wrongWord = wrongAnswersArray[getRandomNum(wordList.length) - 1];\r\n    while (word.wordTranslate == wrongWord) {\r\n        wrongWord = wrongAnswersArray[getRandomNum(wordList.length) - 1];\r\n    }\r\n    return wrongWord;\r\n}\r\nvar sound = document.getElementById(\"sound\");\r\nsound.addEventListener('click', playAudio);\r\nfunction playAudio() {\r\n    var word = wordList[wordIndex - 1];\r\n    var myAudio = new Audio;\r\n    // myAudio.src = 'file:///d:/file.mp3';\r\n    myAudio.src = 'https://easy-english-rss.herokuapp.com/' + word.audio;\r\n    myAudio.play();\r\n    console.log(word.audio);\r\n}\r\nfunction clearSelection() {\r\n    var input1 = document.getElementById('word1Selected');\r\n    var input2 = document.getElementById('word2Selected');\r\n    var input3 = document.getElementById('word3Selected');\r\n    var input4 = document.getElementById('word4Selected');\r\n    input1.checked = false;\r\n    input2.checked = false;\r\n    input3.checked = false;\r\n    input4.checked = false;\r\n}\r\nfunction markWrongAnswer(i) {\r\n    var element = document.getElementById('word' + i);\r\n    // console.log (element);\r\n    // console.log (i);\r\n    var text = element.innerHTML;\r\n    element.innerHTML = text.strike();\r\n}\r\nfunction endGame() {\r\n    alert('The end!\\nКоличество неправильных ответов: ' + wrongAnswersCount);\r\n    start();\r\n}\r\n\n\n//# sourceURL=webpack://webpack/./src/pages/audio-call/audition.ts?");

/***/ }),

/***/ "./src/assets/img/AudioEnglish3.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/AudioEnglish3.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/AudioEnglish3ea1baaca92d12b1f742a.jpg\";\n\n//# sourceURL=webpack://webpack/./src/assets/img/AudioEnglish3.jpg?");

/***/ }),

/***/ "./src/assets/img/sound-full-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/img/sound-full-icon.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sound-full-icon92f3d795092061cdf481.svg\";\n\n//# sourceURL=webpack://webpack/./src/assets/img/sound-full-icon.svg?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"audiocall": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/audio-call/audition.ts");
/******/ 	
/******/ })()
;