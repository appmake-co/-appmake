"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["label", "children", "spacer"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FilterInput = function FilterInput(_ref) {
  var label = _ref.label,
    children = _ref.children,
    _ref$spacer = _ref.spacer,
    spacer = _ref$spacer === void 0 ? true : _ref$spacer,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.inputField
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.inputLabel
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, label)), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.input
  }, children));
};
var _default = FilterInput;
exports.default = _default;
var sx = {
  inputField: {
    width: "100%",
    py: 0.5,
    px: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputLabel: {
    minWidth: "100px"
  },
  input: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  spacer: {
    width: 4
  }
};