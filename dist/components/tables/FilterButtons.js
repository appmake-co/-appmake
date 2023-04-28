"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../../index");
var _iconsMaterial = require("@mui/icons-material");
var _reactFeather = require("react-feather");
var _excluded = ["handleSearch", "handleAddFilter", "handleClearFilters"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FilterButtons = function FilterButtons(_ref) {
  var handleSearch = _ref.handleSearch,
    handleAddFilter = _ref.handleAddFilter,
    handleClearFilters = _ref.handleClearFilters,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.FilterInput, null, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.input
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "outlined",
    startIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.Plus, null),
    onClick: handleAddFilter,
    sx: sx.addFilterButton
  }, "Filter"))), /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: sx.button,
    startIcon: /*#__PURE__*/_react.default.createElement(_reactFeather.Search, null),
    onClick: handleSearch,
    fullWidth: true,
    variant: "contained",
    color: "primary"
  }, "Search"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    sx: sx.button,
    startIcon: /*#__PURE__*/_react.default.createElement(_iconsMaterial.FilterList, null),
    onClick: handleClearFilters,
    fullWidth: true,
    variant: "outlined",
    color: "primary"
  }, "Reset filters"));
};
var _default = FilterButtons;
exports.default = _default;
var sx = {
  button: {
    mt: 2
  },
  addFilterButton: {
    maxWidth: "160px",
    width: {
      sm: "100%"
    }
  },
  icon: {
    height: "20px",
    width: "20px",
    color: "icon"
  }
};