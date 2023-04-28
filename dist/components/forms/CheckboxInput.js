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
var _excluded = [
  "name",
  "value",
  "placeholder",
  "label",
  "handleChange",
  "disableBorder",
];
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
var CheckboxInput = function CheckboxInput(_ref) {
  var name = _ref.name,
    value = _ref.value,
    placeholder = _ref.placeholder,
    label = _ref.label,
    handleChange = _ref.handleChange,
    _ref$disableBorder = _ref.disableBorder,
    disableBorder = _ref$disableBorder === void 0 ? false : _ref$disableBorder,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _material.Typography,
      {
        variant: "caption",
        color: "textSecondary",
      },
      label
    ),
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: _objectSpread(
          _objectSpread({}, sx.input),
          !disableBorder && sx.border
        ),
      },
      /*#__PURE__*/ _react.default.createElement(_material.FormControlLabel, {
        control: /*#__PURE__*/ _react.default.createElement(
          _material.Checkbox,
          {
            name: name,
            checked: value === true ? true : false,
            onChange: handleChange,
            value: "true",
          }
        ),
        label: /*#__PURE__*/ _react.default.createElement(
          _material.Typography,
          {
            variant: "body2",
            color: "textSecondary",
          },
          placeholder
        ),
      })
    )
  );
};
var _default = CheckboxInput;
exports.default = _default;
var sx = {
  input: {
    display: "flex",
    direction: "column",
    fontSize: 15,
  },
  border: {
    backgroundColor: "common.white",
    border: function border(theme) {
      return "1px solid ".concat(theme.palette.common.inputBorder);
    },
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    pt: 0.5,
    pr: 2,
    pb: 0.5,
    pl: 2,
    borderRadius: 4,
  },
};
