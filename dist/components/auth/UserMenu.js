"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _excluded = ["open", "anchorEl", "toggleMenu", "handleClick", "handleLogoutClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var UserMenu = function UserMenu(_ref) {
  var open = _ref.open,
    anchorEl = _ref.anchorEl,
    toggleMenu = _ref.toggleMenu,
    handleClick = _ref.handleClick,
    handleLogoutClick = _ref.handleLogoutClick,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_material.Menu, {
    open: open,
    onClose: toggleMenu,
    anchorEl: anchorEl
  }, /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    onClick: handleClick
  }, "My Account"), /*#__PURE__*/_react.default.createElement(_material.MenuItem, {
    onClick: handleLogoutClick
  }, /*#__PURE__*/_react.default.createElement(_material.Badge, {
    color: "success",
    variant: "dot",
    classes: {
      dot: sx.badgeOnline
    },
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    }
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    mx: 1
  })), "Sign Out"));
};
var _default = UserMenu;
exports.default = _default;
var sx = {
  badgeOnline: {
    height: 10,
    width: 10
  }
};