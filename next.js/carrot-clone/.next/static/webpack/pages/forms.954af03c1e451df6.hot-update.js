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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Forms; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Forms() {\n    var ref;\n    _s();\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n        mode: \"onChange\"\n    }), register = ref1.register, handleSubmit = ref1.handleSubmit, errors1 = ref1.formState.errors;\n    var onValid = function(data) {};\n    var onInvalid = function(errors) {\n        console.log(errors);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit(onValid, onInvalid),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"username\", {\n                required: \"username is required\",\n                minLength: {\n                    value: 5,\n                    message: \"The username should be longer than 5 chars\"\n                }\n            }), {\n                type: \"text\",\n                placeholder: \"username\",\n                className: \"\".concat(Boolean)\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"email\", {\n                required: \"email is required\",\n                validate: {\n                    notGmail: function(value) {\n                        return !value.includes(\"@gmail.com\") || \"gmail is not allowed\";\n                    }\n                }\n            }), {\n                type: \"email\",\n                placeholder: \"Email\"\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            (ref = errors1.email) === null || ref === void 0 ? void 0 : ref.message,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({}, register(\"password\", {\n                required: \"password is required\"\n            }), {\n                type: \"password\",\n                placeholder: \"Password\"\n            }), void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ayaan/projects/TIL/next.js/carrot-clone/pages/forms.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_s(Forms, \"HLC1IFclXfL/K+q6lxeDS/Po7Wk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Forms;\nvar _c;\n$RefreshReg$(_c, \"Forms\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jtcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDc0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QyxRQUFRLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBcUMxQkMsR0FBWTs7SUFwQ2pCLEdBQUssQ0FJREYsSUFBd0MsR0FBeENBLHdEQUFPLENBQVksQ0FBQztRQUFDRyxJQUFJLEVBQUUsQ0FBVTtJQUFDLENBQUMsR0FIekNDLFFBQVEsR0FHTkosSUFBd0MsQ0FIMUNJLFFBQVEsRUFDUkMsWUFBWSxHQUVWTCxJQUF3QyxDQUYxQ0ssWUFBWSxFQUNDSCxPQUFNLEdBQ2pCRixJQUF3QyxDQUQxQ00sU0FBUyxDQUFJSixNQUFNO0lBRXJCLEdBQUssQ0FBQ0ssT0FBTyxHQUFHLFFBQVEsQ0FBUEMsSUFBZSxFQUFLLENBQUMsQ0FBQztJQUV2QyxHQUFLLENBQUNDLFNBQVMsR0FBRyxRQUFRLENBQVBQLE1BQW1CLEVBQUssQ0FBQztRQUMxQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNULE1BQU07SUFDcEIsQ0FBQztJQUVELE1BQU0sNkVBQ0hVLENBQUk7UUFBQ0MsUUFBUSxFQUFFUixZQUFZLENBQUNFLE9BQU8sRUFBRUUsU0FBUzs7d0ZBQzVDSyxDQUFLLDBCQUNBVixRQUFRLENBQUMsQ0FBVSxXQUFFLENBQUM7Z0JBQ3hCVyxRQUFRLEVBQUUsQ0FBc0I7Z0JBQ2hDQyxTQUFTLEVBQUUsQ0FBQztvQkFDVkMsS0FBSyxFQUFFLENBQUM7b0JBQ1JDLE9BQU8sRUFBRSxDQUE0QztnQkFDdkQsQ0FBQztZQUNILENBQUM7Z0JBQ0RDLElBQUksRUFBQyxDQUFNO2dCQUNYQyxXQUFXLEVBQUMsQ0FBVTtnQkFDdEJDLFNBQVMsRUFBRyxHQUFVLE9BQVJDLE9BQU87Ozs7Ozt3RkFFdEJSLENBQUssMEJBQ0FWLFFBQVEsQ0FBQyxDQUFPLFFBQUUsQ0FBQztnQkFDckJXLFFBQVEsRUFBRSxDQUFtQjtnQkFDN0JRLFFBQVEsRUFBRSxDQUFDO29CQUNUQyxRQUFRLEVBQUUsUUFBUSxDQUFQUCxLQUFLO3dCQUNkLE1BQU0sRUFBTEEsS0FBSyxDQUFDUSxRQUFRLENBQUMsQ0FBWSxnQkFBSyxDQUFzQjs7Z0JBQzNELENBQUM7WUFDSCxDQUFDO2dCQUNETixJQUFJLEVBQUMsQ0FBTztnQkFDWkMsV0FBVyxFQUFDLENBQU87Ozs7OzthQUVwQmxCLEdBQVksR0FBWkEsT0FBTSxDQUFDd0IsS0FBSyxjQUFaeEIsR0FBWSxLQUFaQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxJQUFJLENBQUpBLENBQXFCLEdBQXJCQSxHQUFZLENBQUVnQixPQUFPO3dGQUNyQkosQ0FBSywwQkFDQVYsUUFBUSxDQUFDLENBQVUsV0FBRSxDQUFDO2dCQUN4QlcsUUFBUSxFQUFFLENBQXNCO1lBQ2xDLENBQUM7Z0JBQ0RJLElBQUksRUFBQyxDQUFVO2dCQUNmQyxXQUFXLEVBQUMsQ0FBVTs7Ozs7O3dGQUV2Qk8sQ0FBTTswQkFBQyxDQUFjOzs7Ozs7Ozs7Ozs7QUFHNUIsQ0FBQztHQWhEdUIxQixLQUFLOztRQUt2QkQsb0RBQU87OztLQUxXQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm1zLnRzeD9lMmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWREZWZhdWx0RXJyb3JDb21wb25lbnRzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBGaWVsZEVycm9ycywgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuaW50ZXJmYWNlIExvZ2luRm9ybSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zKCkge1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08TG9naW5Gb3JtPih7IG1vZGU6IFwib25DaGFuZ2VcIiB9KTtcbiAgY29uc3Qgb25WYWxpZCA9IChkYXRhOiBMb2dpbkZvcm0pID0+IHt9O1xuXG4gIGNvbnN0IG9uSW52YWxpZCA9IChlcnJvcnM6IEZpZWxkRXJyb3JzKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXJyb3JzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25WYWxpZCwgb25JbnZhbGlkKX0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwge1xuICAgICAgICAgIHJlcXVpcmVkOiBcInVzZXJuYW1lIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICB2YWx1ZTogNSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIHVzZXJuYW1lIHNob3VsZCBiZSBsb25nZXIgdGhhbiA1IGNoYXJzXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Qm9vbGVhbn1gfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7XG4gICAgICAgICAgcmVxdWlyZWQ6IFwiZW1haWwgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90R21haWw6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgIXZhbHVlLmluY2x1ZGVzKFwiQGdtYWlsLmNvbVwiKSB8fCBcImdtYWlsIGlzIG5vdCBhbGxvd2VkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgLz5cbiAgICAgIHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIiwge1xuICAgICAgICAgIHJlcXVpcmVkOiBcInBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsXG4gICAgICAgIH0pfVxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgIC8+XG4gICAgICA8YnV0dG9uPkNyZWF0ZSBBY2NvdW50PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJGb3JtcyIsImVycm9ycyIsIm1vZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsIm9uVmFsaWQiLCJkYXRhIiwib25JbnZhbGlkIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJCb29sZWFuIiwidmFsaWRhdGUiLCJub3RHbWFpbCIsImluY2x1ZGVzIiwiZW1haWwiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forms.tsx\n");

/***/ })

});