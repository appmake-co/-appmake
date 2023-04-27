"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _iconsMaterial = require("@mui/icons-material");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var EmptyImage = function EmptyImage(props) {
  return /*#__PURE__*/_react.default.createElement(_material.Avatar, {
    sx: sx.avatar,
    variant: "rounded"
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Image, null));
};
var _default = EmptyImage;
exports.default = _default;
var sx = {
  avatar: {
    height: "64px",
    width: "64px",
    border: function border(theme) {
      return "2px solid ".concat(theme.palette.common.white);
    },
    backgroundColor: "background.light"
  },
  icon: {
    color: "icon"
  }
};