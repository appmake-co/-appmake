"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modal = function Modal(_ref) {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    title = _ref.title,
    subtitle = _ref.subtitle,
    buttons = _ref.actions,
    children = _ref.children,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? "sm" : _ref$maxWidth;
  return /*#__PURE__*/_react.default.createElement(_material.Dialog, {
    sx: sx.dialog,
    fullWidth: true,
    maxWidth: maxWidth,
    open: open,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_material.DialogTitle, {
    sx: sx.title,
    onClose: handleClose
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "subtitle1"
  }, title)), /*#__PURE__*/_react.default.createElement(_material.Box, null, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: "small",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.Close, null))))), /*#__PURE__*/_react.default.createElement(_material.DialogContent, null, subtitle && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body1"
  }, subtitle), children), buttons && /*#__PURE__*/_react.default.createElement(_material.DialogActions, null, buttons));
};
var _default = Modal;
exports.default = _default;
var sx = {
  title: {
    marginBottom: "10px",
    height: 64,
    fontSize: "18px",
    backgroundColor: "background.primary"
  },
  dialog: {
    zIndex: function zIndex(theme) {
      return theme.zIndex.modal;
    }
  }
};