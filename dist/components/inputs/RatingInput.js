"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Rating = _interopRequireDefault(require("@mui/material/Rating"));
var _excluded = ["label", "value", "name", "handleChange", "readOnly", "size"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RatingInput = function RatingInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    name = _ref.name,
    handleChange = _ref.handleChange,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);
  var onChange = function onChange(event, value) {
    handleChange({
      target: {
        name: name,
        value: value
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, label && /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "caption",
    color: "primary"
  }, label), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.input
  }, /*#__PURE__*/_react.default.createElement(_Rating.default, {
    name: name,
    readOnly: readOnly,
    sx: sx.rating,
    onChange: onChange,
    size: size,
    value: parseInt(value)
  })));
};
var _default = RatingInput;
exports.default = _default;
var sx = {
  input: {
    pt: 1,
    pr: 2,
    pb: 0.5,
    pl: 2,
    backgroundColor: "common.white",
    borderRadius: 4,
    border: function border(theme) {
      return "1px solid ".concat(theme.palette.common.inputBorder);
    },
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    fontSize: 15,
    "&:focus": {
      boxShadow: "".concat((0, _material.alpha)("#999999", 0.25), " 0 0 0 0.2rem"),
      borderColor: "primary.light"
    }
  },
  rating: {
    color: "primary.main"
  }
};