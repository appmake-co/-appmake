"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sx = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
var _material = require("@mui/material");
var _reactFeather = require("react-feather");
var _excluded = ["errors", "label", "name", "value", "placeholder", "handleChange", "multiple", "freeSolo", "helperText", "textFieldProps"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var CustomPopper = function CustomPopper(props) {
  return /*#__PURE__*/_react.default.createElement(_material.Popper, _extends({}, props, {
    sx: sx.popper,
    placement: "bottom"
  }));
};
var ArrayInput = function ArrayInput(_ref) {
  var errors = _ref.errors,
    label = _ref.label,
    name = _ref.name,
    value = _ref.value,
    placeholder = _ref.placeholder,
    handleChange = _ref.handleChange,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? true : _ref$multiple,
    _ref$freeSolo = _ref.freeSolo,
    freeSolo = _ref$freeSolo === void 0 ? true : _ref$freeSolo,
    helperText = _ref.helperText,
    _ref$textFieldProps = _ref.textFieldProps,
    textFieldProps = _ref$textFieldProps === void 0 ? {} : _ref$textFieldProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useServerSideError = (0, _index.useServerSideError)({
      errors: errors,
      name: name
    }),
    error = _useServerSideError.error,
    clearError = _useServerSideError.clearError;
  var handleInputChange = function handleInputChange(ev, values) {
    if (error) clearError();
    var newValues = values.filter(function (value) {
      return value != null;
    });
    handleChange({
      target: {
        name: name,
        value: newValues
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    fullWidth: true
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "overline",
    color: "textSecondary",
    sx: sx.label
  }, label), /*#__PURE__*/_react.default.createElement(_material.Autocomplete, _extends({
    multiple: multiple,
    freeSolo: freeSolo,
    hasClearIcon: false,
    defaultValue: Array.isArray(value) && value || undefined,
    onChange: handleInputChange,
    options: ["Enter value"],
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    PopperComponent: CustomPopper,
    clearIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.X, {
      size: 20
    }),
    renderTags: function renderTags(tagValue, getTagProps) {
      return Array.isArray(tagValue) && tagValue.map(function (option, index) {
        return /*#__PURE__*/_react.default.createElement(_material.Chip, _extends({
          key: index,
          label: option,
          color: "primary",
          variant: "outlined",
          deleteIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.X, {
            size: 20
          })
        }, getTagProps({
          index: index
        })));
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react.default.createElement(_material.TextField, _extends({}, params, {
        color: "primary",
        placeholder: placeholder,
        margin: "dense",
        error: error,
        helperText: helperText || error
      }, textFieldProps));
    }
  }, props)));
};
var _default = ArrayInput;
exports.default = _default;
var sx = {
  root: {},
  label: {
    mb: 0,
    pb: 0
  },
  popper: {
    fontWeight: function fontWeight(theme) {
      return theme.typography.body3.fontWeight;
    },
    fontFamily: function fontFamily(theme) {
      return theme.typography.body3.fontFamily;
    }
  }
};
exports.sx = sx;