"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index");
var _material = require("@mui/material");
var _excluded = ["url", "variant", "defaultQuery", "renderItem", "renderSkeleton", "enableSearch", "enableInfiniteLoad", "enableLoadMore", "spacing", "numSkeletons"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DEFAULT_QUERY = {
  page: 1,
  perPage: 20
};
var FindManyList = function FindManyList(_ref) {
  var url = _ref.url,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "list" : _ref$variant,
    _ref$defaultQuery = _ref.defaultQuery,
    defaultQuery = _ref$defaultQuery === void 0 ? DEFAULT_QUERY : _ref$defaultQuery,
    renderItem = _ref.renderItem,
    renderSkeleton = _ref.renderSkeleton,
    _ref$enableSearch = _ref.enableSearch,
    enableSearch = _ref$enableSearch === void 0 ? true : _ref$enableSearch,
    _ref$enableInfiniteLo = _ref.enableInfiniteLoad,
    enableInfiniteLoad = _ref$enableInfiniteLo === void 0 ? false : _ref$enableInfiniteLo,
    _ref$enableLoadMore = _ref.enableLoadMore,
    enableLoadMore = _ref$enableLoadMore === void 0 ? true : _ref$enableLoadMore,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
    _ref$numSkeletons = _ref.numSkeletons,
    numSkeletons = _ref$numSkeletons === void 0 ? 4 : _ref$numSkeletons,
    props = _objectWithoutProperties(_ref, _excluded);
  var skeletons = new Array(numSkeletons).fill(0);
  var _useResource = (0, _index.useResource)({
      url: url,
      defaultQuery: defaultQuery
    }),
    loading = _useResource.loading,
    findMany = _useResource.findMany,
    resources = _useResource.resources,
    query = _useResource.query,
    page = _useResource.page,
    perPage = _useResource.perPage,
    numPages = _useResource.numPages,
    loadMore = _useResource.loadMore;
  var handleSearch = function handleSearch(keywords) {
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      keywords: keywords,
      page: 1
    }));
  };
  (0, _react.useEffect)(function () {
    if (defaultQuery) {
      findMany(defaultQuery);
    }
  }, [defaultQuery]);
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.root
  }, enableSearch && /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.searchInput
  }, /*#__PURE__*/_react.default.createElement(_index.SearchInput, {
    handleSearch: handleSearch
  })), variant == "carousel" && /*#__PURE__*/_react.default.createElement(_index.Carousel, null, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)), variant == "list" && /*#__PURE__*/_react.default.createElement(_material.List, {
    disablePadding: true
  }, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)), variant == "grid" && /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: spacing
  }, resources && resources.map(renderItem), loading && skeletons.map(renderSkeleton)), /*#__PURE__*/_react.default.createElement(_index.LoadMore, {
    loading: loading,
    page: page,
    perPage: perPage,
    numPages: numPages,
    loadMore: loadMore,
    enableInfiniteLoad: enableInfiniteLoad,
    enableLoadMore: enableLoadMore
  }));
};
var _default = FindManyList;
exports.default = _default;
var sx = {
  root: {},
  searchInput: {
    mb: 2
  }
};