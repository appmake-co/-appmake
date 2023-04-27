"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMultiCarousel = _interopRequireDefault(require("react-multi-carousel"));
var _material = require("@mui/material");
var _index = require("../../index");
var _constants = require("../../lib/constants");
var _CarouselDot = _interopRequireDefault(require("./CarouselDot"));
var _excluded = ["children", "arrows", "responsive"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ReactCarousel = function ReactCarousel(_ref) {
  var children = _ref.children,
    _ref$arrows = _ref.arrows,
    arrows = _ref$arrows === void 0 ? false : _ref$arrows,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? _constants.CAROUSEL_RESPONSIVE : _ref$responsive,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useResponsive = (0, _index.useResponsive)(),
    isMobile = _useResponsive.isMobile;
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: sx.carousel
  }, (children === null || children === void 0 ? void 0 : children.length) > 0 ? /*#__PURE__*/_react.default.createElement(_reactMultiCarousel.default, {
    responsive: responsive,
    swipeable: true,
    draggable: true,
    infinite: true,
    autoPlay: true,
    arrows: arrows,
    showDots: true,
    customDot: /*#__PURE__*/_react.default.createElement(_CarouselDot.default, null)
  }, children) : null);
};
var _default = ReactCarousel;
exports.default = _default;
var sx = {
  carousel: {
    py: 5,
    px: {
      xs: 0,
      sm: 2
    }
  }
};