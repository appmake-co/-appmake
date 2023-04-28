"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _material = require("@mui/material");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var TextModal = function TextModal(_ref) {
  var open = _ref.open,
    text = _ref.text,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Preview" : _ref$title,
    handleClose = _ref.handleClose;
  return /*#__PURE__*/ _react.default.createElement(
    _index.Modal,
    {
      open: open,
      handleClose: handleClose,
      title: title,
      maxWidth: "md",
      p: 2,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Typography,
      {
        my: 2,
        variant: "body2",
        sx: sx.text,
      },
      text
    )
  );
};
var _default = TextModal;
exports.default = _default;
var sx = {
  text: {
    whiteSpace: "pre-wrap",
  },
};
