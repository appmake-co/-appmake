"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _reactWaypoint = require("react-waypoint");
var _iconsMaterial = require("@mui/icons-material");
var _excluded = [
  "loading",
  "enableInfiniteLoad",
  "enableLoadMore",
  "page",
  "perPage",
  "numPages",
  "loadMore",
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
var LoadMore = function LoadMore(_ref) {
  var loading = _ref.loading,
    _ref$enableInfiniteLo = _ref.enableInfiniteLoad,
    enableInfiniteLoad =
      _ref$enableInfiniteLo === void 0 ? true : _ref$enableInfiniteLo,
    _ref$enableLoadMore = _ref.enableLoadMore,
    enableLoadMore =
      _ref$enableLoadMore === void 0 ? false : _ref$enableLoadMore,
    _ref$page = _ref.page,
    page = _ref$page === void 0 ? 1 : _ref$page,
    _ref$perPage = _ref.perPage,
    perPage = _ref$perPage === void 0 ? 20 : _ref$perPage,
    _ref$numPages = _ref.numPages,
    numPages = _ref$numPages === void 0 ? 1 : _ref$numPages,
    loadMore = _ref.loadMore,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.root,
    },
    page < numPages &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        enableInfiniteLoad &&
          /*#__PURE__*/ _react.default.createElement(_reactWaypoint.Waypoint, {
            onEnter: loadMore,
          }),
        enableLoadMore &&
          /*#__PURE__*/ _react.default.createElement(
            _material.Box,
            {
              sx: sx.loadMore,
            },
            /*#__PURE__*/ _react.default.createElement(
              _material.Button,
              {
                onClick: loadMore,
                endIcon: /*#__PURE__*/ _react.default.createElement(
                  _iconsMaterial.ExpandMore,
                  null
                ),
              },
              "Load More"
            )
          )
      )
  );
};
var _default = LoadMore;
exports.default = _default;
var sx = {
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
