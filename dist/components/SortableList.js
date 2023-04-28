"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _reactBeautifulDnd = require("react-beautiful-dnd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var SortableList = function SortableList(_ref) {
  var items = _ref.items,
    droppableId = _ref.droppableId,
    renderItem = _ref.renderItem,
    handleDrop = _ref.handleDrop;
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
  var onDragEnd = function onDragEnd(result) {
    if (!result.destination) {
      return items;
    }
    var sorted = reorder(items, result.source.index, result.destination.index);
    handleDrop(sorted);
  };
  return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Droppable, {
    droppableId: droppableId
  }, function (provided) {
    return /*#__PURE__*/_react.default.createElement(_material.Box, {
      sx: sx.root
    }, /*#__PURE__*/_react.default.createElement(_material.List, _extends({
      sx: sx.list,
      dense: true
    }, provided.droppableProps, {
      ref: provided.innerRef
    }), items.map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_reactBeautifulDnd.Draggable, {
        key: item.id,
        draggableId: String(item === null || item === void 0 ? void 0 : item.id),
        index: i
      }, function (provided, snapshot) {
        return /*#__PURE__*/_react.default.createElement(_material.Box, _extends({
          ref: provided.innerRef
        }, provided.draggableProps, provided.dragHandleProps, {
          sx: _objectSpread(_objectSpread({}, sx.draggableItem), snapshot.isDragging && sx.isDragging)
        }), renderItem(_objectSpread(_objectSpread({}, item), {}, {
          isDragging: snapshot.isDragging
        })));
      });
    })), provided.placeholder);
  }));
};
var _default = SortableList;
exports.default = _default;
var sx = {
  root: {
    width: "100%"
  },
  list: {
    overflowY: "scroll",
    width: "100%"
  },
  draggableItem: {},
  isDragging: {
    marginLeft: ["0", "-320px"]
  }
};