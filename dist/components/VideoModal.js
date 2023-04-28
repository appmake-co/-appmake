"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _material = require("@mui/material");
var _reactFeather = require("react-feather");
var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var VideoModal = function VideoModal(_ref) {
  var _title;
  var open = _ref.open,
    src = _ref.src,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    handleClose = _ref.handleClose;
  var _useAlerts = (0, _index.useAlerts)(),
    showAlertSuccess = _useAlerts.showAlertSuccess;
  var handleCopyUrlClick = function handleCopyUrlClick() {
    (0, _copyToClipboard.default)(src);
    showAlertSuccess("Asset URL copied to clipboard");
  };
  var handleDownloadClick = function handleDownloadClick() {
    window.open(src, "_blank");
  };
  if (!((_title = title) !== null && _title !== void 0 && _title.length) > 0) {
    title = src === null || src === void 0 ? void 0 : src.split("/").pop();
  }
  return /*#__PURE__*/ _react.default.createElement(
    _index.Modal,
    {
      open: open,
      handleClose: handleClose,
      maxWidth: "md",
      p: 0,
      title: title,
      actions: /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            variant: "outlined",
            sx: sx.button,
            startIcon: /*#__PURE__*/ _react.default.createElement(
              _reactFeather.Link,
              null
            ),
            onClick: handleCopyUrlClick,
          },
          "Copy URL"
        ),
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            variant: "outlined",
            sx: sx.button,
            startIcon: /*#__PURE__*/ _react.default.createElement(
              _reactFeather.Download,
              null
            ),
            onClick: handleDownloadClick,
          },
          "Download"
        )
      ),
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.root,
      },
      /*#__PURE__*/ _react.default.createElement("video", {
        src: src,
        controls: true,
        muted: true,
        autoPlay: true,
        sx: sx.video,
      })
    )
  );
};
var _default = VideoModal;
exports.default = _default;
var sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
  },
  video: {
    width: "100%",
    height: "auto",
    maxHeight: "calc(100vh - 150px)",
  },
  button: {
    color: "text.secondary",
  },
};
