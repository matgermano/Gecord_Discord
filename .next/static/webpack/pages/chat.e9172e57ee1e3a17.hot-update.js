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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction ChatPage() {\n    var _useState = _slicedToArray((react__WEBPACK_IMPORTED_MODULE_2___default().useState), 2), mensagem = _useState[0], setMensagem = _useState[1];\n    // Sua lógica vai aqui\n    // ./Sua lógica vai aqui\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n            backgroundImage: \"url(https://get.wallhere.com/photo/anime-One-Piece-1395055.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        as: \"form\",\n                        styleSheet: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                            value: mensagem,\n                            onChange: function(event) {\n                                var valor = event.target.value;\n                                setMensagem(valor);\n                            },\n                            placeholder: \"Insira sua mensagem aqui...\",\n                            type: \"textarea\",\n                            styleSheet: {\n                                width: '100%',\n                                border: '0',\n                                resize: 'none',\n                                borderRadius: '5px',\n                                padding: '6px 8px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                marginRight: '12px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this));\n};\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\ALURA\\\\React.js\\\\Imers\\xe3o\\\\gecord\\\\pages\\\\chat.js\",\n            lineNumber: 87,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n} // function MessageList(props) {\n //     console.log('MessageList', props);\n //     return (\n //         <Box\n //             tag=\"ul\"\n //             styleSheet={{\n //                 overflow: 'scroll',\n //                 display: 'flex',\n //                 flexDirection: 'column-reverse',\n //                 flex: 1,\n //                 color: appConfig.theme.colors.neutrals[\"000\"],\n //                 marginBottom: '16px',\n //             }}\n //         >\n //             <Text\n //                 key={mensagem.id}\n //                 tag=\"li\"\n //                 styleSheet={{\n //                     borderRadius: '5px',\n //                     padding: '6px',\n //                     marginBottom: '12px',\n //                     hover: {\n //                         backgroundColor: appConfig.theme.colors.neutrals[700],\n //                     }\n //                 }}\n //             >\n //                 <Box\n //                     styleSheet={{\n //                         marginBottom: '8px',\n //                     }}\n //                 >\n //                     <Image\n //                         styleSheet={{\n //                             width: '20px',\n //                             height: '20px',\n //                             borderRadius: '50%',\n //                             display: 'inline-block',\n //                             marginRight: '8px',\n //                         }}\n //                         src={`https://github.com/vanessametonini.png`}\n //                     />\n //                     <Text tag=\"strong\">\n //                         {mensagem.de}\n //                     </Text>\n //                     <Text\n //                         styleSheet={{\n //                             fontSize: '10px',\n //                             marginLeft: '8px',\n //                             color: appConfig.theme.colors.neutrals[300],\n //                         }}\n //                         tag=\"span\"\n //                     >\n //                         {(new Date().toLocaleDateString())}\n //                     </Text>\n //                 </Box>\n //                 {mensagem.texto}\n //             </Text>\n //         </Box>\n //     )\n // }\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUM7QUFDbkMsQ0FBc0I7QUFDdEIsQ0FBaUI7QUFDakIsQ0FBUTtBQUNSLENBQUk7TUE5RUtsQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IFJlYWN0LCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBbbWVuc2FnZW0sIHNldE1lbnNhZ2VtXSA9IFJlYWN0LnVzZVN0YXRlO1xyXG5cclxuICAgIC8vIFN1YSBsw7NnaWNhIHZhaSBhcXVpXHJcblxyXG4gICAgLy8gLi9TdWEgbMOzZ2ljYSB2YWkgYXF1aVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1syMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vZ2V0LndhbGxoZXJlLmNvbS9waG90by9hbmltZS1PbmUtUGllY2UtMTM5NTA1NS5qcGcpYCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMzJweCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc4MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17W119IC8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7KGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzEycHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PSdoZWFkaW5nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTG9nb3V0J1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ01lc3NhZ2VMaXN0JywgcHJvcHMpO1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8Qm94XHJcbi8vICAgICAgICAgICAgIHRhZz1cInVsXCJcclxuLy8gICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4vLyAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4vLyAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcclxuLy8gICAgICAgICAgICAgICAgIGZsZXg6IDEsXHJcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4vLyAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgID5cclxuXHJcbi8vICAgICAgICAgICAgIDxUZXh0XHJcbi8vICAgICAgICAgICAgICAgICBrZXk9e21lbnNhZ2VtLmlkfVxyXG4vLyAgICAgICAgICAgICAgICAgdGFnPVwibGlcIlxyXG4vLyAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgPEJveFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICB9fVxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS92YW5lc3NhbWV0b25pbmkucG5nYH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7bWVuc2FnZW0uZGV9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbi8vICAgICAgICAgICAgICAgICA8L0JveD5cclxuLy8gICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cclxuLy8gICAgICAgICAgICAgPC9UZXh0PlxyXG4vLyAgICAgICAgIDwvQm94PlxyXG4vLyAgICAgKVxyXG4vLyB9Il0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwiYXBwQ29uZmlnIiwiQ2hhdFBhZ2UiLCJ1c2VTdGF0ZSIsIm1lbnNhZ2VtIiwic2V0TWVuc2FnZW0iLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});