"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/excuse/ExcuseGenerator.tsx":
/*!***************************************************!*\
  !*** ./src/components/excuse/ExcuseGenerator.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExcuseGenerator: () => (/* binding */ ExcuseGenerator)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _store_excuse_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/excuse-store */ \"(app-pages-browser)/./src/store/excuse-store.ts\");\n/* harmony import */ var _ExcuseHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExcuseHistory */ \"(app-pages-browser)/./src/components/excuse/ExcuseHistory.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ ExcuseGenerator auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ExcuseGenerator = ()=>{\n    _s();\n    const { currentExcuse, currentCategory, currentBelievabilityScore, generateExcuse, shareExcuse } = (0,_store_excuse_store__WEBPACK_IMPORTED_MODULE_1__.useExcuseStore)();\n    const [showHistory, setShowHistory] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleGenerate = ()=>{\n        generateExcuse();\n    };\n    const handleShare = async ()=>{\n        await shareExcuse();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-2xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    opacity: 0,\n                    y: 20\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3\n                },\n                className: \"bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-lg p-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleGenerate,\n                            children: \"Generate Excuse\"\n                        }, void 0, false, {\n                            fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        currentExcuse && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                            initial: {\n                                opacity: 0,\n                                y: 10\n                            },\n                            animate: {\n                                opacity: 1,\n                                y: 0\n                            },\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-muted/50 backdrop-blur-sm rounded-lg p-6 border border-border\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-xl text-foreground font-medium leading-relaxed\",\n                                            children: currentExcuse\n                                        }, void 0, false, {\n                                            fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between items-center text-sm text-muted-foreground\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"px-3 py-1 bg-background/50 rounded-full\",\n                                                    children: currentCategory\n                                                }, void 0, false, {\n                                                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"px-3 py-1 bg-background/50 rounded-full\",\n                                                    children: [\n                                                        \"Believability: \",\n                                                        (currentBelievabilityScore * 100).toFixed(0),\n                                                        \"%\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleShare,\n                                    className: \"w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md\",\n                                    children: \"Share Excuse\"\n                                }, void 0, false, {\n                                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8 mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setShowHistory(!showHistory),\n                    className: \"bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] font-medium backdrop-blur-sm border border-border shadow-md\",\n                    children: showHistory ? 'Hide History' : 'Show History'\n                }, void 0, false, {\n                    fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            showHistory && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ExcuseHistory__WEBPACK_IMPORTED_MODULE_2__.ExcuseHistory, {}, void 0, false, {\n                fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n                lineNumber: 74,\n                columnNumber: 23\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/codespaces-blank/src/components/excuse/ExcuseGenerator.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ExcuseGenerator, \"Lb2lT9BCGKDSEw4QTDhmlbZwdZQ=\", false, function() {\n    return [\n        _store_excuse_store__WEBPACK_IMPORTED_MODULE_1__.useExcuseStore\n    ];\n});\n_c = ExcuseGenerator;\nvar _c;\n$RefreshReg$(_c, \"ExcuseGenerator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2V4Y3VzZS9FeGN1c2VHZW5lcmF0b3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1QztBQUNtQjtBQUNWO0FBQ2Y7QUFFMUIsTUFBTUksa0JBQWtCOztJQUM3QixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsZUFBZSxFQUFFQyx5QkFBeUIsRUFBRUMsY0FBYyxFQUFFQyxXQUFXLEVBQUUsR0FBR1IsbUVBQWNBO0lBQ2pILE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNUyxpQkFBaUI7UUFDckJKO0lBQ0Y7SUFFQSxNQUFNSyxjQUFjO1FBQ2xCLE1BQU1KO0lBQ1I7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNmLGlEQUFNQSxDQUFDYyxHQUFHO2dCQUNURSxTQUFTO29CQUFFQyxTQUFTO29CQUFHQyxHQUFHO2dCQUFHO2dCQUM3QkMsU0FBUztvQkFBRUYsU0FBUztvQkFBR0MsR0FBRztnQkFBRTtnQkFDNUJFLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUk7Z0JBQzVCTixXQUFVOzBCQUVWLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNPOzRCQUNDQyxTQUFTWDtzQ0FDVjs7Ozs7O3dCQUlBUCwrQkFDQyw4REFBQ0wsaURBQU1BLENBQUNjLEdBQUc7NEJBQ1RFLFNBQVM7Z0NBQUVDLFNBQVM7Z0NBQUdDLEdBQUc7NEJBQUc7NEJBQzdCQyxTQUFTO2dDQUFFRixTQUFTO2dDQUFHQyxHQUFHOzRCQUFFOzRCQUM1QkgsV0FBVTs7OENBRVYsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1M7NENBQUVULFdBQVU7c0RBQ1ZWOzs7Ozs7c0RBRUgsOERBQUNTOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1U7b0RBQUtWLFdBQVU7OERBQ2JUOzs7Ozs7OERBRUgsOERBQUNtQjtvREFBS1YsV0FBVTs7d0RBQTBDO3dEQUN2Q1IsQ0FBQUEsNEJBQTRCLEdBQUUsRUFBR21CLE9BQU8sQ0FBQzt3REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJbkUsOERBQUNKO29DQUNDQyxTQUFTVjtvQ0FDVEUsV0FBVTs4Q0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUVQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDTztvQkFDQ0MsU0FBUyxJQUFNWixlQUFlLENBQUNEO29CQUMvQkssV0FBVTs4QkFFVEwsY0FBYyxpQkFBaUI7Ozs7Ozs7Ozs7O1lBSW5DQSw2QkFBZSw4REFBQ1IseURBQWFBOzs7Ozs7Ozs7OztBQUdwQyxFQUFFO0dBckVXRTs7UUFDd0ZILCtEQUFjQTs7O0tBRHRHRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9leGN1c2UvRXhjdXNlR2VuZXJhdG9yLnRzeD84YWQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VFeGN1c2VTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlL2V4Y3VzZS1zdG9yZSc7XG5pbXBvcnQgeyBFeGN1c2VIaXN0b3J5IH0gZnJvbSAnLi9FeGN1c2VIaXN0b3J5JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRXhjdXNlR2VuZXJhdG9yID0gKCkgPT4ge1xuICBjb25zdCB7IGN1cnJlbnRFeGN1c2UsIGN1cnJlbnRDYXRlZ29yeSwgY3VycmVudEJlbGlldmFiaWxpdHlTY29yZSwgZ2VuZXJhdGVFeGN1c2UsIHNoYXJlRXhjdXNlIH0gPSB1c2VFeGN1c2VTdG9yZSgpO1xuICBjb25zdCBbc2hvd0hpc3RvcnksIHNldFNob3dIaXN0b3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9ICgpID0+IHtcbiAgICBnZW5lcmF0ZUV4Y3VzZSgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNoYXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNoYXJlRXhjdXNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctY2FyZC81MCBiYWNrZHJvcC1ibHVyLXNtIGJvcmRlciBib3JkZXItYm9yZGVyIHJvdW5kZWQteGwgc2hhZG93LWxnIHAtNlwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR2VuZXJhdGUgRXhjdXNlXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7Y3VycmVudEV4Y3VzZSAmJiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGFjZS15LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW11dGVkLzUwIGJhY2tkcm9wLWJsdXItc20gcm91bmRlZC1sZyBwLTYgYm9yZGVyIGJvcmRlci1ib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZm9yZWdyb3VuZCBmb250LW1lZGl1bSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50RXhjdXNlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweC0zIHB5LTEgYmctYmFja2dyb3VuZC81MCByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRDYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy1iYWNrZ3JvdW5kLzUwIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICBCZWxpZXZhYmlsaXR5OiB7KGN1cnJlbnRCZWxpZXZhYmlsaXR5U2NvcmUgKiAxMDApLnRvRml4ZWQoMCl9JVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNoYXJlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1zZWNvbmRhcnkgaG92ZXI6Ymctc2Vjb25kYXJ5LzgwIHRleHQtc2Vjb25kYXJ5LWZvcmVncm91bmQgZm9udC1zZW1pYm9sZCBweS0zIHB4LTQgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtWzAuOThdIHNoYWRvdy1tZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaGFyZSBFeGN1c2VcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04IG1iLTZcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dIaXN0b3J5KCFzaG93SGlzdG9yeSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctbXV0ZWQvNTAgaG92ZXI6YmctbXV0ZWQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOnRleHQtZm9yZWdyb3VuZCBweC02IHB5LTIgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLVsxLjAyXSBhY3RpdmU6c2NhbGUtWzAuOThdIGZvbnQtbWVkaXVtIGJhY2tkcm9wLWJsdXItc20gYm9yZGVyIGJvcmRlci1ib3JkZXIgc2hhZG93LW1kXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93SGlzdG9yeSA/ICdIaWRlIEhpc3RvcnknIDogJ1Nob3cgSGlzdG9yeSd9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzaG93SGlzdG9yeSAmJiA8RXhjdXNlSGlzdG9yeSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlRXhjdXNlU3RvcmUiLCJFeGN1c2VIaXN0b3J5IiwidXNlU3RhdGUiLCJFeGN1c2VHZW5lcmF0b3IiLCJjdXJyZW50RXhjdXNlIiwiY3VycmVudENhdGVnb3J5IiwiY3VycmVudEJlbGlldmFiaWxpdHlTY29yZSIsImdlbmVyYXRlRXhjdXNlIiwic2hhcmVFeGN1c2UiLCJzaG93SGlzdG9yeSIsInNldFNob3dIaXN0b3J5IiwiaGFuZGxlR2VuZXJhdGUiLCJoYW5kbGVTaGFyZSIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInNwYW4iLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/excuse/ExcuseGenerator.tsx\n"));

/***/ })

});