import * as _common2 from 'https://jspm.dev/npm:@angular/common@12.0.3!cjs';
import * as _core2 from 'https://jspm.dev/npm:@angular/core@12.0.3!cjs';
import * as _platformBrowser2 from 'https://jspm.dev/npm:@angular/platform-browser@12.0.3!cjs';
import * as _browser2 from 'https://jspm.dev/npm:@angular/animations@12.0.3/browser!cjs';
import * as _http2 from 'https://jspm.dev/npm:@angular/common@12.0.3/http!cjs';
import * as _platformBrowserDynamic2 from 'https://jspm.dev/npm:@angular/platform-browser-dynamic@12.0.3!cjs';
import * as _animations2 from 'https://jspm.dev/npm:@angular/platform-browser@12.0.3/animations!cjs';
import * as _rxjs2 from 'https://jspm.dev/npm:rxjs!cjs';
import * as _url2 from 'https://jspm.dev/npm:@jspm/core@2/nodelibs/url';
import * as _compiler2 from 'https://jspm.dev/npm:@angular/compiler@12.0.3!cjs';
import * as _operators2 from 'https://jspm.dev/npm:rxjs/operators!cjs';
import * as _domino2 from './domino/domino.mjs';

import XMLHttpRequest from "https://deno.land/x/xmlhttprequest_deno@v0.0.2/mod.js";

var _xhr = XMLHttpRequest;

var _common = "default" in _common2 ? _common2.default : _common2;

var _core = "default" in _core2 ? _core2.default : _core2;

var _platformBrowser = "default" in _platformBrowser2 ? _platformBrowser2.default : _platformBrowser2;

var _browser = "default" in _browser2 ? _browser2.default : _browser2;

var _http = "default" in _http2 ? _http2.default : _http2;

var _platformBrowserDynamic = "default" in _platformBrowserDynamic2 ? _platformBrowserDynamic2.default : _platformBrowserDynamic2;

var _animations = "default" in _animations2 ? _animations2.default : _animations2;

var _rxjs = "default" in _rxjs2 ? _rxjs2.default : _rxjs2;

var _url = "default" in _url2 ? _url2.default : _url2;

var _compiler = "default" in _compiler2 ? _compiler2.default : _compiler2;

var _operators = "default" in _operators2 ? _operators2.default : _operators2;

var _domino = "default" in _domino2 ? _domino2.default : _domino2;



var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

var exports = {};

