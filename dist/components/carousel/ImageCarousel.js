"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Carousel = _interopRequireDefault(require("./Carousel"));
var _constants = require("../../lib/constants");
var _excluded = ["children", "arrows", "showDots", "responsive"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ImageCarousel = function ImageCarousel(_ref) {
  var children = _ref.children,
    _ref$arrows = _ref.arrows,
    arrows = _ref$arrows === void 0 ? true : _ref$arrows,
    _ref$showDots = _ref.showDots,
    showDots = _ref$showDots === void 0 ? false : _ref$showDots,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? _constants.CAROUSEL_RESPONSIVE : _ref$responsive,
    props = _objectWithoutProperties(_ref, _excluded);
  p;
  return /*#__PURE__*/_react.default.createElement(_Carousel.default, _extends({
    responsive: responsive,
    arrows: arrows,
    showDots: showDots
  }, props), children);
};
var _default = ImageCarousel;
exports.default = _default;