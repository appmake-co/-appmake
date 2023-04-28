"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _head = _interopRequireDefault(require("next/head"));
var _excluded = ["title", "description", "keywords", "src"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Meta = function Meta(_ref) {
  var title = _ref.title,
    description = _ref.description,
    keywords = _ref.keywords,
    src = _ref.src,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "keywords",
    content: keywords
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:image",
    content: src
  }));
};
var _default = Meta;
exports.default = _default;