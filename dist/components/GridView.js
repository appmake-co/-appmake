"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../index");
var _excluded = [
  "url",
  "defaultQuery",
  "enableSearch",
  "enableInfiniteLoad",
  "enableLoadMore",
  "spacing",
  "numSkeletons",
  "renderItem",
  "renderSkeleton",
];
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
var handleRenderItem = function handleRenderItem(item, i) {
  return /*#__PURE__*/ _react.default.createElement(_index.GridViewItem, {
    key: i,
    item: item,
  });
};
var handleRenderSkeleton = function handleRenderSkeleton(_, i) {
  return /*#__PURE__*/ _react.default.createElement(_index.GridViewSkeleton, {
    key: i,
  });
};
var GridView = function GridView(_ref) {
  var url = _ref.url,
    _ref$defaultQuery = _ref.defaultQuery,
    defaultQuery = _ref$defaultQuery === void 0 ? {} : _ref$defaultQuery,
    _ref$enableSearch = _ref.enableSearch,
    enableSearch = _ref$enableSearch === void 0 ? true : _ref$enableSearch,
    _ref$enableInfiniteLo = _ref.enableInfiniteLoad,
    enableInfiniteLoad =
      _ref$enableInfiniteLo === void 0 ? false : _ref$enableInfiniteLo,
    _ref$enableLoadMore = _ref.enableLoadMore,
    enableLoadMore =
      _ref$enableLoadMore === void 0 ? true : _ref$enableLoadMore,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
    _ref$numSkeletons = _ref.numSkeletons,
    numSkeletons = _ref$numSkeletons === void 0 ? 3 : _ref$numSkeletons,
    _ref$renderItem = _ref.renderItem,
    renderItem =
      _ref$renderItem === void 0 ? handleRenderItem : _ref$renderItem,
    _ref$renderSkeleton = _ref.renderSkeleton,
    renderSkeleton =
      _ref$renderSkeleton === void 0
        ? handleRenderSkeleton
        : _ref$renderSkeleton,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(_index.FindManyList, {
    url: url,
    spacing: spacing,
    variant: "grid",
    defaultQuery: defaultQuery,
    renderItem: renderItem,
    renderSkeleton: renderSkeleton,
    enableSearch: enableSearch,
    enableInfiniteLoad: enableInfiniteLoad,
    enableLoadMore: enableLoadMore,
    numSkeletons: numSkeletons,
  });
};
var _default = GridView;
exports.default = _default;
