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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _src_components_MessageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/MessageList */ \"./src/components/MessageList.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(event) {\n        setMessage(event.target.value);\n    };\n    var handleKeyPress = function handleKeyPress(event, message) {\n        if (event.key === 'Enter') {\n            event.preventDefault();\n            sendMessage(message);\n        }\n    };\n    var sendMessage = function sendMessage(newMensagem) {\n        var message = {\n            id: messagesList.length + 1,\n            from: 'Matgermano',\n            text: newMensagem\n        };\n        setMessagesList([\n            message\n        ].concat(_toConsumableArray(messagesList)));\n        setMessage('');\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), message1 = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messagesList = ref1[0], setMessagesList = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n            backgroundImage: \"url(https://get.wallhere.com/photo/anime-One-Piece-1395055.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MessageList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            messages: messagesList,\n                            setMessagesList: setMessagesList\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    value: message1,\n                                    onChange: handleChange,\n                                    onKeyPress: function(event) {\n                                        return handleKeyPress(event, message1);\n                                    },\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    type: \"textarea\",\n                                    styleSheet: {\n                                        width: '100%',\n                                        border: '0',\n                                        resize: 'none',\n                                        borderRadius: '5px',\n                                        padding: '6px 8px',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: '12px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"button\",\n                                    label: \"Send\",\n                                    styleSheet: {\n                                        height: '950%'\n                                    },\n                                    onClick: function() {\n                                        return sendMessage(message1);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = ChatPage;\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBRzs0QkFDRmlELEVBQUUsRUFBQyxDQUFNOzRCQUNUdkIsVUFBVSxFQUFFLENBQUM7Z0NBQ1hDLE9BQU8sRUFBRSxDQUFNO2dDQUNmQyxVQUFVLEVBQUUsQ0FBUTs0QkFDdEIsQ0FBQzs7NEdBRUExQiwyREFBUztvQ0FDUlcsS0FBSyxFQUFFRSxRQUFPO29DQUNkbUMsUUFBUSxFQUFFekMsWUFBWTtvQ0FDdEIwQyxVQUFVLEVBQUV6QyxRQUFRLENBQVJBLEtBQUs7d0NBQUlJLE1BQU0sQ0FBTkEsY0FBYyxDQUFDSixLQUFLLEVBQUVLLFFBQU87O29DQUNsRHFDLFdBQVcsRUFBQyxDQUE2QjtvQ0FDekNDLElBQUksRUFBQyxDQUFVO29DQUNmM0IsVUFBVSxFQUFFLENBQUM7d0NBQ1g0QixLQUFLLEVBQUUsQ0FBTTt3Q0FDYkMsTUFBTSxFQUFFLENBQUc7d0NBQ1hDLE1BQU0sRUFBRSxDQUFNO3dDQUNkZCxZQUFZLEVBQUUsQ0FBSzt3Q0FDbkJJLE9BQU8sRUFBRSxDQUFTO3dDQUNsQmhCLGVBQWUsRUFBRXpCLG9FQUFvQzt3Q0FDckRvRCxXQUFXLEVBQUUsQ0FBTTt3Q0FDbkJuQixLQUFLLEVBQUVqQyxvRUFBb0M7b0NBQzdDLENBQUM7Ozs7Ozs0R0FFRkosd0RBQU07b0NBQ0xvRCxJQUFJLEVBQUMsQ0FBUTtvQ0FDYkssS0FBSyxFQUFDLENBQU07b0NBQ1poQyxVQUFVLEVBQUUsQ0FBQzt3Q0FDWGlCLE1BQU0sRUFBRSxDQUFNO29DQUNoQixDQUFDO29DQUNEZ0IsT0FBTyxFQUFFLFFBQVE7d0NBQUZ6QyxNQUFNLENBQU5BLFdBQVcsQ0FBQ0gsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2hELENBQUM7R0F2R3VCUCxRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qcz80Y2M5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IE1lc3NhZ2VMaXN0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01lc3NhZ2VMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gIGNvbnN0IFsgbWVzc2FnZSwgc2V0TWVzc2FnZSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgbWVzc2FnZXNMaXN0LCBzZXRNZXNzYWdlc0xpc3QgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50LCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UobmV3TWVuc2FnZW0pIHtcclxuICAgIGNvbnN0IG1lc3NhZ2UgPSB7XHJcbiAgICAgIGlkOiBtZXNzYWdlc0xpc3QubGVuZ3RoICsgMSxcclxuICAgICAgZnJvbTogJ01hdGdlcm1hbm8nLFxyXG4gICAgICB0ZXh0OiBuZXdNZW5zYWdlbVxyXG4gICAgfVxyXG5cclxuICAgIHNldE1lc3NhZ2VzTGlzdChbIG1lc3NhZ2UsIC4uLm1lc3NhZ2VzTGlzdCBdKVxyXG4gICAgc2V0TWVzc2FnZSgnJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vZ2V0LndhbGxoZXJlLmNvbS9waG90by9hbmltZS1PbmUtUGllY2UtMTM5NTA1NS5qcGcpYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzMycHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17bWVzc2FnZXNMaXN0fSBzZXRNZXNzYWdlc0xpc3Q9e3NldE1lc3NhZ2VzTGlzdH0gLz5cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2V2ZW50ID0+IGhhbmRsZUtleVByZXNzKGV2ZW50LCBtZXNzYWdlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCcsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDhweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgbGFiZWw9J1NlbmQnXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnOTUwJScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZW5kTWVzc2FnZShtZXNzYWdlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0RmllbGQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiSGVhZGVyIiwiTWVzc2FnZUxpc3QiLCJDaGF0UGFnZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic2V0TWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlS2V5UHJlc3MiLCJtZXNzYWdlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzZW5kTWVzc2FnZSIsIm5ld01lbnNhZ2VtIiwiaWQiLCJtZXNzYWdlc0xpc3QiLCJsZW5ndGgiLCJmcm9tIiwidGV4dCIsInNldE1lc3NhZ2VzTGlzdCIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJtZXNzYWdlcyIsImFzIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwid2lkdGgiLCJib3JkZXIiLCJyZXNpemUiLCJtYXJnaW5SaWdodCIsImxhYmVsIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});