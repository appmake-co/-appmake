"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _index = require("../index");
var _Autocomplete = _interopRequireDefault(
  require("@mui/material/Autocomplete")
);
var _excluded = [
  "errors",
  "value",
  "options",
  "label",
  "name",
  "placeholder",
  "multiselect",
  "onChange",
  "handleInputChange",
  "freeSolo",
  "className",
];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
        arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) &&
          (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r))
          return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
var Autosuggest = function Autosuggest(_ref) {
  var errors = _ref.errors,
    value = _ref.value,
    options = _ref.options,
    label = _ref.label,
    name = _ref.name,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Select" : _ref$placeholder,
    _ref$multiselect = _ref.multiselect,
    multiselect = _ref$multiselect === void 0 ? false : _ref$multiselect,
    onChange = _ref.onChange,
    handleInputChange = _ref.handleInputChange,
    _ref$freeSolo = _ref.freeSolo,
    freeSolo = _ref$freeSolo === void 0 ? false : _ref$freeSolo,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)({
      label: "",
      value: null,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var _useServerSideError = (0, _index.useServerSideError)({
      errors: errors,
      name: name,
    }),
    error = _useServerSideError.error,
    clearError = _useServerSideError.clearError;
  var handleOnChange = function handleOnChange(event, newValue) {
    if (error) clearError();
    setSelected(newValue);
    onChange({
      target: {
        name: name,
        value:
          newValue === null || newValue === void 0 ? void 0 : newValue.value,
      },
    });
  };
  (0, _react.useEffect)(
    function () {
      if (_typeof(value) != "object") {
        setSelected(
          options.find(function (o) {
            return o.value == value;
          })
        );
      } else {
        setSelected(value);
      }
    },
    [value]
  );
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.container,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Typography,
      {
        variant: "caption",
        color: "textSecondary",
        sx: sx.label,
      },
      label
    ),
    /*#__PURE__*/ _react.default.createElement(_Autocomplete.default, {
      freeSolo: freeSolo,
      multiple: multiselect,
      disableCloseOnSelect: multiselect,
      sx: {
        paper: sx.paper,
        option: sx.option,
        popperDisablePortal: sx.popperDisablePortal,
      },
      value: selected,
      onChange: function onChange(event, newValue) {
        handleOnChange(event, newValue);
      },
      onInputChange: function onInputChange(event, newInputValue) {
        handleInputChange && handleInputChange(newInputValue);
      },
      noOptionsText: "No options",
      clearOnBlur: true,
      handleHomeEndKeys: true,
      options: options,
      getOptionLabel: function getOptionLabel(option) {
        return option === null || option === void 0 ? void 0 : option.label;
      },
      getOptionSelected: function getOptionSelected(option, value) {
        return (
          (option === null || option === void 0 ? void 0 : option.label) ==
          (value === null || value === void 0 ? void 0 : value.label)
        );
      },
      renderInput: function renderInput(params) {
        return /*#__PURE__*/ _react.default.createElement(
          _material.TextField,
          _extends({}, params, {
            size: "small",
            sx: sx.textField,
            placeholder: placeholder,
            ref: params.InputProps.ref,
          })
        );
      },
    }),
    /*#__PURE__*/ _react.default.createElement(_index.ErrorText, {
      error: error,
    })
  );
};
var _default = Autosuggest;
exports.default = _default;
var sx = {
  container: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
  inputError: {
    "& input": {
      border: "2px solid",
      borderColor: "error.main",
      p: 1,
      height: 20,
      borderRadius: function borderRadius(theme) {
        return theme.shape.borderRadius;
      },
    },
  },
  paper: {
    backgroundColor: "common.white",
    mt: 1,
    color: "#586069",
    fontSize: 15,
  },
  option: {
    zIndex: "999 !important",
    minHeight: "auto",
    alignItems: "flex-start",
    p: 8,
    '&[aria-selected="true"]': {
      backgroundColor: "transparent",
    },
    '&[data-focus="true"]': {
      backgroundColor: "action.hover",
    },
  },
  popperDisablePortal: {
    position: "relative",
  },
  label: {
    mb: 0,
  },
};
