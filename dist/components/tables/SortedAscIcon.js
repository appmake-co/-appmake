"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _iconsMaterial = require("@mui/icons-material");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var AppmakeSortedAscendingIcon = function AppmakeSortedAscendingIcon() {
  return /*#__PURE__*/ _react.default.createElement(_iconsMaterial.ExpandLess, {
    sx: sx.sortIcon,
  });
};
var _default = AppmakeSortedAscendingIcon;
exports.default = _default;
var sx = {
  sortIcon: {
    color: "text.secondary",
  },
};
