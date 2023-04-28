"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _lucideReact = require("lucide-react");
var _excluded = ["value", "handleClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FieldLink = function FieldLink(_ref) {
  var value = _ref.value,
    handleClick = _ref.handleClick,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.cell
  }, value && /*#__PURE__*/_react.default.createElement(_material.Button, {
    size: "small",
    color: "primary",
    sx: sx.button,
    startIcon: /*#__PURE__*/_react.default.createElement(_lucideReact.Link2, {
      sx: sx.icon
    }),
    onClick: handleClick
  }, value));
};
var _default = FieldLink;
exports.default = _default;
var sx = {
  button: {
    textTransform: "none",
    fontFamily: function fontFamily(theme) {
      return theme.typography.body3.fontFamily;
    },
    letterSpacing: 0
  },
  cell: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    p: "0.5rem"
  },
  icon: {
    height: 20,
    width: 20,
    color: "secondary.main"
  }
};