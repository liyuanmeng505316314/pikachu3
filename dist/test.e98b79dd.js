// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n   /*\u8FDB\u884C\u521D\u59CB\u5316*/\n  *{margin: 0px;padding: 0px;}\n  /*\u8BBE\u7F6E\u8138\u90E8\u57FA\u7840\u4FE1\u606F*/\n.face{\n    background-color:rgb(255,219,0);\n    position: relative;\n    width: 100vw;\n    height: 100vh;\n}\n/*\u8BBE\u7F6E\u9F3B\u5B50\u7684\u4E09\u89D2\u5F62\u90E8\u5206*/\n.san{\n    border: 18px solid black;\n    border-color: black transparent transparent transparent;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    top: 260px;\n    left: 50%;\n    margin-left: -20px;\n}\n/*\u8BBE\u7F6E\u9F20\u6807\u79FB\u4E0A\u53BB\u9F3B\u5B50\u4F1A\u52A8\u7684\u52A8\u753B*/\n@keyframes wave{\n    0%{transform: rotate(0deg);}\n    33%{transform: rotate(9deg);}\n    66%{transform: rotate(-9deg);}\n    100%{transform: rotate(0deg);}\n}\n.san:hover{\n    animation: wave 250ms infinite linear;\n}\n/*\u8BBE\u7F6E\u9F3B\u5B50\u7684\u534A\u5706\u5F62\u90E8\u5206*/\n.hu{\n    position: absolute;\n    background-color:black;\n    top: -29px;\n    left:-18px;\n    border-radius: 40px 40px 0 0;\n    width:36px;\n    height: 12px;\n}\n/*\u8BBE\u7F6E\u4E24\u4E2A\u773C\u775B\u5171\u6709\u7684\u4FE1\u606F*/\n.eye{\n    width: 100px;\n    height: 100px; \n    border: 2px solid black;\n    background-color: rgb(45,46,45);\n    position: absolute;\n    border-radius: 50%;\n    top: 200px;\n    left: 50%;\n    margin-left: -15px;\n}\n/*\u8BBE\u7F6E\u77B3\u5B54*/\n.eye::before{\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 44px;\n    height: 44px;\n    border:3px solid black ;\n    background-color: #FFF;\n    position: relative;\n    margin-left: 8px;\n    margin-top: 5px;\n}\n/*\u8BBE\u7F6E\u5DE6\u53F3\u773C*/\n.eye.left{\n    transform: translateX(-220px)\n}\n.eye.right{\n    transform: translateX(150px)\n}\n/*\u8BBE\u7F6E\u4E0A\u5634\u5507\u7684\u5171\u6709\u90E8\u5206*/\n.up{\n    width: 100px;\n    height: 100px;\n    position: relative;\n    left: 50%;\n    top: 250px;\n    margin-left: -50px;\n} \n/*\u8BBE\u7F6E\u4E0A\u5634\u5507\u7684\u5DE6\u8FB9*/\n #left_lip{\n    border: 5px solid black;\n    width: 130px;\n    height: 30px;\n    border-radius: 0 0 0 50px;\n    border-top-color:transparent;\n    transform: rotate(-17deg);\n    position: relative;\n    z-index: 5;\n    background-color: rgb(255,219,0);\n    margin-left: -90px;\n    top:20px;\n}\n/*\u906E\u4F4F\u90A3\u51E0\u6761\u5F88\u4E11\u7684\u900F\u660E\u7684\u865A\u7EBF*/\n#left_lip::before{\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 20px;\n    height: 37px;\n    background-color: rgb(255,219,0);\n    margin-left: 124px;\n    margin-top: -8px;\n}\n#left_lip::after{\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 150px;\n    height: 12px;\n    background-color: rgb(255,219,0);\n    margin-left: -10px;\n    margin-top: -40px;\n}\n/*\u8BBE\u7F6E\u53F3\u5634\u5507*/\n#right_lip{\n    border: 5px solid black;\n    width: 130px;\n    height: 30px;\n    border-radius: 0 0 50px 0;\n    border-top-color:transparent;\n    transform: rotate(17deg);\n    position: relative;\n    margin-left: 50px;\n    top:-22px;\n    z-index: 5;\n    background-color: rgb(255,219,0);\n}\n/*\u906E\u4F4F\u90A3\u4E9B\u5F88\u4E11\u7684\u865A\u7EBF*/\n #right_lip::before{\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 10px;\n    height: 37px;\n    background-color: rgb(255,219,0);\n    margin-left: -8px;\n    z-index: 3;\n    margin-top: -7px;\n}\n#right_lip::after{\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 150px;\n    height: 12px;\n    background-color: rgb(255,219,0);\n    margin-right: -100px;\n    z-index: 3;\n    margin-top: -40px;\n}\n/*\u4E0B\u5634\u5507*/\n.down{\n    position: absolute;\n    height: 250px;\n    left: 50%;\n    top: 320px;\n    margin-left: -140px;\n    width: 280px;\n    overflow: hidden;\n}\n/*\u4E0B\u5634\u5507\u7684\u9634\u5F71\u90E8\u5206*/\n.mouth .down .yuan1{\n    position: absolute;\n    height: 900px;\n    border: 5px solid black;\n    left: 50%;\n    top: -680px;\n    margin-left: -100px;\n    width: 200px;\n    border-radius: 150px/600px ;\n    background-color: #9b000a;\n    overflow: hidden;\n    z-index: 0;\n\n}\n\n.mouth .down .yuan1 .yuan2{\n    width: 300px;\n    height: 300px;\n    background-color: rgb(255, 72, 95);\n    position: absolute;\n    top: 720px;\n    left: 50%;\n    margin-left: -150px;\n    border-radius: 150px;\n}\n/*\u8BBE\u7F6E\u4E24\u4E2A\u9152\u7A9D*/\n.dimple{\n    position: absolute;\n    border: 5px solid black;\n    height: 100px;\n    width: 100px;\n    top: 120px;\n    background-color: red;\n    border-radius: 50%;\n    left: 50%;\n    z-index: 15;\n}\n.dimple.left{\n    left: -100px;\n}\n.dimple.right{\n    left: 450px;\n}\n/*\u5A92\u4F53\u67E5\u8BE2\uFF0C\u8FDB\u884C\u79FB\u52A8\u7AEF\u8BBE\u914D*/\n@media (max-width: 500px) {\n    #html {\n      height: 50vh;\n      overflow: auto;\n    }\n  \n    #div1 {\n      position: relative;\n      top: 0;\n      right: 0;\n    }\n  }\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var t = 20;
var i = 1;

function step() {
  if (n >= _css.default.length) return;
  n += 1;
  demo.innerHTML = _css.default.substring(0, n);
  demo2.innerText = _css.default.substring(0, n);
  demo2.scrollTo(0, 99999);
  btnPause.onclick = function () {
    if (i % 2 != 0) clearTimeout(id);else step();
    i += 1;
  }, btnPlus.onclick = function () {
    if (t > 1.25) t /= 2;else t = 1;
  }, btnSubstraction.onclick = function () {
    if (t < 8) t *= 2;else t = 80;
  };
  var id = setTimeout(step, t);
}

step();
},{"./css":"css.js"}],"../../../Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52559" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../Users/admin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map