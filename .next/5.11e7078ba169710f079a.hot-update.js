webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_scss__ = __webpack_require__("./pages/reset.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reset_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__reset_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__("./pages/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap__ = __webpack_require__("./node_modules/gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_gsap__);
var _jsxFileName = "/Users/dochamp/dochamp-18/pages/index.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      siteAnnoying: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animate();
    }
  }, {
    key: "render",
    value: function render() {
      var buttonText = this.state.siteAnnoying ? "this website is annoying" : "this website is boring";
      var buttonClass = this.state.siteAnnoying ? "annoying" : "boring";
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: buttonClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "emma rae norton aka \"doodybrains\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "gif",
        src: __webpack_require__("./static/wow.gif"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: toggleSite.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, buttonText), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "that-part thingz-i-made-for-friendz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "thingz-i-made-for-friendz"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "erica eso"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "ariel yelen"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "jack reynolds")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "that-part thingz-i-made-at-shift-lab-ny",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "thingz-i-made-at-shift-lab-ny"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-tow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "uprise art"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-tow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "aldrich art museum"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-tow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "snap on mobile app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-tow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "airlift creative")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "that-part thingz-i-made-for-clientz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "thingz-i-made-for-clientz"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "placeholder"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "woman in the cabinet")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "that-part thingz-i-made-for-myself-and-for-you",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "thingz-i-made-for-myself-and-for-you"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "website with the sound of its own making"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "javascript scrabble app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "undecided.js"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "construction site"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "know thyself"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "mixtape app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "sol lewitt - wall drawing #959 (4 the browser)")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "that-part thingz-to-know",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "thingz-to-know"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "website with the sound of its own making is for sale at Printed Matter"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, "I am a masters candidate at ITP NYU"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        className: "link-five",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "website with the sound of its own making is featured on Brutalist Websites")));
    }
  }, {
    key: "animate",
    value: function animate() {
      var link = document.getElementsByClassName('link');
      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(link, 20, {
        bezier: [{
          x: 10,
          y: 30
        }, {
          x: 0,
          y: 20
        }, {
          x: -30,
          y: 20
        }, {
          x: 15,
          y: 0
        }],
        ease: 'Linear.easeNone',
        repeat: -1,
        yoyo: true
      });
      var linkTwo = document.getElementsByClassName('link-two');
      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(linkTwo, 20, {
        bezier: [{
          x: 40,
          y: 10
        }, {
          x: 80,
          y: 30
        }, {
          x: -40,
          y: 60
        }, {
          x: 25,
          y: 15
        }],
        ease: 'Linear.easeNone',
        repeat: -1,
        yoyo: true
      });
      var linkThree = document.getElementsByClassName('link-three');
      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(linkThree, 20, {
        bezier: [{
          x: 90,
          y: 5
        }, {
          x: 20,
          y: 50
        }, {
          x: -10,
          y: 10
        }, {
          x: 15,
          y: 45
        }],
        ease: 'Linear.easeNone',
        repeat: -1,
        yoyo: true
      });
      var linkFour = document.getElementsByClassName('link-four');
      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(linkFour, 20, {
        bezier: [{
          x: 10,
          y: 70
        }, {
          x: 40,
          y: 20
        }, {
          x: -80,
          y: 20
        }, {
          x: 45,
          y: 0
        }],
        ease: 'Linear.easeNone',
        repeat: -1,
        yoyo: true
      });
      var linkFive = document.getElementsByClassName('link-five');
      __WEBPACK_IMPORTED_MODULE_3_gsap__["TweenMax"].to(linkFive, 20, {
        bezier: [{
          x: 60,
          y: 90
        }, {
          x: 0,
          y: 80
        }, {
          x: -90,
          y: 60
        }, {
          x: 35,
          y: 20
        }],
        ease: 'Linear.easeNone',
        repeat: -1,
        yoyo: true
      });
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

function toggleSite() {
  this.setState({
    siteAnnoying: !this.state.siteAnnoying
  });
}

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Users/dochamp/dochamp-18/pages/index.js");
  reactHotLoader.register(toggleSite, "toggleSite", "/Users/dochamp/dochamp-18/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/dochamp/dochamp-18/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.11e7078ba169710f079a.hot-update.js.map