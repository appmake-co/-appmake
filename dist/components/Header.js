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
var _router = require("next/router");
var _material = require("@mui/material");
var _iconsMaterial = require("@mui/icons-material");
var _index = require("../index");
var _excluded = ["styles", "logo"];
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
var Header = function Header(_ref) {
  var styles = _ref.styles,
    logo = _ref.logo,
    props = _objectWithoutProperties(_ref, _excluded);
  var router = (0, _router.useRouter)();
  var _useContext = (0, _react.useContext)(_index.AppContext),
    menuOpen = _useContext.menuOpen,
    setMenuOpen = _useContext.setMenuOpen,
    toggleMenu = _useContext.toggleMenu;
  var handleClick = function handleClick(path) {
    setMenuOpen(false);
    router.push(path);
  };
  var handleLogoClick = function handleLogoClick() {
    return handleClick("/");
  };
  return /*#__PURE__*/ _react.default.createElement(
    _material.Box,
    {
      sx: _objectSpread(_objectSpread({}, sx.root), styles),
    },
    /*#__PURE__*/ _react.default.createElement(
      _material.AppBar,
      {
        color: "inherit",
        position: "fixed",
        elevation: 0,
      },
      /*#__PURE__*/ _react.default.createElement(
        _material.Toolbar,
        null,
        /*#__PURE__*/ _react.default.createElement(
          _material.Box,
          {
            sx: sx.container,
          },
          /*#__PURE__*/ _react.default.createElement(
            _material.Button,
            {
              onClick: handleLogoClick,
            },
            logo
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          _material.Box,
          {
            sx: sx.menu,
          },
          /*#__PURE__*/ _react.default.createElement(_index.DesktopMenu, {
            handleClick: handleClick,
          }),
          /*#__PURE__*/ _react.default.createElement(
            _material.IconButton,
            {
              color: "primary",
              onClick: toggleMenu,
              size: "large",
            },
            /*#__PURE__*/ _react.default.createElement(
              _iconsMaterial.Menu,
              null
            )
          )
        )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(_index.MobileMenu, {
      open: menuOpen,
      handleClick: handleClick,
      toggleMenu: toggleMenu,
    })
  );
};
var _default = Header;
exports.default = _default;
var sx = {
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
  },
  logo: {
    width: 80,
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  menuItem: {
    my: 0,
    mx: 1,
  },
};
