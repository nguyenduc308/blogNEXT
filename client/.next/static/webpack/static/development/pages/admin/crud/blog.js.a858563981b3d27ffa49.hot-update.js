webpackHotUpdate("static/development/pages/admin/crud/blog.js",{

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "./node_modules/react-bootstrap/esm/NavDropdown.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_12__);
var _this = undefined,
    _jsxFileName = "/Users/duclux/Desktop/NEXT SEO/client/components/header/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeStart = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeComplete = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_8___default.a.onRouteChangeError = function (url) {
  return nprogress__WEBPACK_IMPORTED_MODULE_11___default.a.done();
};

var Header = function Header() {
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bg: "light",
    expand: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, _config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"])), __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    inline: true,
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "outline-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Search")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Toggle, {
    "aria-controls": "basic-navbar-nav justify-content-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"].Collapse, {
    id: "basic-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, Object(_actions_auth__WEBPACK_IMPORTED_MODULE_9__["isAuth"])() && __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Hi, ".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_9__["isAuth"])().name),
    id: "basic-nav-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item",
    role: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "Dashboard")), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__["default"].Divider, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }), __jsx(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_3__["default"].Item, {
    href: "#logout",
    onClick: function onClick() {
      Object(_actions_auth__WEBPACK_IMPORTED_MODULE_9__["signout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/');
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Logout")), !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_9__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, "\u0110\u0103ng k\xFD")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/signin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "nav-link",
    role: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, "\u0110\u0103ng nh\u1EADp"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=blog.js.a858563981b3d27ffa49.hot-update.js.map