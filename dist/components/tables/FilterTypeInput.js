"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
var _material = require("@mui/material");
var _constants = require("../../lib/constants");
var _iconsMaterial = require("@mui/icons-material");
var _excluded = [
  "query",
  "index",
  "filter",
  "fields",
  "handleChange",
  "handleSearch",
  "handleFilterChange",
  "handleRemoveFilter",
  "handleClearFilters",
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
var FiltTypeInput = function FiltTypeInput(_ref) {
  var _field2, _field3, _field4, _field5, _field6;
  var _ref$query = _ref.query,
    query = _ref$query === void 0 ? {} : _ref$query,
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? 0 : _ref$index,
    filter = _ref.filter,
    fields = _ref.fields,
    handleChange = _ref.handleChange,
    handleSearch = _ref.handleSearch,
    handleFilterChange = _ref.handleFilterChange,
    handleRemoveFilter = _ref.handleRemoveFilter,
    handleClearFilters = _ref.handleClearFilters,
    props = _objectWithoutProperties(_ref, _excluded);
  var filterOperators = _constants.FILTER_OPERATORS["integer"];
  var field;
  if (filter.field) {
    var _field;
    field = fields.find(function (f) {
      return f.name == filter.field;
    });
    filterOperators =
      _constants.FILTER_OPERATORS[
        ((_field = field) === null || _field === void 0
          ? void 0
          : _field.type) || "integer"
      ];
  }
  return /*#__PURE__*/ _react.default.createElement(
    _index.FilterInput,
    {
      label: index > 0 ? "AND" : "WHERE",
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.inputFilter,
      },
      /*#__PURE__*/ _react.default.createElement(_index.Autosuggest, {
        name: "field",
        options: fields
          .filter(function (field) {
            return _constants.FILTERABLE_TYPES.includes(
              field === null || field === void 0 ? void 0 : field.variant
            );
          })
          .map(function (field) {
            return {
              label: field.name,
              value: field.name,
            };
          }),
        placeholder: "field",
        value:
          (filter === null || filter === void 0 ? void 0 : filter.field) || "",
        onChange: function onChange(ev) {
          return handleFilterChange(ev, index);
        },
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.inputOperator,
      },
      /*#__PURE__*/ _react.default.createElement(_index.Autosuggest, {
        sx: sx.operator,
        name: "operator",
        placeholder: "\u2026",
        options: filterOperators,
        value:
          (filter === null || filter === void 0 ? void 0 : filter.operator) ||
          "",
        onChange: function onChange(ev) {
          return handleFilterChange(ev, index);
        },
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.inputValue,
      },
      _constants.BOOLEAN_FIELDS.includes(
        (_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.type
      ) &&
        /*#__PURE__*/ _react.default.createElement(_index.Autosuggest, {
          name: "value",
          placeholder: "true or false",
          options: _constants.BOOLEAN_OPTIONS,
          value:
            (filter === null || filter === void 0 ? void 0 : filter.value) ||
            "",
          onChange: function onChange(ev) {
            return handleFilterChange(ev, index);
          },
        }),
      _constants.DATE_FIELDS.includes(
        (_field3 = field) === null || _field3 === void 0 ? void 0 : _field3.type
      ) &&
        /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          ["gte", "lte"].includes(
            filter === null || filter === void 0 ? void 0 : filter.operator
          )
            ? /*#__PURE__*/ _react.default.createElement(_index.Autosuggest, {
                name: "value",
                placeholder: "date since",
                options: _constants.DATE_RANGE_OPTIONS,
                value:
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.value) || "",
                onChange: function onChange(ev) {
                  return handleFilterChange(ev, index);
                },
              })
            : /*#__PURE__*/ _react.default.createElement(_index.TextInput, {
                size: "small",
                type: "date",
                name: "value",
                placeholder: "value",
                value:
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.value) || "",
                onChange: function onChange(ev) {
                  return handleFilterChange(ev, index);
                },
              })
        ),
      _constants.NUMBER_FIELDS.includes(
        (_field4 = field) === null || _field4 === void 0 ? void 0 : _field4.type
      ) &&
        /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          ["in", "nin"].includes(
            filter === null || filter === void 0 ? void 0 : filter.operator
          )
            ? /*#__PURE__*/ _react.default.createElement(_index.ArrayInput, {
                name: "value",
                placeholder: "values",
                value: filter.value,
                onChange: function onChange(ev) {
                  return handleFilterChange(ev, index);
                },
              })
            : /*#__PURE__*/ _react.default.createElement(_index.TextInput, {
                size: "small",
                type: "number",
                name: "value",
                placeholder: "value",
                value:
                  (filter === null || filter === void 0
                    ? void 0
                    : filter.value) || "",
                onChange: function onChange(ev) {
                  return handleFilterChange(ev, index);
                },
              })
        ),
      (!((_field5 = field) !== null && _field5 !== void 0 && _field5.type) ||
        _constants.STRING_FIELDS.includes(
          (_field6 = field) === null || _field6 === void 0
            ? void 0
            : _field6.type
        )) &&
        /*#__PURE__*/ _react.default.createElement(_index.TextInput, {
          size: "small",
          name: "value",
          placeholder: "value",
          value:
            (filter === null || filter === void 0 ? void 0 : filter.value) ||
            "",
          onChange: function onChange(ev) {
            return handleFilterChange(ev, index);
          },
        })
    ),
    /*#__PURE__*/ _react.default.createElement(
      _material.Box,
      {
        sx: sx.inputIcon,
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.IconButton,
        {
          size: "small",
          onClick: function onClick() {
            return handleRemoveFilter(index);
          },
          sx: sx.iconButton,
        },
        /*#__PURE__*/ _react.default.createElement(_iconsMaterial.Clear, {
          sx: sx.icon,
        })
      )
    )
  );
};
var _default = FiltTypeInput;
exports.default = _default;
var sx = {
  inputFilter: {
    flexScale: 3,
    minWidth: "200px",
    mr: 1,
  },
  inputOperator: {
    flexScale: 1,
    minWidth: "150px",
    mr: 1,
  },
  inputValue: {
    flexScale: 1,
    width: "100%",
  },
  addFilterButton: {
    maxWidth: "160px",
    width: {
      sm: "100%",
    },
  },
  icon: {
    height: "20px",
    width: "20px",
    color: "icon",
  },
};
