"use strict";

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
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _image = _interopRequireDefault(require("next/image"));
var _excluded = ["item", "handleClick", "selected", "height", "width"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var ListViewItem = function ListViewItem(_ref) {
  var item = _ref.item,
    handleClick = _ref.handleClick,
    selected = _ref.selected,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 100 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 100 : _ref$width,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.ListItem,
    {
      disableGutters: true,
      sx: _objectSpread(_objectSpread({}, sx.root), selected && sx.selected),
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.ListItemButton,
      {
        onClick: handleClick
          ? function () {
              return handleClick(item);
            }
          : null,
      },
      (item === null || item === void 0 ? void 0 : item.primary_image) &&
        /*#__PURE__*/ _react.default.createElement(
          _material.ListItemIcon,
          null,
          /*#__PURE__*/ _react.default.createElement(_image.default, {
            style: sx.image,
            src: item === null || item === void 0 ? void 0 : item.primary_image,
            alt: item === null || item === void 0 ? void 0 : item.primary_text,
            width: height,
            height: width,
          })
        ),
      (item === null || item === void 0 ? void 0 : item.primary_text) &&
        /*#__PURE__*/ _react.default.createElement(_material.ListItemText, {
          primary:
            item === null || item === void 0 ? void 0 : item.primary_text,
          secondary:
            item === null || item === void 0 ? void 0 : item.secondary_text,
        })
    )
  );
};
var _default = ListViewItem;
exports.default = _default;
var sx = {
  root: {},
  selected: {
    border: "1px solid",
    borderColor: "common.border",
  },
  image: {
    marginRight: "10px",
    objectFit: "contain",
  },
};
