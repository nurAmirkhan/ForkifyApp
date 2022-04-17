// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import { every } from 'core-js/es6/array';
var _domSerializer = require("dom-serializer");
var _domSerializerDefault = parcelHelpers.interopDefault(_domSerializer);
//import 'core-js/stable';
//import 'regenerator-runtime/runtime';
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarksViewJs = require("./views/bookmarksView.js");
var _bookmarksViewJsDefault = parcelHelpers.interopDefault(_bookmarksViewJs);
var _addRecipeViewJs = require("./views/addRecipeView.js");
var _addRecipeViewJsDefault = parcelHelpers.interopDefault(_addRecipeViewJs);
var _configJs = require("./config.js");
///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewJsDefault.default.renderSpinner();
        // Update results view to maek selected search result
        _resultsViewJsDefault.default.update(_modelJs.getSearchResultsPage());
        // Updating the bookmarks view
        _bookmarksViewJsDefault.default.update(_modelJs.state.bookmarks);
        // Loading recipe
        await _modelJs.loadRecipe(id);
        // Rendering recipe
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        _recipeViewJsDefault.default.renderError();
    }
};
const controlSearchResults = async function() {
    try {
        _resultsViewJsDefault.default.renderSpinner();
        // Get search query
        const query = _searchViewJsDefault.default.getQuery();
        if (!query) return;
        // Load search results
        await _modelJs.loadSearchResults(query);
        // Render results
        //resultsView.render(model.state.search.results);
        _resultsViewJsDefault.default.render(_modelJs.getSearchResultsPage(1));
        // Render the initial pagination buttons
        _paginationViewJsDefault.default.render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    // Render new results
    _resultsViewJsDefault.default.render(_modelJs.getSearchResultsPage(goToPage));
    // Render new pagination buttons
    _paginationViewJsDefault.default.render(_modelJs.state.search);
};
const controlServings = function(newServings) {
    // Update the recipe servings (in state)
    _modelJs.updateServings(newServings);
    // Update the recipe view
    //recipeView.render(model.state.recipe);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
};
const controlAddBookmark = function() {
    // Add/remove bookmark
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    // Update the recipeView
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
    //Render the bookmarks
    _bookmarksViewJsDefault.default.render(_modelJs.state.bookmarks);
};
const controlBookmarks = function() {
    _bookmarksViewJsDefault.default.render(_modelJs.state.bookmarks);
};
const controlAddRecipe = async function(newRecipe) {
    try {
        // Show the spinner
        _addRecipeViewJsDefault.default.renderSpinner();
        console.log(newRecipe);
        // Upload new recipe data
        await _modelJs.uploadRecipe(newRecipe);
        console.log(_modelJs.state.recipe);
        // Render recipe
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
        // Success message
        _addRecipeViewJsDefault.default.renderMessage();
        //Render bookmark view
        _bookmarksViewJsDefault.default.render(_modelJs.state.bookmarks);
        // Change ID in URL
        window.history.pushState(null, '', `#${_modelJs.state.recipe.id}`);
        //window.history.back()
        // Close form window
        setTimeout(function() {
            _addRecipeViewJsDefault.default.toggleWindow();
        }, _configJs.MODAL_CLOSE_SEC * 1000);
    } catch (err) {
        console.error(err);
        _addRecipeViewJsDefault.default.renderError(err.message);
    }
};
const newFeature = function() {
    console.log('Welcome to the application!');
};
// Publisher subscriber pattern
const init = function() {
    _bookmarksViewJsDefault.default.addHandlerRender(controlBookmarks);
    _recipeViewJsDefault.default.addHandlerRender(controlRecipes);
    _recipeViewJsDefault.default.addHandlerUpdateServings(controlServings);
    _recipeViewJsDefault.default.addHandlerAddBookmark(controlAddBookmark);
    _searchViewJsDefault.default.addHandlerSearch(controlSearchResults);
    _paginationViewJsDefault.default.addHandlerClick(controlPagination);
    _addRecipeViewJsDefault.default._addHandlerUpload(controlAddRecipe);
    newFeature();
};
init();

},{"dom-serializer":"59L3s","./model.js":"Y4A21","./views/recipeView.js":"l60JC","./views/searchView.js":"9OQAM","./views/resultsView.js":"cSbZE","./views/paginationView.js":"6z7bi","./views/bookmarksView.js":"4Lqzq","./views/addRecipeView.js":"i6DNj","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59L3s":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Module dependencies
 */ var ElementType = __importStar(require("domelementtype"));
var entities_1 = require("entities");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var foreignNames_1 = require("./foreignNames");
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript", 
]);
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    if (!attributes) return;
    return Object.keys(attributes).map(function(key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") /* Fix up mixed-case attribute names */ key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") return key;
        return key + "=\"" + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + "\"";
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr", 
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */ function render(node, options) {
    if (options === void 0) options = {};
    var nodes = "length" in node ? node : [
        node
    ];
    var output = "";
    for(var i = 0; i < nodes.length; i++)output += renderNode(nodes[i], options);
    return output;
}
exports.default = render;
function renderNode(node, options) {
    switch(node.type){
        case ElementType.Root:
            return render(node.children, options);
        case ElementType.Directive:
        case ElementType.Doctype:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title", 
]);
var foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) opts = __assign(__assign({}, opts), {
            xmlMode: false
        });
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) opts = __assign(__assign({}, opts), {
        xmlMode: "foreign"
    });
    var tag = "<" + elem.name;
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) tag += " " + attribs;
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) tag += render(elem.children, opts);
        if (opts.xmlMode || !singleTag.has(elem.name)) tag += "</" + elem.name + ">";
    }
    return tag;
}
function renderDirective(elem) {
    return "<" + elem.data + ">";
}
function renderText(elem, opts) {
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) data = entities_1.encodeXML(data);
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
    return "<!--" + elem.data + "-->";
}

},{"domelementtype":"isPKn","entities":"jp4Mg","./foreignNames":"kUwEA"}],"isPKn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ElementType", ()=>ElementType
);
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */ parcelHelpers.export(exports, "isTag", ()=>isTag
);
parcelHelpers.export(exports, "Root", ()=>Root
);
parcelHelpers.export(exports, "Text", ()=>Text
);
parcelHelpers.export(exports, "Directive", ()=>Directive
);
parcelHelpers.export(exports, "Comment", ()=>Comment
);
parcelHelpers.export(exports, "Script", ()=>Script
);
parcelHelpers.export(exports, "Style", ()=>Style
);
parcelHelpers.export(exports, "Tag", ()=>Tag
);
parcelHelpers.export(exports, "CDATA", ()=>CDATA
);
parcelHelpers.export(exports, "Doctype", ()=>Doctype
);
var ElementType;
(function(ElementType1) {
    /** Type for the root element of a document */ ElementType1["Root"] = "root";
    /** Type for Text */ ElementType1["Text"] = "text";
    /** Type for <? ... ?> */ ElementType1["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType1["Comment"] = "comment";
    /** Type for <script> tags */ ElementType1["Script"] = "script";
    /** Type for <style> tags */ ElementType1["Style"] = "style";
    /** Type for Any tag */ ElementType1["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType1["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType1["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jp4Mg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = require("./decode");
var encode_1 = require("./encode");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */ function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */ function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */ function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = require("./encode");
Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeXML;
    }
});
Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeNonAsciiHTML", {
    enumerable: true,
    get: function() {
        return encode_2.encodeNonAsciiHTML;
    }
});
Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function() {
        return encode_2.escape;
    }
});
Object.defineProperty(exports, "escapeUTF8", {
    enumerable: true,
    get: function() {
        return encode_2.escapeUTF8;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function() {
        return encode_2.encodeHTML;
    }
});
var decode_2 = require("./decode");
Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});
Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTML;
    }
});
Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeHTMLStrict;
    }
});
Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function() {
        return decode_2.decodeXML;
    }
});

},{"./decode":"kWIFC","./encode":"6QLS8"}],"kWIFC":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var legacy_json_1 = __importDefault(require("./maps/legacy.json"));
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var decode_codepoint_1 = __importDefault(require("./decode_codepoint"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function(str) {
        return String(str).replace(strictEntityRe, replace);
    };
}
var sorter = function(a, b) {
    return a < b ? 1 : -1;
};
exports.decodeHTML = function() {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for(var i = 0, j = 0; i < keys.length; i++)if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
    } else keys[i] += ";";
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";") str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function(str) {
        return String(str).replace(re, replacer);
    };
}();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}

},{"./maps/entities.json":"44PRp","./maps/legacy.json":"BQogi","./maps/xml.json":"6rBuv","./decode_codepoint":"csv8t"}],"44PRp":[function(require,module,exports) {
module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

},{}],"BQogi":[function(require,module,exports) {
module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

},{}],"6rBuv":[function(require,module,exports) {
module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

},{}],"csv8t":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var decode_json_1 = __importDefault(require("./maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint || function(codePoint) {
    var output = "";
    if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
};
function decodeCodePoint(codePoint) {
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return "\uFFFD";
    if (codePoint in decode_json_1.default) codePoint = decode_json_1.default[codePoint];
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;

},{"./maps/decode.json":"1NeVF"}],"1NeVF":[function(require,module,exports) {
module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

},{}],"6QLS8":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(require("./maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require("./maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */ exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function(inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for(var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++){
        var k = _a[_i];
        if (k.length === 1) // Add value to single array
        single.push("\\" + k);
        else // Add value to multiple array
        multiple.push(k);
    }
    // Add ranges to single characters.
    single.sort();
    for(var start = 0; start < single.length - 1; start++){
        // Find the end of a run of characters
        var end = start;
        while(end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1))end += 1;
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3) continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null ? function(str) {
    return str.codePointAt(0);
} : function(c) {
    return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function(data) {
        return data.replace(re, function(name) {
            return inverse[name];
        }).replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */ function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */ function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function(data) {
        return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
        });
    };
}

},{"./maps/xml.json":"6rBuv","./maps/entities.json":"44PRp"}],"kUwEA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attributeNames = exports.elementNames = void 0;
exports.elementNames = new Map([
    [
        "altglyph",
        "altGlyph"
    ],
    [
        "altglyphdef",
        "altGlyphDef"
    ],
    [
        "altglyphitem",
        "altGlyphItem"
    ],
    [
        "animatecolor",
        "animateColor"
    ],
    [
        "animatemotion",
        "animateMotion"
    ],
    [
        "animatetransform",
        "animateTransform"
    ],
    [
        "clippath",
        "clipPath"
    ],
    [
        "feblend",
        "feBlend"
    ],
    [
        "fecolormatrix",
        "feColorMatrix"
    ],
    [
        "fecomponenttransfer",
        "feComponentTransfer"
    ],
    [
        "fecomposite",
        "feComposite"
    ],
    [
        "feconvolvematrix",
        "feConvolveMatrix"
    ],
    [
        "fediffuselighting",
        "feDiffuseLighting"
    ],
    [
        "fedisplacementmap",
        "feDisplacementMap"
    ],
    [
        "fedistantlight",
        "feDistantLight"
    ],
    [
        "fedropshadow",
        "feDropShadow"
    ],
    [
        "feflood",
        "feFlood"
    ],
    [
        "fefunca",
        "feFuncA"
    ],
    [
        "fefuncb",
        "feFuncB"
    ],
    [
        "fefuncg",
        "feFuncG"
    ],
    [
        "fefuncr",
        "feFuncR"
    ],
    [
        "fegaussianblur",
        "feGaussianBlur"
    ],
    [
        "feimage",
        "feImage"
    ],
    [
        "femerge",
        "feMerge"
    ],
    [
        "femergenode",
        "feMergeNode"
    ],
    [
        "femorphology",
        "feMorphology"
    ],
    [
        "feoffset",
        "feOffset"
    ],
    [
        "fepointlight",
        "fePointLight"
    ],
    [
        "fespecularlighting",
        "feSpecularLighting"
    ],
    [
        "fespotlight",
        "feSpotLight"
    ],
    [
        "fetile",
        "feTile"
    ],
    [
        "feturbulence",
        "feTurbulence"
    ],
    [
        "foreignobject",
        "foreignObject"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "lineargradient",
        "linearGradient"
    ],
    [
        "radialgradient",
        "radialGradient"
    ],
    [
        "textpath",
        "textPath"
    ], 
]);
exports.attributeNames = new Map([
    [
        "definitionurl",
        "definitionURL"
    ],
    [
        "attributename",
        "attributeName"
    ],
    [
        "attributetype",
        "attributeType"
    ],
    [
        "basefrequency",
        "baseFrequency"
    ],
    [
        "baseprofile",
        "baseProfile"
    ],
    [
        "calcmode",
        "calcMode"
    ],
    [
        "clippathunits",
        "clipPathUnits"
    ],
    [
        "diffuseconstant",
        "diffuseConstant"
    ],
    [
        "edgemode",
        "edgeMode"
    ],
    [
        "filterunits",
        "filterUnits"
    ],
    [
        "glyphref",
        "glyphRef"
    ],
    [
        "gradienttransform",
        "gradientTransform"
    ],
    [
        "gradientunits",
        "gradientUnits"
    ],
    [
        "kernelmatrix",
        "kernelMatrix"
    ],
    [
        "kernelunitlength",
        "kernelUnitLength"
    ],
    [
        "keypoints",
        "keyPoints"
    ],
    [
        "keysplines",
        "keySplines"
    ],
    [
        "keytimes",
        "keyTimes"
    ],
    [
        "lengthadjust",
        "lengthAdjust"
    ],
    [
        "limitingconeangle",
        "limitingConeAngle"
    ],
    [
        "markerheight",
        "markerHeight"
    ],
    [
        "markerunits",
        "markerUnits"
    ],
    [
        "markerwidth",
        "markerWidth"
    ],
    [
        "maskcontentunits",
        "maskContentUnits"
    ],
    [
        "maskunits",
        "maskUnits"
    ],
    [
        "numoctaves",
        "numOctaves"
    ],
    [
        "pathlength",
        "pathLength"
    ],
    [
        "patterncontentunits",
        "patternContentUnits"
    ],
    [
        "patterntransform",
        "patternTransform"
    ],
    [
        "patternunits",
        "patternUnits"
    ],
    [
        "pointsatx",
        "pointsAtX"
    ],
    [
        "pointsaty",
        "pointsAtY"
    ],
    [
        "pointsatz",
        "pointsAtZ"
    ],
    [
        "preservealpha",
        "preserveAlpha"
    ],
    [
        "preserveaspectratio",
        "preserveAspectRatio"
    ],
    [
        "primitiveunits",
        "primitiveUnits"
    ],
    [
        "refx",
        "refX"
    ],
    [
        "refy",
        "refY"
    ],
    [
        "repeatcount",
        "repeatCount"
    ],
    [
        "repeatdur",
        "repeatDur"
    ],
    [
        "requiredextensions",
        "requiredExtensions"
    ],
    [
        "requiredfeatures",
        "requiredFeatures"
    ],
    [
        "specularconstant",
        "specularConstant"
    ],
    [
        "specularexponent",
        "specularExponent"
    ],
    [
        "spreadmethod",
        "spreadMethod"
    ],
    [
        "startoffset",
        "startOffset"
    ],
    [
        "stddeviation",
        "stdDeviation"
    ],
    [
        "stitchtiles",
        "stitchTiles"
    ],
    [
        "surfacescale",
        "surfaceScale"
    ],
    [
        "systemlanguage",
        "systemLanguage"
    ],
    [
        "tablevalues",
        "tableValues"
    ],
    [
        "targetx",
        "targetX"
    ],
    [
        "targety",
        "targetY"
    ],
    [
        "textlength",
        "textLength"
    ],
    [
        "viewbox",
        "viewBox"
    ],
    [
        "viewtarget",
        "viewTarget"
    ],
    [
        "xchannelselector",
        "xChannelSelector"
    ],
    [
        "ychannelselector",
        "yChannelSelector"
    ],
    [
        "zoomandpan",
        "zoomAndPan"
    ], 
]);

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResults", ()=>loadSearchResults
);
parcelHelpers.export(exports, "getSearchResultsPage", ()=>getSearchResultsPage
);
parcelHelpers.export(exports, "updateServings", ()=>updateServings
);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark
);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark
);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe
);
var _config = require("./config");
//import { getJSON, sendJSON } from './helpers';
var _helpers = require("./helpers");
var _process = require("process");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        resultsPerPage: _config.RES_PER_PAGE,
        page: 1
    },
    bookmarks: []
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await _helpers.AJAX(`${_config.API_URL}/${id}?key=${_config.KEY}`);
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id
        )) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        // Temp error handling
        console.error(`${err} 💥 `);
        throw err;
    }
};
const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await _helpers.AJAX(`${_config.API_URL}?search=${query}&key=${_config.KEY}`);
        console.log(data.data.recipes);
        state.search.results = data.data.recipes.map((rec)=>{
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...rec.key && {
                    key: rec.key
                }
            };
        });
        state.search.page = 1;
    } catch (err) {
        console.error(`${err} 💥 `);
        throw err;
    }
};
const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; //0;
    const end = page * state.search.resultsPerPage; //9;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // NewQt = oldQty * newServings/oldServings// 2 * 8 // 4 = 4
    });
    state.recipe.servings = newServings;
};
const persistBookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    // Add bookmark
    state.bookmarks.push(recipe);
    // Mark the current recipe as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};
