"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../index");
var _reactFeather = require("react-feather");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var AlertModal = function AlertModal(_ref) {
  var open = _ref.open,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? "Are you sure?" : _ref$title,
    _ref$subtitle = _ref.subtitle,
    subtitle =
      _ref$subtitle === void 0 ? "Please confirm or cancel" : _ref$subtitle,
    handleCloseClick = _ref.handleCloseClick,
    handleConfirmClick = _ref.handleConfirmClick;
  return /*#__PURE__*/ _react.default.createElement(
    _index.Modal,
    {
      open: open,
      buttons: /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            variant: "outlined",
            color: "primary",
            onClick: handleConfirmClick,
          },
          "Confirm"
        ),
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            variant: "outlined",
            color: "primary",
            onClick: handleCloseClick,
          },
          "Cancel"
        )
      ),
      handleClose: handleCloseClick,
    },
    /*#__PURE__*/ _react.default.createElement(_index.Placeholder, {
      icon: _reactFeather.Bell,
      title: title,
      description: subtitle,
    })
  );
};
var _default = AlertModal;
exports.default = _default;
var sx = {
  icon: {
    color: "secondary.main",
    height: 32,
    width: 32,
  },
};
