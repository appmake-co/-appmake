"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validFilter = exports.truncate = exports.reorder = exports.parseQuery = exports.isSearchFilters = exports.buildQueryParams = exports.buildQuery = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var parseQuery = function parseQuery(queryParams, fields) {
  var keywords = queryParams.keywords,
    page = queryParams.page,
    per_page = queryParams.per_page,
    filters = queryParams.filters,
    order = queryParams.order;
  var _ref = order ? order.split(":") : [],
    _ref2 = _slicedToArray(_ref, 2),
    sort_by = _ref2[0],
    sort_direction = _ref2[1];

  // comma not inside square braces
  var FILTER_REGEX = /,(?![^\[]*\])/;
  var BRACKET_REGEX = /\[|\]/g;
  var filterQuery = [];
  if (filters && filters.split(FILTER_REGEX).length > 0) {
    filterQuery = filters === null || filters === void 0 ? void 0 : filters.split(FILTER_REGEX).map(function (filter) {
      var _filter$split = filter.split(":"),
        _filter$split2 = _slicedToArray(_filter$split, 3),
        field = _filter$split2[0],
        operator = _filter$split2[1],
        value = _filter$split2[2];
      if (value.split(",").length > 1) {
        value = value.replace(BRACKET_REGEX, "").split(",");
      }
      return {
        field: field,
        operator: operator,
        value: value
      };
    });
  }
  return {
    keywords: keywords,
    page: page,
    per_page: per_page,
    sort_by: sort_by,
    sort_direction: sort_direction,
    filters: filterQuery
  };
};
exports.parseQuery = parseQuery;
var buildQueryParams = function buildQueryParams(query) {
  var queryParams = decodeURIComponent(new URLSearchParams(query).toString());
  return queryParams;
};
exports.buildQueryParams = buildQueryParams;
var buildQuery = function buildQuery(params) {
  if (!params) return {};
  var sort_by = params.sort_by,
    sort_direction = params.sort_direction,
    keywords = params.keywords,
    filters = params.filters,
    page = params.page,
    per_page = params.per_page;
  var query = {
    order: "id:desc",
    page: 1,
    per_page: 20
  };
  if (page) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      page: page
    });
  }
  if (per_page) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      per_page: per_page
    });
  }
  if (sort_by && sort_direction) {
    query = _objectSpread(_objectSpread({}, query), {}, {
      order: "".concat(sort_by, ":").concat(sort_direction)
    });
  }
  if (Array.isArray(filters) && filters.length > 0) {
    var validFilters = filters.filter(validFilter).map(function (_ref3) {
      var field = _ref3.field,
        operator = _ref3.operator,
        value = _ref3.value;
      if (Array.isArray(value)) {
        return "".concat(field, ":").concat(operator, ":[").concat(value.join(","), "]");
      } else {
        return "".concat(field, ":").concat(operator, ":").concat(value);
      }
    });
    if (validFilters.length >= 0) {
      query = _objectSpread(_objectSpread({}, query), {}, {
        filters: validFilters.join(",")
      });
    }
  }
  if (keywords && keywords != "") {
    query = _objectSpread(_objectSpread({}, query), {}, {
      keywords: keywords
    });
  }
  return query;
};
exports.buildQuery = buildQuery;
var validFilter = function validFilter(filter) {
  var field = filter.field,
    operator = filter.operator,
    value = filter.value;
  if (field != null && field != "" && operator != null && operator != "" && value != null && value != "") {
    return true;
  } else {
    return false;
  }
};
exports.validFilter = validFilter;
var truncate = function truncate(str) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
  if (!str) return "";
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};
exports.truncate = truncate;
var reorder = function reorder(items, startIndex, endIndex) {
  var result = Array.from(items);
  var _result$splice = result.splice(startIndex, 1),
    _result$splice2 = _slicedToArray(_result$splice, 1),
    removed = _result$splice2[0];
  result.splice(endIndex, 0, removed);
  return result.map(function (item, index) {
    return _objectSpread(_objectSpread({}, item), {}, {
      position: index + 1
    });
  });
};
exports.reorder = reorder;
var isSearchFilters = function isSearchFilters(url) {
  var queryParams = router.query;
  var keywords = queryParams.keywords,
    filters = queryParams.filters,
    order = queryParams.order;
  if (keywords || (filters === null || filters === void 0 ? void 0 : filters.length) > 0 || order) {
    return true;
  } else {
    return false;
  }
};
exports.isSearchFilters = isSearchFilters;