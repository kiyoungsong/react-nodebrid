webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\syjoo\\Desktop\\personal\\react-nodebrid\\prepare\\front\\components\\FollowList.js",
    _templateObject,
    _templateObject2,
    _this = undefined;







var ListWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 20px;\n"])));
_c = ListWrapper;
var ListItemStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item)(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-top: 20px;\n"])));
_c2 = ListItemStyle;

var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ListWrapper, {
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 30
    }, _this),
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 106
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ListItemStyle, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          action: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 32
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, _this);
};

_c3 = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c, _c2, _c3;

$RefreshReg$(_c, "ListWrapper");
$RefreshReg$(_c2, "ListItemStyle");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkxpc3RXcmFwcGVyIiwic3R5bGVkIiwiTGlzdCIsIkxpc3RJdGVtU3R5bGUiLCJJdGVtIiwiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFRweWVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHlDQUFELENBQVQsMktBQWpCO0tBQU1GLFc7QUFJTixJQUFNRyxhQUFhLEdBQUdGLGlFQUFNLENBQUNDLHlDQUFJLENBQUNFLElBQU4sQ0FBVCwwS0FBbkI7TUFBTUQsYTs7QUFJTixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQjtBQUFBLE1BQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDbkMsc0JBQ0kscUVBQUMsV0FBRDtBQUFhLFVBQU0sZUFBRTtBQUFBLGdCQUFNRDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBckI7QUFBMEMsUUFBSSxFQUFFO0FBQUNFLFlBQU0sRUFBQyxDQUFSO0FBQVdDLFFBQUUsRUFBRSxDQUFmO0FBQWtCQyxRQUFFLEVBQUU7QUFBdEIsS0FBaEQ7QUFBMEUsUUFBSSxFQUFDLE9BQS9FO0FBQXVGLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRTtBQUFHQyxpQkFBUyxFQUFFLFFBQWQ7QUFDekdDLGNBQU0sRUFBRTtBQURpRyxPQUFaO0FBQUEsNkJBRTdGLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRjZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBakc7QUFLUSxZQUFRLE1BTGhCO0FBS2lCLGNBQVUsRUFBRUwsSUFMN0I7QUFLbUMsY0FBVSxFQUFFLG9CQUFDTSxJQUFEO0FBQUEsMEJBRTNDLHFFQUFDLGFBQUQ7QUFBQSwrQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLGdCQUFNLEVBQUUsY0FBQyxxRUFBQyw4REFBRCxNQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFELENBQWQ7QUFBQSxpQ0FDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyx1QkFBVyxFQUFFQSxJQUFJLENBQUNDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUYyQztBQUFBO0FBTC9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlCSCxDQWxCRDs7TUFBTVQsVTtBQW9CTkEsVUFBVSxDQUFDVSxTQUFYLEdBQXVCO0FBQ25CVCxRQUFNLEVBQUVVLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJYLE1BQUksRUFBRVMsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlYix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmU2ODhhYmQzMGZmYmZlMjA3MmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb3BUcHllcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtMaXN0LCBCdXR0b24sIENhcmR9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5cclxuY29uc3QgTGlzdFdyYXBwZXIgPSBzdHlsZWQoTGlzdClgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBMaXN0SXRlbVN0eWxlID0gc3R5bGVkKExpc3QuSXRlbSlgXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHtoZWFkZXIsIGRhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaXN0V3JhcHBlciBoZWFkZXI9ezxkaXY+e2hlYWRlcn08L2Rpdj59IGdyaWQ9e3tndXR0ZXI6NCwgeHM6IDIsIG1kOiAzfX0gc2l6ZT1cInNtYWxsXCIgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3sgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIG1hcmdpbjogJzEwcHggMCd9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIOuNlOuztOq4sFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59IGJvcmRlcmVkIGRhdGFTb3VyY2U9e2RhdGF9IHJlbmRlckl0ZW09eyhpdGVtKT0+XHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1TdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbj17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtpdGVtLm5pY2tuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW1TdHlsZT5cclxuICAgICAgICApfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9MaXN0V3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHB5ZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHB5ZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9