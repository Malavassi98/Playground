webpackHotUpdate("static\\development\\pages\\calc.js",{

/***/ "./componentes/calculadora.js":
/*!************************************!*\
  !*** ./componentes/calculadora.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Carlos Malavassi\\Desktop\\playground\\componentes\\calculadora.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Calculadora = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Calculadora, _React$Component);

  var _super = _createSuper(Calculadora);

  function Calculadora() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calculadora);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      res: "0"
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onDigit", function (digit) {
      _this.setState({
        res: digit
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calculadora, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-2076476183",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2076476183" + " " + "z-depth-2 light-blue lighten-2 white-text center-align resultados",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, this.state.res), __jsx("div", {
        className: "jsx-2076476183" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }
      }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2076476183" + " " + "waves-effect waves-light btn",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 29
          }
        }, digit);
      })), __jsx("div", {
        className: "jsx-2076476183" + " " + "operadores center-align",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, ["+", "-", "/", "*", ""].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-2076476183" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }
        }, digit == "" ? "C" : digit);
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2076476183",
        __self: this
      }, ".resultados.jsx-2076476183{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-2076476183{width:300px;margin:0 auto;text-align:center;padding:12px;}.operadores.jsx-2076476183{border:1px solid #ccc;padding:10px;margin-top:20px;}.btn.jsx-2076476183{width:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2FybG9zIE1hbGF2YXNzaVxcRGVza3RvcFxccGxheWdyb3VuZFxcY29tcG9uZW50ZXNcXGNhbGN1bGFkb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Dd0IsQUFDMkUsQUFBK1AsQUFBa1EsQUFBNkssV0FBd0IsQ0FBN3BCLEFBQStQLFVBQWlRLElBQXRkLEFBQWtRLFNBQStQLE1BQW5kLEdBQTRQLE9BQStPLE1BQXZOLEdBQTVQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2FybG9zIE1hbGF2YXNzaVxcRGVza3RvcFxccGxheWdyb3VuZFxcY29tcG9uZW50ZXNcXGNhbGN1bGFkb3JhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYWRvcmEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgcmVzOlwiMFwiXHJcbiAgICB9XHJcblxyXG5vbkRpZ2l0PSAoZGlnaXQpID0+e1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVzOmRpZ2l0fSlcclxufVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWRlcHRoLTIgbGlnaHQtYmx1ZSBsaWdodGVuLTIgd2hpdGUtdGV4dCBjZW50ZXItYWxpZ24gcmVzdWx0YWRvc1wiPnt0aGlzLnN0YXRlLnJlc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsYy1jb250YWluZXIgYmx1ZSBsaWdodGVuLTMgaG92ZXJhYmxlIHotZGVwdGgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFtcIjBcIixcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIi5cIl0ubWFwKGRpZ2l0PT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5vbkRpZ2l0KGRpZ2l0KX0+e2RpZ2l0fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wZXJhZG9yZXMgY2VudGVyLWFsaWduXCI+e1xyXG4gICAgICAgICAgICAgICAgICAgIFtcIitcIixcIi1cIixcIi9cIixcIipcIixcIlwiXS5tYXAoZGlnaXQ9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IGJ0biBkZWVwLW9yYW5nZSBkYXJrZW4tMVwiIG9uQ2xpY2s9eygpPT50aGlzLm9uRGlnaXQoZGlnaXQpfT57ZGlnaXQ9PVwiXCIgPyBcIkNcIjpkaWdpdH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3VsdGFkb3N7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MzJweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsYy1jb250YWluZXJ7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMnB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3BlcmFkb3Jlc3tcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bntcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NzVweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYWRvcmEiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Carlos Malavassi\\\\Desktop\\\\playground\\\\componentes\\\\calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.1cb5b28d91c596ac4130.hot-update.js.map