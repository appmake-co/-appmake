"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _excluded = ["value", "handleClick", "height", "width"];
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
var FieldImage = function FieldImage(_ref) {
  var value = _ref.value,
    handleClick = _ref.handleClick,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 240 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 240 : _ref$width,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.Button,
    {
      sx: sx.button,
      onClick: handleClick,
    },
    /*#__PURE__*/ _react.default.createElement(_image.default, {
      src: value,
      alt: "Image",
      width: width,
      height: height,
      style: sx.image,
    })
  );
};
var _default = FieldImage;
exports.default = _default;
var sx = {
  root: {},
  image: {
    objectFit: "contain",
  },
};
