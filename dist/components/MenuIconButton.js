"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _index = require("../index");
var _excluded = ["children", "size"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MenuIconButton = function MenuIconButton(_ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "small" : _ref$size,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useMenu = (0, _index.useMenu)(),
    open = _useMenu.open,
    anchorEl = _useMenu.anchorEl,
    closeMenu = _useMenu.closeMenu,
    toggleMenu = _useMenu.toggleMenu;

  // Ensure menu closes after click
  var handleDefaultClick = function handleDefaultClick(e) {
    if (open) closeMenu();
  };
  return /*#__PURE__*/_react.default.createElement(_material.Box, {
    onClick: handleDefaultClick
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
    size: size,
    onClick: toggleMenu
  }, /*#__PURE__*/_react.default.createElement(_iconsMaterial.MoreHoriz, null)), /*#__PURE__*/_react.default.createElement(_material.Menu, {
    open: open,
    anchorEl: anchorEl,
    onClose: closeMenu
  }, children));
};
var _default = MenuIconButton;
exports.default = _default;