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
      res: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onDigit", function (digit) {
      console.log(_this.state.res);
      var operadores = ["+", "-", "/", "*"];
      var largo = _this.state.res.length;

      var ultimo = _this.state.res.charAt(largo - 1);

      if (!(operadores.indexOf(digit) >= 0 && operadores.indexOf(ultimo) >= 0)) {
        var expresion = _this.state.res + digit;

        _this.setState({
          res: expresion
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "ejecutarOperacion", function () {
      var resultados = eval(_this.state.res);

      _this.setState({
        res: resultados
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calculadora, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-1433830378",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-1433830378" + " " + "z-depth-2 light-blue lighten-2 white-text center-align resultados",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, this.state.res == "" ? "0" : this.state.res), __jsx("div", {
        className: "jsx-1433830378" + " " + "calc-container blue lighten-3 hoverable z-depth-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-1433830378" + " " + "waves-effect waves-light btn",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }
        }, digit);
      }), __jsx("div", {
        className: "jsx-1433830378" + " " + "operadores center-align",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 20
        }
      }, ["+", "-", "/", "*"].map(function (digit) {
        return __jsx("a", {
          onClick: function onClick() {
            return _this2.onDigit(digit);
          },
          className: "jsx-1433830378" + " " + "waves-effect waves-light btn deep-orange darken-1",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }
        }, digit);
      }), __jsx("a", {
        onClick: function onClick() {
          return _this2.setState({
            res: ""
          });
        },
        className: "jsx-1433830378" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }
      }, "C")), __jsx("a", {
        onClick: this.ejecutarOperacion,
        className: "jsx-1433830378" + " " + "waves-effect waves-light btn deep-orange darken-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }
      }, "Enter")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1433830378",
        __self: this
      }, ".resultados.jsx-1433830378{width:300px;margin:0 auto;font-size:32px;margin-bottom:10px;}.calc-container.jsx-1433830378{width:300px;margin:0 auto;text-align:center;padding:12px;}.operadores.jsx-1433830378{border:1px solid #ccc;padding:10px;margin-top:20px;}.calc-container.jsx-1433830378 a.jsx-1433830378{margin:5px;width:75px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ2FybG9zIE1hbGF2YXNzaVxcRGVza3RvcFxccGxheWdyb3VuZFxcY29tcG9uZW50ZXNcXGNhbGN1bGFkb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEd0IsQUFDMkUsQUFBK1AsQUFBa1EsQUFBMEwsV0FBc0MsQ0FBeHJCLEFBQStQLFVBQWlRLEFBQWdOLElBQXRxQixBQUFrUSxTQUErUCxNQUFuZCxHQUE0UCxPQUErTyxNQUF2TixHQUE1UCIsImZpbGUiOiJDOlxcVXNlcnNcXENhcmxvcyBNYWxhdmFzc2lcXERlc2t0b3BcXHBsYXlncm91bmRcXGNvbXBvbmVudGVzXFxjYWxjdWxhZG9yYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhbGN1bGFkb3JhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGU9e1xyXG4gICAgICAgIHJlczpcIlwiXHJcbiAgICB9XHJcblxyXG5vbkRpZ2l0PSAoZGlnaXQpID0+e1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yZXMpXHJcbiAgICBjb25zdCBvcGVyYWRvcmVzID0gW1wiK1wiLFwiLVwiLFwiL1wiLFwiKlwiXVxyXG4gICAgY29uc3QgbGFyZ28gPSB0aGlzLnN0YXRlLnJlcy5sZW5ndGhcclxuICAgIGNvbnN0IHVsdGltbz0gdGhpcy5zdGF0ZS5yZXMuY2hhckF0KGxhcmdvLTEpXHJcblxyXG4gICAgaWYgKCEob3BlcmFkb3Jlcy5pbmRleE9mKGRpZ2l0KT49MCAmJiBvcGVyYWRvcmVzLmluZGV4T2YodWx0aW1vKT49MCkpe1xyXG4gICAgICAgIGNvbnN0IGV4cHJlc2lvbj10aGlzLnN0YXRlLnJlcyArIGRpZ2l0XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgcmVzOmV4cHJlc2lvblxyXG4gICAgICAgIH0pIFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZWplY3V0YXJPcGVyYWNpb249KCkgPT57XHJcbiAgICBjb25zdCByZXN1bHRhZG9zID0gZXZhbCh0aGlzLnN0YXRlLnJlcylcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHJlczpyZXN1bHRhZG9zXHJcbiAgICB9KVxyXG59XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotZGVwdGgtMiBsaWdodC1ibHVlIGxpZ2h0ZW4tMiB3aGl0ZS10ZXh0IGNlbnRlci1hbGlnbiByZXN1bHRhZG9zXCI+e3RoaXMuc3RhdGUucmVzPT1cIlwiPyBcIjBcIjp0aGlzLnN0YXRlLnJlc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsYy1jb250YWluZXIgYmx1ZSBsaWdodGVuLTMgaG92ZXJhYmxlIHotZGVwdGgtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFtcIjBcIixcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIi5cIl0ubWFwKGRpZ2l0PT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG5cIiBvbkNsaWNrPXsoKT0+dGhpcy5vbkRpZ2l0KGRpZ2l0KX0+e2RpZ2l0fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVyYWRvcmVzIGNlbnRlci1hbGlnblwiPntcclxuICAgICAgICAgICAgICAgICAgICBbXCIrXCIsXCItXCIsXCIvXCIsXCIqXCJdLm1hcChkaWdpdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgYnRuIGRlZXAtb3JhbmdlIGRhcmtlbi0xXCIgb25DbGljaz17KCk9PnRoaXMub25EaWdpdChkaWdpdCl9PntkaWdpdH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KSAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZGVlcC1vcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXsoKT0+dGhpcy5zZXRTdGF0ZSh7cmVzOlwiXCJ9KX0+QzwvYT4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCBidG4gZGVlcC1vcmFuZ2UgZGFya2VuLTFcIiBvbkNsaWNrPXt0aGlzLmVqZWN1dGFyT3BlcmFjaW9ufT5FbnRlcjwvYT4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzdWx0YWRvc3tcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTozMnB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxjLWNvbnRhaW5lcntcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEycHg7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcGVyYWRvcmVze1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsYy1jb250YWluZXIgYXtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjVweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6NzVweDtcXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYWRvcmEiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Carlos Malavassi\\\\Desktop\\\\playground\\\\componentes\\\\calculadora.js */"));
    }
  }]);

  return Calculadora;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calculadora);

/***/ })

})
//# sourceMappingURL=calc.js.1911e4a4c82a51ef4cc9.hot-update.js.map