"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["xs", "sm", "md", "lg", "xl"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
var GridViewSkeleton = function GridViewSkeleton(_ref) {
  var _ref$xs = _ref.xs,
    xs = _ref$xs === void 0 ? 12 : _ref$xs,
    _ref$sm = _ref.sm,
    sm = _ref$sm === void 0 ? 6 : _ref$sm,
    _ref$md = _ref.md,
    md = _ref$md === void 0 ? 4 : _ref$md,
    _ref$lg = _ref.lg,
    lg = _ref$lg === void 0 ? 3 : _ref$lg,
    _ref$xl = _ref.xl,
    xl = _ref$xl === void 0 ? 2 : _ref$xl,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.Grid,
    {
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Card,
      {
        elevation: 0,
        sx: sx.root,
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.CardActionArea,
        null,
        /*#__PURE__*/ _react.default.createElement(_material.Skeleton, {
          variant: "rectangular",
          width: "100%",
          height: 140,
        }),
        /*#__PURE__*/ _react.default.createElement(
          _material.CardContent,
          null,
          /*#__PURE__*/ _react.default.createElement(_material.Skeleton, {
            height: 20,
            width: "60%",
          }),
          /*#__PURE__*/ _react.default.createElement(_material.Skeleton, {
            height: 20,
            width: "80%",
          })
        )
      )
    )
  );
};
var _default = GridViewSkeleton;
exports.default = _default;
var sx = {
  root: {},
};
