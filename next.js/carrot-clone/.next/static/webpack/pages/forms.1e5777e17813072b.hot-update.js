"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forms",{

/***/ "./pages/forms.tsx":
/*!*************************!*\
  !*** ./pages/forms.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Forms() {\n    var ref;\n    _s();\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    }), register = ref1.register, handleSubmit = ref1.handleSubmit, errors1 = ref1.formState.errors;\n    var onValid = function(data) {};\n    var onInvalid = function(errors) {\n        console.log(errors);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"username\", {\n                required: \"username is required\",\n                minLength: {\n                    value: 5,\n                    message: \"The username should be longer than 5 chars\"\n                }\n            }), {\n                type: \"text\",\n                placeholder: \"username\"\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"email\", {\n                required: \"email is required\",\n                validate: {\n                    notGmail: function(value) {\n                        return !value.includes(\"@gmail.com\") || \"gmail is not allowed\";\n                    }\n                }\n            }), {\n                type: \"email\",\n                placeholder: \"Email\"\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            (ref = errors1.email) === null || ref === void 0 ? void 0 : ref.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"password\", {\n                required: \"password is required\"\n            }), {\n                type: \"password\",\n                placeholder: \"Password\"\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_s(Forms, \"HLC1IFclXfL/K+q6lxeDS/Po7Wk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBb0MxQkMsR0FBWTs7SUFuQ2pCLEdBQUssQ0FJREYsSUFBd0MsR0FBeENBLHdEQUFPLENBQVksQ0FBQztRQUFDRyxJQUFJLEVBQUUsQ0FBVTtJQUFDLENBQUMsR0FIekNDLFFBQVEsR0FHTkosSUFBd0MsQ0FIMUNJLFFBQVEsRUFDUkMsWUFBWSxHQUVWTCxJQUF3QyxDQUYxQ0ssWUFBWSxFQUNDSCxPQUFNLEdBQ2pCRixJQUF3QyxDQUQxQ00sU0FBUyxDQUFJSixNQUFNO0lBRXJCLEdBQUssQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsQ0FBUEMsSUFBZSxFQUFLLENBQUMsQ0FBQztJQUV2QyxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBQLE1BQW1CLEVBQUssQ0FBQztRQUMxQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULE1BQU07SUFDcEIsQ0FBQztJQUVELE1BQU0sNkVBQ0hVLENBQUk7UUFBQ0MsUUFBUSxFQUFFUixZQUFZLENBQUNFLE9BQU8sRUFBRUUsU0FBUzs7d0ZBQzVDSyxDQUFLLDBCQUNBVixRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7Z0JBQ3hCVyxRQUFRLEVBQUUsQ0FBc0I7Z0JBQ2hDQyxTQUFTLEVBQUUsQ0FBQztvQkFDVkMsS0FBSyxFQUFFLENBQUM7b0JBQ1JDLE9BQU8sRUFBRSxDQUE0QztnQkFDdkQsQ0FBQztZQUNILENBQUM7Z0JBQ0RDLElBQUksRUFBQyxDQUFNO2dCQUNYQyxXQUFXLEVBQUMsQ0FBVTs7Ozs7O3dGQUV2Qk4sQ0FBSywwQkFDQVYsUUFBUSxDQUFDLENBQU8sUUFBRSxDQUFDO2dCQUNyQlcsUUFBUSxFQUFFLENBQW1CO2dCQUM3Qk0sUUFBUSxFQUFFLENBQUM7b0JBQ1RDLFFBQVEsRUFBRSxRQUFRLENBQVBMLEtBQUs7d0JBQ2QsTUFBTSxFQUFMQSxLQUFLLENBQUNNLFFBQVEsQ0FBQyxDQUFZLGdCQUFLLENBQXNCOztnQkFDM0QsQ0FBQztZQUNILENBQUM7Z0JBQ0RKLElBQUksRUFBQyxDQUFPO2dCQUNaQyxXQUFXLEVBQUMsQ0FBTzs7Ozs7O2FBRXBCbEIsR0FBWSxHQUFaQSxPQUFNLENBQUNzQixLQUFLLGNBQVp0QixHQUFZLEtBQVpBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLEdBQVksQ0FBRWdCLE9BQU87d0ZBQ3JCSixDQUFLLDBCQUNBVixRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7Z0JBQ3hCVyxRQUFRLEVBQUUsQ0FBc0I7WUFDbEMsQ0FBQztnQkFDREksSUFBSSxFQUFDLENBQVU7Z0JBQ2ZDLFdBQVcsRUFBQyxDQUFVOzs7Ozs7d0ZBRXZCSyxDQUFNOzBCQUFDLENBQWM7Ozs7Ozs7Ozs7OztBQUc1QixDQUFDO0dBL0N1QnhCLEtBQUs7O1FBS3ZCRCxvREFBTzs7O0tBTFdDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybXMudHN4P2UyYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZERlZmF1bHRFcnJvckNvbXBvbmVudHMgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9sb2FkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZpZWxkRXJyb3JzLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuXG5pbnRlcmZhY2UgTG9naW5Gb3JtIHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybXMoKSB7XG4gIGNvbnN0IHtcbiAgICByZWdpc3RlcixcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybTxMb2dpbkZvcm0+KHsgbW9kZTogXCJvbkNoYW5nZVwiIH0pO1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IExvZ2luRm9ybSkgPT4ge307XG5cbiAgY29uc3Qgb25JbnZhbGlkID0gKGVycm9yczogRmllbGRFcnJvcnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkLCBvbkludmFsaWQpfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ1c2VybmFtZVwiLCB7XG4gICAgICAgICAgcmVxdWlyZWQ6IFwidXNlcm5hbWUgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICAgIHZhbHVlOiA1LFxuICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgdXNlcm5hbWUgc2hvdWxkIGJlIGxvbmdlciB0aGFuIDUgY2hhcnNcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KX1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge1xuICAgICAgICAgIHJlcXVpcmVkOiBcImVtYWlsIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdEdtYWlsOiAodmFsdWUpID0+XG4gICAgICAgICAgICAgICF2YWx1ZS5pbmNsdWRlcyhcIkBnbWFpbC5jb21cIikgfHwgXCJnbWFpbCBpcyBub3QgYWxsb3dlZFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pfVxuICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgIC8+XG4gICAgICB7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfVxuICAgICAgPGlucHV0XG4gICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHtcbiAgICAgICAgICByZXF1aXJlZDogXCJwYXNzd29yZCBpcyByZXF1aXJlZFwiLFxuICAgICAgICB9KX1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvbj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiRm9ybXMiLCJlcnJvcnMiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJvblZhbGlkIiwiZGF0YSIsIm9uSW52YWxpZCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwidmFsdWUiLCJtZXNzYWdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsaWRhdGUiLCJub3RHbWFpbCIsImluY2x1ZGVzIiwiZW1haWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forms.tsx\n");

/***/ })

});