"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/MessageList.jsx":
/*!****************************************!*\
  !*** ./src/components/MessageList.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MessageList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction MessageList(param) {\n    var messages = param.messages, setMessagesList = param.setMessagesList;\n    var _this = this;\n    var handleRemove = function handleRemove(id) {\n        var newMessages = messages.filter(function(message) {\n            return message.id !== id;\n        });\n        setMessagesList(newMessages);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[200],\n            marginBottom: '16px'\n        },\n        children: messages.map(function(message) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    position: 'relative',\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/matgermano.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: message.from\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this),\n                    message.text,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"button\",\n                        label: \"\\xd7\",\n                        size: \"sm\",\n                        variant: \"tertiary\",\n                        colorVariant: \"light\",\n                        onClick: function() {\n                            return handleRemove(message.id);\n                        },\n                        styleSheet: {\n                            position: 'absolute',\n                            top: '4px',\n                            right: '4px'\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, message.id, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_c = MessageList;\nvar _c;\n$RefreshReg$(_c, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUxpc3QuanN4P2YwZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEltYWdlLCBUZXh0IH0gZnJvbSBcIkBza3luZXh1aS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlTGlzdCh7IG1lc3NhZ2VzLCBzZXRNZXNzYWdlc0xpc3QgfSkge1xyXG4gIGZ1bmN0aW9uIGhhbmRsZVJlbW92ZShpZCkge1xyXG4gICAgY29uc3QgbmV3TWVzc2FnZXMgPSBtZXNzYWdlcy5maWx0ZXIobWVzc2FnZSA9PiBtZXNzYWdlLmlkICE9PSBpZCk7XHJcbiAgICBzZXRNZXNzYWdlc0xpc3QobmV3TWVzc2FnZXMpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjIwMFwiXSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgfX1cclxuICAgID5cclxuXHJcbiAgICAgIHtcclxuICAgICAgICBtZXNzYWdlcy5tYXAobWVzc2FnZSA9PiAoXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vbWF0Z2VybWFuby5wbmdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5mcm9tfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgbGFiZWw9JyZ0aW1lczsnXHJcbiAgICAgICAgICAgICAgc2l6ZT0nc20nXHJcbiAgICAgICAgICAgICAgdmFyaWFudD0ndGVydGlhcnknXHJcbiAgICAgICAgICAgICAgY29sb3JWYXJpYW50PSdsaWdodCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmUobWVzc2FnZS5pZCl9XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICc0cHgnLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICc0cHgnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L0JveD5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiSW1hZ2UiLCJUZXh0IiwiYXBwQ29uZmlnIiwiTWVzc2FnZUxpc3QiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzTGlzdCIsImhhbmRsZVJlbW92ZSIsImlkIiwibmV3TWVzc2FnZXMiLCJmaWx0ZXIiLCJtZXNzYWdlIiwidGFnIiwic3R5bGVTaGVldCIsIm92ZXJmbG93IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiY29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsIm5ldXRyYWxzIiwibWFyZ2luQm90dG9tIiwibWFwIiwicG9zaXRpb24iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiaG92ZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblJpZ2h0Iiwic3JjIiwiZnJvbSIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJ0ZXh0IiwidHlwZSIsImxhYmVsIiwic2l6ZSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJvbkNsaWNrIiwidG9wIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MessageList.jsx\n");

/***/ })

});