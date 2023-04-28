"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _index = require("../index");
var _iconsMaterial = require("@mui/icons-material");
var _excluded = [
  "row",
  "fields",
  "editable",
  "selectable",
  "handleClick",
  "handleEditClick",
  "selectedIds",
  "handleSelect",
];
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
var TableViewRow = function TableViewRow(_ref) {
  var row = _ref.row,
    fields = _ref.fields,
    _ref$editable = _ref.editable,
    editable = _ref$editable === void 0 ? false : _ref$editable,
    _ref$selectable = _ref.selectable,
    selectable = _ref$selectable === void 0 ? false : _ref$selectable,
    handleClick = _ref.handleClick,
    handleEditClick = _ref.handleEditClick,
    selectedIds = _ref.selectedIds,
    handleSelect = _ref.handleSelect,
    props = _objectWithoutProperties(_ref, _excluded);
  var selected =
    selectedIds !== null &&
    selectedIds !== void 0 &&
    selectedIds.includes(row === null || row === void 0 ? void 0 : row.id)
      ? true
      : false;
  return /*#__PURE__*/ _react.default.createElement(
    _index.DataTableRow,
    {
      hover: true,
      selected: selected,
      onClick: handleClick
        ? function () {
            return handleClick(row);
          }
        : null,
    },
    selectable &&
      /*#__PURE__*/ _react.default.createElement(
        _material.TableCell,
        {
          align: "center",
          sticky: true,
        },
        /*#__PURE__*/ _react.default.createElement(_material.Checkbox, {
          checked: selected,
          onChange: function onChange() {
            return handleSelect(row);
          },
          value: "true",
        })
      ),
    editable &&
      /*#__PURE__*/ _react.default.createElement(
        _material.TableCell,
        {
          align: "center",
        },
        /*#__PURE__*/ _react.default.createElement(
          _material.IconButton,
          {
            onClick: handleEditClick
              ? function () {
                  return handleEditClick(row);
                }
              : null,
            sx: sx.editIconButton,
            size: "small",
          },
          /*#__PURE__*/ _react.default.createElement(
            _iconsMaterial.EditOutlined,
            {
              sx: sx.editIcon,
              color: "textPrimary",
            }
          )
        )
      ),
    fields.map(function (column, index) {
      return /*#__PURE__*/ _react.default.createElement(
        _index.DataTableCell,
        {
          key: index,
          variant:
            (column === null || column === void 0 ? void 0 : column.variant) ||
            "text",
          value: row[column.name],
          handleClick: handleClick
            ? function () {
                return handleClick(row, column);
              }
            : null,
        },
        /*#__PURE__*/ _react.default.createElement(_index.Cell, {
          row: row,
          column: column,
        })
      );
    })
  );
};
var _default = TableViewRow;
exports.default = _default;
var sx = {
  editIcon: {
    height: "20px",
    width: "20px",
  },
};
