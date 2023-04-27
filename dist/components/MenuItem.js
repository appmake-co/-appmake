"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _router = require("next/router");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MenuItem = function MenuItem(_ref) {
  var _router$query;
  var handleClick = _ref.handleClick,
    value = _ref.value,
    label = _ref.label,
    active = _ref.active,
    Icon = _ref.icon;
  var router = (0, _router.useRouter)();
  return /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    button: true,
    active: active === value,
    onClick: function onClick() {
      return handleClick(value);
    },
    sx: _objectSpread(_objectSpread({}, sx.listItem), ((_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.pathname) === value && sx.active),
    key: value
  }, Icon && /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(Icon, null)), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: label
  }));
};
var _default = MenuItem;
exports.default = _default;
var sx = {
  root: {
    overflowY: "scroll",
    backgroundColor: "common.white"
  },
  toolbar: {
    py: 2,
    px: 3
  },
  active: {
    borderLeft: function borderLeft(theme) {
      return "5px solid ".concat(theme.palette.primary.main);
    },
    fontWeight: function fontWeight(theme) {
      return theme.typography.fontWeightMedium;
    },
    color: "primary.main",
    "& $menuIcon": {
      color: "background.main"
    }
  }
};