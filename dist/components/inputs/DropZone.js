"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactDropzone = require("react-dropzone");
var _material = require("@mui/material");
var _reactFeather = require("react-feather");
var _excluded = ["onDrop", "label", "dropLabel"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DropZone = function DropZone(_ref) {
  var onDrop = _ref.onDrop,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? "Upload file" : _ref$label,
    _ref$dropLabel = _ref.dropLabel,
    dropLabel = _ref$dropLabel === void 0 ? "Drop file here" : _ref$dropLabel,
    props = _objectWithoutProperties(_ref, _excluded);
  var handleOnDrop = function handleOnDrop(files) {
    var reader = new FileReader();
    var file = files[0];
    reader.onload = function (e) {
      var preview = {
        src: e.target.result,
        name: file.name,
        size: file.size,
        type: file.type
      };
      onDrop(file, preview);
    };
    reader.readAsDataURL(file);
  };
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      onDrop: handleOnDrop
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragActive = _useDropzone.isDragActive;
  return /*#__PURE__*/_react.default.createElement(_material.Box, _extends({
    sx: sx.dropZone
  }, getRootProps()), /*#__PURE__*/_react.default.createElement("input", getInputProps()), isDragActive ? /*#__PURE__*/_react.default.createElement(_reactFeather.DownloadCloud, {
    size: 36,
    sx: sx.icon
  }) : /*#__PURE__*/_react.default.createElement(_reactFeather.UploadCloud, {
    size: 36,
    sx: sx.icon
  }), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, isDragActive ? dropLabel : label));
};
var _default = DropZone;
exports.default = _default;
var sx = {
  dropZone: {
    m: 0,
    height: 140,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    boxShadow: "rgb(0 0 0 / 5%) 0px 2px 4px !important",
    backgroundColor: "white",
    textAlign: "center",
    border: "1px solid",
    borderColor: "common.inputBorder",
    marginBottom: 2
  },
  icon: {
    color: "icon"
  },
  iconButton: {
    fontSize: 11,
    top: 0,
    left: -48,
    color: "text.secondary",
    "&& ": {
      backgroundColor: "common.white"
    }
  }
};