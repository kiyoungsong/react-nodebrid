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
    _this = undefined,
    _s = $RefreshSig$();







var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data;
  var ListStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      marginBottom: 20
    };
  }, []);
  var loadMoreStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      textAlign: 'center',
      margin: '10px 0'
    };
  });
  var ListItemStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      marginTop: 20
    };
  }, []);
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
      style: loadMoreStyle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
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
        style: ListItemStyle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 31
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "mkHY22K97EPWFfxV8iQWQ95S0TU=");

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwiTGlzdFN0eWxlIiwidXNlTWVtbyIsIm1hcmdpbkJvdHRvbSIsImxvYWRNb3JlU3R5bGUiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJMaXN0SXRlbVN0eWxlIiwibWFyZ2luVG9wIiwiZ3V0dGVyIiwieHMiLCJtZCIsIml0ZW0iLCJuaWNrbmFtZSIsInByb3BUeXBlcyIsIlByb3BUcHllcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBb0I7QUFBQTs7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ25DLE1BQU1DLFNBQVMsR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU07QUFBQ0Msa0JBQVksRUFBRTtBQUFmLEtBQU47QUFBQSxHQUFELEVBQTRCLEVBQTVCLENBQXpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHRixxREFBTyxDQUFDO0FBQUEsV0FBTTtBQUFDRyxlQUFTLEVBQUUsUUFBWjtBQUFzQkMsWUFBTSxFQUFFO0FBQTlCLEtBQU47QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHTCxxREFBTyxDQUFDO0FBQUEsV0FBTztBQUFDTSxlQUFTLEVBQUU7QUFBWixLQUFQO0FBQUEsR0FBRCxFQUEwQixFQUExQixDQUE3QjtBQUNBLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFUCxTQUFiO0FBQ0EsVUFBTSxlQUFFO0FBQUEsZ0JBQU1GO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURSO0FBRUEsUUFBSSxFQUFFO0FBQUVVLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBRk47QUFHQSxRQUFJLEVBQUMsT0FITDtBQUlBLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRVAsYUFBWjtBQUFBLDZCQUNOLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpWO0FBU0EsWUFBUSxNQVRSO0FBVUEsY0FBVSxFQUFFSixJQVZaO0FBV0EsY0FBVSxFQUFFLG9CQUFDWSxJQUFEO0FBQUEsMEJBQ1IscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFTCxhQUFsQjtBQUFBLCtCQUNFLHFFQUFDLHlDQUFEO0FBQU0saUJBQU8sRUFBRSxjQUFDLHFFQUFDLDhEQUFELE1BQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FBZjtBQUFBLGlDQUNFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLHVCQUFXLEVBQUVLLElBQUksQ0FBQ0M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQTtBQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFCSCxDQXpCRDs7R0FBTWYsVTs7S0FBQUEsVTtBQTJCTkEsVUFBVSxDQUFDZ0IsU0FBWCxHQUF1QjtBQUNuQmYsUUFBTSxFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFETjtBQUVuQmpCLE1BQUksRUFBRWUsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlbkIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4zMjAwZjU2NDNiZjkwNGY0M2JhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHB5ZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7TGlzdCwgQnV0dG9uLCBDYXJkfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgRm9sbG93TGlzdCA9ICh7aGVhZGVyLCBkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgTGlzdFN0eWxlID0gdXNlTWVtbygoKT0+ICh7bWFyZ2luQm90dG9tOiAyMH0pLCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZVN0eWxlID0gdXNlTWVtbygoKT0+ICh7dGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJ30pKTtcclxuICAgIGNvbnN0IExpc3RJdGVtU3R5bGUgPSB1c2VNZW1vKCgpID0+ICh7bWFyZ2luVG9wOiAyMH0pLCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0IHN0eWxlPXtMaXN0U3R5bGV9IFxyXG4gICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn0gXHJcbiAgICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fSBcclxuICAgICAgICBzaXplPVwic21hbGxcIiBcclxuICAgICAgICBsb2FkTW9yZT17PGRpdiBzdHlsZT17bG9hZE1vcmVTdHlsZX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICDrjZTrs7TquLBcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+fSBcclxuICAgICAgICBib3JkZXJlZCBcclxuICAgICAgICBkYXRhU291cmNlPXtkYXRhfSBcclxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtIHN0eWxlPXtMaXN0SXRlbVN0eWxlfT5cclxuICAgICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIvPl19PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YSBkZXNjcmlwdGlvbj17aXRlbS5uaWNrbmFtZX0gLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUcHllcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUcHllcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=