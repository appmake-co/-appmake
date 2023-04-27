"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = require("../../index");
var _excluded = ["variant"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FormInput = function FormInput(_ref) {
  var variant = _ref.variant,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, variant === "array" && /*#__PURE__*/React.createElement(_index.ArrayInput, props), variant === "text" && /*#__PURE__*/React.createElement(_index.TextInput, props), variant === "link" && /*#__PURE__*/React.createElement(_index.TextInput, props), variant === "html" && /*#__PURE__*/React.createElement(_index.TextInput, _extends({
    multiline: true,
    rows: 6
  }, props)), variant === "paragraph" && /*#__PURE__*/React.createElement(_index.TextInput, _extends({
    multiline: true,
    rows: 6
  }, props)), variant === "password" && /*#__PURE__*/React.createElement(_index.TextInput, _extends({
    type: "password"
  }, props)), variant === "email" && /*#__PURE__*/React.createElement(_index.TextInput, props), variant === "number" && /*#__PURE__*/React.createElement(_index.TextInput, props), variant === "date" && /*#__PURE__*/React.createElement(_index.DateInput, props), variant === "checkbox" && /*#__PURE__*/React.createElement(_index.CheckboxInput, props), variant === "boolean" && /*#__PURE__*/React.createElement(_index.SwitchInput, props), variant === "enumerable" && /*#__PURE__*/React.createElement(_index.SelectInput, props), variant === "rating" && /*#__PURE__*/React.createElement(_index.RatingInput, props), variant === "file" && /*#__PURE__*/React.createElement(_index.FileInput, props), variant === "image" && /*#__PURE__*/React.createElement(_index.ImageInput, props), variant === "video" && /*#__PURE__*/React.createElement(_index.FileInput, props), variant === "json" && /*#__PURE__*/React.createElement(_index.JSONInput, props));
};
var _default = FormInput;
exports.default = _default;