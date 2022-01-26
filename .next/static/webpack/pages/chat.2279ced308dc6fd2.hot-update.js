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

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _src_components_MessageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/MessageList */ \"./src/components/MessageList.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(event) {\n        setMessage(event.target.value);\n    };\n    var handleKeyPress = function handleKeyPress(event, message) {\n        if (event.key === 'Enter') {\n            event.preventDefault();\n            sendMessage(message);\n        }\n    };\n    var sendMessage = function sendMessage(newMensagem) {\n        var message = {\n            id: messagesList.length + 1,\n            from: 'Matgermano',\n            text: newMensagem\n        };\n        setMessagesList([\n            message\n        ].concat(_toConsumableArray(messagesList)));\n        setMessage('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), message1 = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messagesList = ref1[0], setMessagesList = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n            backgroundImage: \"url(https://get.wallhere.com/photo/anime-One-Piece-1395055.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MessageList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            messages: messagesList,\n                            setMessagesList: setMessagesList\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: message1,\n                                    onChange: handleChange,\n                                    onKeyPress: function(event) {\n                                        return handleKeyPress(event, message1);\n                                    },\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        overflow: 'hidden',\n                                        width: '100%',\n                                        border: '0',\n                                        resize: 'none',\n                                        borderRadius: '5px',\n                                        padding: '6px 8px',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: '12px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"button\",\n                                    label: \"Enter\",\n                                    colorVariant: \"light\",\n                                    styleSheet: {\n                                        height: '100%'\n                                    },\n                                    onClick: function() {\n                                        return sendMessage(message1);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBRzs0QkFDRmlELEVBQUUsRUFBQyxDQUFNOzRCQUNUdkIsVUFBVSxFQUFFLENBQUM7Z0NBQ1hDLE9BQU8sRUFBRSxDQUFNO2dDQUNmQyxVQUFVLEVBQUUsQ0FBUTs0QkFDdEIsQ0FBQzs7NEdBRUExQiwyREFBUztvQ0FDUlcsS0FBSyxFQUFFRSxRQUFPO29DQUNkbUMsUUFBUSxFQUFFekMsWUFBWTtvQ0FDdEIwQyxVQUFVLEVBQUV6QyxRQUFRLENBQVJBLEtBQUs7d0NBQUlJLE1BQU0sQ0FBTkEsY0FBYyxDQUFDSixLQUFLLEVBQUVLLFFBQU87O29DQUNsRHFDLFdBQVcsRUFBQyxDQUE2QjtvQ0FDekNDLElBQUksRUFBQyxDQUFVO29DQUNmM0IsVUFBVSxFQUFFLENBQUM7d0NBQ1g0QixRQUFRLEVBQUUsQ0FBUTt3Q0FDbEJDLEtBQUssRUFBRSxDQUFNO3dDQUNiQyxNQUFNLEVBQUUsQ0FBRzt3Q0FDWEMsTUFBTSxFQUFFLENBQU07d0NBQ2RmLFlBQVksRUFBRSxDQUFLO3dDQUNuQkksT0FBTyxFQUFFLENBQVM7d0NBQ2xCaEIsZUFBZSxFQUFFekIsb0VBQW9DO3dDQUNyRHFELFdBQVcsRUFBRSxDQUFNO3dDQUNuQnBCLEtBQUssRUFBRWpDLG9FQUFvQztvQ0FDN0MsQ0FBQzs7Ozs7OzRHQUVGSix3REFBTTtvQ0FDTG9ELElBQUksRUFBQyxDQUFRO29DQUNiTSxLQUFLLEVBQUMsQ0FBTztvQ0FDYkMsWUFBWSxFQUFDLENBQU87b0NBQ3BCbEMsVUFBVSxFQUFFLENBQUM7d0NBQ1hpQixNQUFNLEVBQUUsQ0FBTTtvQ0FDaEIsQ0FBQztvQ0FDRGtCLE9BQU8sRUFBRSxRQUFRO3dDQUFGM0MsTUFBTSxDQUFOQSxXQUFXLENBQUNILFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRCxDQUFDO0dBMUd1QlAsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dEZpZWxkIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBNZXNzYWdlTGlzdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZXNzYWdlTGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0UGFnZSgpIHtcclxuICBjb25zdCBbIG1lc3NhZ2UsIHNldE1lc3NhZ2UgXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbIG1lc3NhZ2VzTGlzdCwgc2V0TWVzc2FnZXNMaXN0IF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCwgbWVzc2FnZSkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG5ld01lbnNhZ2VtKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICBpZDogbWVzc2FnZXNMaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIGZyb206ICdNYXRnZXJtYW5vJyxcclxuICAgICAgdGV4dDogbmV3TWVuc2FnZW1cclxuICAgIH1cclxuXHJcbiAgICBzZXRNZXNzYWdlc0xpc3QoWyBtZXNzYWdlLCAuLi5tZXNzYWdlc0xpc3QgXSlcclxuICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL2dldC53YWxsaGVyZS5jb20vcGhvdG8vYW5pbWUtT25lLVBpZWNlLTEzOTUwNTUuanBnKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxyXG4gICAgICAgICAgbWF4SGVpZ2h0OiAnOTV2aCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lc3NhZ2VzPXttZXNzYWdlc0xpc3R9IHNldE1lc3NhZ2VzTGlzdD17c2V0TWVzc2FnZXNMaXN0fSAvPlxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17ZXZlbnQgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQsIG1lc3NhZ2UpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICBsYWJlbD0nRW50ZXInXHJcbiAgICAgICAgICAgICAgY29sb3JWYXJpYW50PSdsaWdodCdcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7ICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZW5kTWVzc2FnZShtZXNzYWdlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0RmllbGQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiSGVhZGVyIiwiTWVzc2FnZUxpc3QiLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2V0TWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5UHJlc3MiLCJtZXNzYWdlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzZW5kTWVzc2FnZSIsIm5ld01lbnNhZ2VtIiwiaWQiLCJtZXNzYWdlc0xpc3QiLCJsZW5ndGgiLCJmcm9tIiwidGV4dCIsInNldE1lc3NhZ2VzTGlzdCIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJtZXNzYWdlcyIsImFzIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibGFiZWwiLCJjb2xvclZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});