/**
 * @license Angular v12.0.3
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    factory(exports, _common, _core, _platformBrowser, _browser, _http, _platformBrowserDynamic, _animations, _rxjs, _url, _compiler, _operators);
})(exports, function (exports, common, core, platformBrowser, browser, http, platformBrowserDynamic, animations, rxjs, url, compiler, operators) {
    'use strict';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
     Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
     THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */

    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };

        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);

        function __() {
            (this || _global).constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];

                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }

            return t;
        };

        return __assign.apply(this || _global, arguments);
    };

    function __rest(s, e) {
        var t = {};

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
                resolve(value);
            });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = {
                label: 0,
                sent: function () {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f,
            y,
            t,
            g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this || _global;
        }), g;

        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");

            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];

                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;

                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };

                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;

                    case 7:
                        op = _.ops.pop();

                        _.trys.pop();

                        continue;

                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }

                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }

                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }

                        if (t && _.label < t[2]) {
                            _.label = t[2];

                            _.ops.push(op);

                            break;
                        }

                        if (t[2]) _.ops.pop();

                        _.trys.pop();

                        continue;
                }

                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }

            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }

    var __createBinding = Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
            enumerable: true,
            get: function () {
                return m[k];
            }
        });
    } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };

    function __exportStar(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }

        return ar;
    }
    /** @deprecated */


    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

        return ar;
    }
    /** @deprecated */


    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

        for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

        return r;
    }

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

        return to;
    }

    function __await(v) {
        return (this || _global) instanceof __await ? ((this || _global).v = v, this || _global) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this || _global;
        }, i;

        function verb(n) {
            if (g[n]) i[n] = function (v) {
                return new Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                });
            };
        }

        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }

        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
            resume("next", value);
        }

        function reject(value) {
            resume("throw", value);
        }

        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
            return this || _global;
        }, i;

        function verb(n, f) {
            i[n] = o[n] ? function (v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this || _global;
        }, i);

        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }

        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({
                    value: v,
                    done: d
                });
            }, reject);
        }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {
                value: raw
            });
        } else {
            cooked.raw = raw;
        }

        return cooked;
    }

    ;

    var __setModuleDefault = Object.create ? function (o, v) {
        Object.defineProperty(o, "default", {
            enumerable: true,
            value: v
        });
    } : function (o, v) {
        o["default"] = v;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

        __setModuleDefault(result, mod);

        return result;
    }

    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    }

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var domino = _domino;

    function setDomTypes() {
        // Make all Domino types available in the global env.
        Object.assign(_global, domino.impl);
        _global["KeyboardEvent"] = domino.impl.Event;
    }
    /**
     * Parses a document string to a Document object.
     */


    function parseDocument(html, url) {
        if (url === void 0) {
            url = "/";
        }

        var window = domino.createWindow(html, url);
        var doc = window.document;
        return doc;
    }
    /**
     * Serializes a document to string.
     */


    function serializeDocument(doc) {
        return doc.serialize();
    }
    /**
     * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
     */


    var DominoAdapter =
        /** @class */
        function (_super) {
            __extends(DominoAdapter, _super);

            function DominoAdapter() {
                var _this = _super.apply(this || _global, __spreadArray([], __read(arguments))) || this || _global;

                _this.supportsDOMEvents = false;
                return _this;
            }

            DominoAdapter.makeCurrent = function () {
                setDomTypes();
                common.ɵsetRootDomAdapter(new DominoAdapter());
            };

            DominoAdapter.prototype.createHtmlDocument = function () {
                return parseDocument("<html><head><title>fakeTitle</title></head><body></body></html>");
            };

            DominoAdapter.prototype.getDefaultDocument = function () {
                if (!DominoAdapter.defaultDoc) {
                    DominoAdapter.defaultDoc = domino.createDocument();
                }

                return DominoAdapter.defaultDoc;
            };

            DominoAdapter.prototype.isElementNode = function (node) {
                return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
            };

            DominoAdapter.prototype.isShadowRoot = function (node) {
                return node.shadowRoot == node;
            };
            /** @deprecated No longer being used in Ivy code. To be removed in version 14. */


            DominoAdapter.prototype.getGlobalEventTarget = function (doc, target) {
                if (target === "window") {
                    return doc.defaultView;
                }

                if (target === "document") {
                    return doc;
                }

                if (target === "body") {
                    return doc.body;
                }

                return null;
            };

            DominoAdapter.prototype.getBaseHref = function (doc) {
                var _a; // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?


                return ((_a = doc.documentElement.querySelector("base")) === null || _a === void 0 ? void 0 : _a.getAttribute("href")) || "";
            };

            DominoAdapter.prototype.dispatchEvent = function (el, evt) {
                el.dispatchEvent(evt); // Dispatch the event to the window also.

                var doc = el.ownerDocument || el;
                var win = doc.defaultView;

                if (win) {
                    win.dispatchEvent(evt);
                }
            };

            DominoAdapter.prototype.getUserAgent = function () {
                return "Fake user agent";
            };

            DominoAdapter.prototype.getCookie = function (name) {
                throw new Error("getCookie has not been implemented");
            };

            return DominoAdapter;
        }(platformBrowser.ɵBrowserDomAdapter);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Representation of the current platform state.
     *
     * @publicApi
     */


    var PlatformState =
        /** @class */
        function () {
            function PlatformState(_doc) {
                (this || _global)._doc = _doc;
            }
            /**
             * Renders the current state of the platform to string.
             */


            PlatformState.prototype.renderToString = function () {
                return serializeDocument((this || _global)._doc);
            };
            /**
             * Returns the current DOM state.
             */


            PlatformState.prototype.getDocument = function () {
                return (this || _global)._doc;
            };

            return PlatformState;
        }();

    PlatformState.decorators = [{
        type: core.Injectable
    }];

    PlatformState.ctorParameters = function () {
        return [{
            type: undefined,
            decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }]
        }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * The DI token for setting the initial config for the platform.
     *
     * @publicApi
     */


    var INITIAL_CONFIG = new core.InjectionToken("Server.INITIAL_CONFIG");
    /**
     * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
     * before current platform state is rendered to string.
     *
     * @publicApi
     */

    var BEFORE_APP_SERIALIZED = new core.InjectionToken("Server.RENDER_MODULE_HOOK");
    var xhr2 = _xhr; // @see https://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#URI-syntax

    var isAbsoluteUrl = /^[a-zA-Z\-\+.]+:\/\//;

    var ServerXhr =
        /** @class */
        function () {
            function ServerXhr() {}

            ServerXhr.prototype.build = function () {
                return new xhr2.XMLHttpRequest();
            };

            return ServerXhr;
        }();

    ServerXhr.decorators = [{
        type: core.Injectable
    }];

    var ZoneMacroTaskWrapper =
        /** @class */
        function () {
            function ZoneMacroTaskWrapper() {}

            ZoneMacroTaskWrapper.prototype.wrap = function (request) {
                var _this = this || _global;

                return new rxjs.Observable(function (observer) {
                    var task = null;
                    var scheduled = false;
                    var sub = null;
                    var savedResult = null;
                    var savedError = null;

                    var scheduleTask = function (_task) {
                        task = _task;
                        scheduled = true;

                        var delegate = _this.delegate(request);

                        sub = delegate.subscribe(function (res) {
                            return savedResult = res;
                        }, function (err) {
                            if (!scheduled) {
                                throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");
                            }

                            savedError = err;
                            scheduled = false;
                            task.invoke();
                        }, function () {
                            if (!scheduled) {
                                throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug.");
                            }

                            scheduled = false;
                            task.invoke();
                        });
                    };

                    var cancelTask = function (_task) {
                        if (!scheduled) {
                            return;
                        }

                        scheduled = false;

                        if (sub) {
                            sub.unsubscribe();
                            sub = null;
                        }
                    };

                    var onComplete = function () {
                        if (savedError !== null) {
                            observer.error(savedError);
                        } else {
                            observer.next(savedResult);
                            observer.complete();
                        }
                    }; // MockBackend for Http is synchronous, which means that if scheduleTask is by
                    // scheduleMacroTask, the request will hit MockBackend and the response will be
                    // sent, causing task.invoke() to be called.


                    var _task = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", onComplete, {}, function () {
                        return null;
                    }, cancelTask);

                    scheduleTask(_task);
                    return function () {
                        if (scheduled && task) {
                            task.zone.cancelTask(task);
                            scheduled = false;
                        }

                        if (sub) {
                            sub.unsubscribe();
                            sub = null;
                        }
                    };
                });
            };

            return ZoneMacroTaskWrapper;
        }();

    var ZoneClientBackend =
        /** @class */
        function (_super) {
            __extends(ZoneClientBackend, _super);

            function ZoneClientBackend(backend, platformLocation, config) {
                var _this = _super.call(this || _global) || this || _global;

                _this.backend = backend;
                _this.platformLocation = platformLocation;
                _this.config = config;
                return _this;
            }

            ZoneClientBackend.prototype.handle = function (request) {
                var _a = (this || _global).platformLocation,
                    href = _a.href,
                    protocol = _a.protocol,
                    hostname = _a.hostname,
                    port = _a.port;

                if ((this || _global).config.useAbsoluteUrl && !isAbsoluteUrl.test(request.url) && isAbsoluteUrl.test(href)) {
                    var baseHref = (this || _global).platformLocation.getBaseHrefFromDOM() || href;
                    var urlPrefix = protocol + "//" + hostname + (port ? ":" + port : "");
                    var baseUrl = new URL(baseHref, urlPrefix);
                    var url = new URL(request.url, baseUrl);
                    return this.wrap(request.clone({
                        url: url.toString()
                    }));
                }

                return this.wrap(request);
            };

            ZoneClientBackend.prototype.delegate = function (request) {
                return (this || _global).backend.handle(request);
            };

            return ZoneClientBackend;
        }(ZoneMacroTaskWrapper);

    function zoneWrappedInterceptingHandler(backend, injector, platformLocation, config) {
        var realBackend = new http.ɵHttpInterceptingHandler(backend, injector);
        return new ZoneClientBackend(realBackend, platformLocation, config);
    }

    var SERVER_HTTP_PROVIDERS = [{
        provide: common.XhrFactory,
        useClass: ServerXhr
    }, {
        provide: http.HttpHandler,
        useFactory: zoneWrappedInterceptingHandler,
        deps: [http.HttpBackend, core.Injector, common.PlatformLocation, INITIAL_CONFIG]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function parseUrl(urlStr) {
        var parsedUrl = url.parse(urlStr);
        return {
            hostname: parsedUrl.hostname || "",
            protocol: parsedUrl.protocol || "",
            port: parsedUrl.port || "",
            pathname: parsedUrl.pathname || "",
            search: parsedUrl.search || "",
            hash: parsedUrl.hash || ""
        };
    }
    /**
     * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
     * but not the state stack.
     */


    var ServerPlatformLocation =
        /** @class */
        function () {
            function ServerPlatformLocation(_doc, _config) {
                (this || _global)._doc = _doc;
                (this || _global).href = "/";
                (this || _global).hostname = "/";
                (this || _global).protocol = "/";
                (this || _global).port = "/";
                (this || _global).pathname = "/";
                (this || _global).search = "";
                (this || _global).hash = "";
                (this || _global)._hashUpdate = new rxjs.Subject();
                var config = _config;

                if (!config) {
                    return;
                }

                if (config.url) {
                    var url_1 = parseUrl(config.url);
                    (this || _global).protocol = url_1.protocol;
                    (this || _global).hostname = url_1.hostname;
                    (this || _global).port = url_1.port;
                    (this || _global).pathname = url_1.pathname;
                    (this || _global).search = url_1.search;
                    (this || _global).hash = url_1.hash;
                    (this || _global).href = _doc.location.href;
                }

                if (config.useAbsoluteUrl) {
                    if (!config.baseUrl) {
                        throw new Error("\"PlatformConfig.baseUrl\" must be set if \"useAbsoluteUrl\" is true");
                    }

                    var url_2 = parseUrl(config.baseUrl);
                    (this || _global).protocol = url_2.protocol;
                    (this || _global).hostname = url_2.hostname;
                    (this || _global).port = url_2.port;
                }
            }

            ServerPlatformLocation.prototype.getBaseHrefFromDOM = function () {
                return common.ɵgetDOM().getBaseHref((this || _global)._doc);
            };

            ServerPlatformLocation.prototype.onPopState = function (fn) {
                // No-op: a state stack is not implemented, so
                // no events will ever come.
                return function () {};
            };

            ServerPlatformLocation.prototype.onHashChange = function (fn) {
                var subscription = (this || _global)._hashUpdate.subscribe(fn);

                return function () {
                    return subscription.unsubscribe();
                };
            };

            Object.defineProperty(ServerPlatformLocation.prototype, "url", {
                get: function () {
                    return "" + (this || _global).pathname + (this || _global).search + (this || _global).hash;
                },
                enumerable: false,
                configurable: true
            });

            ServerPlatformLocation.prototype.setHash = function (value, oldUrl) {
                var _this = this || _global;

                if ((this || _global).hash === value) {
                    // Don't fire events if the hash has not changed.
                    return;
                }

                (this || _global).hash = value;
                var newUrl = (this || _global).url;
                scheduleMicroTask(function () {
                    return _this._hashUpdate.next({
                        type: "hashchange",
                        state: null,
                        oldUrl: oldUrl,
                        newUrl: newUrl
                    });
                });
            };

            ServerPlatformLocation.prototype.replaceState = function (state, title, newUrl) {
                var oldUrl = (this || _global).url;
                var parsedUrl = parseUrl(newUrl);
                (this || _global).pathname = parsedUrl.pathname;
                (this || _global).search = parsedUrl.search;
                this.setHash(parsedUrl.hash, oldUrl);
            };

            ServerPlatformLocation.prototype.pushState = function (state, title, newUrl) {
                this.replaceState(state, title, newUrl);
            };

            ServerPlatformLocation.prototype.forward = function () {
                throw new Error("Not implemented");
            };

            ServerPlatformLocation.prototype.back = function () {
                throw new Error("Not implemented");
            }; // History API isn't available on server, therefore return undefined


            ServerPlatformLocation.prototype.getState = function () {
                return undefined;
            };

            return ServerPlatformLocation;
        }();

    ServerPlatformLocation.decorators = [{
        type: core.Injectable
    }];

    ServerPlatformLocation.ctorParameters = function () {
        return [{
            type: undefined,
            decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }]
        }, {
            type: undefined,
            decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [INITIAL_CONFIG]
            }]
        }];
    };

    function scheduleMicroTask(fn) {
        Zone.current.scheduleMicroTask("scheduleMicrotask", fn);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var ServerEventManagerPlugin
        /* extends EventManagerPlugin which is private */
        =
        /** @class */
        function () {
            function ServerEventManagerPlugin(doc) {
                (this || _global).doc = doc;
            } // Handle all events on the server.


            ServerEventManagerPlugin.prototype.supports = function (eventName) {
                return true;
            };

            ServerEventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
                return common.ɵgetDOM().onAndCancel(element, eventName, handler);
            };
            /** @deprecated No longer being used in Ivy code. To be removed in version 14. */


            ServerEventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
                var target = common.ɵgetDOM().getGlobalEventTarget((this || _global).doc, element);

                if (!target) {
                    throw new Error("Unsupported event target " + target + " for event " + eventName);
                }

                return this.addEventListener(target, eventName, handler);
            };

            return ServerEventManagerPlugin;
        }();

    ServerEventManagerPlugin.decorators = [{
        type: core.Injectable
    }];

    ServerEventManagerPlugin.ctorParameters = function () {
        return [{
            type: undefined,
            decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }]
        }];
    };

    var EMPTY_ARRAY = [];
    var DEFAULT_SCHEMA = new compiler.DomElementSchemaRegistry();

    var ServerRendererFactory2 =
        /** @class */
        function () {
            function ServerRendererFactory2(eventManager, ngZone, document, sharedStylesHost) {
                (this || _global).eventManager = eventManager;
                (this || _global).ngZone = ngZone;
                (this || _global).document = document;
                (this || _global).sharedStylesHost = sharedStylesHost;
                (this || _global).rendererByCompId = new Map();
                (this || _global).schema = DEFAULT_SCHEMA;
                (this || _global).defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, (this || _global).schema);
            }

            ServerRendererFactory2.prototype.createRenderer = function (element, type) {
                if (!element || !type) {
                    return (this || _global).defaultRenderer;
                }

                switch (type.encapsulation) {
                    case core.ViewEncapsulation.Emulated:
                    {
                        var renderer = (this || _global).rendererByCompId.get(type.id);

                        if (!renderer) {
                            renderer = new EmulatedEncapsulationServerRenderer2((this || _global).eventManager, (this || _global).document, (this || _global).ngZone, (this || _global).sharedStylesHost, (this || _global).schema, type);

                            (this || _global).rendererByCompId.set(type.id, renderer);
                        }

                        renderer.applyToHost(element);
                        return renderer;
                    }

                    default:
                    {
                        if (!(this || _global).rendererByCompId.has(type.id)) {
                            var styles = platformBrowser.ɵflattenStyles(type.id, type.styles, []);

                            (this || _global).sharedStylesHost.addStyles(styles);

                            (this || _global).rendererByCompId.set(type.id, (this || _global).defaultRenderer);
                        }

                        return (this || _global).defaultRenderer;
                    }
                }
            };

            ServerRendererFactory2.prototype.begin = function () {};

            ServerRendererFactory2.prototype.end = function () {};

            return ServerRendererFactory2;
        }();

    ServerRendererFactory2.decorators = [{
        type: core.Injectable
    }];

    ServerRendererFactory2.ctorParameters = function () {
        return [{
            type: platformBrowser.EventManager
        }, {
            type: core.NgZone
        }, {
            type: undefined,
            decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }]
        }, {
            type: platformBrowser.ɵSharedStylesHost
        }];
    };

    var DefaultServerRenderer2 =
        /** @class */
        function () {
            function DefaultServerRenderer2(eventManager, document, ngZone, schema) {
                (this || _global).eventManager = eventManager;
                (this || _global).document = document;
                (this || _global).ngZone = ngZone;
                (this || _global).schema = schema;
                (this || _global).data = Object.create(null);
            }

            DefaultServerRenderer2.prototype.destroy = function () {};

            DefaultServerRenderer2.prototype.createElement = function (name, namespace, debugInfo) {
                if (namespace) {
                    var doc = (this || _global).document || common.ɵgetDOM().getDefaultDocument(); // TODO(FW-811): Ivy may cause issues here because it's passing around
                    // full URIs for namespaces, therefore this lookup will fail.

                    return doc.createElementNS(platformBrowser.ɵNAMESPACE_URIS[namespace], name);
                }

                return common.ɵgetDOM().createElement(name, (this || _global).document);
            };

            DefaultServerRenderer2.prototype.createComment = function (value, debugInfo) {
                return common.ɵgetDOM().getDefaultDocument().createComment(value);
            };

            DefaultServerRenderer2.prototype.createText = function (value, debugInfo) {
                var doc = common.ɵgetDOM().getDefaultDocument();
                return doc.createTextNode(value);
            };

            DefaultServerRenderer2.prototype.appendChild = function (parent, newChild) {
                parent.appendChild(newChild);
            };

            DefaultServerRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
                if (parent) {
                    parent.insertBefore(newChild, refChild);
                }
            };

            DefaultServerRenderer2.prototype.removeChild = function (parent, oldChild) {
                if (parent) {
                    parent.removeChild(oldChild);
                }
            };

            DefaultServerRenderer2.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
                var el;

                if (typeof selectorOrNode === "string") {
                    el = (this || _global).document.querySelector(selectorOrNode);

                    if (!el) {
                        throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
                    }
                } else {
                    el = selectorOrNode;
                }

                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }

                return el;
            };

            DefaultServerRenderer2.prototype.parentNode = function (node) {
                return node.parentNode;
            };

            DefaultServerRenderer2.prototype.nextSibling = function (node) {
                return node.nextSibling;
            };

            DefaultServerRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
                if (namespace) {
                    // TODO(FW-811): Ivy may cause issues here because it's passing around
                    // full URIs for namespaces, therefore this lookup will fail.
                    el.setAttributeNS(platformBrowser.ɵNAMESPACE_URIS[namespace], namespace + ":" + name, value);
                } else {
                    el.setAttribute(name, value);
                }
            };

            DefaultServerRenderer2.prototype.removeAttribute = function (el, name, namespace) {
                if (namespace) {
                    // TODO(FW-811): Ivy may cause issues here because it's passing around
                    // full URIs for namespaces, therefore this lookup will fail.
                    el.removeAttributeNS(platformBrowser.ɵNAMESPACE_URIS[namespace], name);
                } else {
                    el.removeAttribute(name);
                }
            };

            DefaultServerRenderer2.prototype.addClass = function (el, name) {
                el.classList.add(name);
            };

            DefaultServerRenderer2.prototype.removeClass = function (el, name) {
                el.classList.remove(name);
            };

            DefaultServerRenderer2.prototype.setStyle = function (el, style, value, flags) {
                style = style.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

                var styleMap = _readStyleAttribute(el);

                if (flags & core.RendererStyleFlags2.Important) {
                    value += " !important";
                }

                styleMap[style] = value == null ? "" : value;

                _writeStyleAttribute(el, styleMap);
            };

            DefaultServerRenderer2.prototype.removeStyle = function (el, style, flags) {
                // IE requires '' instead of null
                // see https://github.com/angular/angular/issues/7916
                this.setStyle(el, style, "", flags);
            }; // The value was validated already as a property binding, against the property name.
            // To know this value is safe to use as an attribute, the security context of the
            // attribute with the given name is checked against that security context of the
            // property.


            DefaultServerRenderer2.prototype._isSafeToReflectProperty = function (tagName, propertyName) {
                return (this || _global).schema.securityContext(tagName, propertyName, true) === (this || _global).schema.securityContext(tagName, propertyName, false);
            };

            DefaultServerRenderer2.prototype.setProperty = function (el, name, value) {
                checkNoSyntheticProp(name, "property");

                if (name === "innerText") {
                    // Domino does not support innerText. Just map it to textContent.
                    el.textContent = value;
                }

                el[name] = value; // Mirror property values for known HTML element properties in the attributes.
                // Skip `innerhtml` which is conservatively marked as an attribute for security
                // purposes but is not actually an attribute.

                var tagName = el.tagName.toLowerCase();

                if (value != null && (typeof value === "number" || typeof value == "string") && name.toLowerCase() !== "innerhtml" && (this || _global).schema.hasElement(tagName, EMPTY_ARRAY) && (this || _global).schema.hasProperty(tagName, name, EMPTY_ARRAY) && this._isSafeToReflectProperty(tagName, name)) {
                    this.setAttribute(el, name, value.toString());
                }
            };

            DefaultServerRenderer2.prototype.setValue = function (node, value) {
                node.textContent = value;
            };

            DefaultServerRenderer2.prototype.listen = function (target, eventName, callback) {
                checkNoSyntheticProp(eventName, "listener");

                if (typeof target === "string") {
                    return (this || _global).eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback));
                }

                return (this || _global).eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback));
            };

            DefaultServerRenderer2.prototype.decoratePreventDefault = function (eventHandler) {
                var _this = this || _global;

                return function (event) {
                    // Ivy uses `Function` as a special token that allows us to unwrap the function
                    // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
                    if (event === Function) {
                        return eventHandler;
                    } // Run the event handler inside the ngZone because event handlers are not patched
                    // by Zone on the server. This is required only for tests.


                    var allowDefaultBehavior = _this.ngZone.runGuarded(function () {
                        return eventHandler(event);
                    });

                    if (allowDefaultBehavior === false) {
                        event.preventDefault();
                        event.returnValue = false;
                    }

                    return undefined;
                };
            };

            return DefaultServerRenderer2;
        }();

    var AT_CHARCODE = "@".charCodeAt(0);

    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }

    var EmulatedEncapsulationServerRenderer2 =
        /** @class */
        function (_super) {
            __extends(EmulatedEncapsulationServerRenderer2, _super);

            function EmulatedEncapsulationServerRenderer2(eventManager, document, ngZone, sharedStylesHost, schema, component) {
                var _this = _super.call(this || _global, eventManager, document, ngZone, schema) || this || _global;

                _this.component = component; // Add a 's' prefix to style attributes to indicate server.

                var componentId = "s" + component.id;
                var styles = platformBrowser.ɵflattenStyles(componentId, component.styles, []);
                sharedStylesHost.addStyles(styles);
                _this.contentAttr = platformBrowser.ɵshimContentAttribute(componentId);
                _this.hostAttr = platformBrowser.ɵshimHostAttribute(componentId);
                return _this;
            }

            EmulatedEncapsulationServerRenderer2.prototype.applyToHost = function (element) {
                _super.prototype.setAttribute.call(this || _global, element, (this || _global).hostAttr, "");
            };

            EmulatedEncapsulationServerRenderer2.prototype.createElement = function (parent, name) {
                var el = _super.prototype.createElement.call(this || _global, parent, name, (this || _global).document);

                _super.prototype.setAttribute.call(this || _global, el, (this || _global).contentAttr, "");

                return el;
            };

            return EmulatedEncapsulationServerRenderer2;
        }(DefaultServerRenderer2);

    function _readStyleAttribute(element) {
        var styleMap = {};
        var styleAttribute = element.getAttribute("style");

        if (styleAttribute) {
            var styleList = styleAttribute.split(/;+/g);

            for (var i = 0; i < styleList.length; i++) {
                var style = styleList[i].trim();

                if (style.length > 0) {
                    var colonIndex = style.indexOf(":");

                    if (colonIndex === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }

                    var name = style.substr(0, colonIndex).trim();
                    styleMap[name] = style.substr(colonIndex + 1).trim();
                }
            }
        }

        return styleMap;
    }

    function _writeStyleAttribute(element, styleMap) {
        var styleAttrValue = "";

        for (var key in styleMap) {
            var newValue = styleMap[key];

            if (newValue != null) {
                styleAttrValue += key + ":" + styleMap[key] + ";";
            }
        }

        element.setAttribute("style", styleAttrValue);
    }

    var ServerStylesHost =
        /** @class */
        function (_super) {
            __extends(ServerStylesHost, _super);

            function ServerStylesHost(doc, transitionId) {
                var _this = _super.call(this || _global) || this || _global;

                _this.doc = doc;
                _this.transitionId = transitionId;
                _this.head = null;
                _this._styleNodes = new Set();
                _this.head = doc.getElementsByTagName("head")[0];
                return _this;
            }

            ServerStylesHost.prototype._addStyle = function (style) {
                var adapter = common.ɵgetDOM();
                var el = adapter.createElement("style");
                el.textContent = style;

                if (!!(this || _global).transitionId) {
                    el.setAttribute("ng-transition", (this || _global).transitionId);
                }

                (this || _global).head.appendChild(el);

                (this || _global)._styleNodes.add(el);
            };

            ServerStylesHost.prototype.onStylesAdded = function (additions) {
                var _this = this || _global;

                additions.forEach(function (style) {
                    return _this._addStyle(style);
                });
            };

            ServerStylesHost.prototype.ngOnDestroy = function () {
                (this || _global)._styleNodes.forEach(function (styleNode) {
                    return styleNode.remove();
                });
            };

            return ServerStylesHost;
        }(platformBrowser.ɵSharedStylesHost);

    ServerStylesHost.decorators = [{
        type: core.Injectable
    }];

    ServerStylesHost.ctorParameters = function () {
        return [{
            type: undefined,
            decorators: [{
                type: core.Inject,
                args: [common.DOCUMENT]
            }]
        }, {
            type: String,
            decorators: [{
                type: core.Optional
            }, {
                type: core.Inject,
                args: [platformBrowser.ɵTRANSITION_ID]
            }]
        }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function notSupported(feature) {
        throw new Error("platform-server does not support '" + feature + "'.");
    }

    var INTERNAL_SERVER_PLATFORM_PROVIDERS = [{
        provide: common.DOCUMENT,
        useFactory: _document,
        deps: [core.Injector]
    }, {
        provide: core.PLATFORM_ID,
        useValue: common.ɵPLATFORM_SERVER_ID
    }, {
        provide: core.PLATFORM_INITIALIZER,
        useFactory: initDominoAdapter,
        multi: true,
        deps: [core.Injector]
    }, {
        provide: common.PlatformLocation,
        useClass: ServerPlatformLocation,
        deps: [common.DOCUMENT, [core.Optional, INITIAL_CONFIG]]
    }, {
        provide: PlatformState,
        deps: [common.DOCUMENT]
    }, // Add special provider that allows multiple instances of platformServer* to be created.
        {
            provide: core.ɵALLOW_MULTIPLE_PLATFORMS,
            useValue: true
        }];

    function initDominoAdapter(injector) {
        return function () {
            DominoAdapter.makeCurrent();
        };
    }

    function instantiateServerRendererFactory(renderer, engine, zone) {
        return new animations.ɵAnimationRendererFactory(renderer, engine, zone);
    }

    var SERVER_RENDER_PROVIDERS = [ServerRendererFactory2, {
        provide: core.RendererFactory2,
        useFactory: instantiateServerRendererFactory,
        deps: [ServerRendererFactory2, browser.ɵAnimationEngine, core.NgZone]
    }, ServerStylesHost, {
        provide: platformBrowser.ɵSharedStylesHost,
        useExisting: ServerStylesHost
    }, {
        provide: platformBrowser.EVENT_MANAGER_PLUGINS,
        multi: true,
        useClass: ServerEventManagerPlugin
    }];
    /**
     * The ng module for the server.
     *
     * @publicApi
     */

    var ServerModule =
        /** @class */
        function () {
            function ServerModule() {}

            return ServerModule;
        }();

    ServerModule.decorators = [{
        type: core.NgModule,
        args: [{
            exports: [platformBrowser.BrowserModule],
            imports: [http.HttpClientModule, animations.NoopAnimationsModule],
            providers: [SERVER_RENDER_PROVIDERS, SERVER_HTTP_PROVIDERS, {
                provide: core.Testability,
                useValue: null
            }, {
                provide: common.ViewportScroller,
                useClass: common.ɵNullViewportScroller
            }]
        }]
    }];

    function _document(injector) {
        var config = injector.get(INITIAL_CONFIG, null);
        var document = config && config.document ? parseDocument(config.document, config.url) : common.ɵgetDOM().createHtmlDocument(); // Tell ivy about the global document

        core.ɵsetDocument(document);
        return document;
    }
    /**
     * @publicApi
     */


    var platformServer = core.createPlatformFactory(core.platformCore, "server", INTERNAL_SERVER_PLATFORM_PROVIDERS);
    /**
     * The server platform that supports the runtime compiler.
     *
     * @publicApi
     */

    var platformDynamicServer = core.createPlatformFactory(platformBrowserDynamic.ɵplatformCoreDynamic, "serverDynamic", INTERNAL_SERVER_PLATFORM_PROVIDERS);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function serializeTransferStateFactory(doc, appId, transferStore) {
        return function () {
            var script = doc.createElement("script");
            script.id = appId + "-state";
            script.setAttribute("type", "application/json");
            script.textContent = platformBrowser.ɵescapeHtml(transferStore.toJson());
            doc.body.appendChild(script);
        };
    }
    /**
     * NgModule to install on the server side while using the `TransferState` to transfer state from
     * server to client.
     *
     * @publicApi
     */


    var ServerTransferStateModule =
        /** @class */
        function () {
            function ServerTransferStateModule() {}

            return ServerTransferStateModule;
        }();

    ServerTransferStateModule.decorators = [{
        type: core.NgModule,
        args: [{
            providers: [platformBrowser.TransferState, {
                provide: BEFORE_APP_SERIALIZED,
                useFactory: serializeTransferStateFactory,
                deps: [common.DOCUMENT, core.APP_ID, platformBrowser.TransferState],
                multi: true
            }]
        }]
    }];

    function _getPlatform(platformFactory, options) {
        var extraProviders = options.extraProviders ? options.extraProviders : [];
        return platformFactory([{
            provide: INITIAL_CONFIG,
            useValue: {
                document: options.document,
                url: options.url
            }
        }, extraProviders]);
    }

    function _render(platform, moduleRefPromise) {
        return moduleRefPromise.then(function (moduleRef) {
            // var transitionId = moduleRef.injector.get(platformBrowser.ɵTRANSITION_ID, null);
            //
            // if (!transitionId) {
            //     throw new Error("renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure\nthe server-rendered app can be properly bootstrapped into a client app.");
            // }

            var applicationRef = moduleRef.injector.get(core.ApplicationRef);
            return applicationRef.isStable.pipe(operators.first(function (isStable) {
                return isStable;
            })).toPromise().then(function () {
                var e_1, _a;

                var platformState = platform.injector.get(PlatformState);
                var asyncPromises = []; // Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.

                var callbacks = moduleRef.injector.get(BEFORE_APP_SERIALIZED, null);

                if (callbacks) {
                    try {
                        for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                            var callback = callbacks_1_1.value;

                            try {
                                var callbackResult = callback();

                                if (core.ɵisPromise(callbackResult)) {
                                    // TODO: in TS3.7, callbackResult is void.
                                    asyncPromises.push(callbackResult);
                                }
                            } catch (e) {
                                // Ignore exceptions.
                                console.warn("Ignoring BEFORE_APP_SERIALIZED Exception: ", e);
                            }
                        }
                    } catch (e_1_1) {
                        e_1 = {
                            error: e_1_1
                        };
                    } finally {
                        try {
                            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
                        } finally {
                            if (e_1) throw e_1.error;
                        }
                    }
                }

                var complete = function () {
                    var output = platformState.renderToString();
                    platform.destroy();
                    return output;
                };

                if (asyncPromises.length === 0) {
                    return complete();
                }

                return Promise.all(asyncPromises.map(function (asyncPromise) {
                    return asyncPromise.catch(function (e) {
                        console.warn("Ignoring BEFORE_APP_SERIALIZED Exception: ", e);
                    });
                })).then(complete);
            });
        });
    }
    /**
     * Renders a Module to string.
     *
     * `document` is the full document HTML of the page to render, as a string.
     * `url` is the URL for the current render request.
     * `extraProviders` are the platform level providers for the current render request.
     *
     * If compiling with the ViewEngine renderer, do not use this in a production server environment.
     * Use pre-compiled {@link NgModuleFactory} with {@link renderModuleFactory} instead. If
     * compiling with the Ivy renderer, this method is the recommended rendering method for
     * platform-server.
     *
     * @publicApi
     */


    function renderModule(module, options) {
        var platform = _getPlatform(platformDynamicServer, options);

        return _render(platform, platform.bootstrapModule(module));
    }
    /**
     * Renders a {@link NgModuleFactory} to string.
     *
     * `document` is the full document HTML of the page to render, as a string.
     * `url` is the URL for the current render request.
     * `extraProviders` are the platform level providers for the current render request.
     *
     * @publicApi
     */


    function renderModuleFactory(moduleFactory, options) {
        var platform = _getPlatform(platformServer, options);

        return _render(platform, platform.bootstrapModuleFactory(moduleFactory));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @publicApi
     */


    var VERSION = new core.Version("12.0.3");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BEFORE_APP_SERIALIZED = BEFORE_APP_SERIALIZED;
    exports.INITIAL_CONFIG = INITIAL_CONFIG;
    exports.PlatformState = PlatformState;
    exports.ServerModule = ServerModule;
    exports.ServerTransferStateModule = ServerTransferStateModule;
    exports.VERSION = VERSION;
    exports.platformDynamicServer = platformDynamicServer;
    exports.platformServer = platformServer;
    exports.renderModule = renderModule;
    exports.renderModuleFactory = renderModuleFactory;
    exports.ɵINTERNAL_SERVER_PLATFORM_PROVIDERS = INTERNAL_SERVER_PLATFORM_PROVIDERS;
    exports.ɵSERVER_RENDER_PROVIDERS = SERVER_RENDER_PROVIDERS;
    exports.ɵServerRendererFactory2 = ServerRendererFactory2;
    exports.ɵangular_packages_platform_server_platform_server_a = instantiateServerRendererFactory;
    exports.ɵangular_packages_platform_server_platform_server_b = serializeTransferStateFactory;
    exports.ɵangular_packages_platform_server_platform_server_c = ServerStylesHost;
    exports.ɵangular_packages_platform_server_platform_server_d = ServerEventManagerPlugin;
    exports.ɵangular_packages_platform_server_platform_server_e = ServerXhr;
    exports.ɵangular_packages_platform_server_platform_server_f = zoneWrappedInterceptingHandler;
    exports.ɵangular_packages_platform_server_platform_server_g = SERVER_HTTP_PROVIDERS;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});
