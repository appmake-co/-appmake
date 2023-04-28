"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../../index");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var OnlineStatusAvatar = function OnlineStatusAvatar(_ref) {
  var user = _ref.user,
    size = _ref.size,
    _ref$online = _ref.online,
    online = _ref$online === void 0 ? "true" : _ref$online;
  return /*#__PURE__*/ _react.default.createElement(
    _index.OnlineStatusBadge,
    {
      online: online,
    },
    /*#__PURE__*/ _react.default.createElement(_index.UserAvatar, {
      src: user.avatar,
      size: size,
    })
  );
};
var _default = OnlineStatusAvatar;
exports.default = _default;
