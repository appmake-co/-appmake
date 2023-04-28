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
var _index = require("../index");
var _excluded = ["item", "handleClick", "objectFit", "actions"];
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
var CarouselViewItem = function CarouselViewItem(_ref) {
  var item = _ref.item,
    handleClick = _ref.handleClick,
    _ref$objectFit = _ref.objectFit,
    objectFit = _ref$objectFit === void 0 ? "contain" : _ref$objectFit,
    actions = _ref.actions,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useClickOrDrag = (0, _index.useClickOrDrag)({
      onClick: handleClick,
    }),
    onMouseUp = _useClickOrDrag.onMouseUp,
    onMouseDown = _useClickOrDrag.onMouseDown;
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.root,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Card,
      {
        elevation: 0,
        sx: _objectSpread({}, sx.card),
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.CardActionArea,
        {
          disableRipple: true,
          onMouseUp: onMouseUp,
          onMouseDown: onMouseDown,
        },
        /*#__PURE__*/ _react.default.createElement(_material.CardMedia, {
          component: "img",
          height: "140",
          image: item.primary_image,
          alt: item.primary_text,
          sx: {
            objectFit: objectFit,
          },
        }),
        /*#__PURE__*/ _react.default.createElement(
          _material.CardContent,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _material.Typography,
            {
              variant: "body1",
            },
            item.primary_text
          ),
          /*#__PURE__*/ _react.default.createElement(
            _material.Typography,
            {
              variant: "body2",
            },
            item.secondary_text
          )
        )
      ),
      actions &&
        /*#__PURE__*/ _react.default.createElement(
          _material.CardActions,
          null,
          actions
        )
    )
  );
};
var _default = CarouselViewItem;
exports.default = _default;
var sx = {
  root: {
    p: 2,
  },
  card: {},
};
