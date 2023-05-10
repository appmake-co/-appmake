"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var IconLoader = function IconLoader(_ref) {
  var _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading;
  return loading ? /*#__PURE__*/_react.default.createElement(_material.CircularProgress, {
    disableShrink: true,
    size: 20,
    sx: sx.root
  }) : null;
};
var _default = IconLoader;
exports.default = _default;
var sx = {
  root: {
    color: 'common.white'
  }
};