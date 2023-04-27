"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../index");
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _excluded = ["numRows", "numColumns"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var TableViewSkeleton = function TableViewSkeleton(_ref) {
  var _ref$numRows = _ref.numRows,
    numRows = _ref$numRows === void 0 ? 10 : _ref$numRows,
    _ref$numColumns = _ref.numColumns,
    numColumns = _ref$numColumns === void 0 ? 6 : _ref$numColumns,
    props = _objectWithoutProperties(_ref, _excluded);
  var rows = new Array(numRows).fill(0);
  var cells = new Array(numColumns).fill(0);
  return /*#__PURE__*/_react.default.createElement(_index.DataTable, null, /*#__PURE__*/_react.default.createElement(_TableHead.default, null, /*#__PURE__*/_react.default.createElement(_TableRow.default, {
    sx: sx.row
  }, cells.map(function (cell, i) {
    return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
      header: true,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
      height: 14,
      sx: sx.skeleton,
      variant: "rectangular",
      animation: "wave"
    }));
  }))), /*#__PURE__*/_react.default.createElement(_TableBody.default, null, rows.map(function (row, i) {
    return /*#__PURE__*/_react.default.createElement(_TableRow.default, {
      key: i,
      sx: sx.row
    }, cells.map(function (cell, j) {
      return /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        sx: sx.tableCell,
        key: j
      }, /*#__PURE__*/_react.default.createElement(_material.Skeleton, {
        height: 14,
        sx: sx.skeleton,
        variant: "rectangular",
        animation: "wave"
      }));
    }));
  })));
};
var _default = TableViewSkeleton;
exports.default = _default;
var sx = {
  root: {
    width: "100%",
    height: {
      xs: "calc(100vh - 200px)",
      sm: "calc(100vh - 160px)"
    }
  },
  tableCell: {
    p: 1
  },
  skeleton: {
    m: 0.5,
    opacity: 0.1,
    borderRadius: function borderRadius(theme) {
      return theme.shape.borderRadius;
    },
    backgroundColor: "text.secondary"
  }
};