"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ListViewSkeleton = function ListViewSkeleton(_ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react.default.createElement(_material.ListItem, {
    disableGutters: true,
    sx: sx.root
  }, /*#__PURE__*/_react.default.createElement(_material.ListItemIcon, null, /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
    variant: "rectangular",
    width: 100,
    height: 100,
    sx: sx.skeletonImage
  })), /*#__PURE__*/_react.default.createElement(_material.ListItemText, {
    primary: /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
      height: 20,
      width: 120
    }),
    secondary: /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
      height: 20,
      width: 180
    })
  }));
};
var _default = ListViewSkeleton;
exports.default = _default;
var sx = {
  skeletonImage: {
    marginRight: "10px"
  }
};