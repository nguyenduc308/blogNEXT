webpackHotUpdate("static/development/pages/admin/crud/blog.js",{

/***/ "./components/crud/BlogCreate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogCreate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__);
var _this = undefined,
    _jsxFileName = "/Users/duclux/Desktop/NEXT SEO/client/components/crud/BlogCreate.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});

var BlogCreate = function BlogCreate(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false
  }),
      values = _useState2[0],
      setValues = _useState2[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton;

  var createBlogForm = function createBlogForm() {
    var handleSubmit = function handleSubmit(e) {
      e.preventDefault();
    };

    var handleChange = function handleChange(name) {
      return function (e) {
        console.log(e.target.value);
      };
    };

    var handleBody = function handleBody(e) {
      console.log(e);
    };

    return __jsx("form", {
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("label", {
      htmlFor: "title",
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, "Post title"), __jsx("input", {
      type: "text",
      name: "title",
      value: title,
      className: "form-control",
      onChange: handleChange('title'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx(ReactQuill, {
      value: body,
      placeholder: "Type songthing",
      onChange: handleBody,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "Publish")));
  };

  return __jsx("div", {
    className: "contaner-fluit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, createBlogForm);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(BlogCreate));

/***/ })

})
//# sourceMappingURL=blog.js.d56db443dad8fcc54e2c.hot-update.js.map