"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var FilterButton = function FilterButton(_ref) {
  var loading = _ref.loading,
    query = _ref.query,
    _ref$badgeCount = _ref.badgeCount,
    badgeCount = _ref$badgeCount === void 0 ? 0 : _ref$badgeCount,
    handleFilter = _ref.handleFilter,
    handleClearFilters = _ref.handleClearFilters;
  var keywords = query.keywords,
    filters = query.filters;
  return /*#__PURE__*/ _react.default.createElement(
    _material.Badge,
    {
      sx: sx.badge,
      badgeContent: badgeCount,
      color: "primary",
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.ButtonGroup,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _material.Button,
        {
          variant: "outlined",
          sx: sx.button,
          startIcon: loading
            ? /*#__PURE__*/ _react.default.createElement(
                _material.CircularProgress,
                {
                  disableShrink: true,
                  color: "primary",
                  size: 20,
                }
              )
            : /*#__PURE__*/ _react.default.createElement(
                _iconsMaterial.FilterList,
                {
                  sx: sx.icon,
                }
              ),
          onClick: handleFilter,
        },
        "Filters"
      ),
      (keywords ||
        (filters === null || filters === void 0 ? void 0 : filters.length) >
          0) &&
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            variant: "outlined",
            sx: sx.secondaryButton,
            onClick: handleClearFilters,
          },
          /*#__PURE__*/ _react.default.createElement(_iconsMaterial.Clear, {
            sx: sx.icon,
          })
        )
    )
  );
};
var _default = FilterButton;
exports.default = _default;
var sx = {
  button: {
    ml: 1,
    color: "text.secondary",
  },
  secondaryButton: {
    height: 34,
    width: 34,
    color: "text.secondary",
  },
  icon: {
    height: 20,
    width: 20,
    color: "text.secondary",
  },
};
