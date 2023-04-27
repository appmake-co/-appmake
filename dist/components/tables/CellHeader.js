"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _excluded = ["label", "value", "sortable", "sortDirection", "handleSortClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CellHeader = function CellHeader(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _ref$sortable = _ref.sortable,
    sortable = _ref$sortable === void 0 ? false : _ref$sortable,
    sortDirection = _ref.sortDirection,
    handleSortClick = _ref.handleSortClick,
    params = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: sortable && handleSortClick ? function () {
      return handleSortClick(value);
    } : null,
    endIcon: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sortable && sortDirection == "asc" && /*#__PURE__*/_react.default.createElement(_iconsMaterial.ExpandMore, {
      sx: sx.icon
    }), sortable && sortDirection == "desc" && /*#__PURE__*/_react.default.createElement(_iconsMaterial.ExpandLess, {
      sx: sx.icon
    }))
  }, label);
};
var _default = CellHeader;
exports.default = _default;
var sx = {
  root: {},
  button: {
    py: 0,
    px: 1,
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover $headerName": {
      color: "primary.main"
    },
    "&:hover $icon": {
      visibility: "visible"
    }
  },
  headerName: {
    textTransform: "none",
    fontWeight: 500,
    color: "text.primary"
  },
  icon: {
    visibility: "hidden",
    color: "primary.main",
    height: 20,
    width: 20
  },
  settingsIcon: {
    color: "text.secondary",
    ml: 0.5
  }
};