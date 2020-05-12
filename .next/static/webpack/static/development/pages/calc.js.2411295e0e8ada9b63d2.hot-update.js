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
        className: "jsx-1105064388",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-1105064388" + " " + "z-depth-2 light-blue lighten-2 white-text center-align resultados",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }
      }, this.state.res == "" ? "0" : this.state.res), __jsx("div", {
        className: "jsx-1105064388" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
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
          className: "jsx-1105064388" + " " + "waves-effect waves-light btn",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 29
          }
        }, digit);
      }), __jsx("div", {
        className: "jsx-1105064388" + " " + "operadores center-align",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 20
        }
      }, ["+", "-", "/", "*", ""].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-1105064388" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 29
          }
        }, digit == "" ? "C" : digit);
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1105064388",
        __self: this
      }, ".resultados.jsx-1105064388{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-1105064388{width:300px;margin:0 auto;text-align:center;padding:12px;}.operadores.jsx-1105064388{border:1px solid #ccc;padding:10px;margin-top:20px;}.cal-container.jsx-1105064388 a.jsx-1105064388{width:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2FybG9zIE1hbGF2YXNzaVxcRGVza3RvcFxccGxheWdyb3VuZFxcY29tcG9uZW50ZXNcXGNhbGN1bGFkb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDd0IsQUFDMkUsQUFBK1AsQUFBa1EsQUFBeUwsV0FBd0IsQ0FBenFCLEFBQStQLFVBQWlRLElBQXRkLEFBQWtRLFNBQStQLE1BQW5kLEdBQTRQLE9BQStPLE1BQXZOLEdBQTVQIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ2FybG9zIE1hbGF2YXNzaVxcRGVza3RvcFxccGxheWdyb3VuZFxcY29tcG9uZW50ZXNcXGNhbGN1bGFkb3JhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2FsY3VsYWRvcmEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBzdGF0ZT17XHJcbiAgICAgICAgcmVzOlwiMFwiXHJcbiAgICB9XHJcblxyXG5vbkRpZ2l0PSAoZGlnaXQpID0+e1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVzOmRpZ2l0fSlcclxufVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LWRlcHRoLTIgbGlnaHQtYmx1ZSBsaWdodGVuLTIgd2hpdGUtdGV4dCBjZW50ZXItYWxpZ24gcmVzdWx0YWRvc1wiPnt0aGlzLnN0YXRlLnJlcz09XCJcIj8gXCIwXCI6dGhpcy5zdGF0ZS5yZXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGMtY29udGFpbmVyIGJsdWUgbGlnaHRlbi0zIGhvdmVyYWJsZSB6LWRlcHRoLTJcIj5cclxuICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCIsXCI0XCIsXCI1XCIsXCI2XCIsXCI3XCIsXCI4XCIsXCI5XCIsXCIuXCJdLm1hcChkaWdpdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuXCIgb25DbGljaz17KCk9PnRoaXMub25EaWdpdChkaWdpdCl9PntkaWdpdH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmFkb3JlcyBjZW50ZXItYWxpZ25cIj57XHJcbiAgICAgICAgICAgICAgICAgICAgW1wiK1wiLFwiLVwiLFwiL1wiLFwiKlwiLFwiXCJdLm1hcChkaWdpdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PnRoaXMub25EaWdpdChkaWdpdCl9PntkaWdpdD09XCJcIiA/IFwiQ1wiOmRpZ2l0fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHRhZG9ze1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjMycHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGMtY29udGFpbmVye1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTJweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wZXJhZG9yZXN7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWwtY29udGFpbmVyIGF7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjc1cHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPiAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGN1bGFkb3JhIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Carlos Malavassi\\\\Desktop\\\\playground\\\\componentes\\\\calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.2411295e0e8ada9b63d2.hot-update.js.map