"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
var _material = require("@mui/material");
var _constants = require("../../lib/constants");
var _excluded = ["query", "fields", "handleChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FilterSortInput = function FilterSortInput(_ref) {
  var _ref$query = _ref.query,
    query = _ref$query === void 0 ? {} : _ref$query,
    fields = _ref.fields,
    handleChange = _ref.handleChange,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_index.FilterInput, {
    label: "Sort By"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.sort
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.inputSortBy
  }, /*#__PURE__*/_react.default.createElement(_index.Autosuggest, {
    name: "sort_by",
    options: fields === null || fields === void 0 ? void 0 : fields.map(function (field) {
      return {
        label: field.name,
        value: field.name
      };
    }),
    placeholder: "Sort field",
    value: (query === null || query === void 0 ? void 0 : query.sort_by) || "",
    onChange: handleChange
  })), /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.inputSortDirection
  }, /*#__PURE__*/_react.default.createElement(_index.Autosuggest, {
    name: "sort_direction",
    options: _constants.SORT_DIRECTIONS,
    placeholder: "Sort direction",
    value: (query === null || query === void 0 ? void 0 : query.sort_direction) || "",
    onChange: handleChange
  }))));
};
var _default = FilterSortInput;
exports.default = _default;
var sx = {
  sort: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  inputSortBy: {
    width: "100%",
    flexScale: 1,
    mr: 1
  },
  inputSortDirection: {
    width: "100%",
    flexScale: 1,
    mr: 0
  }
};