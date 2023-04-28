"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _excluded = ["children", "hover", "selected", "handleClick"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
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
var DataTableRow = function DataTableRow(_ref) {
  var children = _ref.children,
    _ref$hover = _ref.hover,
    hover = _ref$hover === void 0 ? false : _ref$hover,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    handleClick = _ref.handleClick,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _TableRow.default,
    _extends(
      {
        hover: hover,
        sx: sx.root,
        selected: selected,
        onClick: handleClick && handleClick,
      },
      props
    ),
    children
  );
};
var _default = DataTableRow;
exports.default = _default;
var sx = {
  root: {
    "&.MuiTableRow-hover:hover": {
      backgroundColor: function backgroundColor(theme) {
        return theme.palette.common.highlight;
      },
    },
    borderBottom: function borderBottom(theme) {
      return "1px solid ".concat(theme.palette.common.border);
    },
  },
};
