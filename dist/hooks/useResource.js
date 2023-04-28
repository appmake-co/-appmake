"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index");
var _helpers = require("../lib/helpers");
var _router = require("next/router");
var _excluded = ["url", "name", "defaultQuery"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* useResource
  A base hook that allows for CRUD operations of a REST API that follows
  standard REST patterns of GET POST PUT and DELETE to create, update, create and
  destroy objects.
  @param id - The resource ID to auto fetch
  @param url - The API endpoint. The is set dynamically using setEndpoint
  @param name - The name of the resource needed when using POST and PUT
*/

var emptyQuery = {
  keywords: null,
  page: 1,
  per_page: 20,
  filters: [],
  order: "id:desc"
};
var useResource = function useResource(_ref) {
  var url = _ref.url,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? "resource" : _ref$name,
    _ref$defaultQuery = _ref.defaultQuery,
    defaultQuery = _ref$defaultQuery === void 0 ? emptyQuery : _ref$defaultQuery,
    props = _objectWithoutProperties(_ref, _excluded);
  var router = (0, _router.useRouter)();
  if (Object.keys(defaultQuery).length === 0) {
    defaultQuery = emptyQuery;
  }
  var _useContext = (0, _react.useContext)(_index.ApiContext),
    api = _useContext.api;
  var _useAlerts = (0, _index.useAlerts)(),
    showAlertError = _useAlerts.showAlertError;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useState3 = (0, _react.useState)([defaultQuery.filters]),
    _useState4 = _slicedToArray(_useState3, 2),
    activeFilters = _useState4[0],
    setActiveFilters = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loaded = _useState6[0],
    setLoaded = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    empty = _useState10[0],
    setEmpty = _useState10[1];
  var _useState11 = (0, _react.useState)(),
    _useState12 = _slicedToArray(_useState11, 2),
    errors = _useState12[0],
    setErrors = _useState12[1];
  var _useState13 = (0, _react.useState)(props.id),
    _useState14 = _slicedToArray(_useState13, 2),
    id = _useState14[0],
    setId = _useState14[1];
  var _useState15 = (0, _react.useState)({
      id: props.id
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    resource = _useState16[0],
    setResource = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    resources = _useState18[0],
    setResources = _useState18[1];
  var _useState19 = (0, _react.useState)({}),
    _useState20 = _slicedToArray(_useState19, 2),
    meta = _useState20[0],
    setMeta = _useState20[1];
  var _useState21 = (0, _react.useState)({}),
    _useState22 = _slicedToArray(_useState21, 2),
    params = _useState22[0],
    setParams = _useState22[1];
  var _useState23 = (0, _react.useState)(1),
    _useState24 = _slicedToArray(_useState23, 2),
    page = _useState24[0],
    setPage = _useState24[1];
  var _useState25 = (0, _react.useState)(20),
    _useState26 = _slicedToArray(_useState25, 2),
    perPage = _useState26[0],
    setPerPage = _useState26[1];
  var _useState27 = (0, _react.useState)(1),
    _useState28 = _slicedToArray(_useState27, 2),
    numPages = _useState28[0],
    setNumPages = _useState28[1];
  var _useState29 = (0, _react.useState)("id"),
    _useState30 = _slicedToArray(_useState29, 2),
    sortBy = _useState30[0],
    setSortBy = _useState30[1];
  var _useState31 = (0, _react.useState)("desc"),
    _useState32 = _slicedToArray(_useState31, 2),
    sortDirection = _useState32[0],
    setSortDirection = _useState32[1];
  var _useState33 = (0, _react.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    totalCount = _useState34[0],
    setTotalCount = _useState34[1];
  var showLoading = function showLoading() {
    return setLoading(true);
  };
  var hideLoading = function hideLoading() {
    return setLoading(false);
  };
  var findOne = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (id) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", null);
          case 2:
            _context.prev = 2;
            showLoading();
            setLoaded(false);
            setId(id);
            _context.next = 8;
            return api.get("".concat(url, "/").concat(id));
          case 8:
            res = _context.sent;
            if (res !== null && res !== void 0 && res.data) {
              setResource(res.data);
            }
            if (res !== null && res !== void 0 && res.meta) {
              setMeta(res.meta);
            }
            setLoaded(true);
            return _context.abrupt("return", res.data);
          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
          case 18:
            _context.prev = 18;
            hideLoading();
            return _context.finish(18);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 15, 18, 21]]);
    }));
    return function findOne(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var findMany = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(query) {
      var loadMore,
        queryParams,
        res,
        _res$data,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            loadMore = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            if (!url.includes("undefined")) {
              _context2.next = 3;
              break;
            }
            return _context2.abrupt("return");
          case 3:
            _context2.prev = 3;
            showLoading();
            queryParams = (0, _helpers.buildQuery)(query);
            setQuery(query);
            setParams(params);
            if (!loadMore) {
              setLoaded(false);
            }
            _context2.next = 11;
            return api.get(url, {
              params: queryParams
            });
          case 11:
            res = _context2.sent;
            if (!res.data) {
              _context2.next = 18;
              break;
            }
            if (!loadMore) {
              setResources(res.data);
            } else {
              setResources([].concat(_toConsumableArray(resources), _toConsumableArray(res.data)));
            }
            if (res.meta) {
              setMeta(res.meta);
              setPage(res.meta.page);
              setPerPage(res.meta.per_page);
              setNumPages(res.meta.num_pages);
              setTotalCount(res.meta.total_count);
            }
            setEmpty((res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.length) > 0 ? false : true);
            setLoaded(true);
            return _context2.abrupt("return", res.data);
          case 18:
            _context2.next = 23;
            break;
          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
          case 23:
            _context2.prev = 23;
            hideLoading();
            return _context2.finish(23);
          case 26:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 20, 23, 26]]);
    }));
    return function findMany(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var loadMore = function loadMore() {
    var nextPage = page + 1;
    var loadMoreResults = true;
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      page: nextPage
    }), loadMoreResults);
  };
  var save = function save(resource) {
    var showLoaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (resource !== null && resource !== void 0 && resource.id) {
      return update(resource, showLoaders);
    } else {
      return create(resource, showLoaders);
    }
  };
  var create = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resource) {
      var _res$data2, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!hasFilesAttached(resource)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", createWithFiles(resource));
          case 2:
            _context3.prev = 2;
            showLoading();
            setErrors();
            _context3.next = 7;
            return api.post(url, _defineProperty({}, name, resource));
          case 7:
            res = _context3.sent;
            if (res !== null && res !== void 0 && (_res$data2 = res.data) !== null && _res$data2 !== void 0 && _res$data2.id) {
              setResource(res.data);
              setLoaded(true);
              setId(res.data.id);
            }
            return _context3.abrupt("return", res.data);
          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            handleErrors(_context3.t0);
          case 15:
            _context3.prev = 15;
            hideLoading();
            return _context3.finish(15);
          case 18:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 12, 15, 18]]);
    }));
    return function create(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var update = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resource) {
      var res;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!hasFilesAttached(resource)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", updateWithFiles(resource));
          case 2:
            _context4.prev = 2;
            setId(resource.id);
            showLoading();
            setErrors();
            _context4.next = 8;
            return api.put("".concat(url, "/").concat(resource.id), _defineProperty({}, name, resource));
          case 8:
            res = _context4.sent;
            return _context4.abrupt("return", res.data);
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            handleErrors(_context4.t0);
          case 15:
            _context4.prev = 15;
            hideLoading();
            return _context4.finish(15);
          case 18:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[2, 12, 15, 18]]);
    }));
    return function update(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  var destroy = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var res;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            showLoading();
            setErrors();
            _context5.next = 5;
            return api.delete("".concat(url, "/").concat(id));
          case 5:
            res = _context5.sent;
            setResource({
              data: {}
            });
            return _context5.abrupt("return", res);
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            handleErrors(_context5.t0);
          case 13:
            _context5.prev = 13;
            hideLoading();
            return _context5.finish(13);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 10, 13, 16]]);
    }));
    return function destroy(_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
  var updateMany = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ids, resource) {
      var res;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            showLoading();
            setErrors();
            _context6.next = 5;
            return api.post("".concat(url, "/update_many"), {
              ids: ids,
              resource: resource
            });
          case 5:
            res = _context6.sent;
            return _context6.abrupt("return", res.data);
          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            handleErrors(_context6.t0);
          case 12:
            _context6.prev = 12;
            hideLoading();
            return _context6.finish(12);
          case 15:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 9, 12, 15]]);
    }));
    return function updateMany(_x7, _x8) {
      return _ref7.apply(this, arguments);
    };
  }();
  var deleteMany = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(ids) {
      var res;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            showLoading();
            setErrors();
            _context7.next = 5;
            return api.post("".concat(url, "/delete_many"), {
              ids: ids
            });
          case 5:
            res = _context7.sent;
            return _context7.abrupt("return", res.data);
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            handleErrors(_context7.t0);
          case 12:
            _context7.prev = 12;
            hideLoading();
            return _context7.finish(12);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9, 12, 15]]);
    }));
    return function deleteMany(_x9) {
      return _ref8.apply(this, arguments);
    };
  }();
  var createWithFiles = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resourceWithFiles) {
      var _res$data3, config, formData, res;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            console.log("CREATE WITH FILES");
            _context8.prev = 1;
            config = {
              headers: {
                "content-type": "multipart/form-data"
              }
            };
            showLoading();
            setErrors();
            formData = new FormData();
            Object.keys(resourceWithFiles).forEach(function (key) {
              if (resourceWithFiles[key]) {
                formData.append("".concat(name, "[").concat(key, "]"), resourceWithFiles[key]);
              }
            });
            _context8.next = 9;
            return api.post(url, formData, config);
          case 9:
            res = _context8.sent;
            if (res !== null && res !== void 0 && (_res$data3 = res.data) !== null && _res$data3 !== void 0 && _res$data3.id) {
              setResource(res.data);
              setLoaded(true);
              setId(res.data.id);
            }
            return _context8.abrupt("return", res.data);
          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](1);
            handleErrors(_context8.t0);
          case 17:
            _context8.prev = 17;
            hideLoading();
            return _context8.finish(17);
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 14, 17, 20]]);
    }));
    return function createWithFiles(_x10) {
      return _ref9.apply(this, arguments);
    };
  }();
  var updateWithFiles = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resourceWithFiles) {
      var _res$data4, config, formData, res;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            config = {
              headers: {
                "content-type": "multipart/form-data"
              }
            };
            showLoading();
            setErrors();
            formData = new FormData();
            Object.keys(resourceWithFiles).forEach(function (key) {
              if (resourceWithFiles[key]) {
                formData.append("".concat(name, "[").concat(key, "]"), resourceWithFiles[key]);
              }
            });
            _context9.next = 8;
            return api.put("".concat(url, "/").concat(resourceWithFiles.id), formData, config);
          case 8:
            res = _context9.sent;
            if (res !== null && res !== void 0 && (_res$data4 = res.data) !== null && _res$data4 !== void 0 && _res$data4.id) {
              setResource(res.data);
              setLoaded(true);
              setId(res.data.id);
            }
            return _context9.abrupt("return", res.data);
          case 13:
            _context9.prev = 13;
            _context9.t0 = _context9["catch"](0);
            handleErrors(_context9.t0);
          case 16:
            _context9.prev = 16;
            hideLoading();
            return _context9.finish(16);
          case 19:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 13, 16, 19]]);
    }));
    return function updateWithFiles(_x11) {
      return _ref10.apply(this, arguments);
    };
  }();
  var addItems = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resourceName, resourceIds) {
      var res;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            showLoading();
            setErrors();
            _context10.next = 5;
            return api.post("".concat(url, "/").concat(id, "/add_items"), {
              item: {
                name: resourceName,
                ids: resourceIds
              }
            });
          case 5:
            res = _context10.sent;
            return _context10.abrupt("return", res.data);
          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](0);
            handleErrors(_context10.t0);
          case 12:
            _context10.prev = 12;
            hideLoading();
            return _context10.finish(12);
          case 15:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 9, 12, 15]]);
    }));
    return function addItems(_x12, _x13) {
      return _ref11.apply(this, arguments);
    };
  }();
  var removeItems = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resourceName, resourceIds) {
      var res;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            showLoading();
            setErrors();
            _context11.next = 5;
            return api.post("".concat(url, "/").concat(id, "/remove_items"), {
              item: {
                name: resourceName,
                ids: resourceIds
              }
            });
          case 5:
            res = _context11.sent;
            return _context11.abrupt("return", res.data);
          case 9:
            _context11.prev = 9;
            _context11.t0 = _context11["catch"](0);
            handleErrors(_context11.t0);
          case 12:
            _context11.prev = 12;
            hideLoading();
            return _context11.finish(12);
          case 15:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[0, 9, 12, 15]]);
    }));
    return function removeItems(_x14, _x15) {
      return _ref12.apply(this, arguments);
    };
  }();
  var updatePositions = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(sorted) {
      var resp;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            showLoading();
            setErrors();
            _context12.next = 5;
            return api.post("".concat(url, "/update_positions"), {
              ids: sorted.map(function (resource) {
                return resource.id;
              }),
              positions: sorted.map(function (_, index) {
                return index;
              })
            });
          case 5:
            resp = _context12.sent;
            if (resp !== null && resp !== void 0 && resp.data) {
              setResources(resp === null || resp === void 0 ? void 0 : resp.data);
            }
            return _context12.abrupt("return", resp === null || resp === void 0 ? void 0 : resp.data);
          case 10:
            _context12.prev = 10;
            _context12.t0 = _context12["catch"](0);
            handleErrors(_context12.t0);
          case 13:
            _context12.prev = 13;
            hideLoading();
            return _context12.finish(13);
          case 16:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 10, 13, 16]]);
    }));
    return function updatePositions(_x16) {
      return _ref13.apply(this, arguments);
    };
  }();
  var addAttachment = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resourceName, resourceId) {
      var res;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.prev = 0;
            showLoading();
            setErrors();
            _context13.next = 5;
            return api.post("".concat(url, "/").concat(id, "/add_attachment"), {
              attachment: {
                name: resourceName,
                id: resourceId
              }
            });
          case 5:
            res = _context13.sent;
            return _context13.abrupt("return", res.data);
          case 9:
            _context13.prev = 9;
            _context13.t0 = _context13["catch"](0);
            handleErrors(_context13.t0);
          case 12:
            _context13.prev = 12;
            hideLoading();
            return _context13.finish(12);
          case 15:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[0, 9, 12, 15]]);
    }));
    return function addAttachment(_x17, _x18) {
      return _ref14.apply(this, arguments);
    };
  }();
  var removeAttachment = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(resourceName, resourceId) {
      var res;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            showLoading();
            setErrors();
            _context14.next = 5;
            return api.post("".concat(url, "/").concat(id, "/remove_attachment"), {
              attachment: {
                name: resourceName,
                id: resourceId
              }
            });
          case 5:
            res = _context14.sent;
            setResource(res === null || res === void 0 ? void 0 : res.data);
            return _context14.abrupt("return", res.data);
          case 10:
            _context14.prev = 10;
            _context14.t0 = _context14["catch"](0);
            handleErrors(_context14.t0);
          case 13:
            _context14.prev = 13;
            hideLoading();
            return _context14.finish(13);
          case 16:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 10, 13, 16]]);
    }));
    return function removeAttachment(_x19, _x20) {
      return _ref15.apply(this, arguments);
    };
  }();
  var paginate = function paginate(page) {
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      page: page
    }));
  };
  var handleChange = function handleChange(ev) {
    var name = ev.target.name;
    var value = ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setResource(_objectSpread(_objectSpread({}, resource), {}, _defineProperty({}, name, value)));
  };
  var reloadOne = function reloadOne() {
    findOne(id);
  };
  var reloadMany = function reloadMany() {
    findMany(query);
  };
  var sortAll = function sortAll(_ref16) {
    var sortBy = _ref16.sortBy,
      sortDirection = _ref16.sortDirection;
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    findMany(_objectSpread(_objectSpread({}, query), {}, {
      order: "".concat(sortBy, ":").concat(sortDirection)
    }));
  };
  var handleErrors = function handleErrors(e) {
    var _e$response, _e$data;
    if ((e === null || e === void 0 ? void 0 : (_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 401) {
      showAlertError("You are not authorized to perform this action");
      router.push("/login");
    }
    if (e !== null && e !== void 0 && (_e$data = e.data) !== null && _e$data !== void 0 && _e$data.errors) {
      var _e$data2;
      setErrors(e === null || e === void 0 ? void 0 : (_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.errors);
    }
    console.log("handleErrors", e);
  };
  var hasFilesAttached = function hasFilesAttached(resource) {
    var hasFiles = false;
    Object.keys(resource).forEach(function (key) {
      if (resource[key] && resource[key].constructor === File) {
        hasFiles = true;
      }
    });
    return hasFiles;
  };
  (0, _react.useEffect)(function () {
    if (props.id) {
      setId(props.id);
    }
  }, [props.id]);
  return {
    id: id,
    loading: loading,
    loaded: loaded,
    errors: errors,
    empty: empty,
    resource: resource,
    resources: resources,
    setResource: setResource,
    setResources: setResources,
    meta: meta,
    findOne: findOne,
    findMany: findMany,
    save: save,
    update: update,
    updateWithFiles: updateWithFiles,
    create: create,
    createWithFiles: createWithFiles,
    destroy: destroy,
    updateMany: updateMany,
    deleteMany: deleteMany,
    addItems: addItems,
    removeItems: removeItems,
    addAttachment: addAttachment,
    removeAttachment: removeAttachment,
    updatePositions: updatePositions,
    paginate: paginate,
    loadMore: loadMore,
    handleChange: handleChange,
    activeFilters: activeFilters,
    setActiveFilters: setActiveFilters,
    query: query,
    setQuery: setQuery,
    params: params,
    page: page,
    perPage: perPage,
    numPages: numPages,
    totalCount: totalCount,
    reloadOne: reloadOne,
    reloadMany: reloadMany,
    sortAll: sortAll,
    sortBy: sortBy,
    sortDirection: sortDirection
  };
};
var _default = useResource;
exports.default = _default;