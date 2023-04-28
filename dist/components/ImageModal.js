"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _material = require("@mui/material");
var _reactFeather = require("react-feather");
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
var _image = _interopRequireDefault(require("next/image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ImageModal = function ImageModal(_ref) {
  var open = _ref.open,
    src = _ref.src,
    image = _ref.image,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    handleClose = _ref.handleClose;
  var _useAlerts = (0, _index.useAlerts)(),
    showAlertSuccess = _useAlerts.showAlertSuccess;
  var handleCopyUrlClick = function handleCopyUrlClick() {
    (0, _copyToClipboard.default)(image === null || image === void 0 ? void 0 : image.url);
    showAlertSuccess("Asset URL copied to clipboard");
  };
  var handleDownloadClick = function handleDownloadClick() {
    window.open(image === null || image === void 0 ? void 0 : image.url, "_blank");
  };
  return /*#__PURE__*/_react.default.createElement(_index.Modal, {
    open: open,
    handleClose: handleClose,
    title: title,
    maxWidth: "md",
    p: 0,
    actions: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
      variant: "outlined",
      startIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.Link, null),
      onClick: handleCopyUrlClick
    }, "Copy URL"), /*#__PURE__*/_react.default.createElement(_material.Button, {
      variant: "outlined",
      startIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.Download, null),
      onClick: handleDownloadClick
    }, "Download"))
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.imageContainer
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    src: image === null || image === void 0 ? void 0 : image.url,
    style: sx.image,
    height: image === null || image === void 0 ? void 0 : image.height,
    width: image === null || image === void 0 ? void 0 : image.width
  }))));
};
var _default = ImageModal;
exports.default = _default;
var sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    maxWidth: "500px",
    maxHeight: "500px",
    objectFit: "contain"
  }
};