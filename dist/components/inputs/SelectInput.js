"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../../index");
var _excluded = ["label", "type", "variant", "name", "margin", "value", "options", "multiline", "rows", "handleChange", "placeholder", "disabled", "onKeyPress", "autoComplete", "startIcon", "endIcon", "loading", "size", "errors", "helperText", "styles"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TextInput = function TextInput(_ref) {
  var label = _ref.label,
    type = _ref.type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "outlined" : _ref$variant,
    name = _ref.name,
    margin = _ref.margin,
    value = _ref.value,
    options = _ref.options,
    multiline = _ref.multiline,
    rows = _ref.rows,
    handleChange = _ref.handleChange,
    placeholder = _ref.placeholder,
    disabled = _ref.disabled,
    onKeyPress = _ref.onKeyPress,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? "off" : _ref$autoComplete,
    startIcon = _ref.startIcon,
    endIcon = _ref.endIcon,
    loading = _ref.loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "normal" : _ref$size,
    errors = _ref.errors,
    helperText = _ref.helperText,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useServerSideError = (0, _index.useServerSideError)({
      errors: errors,
      name: name
    }),
    error = _useServerSideError.error,
    clearError = _useServerSideError.clearError;
  var handleInputChange = function handleInputChange(e) {
    if (error) clearError();
    handleChange(e);
  };
  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    fullWidth: true,
    sx: styles
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "caption",
    color: "textSecondary"
  }, label), /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({
    fullWidth: true,
    select: true,
    rows: rows,
    multiline: multiline,
    autoComplete: "off",
    type: type,
    name: name,
    margin: margin,
    disabled: disabled,
    placeholder: placeholder,
    onKeyPress: onKeyPress,
    onChange: handleInputChange,
    variant: variant,
    value: value || "",
    error: error,
    size: size,
    helperText: helperText || error,
    startAdornment: startIcon && /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
      position: "start"
    }, startIcon),
    endAdornment: endIcon && /*#__PURE__*/_react.default.createElement(_material.InputAdornment, {
      position: "end"
    }, endIcon)
  }, props), options === null || options === void 0 ? void 0 : options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
      key: option.value,
      value: option.value
    }, option.label);
  })));
};
var _default = TextInput;
exports.default = _default;