const BEFORE_APP_SERIALIZED = exports.BEFORE_APP_SERIALIZED,
    INITIAL_CONFIG = exports.INITIAL_CONFIG,
    PlatformState = exports.PlatformState,
    ServerModule = exports.ServerModule,
    ServerTransferStateModule = exports.ServerTransferStateModule,
    VERSION = exports.VERSION,
    platformDynamicServer = exports.platformDynamicServer,
    platformServer = exports.platformServer,
    renderModule = exports.renderModule,
    renderModuleFactory = exports.renderModuleFactory,
    ɵINTERNAL_SERVER_PLATFORM_PROVIDERS = exports.ɵINTERNAL_SERVER_PLATFORM_PROVIDERS,
    ɵSERVER_RENDER_PROVIDERS = exports.ɵSERVER_RENDER_PROVIDERS,
    ɵServerRendererFactory2 = exports.ɵServerRendererFactory2,
    ɵangular_packages_platform_server_platform_server_a = exports.ɵangular_packages_platform_server_platform_server_a,
    ɵangular_packages_platform_server_platform_server_b = exports.ɵangular_packages_platform_server_platform_server_b,
    ɵangular_packages_platform_server_platform_server_c = exports.ɵangular_packages_platform_server_platform_server_c,
    ɵangular_packages_platform_server_platform_server_d = exports.ɵangular_packages_platform_server_platform_server_d,
    ɵangular_packages_platform_server_platform_server_e = exports.ɵangular_packages_platform_server_platform_server_e,
    ɵangular_packages_platform_server_platform_server_f = exports.ɵangular_packages_platform_server_platform_server_f,
    ɵangular_packages_platform_server_platform_server_g = exports.ɵangular_packages_platform_server_platform_server_g,
    __esModule = exports.__esModule;

export default exports;
export { BEFORE_APP_SERIALIZED, INITIAL_CONFIG, PlatformState, ServerModule, ServerTransferStateModule, VERSION, __esModule, platformDynamicServer, platformServer, renderModule, renderModuleFactory, ɵINTERNAL_SERVER_PLATFORM_PROVIDERS, ɵSERVER_RENDER_PROVIDERS, ɵServerRendererFactory2, ɵangular_packages_platform_server_platform_server_a, ɵangular_packages_platform_server_platform_server_b, ɵangular_packages_platform_server_platform_server_c, ɵangular_packages_platform_server_platform_server_d, ɵangular_packages_platform_server_platform_server_e, ɵangular_packages_platform_server_platform_server_f, ɵangular_packages_platform_server_platform_server_g };

//# sourceMappingURL=platform-server@12.0.3!cjs.map
