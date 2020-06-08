webpackHotUpdate("static\\development\\pages\\admin\\crud\\blog.js",{

/***/ "./components/auth/Admin.js":
/*!**********************************!*\
  !*** ./components/auth/Admin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
var _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Admin = function Admin(_ref) {
  _s();

  var children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["isAuth"])()) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signin");
    } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["isAuth"])().role !== 1) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

_s(Admin, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Admin;
/* harmony default export */ __webpack_exports__["default"] = (Admin);

var _c;

$RefreshReg$(_c, "Admin");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQWRtaW4uanMiXSwibmFtZXMiOlsiQWRtaW4iLCJjaGlsZHJlbiIsInVzZUVmZmVjdCIsImlzQXV0aCIsIlJvdXRlciIsInB1c2giLCJyb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxDQUFDQyw0REFBTSxFQUFYLEVBQWU7QUFDWEMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDSCxLQUZELE1BRU8sSUFBR0YsNERBQU0sR0FBR0csSUFBVCxLQUFrQixDQUFyQixFQUF3QjtBQUMzQkYsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxTQUNJLG1FQUNDSixRQURELENBREo7QUFLSCxDQWJEOztHQUFNRCxLOztLQUFBQSxLO0FBY1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhZG1pblxcY3J1ZFxcYmxvZy5qcy5hYmU5NjA4OWM0NDAxOTU4MGJkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gXCIuLi8uLi9hY3Rpb25zL2F1dGhcIjtcclxuXHJcbmNvbnN0IEFkbWluID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzQXV0aCgpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL3NpZ25pblwiKTtcclxuICAgICAgICB9IGVsc2UgaWYoaXNBdXRoKCkucm9sZSAhPT0gMSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=