"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
var _excluded = ["value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CellJSON = function CellJSON(_ref) {
  var value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded);
  var formattedValue = value;
  if (_typeof(value) === "object") {
    formattedValue = JSON.stringify(value);
  }
  return /*#__PURE__*/_react.default.createElement(_index.CellExpand, {
    cell: /*#__PURE__*/_react.default.createElement(_index.CellText, {
      value: formattedValue
    }),
    cellExpanded: /*#__PURE__*/_react.default.createElement(_index.CellTextExpanded, {
      value: JSON.stringify(value, null, 2)
    })
  });
};
var _default = CellJSON;
exports.default = _default;
var sx = {
  root: {}
};