"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var SortableListItem = function SortableListItem(_ref) {
  var item = _ref.item,
    isDragging = _ref.isDragging,
    className = _ref.className,
    dragIconClassName = _ref.dragIconClassName;
  return /*#__PURE__*/ _react.default.createElement(
    _material.ListItem,
    {
      disableGutters: true,
      className: clsx(
        classes.item,
        className,
        _defineProperty({}, classes.isDragging, isDragging)
      ),
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.ListItemIcon,
      null,
      /*#__PURE__*/ _react.default.createElement(_iconsMaterial.DragIndicator, {
        className: clsx(classes.icon, dragIconClassName),
      })
    ),
    /*#__PURE__*/ _react.default.createElement(_material.ListItemText, {
      primary: item === null || item === void 0 ? void 0 : item.primary,
      seconeary: item === null || item === void 0 ? void 0 : item.secondary,
    })
  );
};
var _default = SortableListItem;
exports.default = _default;
var sx = {
  item: {},
  icon: {
    color: "text.secondary",
  },
  isDragging: {},
};
