"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["value"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var CellArray = function CellArray(_ref) {
  var values = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded);
  return Array.isArray(values) && values.length > 0
    ? values.map(function (value, index) {
        return /*#__PURE__*/ _react.default.createElement(_material.Chip, {
          key: index,
          label: value,
          sx: sx.chip,
          size: "small",
        });
      })
    : null;
};
var _default = CellArray;
exports.default = _default;
var sx = {
  chip: {
    mt: 0,
    mr: 0.5,
    mb: 0.5,
    ml: 0,
    textTransform: "none",
    fontFamily: function fontFamily(theme) {
      return theme.typography.body3.fontFamily;
    },
    letterSpacing: 0,
  },
};
