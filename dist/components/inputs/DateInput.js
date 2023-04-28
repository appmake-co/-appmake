"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _moment = _interopRequireDefault(require("moment"));
var _index = require("../../index");
var _excluded = [
  "required",
  "label",
  "name",
  "value",
  "handleChange",
  "placeholder",
  "onKeyPress",
  "errors",
  "helperText",
];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var DateInput = function DateInput(_ref) {
  var required = _ref.required,
    label = _ref.label,
    name = _ref.name,
    value = _ref.value,
    handleChange = _ref.handleChange,
    placeholder = _ref.placeholder,
    onKeyPress = _ref.onKeyPress,
    errors = _ref.errors,
    helperText = _ref.helperText,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useServerSideError = (0, _index.useServerSideError)({
      errors: errors,
      name: name,
    }),
    error = _useServerSideError.error,
    clearError = _useServerSideError.clearError;
  var handleInputChange = function handleInputChange(ev) {
    clearError();
    handleChange(ev);
  };
  var selectedDate = (0, _moment.default)(value).format("yyyy-MM-DD");
  return /*#__PURE__*/ _react.default.createElement(
    _material.FormControl,
    {
      fullWidth: true,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Typography,
      {
        variant: "body2",
        color: "textSecondary",
      },
      label
    ),
    /*#__PURE__*/ _react.default.createElement(_material.TextField, {
      autoComplete: "off",
      fullWidth: true,
      type: "date",
      name: name,
      placeholder: placeholder,
      margin: "dense",
      onKeyPress: onKeyPress,
      variant: "outlined",
      onChange: handleInputChange,
      value: selectedDate,
      error: error,
      helperText: helperText || error,
    })
  );
};
var _default = DateInput;
exports.default = _default;
