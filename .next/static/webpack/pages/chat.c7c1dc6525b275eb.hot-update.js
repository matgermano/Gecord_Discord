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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MessageList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction MessageList(param) {\n    var messages = param.messages, setMessagesList = param.setMessagesList;\n    var _this = this;\n    var handleRemove = function handleRemove(id) {\n        var newMessages = messages.filter(function(message) {\n            return message.id !== id;\n        });\n        setMessagesList(newMessages);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[100],\n            marginBottom: '16px'\n        },\n        children: messages.map(function(message) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    position: 'relative',\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/matgermano.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: message.from\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_2__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this),\n                    \"st\",\n                    message.text,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"button\",\n                        label: \"\\xd7\",\n                        size: \"sm\",\n                        variant: \"tertiary\",\n                        colorVariant: \"light\",\n                        onClick: function() {\n                            return handleRemove(message.id);\n                        },\n                        styleSheet: {\n                            position: 'absolute',\n                            top: '4px',\n                            right: '4px'\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, message.id, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\src\\\\components\\\\MessageList.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this));\n};\n_c = MessageList;\nvar _c;\n$RefreshReg$(_c, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkZ1QkosV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlTGlzdC5qc3g/ZjBmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSW1hZ2UsIFRleHQgfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lc3NhZ2VMaXN0KHsgbWVzc2FnZXMsIHNldE1lc3NhZ2VzTGlzdCB9KSB7XHJcbiAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGlkKSB7XHJcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IG1lc3NhZ2VzLmZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UuaWQgIT09IGlkKTtcclxuICAgIHNldE1lc3NhZ2VzTGlzdChuZXdNZXNzYWdlcylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHRhZz1cInVsXCJcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMTAwXCJdLFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIG1lc3NhZ2VzLm1hcChtZXNzYWdlID0+IChcclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGtleT17bWVzc2FnZS5pZH1cclxuICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcclxuICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRnZXJtYW5vLnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLmZyb219XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSl9XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgc3RcclxuICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICBsYWJlbD0nJnRpbWVzOydcclxuICAgICAgICAgICAgICBzaXplPSdzbSdcclxuICAgICAgICAgICAgICB2YXJpYW50PSd0ZXJ0aWFyeSdcclxuICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J2xpZ2h0J1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZShtZXNzYWdlLmlkKX1cclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzRweCcsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJzRweCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvQm94PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJJbWFnZSIsIlRleHQiLCJhcHBDb25maWciLCJNZXNzYWdlTGlzdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXNMaXN0IiwiaGFuZGxlUmVtb3ZlIiwiaWQiLCJuZXdNZXNzYWdlcyIsImZpbHRlciIsIm1lc3NhZ2UiLCJ0YWciLCJzdHlsZVNoZWV0Iiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJjb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJwb3NpdGlvbiIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJob3ZlciIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJzcmMiLCJmcm9tIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInRleHQiLCJ0eXBlIiwibGFiZWwiLCJzaXplIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsIm9uQ2xpY2siLCJ0b3AiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MessageList.jsx\n");

/***/ })

});