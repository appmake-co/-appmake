"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["value", "height", "width"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FieldVideo = function FieldVideo(_ref) {
  var value = _ref.value,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 240 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 240 : _ref$width,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react.default.createElement("video", {
    src: value,
    controls: true,
    muted: true,
    autoPlay: true,
    sx: sx.video
  }));
};
var _default = FieldVideo;
exports.default = _default;
var sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111"
  },
  video: {
    width: "100%",
    height: "auto",
    maxHeight: "calc(100vh - 150px)"
  }
};