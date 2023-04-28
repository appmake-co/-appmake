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
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
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
var Pagination = function Pagination(_ref) {
  var loading = _ref.loading,
    _ref$totalCount = _ref.totalCount,
    totalCount = _ref$totalCount === void 0 ? 0 : _ref$totalCount,
    _ref$startIndex = _ref.startIndex,
    startIndex = _ref$startIndex === void 0 ? 1 : _ref$startIndex,
    _ref$endIndex = _ref.endIndex,
    endIndex = _ref$endIndex === void 0 ? 1 : _ref$endIndex,
    _ref$page = _ref.page,
    page = _ref$page === void 0 ? 1 : _ref$page,
    numPages = _ref.numPages,
    handlePaginate = _ref.handlePaginate;
  var _useState = (0, _react.useState)(page),
    _useState2 = _slicedToArray(_useState, 2),
    pageNumber = _useState2[0],
    setPageNumber = _useState2[1];
  var handleChangePage = function handleChangePage(event, nextPage) {
    setPageNumber(nextPage);
  };
  (0, _react.useEffect)(
    function () {
      if (pageNumber) {
        //hack to prevent waiting for page to load bug
        setTimeout(function () {
          return handlePaginate({}, pageNumber);
        }, 10);
      }
    },
    [pageNumber]
  );
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: sx.pagination,
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.Hidden,
      {
        smDown: true,
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.Box,
        {
          mx: 2,
        },
        loading
          ? /*#__PURE__*/ _react.default.createElement(
              _material.CircularProgress,
              {
                size: 24,
              }
            )
          : /*#__PURE__*/ _react.default.createElement(
              _material.Typography,
              {
                variant: "body2",
                color: "textSecondary",
              },
              "Results ",
              startIndex,
              " - ",
              endIndex,
              " of ",
              totalCount
            )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(_material.Pagination, {
      size: "small",
      count: numPages,
      page: pageNumber,
      defaultPage: 1,
      onChange: handleChangePage,
      color: "primary",
      shape: "rounded",
    })
  );
};
var _default = Pagination;
exports.default = _default;
var sx = {
  pagination: {
    pt: 1,
    pb: 1,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    color: "text.secondary",
  },
};
