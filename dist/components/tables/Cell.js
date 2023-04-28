"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../../index");
var _excluded = ["row", "column", "handleClick"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
var Cell = function Cell(_ref) {
  var _row$name, _row$name2, _row$name3, _row$name4, _row$name5;
  var row = _ref.row,
    column = _ref.column,
    handleClick = _ref.handleClick,
    props = _objectWithoutProperties(_ref, _excluded);
  var totalCount = 0;
  var value = row[column.name];
  var _ref2 = column || {},
    name = _ref2.name,
    label = _ref2.label,
    variant = _ref2.variant;
  switch (variant) {
    case "video":
    case "file":
    case "image":
      value =
        (_row$name = row[name]) === null || _row$name === void 0
          ? void 0
          : _row$name.url;
      break;
    case "belongs_to":
      value =
        (_row$name2 = row[name]) === null || _row$name2 === void 0
          ? void 0
          : _row$name2.primary_text;
      break;
    case "has_one":
      value =
        (_row$name3 = row[name]) === null || _row$name3 === void 0
          ? void 0
          : _row$name3.primary_text;
      break;
    case "has_many":
      totalCount =
        ((_row$name4 = row[name]) === null || _row$name4 === void 0
          ? void 0
          : _row$name4.length) || 0;
      value = "".concat(label, " (").concat(totalCount, ")");
    case "habtm":
      totalCount =
        ((_row$name5 = row[name]) === null || _row$name5 === void 0
          ? void 0
          : _row$name5.length) || 0;
      value = "".concat(label, " (").concat(totalCount, ")");
      break;
  }
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.root,
    },
    variant === "array" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellArray, {
        value: value,
      }),
    variant === "enumerable" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellEnum, {
        value: value,
      }),
    variant === "boolean" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellBoolean, {
        value: value,
      }),
    variant === "belongs_to" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellBelongsTo, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "date" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellDate, {
        value: value,
      }),
    variant === "datetime" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellDate, {
        value: value,
      }),
    variant === "has_one" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellHasOne, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "has_many" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellHasMany, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "habtm" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellHABTM, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "image" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellImage, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "json" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellJSON, {
        value: value,
      }),
    variant === "label" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellLabel, {
        value: value,
      }),
    variant === "link" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellLink, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "paragraph" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellParagraph, {
        value: value,
        handleClick: handleClick,
      }),
    variant === "text" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellText, {
        value: value,
      }),
    variant === "rating" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellRating, {
        value: value,
      }),
    variant === "video" &&
      /*#__PURE__*/ _react.default.createElement(_index.CellVideo, {
        value: value,
        handleClick: handleClick,
      })
  );
};
var _default = Cell;
exports.default = _default;
var sx = {
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  default: {
    fontFamily: "Roboto Mono",
  },
};
