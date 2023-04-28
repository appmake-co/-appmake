"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApiContext = _interopRequireDefault(require("./ApiContext"));
var _axios = _interopRequireDefault(require("axios"));
var _cookiesNext = require("cookies-next");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ApiProvider = function ApiProvider(_ref) {
  var url = _ref.url,
    children = _ref.children;
  var headers = {
    "Content-Type": "application/json"
  };
  var api = _axios.default.create({
    baseURL: url,
    headers: headers,
    timeout: 60000
  });
  api.interceptors.request.use(function (config) {
    var token = (0, _cookiesNext.getCookie)("authToken");
    if (token) {
      config.headers["Authorization"] = "Bearer ".concat(token);
    }
    return config;
  });
  api.interceptors.response.use(function (resp) {
    return Promise.resolve(resp.data);
  }, function (error) {
    return Promise.reject(error.response);
  });
  var value = {
    api: api
  };
  return /*#__PURE__*/_react.default.createElement(_ApiContext.default.Provider, {
    value: value
  }, children);
};
var _default = ApiProvider;
exports.default = _default;