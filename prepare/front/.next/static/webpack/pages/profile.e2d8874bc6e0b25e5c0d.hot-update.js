webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\syjoo\\Desktop\\personal\\react-nodebrid\\prepare\\front\\components\\FollowList.js",
    _this = undefined;






var ListStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(_c = function _c() {
  return {
    marginBottom: 20
  };
});
_c2 = ListStyle;

var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: ListStyle,
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }, _this),
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 19
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 31
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_c3 = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c, _c2, _c3;

$RefreshReg$(_c, "ListStyle$useMemo");
$RefreshReg$(_c2, "ListStyle");
$RefreshReg$(_c3, "FollowList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkxpc3RTdHlsZSIsInVzZU1lbW8iLCJtYXJnaW5Cb3R0b20iLCJGb2xsb3dMaXN0IiwiaGVhZGVyIiwiZGF0YSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHB5ZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLHFEQUFPLE1BQUM7QUFBQSxTQUFNO0FBQUNDLGdCQUFZLEVBQUU7QUFBZixHQUFOO0FBQUEsQ0FBRCxDQUF6QjtNQUFNRixTOztBQUVOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW9CO0FBQUEsTUFBbEJDLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUNuQyxzQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRUwsU0FBYjtBQUNBLFVBQU0sZUFBRTtBQUFBLGdCQUFNSTtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUjtBQUVBLFFBQUksRUFBRTtBQUFFRSxZQUFNLEVBQUUsQ0FBVjtBQUFhQyxRQUFFLEVBQUUsQ0FBakI7QUFBb0JDLFFBQUUsRUFBRTtBQUF4QixLQUZOO0FBR0EsUUFBSSxFQUFDLE9BSEw7QUFJQSxZQUFRLGVBQUU7QUFBSyxXQUFLLEVBQUU7QUFBR0MsaUJBQVMsRUFBRSxRQUFkO0FBQ2xCQyxjQUFNLEVBQUU7QUFEVSxPQUFaO0FBQUEsNkJBRU4scUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSlY7QUFVQSxZQUFRLE1BVlI7QUFXQSxjQUFVLEVBQUVMLElBWFo7QUFZQSxjQUFVLEVBQUUsb0JBQUNNLElBQUQ7QUFBQSwwQkFDUixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWxCO0FBQUEsK0JBQ0UscUVBQUMseUNBQUQ7QUFBTSxpQkFBTyxFQUFFLGNBQUMscUVBQUMsOERBQUQsTUFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxDQUFmO0FBQUEsaUNBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVcsRUFBRUQsSUFBSSxDQUFDRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBO0FBWlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBc0JILENBdkJEOztNQUFNVixVO0FBeUJOQSxVQUFVLENBQUNXLFNBQVgsR0FBdUI7QUFDbkJWLFFBQU0sRUFBRVcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtBQUVuQlosTUFBSSxFQUFFVSxpREFBUyxDQUFDRyxLQUFWLENBQWdCRDtBQUZILENBQXZCO0FBS2VkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZTJkODg3NGJjNmUwYjI1ZTVjMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFRweWVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge0xpc3QsIEJ1dHRvbiwgQ2FyZH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcblxyXG5jb25zdCBMaXN0U3R5bGUgPSB1c2VNZW1vKCgpPT4gKHttYXJnaW5Cb3R0b206IDIwfSkpO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7aGVhZGVyLCBkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGlzdCBzdHlsZT17TGlzdFN0eWxlfSBcclxuICAgICAgICBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59IFxyXG4gICAgICAgIGdyaWQ9e3sgZ3V0dGVyOiA0LCB4czogMiwgbWQ6IDMgfX0gXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCIgXHJcbiAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3sgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMCd9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIOuNlOuztOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59IFxyXG4gICAgICAgIGJvcmRlcmVkIFxyXG4gICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9IFxyXG4gICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIvPl19PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUcHllcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUcHllcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=