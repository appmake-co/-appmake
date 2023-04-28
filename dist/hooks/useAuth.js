"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _index = require("../index");
var _router = require("next/router");
var _cookiesNext = require("cookies-next");
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
function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return exports;
    };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return (
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      obj[key]
    );
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator =
        outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context),
      }),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value &&
          "object" == _typeof(value) &&
          hasOwn.call(value, "__await")
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke("next", value, resolve, reject);
              },
              function (err) {
                invoke("throw", err, resolve, reject);
              }
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke("throw", error, resolve, reject);
              }
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(
              callInvokeWithMethodAndArg,
              callInvokeWithMethodAndArg
            )
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw ((state = "completed"), context.arg);
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (
            ((state = context.done ? "completed" : "suspendedYield"),
            record.arg === ContinueSentinel)
          )
            continue;
          return { value: record.arg, done: context.done };
        }
        "throw" === record.type &&
          ((state = "completed"),
          (context.method = "throw"),
          (context.arg = record.arg));
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method)
      return (
        (context.delegate = null),
        ("throw" === methodName &&
          delegate.iterator.return &&
          ((context.method = "return"),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          "throw" === context.method)) ||
          ("return" !== methodName &&
            ((context.method = "throw"),
            (context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method"
            )))),
        ContinueSentinel
      );
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return (
        (context.method = "throw"),
        (context.arg = record.arg),
        (context.delegate = null),
        ContinueSentinel
      );
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          "return" !== context.method &&
            ((context.method = "next"), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = "throw"),
        (context.arg = new TypeError("iterator result is not an object")),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = "normal"), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      tryLocsList.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: undefined, done: !0 };
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0,
    }),
    defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0,
    }),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    )),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return (
        !!ctor &&
        (ctor === GeneratorFunction ||
          "GeneratorFunction" === (ctor.displayName || ctor.name))
      );
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype),
            define(genFun, toStringTagSymbol, "GeneratorFunction")),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (
      innerFn,
      outerFn,
      self,
      tryLocsList,
      PromiseImpl
    ) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, "Generator"),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, "toString", function () {
      return "[object Generator]";
    }),
    (exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return (
        keys.reverse(),
        function next() {
          for (; keys.length; ) {
            var key = keys.pop();
            if (key in object)
              return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this)
            "t" === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = "throw"),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = "next"), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally)
                throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ("break" === type || "continue" === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = "next"),
              (this.next = finallyEntry.finallyLoc),
              ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return (
          "break" === record.type || "continue" === record.type
            ? (this.next = record.arg)
            : "return" === record.type
            ? ((this.rval = this.arg = record.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return (
              this.complete(entry.completion, entry.afterLoc),
              resetTryEntry(entry),
              ContinueSentinel
            );
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }),
          "next" === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
  );
}
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
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
var useAuth = function useAuth(props) {
  var _ref = (0, _react.useContext)(_index.ApiContext) || {},
    api = _ref.api;
  var router = (0, _router.useRouter)();
  var _useLoaders = (0, _index.useLoaders)(),
    showLoading = _useLoaders.showLoading,
    hideLoading = _useLoaders.hideLoading;
  var _useAlerts = (0, _index.useAlerts)(),
    showAlertError = _useAlerts.showAlertError;
  var _useContext = (0, _react.useContext)(_index.AuthContext),
    authenticated = _useContext.authenticated,
    setAuthenticated = _useContext.setAuthenticated,
    currentUser = _useContext.currentUser,
    setCurrentUser = _useContext.setCurrentUser,
    setToken = _useContext.setToken,
    setGoogleAuthToken = _useContext.setGoogleAuthToken;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUser = _useState2[1];
  var handleChange = function handleChange(ev) {
    var name = ev.target.name;
    var value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser(
      _objectSpread(
        _objectSpread({}, user),
        {},
        _defineProperty({}, name, value)
      )
    );
  };
  var fetchMe = /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(token) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return api.get("/api/v1/app/users/me", {
                    params: {
                      token: token,
                    },
                  });
                case 3:
                  resp = _context.sent;
                  if (resp && resp.data) {
                    setCurrentUser(resp.data);
                  }
                  return _context.abrupt("return", resp.data);
                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  console.log("Auth error", _context.t0);
                  if (
                    (_context.t0 === null || _context.t0 === void 0
                      ? void 0
                      : _context.t0.status) === 401 ||
                    (_context.t0 === null || _context.t0 === void 0
                      ? void 0
                      : _context.t0.status) === 404 ||
                    _typeof(_context.t0) === undefined
                  ) {
                    showAlertError("Please sign in to continue.");
                    (0, _cookiesNext.deleteCookie)("authToken");
                    router.push("/login");
                  }
                case 12:
                case "end":
                  return _context.stop();
              }
          },
          _callee,
          null,
          [[0, 8]]
        );
      })
    );
    return function fetchMe(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();
  var updateMe = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(user) {
        var resp;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch ((_context2.prev = _context2.next)) {
              case 0:
                showLoading();
                _context2.next = 3;
                return api.put("/api/v1/app/users/".concat(user.id), {
                  user: user,
                });
              case 3:
                resp = _context2.sent;
                setCurrentUser(resp.data);
                hideLoading();
                return _context2.abrupt("return", resp.data);
              case 7:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      })
    );
    return function updateMe(_x3) {
      return _ref3.apply(this, arguments);
    };
  })();
  var loginUser = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(user) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee3$(_context3) {
            while (1)
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  showLoading();
                  _context3.next = 4;
                  return api.post("/api/v1/login", {
                    user: user,
                  });
                case 4:
                  resp = _context3.sent;
                  if (!resp.data) {
                    _context3.next = 13;
                    break;
                  }
                  setCurrentUser(resp.data);
                  setAuthenticated(true);
                  setTokens(resp.data);
                  router.push("/app/dashboard");
                  return _context3.abrupt("return", resp.data);
                case 13:
                  return _context3.abrupt("return", false);
                case 14:
                  _context3.next = 20;
                  break;
                case 16:
                  _context3.prev = 16;
                  _context3.t0 = _context3["catch"](0);
                  console.log(_context3.t0);
                  showAlertError("Your email or password is incorrect");
                case 20:
                  _context3.prev = 20;
                  hideLoading();
                  return _context3.finish(20);
                case 23:
                case "end":
                  return _context3.stop();
              }
          },
          _callee3,
          null,
          [[0, 16, 20, 23]]
        );
      })
    );
    return function loginUser(_x4) {
      return _ref4.apply(this, arguments);
    };
  })();
  var signupUser = /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(user) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee4$(_context4) {
            while (1)
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0;
                  showLoading();
                  _context4.next = 4;
                  return api.post("/api/v1/signup", {
                    user: user,
                  });
                case 4:
                  resp = _context4.sent;
                  if (!resp.data) {
                    _context4.next = 10;
                    break;
                  }
                  setTokens(resp.data);
                  return _context4.abrupt("return", resp.data);
                case 10:
                  return _context4.abrupt("return", false);
                case 11:
                  _context4.next = 16;
                  break;
                case 13:
                  _context4.prev = 13;
                  _context4.t0 = _context4["catch"](0);
                  showAlertError("A user with this email may already exist");
                case 16:
                  _context4.prev = 16;
                  hideLoading();
                  return _context4.finish(16);
                case 19:
                case "end":
                  return _context4.stop();
              }
          },
          _callee4,
          null,
          [[0, 13, 16, 19]]
        );
      })
    );
    return function signupUser(_x5) {
      return _ref5.apply(this, arguments);
    };
  })();
  var resetPassword = /*#__PURE__*/ (function () {
    var _ref6 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(
        password,
        token
      ) {
        var _resp$data, resp;
        return _regeneratorRuntime().wrap(
          function _callee5$(_context5) {
            while (1)
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  _context5.prev = 0;
                  showLoading();
                  _context5.next = 4;
                  return api.post("/api/v1/reset_password", {
                    password: password,
                    change_password_token: token,
                  });
                case 4:
                  resp = _context5.sent;
                  if (
                    !(
                      resp !== null &&
                      resp !== void 0 &&
                      (_resp$data = resp.data) !== null &&
                      _resp$data !== void 0 &&
                      _resp$data.id
                    )
                  ) {
                    _context5.next = 11;
                    break;
                  }
                  setCurrentUser(resp.data);
                  router.push("/app/dashboard");
                  return _context5.abrupt("return", resp.data);
                case 11:
                  return _context5.abrupt("return", false);
                case 12:
                  _context5.next = 17;
                  break;
                case 14:
                  _context5.prev = 14;
                  _context5.t0 = _context5["catch"](0);
                  showAlertError("The token has expired or is no longer valid");
                case 17:
                  _context5.prev = 17;
                  hideLoading();
                  return _context5.finish(17);
                case 20:
                case "end":
                  return _context5.stop();
              }
          },
          _callee5,
          null,
          [[0, 14, 17, 20]]
        );
      })
    );
    return function resetPassword(_x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  })();
  var forgotPassword = /*#__PURE__*/ (function () {
    var _ref7 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee6(email) {
        return _regeneratorRuntime().wrap(
          function _callee6$(_context6) {
            while (1)
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  _context6.prev = 0;
                  showLoading();
                  _context6.next = 4;
                  return api.post("/api/v1/forgot_password", {
                    email: email,
                  });
                case 4:
                  return _context6.abrupt("return", true);
                case 7:
                  _context6.prev = 7;
                  _context6.t0 = _context6["catch"](0);
                  showAlertError("A user with that email could not be found");
                  return _context6.abrupt("return", false);
                case 11:
                  _context6.prev = 11;
                  hideLoading();
                  return _context6.finish(11);
                case 14:
                case "end":
                  return _context6.stop();
              }
          },
          _callee6,
          null,
          [[0, 7, 11, 14]]
        );
      })
    );
    return function forgotPassword(_x8) {
      return _ref7.apply(this, arguments);
    };
  })();
  var magicLink = /*#__PURE__*/ (function () {
    var _ref8 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee7(
        email,
        redirectUrl
      ) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee7$(_context7) {
            while (1)
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  _context7.prev = 0;
                  showLoading();
                  _context7.next = 4;
                  return api.post("/api/v1/magic_link", {
                    email: email,
                    redirect_url: redirectUrl,
                  });
                case 4:
                  resp = _context7.sent;
                  return _context7.abrupt("return", true);
                case 8:
                  _context7.prev = 8;
                  _context7.t0 = _context7["catch"](0);
                  showAlertError("A user with that email could not be found");
                  return _context7.abrupt("return", false);
                case 12:
                  _context7.prev = 12;
                  hideLoading();
                  return _context7.finish(12);
                case 15:
                case "end":
                  return _context7.stop();
              }
          },
          _callee7,
          null,
          [[0, 8, 12, 15]]
        );
      })
    );
    return function magicLink(_x9, _x10) {
      return _ref8.apply(this, arguments);
    };
  })();
  var logoutUser = function logoutUser() {
    setCurrentUser(null);
    setAuthenticated(null);
    (0, _cookiesNext.deleteCookie)("authToken");
    (0, _cookiesNext.deleteCookie)("googleAuthToken");
    router.push("/");
  };
  var authenticateFromToken = function authenticateFromToken(token) {
    if (token) {
      setToken(token);
    } else {
      return false;
    }
  };
  var googleLogin = /*#__PURE__*/ (function () {
    var _ref9 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee8(user) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee8$(_context8) {
            while (1)
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  _context8.prev = 0;
                  showLoading();
                  _context8.next = 4;
                  return api.post("/api/v1/google/login", {
                    user: user,
                  });
                case 4:
                  resp = _context8.sent;
                  if (!(resp !== null && resp !== void 0 && resp.data)) {
                    _context8.next = 11;
                    break;
                  }
                  setTokens(resp.data);
                  setCurrentUser(resp.data);
                  return _context8.abrupt("return", resp.data);
                case 11:
                  return _context8.abrupt("return", false);
                case 12:
                  _context8.next = 17;
                  break;
                case 14:
                  _context8.prev = 14;
                  _context8.t0 = _context8["catch"](0);
                  console.log(_context8.t0);
                case 17:
                  _context8.prev = 17;
                  hideLoading();
                  return _context8.finish(17);
                case 20:
                case "end":
                  return _context8.stop();
              }
          },
          _callee8,
          null,
          [[0, 14, 17, 20]]
        );
      })
    );
    return function googleLogin(_x11) {
      return _ref9.apply(this, arguments);
    };
  })();
  var googleSignup = /*#__PURE__*/ (function () {
    var _ref10 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee9(user) {
        var resp;
        return _regeneratorRuntime().wrap(
          function _callee9$(_context9) {
            while (1)
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  _context9.prev = 0;
                  showLoading();
                  _context9.next = 4;
                  return api.post("/api/v1/google/signup", {
                    user: user,
                  });
                case 4:
                  resp = _context9.sent;
                  if (!(resp !== null && resp !== void 0 && resp.data)) {
                    _context9.next = 11;
                    break;
                  }
                  setTokens(resp.data);
                  setCurrentUser(resp.data);
                  return _context9.abrupt("return", resp.data);
                case 11:
                  return _context9.abrupt("return", false);
                case 12:
                  _context9.next = 17;
                  break;
                case 14:
                  _context9.prev = 14;
                  _context9.t0 = _context9["catch"](0);
                  console.log(_context9.t0);
                case 17:
                  _context9.prev = 17;
                  hideLoading();
                  return _context9.finish(17);
                case 20:
                case "end":
                  return _context9.stop();
              }
          },
          _callee9,
          null,
          [[0, 14, 17, 20]]
        );
      })
    );
    return function googleSignup(_x12) {
      return _ref10.apply(this, arguments);
    };
  })();
  var fetchGoogleToken = /*#__PURE__*/ (function () {
    var _ref11 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee10() {
        var _resp$data2;
        var resp, googleAuth;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1)
            switch ((_context10.prev = _context10.next)) {
              case 0:
                _context10.next = 2;
                return api.get("/api/v1/app/users/refresh_token");
              case 2:
                resp = _context10.sent;
                if (
                  resp !== null &&
                  resp !== void 0 &&
                  (_resp$data2 = resp.data) !== null &&
                  _resp$data2 !== void 0 &&
                  _resp$data2.authentications
                ) {
                  googleAuth = resp.data.authentications.find(function (auth) {
                    return auth.provider === "google";
                  });
                  setGoogleAuthToken(googleAuth.token);
                  (0, _cookiesNext.setCookie)(
                    "googleAuthToken",
                    googleAuth.token
                  );
                }
              case 4:
              case "end":
                return _context10.stop();
            }
        }, _callee10);
      })
    );
    return function fetchGoogleToken() {
      return _ref11.apply(this, arguments);
    };
  })();
  var setTokens = function setTokens(user) {
    setToken(user.token);
    setAuthenticated(true);
    (0, _cookiesNext.setCookie)("authToken", user.token);
    var googleAuth = user.authentications.find(function (auth) {
      return auth.provider === "google";
    });
    if (googleAuth) {
      var token = googleAuth.token;
      setGoogleAuthToken(token);
    }
  };
  (0, _react.useEffect)(
    function () {
      if (currentUser && !authenticated) {
        setTokens(currentUser);
      }
    },
    [currentUser]
  );
  return {
    currentUser: currentUser,
    user: user,
    handleChange: handleChange,
    fetchMe: fetchMe,
    updateMe: updateMe,
    loginUser: loginUser,
    signupUser: signupUser,
    logoutUser: logoutUser,
    resetPassword: resetPassword,
    forgotPassword: forgotPassword,
    googleLogin: googleLogin,
    googleSignup: googleSignup,
    authenticateFromToken: authenticateFromToken,
    fetchGoogleToken: fetchGoogleToken,
  };
};
var _default = useAuth;
exports.default = _default;
