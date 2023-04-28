"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _excluded = ["value", "handleClick"];
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
var CellBelongsTo = function CellBelongsTo(_ref) {
  var value = _ref.value,
    handleClick = _ref.handleClick,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.cell,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Button,
      {
        fullWidth: true,
        size: "small",
        color: "primary",
        variant: "outlined",
        sx: sx.button,
        endIcon: /*#__PURE__*/ _react.default.createElement(
          _iconsMaterial.TurnSlightRight,
          null
        ),
        onClick: handleClick,
      },
      value
    )
  );
};
var _default = CellBelongsTo;
exports.default = _default;
var sx = {
  cell: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  avatar: {
    backgroundColor: "common.white",
  },
  button: {
    textTransform: "none",
    letterSpacing: 0,
  },
};
