"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../../index");
var _iconsMaterial = require("@mui/icons-material");
var _reactFeather = require("react-feather");
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
var FilterMenu = function FilterMenu(_ref) {
  var open = _ref.open,
    anchorEl = _ref.anchorEl,
    fields = _ref.fields,
    collection = _ref.collection,
    activeFilters = _ref.activeFilters,
    setActiveFilters = _ref.setActiveFilters,
    handleSearch = _ref.handleSearch;
  return /*#__PURE__*/ _react.default.createElement(
    _material.Popover,
    {
      id: "filter-popover",
      open: open,
      anchorEl: anchorEl,
      onClose: handleSearch,
      placement: "bottom-start",
      sx: sx.popover,
      TransitionComponent: _material.Fade,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center",
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.root,
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.Box,
        {
          sx: sx.header,
        },
        /*#__PURE__*/ _react.default.createElement(
          _material.Box,
          null,
          /*#__PURE__*/ _react.default.createElement(
            _iconsMaterial.FilterList,
            {
              color: "primary",
              sx: sx.icon,
            }
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          _material.Typography,
          {
            variant: "caption",
            color: "textSecondary",
            sx: sx.title,
          },
          "Search filters"
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        _material.Box,
        {
          sx: sx.content,
        },
        /*#__PURE__*/ _react.default.createElement(_index.FilterForm, {
          fields: fields,
          collection: collection,
          activeFilters: activeFilters,
          setActiveFilters: setActiveFilters,
          handleSearch: handleSearch,
        }),
        /*#__PURE__*/ _react.default.createElement(
          _material.Button,
          {
            sx: sx.searchButton,
            startIcon: /*#__PURE__*/ _react.default.createElement(
              _reactFeather.Search,
              null
            ),
            onClick: handleSearch,
            fullWidth: true,
            variant: "contained",
            color: "primary",
          },
          "Search"
        )
      )
    )
  );
};
var _default = FilterMenu;
exports.default = _default;
var sx = {
  root: _defineProperty(
    {
      width: "100%",
      maxWidth: 420,
      backgroundColor: "background.main",
    },
    "width",
    ["280px", "auto"]
  ),
  content: {
    p: 2,
  },
  header: {
    display: "flex",
    flexDirecton: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 46,
    py: 0,
    px: 2,
    borderBottom: "1px solid",
    borderColor: "common.inputBorder",
  },
  popover: {
    zIndex: function zIndex(theme) {
      return theme.zIndex.modal;
    },
  },
  icon: {
    height: 20,
    width: 20,
    mr: 10,
  },
  searchButton: {
    mt: 1,
  },
};
