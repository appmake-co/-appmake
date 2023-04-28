"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var FilterModal = function FilterModal(_ref) {
  var open = _ref.open,
    query = _ref.query,
    fields = _ref.fields,
    handleClose = _ref.handleClose,
    handleSearch = _ref.handleSearch,
    handleChange = _ref.handleChange,
    onKeyPress = _ref.onKeyPress,
    handleClearFilters = _ref.handleClearFilters;
  return /*#__PURE__*/ _react.default.createElement(
    _index.Modal,
    {
      open: open,
      handleClose: handleClose,
      title: "Search",
      maxWidth: "md",
      sx: sx.drawer,
    },
    /*#__PURE__*/ _react.default.createElement(_index.FilterForm, {
      query: query,
      fields: fields,
      handleSearch: handleSearch,
      onKeyPress: onKeyPress,
      handleChange: handleChange,
      handleClearFilters: handleClearFilters,
    })
  );
};
var _default = FilterModal;
exports.default = _default;
var sx = {
  drawer: {
    zIndex: function zIndex(theme) {
      return theme.zIndex.modal;
    },
  },
};
