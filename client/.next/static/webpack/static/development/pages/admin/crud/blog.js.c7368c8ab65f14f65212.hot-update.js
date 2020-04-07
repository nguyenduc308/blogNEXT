webpackHotUpdate("static/development/pages/admin/crud/blog.js",{

/***/ "./components/crud/BlogCreate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogCreate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);



var _this = undefined,
    _jsxFileName = "/Users/duclux/Desktop/NEXT SEO/client/components/crud/BlogCreate.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import Router from 'next/router'
// import dynamic from 'next/dynamic'
// import { withRouter } from 'next/router'
// import { getCookie, isAuth } from '../../actions/auth'
// import { getCategories } from '../../actions/category'
// import { getTags } from '../../actions/tag'
// import { create } from '../../actions/blog'
// import '../../node_modules/react-quill/dist/quill.snow.css'
// const ReactQuill = dynamic(()=> import('react-quill'), {ssr: false});
// const BlogCreate = ({router}) => {
//     const [categories, setCategories] = useState([])
//     const [tags, setTags] = useState([])
//     const [checked, setChecked] = useState([])
//     const [checkedTag, setCheckedTag] = useState([])
//     const [body, setBody] = useState('')
//     const [values, setValues] = useState({
//         error: '',
//         sizeError: '',
//         success: '',
//         formData: '',
//         title: '',
//         hidePublishButton: false
//     })
//     const token = getCookie('token')
//     const initCategories = () => {
//         getCategories()
//             .then(data => setCategories(data))
//             .catch(err => setValues({...values, error: err}))
//     }
//     const initTags = () => {
//         getTags()
//             .then(data => setTags(data))
//             .catch(err => setValues({...values, error: err}))
//     }
//     const { error, sizeError, success, formData, title, hidePublishButton } = values;
//     const getBlogLocalStorage = () => {
//         if(typeof window !== 'undefined') {
//             if(localStorage && localStorage.getItem('blog')) {
//                 setBody(JSON.parse(localStorage.getItem('blog')))
//             } else {
//                 return false;
//             }
//         }
//     }
//     useEffect(() => {
//         setValues({
//             ...values,
//             formData: new FormData(),
//         })
//         getBlogLocalStorage()
//         initTags()
//         initCategories()
//     }, [router])
//     const handleSubmit = e => {                
//         e.preventDefault()
//         console.log(formData);
//         // create(formData, token)
//         //     .then(data => {
//         //         setValues({
//         //             ...values,
//         //             error:'',
//         //             success: "Publish success"
//         //         })
//         //         setBody('')
//         //         setCheckedTag('')
//         //         setChecked('')
//         //     })
//         //     .catch(err => setValues({...values, error: err}))
//     }
//     const handleChange = name => e => {
//         const value = name === 'photo' ? e.target.files[0] : e.target.value
//         formData.set(name, value)
//         setValues({
//             ...values,
//             [name]: value,
//             formData,
//             error:''
//         })
//     }
//     const handleBody =  e => {
//         setBody(e)
//         formData.append('body', e);
//         console.log(formData);
//         if(localStorage) {
//             localStorage.setItem('blog', JSON.stringify(e))
//         }
//     }
//     const createBlogForm = () => {
//         return(
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input 
//                     type="text" 
//                     name="title"
//                     value={title}
//                     placeholder="Enter title"
//                     className="form-control"
//                     onChange={handleChange('title')}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <ReactQuill
//                     modules={BlogCreate.modules}
//                     formats={BlogCreate.formats}
//                     value={body}
//                     placeholder="Type songthing"
//                     onChange={handleBody}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <button type="submit" className="btn btn-primary">
//                         Publish
//                     </button>
//                 </div>
//             </form>
//         )
//     }
//     const handleToggle = c => () => {
//         setValues({
//             ...values,
//             error: ''
//         })
//         const clickedCategory = checked.indexOf(c);
//         let all = [...checked]
//         if(clickedCategory === -1) {
//             all.push(c)
//         } else {
//             all.splice(clickedCategory, 1)
//         }
//         setChecked(all)
//         formData.set('categories', all)
//     }
//     const handleTagToggle = t => () => {
//         setValues({
//             ...values,
//             error: ''
//         })
//         const clickedTag = checkedTag.indexOf(t);
//         let all = [...checkedTag]
//         if(clickedTag === -1) {
//             all.push(t)
//         } else {
//             all.splice(clickedTag, 1)
//         }
//         setCheckedTag(all)
//         formData.set('tags', all)
//     }
//     const showCategories = () => {
//         return (
//             categories && categories.map((c,i) => {
//                 return <li key={i} className="list-unstyled">
//                     <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2"/>
//                     <label htmlFor="" className="form-check-label">
//                         {c.name}
//                     </label>
//                 </li>
//             })
//         )
//     }
//     const showTags = () => {
//         return (
//             tags && tags.map((t,i) => {
//                 return <li key={i} className="list-unstyled">
//                     <input onChange={handleTagToggle(t._id)} type="checkbox" className="mr-2"/>
//                     <label htmlFor="" className="form-check-label">
//                         {t.name}
//                     </label>
//                 </li>
//             })
//         )
//     }
//     return(
//         <>
//             <div className="row">
//                 <div className="col-md-8">
//                     {createBlogForm()}
//                 </div>
//                 <div className="col-md-4">
//                     <div className="form-group pb-2">
//                         <h5>Featured image</h5>
//                         <hr/>
//                         <label htmlFor="photo" className="btn btn-outline-info">Upload image</label>
//                         <input 
//                         type="file" 
//                         accept="images/*"
//                         id="photo"
//                         name="photo"
//                         onChange={handleChange('photo')}
//                         hidden
//                         />
//                     </div>
//                     <div className="categories-list">
//                         <h5>Categories</h5>
//                         <hr />
//                         <ul style={{
//                             maxHeight: '400px',
//                             overflowY: 'scroll'
//                         }}>
//                             {showCategories()}
//                         </ul>
//                     </div>
//                     <div className="tag-list">
//                         <h5>Tags</h5>
//                         <hr/>
//                         <ul style={{
//                             maxHeight: '400px',
//                             overflowY: 'scroll'
//                         }}>
//                             {showTags()}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default withRouter(BlogCreate);
// BlogCreate.modules = {
//     toolbar: [
//         [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
//         [{ size: [] }],
//         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//         [{ list: 'ordered' }, { list: 'bullet' }],
//         ['link', 'image', 'video'],
//         ['clean'],
//         ['code-block']
//     ]
// };
// BlogCreate.formats = [
//     'header',
//     'font',
//     'size',
//     'bold',
//     'italic',
//     'underline',
//     'strike',
//     'blockquote',
//     'list',
//     'bullet',
//     'link',
//     'image',
//     'video',
//     'code-block'
// ];









var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(function () {
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
 // import { QuillModules, QuillFormats } from '../../helpers/quill';

var BlogCreate = function BlogCreate(_ref) {
  var router = _ref.router;

  var blogFromLS = function blogFromLS() {
    if (false) {}

    if (localStorage.getItem('blog')) {
      return JSON.parse(localStorage.getItem('blog'));
    } else {
      return false;
    }
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tags = _useState2[0],
      setTags = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      checked = _useState3[0],
      setChecked = _useState3[1]; // categories


  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      checkedTag = _useState4[0],
      setCheckedTag = _useState4[1]; // tags


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(blogFromLS()),
      body = _useState5[0],
      setBody = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    error: '',
    sizeError: '',
    success: '',
    formData: '',
    title: '',
    hidePublishButton: false,
    loading: false
  }),
      values = _useState6[0],
      setValues = _useState6[1];

  var error = values.error,
      sizeError = values.sizeError,
      success = values.success,
      formData = values.formData,
      title = values.title,
      hidePublishButton = values.hidePublishButton,
      loading = values.loading;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_6__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setValues(_objectSpread({}, values, {
      formData: new FormData()
    }));
    initCategories();
    initTags();
  }, [router]);

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_7__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setCategories(data);
      }
    });
  };

  var initTags = function initTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_8__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setTags(data);
      }
    });
  };

  var publishBlog = function publishBlog(e) {
    setValues(_objectSpread({}, values, {
      loading: true
    }));
    e.preventDefault(); // console.log('ready to publishBlog');

    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_9__["create"])(formData, token).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error,
          loading: false
        }));
      } else {
        setValues(_objectSpread({}, values, {
          loading: false,
          title: '',
          error: '',
          success: "A new blog titled \"".concat(data.title, "\" is created")
        }));
        setBody('');
        setCategories([]);
        setTags([]);
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      var _objectSpread2;

      // console.log(e.target.value);
      var value = name === 'photo' ? e.target.files[0] : e.target.value;
      formData.set(name, value);
      setValues(_objectSpread({}, values, (_objectSpread2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, name, value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "formData", formData), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread2, "error", ''), _objectSpread2)));
    };
  };

  var handleBody = function handleBody(e) {
    // console.log(e);
    setBody(e);
    formData.set('body', e);

    if (true) {
      localStorage.setItem('blog', JSON.stringify(e));
    }
  };

  var handleToggle = function handleToggle(c) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedCategory = checked.indexOf(c);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

      if (clickedCategory === -1) {
        all.push(c);
      } else {
        all.splice(clickedCategory, 1);
      }

      setChecked(all);
      formData.set('categories', all);
    };
  };

  var handleTagsToggle = function handleTagsToggle(t) {
    return function () {
      setValues(_objectSpread({}, values, {
        error: ''
      })); // return the first index or -1

      var clickedTag = checked.indexOf(t);

      var all = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checkedTag);

      if (clickedTag === -1) {
        all.push(t);
      } else {
        all.splice(clickedTag, 1);
      }

      console.log(all);
      setCheckedTag(all);
      formData.set('tags', all);
    };
  };

  var showCategories = function showCategories() {
    return categories && categories.map(function (c, i) {
      return __jsx("li", {
        key: i,
        className: "list-unstyled",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 17
        }
      }, __jsx("input", {
        onChange: handleToggle(c._id),
        type: "checkbox",
        className: "mr-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 21
        }
      }), __jsx("label", {
        className: "form-check-label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }
      }, c.name));
    });
  };

  var showTags = function showTags() {
    return tags && tags.map(function (t, i) {
      return __jsx("li", {
        key: i,
        className: "list-unstyled",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 17
        }
      }, __jsx("input", {
        onChange: handleTagsToggle(t._id),
        type: "checkbox",
        className: "mr-2",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 21
        }
      }), __jsx("label", {
        className: "form-check-label",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 21
        }
      }, t.name));
    });
  };

  var showError = function showError() {
    return __jsx("div", {
      className: "alert alert-danger",
      style: {
        display: error ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 9
      }
    }, error);
  };

  var showSuccess = function showSuccess() {
    return __jsx("div", {
      className: "alert alert-success",
      style: {
        display: success ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 9
      }
    }, success);
  };

  var showLoading = function showLoading() {
    return __jsx("div", {
      className: "alert alert-info",
      style: {
        display: loading ? '' : 'none'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 9
      }
    }, "Loading...");
  };

  var createBlogForm = function createBlogForm() {
    return __jsx("form", {
      onSubmit: publishBlog,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 17
      }
    }, __jsx("label", {
      className: "text-muted",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 21
      }
    }, "Title"), __jsx("input", {
      type: "text",
      className: "form-control",
      value: title,
      onChange: handleChange('title'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "form-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 17
      }
    }, __jsx(ReactQuill // modules={QuillModules}
    // formats={QuillFormats}
    , {
      value: body,
      placeholder: "Write something amazing...",
      onChange: handleBody,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 21
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 17
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 21
      }
    }, "Publish")));
  };

  return __jsx("div", {
    className: "container-fluid pb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 17
    }
  }, createBlogForm(), __jsx("div", {
    className: "pt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 21
    }
  }, showError(), showSuccess(), showLoading())), __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group pb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 29
    }
  }, "Featured image"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 29
    }
  }), __jsx("small", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 29
    }
  }, "Max size: 1mb"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 29
    }
  }), __jsx("label", {
    className: "btn btn-outline-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 29
    }
  }, "Upload featured image", __jsx("input", {
    onChange: handleChange('photo'),
    type: "file",
    accept: "image/*",
    hidden: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 33
    }
  })))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 21
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 25
    }
  }, "Categories"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 25
    }
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 25
    }
  }, showCategories())), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 21
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 25
    }
  }, "Tags"), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 25
    }
  }), __jsx("ul", {
    style: {
      maxHeight: '200px',
      overflowY: 'scroll'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 25
    }
  }, showTags())))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(BlogCreate));

/***/ })

})
//# sourceMappingURL=blog.js.c7368c8ab65f14f65212.hot-update.js.map