"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var SwitchInput = function SwitchInput(_ref) {
  var name = _ref.name,
    value = _ref.value,
    label = _ref.label,
    placeholder = _ref.placeholder,
    handleChange = _ref.handleChange;
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _material.Typography,
        {
          variant: "caption",
          color: "textSecondary",
        },
        label
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.input,
      },
      /*#__PURE__*/ _react.default.createElement(_material.FormControlLabel, {
        control: /*#__PURE__*/ _react.default.createElement(_material.Switch, {
          name: name,
          checked: value,
          onChange: handleChange,
          value: "true",
        }),
        label: /*#__PURE__*/ _react.default.createElement(
          _material.Typography,
          {
            variant: "body1",
            color: "textSecondary",
          },
          placeholder
        ),
      })
    )
  );
};
var _default = SwitchInput;
exports.default = _default;
var sx = {
  input: {
    display: "flex",
    direction: "column",
    borderRadius: 4,
    pt: 0.5,
    pr: 2,
    pb: 0.5,
    pl: 2,
    backgroundColor: "common.white",
    border: function border(theme) {
      return "1px solid ".concat(theme.palette.common.inputBorder);
    },
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    fontSize: 15,
    "&:focus": {
      boxShadow: "".concat(
        (0, _material.alpha)("#999999", 0.25),
        " 0 0 0 0.2rem"
      ),
      borderColor: "primary.light",
    },
  },
};
