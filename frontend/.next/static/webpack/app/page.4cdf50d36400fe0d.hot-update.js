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

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            fetch(\"http://localhost:3001/test\").then({\n                \"Home.useEffect\": (res)=>{\n                    console.log(\"Response status:\", res.status); // 调试返回状态码\n                    if (!res.ok) {\n                        throw new Error(\"HTTP error! status: \".concat(res.status));\n                    }\n                    return res.json();\n                }\n            }[\"Home.useEffect\"]).then({\n                \"Home.useEffect\": (data)=>{\n                    console.log(\"Data fetched:\", data); // 调试返回的数据\n                    setMessage(data.message);\n                }\n            }[\"Home.useEffect\"]).catch({\n                \"Home.useEffect\": (err)=>console.error(\"Fetch error:\", err)\n            }[\"Home.useEffect\"]);\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mt-10\",\n                children: \"Vocab Project\"\n            }, void 0, false, {\n                fileName: \"/Users/alan/Desktop/Current Project/vocab_project/frontend/src/app/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg mt-5\",\n                children: message || \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/alan/Desktop/Current Project/vocab_project/frontend/src/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alan/Desktop/Current Project/vocab_project/frontend/src/app/page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ClLa+zvPL6vd0LAuHSvav3BaFBg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQTswQkFBQztZQUNSSyxNQUFNLDhCQUNIQyxJQUFJO2tDQUFDLENBQUNDO29CQUNMQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRixJQUFJRyxNQUFNLEdBQUcsVUFBVTtvQkFDdkQsSUFBSSxDQUFDSCxJQUFJSSxFQUFFLEVBQUU7d0JBQ1gsTUFBTSxJQUFJQyxNQUFNLHVCQUFrQyxPQUFYTCxJQUFJRyxNQUFNO29CQUNuRDtvQkFDQSxPQUFPSCxJQUFJTSxJQUFJO2dCQUNqQjtpQ0FDQ1AsSUFBSTtrQ0FBQyxDQUFDUTtvQkFDTE4sUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkssT0FBTyxVQUFVO29CQUM5Q1YsV0FBV1UsS0FBS1gsT0FBTztnQkFDekI7aUNBQ0NZLEtBQUs7a0NBQUMsQ0FBQ0MsTUFBUVIsUUFBUVMsS0FBSyxDQUFDLGdCQUFnQkQ7O1FBQ2xEO3lCQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUEyQjs7Ozs7OzBCQUN6Qyw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQWdCaEIsV0FBVzs7Ozs7Ozs7Ozs7O0FBRzlDO0dBekJ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGFuL0Rlc2t0b3AvQ3VycmVudCBQcm9qZWN0L3ZvY2FiX3Byb2plY3QvZnJvbnRlbmQvc3JjL2FwcC9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS90ZXN0XCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2Ugc3RhdHVzOlwiLCByZXMuc3RhdHVzKTsgLy8g6LCD6K+V6L+U5Zue54q25oCB56CBXG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZmV0Y2hlZDpcIiwgZGF0YSk7IC8vIOiwg+ivlei/lOWbnueahOaVsOaNrlxuICAgICAgICBzZXRNZXNzYWdlKGRhdGEubWVzc2FnZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJGZXRjaCBlcnJvcjpcIiwgZXJyKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbXQtMTBcIj5Wb2NhYiBQcm9qZWN0PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbXQtNVwiPnttZXNzYWdlIHx8IFwiTG9hZGluZy4uLlwifTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZldGNoIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVyciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});