const deleteBookmark = function(id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex((el)=>el.id === id
    );
    state.bookmarks.splice(index, 1);
    // Mark the current recipe as NOT bookmarked
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
const clearBookmarks = function() {
    localStorage.clear('bookmarks');
};
const uploadRecipe = async function(newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== ''
        ).map((ing)=>{
            const ingArr = ing[1].split(',').map((el)=>el.trim()
            );
            if (ingArr.length !== 3) throw new Error('Wrong ingridient format! Please use the correct format :)');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients
        };
        const data = await _helpers.AJAX(`${_config.API_URL}?key=${_config.KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","./helpers":"hGI1E","process":"d5jf4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC
);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE
);
parcelHelpers.export(exports, "KEY", ()=>KEY
);
parcelHelpers.export(exports, "MODAL_CLOSE_SEC", ()=>MODAL_CLOSE_SEC
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const TIMEOUT_SEC = 10000000;
const RES_PER_PAGE = 10;
const KEY = '38ddc26c-28d1-4aef-8bea-8129a2ea5e2f';
const MODAL_CLOSE_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX
);
var _configJs = require("./config.js");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout(_configJs.TIMEOUT_SEC)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
}; // export const getJSON = async function (url) {
 //   try {
 //     const fetchPro = fetch(url);
 //     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
 //     const data = await res.json();
 //     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
 //     return data;
 //   } catch (err) {
 //     throw err;
 //   }
 // };
 // export const sendJSON = async function (url, uploadData) {
 //   try {
 //     const fetchPro = fetch(url, {
 //       method: 'POST',
 //       headers: {
 //         'Content-Type': 'application/json',
 //       },
 //       body: JSON.stringify(uploadData),
 //     });
 //     const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
 //     const data = await res.json();
 //     if (!res.ok) throw new Error(`${data.message} (${res.status})`);
 //     return data;
 //   } catch (err) {
 //     throw err;
 //   }
 // };

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
var _immutable = require("immutable");
class recipeView extends _viewDefault.default {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please find another one!';
    _message = '';
    // Publisher subscriber pattern
    addHandlerRender(handler) {
        [
            'hashchange',
            'load'
        ].forEach((ev)=>window.addEventListener(ev, handler)
        );
    }
    addHandlerUpdateServings(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--update-servings');
            if (!btn) return;
            const updateTo = +btn.dataset.updateTo;
            console.log(btn);
            handler(updateTo);
        });
    }
    addHandlerAddBookmark(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmark');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_iconsSvgDefault.default}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${_iconsSvgDefault.default}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings - 1}">
                <svg>
                  <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings"data-update-to="${this._data.servings + 1}">
                <svg>
                  <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${_iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${_iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

          ${this._data.ingredients.map(this._generateMarkupIngridient).join('')}
        
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `;
    }
    _generateMarkupIngridient(ing) {
        return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${_iconsSvgDefault.default}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${ing.quantity ? new _fractional.Fraction(ing.quantity).toString() : ''}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
          </div>
        </li>
      `;
    }
}
exports.default = new recipeView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","fractional":"3SU56","immutable":"iIkjt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bWlJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    // jsdoc.app - more information
    /**
   * Render the received object to the DOM
   * @param {Object | Object []} data  The data to the rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is returned if render = false
   * @this {Object}View instance
   * @author Amirkhan Nurmukhamed
   * @todo Finish implementation
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));
        // Updates changed TEXT
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            //console.log(curEl, newEl.isEqualNode(curEl));
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') curEl.textContent = newEl.textContent;
            // Updates changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>curEl.setAttribute(attr.name, attr.value)
            );
        });
    }
    _clear() {
        this._parentElement.innerHTML = ' ';
    }
    renderSpinner() {
        const markup = `
        <div class="spinner">
                <svg>
                <use href="${_iconsSvgDefault.default}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
    <div class="error">
    <div>
          <svg>
         <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>
         </svg>
     </div>
    <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message = this._message) {
        const markup = `
    <div class="message">
    <div>
          <svg>
         <use href="${_iconsSvgDefault.default}#icon-smile"></use>
         </svg>
     </div>
    <p>${message}</p>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== 'undefined' && denominator) {
        if (typeof numerator === 'number' && typeof denominator === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === 'string' && typeof denominator === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof num === 'number') {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === 'string') {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ');
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === 'string' && a.match('\.')) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num)if (num % _factor === 0) {
        factors.push(_factor); // so keep it
        num = num / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num != 1) factors.push(num); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"iIkjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collection", ()=>Collection
);
parcelHelpers.export(exports, "Iterable", ()=>Iterable
);
parcelHelpers.export(exports, "List", ()=>List
);
parcelHelpers.export(exports, "Map", ()=>Map
);
parcelHelpers.export(exports, "OrderedMap", ()=>OrderedMap
);
parcelHelpers.export(exports, "OrderedSet", ()=>OrderedSet
);
parcelHelpers.export(exports, "Range", ()=>Range
);
parcelHelpers.export(exports, "Record", ()=>Record
);
parcelHelpers.export(exports, "Repeat", ()=>Repeat
);
parcelHelpers.export(exports, "Seq", ()=>Seq
);
parcelHelpers.export(exports, "Set", ()=>Set
);
parcelHelpers.export(exports, "Stack", ()=>Stack
);
parcelHelpers.export(exports, "fromJS", ()=>fromJS
);
parcelHelpers.export(exports, "get", ()=>get
);
parcelHelpers.export(exports, "getIn", ()=>getIn$1
);
parcelHelpers.export(exports, "has", ()=>has
);
parcelHelpers.export(exports, "hasIn", ()=>hasIn$1
);
parcelHelpers.export(exports, "hash", ()=>hash
);
parcelHelpers.export(exports, "is", ()=>is
);
parcelHelpers.export(exports, "isAssociative", ()=>isAssociative
);
parcelHelpers.export(exports, "isCollection", ()=>isCollection
);
parcelHelpers.export(exports, "isImmutable", ()=>isImmutable
);
parcelHelpers.export(exports, "isIndexed", ()=>isIndexed
);
parcelHelpers.export(exports, "isKeyed", ()=>isKeyed
);
parcelHelpers.export(exports, "isList", ()=>isList
);
parcelHelpers.export(exports, "isMap", ()=>isMap
);
parcelHelpers.export(exports, "isOrdered", ()=>isOrdered
);
parcelHelpers.export(exports, "isOrderedMap", ()=>isOrderedMap
);
parcelHelpers.export(exports, "isOrderedSet", ()=>isOrderedSet
);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject
);
parcelHelpers.export(exports, "isRecord", ()=>isRecord
);
parcelHelpers.export(exports, "isSeq", ()=>isSeq
);
parcelHelpers.export(exports, "isSet", ()=>isSet
);
parcelHelpers.export(exports, "isStack", ()=>isStack
);
parcelHelpers.export(exports, "isValueObject", ()=>isValueObject
);
parcelHelpers.export(exports, "merge", ()=>merge
);
parcelHelpers.export(exports, "mergeDeep", ()=>mergeDeep$1
);
parcelHelpers.export(exports, "mergeDeepWith", ()=>mergeDeepWith$1
);
parcelHelpers.export(exports, "mergeWith", ()=>mergeWith
);
parcelHelpers.export(exports, "remove", ()=>remove
);
parcelHelpers.export(exports, "removeIn", ()=>removeIn
);
parcelHelpers.export(exports, "set", ()=>set
);
parcelHelpers.export(exports, "setIn", ()=>setIn$1
);
parcelHelpers.export(exports, "update", ()=>update$1
);
parcelHelpers.export(exports, "updateIn", ()=>updateIn$1
);
parcelHelpers.export(exports, "version", ()=>version
);
/**
 * MIT License
 * 
 * Copyright (c) 2014-present, Lee Byron and other contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var DELETE = 'delete';
// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;
// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};
// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
    return {
        value: false
    };
}
function SetRef(ref) {
    if (ref) ref.value = true;
}
// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}
function ensureSize(iter) {
    if (iter.size === undefined) iter.size = iter.__iterate(returnTrue);
    return iter.size;
}
function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
        var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
        if ('' + uint32Index !== index || uint32Index === 4294967295) return NaN;
        index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
}
function returnTrue() {
    return true;
}
function wholeSlice(begin, end, size) {
    return (begin === 0 && !isNeg(begin) || size !== undefined && begin <= -size) && (end === undefined || size !== undefined && end >= size);
}
function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
}
function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
}
function resolveIndex(index, size, defaultIndex) {
    // Sanitize indices using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    return index === undefined ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === undefined || size === index ? index : Math.min(size, index) | 0;
}
function isNeg(value) {
    // Account for -0 which is negative, but not less than 0.
    return value < 0 || value === 0 && 1 / value === -Infinity;
}
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';
function isCollection(maybeCollection) {
    return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}
var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';
function isKeyed(maybeKeyed) {
    return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}
var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';
function isIndexed(maybeIndexed) {
    return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}
function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}
var Collection = function Collection(value) {
    return isCollection(value) ? value : Seq(value);
};
var KeyedCollection = /*@__PURE__*/ function(Collection1) {
    function KeyedCollection1(value) {
        return isKeyed(value) ? value : KeyedSeq(value);
    }
    if (Collection1) KeyedCollection1.__proto__ = Collection1;
    KeyedCollection1.prototype = Object.create(Collection1 && Collection1.prototype);
    KeyedCollection1.prototype.constructor = KeyedCollection1;
    return KeyedCollection1;
}(Collection);
var IndexedCollection = /*@__PURE__*/ function(Collection2) {
    function IndexedCollection1(value) {
        return isIndexed(value) ? value : IndexedSeq(value);
    }
    if (Collection2) IndexedCollection1.__proto__ = Collection2;
    IndexedCollection1.prototype = Object.create(Collection2 && Collection2.prototype);
    IndexedCollection1.prototype.constructor = IndexedCollection1;
    return IndexedCollection1;
}(Collection);
var SetCollection = /*@__PURE__*/ function(Collection3) {
    function SetCollection1(value) {
        return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    if (Collection3) SetCollection1.__proto__ = Collection3;
    SetCollection1.prototype = Object.create(Collection3 && Collection3.prototype);
    SetCollection1.prototype.constructor = SetCollection1;
    return SetCollection1;
}(Collection);
Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;
var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';
function isSeq(maybeSeq) {
    return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}
var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';
function isRecord(maybeRecord) {
    return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}
function isImmutable(maybeImmutable) {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}
var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';
function isOrdered(maybeOrdered) {
    return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}
var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;
var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
var Iterator = function Iterator(next) {
    this.next = next;
};
Iterator.prototype.toString = function toString() {
    return '[Iterator]';
};
Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;
Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
    return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
    return this;
};
function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [
        k,
        v
    ];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
        value: value,
        done: false
    };
    return iteratorResult;
}
function iteratorDone() {
    return {
        value: undefined,
        done: true
    };
}
function hasIterator(maybeIterable) {
    if (Array.isArray(maybeIterable)) // IE11 trick as it does not support `Symbol.iterator`
    return true;
    return !!getIteratorFn(maybeIterable);
}
function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
}
function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
}
function getIteratorFn(iterable) {
    var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') return iteratorFn;
}
function isEntriesIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.entries;
}
function isKeysIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.keys;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isArrayLike(value) {
    if (Array.isArray(value) || typeof value === 'string') return true;
    return value && typeof value === 'object' && Number.isInteger(value.length) && value.length >= 0 && (value.length === 0 ? Object.keys(value).length === 1 : // in the array-like may be found (which could be undefined).
    value.hasOwnProperty(value.length - 1));
}
var Seq = /*@__PURE__*/ function(Collection4) {
    function Seq1(value) {
        return value === null || value === undefined ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
    }
    if (Collection4) Seq1.__proto__ = Collection4;
    Seq1.prototype = Object.create(Collection4 && Collection4.prototype);
    Seq1.prototype.constructor = Seq1;
    Seq1.prototype.toSeq = function toSeq() {
        return this;
    };
    Seq1.prototype.toString = function toString() {
        return this.__toString('Seq {', '}');
    };
    Seq1.prototype.cacheResult = function cacheResult() {
        if (!this._cache && this.__iterateUncached) {
            this._cache = this.entrySeq().toArray();
            this.size = this._cache.length;
        }
        return this;
    };
    // abstract __iterateUncached(fn, reverse)
    Seq1.prototype.__iterate = function __iterate(fn, reverse) {
        var cache = this._cache;
        if (cache) {
            var size = cache.length;
            var i = 0;
            while(i !== size){
                var entry = cache[reverse ? size - ++i : i++];
                if (fn(entry[1], entry[0], this) === false) break;
            }
            return i;
        }
        return this.__iterateUncached(fn, reverse);
    };
    // abstract __iteratorUncached(type, reverse)
    Seq1.prototype.__iterator = function __iterator(type, reverse) {
        var cache = this._cache;
        if (cache) {
            var size = cache.length;
            var i = 0;
            return new Iterator(function() {
                if (i === size) return iteratorDone();
                var entry = cache[reverse ? size - ++i : i++];
                return iteratorValue(type, entry[0], entry[1]);
            });
        }
        return this.__iteratorUncached(type, reverse);
    };
    return Seq1;
}(Collection);
var KeyedSeq = /*@__PURE__*/ function(Seq2) {
    function KeyedSeq1(value) {
        return value === null || value === undefined ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
    }
    if (Seq2) KeyedSeq1.__proto__ = Seq2;
    KeyedSeq1.prototype = Object.create(Seq2 && Seq2.prototype);
    KeyedSeq1.prototype.constructor = KeyedSeq1;
    KeyedSeq1.prototype.toKeyedSeq = function toKeyedSeq() {
        return this;
    };
    return KeyedSeq1;
}(Seq);
var IndexedSeq = /*@__PURE__*/ function(Seq3) {
    function IndexedSeq1(value) {
        return value === null || value === undefined ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
    }
    if (Seq3) IndexedSeq1.__proto__ = Seq3;
    IndexedSeq1.prototype = Object.create(Seq3 && Seq3.prototype);
    IndexedSeq1.prototype.constructor = IndexedSeq1;
    IndexedSeq1.of = function of() {
        return IndexedSeq1(arguments);
    };
    IndexedSeq1.prototype.toIndexedSeq = function toIndexedSeq() {
        return this;
    };
    IndexedSeq1.prototype.toString = function toString() {
        return this.__toString('Seq [', ']');
    };
    return IndexedSeq1;
}(Seq);
var SetSeq = /*@__PURE__*/ function(Seq4) {
    function SetSeq1(value) {
        return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
    }
    if (Seq4) SetSeq1.__proto__ = Seq4;
    SetSeq1.prototype = Object.create(Seq4 && Seq4.prototype);
    SetSeq1.prototype.constructor = SetSeq1;
    SetSeq1.of = function of() {
        return SetSeq1(arguments);
    };
    SetSeq1.prototype.toSetSeq = function toSetSeq() {
        return this;
    };
    return SetSeq1;
}(Seq);
Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;
Seq.prototype[IS_SEQ_SYMBOL] = true;
// #pragma Root Sequences
var ArraySeq = /*@__PURE__*/ function(IndexedSeq2) {
    function ArraySeq1(array) {
        this._array = array;
        this.size = array.length;
    }
    if (IndexedSeq2) ArraySeq1.__proto__ = IndexedSeq2;
    ArraySeq1.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
    ArraySeq1.prototype.constructor = ArraySeq1;
    ArraySeq1.prototype.get = function get(index, notSetValue) {
        return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq1.prototype.__iterate = function __iterate(fn, reverse) {
        var array = this._array;
        var size = array.length;
        var i = 0;
        while(i !== size){
            var ii = reverse ? size - ++i : i++;
            if (fn(array[ii], ii, this) === false) break;
        }
        return i;
    };
    ArraySeq1.prototype.__iterator = function __iterator(type, reverse) {
        var array = this._array;
        var size = array.length;
        var i = 0;
        return new Iterator(function() {
            if (i === size) return iteratorDone();
            var ii = reverse ? size - ++i : i++;
            return iteratorValue(type, ii, array[ii]);
        });
    };
    return ArraySeq1;
}(IndexedSeq);
var ObjectSeq = /*@__PURE__*/ function(KeyedSeq2) {
    function ObjectSeq1(object) {
        var keys = Object.keys(object);
        this._object = object;
        this._keys = keys;
        this.size = keys.length;
    }
    if (KeyedSeq2) ObjectSeq1.__proto__ = KeyedSeq2;
    ObjectSeq1.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
    ObjectSeq1.prototype.constructor = ObjectSeq1;
    ObjectSeq1.prototype.get = function get(key, notSetValue) {
        if (notSetValue !== undefined && !this.has(key)) return notSetValue;
        return this._object[key];
    };
    ObjectSeq1.prototype.has = function has(key) {
        return hasOwnProperty.call(this._object, key);
    };
    ObjectSeq1.prototype.__iterate = function __iterate(fn, reverse) {
        var object = this._object;
        var keys = this._keys;
        var size = keys.length;
        var i = 0;
        while(i !== size){
            var key = keys[reverse ? size - ++i : i++];
            if (fn(object[key], key, this) === false) break;
        }
        return i;
    };
    ObjectSeq1.prototype.__iterator = function __iterator(type, reverse) {
        var object = this._object;
        var keys = this._keys;
        var size = keys.length;
        var i = 0;
        return new Iterator(function() {
            if (i === size) return iteratorDone();
            var key = keys[reverse ? size - ++i : i++];
            return iteratorValue(type, key, object[key]);
        });
    };
    return ObjectSeq1;
}(KeyedSeq);
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
var CollectionSeq = /*@__PURE__*/ function(IndexedSeq3) {
    function CollectionSeq1(collection) {
        this._collection = collection;
        this.size = collection.length || collection.size;
    }
    if (IndexedSeq3) CollectionSeq1.__proto__ = IndexedSeq3;
    CollectionSeq1.prototype = Object.create(IndexedSeq3 && IndexedSeq3.prototype);
    CollectionSeq1.prototype.constructor = CollectionSeq1;
    CollectionSeq1.prototype.__iterateUncached = function __iterateUncached(fn, reverse) {
        if (reverse) return this.cacheResult().__iterate(fn, reverse);
        var collection = this._collection;
        var iterator = getIterator(collection);
        var iterations = 0;
        if (isIterator(iterator)) {
            var step;
            while(!(step = iterator.next()).done){
                if (fn(step.value, iterations++, this) === false) break;
            }
        }
        return iterations;
    };
    CollectionSeq1.prototype.__iteratorUncached = function __iteratorUncached(type, reverse) {
        if (reverse) return this.cacheResult().__iterator(type, reverse);
        var collection = this._collection;
        var iterator = getIterator(collection);
        if (!isIterator(iterator)) return new Iterator(iteratorDone);
        var iterations = 0;
        return new Iterator(function() {
            var step = iterator.next();
            return step.done ? step : iteratorValue(type, iterations++, step.value);
        });
    };
    return CollectionSeq1;
}(IndexedSeq);
// # pragma Helper functions
var EMPTY_SEQ;
function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}
function keyedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) return seq.fromEntrySeq();
    if (typeof value === 'object') return new ObjectSeq(value);
    throw new TypeError('Expected Array or collection object of [k, v] entries, or keyed object: ' + value);
}
function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) return seq;
    throw new TypeError('Expected Array or collection object of values: ' + value);
}
function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) return isEntriesIterable(value) ? seq.fromEntrySeq() : isKeysIterable(value) ? seq.toSetSeq() : seq;
    if (typeof value === 'object') return new ObjectSeq(value);
    throw new TypeError('Expected Array or collection object of values, or keyed object: ' + value);
}
function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : undefined;
}
var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';
function isMap(maybeMap) {
    return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}
function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}
function isValueObject(maybeValue) {
    return Boolean(maybeValue && typeof maybeValue.equals === 'function' && typeof maybeValue.hashCode === 'function');
}
/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */ function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) return true;
    if (!valueA || !valueB) return false;
    if (typeof valueA.valueOf === 'function' && typeof valueB.valueOf === 'function') {
        valueA = valueA.valueOf();
        valueB = valueB.valueOf();
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) return true;
        if (!valueA || !valueB) return false;
    }
    return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
}
var imul = typeof Math.imul === 'function' && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul(a, b) {
    a |= 0; // int
    b |= 0; // int
    var c = a & 65535;
    var d = b & 65535;
    // Shift by 0 fixes the sign on the high part.
    return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0; // int
};
// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
    return i32 >>> 1 & 1073741824 | i32 & 3221225471;
}
var defaultValueOf = Object.prototype.valueOf;
function hash(o) {
    if (o == null) return hashNullish(o);
    if (typeof o.hashCode === 'function') // Drop any high bits from accidentally long hash codes.
    return smi(o.hashCode(o));
    var v = valueOf(o);
    if (v == null) return hashNullish(v);
    switch(typeof v){
        case 'boolean':
            // The hash values for built-in constants are a 1 value for each 5-byte
            // shift region expect for the first, which encodes the value. This
            // reduces the odds of a hash collision for these common values.
            return v ? 1108378657 : 1108378656;
        case 'number':
            return hashNumber(v);
        case 'string':
            return v.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(v) : hashString(v);
        case 'object':
        case 'function':
            return hashJSObj(v);
        case 'symbol':
            return hashSymbol(v);
        default:
            if (typeof v.toString === 'function') return hashString(v.toString());
            throw new Error('Value type ' + typeof v + ' cannot be hashed.');
    }
}
function hashNullish(nullish) {
    return nullish === null ? 1108378658 : /* undefined */ 1108378659;
}
// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
    if (n !== n || n === Infinity) return 0;
    var hash1 = n | 0;
    if (hash1 !== n) hash1 ^= n * 4294967295;
    while(n > 4294967295){
        n /= 4294967295;
        hash1 ^= n;
    }
    return smi(hash1);
}
function cachedHashString(string) {
    var hashed = stringHashCache[string];
    if (hashed === undefined) {
        hashed = hashString(string);
        if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
            STRING_HASH_CACHE_SIZE = 0;
            stringHashCache = {};
        }
        STRING_HASH_CACHE_SIZE++;
        stringHashCache[string] = hashed;
    }
    return hashed;
}
// http://jsperf.com/hashing-strings
function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hashed = 0;
    for(var ii = 0; ii < string.length; ii++)hashed = 31 * hashed + string.charCodeAt(ii) | 0;
    return smi(hashed);
}
function hashSymbol(sym) {
    var hashed = symbolMap[sym];
    if (hashed !== undefined) return hashed;
    hashed = nextHash();
    symbolMap[sym] = hashed;
    return hashed;
}
function hashJSObj(obj) {
    var hashed;
    if (usingWeakMap) {
        hashed = weakMap.get(obj);
        if (hashed !== undefined) return hashed;
    }
    hashed = obj[UID_HASH_KEY];
    if (hashed !== undefined) return hashed;
    if (!canDefineProperty) {
        hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
        if (hashed !== undefined) return hashed;
        hashed = getIENodeHash(obj);
        if (hashed !== undefined) return hashed;
    }
    hashed = nextHash();
    if (usingWeakMap) weakMap.set(obj, hashed);
    else if (isExtensible !== undefined && isExtensible(obj) === false) throw new Error('Non-extensible objects are not allowed as keys.');
    else if (canDefineProperty) Object.defineProperty(obj, UID_HASH_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: hashed
    });
    else if (obj.propertyIsEnumerable !== undefined && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
        // Since we can't define a non-enumerable property on the object
        // we'll hijack one of the less-used non-enumerable properties to
        // save our hash on it. Since this is a function it will not show up in
        // `JSON.stringify` which is what we want.
        obj.propertyIsEnumerable = function() {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
        };
        obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
    } else if (obj.nodeType !== undefined) // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
    else throw new Error('Unable to set a non-enumerable property on object.');
    return hashed;
}
// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;
// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = function() {
    try {
        Object.defineProperty({}, '@', {});
        return true;
    } catch (e) {
        return false;
    }
}();
// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
    if (node && node.nodeType > 0) switch(node.nodeType){
        case 1:
            return node.uniqueID;
        case 9:
            return node.documentElement && node.documentElement.uniqueID;
    }
}
function valueOf(obj) {
    return obj.valueOf !== defaultValueOf && typeof obj.valueOf === 'function' ? obj.valueOf(obj) : obj;
}
function nextHash() {
    var nextHash1 = ++_objHashUID;
    if (_objHashUID & 1073741824) _objHashUID = 0;
    return nextHash1;
}
// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) weakMap = new WeakMap();
var symbolMap = Object.create(null);
var _objHashUID = 0;
var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') UID_HASH_KEY = Symbol(UID_HASH_KEY);
var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};
var ToKeyedSequence = /*@__PURE__*/ function(KeyedSeq3) {
    function ToKeyedSequence1(indexed, useKeys) {
        this._iter = indexed;
        this._useKeys = useKeys;
        this.size = indexed.size;
    }
    if (KeyedSeq3) ToKeyedSequence1.__proto__ = KeyedSeq3;
    ToKeyedSequence1.prototype = Object.create(KeyedSeq3 && KeyedSeq3.prototype);
    ToKeyedSequence1.prototype.constructor = ToKeyedSequence1;
    ToKeyedSequence1.prototype.get = function get(key, notSetValue) {
        return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence1.prototype.has = function has(key) {
        return this._iter.has(key);
    };
    ToKeyedSequence1.prototype.valueSeq = function valueSeq() {
        return this._iter.valueSeq();
    };
    ToKeyedSequence1.prototype.reverse = function reverse() {
        var this$1$1 = this;
        var reversedSequence = reverseFactory(this, true);
        if (!this._useKeys) reversedSequence.valueSeq = function() {
            return this$1$1._iter.toSeq().reverse();
        };
        return reversedSequence;
    };
    ToKeyedSequence1.prototype.map = function map(mapper, context) {
        var this$1$1 = this;
        var mappedSequence = mapFactory(this, mapper, context);
        if (!this._useKeys) mappedSequence.valueSeq = function() {
            return this$1$1._iter.toSeq().map(mapper, context);
        };
        return mappedSequence;
    };
    ToKeyedSequence1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        return this._iter.__iterate(function(v, k) {
            return fn(v, k, this$1$1);
        }, reverse);
    };
    ToKeyedSequence1.prototype.__iterator = function __iterator(type, reverse) {
        return this._iter.__iterator(type, reverse);
    };
    return ToKeyedSequence1;
}(KeyedSeq);
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
var ToIndexedSequence = /*@__PURE__*/ function(IndexedSeq4) {
    function ToIndexedSequence1(iter) {
        this._iter = iter;
        this.size = iter.size;
    }
    if (IndexedSeq4) ToIndexedSequence1.__proto__ = IndexedSeq4;
    ToIndexedSequence1.prototype = Object.create(IndexedSeq4 && IndexedSeq4.prototype);
    ToIndexedSequence1.prototype.constructor = ToIndexedSequence1;
    ToIndexedSequence1.prototype.includes = function includes(value) {
        return this._iter.includes(value);
    };
    ToIndexedSequence1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        var i = 0;
        reverse && ensureSize(this);
        return this._iter.__iterate(function(v) {
            return fn(v, reverse ? this$1$1.size - ++i : i++, this$1$1);
        }, reverse);
    };
    ToIndexedSequence1.prototype.__iterator = function __iterator(type, reverse) {
        var this$1$1 = this;
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var i = 0;
        reverse && ensureSize(this);
        return new Iterator(function() {
            var step = iterator.next();
            return step.done ? step : iteratorValue(type, reverse ? this$1$1.size - ++i : i++, step.value, step);
        });
    };
    return ToIndexedSequence1;
}(IndexedSeq);
var ToSetSequence = /*@__PURE__*/ function(SetSeq2) {
    function ToSetSequence1(iter) {
        this._iter = iter;
        this.size = iter.size;
    }
    if (SetSeq2) ToSetSequence1.__proto__ = SetSeq2;
    ToSetSequence1.prototype = Object.create(SetSeq2 && SetSeq2.prototype);
    ToSetSequence1.prototype.constructor = ToSetSequence1;
    ToSetSequence1.prototype.has = function has(key) {
        return this._iter.includes(key);
    };
    ToSetSequence1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        return this._iter.__iterate(function(v) {
            return fn(v, v, this$1$1);
        }, reverse);
    };
    ToSetSequence1.prototype.__iterator = function __iterator(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
            var step = iterator.next();
            return step.done ? step : iteratorValue(type, step.value, step.value, step);
        });
    };
    return ToSetSequence1;
}(SetSeq);
var FromEntriesSequence = /*@__PURE__*/ function(KeyedSeq4) {
    function FromEntriesSequence1(entries) {
        this._iter = entries;
        this.size = entries.size;
    }
    if (KeyedSeq4) FromEntriesSequence1.__proto__ = KeyedSeq4;
    FromEntriesSequence1.prototype = Object.create(KeyedSeq4 && KeyedSeq4.prototype);
    FromEntriesSequence1.prototype.constructor = FromEntriesSequence1;
    FromEntriesSequence1.prototype.entrySeq = function entrySeq() {
        return this._iter.toSeq();
    };
    FromEntriesSequence1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        return this._iter.__iterate(function(entry) {
            // Check if entry exists first so array access doesn't throw for holes
            // in the parent iteration.
            if (entry) {
                validateEntry(entry);
                var indexedCollection = isCollection(entry);
                return fn(indexedCollection ? entry.get(1) : entry[1], indexedCollection ? entry.get(0) : entry[0], this$1$1);
            }
        }, reverse);
    };
    FromEntriesSequence1.prototype.__iterator = function __iterator(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
            while(true){
                var step = iterator.next();
                if (step.done) return step;
                var entry = step.value;
                // Check if entry exists first so array access doesn't throw for holes
                // in the parent iteration.
                if (entry) {
                    validateEntry(entry);
                    var indexedCollection = isCollection(entry);
                    return iteratorValue(type, indexedCollection ? entry.get(0) : entry[0], indexedCollection ? entry.get(1) : entry[1], step);
                }
            }
        });
    };
    return FromEntriesSequence1;
}(KeyedSeq);
ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
function flipFactory(collection) {
    var flipSequence = makeSequence(collection);
    flipSequence._iter = collection;
    flipSequence.size = collection.size;
    flipSequence.flip = function() {
        return collection;
    };
    flipSequence.reverse = function() {
        var reversedSequence = collection.reverse.apply(this); // super.reverse()
        reversedSequence.flip = function() {
            return collection.reverse();
        };
        return reversedSequence;
    };
    flipSequence.has = function(key) {
        return collection.includes(key);
    };
    flipSequence.includes = function(key) {
        return collection.has(key);
    };
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        return collection.__iterate(function(v, k) {
            return fn(k, v, this$1$1) !== false;
        }, reverse);
    };
    flipSequence.__iteratorUncached = function(type, reverse) {
        if (type === ITERATE_ENTRIES) {
            var iterator = collection.__iterator(type, reverse);
            return new Iterator(function() {
                var step = iterator.next();
                if (!step.done) {
                    var k = step.value[0];
                    step.value[0] = step.value[1];
                    step.value[1] = k;
                }
                return step;
            });
        }
        return collection.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
    };
    return flipSequence;
}
function mapFactory(collection, mapper, context) {
    var mappedSequence = makeSequence(collection);
    mappedSequence.size = collection.size;
    mappedSequence.has = function(key) {
        return collection.has(key);
    };
    mappedSequence.get = function(key, notSetValue) {
        var v = collection.get(key, NOT_SET);
        return v === NOT_SET ? notSetValue : mapper.call(context, v, key, collection);
    };
    mappedSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        return collection.__iterate(function(v, k, c) {
            return fn(mapper.call(context, v, k, c), k, this$1$1) !== false;
        }, reverse);
    };
    mappedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        return new Iterator(function() {
            var step = iterator.next();
            if (step.done) return step;
            var entry = step.value;
            var key = entry[0];
            return iteratorValue(type, key, mapper.call(context, entry[1], key, collection), step);
        });
    };
    return mappedSequence;
}
function reverseFactory(collection, useKeys) {
    var this$1$11 = this;
    var reversedSequence = makeSequence(collection);
    reversedSequence._iter = collection;
    reversedSequence.size = collection.size;
    reversedSequence.reverse = function() {
        return collection;
    };
    if (collection.flip) reversedSequence.flip = function() {
        var flipSequence = flipFactory(collection);
        flipSequence.reverse = function() {
            return collection.flip();
        };
        return flipSequence;
    };
    reversedSequence.get = function(key, notSetValue) {
        return collection.get(useKeys ? key : -1 - key, notSetValue);
    };
    reversedSequence.has = function(key) {
        return collection.has(useKeys ? key : -1 - key);
    };
    reversedSequence.includes = function(value) {
        return collection.includes(value);
    };
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function(fn, reverse) {
        var this$1$1 = this;
        var i = 0;
        reverse && ensureSize(collection);
        return collection.__iterate(function(v, k) {
            return fn(v, useKeys ? k : reverse ? this$1$1.size - ++i : i++, this$1$1);
        }, !reverse);
    };
    reversedSequence.__iterator = function(type, reverse) {
        var i = 0;
        reverse && ensureSize(collection);
        var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
        return new Iterator(function() {
            var step = iterator.next();
            if (step.done) return step;
            var entry = step.value;
            return iteratorValue(type, useKeys ? entry[0] : reverse ? this$1$11.size - ++i : i++, entry[1], step);
        });
    };
    return reversedSequence;
}
function filterFactory(collection, predicate, context, useKeys) {
    var filterSequence = makeSequence(collection);
    if (useKeys) {
        filterSequence.has = function(key) {
            var v = collection.get(key, NOT_SET);
            return v !== NOT_SET && !!predicate.call(context, v, key, collection);
        };
        filterSequence.get = function(key, notSetValue) {
            var v = collection.get(key, NOT_SET);
            return v !== NOT_SET && predicate.call(context, v, key, collection) ? v : notSetValue;
        };
    }
    filterSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        var iterations = 0;
        collection.__iterate(function(v, k, c) {
            if (predicate.call(context, v, k, c)) {
                iterations++;
                return fn(v, useKeys ? k : iterations - 1, this$1$1);
            }
        }, reverse);
        return iterations;
    };
    filterSequence.__iteratorUncached = function(type, reverse) {
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var iterations = 0;
        return new Iterator(function() {
            while(true){
                var step = iterator.next();
                if (step.done) return step;
                var entry = step.value;
                var key = entry[0];
                var value = entry[1];
                if (predicate.call(context, value, key, collection)) return iteratorValue(type, useKeys ? key : iterations++, value, step);
            }
        });
    };
    return filterSequence;
}
function countByFactory(collection, grouper, context) {
    var groups = Map().asMutable();
    collection.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, collection), 0, function(a) {
            return a + 1;
        });
    });
    return groups.asImmutable();
}
function groupByFactory(collection, grouper, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
    collection.__iterate(function(v, k) {
        groups.update(grouper.call(context, v, k, collection), function(a) {
            return a = a || [], a.push(isKeyedIter ? [
                k,
                v
            ] : v), a;
        });
    });
    var coerce = collectionClass(collection);
    return groups.map(function(arr) {
        return reify(collection, coerce(arr));
    }).asImmutable();
}
function sliceFactory(collection, begin, end, useKeys) {
    var originalSize = collection.size;
    if (wholeSlice(begin, end, originalSize)) return collection;
    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);
    // begin or end will be NaN if they were provided as negative numbers and
    // this collection's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    var sliceSeq = makeSequence(collection);
    // If collection.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || undefined;
    if (!useKeys && isSeq(collection) && sliceSize >= 0) sliceSeq.get = function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
    };
    sliceSeq.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        if (sliceSize === 0) return 0;
        if (reverse) return this.cacheResult().__iterate(fn, reverse);
        var skipped = 0;
        var isSkipping = true;
        var iterations = 0;
        collection.__iterate(function(v, k) {
            if (!(isSkipping && (isSkipping = (skipped++) < resolvedBegin))) {
                iterations++;
                return fn(v, useKeys ? k : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
            }
        });
        return iterations;
    };
    sliceSeq.__iteratorUncached = function(type, reverse) {
        if (sliceSize !== 0 && reverse) return this.cacheResult().__iterator(type, reverse);
        // Don't bother instantiating parent iterator if taking 0.
        if (sliceSize === 0) return new Iterator(iteratorDone);
        var iterator = collection.__iterator(type, reverse);
        var skipped = 0;
        var iterations = 0;
        return new Iterator(function() {
            while((skipped++) < resolvedBegin)iterator.next();
            if (++iterations > sliceSize) return iteratorDone();
            var step = iterator.next();
            if (useKeys || type === ITERATE_VALUES || step.done) return step;
            if (type === ITERATE_KEYS) return iteratorValue(type, iterations - 1, undefined, step);
            return iteratorValue(type, iterations - 1, step.value[1], step);
        });
    };
    return sliceSeq;
}
function takeWhileFactory(collection, predicate, context) {
    var takeSequence = makeSequence(collection);
    takeSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        if (reverse) return this.cacheResult().__iterate(fn, reverse);
        var iterations = 0;
        collection.__iterate(function(v, k, c) {
            return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1$1);
        });
        return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {
        var this$1$1 = this;
        if (reverse) return this.cacheResult().__iterator(type, reverse);
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var iterating = true;
        return new Iterator(function() {
            if (!iterating) return iteratorDone();
            var step = iterator.next();
            if (step.done) return step;
            var entry = step.value;
            var k = entry[0];
            var v = entry[1];
            if (!predicate.call(context, v, k, this$1$1)) {
                iterating = false;
                return iteratorDone();
            }
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
    };
    return takeSequence;
}
function skipWhileFactory(collection, predicate, context, useKeys) {
    var skipSequence = makeSequence(collection);
    skipSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        if (reverse) return this.cacheResult().__iterate(fn, reverse);
        var isSkipping = true;
        var iterations = 0;
        collection.__iterate(function(v, k, c) {
            if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
                iterations++;
                return fn(v, useKeys ? k : iterations - 1, this$1$1);
            }
        });
        return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {
        var this$1$1 = this;
        if (reverse) return this.cacheResult().__iterator(type, reverse);
        var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
        var skipping = true;
        var iterations = 0;
        return new Iterator(function() {
            var step;
            var k;
            var v;
            do {
                step = iterator.next();
                if (step.done) {
                    if (useKeys || type === ITERATE_VALUES) return step;
                    if (type === ITERATE_KEYS) return iteratorValue(type, iterations++, undefined, step);
                    return iteratorValue(type, iterations++, step.value[1], step);
                }
                var entry = step.value;
                k = entry[0];
                v = entry[1];
                skipping && (skipping = predicate.call(context, v, k, this$1$1));
            }while (skipping)
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
        });
    };
    return skipSequence;
}
function concatFactory(collection, values) {
    var isKeyedCollection = isKeyed(collection);
    var iters = [
        collection
    ].concat(values).map(function(v) {
        if (!isCollection(v)) v = isKeyedCollection ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [
            v
        ]);
        else if (isKeyedCollection) v = KeyedCollection(v);
        return v;
    }).filter(function(v) {
        return v.size !== 0;
    });
    if (iters.length === 0) return collection;
    if (iters.length === 1) {
        var singleton = iters[0];
        if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) return singleton;
    }
    var concatSeq = new ArraySeq(iters);
    if (isKeyedCollection) concatSeq = concatSeq.toKeyedSeq();
    else if (!isIndexed(collection)) concatSeq = concatSeq.toSetSeq();
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(function(sum, seq) {
        if (sum !== undefined) {
            var size = seq.size;
            if (size !== undefined) return sum + size;
        }
    }, 0);
    return concatSeq;
}
function flattenFactory(collection, depth, useKeys) {
    var flatSequence = makeSequence(collection);
    flatSequence.__iterateUncached = function(fn, reverse) {
        if (reverse) return this.cacheResult().__iterate(fn, reverse);
        var iterations = 0;
        var stopped = false;
        function flatDeep(iter, currentDepth) {
            iter.__iterate(function(v, k) {
                if ((!depth || currentDepth < depth) && isCollection(v)) flatDeep(v, currentDepth + 1);
                else {
                    iterations++;
                    if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) stopped = true;
                }
                return !stopped;
            }, reverse);
        }
        flatDeep(collection, 0);
        return iterations;
    };
    flatSequence.__iteratorUncached = function(type, reverse) {
        if (reverse) return this.cacheResult().__iterator(type, reverse);
        var iterator = collection.__iterator(type, reverse);
        var stack = [];
        var iterations = 0;
        return new Iterator(function() {
            while(iterator){
                var step = iterator.next();
                if (step.done !== false) {
                    iterator = stack.pop();
                    continue;
                }
                var v = step.value;
                if (type === ITERATE_ENTRIES) v = v[1];
                if ((!depth || stack.length < depth) && isCollection(v)) {
                    stack.push(iterator);
                    iterator = v.__iterator(type, reverse);
                } else return useKeys ? step : iteratorValue(type, iterations++, v, step);
            }
            return iteratorDone();
        });
    };
    return flatSequence;
}
function flatMapFactory(collection, mapper, context) {
    var coerce = collectionClass(collection);
    return collection.toSeq().map(function(v, k) {
        return coerce(mapper.call(context, v, k, collection));
    }).flatten(true);
}
function interposeFactory(collection, separator) {
    var interposedSequence = makeSequence(collection);
    interposedSequence.size = collection.size && collection.size * 2 - 1;
    interposedSequence.__iterateUncached = function(fn, reverse) {
        var this$1$1 = this;
        var iterations = 0;
        collection.__iterate(function(v) {
            return (!iterations || fn(separator, iterations++, this$1$1) !== false) && fn(v, iterations++, this$1$1) !== false;
        }, reverse);
        return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
        var iterator = collection.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        var step;
        return new Iterator(function() {
            if (!step || iterations % 2) {
                step = iterator.next();
                if (step.done) return step;
            }
            return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
        });
    };
    return interposedSequence;
}
function sortFactory(collection, comparator, mapper) {
    if (!comparator) comparator = defaultComparator;
    var isKeyedCollection = isKeyed(collection);
    var index = 0;
    var entries = collection.toSeq().map(function(v, k) {
        return [
            k,
            v,
            index++,
            mapper ? mapper(v, k, collection) : v
        ];
    }).valueSeq().toArray();
    entries.sort(function(a, b) {
        return comparator(a[3], b[3]) || a[2] - b[2];
    }).forEach(isKeyedCollection ? function(v, i) {
        entries[i].length = 2;
    } : function(v, i) {
        entries[i] = v[1];
    });
    return isKeyedCollection ? KeyedSeq(entries) : isIndexed(collection) ? IndexedSeq(entries) : SetSeq(entries);
}
function maxFactory(collection, comparator, mapper) {
    if (!comparator) comparator = defaultComparator;
    if (mapper) {
        var entry = collection.toSeq().map(function(v, k) {
            return [
                v,
                mapper(v, k, collection)
            ];
        }).reduce(function(a, b) {
            return maxCompare(comparator, a[1], b[1]) ? b : a;
        });
        return entry && entry[0];
    }
    return collection.reduce(function(a, b) {
        return maxCompare(comparator, a, b) ? b : a;
    });
}
function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return comp === 0 && b !== a && (b === undefined || b === null || b !== b) || comp > 0;
}
function zipWithFactory(keyIter, zipper, iters, zipAll) {
    var zipSequence = makeSequence(keyIter);
    var sizes = new ArraySeq(iters).map(function(i) {
        return i.size;
    });
    zipSequence.size = zipAll ? sizes.max() : sizes.min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
        /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */ // indexed:
        var iterator = this.__iterator(ITERATE_VALUES, reverse);
        var step;
        var iterations = 0;
        while(!(step = iterator.next()).done){
            if (fn(step.value, iterations++, this) === false) break;
        }
        return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
        var iterators = iters.map(function(i) {
            return i = Collection(i), getIterator(reverse ? i.reverse() : i);
        });
        var iterations = 0;
        var isDone = false;
        return new Iterator(function() {
            var steps;
            if (!isDone) {
                steps = iterators.map(function(i) {
                    return i.next();
                });
                isDone = zipAll ? steps.every(function(s) {
                    return s.done;
                }) : steps.some(function(s) {
                    return s.done;
                });
            }
            if (isDone) return iteratorDone();
            return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
                return s.value;
            })));
        });
    };
    return zipSequence;
}
// #pragma Helper Functions
function reify(iter, seq) {
    return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}
function validateEntry(entry) {
    if (entry !== Object(entry)) throw new TypeError('Expected [K, V] tuple: ' + entry);
}
function collectionClass(collection) {
    return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
}
function makeSequence(collection) {
    return Object.create((isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype);
}
function cacheResultThrough() {
    if (this._iter.cacheResult) {
        this._iter.cacheResult();
        this.size = this._iter.size;
        return this;
    }
    return Seq.prototype.cacheResult.call(this);
}
function defaultComparator(a, b) {
    if (a === undefined && b === undefined) return 0;
    if (a === undefined) return 1;
    if (b === undefined) return -1;
    return a > b ? 1 : a < b ? -1 : 0;
}
function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for(var ii = 0; ii < len; ii++)newArr[ii] = arr[ii + offset];
    return newArr;
}
function invariant(condition, error) {
    if (!condition) throw new Error(error);
}
function assertNotInfinite(size) {
    invariant(size !== Infinity, 'Cannot perform this action with an infinite size.');
}
function coerceKeyPath(keyPath) {
    if (isArrayLike(keyPath) && typeof keyPath !== 'string') return keyPath;
    if (isOrdered(keyPath)) return keyPath.toArray();
    throw new TypeError('Invalid keyPath: expected Ordered Collection or Array: ' + keyPath);
}
var toString = Object.prototype.toString;
function isPlainObject(value) {
    // The base prototype's toString deals with Argument objects and native namespaces like Math
    if (!value || typeof value !== 'object' || toString.call(value) !== '[object Object]') return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null) return true;
    // Iteratively going up the prototype chain is needed for cross-realm environments (differing contexts, iframes, etc)
    var parentProto = proto;
    var nextProto = Object.getPrototypeOf(proto);
    while(nextProto !== null){
        parentProto = nextProto;
        nextProto = Object.getPrototypeOf(parentProto);
    }
    return parentProto === proto;
}
/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */ function isDataStructure(value) {
    return typeof value === 'object' && (isImmutable(value) || Array.isArray(value) || isPlainObject(value));
}
function quoteString(value) {
    try {
        return typeof value === 'string' ? JSON.stringify(value) : String(value);
    } catch (_ignoreError) {
        return JSON.stringify(value);
    }
}
function has(collection, key) {
    return isImmutable(collection) ? collection.has(key) : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}
function get(collection, key, notSetValue) {
    return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : typeof collection.get === 'function' ? collection.get(key) : collection[key];
}
function shallowCopy(from) {
    if (Array.isArray(from)) return arrCopy(from);
    var to = {};
    for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
    return to;
}
function remove(collection, key) {
    if (!isDataStructure(collection)) throw new TypeError('Cannot update non-data-structure value: ' + collection);
    if (isImmutable(collection)) {
        if (!collection.remove) throw new TypeError('Cannot update immutable value without .remove() method: ' + collection);
        return collection.remove(key);
    }
    if (!hasOwnProperty.call(collection, key)) return collection;
    var collectionCopy = shallowCopy(collection);
    if (Array.isArray(collectionCopy)) collectionCopy.splice(key, 1);
    else delete collectionCopy[key];
    return collectionCopy;
}
function set(collection, key, value) {
    if (!isDataStructure(collection)) throw new TypeError('Cannot update non-data-structure value: ' + collection);
    if (isImmutable(collection)) {
        if (!collection.set) throw new TypeError('Cannot update immutable value without .set() method: ' + collection);
        return collection.set(key, value);
    }
    if (hasOwnProperty.call(collection, key) && value === collection[key]) return collection;
    var collectionCopy = shallowCopy(collection);
    collectionCopy[key] = value;
    return collectionCopy;
}
function updateIn$1(collection, keyPath, notSetValue, updater) {
    if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
    }
    var updatedValue = updateInDeeply(isImmutable(collection), collection, coerceKeyPath(keyPath), 0, notSetValue, updater);
    return updatedValue === NOT_SET ? notSetValue : updatedValue;
}
function updateInDeeply(inImmutable, existing, keyPath, i, notSetValue, updater) {
    var wasNotSet = existing === NOT_SET;
    if (i === keyPath.length) {
        var existingValue = wasNotSet ? notSetValue : existing;
        var newValue = updater(existingValue);
        return newValue === existingValue ? existing : newValue;
    }
    if (!wasNotSet && !isDataStructure(existing)) throw new TypeError('Cannot update within non-data-structure value in path [' + keyPath.slice(0, i).map(quoteString) + ']: ' + existing);
    var key = keyPath[i];
    var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
    var nextUpdated = updateInDeeply(nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting), nextExisting, keyPath, i + 1, notSetValue, updater);
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(wasNotSet ? inImmutable ? emptyMap() : {} : existing, key, nextUpdated);
}
function setIn$1(collection, keyPath, value) {
    return updateIn$1(collection, keyPath, NOT_SET, function() {
        return value;
    });
}
function setIn(keyPath, v) {
    return setIn$1(this, keyPath, v);
}
function removeIn(collection, keyPath) {
    return updateIn$1(collection, keyPath, function() {
        return NOT_SET;
    });
}
function deleteIn(keyPath) {
    return removeIn(this, keyPath);
}
function update$1(collection, key, notSetValue, updater) {
    return updateIn$1(collection, [
        key
    ], notSetValue, updater);
}
function update(key, notSetValue, updater) {
    return arguments.length === 1 ? key(this) : update$1(this, key, notSetValue, updater);
}
function updateIn(keyPath, notSetValue, updater) {
    return updateIn$1(this, keyPath, notSetValue, updater);
}
function merge$1() {
    var iters = [], len = arguments.length;
    while(len--)iters[len] = arguments[len];
    return mergeIntoKeyedWith(this, iters);
}
function mergeWith$1(merger) {
    var iters = [], len = arguments.length - 1;
    while(len-- > 0)iters[len] = arguments[len + 1];
    if (typeof merger !== 'function') throw new TypeError('Invalid merger function: ' + merger);
    return mergeIntoKeyedWith(this, iters, merger);
}
function mergeIntoKeyedWith(collection1, collections, merger) {
    var iters = [];
    for(var ii1 = 0; ii1 < collections.length; ii1++){
        var collection$1 = KeyedCollection(collections[ii1]);
        if (collection$1.size !== 0) iters.push(collection$1);
    }
    if (iters.length === 0) return collection1;
    if (collection1.toSeq().size === 0 && !collection1.__ownerID && iters.length === 1) return collection1.constructor(iters[0]);
    return collection1.withMutations(function(collection) {
        var mergeIntoCollection = merger ? function(value, key) {
            update$1(collection, key, NOT_SET, function(oldVal) {
                return oldVal === NOT_SET ? value : merger(oldVal, value, key);
            });
        } : function(value, key) {
            collection.set(key, value);
        };
        for(var ii = 0; ii < iters.length; ii++)iters[ii].forEach(mergeIntoCollection);
    });
}
function merge(collection) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    return mergeWithSources(collection, sources);
}
function mergeWith(merger, collection) {
    var sources = [], len = arguments.length - 2;
    while(len-- > 0)sources[len] = arguments[len + 2];
    return mergeWithSources(collection, sources, merger);
}
function mergeDeep$1(collection) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    return mergeDeepWithSources(collection, sources);
}
function mergeDeepWith$1(merger, collection) {
    var sources = [], len = arguments.length - 2;
    while(len-- > 0)sources[len] = arguments[len + 2];
    return mergeDeepWithSources(collection, sources, merger);
}
function mergeDeepWithSources(collection, sources, merger) {
    return mergeWithSources(collection, sources, deepMergerWith(merger));
}
function mergeWithSources(collection, sources, merger) {
    if (!isDataStructure(collection)) throw new TypeError('Cannot merge into non-data-structure value: ' + collection);
    if (isImmutable(collection)) return typeof merger === 'function' && collection.mergeWith ? collection.mergeWith.apply(collection, [
        merger
    ].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
    var isArray = Array.isArray(collection);
    var merged = collection;
    var Collection5 = isArray ? IndexedCollection : KeyedCollection;
    var mergeItem = isArray ? function(value) {
        // Copy on write
        if (merged === collection) merged = shallowCopy(merged);
        merged.push(value);
    } : function(value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
            // Copy on write
            if (merged === collection) merged = shallowCopy(merged);
            merged[key] = nextVal;
        }
    };
    for(var i = 0; i < sources.length; i++)Collection5(sources[i]).forEach(mergeItem);
    return merged;
}
function deepMergerWith(merger) {
    function deepMerger(oldValue, newValue, key) {
        return isDataStructure(oldValue) && isDataStructure(newValue) && areMergeable(oldValue, newValue) ? mergeWithSources(oldValue, [
            newValue
        ], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
    }
    return deepMerger;
}
/**
 * It's unclear what the desired behavior is for merging two collections that
 * fall into separate categories between keyed, indexed, or set-like, so we only
 * consider them mergeable if they fall into the same category.
 */ function areMergeable(oldDataStructure, newDataStructure) {
    var oldSeq = Seq(oldDataStructure);
    var newSeq = Seq(newDataStructure);
    // This logic assumes that a sequence can only fall into one of the three
    // categories mentioned above (since there's no `isSetLike()` method).
    return isIndexed(oldSeq) === isIndexed(newSeq) && isKeyed(oldSeq) === isKeyed(newSeq);
}
function mergeDeep() {
    var iters = [], len = arguments.length;
    while(len--)iters[len] = arguments[len];
    return mergeDeepWithSources(this, iters);
}
function mergeDeepWith(merger) {
    var iters = [], len = arguments.length - 1;
    while(len-- > 0)iters[len] = arguments[len + 1];
    return mergeDeepWithSources(this, iters, merger);
}
function mergeIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while(len-- > 0)iters[len] = arguments[len + 1];
    return updateIn$1(this, keyPath, emptyMap(), function(m) {
        return mergeWithSources(m, iters);
    });
}
function mergeDeepIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while(len-- > 0)iters[len] = arguments[len + 1];
    return updateIn$1(this, keyPath, emptyMap(), function(m) {
        return mergeDeepWithSources(m, iters);
    });
}
function withMutations(fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}
function asMutable() {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}
function asImmutable() {
    return this.__ensureOwner();
}
function wasAltered() {
    return this.__altered;
}
var Map = /*@__PURE__*/ function(KeyedCollection2) {
    function Map1(value) {
        return value === null || value === undefined ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map) {
            var iter = KeyedCollection2(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v, k) {
                return map.set(k, v);
            });
        });
    }
    if (KeyedCollection2) Map1.__proto__ = KeyedCollection2;
    Map1.prototype = Object.create(KeyedCollection2 && KeyedCollection2.prototype);
    Map1.prototype.constructor = Map1;
    Map1.of = function of() {
        var keyValues = [], len = arguments.length;
        while(len--)keyValues[len] = arguments[len];
        return emptyMap().withMutations(function(map) {
            for(var i = 0; i < keyValues.length; i += 2){
                if (i + 1 >= keyValues.length) throw new Error('Missing value for key: ' + keyValues[i]);
                map.set(keyValues[i], keyValues[i + 1]);
            }
        });
    };
    Map1.prototype.toString = function toString() {
        return this.__toString('Map {', '}');
    };
    // @pragma Access
    Map1.prototype.get = function get(k, notSetValue) {
        return this._root ? this._root.get(0, undefined, k, notSetValue) : notSetValue;
    };
    // @pragma Modification
    Map1.prototype.set = function set(k, v) {
        return updateMap(this, k, v);
    };
    Map1.prototype.remove = function remove(k) {
        return updateMap(this, k, NOT_SET);
    };
    Map1.prototype.deleteAll = function deleteAll(keys) {
        var collection = Collection(keys);
        if (collection.size === 0) return this;
        return this.withMutations(function(map) {
            collection.forEach(function(key) {
                return map.remove(key);
            });
        });
    };
    Map1.prototype.clear = function clear() {
        if (this.size === 0) return this;
        if (this.__ownerID) {
            this.size = 0;
            this._root = null;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyMap();
    };
    // @pragma Composition
    Map1.prototype.sort = function sort(comparator) {
        // Late binding
        return OrderedMap(sortFactory(this, comparator));
    };
    Map1.prototype.sortBy = function sortBy(mapper, comparator) {
        // Late binding
        return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map1.prototype.map = function map1(mapper, context) {
        var this$1$1 = this;
        return this.withMutations(function(map) {
            map.forEach(function(value, key) {
                map.set(key, mapper.call(context, value, key, this$1$1));
            });
        });
    };
    // @pragma Mutability
    Map1.prototype.__iterator = function __iterator(type, reverse) {
        return new MapIterator(this, type, reverse);
    };
    Map1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        var iterations = 0;
        this._root && this._root.iterate(function(entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1$1);
        }, reverse);
        return iterations;
    };
    Map1.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) return this;
        if (!ownerID) {
            if (this.size === 0) return emptyMap();
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    return Map1;
}(KeyedCollection);
Map.isMap = isMap;
var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update;
MapPrototype.updateIn = updateIn;
MapPrototype.merge = MapPrototype.concat = merge$1;
MapPrototype.mergeWith = mergeWith$1;
MapPrototype.mergeDeep = mergeDeep;
MapPrototype.mergeDeepWith = mergeDeepWith;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
    return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
    return obj.asImmutable();
};
// #pragma Trie Nodes
var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
    this.ownerID = ownerID;
    this.entries = entries;
};
ArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    var entries = this.entries;
    for(var ii = 0, len = entries.length; ii < len; ii++){
        if (is(key, entries[ii][0])) return entries[ii][1];
    }
    return notSetValue;
};
ArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries = this.entries;
    var idx = 0;
    var len = entries.length;
    for(; idx < len; idx++){
        if (is(key, entries[idx][0])) break;
    }
    var exists = idx < len;
    if (exists ? entries[idx][1] === value : removed) return this;
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && entries.length === 1) return; // undefined
    if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) return createNodes(ownerID, entries, key, value);
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);
    if (exists) {
        if (removed) idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        else newEntries[idx] = [
            key,
            value
        ];
    } else newEntries.push([
        key,
        value
    ]);
    if (isEditable) {
        this.entries = newEntries;
        return this;
    }
    return new ArrayMapNode(ownerID, newEntries);
};
var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
};
BitmapIndexedNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) keyHash = hash(key);
    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
};
BitmapIndexedNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) keyHash = hash(key);
    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;
    if (!exists && value === NOT_SET) return this;
    var idx = popCount(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : undefined;
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
    if (newNode === node) return this;
    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) return nodes[idx ^ 1];
    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) return newNode;
    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
    if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
    }
    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};
var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
    this.ownerID = ownerID;
    this.count = count;
    this.nodes = nodes;
};
HashArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    if (keyHash === undefined) keyHash = hash(key);
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
};
HashArrayMapNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) keyHash = hash(key);
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];
    if (removed && !node) return this;
    var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
    if (newNode === node) return this;
    var newCount = this.count;
    if (!node) newCount++;
    else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) return packNodes(ownerID, nodes, newCount, idx);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setAt(nodes, idx, newNode, isEditable);
    if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
    }
    return new HashArrayMapNode(ownerID, newCount, newNodes);
};
var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries;
};
HashCollisionNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    var entries = this.entries;
    for(var ii = 0, len = entries.length; ii < len; ii++){
        if (is(key, entries[ii][0])) return entries[ii][1];
    }
    return notSetValue;
};
HashCollisionNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === undefined) keyHash = hash(key);
    var removed = value === NOT_SET;
    if (keyHash !== this.keyHash) {
        if (removed) return this;
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [
            key,
            value
        ]);
    }
    var entries = this.entries;
    var idx = 0;
    var len = entries.length;
    for(; idx < len; idx++){
        if (is(key, entries[idx][0])) break;
    }
    var exists = idx < len;
    if (exists ? entries[idx][1] === value : removed) return this;
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && len === 2) return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries : arrCopy(entries);
    if (exists) {
        if (removed) idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        else newEntries[idx] = [
            key,
            value
        ];
    } else newEntries.push([
        key,
        value
    ]);
    if (isEditable) {
        this.entries = newEntries;
        return this;
    }
    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};
var ValueNode = function ValueNode(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
};
ValueNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};
ValueNode.prototype.update = function update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);
    if (keyMatch ? value === this.entry[1] : removed) return this;
    SetRef(didAlter);
    if (removed) {
        SetRef(didChangeSize);
        return; // undefined
    }
    if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
            this.entry[1] = value;
            return this;
        }
        return new ValueNode(ownerID, this.keyHash, [
            key,
            value
        ]);
    }
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [
        key,
        value
    ]);
};
// #pragma Iterators
ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
    var entries = this.entries;
    for(var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++){
        if (fn(entries[reverse ? maxIndex - ii : ii]) === false) return false;
    }
};
BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
    var nodes = this.nodes;
    for(var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++){
        var node = nodes[reverse ? maxIndex - ii : ii];
        if (node && node.iterate(fn, reverse) === false) return false;
    }
};
// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
    return fn(this.entry);
};
var MapIterator = /*@__PURE__*/ function(Iterator1) {
    function MapIterator1(map, type, reverse) {
        this._type = type;
        this._reverse = reverse;
        this._stack = map._root && mapIteratorFrame(map._root);
    }
    if (Iterator1) MapIterator1.__proto__ = Iterator1;
    MapIterator1.prototype = Object.create(Iterator1 && Iterator1.prototype);
    MapIterator1.prototype.constructor = MapIterator1;
    MapIterator1.prototype.next = function next() {
        var type = this._type;
        var stack = this._stack;
        while(stack){
            var node = stack.node;
            var index = stack.index++;
            var maxIndex = void 0;
            if (node.entry) {
                if (index === 0) return mapIteratorValue(type, node.entry);
            } else if (node.entries) {
                maxIndex = node.entries.length - 1;
                if (index <= maxIndex) return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
            } else {
                maxIndex = node.nodes.length - 1;
                if (index <= maxIndex) {
                    var subNode = node.nodes[this._reverse ? maxIndex - index : index];
                    if (subNode) {
                        if (subNode.entry) return mapIteratorValue(type, subNode.entry);
                        stack = this._stack = mapIteratorFrame(subNode, stack);
                    }
                    continue;
                }
            }
            stack = this._stack = this._stack.__prev;
        }
        return iteratorDone();
    };
    return MapIterator1;
}(Iterator);
function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
}
function mapIteratorFrame(node, prev) {
    return {
        node: node,
        index: 0,
        __prev: prev
    };
}
function makeMap(size, root, ownerID, hash2) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash2;
    map.__altered = false;
    return map;
}
var EMPTY_MAP;
function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}
function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
        if (v === NOT_SET) return map;
        newSize = 1;
        newRoot = new ArrayMapNode(map.__ownerID, [
            [
                k,
                v
            ]
        ]);
    } else {
        var didChangeSize = MakeRef();
        var didAlter = MakeRef();
        newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
        if (!didAlter.value) return map;
        newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
        map.size = newSize;
        map._root = newRoot;
        map.__hash = undefined;
        map.__altered = true;
        return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}
function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
        if (value === NOT_SET) return node;
        SetRef(didAlter);
        SetRef(didChangeSize);
        return new ValueNode(ownerID, keyHash, [
            key,
            value
        ]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
}
function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
}
function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) return new HashCollisionNode(ownerID, keyHash, [
        node.entry,
        entry
    ]);
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [
        mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)
    ] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [
        node,
        newNode
    ] : [
        newNode,
        node
    ]);
    return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
}
function createNodes(ownerID, entries, key, value) {
    if (!ownerID) ownerID = new OwnerID();
    var node = new ValueNode(ownerID, hash(key), [
        key,
        value
    ]);
    for(var ii = 0; ii < entries.length; ii++){
        var entry = entries[ii];
        node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
}
function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for(var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1){
        var node = nodes[ii];
        if (node !== undefined && ii !== excluding) {
            bitmap |= bit;
            packedNodes[packedII++] = node;
        }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}
function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for(var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1)expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}
function popCount(x) {
    x -= x >> 1 & 1431655765;
    x = (x & 858993459) + (x >> 2 & 858993459);
    x = x + (x >> 4) & 252645135;
    x += x >> 8;
    x += x >> 16;
    return x & 127;
}
function setAt(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
}
function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
        array[idx] = val;
        return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for(var ii = 0; ii < newLen; ii++)if (ii === idx) {
        newArray[ii] = val;
        after = -1;
    } else newArray[ii] = array[ii + after];
    return newArray;
}
function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
        array.pop();
        return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for(var ii = 0; ii < newLen; ii++){
        if (ii === idx) after = 1;
        newArray[ii] = array[ii + after];
    }
    return newArray;
}
var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';
function isList(maybeList) {
    return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}
var List = /*@__PURE__*/ function(IndexedCollection2) {
    function List1(value) {
        var empty = emptyList();
        if (value === null || value === undefined) return empty;
        if (isList(value)) return value;
        var iter = IndexedCollection2(value);
        var size = iter.size;
        if (size === 0) return empty;
        assertNotInfinite(size);
        if (size > 0 && size < SIZE) return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
        return empty.withMutations(function(list) {
            list.setSize(size);
            iter.forEach(function(v, i) {
                return list.set(i, v);
            });
        });
    }
    if (IndexedCollection2) List1.__proto__ = IndexedCollection2;
    List1.prototype = Object.create(IndexedCollection2 && IndexedCollection2.prototype);
    List1.prototype.constructor = List1;
    List1.of = function of() {
        return this(arguments);
    };
    List1.prototype.toString = function toString() {
        return this.__toString('List [', ']');
    };
    // @pragma Access
    List1.prototype.get = function get(index, notSetValue) {
        index = wrapIndex(this, index);
        if (index >= 0 && index < this.size) {
            index += this._origin;
            var node = listNodeFor(this, index);
            return node && node.array[index & MASK];
        }
        return notSetValue;
    };
    // @pragma Modification
    List1.prototype.set = function set(index, value) {
        return updateList(this, index, value);
    };
    List1.prototype.remove = function remove(index) {
        return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List1.prototype.insert = function insert(index, value) {
        return this.splice(index, 0, value);
    };
    List1.prototype.clear = function clear() {
        if (this.size === 0) return this;
        if (this.__ownerID) {
            this.size = this._origin = this._capacity = 0;
            this._level = SHIFT;
            this._root = this._tail = this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyList();
    };
    List1.prototype.push = function push() {
        var values = arguments;
        var oldSize = this.size;
        return this.withMutations(function(list) {
            setListBounds(list, 0, oldSize + values.length);
            for(var ii = 0; ii < values.length; ii++)list.set(oldSize + ii, values[ii]);
        });
    };
    List1.prototype.pop = function pop() {
        return setListBounds(this, 0, -1);
    };
    List1.prototype.unshift = function unshift() {
        var values = arguments;
        return this.withMutations(function(list) {
            setListBounds(list, -values.length);
            for(var ii = 0; ii < values.length; ii++)list.set(ii, values[ii]);
        });
    };
    List1.prototype.shift = function shift() {
        return setListBounds(this, 1);
    };
    // @pragma Composition
    List1.prototype.concat = function concat() {
        var arguments$1 = arguments;
        var seqs = [];
        for(var i = 0; i < arguments.length; i++){
            var argument = arguments$1[i];
            var seq = IndexedCollection2(typeof argument !== 'string' && hasIterator(argument) ? argument : [
                argument
            ]);
            if (seq.size !== 0) seqs.push(seq);
        }
        if (seqs.length === 0) return this;
        if (this.size === 0 && !this.__ownerID && seqs.length === 1) return this.constructor(seqs[0]);
        return this.withMutations(function(list) {
            seqs.forEach(function(seq) {
                return seq.forEach(function(value) {
                    return list.push(value);
                });
            });
        });
    };
    List1.prototype.setSize = function setSize(size) {
        return setListBounds(this, 0, size);
    };
    List1.prototype.map = function map(mapper, context) {
        var this$1$1 = this;
        return this.withMutations(function(list) {
            for(var i = 0; i < this$1$1.size; i++)list.set(i, mapper.call(context, list.get(i), i, this$1$1));
        });
    };
    // @pragma Iteration
    List1.prototype.slice = function slice(begin, end) {
        var size = this.size;
        if (wholeSlice(begin, end, size)) return this;
        return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
    };
    List1.prototype.__iterator = function __iterator(type, reverse) {
        var index = reverse ? this.size : 0;
        var values = iterateList(this, reverse);
        return new Iterator(function() {
            var value = values();
            return value === DONE ? iteratorDone() : iteratorValue(type, reverse ? --index : index++, value);
        });
    };
    List1.prototype.__iterate = function __iterate(fn, reverse) {
        var index = reverse ? this.size : 0;
        var values = iterateList(this, reverse);
        var value;
        while((value = values()) !== DONE){
            if (fn(value, reverse ? --index : index++, this) === false) break;
        }
        return index;
    };
    List1.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) return this;
        if (!ownerID) {
            if (this.size === 0) return emptyList();
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };
    return List1;
}(IndexedCollection);
List.isList = isList;
var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update;
ListPrototype.updateIn = updateIn;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
    return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
    return obj.asImmutable();
};
var VNode = function VNode(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
};
// TODO: seems like these methods are very similar
VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
    if (index === level ? 1 << level : this.array.length === 0) return this;
    var originIndex = index >>> level & MASK;
    if (originIndex >= this.array.length) return new VNode([], ownerID);
    var removingFirst = originIndex === 0;
    var newChild;
    if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) return this;
    }
    if (removingFirst && !newChild) return this;
    var editable = editableVNode(this, ownerID);
    if (!removingFirst) for(var ii = 0; ii < originIndex; ii++)editable.array[ii] = undefined;
    if (newChild) editable.array[originIndex] = newChild;
    return editable;
};
VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
    if (index === (level ? 1 << level : 0) || this.array.length === 0) return this;
    var sizeIndex = index - 1 >>> level & MASK;
    if (sizeIndex >= this.array.length) return this;
    var newChild;
    if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) return this;
    }
    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);
    if (newChild) editable.array[sizeIndex] = newChild;
    return editable;
};
var DONE = {};
function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
        return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
        var array = offset === tailPos ? tail && tail.array : node && node.array;
        var from = offset > left ? 0 : left - offset;
        var to = right - offset;
        if (to > SIZE) {
            to = SIZE;
        }
        return function() {
            if (from === to) {
                return DONE;
            }
            var idx = reverse ? --to : from++;
            return array && array[idx];
        };
    }
    function iterateNode(node, level, offset) {
        var values;
        var array = node && node.array;
        var from = offset > left ? 0 : left - offset >> level;
        var to = (right - offset >> level) + 1;
        if (to > SIZE) {
            to = SIZE;
        }
        return function() {
            while(true){
                if (values) {
                    var value = values();
                    if (value !== DONE) {
                        return value;
                    }
                    values = null;
                }
                if (from === to) {
                    return DONE;
                }
                var idx = reverse ? --to : from++;
                values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset + (idx << level));
            }
        };
    }
}
function makeList(origin, capacity, level, root, tail, ownerID, hash3) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash3;
    list.__altered = false;
    return list;
}
var EMPTY_LIST;
function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}
function updateList(list1, index, value) {
    index = wrapIndex(list1, index);
    if (index !== index) return list1;
    if (index >= list1.size || index < 0) return list1.withMutations(function(list) {
        index < 0 ? setListBounds(list, index).set(0, value) : setListBounds(list, 0, index + 1).set(index, value);
    });
    index += list1._origin;
    var newTail = list1._tail;
    var newRoot = list1._root;
    var didAlter = MakeRef();
    if (index >= getTailOffset(list1._capacity)) newTail = updateVNode(newTail, list1.__ownerID, 0, index, value, didAlter);
    else newRoot = updateVNode(newRoot, list1.__ownerID, list1._level, index, value, didAlter);
    if (!didAlter.value) return list1;
    if (list1.__ownerID) {
        list1._root = newRoot;
        list1._tail = newTail;
        list1.__hash = undefined;
        list1.__altered = true;
        return list1;
    }
    return makeList(list1._origin, list1._capacity, list1._level, newRoot, newTail);
}
function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) return node;
    var newNode;
    if (level > 0) {
        var lowerNode = node && node.array[idx];
        var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
        if (newLowerNode === lowerNode) return node;
        newNode = editableVNode(node, ownerID);
        newNode.array[idx] = newLowerNode;
        return newNode;
    }
    if (nodeHas && node.array[idx] === value) return node;
    if (didAlter) SetRef(didAlter);
    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) newNode.array.pop();
    else newNode.array[idx] = value;
    return newNode;
}
function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) return node;
    return new VNode(node ? node.array.slice() : [], ownerID);
}
function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) return list._tail;
    if (rawIndex < 1 << list._level + SHIFT) {
        var node = list._root;
        var level = list._level;
        while(node && level > 0){
            node = node.array[rawIndex >>> level & MASK];
            level -= SHIFT;
        }
        return node;
    }
}
function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) begin |= 0;
    if (end !== undefined) end |= 0;
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) return list;
    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) return list.clear();
    var newLevel = list._level;
    var newRoot = list._root;
    // New origin might need creating a higher root.
    var offsetShift = 0;
    while(newOrigin + offsetShift < 0){
        newRoot = new VNode(newRoot && newRoot.array.length ? [
            undefined,
            newRoot
        ] : [], owner);
        newLevel += SHIFT;
        offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
        newOrigin += offsetShift;
        oldOrigin += offsetShift;
        newCapacity += offsetShift;
        oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);
    // New size might need creating a higher root.
    while(newTailOffset >= 1 << newLevel + SHIFT){
        newRoot = new VNode(newRoot && newRoot.array.length ? [
            newRoot
        ] : [], owner);
        newLevel += SHIFT;
    }
    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
        newRoot = editableVNode(newRoot, owner);
        var node = newRoot;
        for(var level = newLevel; level > SHIFT; level -= SHIFT){
            var idx = oldTailOffset >>> level & MASK;
            node = node.array[idx] = editableVNode(node.array[idx], owner);
        }
        node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
    }
    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
        newOrigin -= newTailOffset;
        newCapacity -= newTailOffset;
        newLevel = SHIFT;
        newRoot = null;
        newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
        offsetShift = 0;
        // Identify the new top root node of the subtree of the old root.
        while(newRoot){
            var beginIndex = newOrigin >>> newLevel & MASK;
            if (beginIndex !== newTailOffset >>> newLevel & MASK) break;
            if (beginIndex) offsetShift += (1 << newLevel) * beginIndex;
            newLevel -= SHIFT;
            newRoot = newRoot.array[beginIndex];
        }
        // Trim the new sides of the new root.
        if (newRoot && newOrigin > oldOrigin) newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
        if (newRoot && newTailOffset < oldTailOffset) newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
        if (offsetShift) {
            newOrigin -= offsetShift;
            newCapacity -= offsetShift;
        }
    }
    if (list.__ownerID) {
        list.size = newCapacity - newOrigin;
        list._origin = newOrigin;
        list._capacity = newCapacity;
        list._level = newLevel;
        list._root = newRoot;
        list._tail = newTail;
        list.__hash = undefined;
        list.__altered = true;
        return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}
function getTailOffset(size) {
    return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
}
var OrderedMap = /*@__PURE__*/ function(Map2) {
    function OrderedMap1(value) {
        return value === null || value === undefined ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v, k) {
                return map.set(k, v);
            });
        });
    }
    if (Map2) OrderedMap1.__proto__ = Map2;
    OrderedMap1.prototype = Object.create(Map2 && Map2.prototype);
    OrderedMap1.prototype.constructor = OrderedMap1;
    OrderedMap1.of = function of() {
        return this(arguments);
    };
    OrderedMap1.prototype.toString = function toString() {
        return this.__toString('OrderedMap {', '}');
    };
    // @pragma Access
    OrderedMap1.prototype.get = function get(k, notSetValue) {
        var index = this._map.get(k);
        return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };
    // @pragma Modification
    OrderedMap1.prototype.clear = function clear() {
        if (this.size === 0) return this;
        if (this.__ownerID) {
            this.size = 0;
            this._map.clear();
            this._list.clear();
            this.__altered = true;
            return this;
        }
        return emptyOrderedMap();
    };
    OrderedMap1.prototype.set = function set(k, v) {
        return updateOrderedMap(this, k, v);
    };
    OrderedMap1.prototype.remove = function remove(k) {
        return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        return this._list.__iterate(function(entry) {
            return entry && fn(entry[1], entry[0], this$1$1);
        }, reverse);
    };
    OrderedMap1.prototype.__iterator = function __iterator(type, reverse) {
        return this._list.fromEntrySeq().__iterator(type, reverse);
    };
    OrderedMap1.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) return this;
        var newMap = this._map.__ensureOwner(ownerID);
        var newList = this._list.__ensureOwner(ownerID);
        if (!ownerID) {
            if (this.size === 0) return emptyOrderedMap();
            this.__ownerID = ownerID;
            this.__altered = false;
            this._map = newMap;
            this._list = newList;
            return this;
        }
        return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    return OrderedMap1;
}(Map);
OrderedMap.isOrderedMap = isOrderedMap;
OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
function makeOrderedMap(map, list, ownerID, hash4) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash4;
    omap.__altered = false;
    return omap;
}
var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
}
function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has1 = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) {
        // removed
        if (!has1) return omap;
        if (list.size >= SIZE && list.size >= map.size * 2) {
            newList = list.filter(function(entry, idx) {
                return entry !== undefined && i !== idx;
            });
            newMap = newList.toKeyedSeq().map(function(entry) {
                return entry[0];
            }).flip().toMap();
            if (omap.__ownerID) newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        } else {
            newMap = map.remove(k);
            newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
        }
    } else if (has1) {
        if (v === list.get(i)[1]) return omap;
        newMap = map;
        newList = list.set(i, [
            k,
            v
        ]);
    } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [
            k,
            v
        ]);
    }
    if (omap.__ownerID) {
        omap.size = newMap.size;
        omap._map = newMap;
        omap._list = newList;
        omap.__hash = undefined;
        omap.__altered = true;
        return omap;
    }
    return makeOrderedMap(newMap, newList);
}
var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';
function isStack(maybeStack) {
    return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}
var Stack = /*@__PURE__*/ function(IndexedCollection3) {
    function Stack1(value) {
        return value === null || value === undefined ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
    }
    if (IndexedCollection3) Stack1.__proto__ = IndexedCollection3;
    Stack1.prototype = Object.create(IndexedCollection3 && IndexedCollection3.prototype);
    Stack1.prototype.constructor = Stack1;
    Stack1.of = function of() {
        return this(arguments);
    };
    Stack1.prototype.toString = function toString() {
        return this.__toString('Stack [', ']');
    };
    // @pragma Access
    Stack1.prototype.get = function get(index, notSetValue) {
        var head = this._head;
        index = wrapIndex(this, index);
        while(head && index--)head = head.next;
        return head ? head.value : notSetValue;
    };
    Stack1.prototype.peek = function peek() {
        return this._head && this._head.value;
    };
    // @pragma Modification
    Stack1.prototype.push = function push() {
        var arguments$1 = arguments;
        if (arguments.length === 0) return this;
        var newSize = this.size + arguments.length;
        var head = this._head;
        for(var ii = arguments.length - 1; ii >= 0; ii--)head = {
            value: arguments$1[ii],
            next: head
        };
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    Stack1.prototype.pushAll = function pushAll(iter) {
        iter = IndexedCollection3(iter);
        if (iter.size === 0) return this;
        if (this.size === 0 && isStack(iter)) return iter;
        assertNotInfinite(iter.size);
        var newSize = this.size;
        var head = this._head;
        iter.__iterate(function(value) {
            newSize++;
            head = {
                value: value,
                next: head
            };
        }, /* reverse */ true);
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    Stack1.prototype.pop = function pop() {
        return this.slice(1);
    };
    Stack1.prototype.clear = function clear() {
        if (this.size === 0) return this;
        if (this.__ownerID) {
            this.size = 0;
            this._head = undefined;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return emptyStack();
    };
    Stack1.prototype.slice = function slice(begin, end) {
        if (wholeSlice(begin, end, this.size)) return this;
        var resolvedBegin = resolveBegin(begin, this.size);
        var resolvedEnd = resolveEnd(end, this.size);
        if (resolvedEnd !== this.size) // super.slice(begin, end);
        return IndexedCollection3.prototype.slice.call(this, begin, end);
        var newSize = this.size - resolvedBegin;
        var head = this._head;
        while(resolvedBegin--)head = head.next;
        if (this.__ownerID) {
            this.size = newSize;
            this._head = head;
            this.__hash = undefined;
            this.__altered = true;
            return this;
        }
        return makeStack(newSize, head);
    };
    // @pragma Mutability
    Stack1.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) return this;
        if (!ownerID) {
            if (this.size === 0) return emptyStack();
            this.__ownerID = ownerID;
            this.__altered = false;
            return this;
        }
        return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    // @pragma Iteration
    Stack1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        if (reverse) return new ArraySeq(this.toArray()).__iterate(function(v, k) {
            return fn(v, k, this$1$1);
        }, reverse);
        var iterations = 0;
        var node = this._head;
        while(node){
            if (fn(node.value, iterations++, this) === false) break;
            node = node.next;
        }
        return iterations;
    };
    Stack1.prototype.__iterator = function __iterator(type, reverse) {
        if (reverse) return new ArraySeq(this.toArray()).__iterator(type, reverse);
        var iterations = 0;
        var node = this._head;
        return new Iterator(function() {
            if (node) {
                var value = node.value;
                node = node.next;
                return iteratorValue(type, iterations++, value);
            }
            return iteratorDone();
        });
    };
    return Stack1;
}(IndexedCollection);
Stack.isStack = isStack;
var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
    return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
    return obj.asImmutable();
};
function makeStack(size, head, ownerID, hash5) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash5;
    map.__altered = false;
    return map;
}
var EMPTY_STACK;
function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}
var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';
function isSet(maybeSet) {
    return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}
function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}
function deepEqual(a, b) {
    if (a === b) return true;
    if (!isCollection(b) || a.size !== undefined && b.size !== undefined && a.size !== b.size || a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) return false;
    if (a.size === 0 && b.size === 0) return true;
    var notAssociative = !isAssociative(a);
    if (isOrdered(a)) {
        var entries = a.entries();
        return b.every(function(v, k) {
            var entry = entries.next().value;
            return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
        }) && entries.next().done;
    }
    var flipped = false;
    if (a.size === undefined) {
        if (b.size === undefined) {
            if (typeof a.cacheResult === 'function') a.cacheResult();
        } else {
            flipped = true;
            var _ = a;
            a = b;
            b = _;
        }
    }
    var allEqual = true;
    var bSize = b.__iterate(function(v, k) {
        if (notAssociative ? !a.has(v) : flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
            allEqual = false;
            return false;
        }
    });
    return allEqual && a.size === bSize;
}
function mixin(ctor, methods) {
    var keyCopier = function(key) {
        ctor.prototype[key] = methods[key];
    };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
}
function toJS(value) {
    if (!value || typeof value !== 'object') return value;
    if (!isCollection(value)) {
        if (!isDataStructure(value)) return value;
        value = Seq(value);
    }
    if (isKeyed(value)) {
        var result$1 = {};
        value.__iterate(function(v, k) {
            result$1[k] = toJS(v);
        });
        return result$1;
    }
    var result = [];
    value.__iterate(function(v) {
        result.push(toJS(v));
    });
    return result;
}
var Set = /*@__PURE__*/ function(SetCollection2) {
    function Set1(value) {
        return value === null || value === undefined ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set1) {
            var iter = SetCollection2(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v) {
                return set1.add(v);
            });
        });
    }
    if (SetCollection2) Set1.__proto__ = SetCollection2;
    Set1.prototype = Object.create(SetCollection2 && SetCollection2.prototype);
    Set1.prototype.constructor = Set1;
    Set1.of = function of() {
        return this(arguments);
    };
    Set1.fromKeys = function fromKeys(value) {
        return this(KeyedCollection(value).keySeq());
    };
    Set1.intersect = function intersect(sets) {
        sets = Collection(sets).toArray();
        return sets.length ? SetPrototype.intersect.apply(Set1(sets.pop()), sets) : emptySet();
    };
    Set1.union = function union(sets) {
        sets = Collection(sets).toArray();
        return sets.length ? SetPrototype.union.apply(Set1(sets.pop()), sets) : emptySet();
    };
    Set1.prototype.toString = function toString() {
        return this.__toString('Set {', '}');
    };
    // @pragma Access
    Set1.prototype.has = function has(value) {
        return this._map.has(value);
    };
    // @pragma Modification
    Set1.prototype.add = function add(value) {
        return updateSet(this, this._map.set(value, value));
    };
    Set1.prototype.remove = function remove(value) {
        return updateSet(this, this._map.remove(value));
    };
    Set1.prototype.clear = function clear() {
        return updateSet(this, this._map.clear());
    };
    // @pragma Composition
    Set1.prototype.map = function map(mapper, context) {
        var this$1$1 = this;
        // keep track if the set is altered by the map function
        var didChanges = false;
        var newMap = updateSet(this, this._map.mapEntries(function(ref) {
            var v = ref[1];
            var mapped = mapper.call(context, v, v, this$1$1);
            if (mapped !== v) didChanges = true;
            return [
                mapped,
                mapped
            ];
        }, context));
        return didChanges ? newMap : this;
    };
    Set1.prototype.union = function union() {
        var iters = [], len = arguments.length;
        while(len--)iters[len] = arguments[len];
        iters = iters.filter(function(x) {
            return x.size !== 0;
        });
        if (iters.length === 0) return this;
        if (this.size === 0 && !this.__ownerID && iters.length === 1) return this.constructor(iters[0]);
        return this.withMutations(function(set2) {
            for(var ii = 0; ii < iters.length; ii++)SetCollection2(iters[ii]).forEach(function(value) {
                return set2.add(value);
            });
        });
    };
    Set1.prototype.intersect = function intersect() {
        var iters = [], len = arguments.length;
        while(len--)iters[len] = arguments[len];
        if (iters.length === 0) return this;
        iters = iters.map(function(iter) {
            return SetCollection2(iter);
        });
        var toRemove = [];
        this.forEach(function(value) {
            if (!iters.every(function(iter) {
                return iter.includes(value);
            })) toRemove.push(value);
        });
        return this.withMutations(function(set3) {
            toRemove.forEach(function(value) {
                set3.remove(value);
            });
        });
    };
    Set1.prototype.subtract = function subtract() {
        var iters = [], len = arguments.length;
        while(len--)iters[len] = arguments[len];
        if (iters.length === 0) return this;
        iters = iters.map(function(iter) {
            return SetCollection2(iter);
        });
        var toRemove = [];
        this.forEach(function(value) {
            if (iters.some(function(iter) {
                return iter.includes(value);
            })) toRemove.push(value);
        });
        return this.withMutations(function(set4) {
            toRemove.forEach(function(value) {
                set4.remove(value);
            });
        });
    };
    Set1.prototype.sort = function sort(comparator) {
        // Late binding
        return OrderedSet(sortFactory(this, comparator));
    };
    Set1.prototype.sortBy = function sortBy(mapper, comparator) {
        // Late binding
        return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set1.prototype.wasAltered = function wasAltered() {
        return this._map.wasAltered();
    };
    Set1.prototype.__iterate = function __iterate(fn, reverse) {
        var this$1$1 = this;
        return this._map.__iterate(function(k) {
            return fn(k, k, this$1$1);
        }, reverse);
    };
    Set1.prototype.__iterator = function __iterator(type, reverse) {
        return this._map.__iterator(type, reverse);
    };
    Set1.prototype.__ensureOwner = function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) return this;
        var newMap = this._map.__ensureOwner(ownerID);
        if (!ownerID) {
            if (this.size === 0) return this.__empty();
            this.__ownerID = ownerID;
            this._map = newMap;
            return this;
        }
        return this.__make(newMap, ownerID);
    };
    return Set1;
}(SetCollection);
Set.isSet = isSet;
var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
    return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
    return obj.asImmutable();
};
SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;
function updateSet(set5, newMap) {
    if (set5.__ownerID) {
        set5.size = newMap.size;
        set5._map = newMap;
        return set5;
    }
    return newMap === set5._map ? set5 : newMap.size === 0 ? set5.__empty() : set5.__make(newMap);
}
function makeSet(map, ownerID) {
    var set6 = Object.create(SetPrototype);
    set6.size = map ? map.size : 0;
    set6._map = map;
    set6.__ownerID = ownerID;
    return set6;
}
var EMPTY_SET;
function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}
/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */ var Range = /*@__PURE__*/ function(IndexedSeq5) {
    function Range1(start, end, step) {
        if (!(this instanceof Range1)) return new Range1(start, end, step);
        invariant(step !== 0, 'Cannot step a Range by 0');
        start = start || 0;
        if (end === undefined) end = Infinity;
        step = step === undefined ? 1 : Math.abs(step);
        if (end < start) step = -step;
        this._start = start;
        this._end = end;
        this._step = step;
        this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
        if (this.size === 0) {
            if (EMPTY_RANGE) return EMPTY_RANGE;
            EMPTY_RANGE = this;
        }
    }
    if (IndexedSeq5) Range1.__proto__ = IndexedSeq5;
    Range1.prototype = Object.create(IndexedSeq5 && IndexedSeq5.prototype);
    Range1.prototype.constructor = Range1;
    Range1.prototype.toString = function toString() {
        if (this.size === 0) return 'Range []';
        return 'Range [ ' + this._start + '...' + this._end + (this._step !== 1 ? ' by ' + this._step : '') + ' ]';
    };
    Range1.prototype.get = function get(index, notSetValue) {
        return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range1.prototype.includes = function includes(searchValue) {
        var possibleIndex = (searchValue - this._start) / this._step;
        return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range1.prototype.slice = function slice(begin, end) {
        if (wholeSlice(begin, end, this.size)) return this;
        begin = resolveBegin(begin, this.size);
        end = resolveEnd(end, this.size);
        if (end <= begin) return new Range1(0, 0);
        return new Range1(this.get(begin, this._end), this.get(end, this._end), this._step);
    };
    Range1.prototype.indexOf = function indexOf(searchValue) {
        var offsetValue = searchValue - this._start;
        if (offsetValue % this._step === 0) {
            var index = offsetValue / this._step;
            if (index >= 0 && index < this.size) return index;
        }
        return -1;
    };
    Range1.prototype.lastIndexOf = function lastIndexOf(searchValue) {
        return this.indexOf(searchValue);
    };
    Range1.prototype.__iterate = function __iterate(fn, reverse) {
        var size = this.size;
        var step = this._step;
        var value = reverse ? this._start + (size - 1) * step : this._start;
        var i = 0;
        while(i !== size){
            if (fn(value, reverse ? size - ++i : i++, this) === false) break;
            value += reverse ? -step : step;
        }
        return i;
    };
    Range1.prototype.__iterator = function __iterator(type, reverse) {
        var size = this.size;
        var step = this._step;
        var value = reverse ? this._start + (size - 1) * step : this._start;
        var i = 0;
        return new Iterator(function() {
            if (i === size) return iteratorDone();
            var v = value;
            value += reverse ? -step : step;
            return iteratorValue(type, reverse ? size - ++i : i++, v);
        });
    };
    Range1.prototype.equals = function equals(other) {
        return other instanceof Range1 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    return Range1;
}(IndexedSeq);
var EMPTY_RANGE;
function getIn$1(collection, searchKeyPath, notSetValue) {
    var keyPath = coerceKeyPath(searchKeyPath);
    var i = 0;
    while(i !== keyPath.length){
        collection = get(collection, keyPath[i++], NOT_SET);
        if (collection === NOT_SET) return notSetValue;
    }
    return collection;
}
function getIn(searchKeyPath, notSetValue) {
    return getIn$1(this, searchKeyPath, notSetValue);
}
function hasIn$1(collection, keyPath) {
    return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
}
function hasIn(searchKeyPath) {
    return hasIn$1(this, searchKeyPath);
}
function toObject() {
    assertNotInfinite(this.size);
    var object = {};
    this.__iterate(function(v, k) {
        object[k] = v;
    });
    return object;
}
// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;
Collection.Iterator = Iterator;
mixin(Collection, {
    // ### Conversion to other types
    toArray: function toArray() {
        assertNotInfinite(this.size);
        var array = new Array(this.size || 0);
        var useTuples = isKeyed(this);
        var i = 0;
        this.__iterate(function(v, k) {
            // Keyed collections produce an array of tuples.
            array[i++] = useTuples ? [
                k,
                v
            ] : v;
        });
        return array;
    },
    toIndexedSeq: function toIndexedSeq() {
        return new ToIndexedSequence(this);
    },
    toJS: function toJS$1() {
        return toJS(this);
    },
    toKeyedSeq: function toKeyedSeq() {
        return new ToKeyedSequence(this, true);
    },
    toMap: function toMap() {
        // Use Late Binding here to solve the circular dependency.
        return Map(this.toKeyedSeq());
    },
    toObject: toObject,
    toOrderedMap: function toOrderedMap() {
        // Use Late Binding here to solve the circular dependency.
        return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function toOrderedSet() {
        // Use Late Binding here to solve the circular dependency.
        return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function toSet() {
        // Use Late Binding here to solve the circular dependency.
        return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq() {
        return new ToSetSequence(this);
    },
    toSeq: function toSeq() {
        return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function toStack() {
        // Use Late Binding here to solve the circular dependency.
        return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function toList() {
        // Use Late Binding here to solve the circular dependency.
        return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString() {
        return '[Collection]';
    },
    __toString: function __toString(head, tail) {
        if (this.size === 0) return head + tail;
        return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat() {
        var values = [], len = arguments.length;
        while(len--)values[len] = arguments[len];
        return reify(this, concatFactory(this, values));
    },
    includes: function includes(searchValue) {
        return this.some(function(value) {
            return is(value, searchValue);
        });
    },
    entries: function entries() {
        return this.__iterator(ITERATE_ENTRIES);
    },
    every: function every(predicate, context) {
        assertNotInfinite(this.size);
        var returnValue = true;
        this.__iterate(function(v, k, c) {
            if (!predicate.call(context, v, k, c)) {
                returnValue = false;
                return false;
            }
        });
        return returnValue;
    },
    filter: function filter(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, true));
    },
    find: function find(predicate, context, notSetValue) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach(sideEffect, context) {
        assertNotInfinite(this.size);
        return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join(separator) {
        assertNotInfinite(this.size);
        separator = separator !== undefined ? '' + separator : ',';
        var joined = '';
        var isFirst = true;
        this.__iterate(function(v) {
            isFirst ? isFirst = false : joined += separator;
            joined += v !== null && v !== undefined ? v.toString() : '';
        });
        return joined;
    },
    keys: function keys() {
        return this.__iterator(ITERATE_KEYS);
    },
    map: function map(mapper, context) {
        return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function reduce$1(reducer, initialReduction, context) {
        return reduce(this, reducer, initialReduction, context, arguments.length < 2, false);
    },
    reduceRight: function reduceRight(reducer, initialReduction, context) {
        return reduce(this, reducer, initialReduction, context, arguments.length < 2, true);
    },
    reverse: function reverse() {
        return reify(this, reverseFactory(this, true));
    },
    slice: function slice(begin, end) {
        return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function some(predicate, context) {
        return !this.every(not(predicate), context);
    },
    sort: function sort(comparator) {
        return reify(this, sortFactory(this, comparator));
    },
    values: function values() {
        return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function butLast() {
        return this.slice(0, -1);
    },
    isEmpty: function isEmpty() {
        return this.size !== undefined ? this.size === 0 : !this.some(function() {
            return true;
        });
    },
    count: function count(predicate, context) {
        return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
    },
    countBy: function countBy(grouper, context) {
        return countByFactory(this, grouper, context);
    },
    equals: function equals(other) {
        return deepEqual(this, other);
    },
    entrySeq: function entrySeq() {
        var collection = this;
        if (collection._cache) // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(collection._cache);
        var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
        entriesSequence.fromEntrySeq = function() {
            return collection.toSeq();
        };
        return entriesSequence;
    },
    filterNot: function filterNot(predicate, context) {
        return this.filter(not(predicate), context);
    },
    findEntry: function findEntry(predicate, context, notSetValue) {
        var found = notSetValue;
        this.__iterate(function(v, k, c) {
            if (predicate.call(context, v, k, c)) {
                found = [
                    k,
                    v
                ];
                return false;
            }
        });
        return found;
    },
    findKey: function findKey(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry && entry[0];
    },
    findLast: function findLast(predicate, context, notSetValue) {
        return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
        return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey(predicate, context) {
        return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function first(notSetValue) {
        return this.find(returnTrue, null, notSetValue);
    },
    flatMap: function flatMap(mapper, context) {
        return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function flatten(depth) {
        return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq() {
        return new FromEntriesSequence(this);
    },
    get: function get(searchKey, notSetValue) {
        return this.find(function(_, key) {
            return is(key, searchKey);
        }, undefined, notSetValue);
    },
    getIn: getIn,
    groupBy: function groupBy(grouper, context) {
        return groupByFactory(this, grouper, context);
    },
    has: function has(searchKey) {
        return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn: hasIn,
    isSubset: function isSubset(iter) {
        iter = typeof iter.includes === 'function' ? iter : Collection(iter);
        return this.every(function(value) {
            return iter.includes(value);
        });
    },
    isSuperset: function isSuperset(iter) {
        iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
        return iter.isSubset(this);
    },
    keyOf: function keyOf(searchValue) {
        return this.findKey(function(value) {
            return is(value, searchValue);
        });
    },
    keySeq: function keySeq() {
        return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function last(notSetValue) {
        return this.toSeq().reverse().first(notSetValue);
    },
    lastKeyOf: function lastKeyOf(searchValue) {
        return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function max(comparator) {
        return maxFactory(this, comparator);
    },
    maxBy: function maxBy(mapper, comparator) {
        return maxFactory(this, comparator, mapper);
    },
    min: function min(comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },
    minBy: function minBy(mapper, comparator) {
        return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },
    rest: function rest() {
        return this.slice(1);
    },
    skip: function skip(amount) {
        return amount === 0 ? this : this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast(amount) {
        return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
    },
    skipWhile: function skipWhile(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function skipUntil(predicate, context) {
        return this.skipWhile(not(predicate), context);
    },
    sortBy: function sortBy(mapper, comparator) {
        return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function take(amount) {
        return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast(amount) {
        return this.slice(-Math.max(0, amount));
    },
    takeWhile: function takeWhile(predicate, context) {
        return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function takeUntil(predicate, context) {
        return this.takeWhile(not(predicate), context);
    },
    update: function update(fn) {
        return fn(this);
    },
    valueSeq: function valueSeq() {
        return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode() {
        return this.__hash || (this.__hash = hashCollection(this));
    }
});
var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
    return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;
mixin(KeyedCollection, {
    // ### More sequential methods
    flip: function flip() {
        return reify(this, flipFactory(this));
    },
    mapEntries: function mapEntries(mapper, context) {
        var this$1$1 = this;
        var iterations = 0;
        return reify(this, this.toSeq().map(function(v, k) {
            return mapper.call(context, [
                k,
                v
            ], iterations++, this$1$1);
        }).fromEntrySeq());
    },
    mapKeys: function mapKeys(mapper, context) {
        var this$1$1 = this;
        return reify(this, this.toSeq().flip().map(function(k, v) {
            return mapper.call(context, k, v, this$1$1);
        }).flip());
    }
});
var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function(v, k) {
    return quoteString(k) + ': ' + quoteString(v);
};
mixin(IndexedCollection, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq() {
        return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter(predicate, context) {
        return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function findIndex(predicate, context) {
        var entry = this.findEntry(predicate, context);
        return entry ? entry[0] : -1;
    },
    indexOf: function indexOf(searchValue) {
        var key = this.keyOf(searchValue);
        return key === undefined ? -1 : key;
    },
    lastIndexOf: function lastIndexOf(searchValue) {
        var key = this.lastKeyOf(searchValue);
        return key === undefined ? -1 : key;
    },
    reverse: function reverse() {
        return reify(this, reverseFactory(this, false));
    },
    slice: function slice(begin, end) {
        return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function splice(index, removeNum /*, ...values*/ ) {
        var numArgs = arguments.length;
        removeNum = Math.max(removeNum || 0, 0);
        if (numArgs === 0 || numArgs === 2 && !removeNum) return this;
        // If index is negative, it should resolve relative to the size of the
        // collection. However size may be expensive to compute if not cached, so
        // only call count() if the number is in fact negative.
        index = resolveBegin(index, index < 0 ? this.count() : this.size);
        var spliced = this.slice(0, index);
        return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
    },
    // ### More collection methods
    findLastIndex: function findLastIndex(predicate, context) {
        var entry = this.findLastEntry(predicate, context);
        return entry ? entry[0] : -1;
    },
    first: function first(notSetValue) {
        return this.get(0, notSetValue);
    },
    flatten: function flatten(depth) {
        return reify(this, flattenFactory(this, depth, false));
    },
    get: function get(index, notSetValue) {
        index = wrapIndex(this, index);
        return index < 0 || this.size === Infinity || this.size !== undefined && index > this.size ? notSetValue : this.find(function(_, key) {
            return key === index;
        }, undefined, notSetValue);
    },
    has: function has(index) {
        index = wrapIndex(this, index);
        return index >= 0 && (this.size !== undefined ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
    },
    interpose: function interpose(separator) {
        return reify(this, interposeFactory(this, separator));
    },
    interleave: function interleave() {
        var collections = [
            this
        ].concat(arrCopy(arguments));
        var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
        var interleaved = zipped.flatten(true);
        if (zipped.size) interleaved.size = zipped.size * collections.length;
        return reify(this, interleaved);
    },
    keySeq: function keySeq() {
        return Range(0, this.size);
    },
    last: function last(notSetValue) {
        return this.get(-1, notSetValue);
    },
    skipWhile: function skipWhile(predicate, context) {
        return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function zip() {
        var collections = [
            this
        ].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, collections));
    },
    zipAll: function zipAll() {
        var collections = [
            this
        ].concat(arrCopy(arguments));
        return reify(this, zipWithFactory(this, defaultZipper, collections, true));
    },
    zipWith: function zipWith(zipper /*, ...collections */ ) {
        var collections = arrCopy(arguments);
        collections[0] = this;
        return reify(this, zipWithFactory(this, zipper, collections));
    }
});
var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
mixin(SetCollection, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get(value, notSetValue) {
        return this.has(value) ? value : notSetValue;
    },
    includes: function includes(value) {
        return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq() {
        return this.valueSeq();
    }
});
var SetCollectionPrototype = SetCollection.prototype;
SetCollectionPrototype.has = CollectionPrototype.includes;
SetCollectionPrototype.contains = SetCollectionPrototype.includes;
SetCollectionPrototype.keys = SetCollectionPrototype.values;
// Mixin subclasses
mixin(KeyedSeq, KeyedCollectionPrototype);
mixin(IndexedSeq, IndexedCollectionPrototype);
mixin(SetSeq, SetCollectionPrototype);
// #pragma Helper functions
function reduce(collection, reducer, reduction, context, useFirst, reverse) {
    assertNotInfinite(collection.size);
    collection.__iterate(function(v, k, c) {
        if (useFirst) {
            useFirst = false;
            reduction = v;
        } else reduction = reducer.call(context, reduction, v, k, c);
    }, reverse);
    return reduction;
}
function keyMapper(v, k) {
    return k;
}
function entryMapper(v, k) {
    return [
        k,
        v
    ];
}
function not(predicate) {
    return function() {
        return !predicate.apply(this, arguments);
    };
}
function neg(predicate) {
    return function() {
        return -predicate.apply(this, arguments);
    };
}
function defaultZipper() {
    return arrCopy(arguments);
}
function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
}
function hashCollection(collection) {
    if (collection.size === Infinity) return 0;
    var ordered = isOrdered(collection);
    var keyed = isKeyed(collection);
    var h = ordered ? 1 : 0;
    var size = collection.__iterate(keyed ? ordered ? function(v, k) {
        h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
    } : function(v, k) {
        h = h + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function(v) {
        h = 31 * h + hash(v) | 0;
    } : function(v) {
        h = h + hash(v) | 0;
    });
    return murmurHashOfSize(size, h);
}
function murmurHashOfSize(size, h) {
    h = imul(h, 3432918353);
    h = imul(h << 15 | h >>> -15, 461845907);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 3864292196 | 0) ^ size;
    h = imul(h ^ h >>> 16, 2246822507);
    h = imul(h ^ h >>> 13, 3266489909);
    h = smi(h ^ h >>> 16);
    return h;
}
function hashMerge(a, b) {
    return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0; // int
}
var OrderedSet = /*@__PURE__*/ function(Set2) {
    function OrderedSet1(value) {
        return value === null || value === undefined ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set7) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v) {
                return set7.add(v);
            });
        });
    }
    if (Set2) OrderedSet1.__proto__ = Set2;
    OrderedSet1.prototype = Object.create(Set2 && Set2.prototype);
    OrderedSet1.prototype.constructor = OrderedSet1;
    OrderedSet1.of = function of() {
        return this(arguments);
    };
    OrderedSet1.fromKeys = function fromKeys(value) {
        return this(KeyedCollection(value).keySeq());
    };
    OrderedSet1.prototype.toString = function toString() {
        return this.__toString('OrderedSet {', '}');
    };
    return OrderedSet1;
}(Set);
OrderedSet.isOrderedSet = isOrderedSet;
var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;
function makeOrderedSet(map, ownerID) {
    var set8 = Object.create(OrderedSetPrototype);
    set8.size = map ? map.size : 0;
    set8._map = map;
    set8.__ownerID = ownerID;
    return set8;
}
var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
}
function throwOnInvalidDefaultValues(defaultValues) {
    if (isRecord(defaultValues)) throw new Error('Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead.');
    if (isImmutable(defaultValues)) throw new Error('Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead.');
    if (defaultValues === null || typeof defaultValues !== 'object') throw new Error('Can not call `Record` with a non-object as default values. Use a plain javascript object instead.');
}
var Record = function Record(defaultValues, name) {
    var hasInitialized;
    throwOnInvalidDefaultValues(defaultValues);
    var RecordType = function Record(values) {
        var this$1$1 = this;
        if (values instanceof RecordType) return values;
        if (!(this instanceof RecordType)) return new RecordType(values);
        if (!hasInitialized) {
            hasInitialized = true;
            var keys = Object.keys(defaultValues);
            var indices = RecordTypePrototype._indices = {};
            // Deprecated: left to attempt not to break any external code which
            // relies on a ._name property existing on record instances.
            // Use Record.getDescriptiveName() instead
            RecordTypePrototype._name = name;
            RecordTypePrototype._keys = keys;
            RecordTypePrototype._defaultValues = defaultValues;
            for(var i = 0; i < keys.length; i++){
                var propName = keys[i];
                indices[propName] = i;
                if (RecordTypePrototype[propName]) /* eslint-disable no-console */ typeof console === 'object' && console.warn && console.warn('Cannot define ' + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.');
                else setProp(RecordTypePrototype, propName);
            }
        }
        this.__ownerID = undefined;
        this._values = List().withMutations(function(l) {
            l.setSize(this$1$1._keys.length);
            KeyedCollection(values).forEach(function(v, k) {
                l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? undefined : v);
            });
        });
        return this;
    };
    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    if (name) RecordType.displayName = name;
    return RecordType;
};
Record.prototype.toString = function toString() {
    var str = recordName(this) + ' { ';
    var keys = this._keys;
    var k;
    for(var i = 0, l = keys.length; i !== l; i++){
        k = keys[i];
        str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
    }
    return str + ' }';
};
Record.prototype.equals = function equals(other) {
    return this === other || other && recordSeq(this).equals(recordSeq(other));
};
Record.prototype.hashCode = function hashCode() {
    return recordSeq(this).hashCode();
};
// @pragma Access
Record.prototype.has = function has(k) {
    return this._indices.hasOwnProperty(k);
};
Record.prototype.get = function get(k, notSetValue) {
    if (!this.has(k)) return notSetValue;
    var index = this._indices[k];
    var value = this._values.get(index);
    return value === undefined ? this._defaultValues[k] : value;
};
// @pragma Modification
Record.prototype.set = function set(k, v) {
    if (this.has(k)) {
        var newValues = this._values.set(this._indices[k], v === this._defaultValues[k] ? undefined : v);
        if (newValues !== this._values && !this.__ownerID) return makeRecord(this, newValues);
    }
    return this;
};
Record.prototype.remove = function remove(k) {
    return this.set(k);
};
Record.prototype.clear = function clear() {
    var newValues = this._values.clear().setSize(this._keys.length);
    return this.__ownerID ? this : makeRecord(this, newValues);
};
Record.prototype.wasAltered = function wasAltered() {
    return this._values.wasAltered();
};
Record.prototype.toSeq = function toSeq() {
    return recordSeq(this);
};
Record.prototype.toJS = function toJS$1() {
    return toJS(this);
};
Record.prototype.entries = function entries() {
    return this.__iterator(ITERATE_ENTRIES);
};
Record.prototype.__iterator = function __iterator(type, reverse) {
    return recordSeq(this).__iterator(type, reverse);
};
Record.prototype.__iterate = function __iterate(fn, reverse) {
    return recordSeq(this).__iterate(fn, reverse);
};
Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) return this;
    var newValues = this._values.__ensureOwner(ownerID);
    if (!ownerID) {
        this.__ownerID = ownerID;
        this._values = newValues;
        return this;
    }
    return makeRecord(this, newValues, ownerID);
};
Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge$1;
RecordPrototype.mergeWith = mergeWith$1;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep;
RecordPrototype.mergeDeepWith = mergeDeepWith;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn;
RecordPrototype.update = update;
RecordPrototype.updateIn = updateIn;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
    return this.toString();
};
function makeRecord(likeRecord, values, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._values = values;
    record.__ownerID = ownerID;
    return record;
}
function recordName(record) {
    return record.constructor.displayName || record.constructor.name || 'Record';
}
function recordSeq(record) {
    return keyedSeqFromValue(record._keys.map(function(k) {
        return [
            k,
            record.get(k)
        ];
    }));
}
function setProp(prototype, name) {
    try {
        Object.defineProperty(prototype, name, {
            get: function() {
                return this.get(name);
            },
            set: function(value) {
                invariant(this.__ownerID, 'Cannot set on an immutable record.');
                this.set(name, value);
            }
        });
    } catch (error) {
    // Object.defineProperty failed. Probably IE8.
    }
}
/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */ var Repeat = /*@__PURE__*/ function(IndexedSeq6) {
    function Repeat1(value, times) {
        if (!(this instanceof Repeat1)) return new Repeat1(value, times);
        this._value = value;
        this.size = times === undefined ? Infinity : Math.max(0, times);
        if (this.size === 0) {
            if (EMPTY_REPEAT) return EMPTY_REPEAT;
            EMPTY_REPEAT = this;
        }
    }
    if (IndexedSeq6) Repeat1.__proto__ = IndexedSeq6;
    Repeat1.prototype = Object.create(IndexedSeq6 && IndexedSeq6.prototype);
    Repeat1.prototype.constructor = Repeat1;
    Repeat1.prototype.toString = function toString() {
        if (this.size === 0) return 'Repeat []';
        return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };
    Repeat1.prototype.get = function get(index, notSetValue) {
        return this.has(index) ? this._value : notSetValue;
    };
    Repeat1.prototype.includes = function includes(searchValue) {
        return is(this._value, searchValue);
    };
    Repeat1.prototype.slice = function slice(begin, end) {
        var size = this.size;
        return wholeSlice(begin, end, size) ? this : new Repeat1(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };
    Repeat1.prototype.reverse = function reverse() {
        return this;
    };
    Repeat1.prototype.indexOf = function indexOf(searchValue) {
        if (is(this._value, searchValue)) return 0;
        return -1;
    };
    Repeat1.prototype.lastIndexOf = function lastIndexOf(searchValue) {
        if (is(this._value, searchValue)) return this.size;
        return -1;
    };
    Repeat1.prototype.__iterate = function __iterate(fn, reverse) {
        var size = this.size;
        var i = 0;
        while(i !== size){
            if (fn(this._value, reverse ? size - ++i : i++, this) === false) break;
        }
        return i;
    };
    Repeat1.prototype.__iterator = function __iterator(type, reverse) {
        var this$1$1 = this;
        var size = this.size;
        var i = 0;
        return new Iterator(function() {
            return i === size ? iteratorDone() : iteratorValue(type, reverse ? size - ++i : i++, this$1$1._value);
        });
    };
    Repeat1.prototype.equals = function equals(other) {
        return other instanceof Repeat1 ? is(this._value, other._value) : deepEqual(other);
    };
    return Repeat1;
}(IndexedSeq);
var EMPTY_REPEAT;
function fromJS(value, converter) {
    return fromJSWith([], converter || defaultConverter, value, '', converter && converter.length > 2 ? [] : undefined, {
        '': value
    });
}
function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
    if (typeof value !== 'string' && !isImmutable(value) && (isArrayLike(value) || hasIterator(value) || isPlainObject(value))) {
        if (~stack.indexOf(value)) throw new TypeError('Cannot convert circular structure to Immutable');
        stack.push(value);
        keyPath && key !== '' && keyPath.push(key);
        var converted = converter.call(parentValue, key, Seq(value).map(function(v, k) {
            return fromJSWith(stack, converter, v, k, keyPath, value);
        }), keyPath && keyPath.slice());
        stack.pop();
        keyPath && keyPath.pop();
        return converted;
    }
    return value;
}
function defaultConverter(k, v) {
    // Effectively the opposite of "Collection.toSeq()"
    return isIndexed(v) ? v.toList() : isKeyed(v) ? v.toMap() : v.toSet();
}
var version = "4.0.0";
var Immutable = {
    version: version,
    Collection: Collection,
    // Note: Iterable is deprecated
    Iterable: Collection,
    Seq: Seq,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,
    Record: Record,
    Range: Range,
    Repeat: Repeat,
    is: is,
    fromJS: fromJS,
    hash: hash,
    isImmutable: isImmutable,
    isCollection: isCollection,
    isKeyed: isKeyed,
    isIndexed: isIndexed,
    isAssociative: isAssociative,
    isOrdered: isOrdered,
    isValueObject: isValueObject,
    isPlainObject: isPlainObject,
    isSeq: isSeq,
    isList: isList,
    isMap: isMap,
    isOrderedMap: isOrderedMap,
    isStack: isStack,
    isSet: isSet,
    isOrderedSet: isOrderedSet,
    isRecord: isRecord,
    get: get,
    getIn: getIn$1,
    has: has,
    hasIn: hasIn$1,
    merge: merge,
    mergeDeep: mergeDeep$1,
    mergeWith: mergeWith,
    mergeDeepWith: mergeDeepWith$1,
    remove: remove,
    removeIn: removeIn,
    set: set,
    setIn: setIn$1,
    update: update$1,
    updateIn: updateIn$1
};
// Note: Iterable is deprecated
var Iterable = Collection;
exports.default = Immutable;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class searchView {
    _parentEl = document.querySelector('.search');
    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new searchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class resultsView extends _viewDefault.default {
    _parentElement = document.querySelector('.results');
    _errorMessage = 'No recipies found for your query! Please try again ;)';
    _message = '';
    _generateMarkup() {
        return this._data.map((result)=>_previewViewDefault.default.render(result, false)
        ).join('');
    }
}
exports.default = new resultsView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class previewView extends _viewDefault.default {
    _parentElement = '';
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `<li class="preview">
    <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="${this._data.title}" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
          <use href="${_iconsSvgDefault.default}#icon-user"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>`;
    }
}
exports.default = new previewView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class paginationView extends _viewDefault.default {
    _parentElement = document.querySelector('.pagination');
    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        // Page 1, and there are other pages
        if (curPage === 1 && numPages > 1) return `<button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
      <span> Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </button>`;
        // Last page
        if (curPage === numPages && numPages > 1) return `<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span> Page ${curPage - 1}</span>
    </button>`;
        // Other page
        if (curPage < numPages) return `<button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span> Page ${curPage - 1}</span>
    </button>
    <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
      <span> Page ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </button>`;
        // Page 1, and ther are no other pages
        return '';
    }
}
exports.default = new paginationView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Lqzq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
class bookmarksView extends _viewDefault.default {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
    _message = '';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        return this._data.map((bookmark)=>_previewViewDefault.default.render(bookmark, false)
        ).join('');
    }
}
exports.default = new bookmarksView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","./previewView":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6DNj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./view");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class addRecipeView extends _viewDefault.default {
    _parentElement = document.querySelector('.upload');
    _message = 'Recipe was successfully uploaded';
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    toggleWindow() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
        this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    }
    _addHandlerUpload(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    _generateMarkup() {}
}
exports.default = new addRecipeView();

},{"./view":"bWlJ9","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
