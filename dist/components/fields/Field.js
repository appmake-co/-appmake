"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../../index");
var _excluded = ["variant", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Field = function Field(_ref) {
  var variant = _ref.variant,
    value = _ref.value,
    params = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, variant === 'boolean' && /*#__PURE__*/_react.default.createElement(_index.FieldBoolean, {
    value: value
  }), variant === 'date' && /*#__PURE__*/_react.default.createElement(_index.FieldDate, {
    value: value
  }), variant === 'datetime' && /*#__PURE__*/_react.default.createElement(_index.FieldDate, {
    value: value
  }), variant === 'image' && /*#__PURE__*/_react.default.createElement(_index.FieldImage, {
    value: value === null || value === void 0 ? void 0 : value.url
  }), variant === 'video' && /*#__PURE__*/_react.default.createElement(_index.FieldVideo, {
    value: value
  }), variant === 'json' && /*#__PURE__*/_react.default.createElement(_index.FieldJSON, {
    value: value
  }), variant === 'link' && /*#__PURE__*/_react.default.createElement(_index.FieldLink, {
    value: value
  }), variant === 'rating' && /*#__PURE__*/_react.default.createElement(_index.FieldRating, {
    value: value
  }), variant === 'paragraph' && /*#__PURE__*/_react.default.createElement(_index.FieldParagraph, {
    value: value
  }), variant === 'text' && /*#__PURE__*/_react.default.createElement(_index.FieldText, {
    value: value,
    variant: "body1"
  }), variant === 'tags' && /*#__PURE__*/_react.default.createElement(_index.FieldArray, {
    value: value
  }));
};
var _default = Field;
exports.default = _default;
var sx = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};