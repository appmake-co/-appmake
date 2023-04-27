"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["label", "name", "value", "options", "handleChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RadioInput = function RadioInput(_ref) {
  var label = _ref.label,
    name = _ref.name,
    value = _ref.value,
    options = _ref.options,
    handleChange = _ref.handleChange,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.FormControl, {
    fullWidth: true,
    component: "fieldset"
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    gutterBottom: true
  }, label), /*#__PURE__*/_react.default.createElement(_material.RadioGroup, {
    name: name,
    value: String(value),
    onChange: handleChange
  }, options && options.map(function (option, idx) {
    return /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
      key: idx,
      value: String(option.value),
      control: /*#__PURE__*/_react.default.createElement(_material.Radio, null),
      label: /*#__PURE__*/_react.default.createElement(_material.Typography, {
        variant: "body2"
      }, option.label)
    });
  })));
};
var _default = RadioInput;
exports.default = _default;