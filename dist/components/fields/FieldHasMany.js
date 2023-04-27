"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _components = require("components");
var _excluded = ["resources", "variant", "renderItem", "renderSkeleton", "spacing", "numSkeletons"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FieldHasMany = function FieldHasMany(_ref) {
  var resources = _ref.resources,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "list" : _ref$variant,
    renderItem = _ref.renderItem,
    renderSkeleton = _ref.renderSkeleton,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
    _ref$numSkeletons = _ref.numSkeletons,
    numSkeletons = _ref$numSkeletons === void 0 ? 4 : _ref$numSkeletons,
    props = _objectWithoutProperties(_ref, _excluded);
  var skeletons = new Array(numSkeletons).fill(0);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, variant == "carousel" && /*#__PURE__*/_react.default.createElement(_components.Carousel, null, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)), variant == "list" && /*#__PURE__*/_react.default.createElement(_material.List, {
    disablePadding: true
  }, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)), variant == "grid" && /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: spacing
  }, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)));
};
var _default = FieldHasMany;
exports.default = _default;
var sx = {
  root: {},
  searchInput: {
    mb: 2
  }
};