var exports = {},
    _dewExec = false;
function dew() {
    if (_dewExec) return exports;
    _dewExec = true;
    exports = Event;
    Event.CAPTURING_PHASE = 1;
    Event.AT_TARGET = 2;
    Event.BUBBLING_PHASE = 3;

    function Event(type, dictionary) {
        // Initialize basic event properties
        this.type = "";
        this.target = null;
        this.currentTarget = null;
        this.eventPhase = Event.AT_TARGET;
        this.bubbles = false;
        this.cancelable = false;
        this.isTrusted = false;
        this.defaultPrevented = false;
        this.timeStamp = Date.now(); // Initialize internal flags
        // XXX: Would it be better to inherit these defaults from the prototype?

        this._propagationStopped = false;
        this._immediatePropagationStopped = false;
        this._initialized = true;
        this._dispatching = false; // Now initialize based on the constructor arguments (if any)

        if (type) this.type = type;

        if (dictionary) {
            for (var p in dictionary) {
                this[p] = dictionary[p];
            }
        }
    }

    Event.prototype = Object.create(Object.prototype, {
        constructor: {
            value: Event
        },
        stopPropagation: {
            value: function stopPropagation() {
                this._propagationStopped = true;
            }
        },
        stopImmediatePropagation: {
            value: function stopImmediatePropagation() {
                this._propagationStopped = true;
                this._immediatePropagationStopped = true;
            }
        },
        preventDefault: {
            value: function preventDefault() {
                if (this.cancelable) this.defaultPrevented = true;
            }
        },
        initEvent: {
            value: function initEvent(type, bubbles, cancelable) {
                this._initialized = true;
                if (this._dispatching) return;
                this._propagationStopped = false;
                this._immediatePropagationStopped = false;
                this.defaultPrevented = false;
                this.isTrusted = false;
                this.target = null;
                this.type = type;
                this.bubbles = bubbles;
                this.cancelable = cancelable;
            }
        }
    });
    return exports;
}

var exports$1 = {},
    _dewExec$1 = false;
function dew$1() {
    if (_dewExec$1) return exports$1;
    _dewExec$1 = true;

    var Event = dew();

    exports$1 = UIEvent;

    function UIEvent() {
        // Just use the superclass constructor to initialize
        Event.call(this);
        this.view = null; // FF uses the current window

        this.detail = 0;
    }

    UIEvent.prototype = Object.create(Event.prototype, {
        constructor: {
            value: UIEvent
        },
        initUIEvent: {
            value: function (type, bubbles, cancelable, view, detail) {
                this.initEvent(type, bubbles, cancelable);
                this.view = view;
                this.detail = detail;
            }
        }
    });
    return exports$1;
}

var exports$2 = {},
    _dewExec$2 = false;
function dew$2() {
    if (_dewExec$2) return exports$2;
    _dewExec$2 = true;

    var UIEvent = dew$1();

    exports$2 = MouseEvent;

    function MouseEvent() {
        // Just use the superclass constructor to initialize
        UIEvent.call(this);
        this.screenX = this.screenY = this.clientX = this.clientY = 0;
        this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = false;
        this.button = 0;
        this.buttons = 1;
        this.relatedTarget = null;
    }

    MouseEvent.prototype = Object.create(UIEvent.prototype, {
        constructor: {
            value: MouseEvent
        },
        initMouseEvent: {
            value: function (type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
                this.initEvent(type, bubbles, cancelable, view, detail);
                this.screenX = screenX;
                this.screenY = screenY;
                this.clientX = clientX;
                this.clientY = clientY;
                this.ctrlKey = ctrlKey;
                this.altKey = altKey;
                this.shiftKey = shiftKey;
                this.metaKey = metaKey;
                this.button = button;

                switch (button) {
                    case 0:
                        this.buttons = 1;
                        break;

                    case 1:
                        this.buttons = 4;
                        break;

                    case 2:
                        this.buttons = 2;
                        break;

                    default:
                        this.buttons = 0;
                        break;
                }

                this.relatedTarget = relatedTarget;
            }
        },
        getModifierState: {
            value: function (key) {
                switch (key) {
                    case "Alt":
                        return this.altKey;

                    case "Control":
                        return this.ctrlKey;

                    case "Shift":
                        return this.shiftKey;

                    case "Meta":
                        return this.metaKey;

                    default:
                        return false;
                }
            }
        }
    });
    return exports$2;
}

var exports$3 = {},
    _dewExec$3 = false;
function dew$3() {
    if (_dewExec$3) return exports$3;
    _dewExec$3 = true;
    exports$3 = DOMException;
    var INDEX_SIZE_ERR = 1;
    var HIERARCHY_REQUEST_ERR = 3;
    var WRONG_DOCUMENT_ERR = 4;
    var INVALID_CHARACTER_ERR = 5;
    var NO_MODIFICATION_ALLOWED_ERR = 7;
    var NOT_FOUND_ERR = 8;
    var NOT_SUPPORTED_ERR = 9;
    var INVALID_STATE_ERR = 11;
    var SYNTAX_ERR = 12;
    var INVALID_MODIFICATION_ERR = 13;
    var NAMESPACE_ERR = 14;
    var INVALID_ACCESS_ERR = 15;
    var TYPE_MISMATCH_ERR = 17;
    var SECURITY_ERR = 18;
    var NETWORK_ERR = 19;
    var ABORT_ERR = 20;
    var URL_MISMATCH_ERR = 21;
    var QUOTA_EXCEEDED_ERR = 22;
    var TIMEOUT_ERR = 23;
    var INVALID_NODE_TYPE_ERR = 24;
    var DATA_CLONE_ERR = 25; // Code to name

    var names = [null, // No error with code 0
        "INDEX_SIZE_ERR", null, // historical
        "HIERARCHY_REQUEST_ERR", "WRONG_DOCUMENT_ERR", "INVALID_CHARACTER_ERR", null, // historical
        "NO_MODIFICATION_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_SUPPORTED_ERR", "INUSE_ATTRIBUTE_ERR", // historical
        "INVALID_STATE_ERR", "SYNTAX_ERR", "INVALID_MODIFICATION_ERR", "NAMESPACE_ERR", "INVALID_ACCESS_ERR", null, // historical
        "TYPE_MISMATCH_ERR", "SECURITY_ERR", "NETWORK_ERR", "ABORT_ERR", "URL_MISMATCH_ERR", "QUOTA_EXCEEDED_ERR", "TIMEOUT_ERR", "INVALID_NODE_TYPE_ERR", "DATA_CLONE_ERR"]; // Code to message
    // These strings are from the 13 May 2011 Editor's Draft of DOM Core.
    // http://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html
    // Copyright В© 2011 W3CВ® (MIT, ERCIM, Keio), All Rights Reserved.
    // Used under the terms of the W3C Document License:
    // http://www.w3.org/Consortium/Legal/2002/copyright-documents-20021231

    var messages = [null, // No error with code 0
        "INDEX_SIZE_ERR (1): the index is not in the allowed range", null, "HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model", "WRONG_DOCUMENT_ERR (4): the object is in the wrong Document, a call to importNode is required", "INVALID_CHARACTER_ERR (5): the string contains invalid characters", null, "NO_MODIFICATION_ALLOWED_ERR (7): the object can not be modified", "NOT_FOUND_ERR (8): the object can not be found here", "NOT_SUPPORTED_ERR (9): this operation is not supported", "INUSE_ATTRIBUTE_ERR (10): setAttributeNode called on owned Attribute", "INVALID_STATE_ERR (11): the object is in an invalid state", "SYNTAX_ERR (12): the string did not match the expected pattern", "INVALID_MODIFICATION_ERR (13): the object can not be modified in this way", "NAMESPACE_ERR (14): the operation is not allowed by Namespaces in XML", "INVALID_ACCESS_ERR (15): the object does not support the operation or argument", null, "TYPE_MISMATCH_ERR (17): the type of the object does not match the expected type", "SECURITY_ERR (18): the operation is insecure", "NETWORK_ERR (19): a network error occurred", "ABORT_ERR (20): the user aborted an operation", "URL_MISMATCH_ERR (21): the given URL does not match another URL", "QUOTA_EXCEEDED_ERR (22): the quota has been exceeded", "TIMEOUT_ERR (23): a timeout occurred", "INVALID_NODE_TYPE_ERR (24): the supplied node is invalid or has an invalid ancestor for this operation", "DATA_CLONE_ERR (25): the object can not be cloned."]; // Name to code

    var constants = {
        INDEX_SIZE_ERR: INDEX_SIZE_ERR,
        DOMSTRING_SIZE_ERR: 2,
        // historical
        HIERARCHY_REQUEST_ERR: HIERARCHY_REQUEST_ERR,
        WRONG_DOCUMENT_ERR: WRONG_DOCUMENT_ERR,
        INVALID_CHARACTER_ERR: INVALID_CHARACTER_ERR,
        NO_DATA_ALLOWED_ERR: 6,
        // historical
        NO_MODIFICATION_ALLOWED_ERR: NO_MODIFICATION_ALLOWED_ERR,
        NOT_FOUND_ERR: NOT_FOUND_ERR,
        NOT_SUPPORTED_ERR: NOT_SUPPORTED_ERR,
        INUSE_ATTRIBUTE_ERR: 10,
        // historical
        INVALID_STATE_ERR: INVALID_STATE_ERR,
        SYNTAX_ERR: SYNTAX_ERR,
        INVALID_MODIFICATION_ERR: INVALID_MODIFICATION_ERR,
        NAMESPACE_ERR: NAMESPACE_ERR,
        INVALID_ACCESS_ERR: INVALID_ACCESS_ERR,
        VALIDATION_ERR: 16,
        // historical
        TYPE_MISMATCH_ERR: TYPE_MISMATCH_ERR,
        SECURITY_ERR: SECURITY_ERR,
        NETWORK_ERR: NETWORK_ERR,
        ABORT_ERR: ABORT_ERR,
        URL_MISMATCH_ERR: URL_MISMATCH_ERR,
        QUOTA_EXCEEDED_ERR: QUOTA_EXCEEDED_ERR,
        TIMEOUT_ERR: TIMEOUT_ERR,
        INVALID_NODE_TYPE_ERR: INVALID_NODE_TYPE_ERR,
        DATA_CLONE_ERR: DATA_CLONE_ERR
    };

    function DOMException(code) {
        Error.call(this);
        Error.captureStackTrace(this, this.constructor);
        this.code = code;
        this.message = messages[code];
        this.name = names[code];
    }

    DOMException.prototype.__proto__ = Error.prototype; // Initialize the constants on DOMException and DOMException.prototype

    for (var c in constants) {
        var v = {
            value: constants[c]
        };
        Object.defineProperty(DOMException, c, v);
        Object.defineProperty(DOMException.prototype, c, v);
    }

    return exports$3;
}

var exports$4 = {},
    _dewExec$4 = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

function dew$4() {
    if (_dewExec$4) return exports$4;
    _dewExec$4 = true;

    /*
     * This file defines Domino behaviour that can be externally configured.
     * To change these settings, set the relevant global property *before*
     * you call `require("domino")`.
     */
    exports$4.isApiWritable = !_global.__domino_frozen__;
    return exports$4;
}

var exports$5 = {},
    _dewExec$5 = false;
function dew$5() {
    if (_dewExec$5) return exports$5;
    _dewExec$5 = true;

    var DOMException = dew$3();

    var ERR = DOMException;

    var isApiWritable = dew$4().isApiWritable;

    exports$5.NAMESPACE = {
        HTML: "http://www.w3.org/1999/xhtml",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink"
    }; //
    // Shortcut functions for throwing errors of various types.
    //

    exports$5.IndexSizeError = function () {
        throw new DOMException(ERR.INDEX_SIZE_ERR);
    };

    exports$5.HierarchyRequestError = function () {
        throw new DOMException(ERR.HIERARCHY_REQUEST_ERR);
    };

    exports$5.WrongDocumentError = function () {
        throw new DOMException(ERR.WRONG_DOCUMENT_ERR);
    };

    exports$5.InvalidCharacterError = function () {
        throw new DOMException(ERR.INVALID_CHARACTER_ERR);
    };

    exports$5.NoModificationAllowedError = function () {
        throw new DOMException(ERR.NO_MODIFICATION_ALLOWED_ERR);
    };

    exports$5.NotFoundError = function () {
        throw new DOMException(ERR.NOT_FOUND_ERR);
    };

    exports$5.NotSupportedError = function () {
        throw new DOMException(ERR.NOT_SUPPORTED_ERR);
    };

    exports$5.InvalidStateError = function () {
        throw new DOMException(ERR.INVALID_STATE_ERR);
    };

    exports$5.SyntaxError = function () {
        throw new DOMException(ERR.SYNTAX_ERR);
    };

    exports$5.InvalidModificationError = function () {
        throw new DOMException(ERR.INVALID_MODIFICATION_ERR);
    };

    exports$5.NamespaceError = function () {
        throw new DOMException(ERR.NAMESPACE_ERR);
    };

    exports$5.InvalidAccessError = function () {
        throw new DOMException(ERR.INVALID_ACCESS_ERR);
    };

    exports$5.TypeMismatchError = function () {
        throw new DOMException(ERR.TYPE_MISMATCH_ERR);
    };

    exports$5.SecurityError = function () {
        throw new DOMException(ERR.SECURITY_ERR);
    };

    exports$5.NetworkError = function () {
        throw new DOMException(ERR.NETWORK_ERR);
    };

    exports$5.AbortError = function () {
        throw new DOMException(ERR.ABORT_ERR);
    };

    exports$5.UrlMismatchError = function () {
        throw new DOMException(ERR.URL_MISMATCH_ERR);
    };

    exports$5.QuotaExceededError = function () {
        throw new DOMException(ERR.QUOTA_EXCEEDED_ERR);
    };

    exports$5.TimeoutError = function () {
        throw new DOMException(ERR.TIMEOUT_ERR);
    };

    exports$5.InvalidNodeTypeError = function () {
        throw new DOMException(ERR.INVALID_NODE_TYPE_ERR);
    };

    exports$5.DataCloneError = function () {
        throw new DOMException(ERR.DATA_CLONE_ERR);
    };

    exports$5.nyi = function () {
        throw new Error("NotYetImplemented");
    };

    exports$5.shouldOverride = function () {
        throw new Error("Abstract function; should be overriding in subclass.");
    };

    exports$5.assert = function (expr, msg) {
        if (!expr) {
            throw new Error("Assertion failed: " + (msg || "") + "\n" + new Error().stack);
        }
    };

    exports$5.expose = function (src, c) {
        for (var n in src) {
            Object.defineProperty(c.prototype, n, {
                value: src[n],
                writable: isApiWritable
            });
        }
    };

    exports$5.merge = function (a, b) {
        for (var n in b) {
            a[n] = b[n];
        }
    }; // Compare two nodes based on their document order. This function is intended
    // to be passed to sort(). Assumes that the array being sorted does not
    // contain duplicates.  And that all nodes are connected and comparable.
    // Clever code by ppk via jeresig.


    exports$5.documentOrder = function (n, m) {
        /* jshint bitwise: false */
        return 3 - (n.compareDocumentPosition(m) & 6);
    };

    exports$5.toASCIILowerCase = function (s) {
        return s.replace(/[A-Z]+/g, function (c) {
            return c.toLowerCase();
        });
    };

    exports$5.toASCIIUpperCase = function (s) {
        return s.replace(/[a-z]+/g, function (c) {
            return c.toUpperCase();
        });
    };

    return exports$5;
}

var exports$6 = {},
    _dewExec$6 = false;
function dew$6() {
    if (_dewExec$6) return exports$6;
    _dewExec$6 = true;

    var Event = dew();

    var MouseEvent = dew$2();

    var utils = dew$5();

    exports$6 = EventTarget;

    function EventTarget() { }

    EventTarget.prototype = {
        // XXX
        // See WebIDL В§4.8 for details on object event handlers
        // and how they should behave.  We actually have to accept
        // any object to addEventListener... Can't type check it.
        // on registration.
        // XXX:
        // Capturing event listeners are sort of rare.  I think I can optimize
        // them so that dispatchEvent can skip the capturing phase (or much of
        // it).  Each time a capturing listener is added, increment a flag on
        // the target node and each of its ancestors.  Decrement when removed.
        // And update the counter when nodes are added and removed from the
        // tree as well.  Then, in dispatch event, the capturing phase can
        // abort if it sees any node with a zero count.
        addEventListener: function addEventListener(type, listener, capture) {
            if (!listener) return;
            if (capture === undefined) capture = false;
            if (!this._listeners) this._listeners = Object.create(null);
            if (!this._listeners[type]) this._listeners[type] = [];
            var list = this._listeners[type]; // If this listener has already been registered, just return

            for (var i = 0, n = list.length; i < n; i++) {
                var l = list[i];
                if (l.listener === listener && l.capture === capture) return;
            } // Add an object to the list of listeners


            var obj = {
                listener: listener,
                capture: capture
            };
            if (typeof listener === "function") obj.f = listener;
            list.push(obj);
        },
        removeEventListener: function removeEventListener(type, listener, capture) {
            if (capture === undefined) capture = false;

            if (this._listeners) {
                var list = this._listeners[type];

                if (list) {
                    // Find the listener in the list and remove it
                    for (var i = 0, n = list.length; i < n; i++) {
                        var l = list[i];

                        if (l.listener === listener && l.capture === capture) {
                            if (list.length === 1) {
                                this._listeners[type] = undefined;
                            } else {
                                list.splice(i, 1);
                            }

                            return;
                        }
                    }
                }
            }
        },
        // This is the public API for dispatching untrusted public events.
        // See _dispatchEvent for the implementation
        dispatchEvent: function dispatchEvent(event) {
            // Dispatch an untrusted event
            return this._dispatchEvent(event, false);
        },
        //
        // See DOMCore В§4.4
        // XXX: I'll probably need another version of this method for
        // internal use, one that does not set isTrusted to false.
        // XXX: see Document._dispatchEvent: perhaps that and this could
        // call a common internal function with different settings of
        // a trusted boolean argument
        //
        // XXX:
        // The spec has changed in how to deal with handlers registered
        // on idl or content attributes rather than with addEventListener.
        // Used to say that they always ran first.  That's how webkit does it
        // Spec now says that they run in a position determined by
        // when they were first set.  FF does it that way.  See:
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/webappapis.html#event-handlers
        //
        _dispatchEvent: function _dispatchEvent(event, trusted) {
            if (typeof trusted !== "boolean") trusted = false;

            function invoke(target, event) {
                var type = event.type,
                    phase = event.eventPhase;
                event.currentTarget = target; // If there was an individual handler defined, invoke it first
                // XXX: see comment above: this shouldn't always be first.

                if (phase !== Event.CAPTURING_PHASE && target._handlers && target._handlers[type]) {
                    var handler = target._handlers[type];
                    var rv;

                    if (typeof handler === "function") {
                        rv = handler.call(event.currentTarget, event);
                    } else {
                        var f = handler.handleEvent;
                        if (typeof f !== "function") throw new TypeError("handleEvent property of " + "event handler object is" + "not a function.");
                        rv = f.call(handler, event);
                    }

                    switch (event.type) {
                        case "mouseover":
                            if (rv === true) // Historical baggage
                                event.preventDefault();
                            break;

                        case "beforeunload": // XXX: eventually we need a special case here

                        /* falls through */

                        default:
                            if (rv === false) event.preventDefault();
                            break;
                    }
                } // Now invoke list list of listeners for this target and type


                var list = target._listeners && target._listeners[type];
                if (!list) return;
                list = list.slice();

                for (var i = 0, n = list.length; i < n; i++) {
                    if (event._immediatePropagationStopped) return;
                    var l = list[i];
                    if (phase === Event.CAPTURING_PHASE && !l.capture || phase === Event.BUBBLING_PHASE && l.capture) continue;

                    if (l.f) {
                        l.f.call(event.currentTarget, event);
                    } else {
                        var fn = l.listener.handleEvent;
                        if (typeof fn !== "function") throw new TypeError("handleEvent property of event listener object is not a function.");
                        fn.call(l.listener, event);
                    }
                }
            }

            if (!event._initialized || event._dispatching) utils.InvalidStateError();
            event.isTrusted = trusted; // Begin dispatching the event now

            event._dispatching = true;
            event.target = this; // Build the list of targets for the capturing and bubbling phases
            // XXX: we'll eventually have to add Window to this list.

            var ancestors = [];

            for (var n = this.parentNode; n; n = n.parentNode) ancestors.push(n); // Capturing phase


            event.eventPhase = Event.CAPTURING_PHASE;

            for (var i = ancestors.length - 1; i >= 0; i--) {
                invoke(ancestors[i], event);
                if (event._propagationStopped) break;
            } // At target phase


            if (!event._propagationStopped) {
                event.eventPhase = Event.AT_TARGET;
                invoke(this, event);
            } // Bubbling phase


            if (event.bubbles && !event._propagationStopped) {
                event.eventPhase = Event.BUBBLING_PHASE;

                for (var ii = 0, nn = ancestors.length; ii < nn; ii++) {
                    invoke(ancestors[ii], event);
                    if (event._propagationStopped) break;
                }
            }

            event._dispatching = false;
            event.eventPhase = Event.AT_TARGET;
            event.currentTarget = null; // Deal with mouse events and figure out when
            // a click has happened

            if (trusted && !event.defaultPrevented && event instanceof MouseEvent) {
                switch (event.type) {
                    case "mousedown":
                        this._armed = {
                            x: event.clientX,
                            y: event.clientY,
                            t: event.timeStamp
                        };
                        break;

                    case "mouseout":
                    case "mouseover":
                        this._armed = null;
                        break;

                    case "mouseup":
                        if (this._isClick(event)) this._doClick(event);
                        this._armed = null;
                        break;
                }
            }

            return !event.defaultPrevented;
        },
        // Determine whether a click occurred
        // XXX We don't support double clicks for now
        _isClick: function (event) {
            return this._armed !== null && event.type === "mouseup" && event.isTrusted && event.button === 0 && event.timeStamp - this._armed.t < 1000 && Math.abs(event.clientX - this._armed.x) < 10 && Math.abs(event.clientY - this._armed.Y) < 10;
        },
        // Clicks are handled like this:
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#interactive-content-0
        //
        // Note that this method is similar to the HTMLElement.click() method
        // The event argument must be the trusted mouseup event
        _doClick: function (event) {
            if (this._click_in_progress) return;
            this._click_in_progress = true; // Find the nearest enclosing element that is activatable
            // An element is activatable if it has a
            // _post_click_activation_steps hook

            var activated = this;

            while (activated && !activated._post_click_activation_steps) activated = activated.parentNode;

            if (activated && activated._pre_click_activation_steps) {
                activated._pre_click_activation_steps();
            }

            var click = this.ownerDocument.createEvent("MouseEvent");
            click.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, event.button, null);

            var result = this._dispatchEvent(click, true);

            if (activated) {
                if (result) {
                    // This is where hyperlinks get followed, for example.
                    if (activated._post_click_activation_steps) activated._post_click_activation_steps(click);
                } else {
                    if (activated._cancelled_activation_steps) activated._cancelled_activation_steps();
                }
            }
        },
        //
        // An event handler is like an event listener, but it registered
        // by setting an IDL or content attribute like onload or onclick.
        // There can only be one of these at a time for any event type.
        // This is an internal method for the attribute accessors and
        // content attribute handlers that need to register events handlers.
        // The type argument is the same as in addEventListener().
        // The handler argument is the same as listeners in addEventListener:
        // it can be a function or an object. Pass null to remove any existing
        // handler.  Handlers are always invoked before any listeners of
        // the same type.  They are not invoked during the capturing phase
        // of event dispatch.
        //
        _setEventHandler: function _setEventHandler(type, handler) {
            if (!this._handlers) this._handlers = Object.create(null);
            this._handlers[type] = handler;
        },
        _getEventHandler: function _getEventHandler(type) {
            return this._handlers && this._handlers[type] || null;
        }
    };
    return exports$6;
}

var exports$7 = {},
    _dewExec$7 = false;
function dew$7() {
    if (_dewExec$7) return exports$7;
    _dewExec$7 = true;

    var utils = dew$5();

    var LinkedList = exports$7 = {
        // basic validity tests on a circular linked list a
        valid: function (a) {
            utils.assert(a, "list falsy");
            utils.assert(a._previousSibling, "previous falsy");
            utils.assert(a._nextSibling, "next falsy"); // xxx check that list is actually circular

            return true;
        },
        // insert a before b
        insertBefore: function (a, b) {
            utils.assert(LinkedList.valid(a) && LinkedList.valid(b));
            var a_first = a,
                a_last = a._previousSibling;
            var b_first = b,
                b_last = b._previousSibling;
            a_first._previousSibling = b_last;
            a_last._nextSibling = b_first;
            b_last._nextSibling = a_first;
            b_first._previousSibling = a_last;
            utils.assert(LinkedList.valid(a) && LinkedList.valid(b));
        },
        // replace a single node a with a list b (which could be null)
        replace: function (a, b) {
            utils.assert(LinkedList.valid(a) && (b === null || LinkedList.valid(b)));

            if (b !== null) {
                LinkedList.insertBefore(b, a);
            }

            LinkedList.remove(a);
            utils.assert(LinkedList.valid(a) && (b === null || LinkedList.valid(b)));
        },
        // remove single node a from its list
        remove: function (a) {
            utils.assert(LinkedList.valid(a));
            var prev = a._previousSibling;

            if (prev === a) {
                return;
            }

            var next = a._nextSibling;
            prev._nextSibling = next;
            next._previousSibling = prev;
            a._previousSibling = a._nextSibling = a;
            utils.assert(LinkedList.valid(a));
        }
    };
    return exports$7;
}

var exports$8 = {},
    _dewExec$8 = false;
function dew$8() {
    if (_dewExec$8) return exports$8;
    _dewExec$8 = true;
    exports$8 = {
        // NOTE: The `serializeOne()` function used to live on the `Node.prototype`
        // as a private method `Node#_serializeOne(child)`, however that requires
        // a megamorphic property access `this._serializeOne` just to get to the
        // method, and this is being done on lots of different `Node` subclasses,
        // which puts a lot of pressure on V8's megamorphic stub cache. So by
        // moving the helper off of the `Node.prototype` and into a separate
        // function in this helper module, we get a monomorphic property access
        // `NodeUtils.serializeOne` to get to the function and reduce pressure
        // on the megamorphic stub cache.
        // See https://github.com/fgnass/domino/pull/142 for more information.
        serializeOne: serializeOne
    };

    var utils = dew$5();

    var NAMESPACE = utils.NAMESPACE;
    var hasRawContent = {
        STYLE: true,
        SCRIPT: true,
        XMP: true,
        IFRAME: true,
        NOEMBED: true,
        NOFRAMES: true,
        PLAINTEXT: true
    };
    var emptyElements = {
        area: true,
        base: true,
        basefont: true,
        bgsound: true,
        br: true,
        col: true,
        embed: true,
        frame: true,
        hr: true,
        img: true,
        input: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };
    var extraNewLine = {
        /* Removed in https://github.com/whatwg/html/issues/944
        pre: true,
        textarea: true,
        listing: true
        */
    };

    function escape(s) {
        return s.replace(/[&<>\u00A0]/g, function (c) {
            switch (c) {
                case "&":
                    return "&amp;";

                case "<":
                    return "&lt;";

                case ">":
                    return "&gt;";

                case "\xA0":
                    return "&nbsp;";
            }
        });
    }

    function escapeAttr(s) {
        var toEscape = /[&"\u00A0]/g;

        if (!toEscape.test(s)) {
            // nothing to do, fast path
            return s;
        } else {
            return s.replace(toEscape, function (c) {
                switch (c) {
                    case "&":
                        return "&amp;";

                    case "\"":
                        return "&quot;";

                    case "\xA0":
                        return "&nbsp;";
                }
            });
        }
    }

    function attrname(a) {
        var ns = a.namespaceURI;
        if (!ns) return a.localName;
        if (ns === NAMESPACE.XML) return "xml:" + a.localName;
        if (ns === NAMESPACE.XLINK) return "xlink:" + a.localName;

        if (ns === NAMESPACE.XMLNS) {
            if (a.localName === "xmlns") return "xmlns"; else return "xmlns:" + a.localName;
        }

        return a.name;
    }

    function serializeOne(kid, parent) {
        var s = "";

        switch (kid.nodeType) {
            case 1:
                //ELEMENT_NODE
                var ns = kid.namespaceURI;
                var html = ns === NAMESPACE.HTML;
                var tagname = html || ns === NAMESPACE.SVG || ns === NAMESPACE.MATHML ? kid.localName : kid.tagName;
                s += "<" + tagname;

                for (var j = 0, k = kid._numattrs; j < k; j++) {
                    var a = kid._attr(j);

                    s += " " + attrname(a);
                    if (a.value !== undefined) s += "=\"" + escapeAttr(a.value) + "\"";
                }

                s += ">";

                if (!(html && emptyElements[tagname])) {
                    var ss = kid.serialize();
                    if (html && extraNewLine[tagname] && ss.charAt(0) === "\n") s += "\n"; // Serialize children and add end tag for all others

                    s += ss;
                    s += "</" + tagname + ">";
                }

                break;

            case 3: //TEXT_NODE

            case 4:
                //CDATA_SECTION_NODE
                var parenttag;
                if (parent.nodeType === 1
                    /*ELEMENT_NODE*/
                    && parent.namespaceURI === NAMESPACE.HTML) parenttag = parent.tagName; else parenttag = "";

                if (hasRawContent[parenttag] || parenttag === "NOSCRIPT" && parent.ownerDocument._scripting_enabled) {
                    s += kid.data;
                } else {
                    s += escape(kid.data);
                }

                break;

            case 8:
                //COMMENT_NODE
                s += "<!--" + kid.data + "-->";
                break;

            case 7:
                //PROCESSING_INSTRUCTION_NODE
                s += "<?" + kid.target + " " + kid.data + "?>";
                break;

            case 10:
                //DOCUMENT_TYPE_NODE
                s += "<!DOCTYPE " + kid.name;

                if (false) {
                    // Latest HTML serialization spec omits the public/system ID
                    if (kid.publicID) {
                        s += " PUBLIC \"" + kid.publicId + "\"";
                    }

                    if (kid.systemId) {
                        s += " \"" + kid.systemId + "\"";
                    }
                }

                s += ">";
                break;

            default:
                utils.InvalidStateError();
        }

        return s;
    }

    return exports$8;
}

var exports$9 = {},
    _dewExec$9 = false;
function dew$9() {
    if (_dewExec$9) return exports$9;
    _dewExec$9 = true;
    exports$9 = Node;

    var EventTarget = dew$6();

    var LinkedList = dew$7();

    var NodeUtils = dew$8();

    var utils = dew$5(); // All nodes have a nodeType and an ownerDocument.
    // Once inserted, they also have a parentNode.
    // This is an abstract class; all nodes in a document are instances
    // of a subtype, so all the properties are defined by more specific
    // constructors.


    function Node() {
        EventTarget.call(this);
        this.parentNode = null;
        this._nextSibling = this._previousSibling = this;
        this._index = undefined;
    }

    var ELEMENT_NODE = Node.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = Node.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = Node.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = Node.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = Node.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = Node.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = Node.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = Node.COMMENT_NODE = 8;
    var DOCUMENT_NODE = Node.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = Node.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = Node.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = Node.NOTATION_NODE = 12;
    var DOCUMENT_POSITION_DISCONNECTED = Node.DOCUMENT_POSITION_DISCONNECTED = 1;
    var DOCUMENT_POSITION_PRECEDING = Node.DOCUMENT_POSITION_PRECEDING = 2;
    var DOCUMENT_POSITION_FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING = 4;
    var DOCUMENT_POSITION_CONTAINS = Node.DOCUMENT_POSITION_CONTAINS = 8;
    var DOCUMENT_POSITION_CONTAINED_BY = Node.DOCUMENT_POSITION_CONTAINED_BY = 16;
    var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
    Node.prototype = Object.create(EventTarget.prototype, {
        // Node that are not inserted into the tree inherit a null parent
        // XXX: the baseURI attribute is defined by dom core, but
        // a correct implementation of it requires HTML features, so
        // we'll come back to this later.
        baseURI: {
            get: utils.nyi
        },
        parentElement: {
            get: function () {
                return this.parentNode && this.parentNode.nodeType === ELEMENT_NODE ? this.parentNode : null;
            }
        },
        hasChildNodes: {
            value: utils.shouldOverride
        },
        firstChild: {
            get: utils.shouldOverride
        },
        lastChild: {
            get: utils.shouldOverride
        },
        previousSibling: {
            get: function () {
                var parent = this.parentNode;
                if (!parent) return null;
                if (this === parent.firstChild) return null;
                return this._previousSibling;
            }
        },
        nextSibling: {
            get: function () {
                var parent = this.parentNode,
                    next = this._nextSibling;
                if (!parent) return null;
                if (next === parent.firstChild) return null;
                return next;
            }
        },
        textContent: {
            // Should override for DocumentFragment/Element/Attr/Text/PI/Comment
            get: function () {
                return null;
            },
            set: function (v) {
                /* do nothing */
            }
        },
        _countChildrenOfType: {
            value: function (type) {
                var sum = 0;

                for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
                    if (kid.nodeType === type) sum++;
                }

                return sum;
            }
        },
        _ensureInsertValid: {
            value: function _ensureInsertValid(node, child, isPreinsert) {
                var parent = this,
                    i,
                    kid;
                if (!node.nodeType) throw new TypeError("not a node"); // 1. If parent is not a Document, DocumentFragment, or Element
                // node, throw a HierarchyRequestError.

                switch (parent.nodeType) {
                    case DOCUMENT_NODE:
                    case DOCUMENT_FRAGMENT_NODE:
                    case ELEMENT_NODE:
                        break;

                    default:
                        utils.HierarchyRequestError();
                } // 2. If node is a host-including inclusive ancestor of parent,
                // throw a HierarchyRequestError.


                if (node.isAncestor(parent)) utils.HierarchyRequestError(); // 3. If child is not null and its parent is not parent, then
                // throw a NotFoundError. (replaceChild omits the 'child is not null'
                // and throws a TypeError here if child is null.)

                if (child !== null || !isPreinsert) {
                    if (child.parentNode !== parent) utils.NotFoundError();
                } // 4. If node is not a DocumentFragment, DocumentType, Element,
                // Text, ProcessingInstruction, or Comment node, throw a
                // HierarchyRequestError.


                switch (node.nodeType) {
                    case DOCUMENT_FRAGMENT_NODE:
                    case DOCUMENT_TYPE_NODE:
                    case ELEMENT_NODE:
                    case TEXT_NODE:
                    case PROCESSING_INSTRUCTION_NODE:
                    case COMMENT_NODE:
                        break;

                    default:
                        utils.HierarchyRequestError();
                } // 5. If either node is a Text node and parent is a document, or
                // node is a doctype and parent is not a document, throw a
                // HierarchyRequestError.
                // 6. If parent is a document, and any of the statements below, switched
                // on node, are true, throw a HierarchyRequestError.


                if (parent.nodeType === DOCUMENT_NODE) {
                    switch (node.nodeType) {
                        case TEXT_NODE:
                            utils.HierarchyRequestError();
                            break;

                        case DOCUMENT_FRAGMENT_NODE:
                            // 6a1. If node has more than one element child or has a Text
                            // node child.
                            if (node._countChildrenOfType(TEXT_NODE) > 0) utils.HierarchyRequestError();

                            switch (node._countChildrenOfType(ELEMENT_NODE)) {
                                case 0:
                                    break;

                                case 1:
                                    // 6a2. Otherwise, if node has one element child and either
                                    // parent has an element child, child is a doctype, or child
                                    // is not null and a doctype is following child. [preinsert]
                                    // 6a2. Otherwise, if node has one element child and either
                                    // parent has an element child that is not child or a
                                    // doctype is following child. [replaceWith]
                                    if (child !== null
                                        /* always true here for replaceWith */
                                    ) {
                                        if (isPreinsert && child.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();

                                        for (kid = child.nextSibling; kid !== null; kid = kid.nextSibling) {
                                            if (kid.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                                        }
                                    }

                                    i = parent._countChildrenOfType(ELEMENT_NODE);

                                    if (isPreinsert) {
                                        // "parent has an element child"
                                        if (i > 0) utils.HierarchyRequestError();
                                    } else {
                                        // "parent has an element child that is not child"
                                        if (i > 1 || i === 1 && child.nodeType !== ELEMENT_NODE) utils.HierarchyRequestError();
                                    }

                                    break;

                                default:
                                    // 6a1, continued. (more than one Element child)
                                    utils.HierarchyRequestError();
                            }

                            break;

                        case ELEMENT_NODE:
                            // 6b. parent has an element child, child is a doctype, or
                            // child is not null and a doctype is following child. [preinsert]
                            // 6b. parent has an element child that is not child or a
                            // doctype is following child. [replaceWith]
                            if (child !== null
                                /* always true here for replaceWith */
                            ) {
                                if (isPreinsert && child.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();

                                for (kid = child.nextSibling; kid !== null; kid = kid.nextSibling) {
                                    if (kid.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                                }
                            }

                            i = parent._countChildrenOfType(ELEMENT_NODE);

                            if (isPreinsert) {
                                // "parent has an element child"
                                if (i > 0) utils.HierarchyRequestError();
                            } else {
                                // "parent has an element child that is not child"
                                if (i > 1 || i === 1 && child.nodeType !== ELEMENT_NODE) utils.HierarchyRequestError();
                            }

                            break;

                        case DOCUMENT_TYPE_NODE:
                            // 6c. parent has a doctype child, child is non-null and an
                            // element is preceding child, or child is null and parent has
                            // an element child. [preinsert]
                            // 6c. parent has a doctype child that is not child, or an
                            // element is preceding child. [replaceWith]
                            if (child === null) {
                                if (parent._countChildrenOfType(ELEMENT_NODE)) utils.HierarchyRequestError();
                            } else {
                                // child is always non-null for [replaceWith] case
                                for (kid = parent.firstChild; kid !== null; kid = kid.nextSibling) {
                                    if (kid === child) break;
                                    if (kid.nodeType === ELEMENT_NODE) utils.HierarchyRequestError();
                                }
                            }

                            i = parent._countChildrenOfType(DOCUMENT_TYPE_NODE);

                            if (isPreinsert) {
                                // "parent has an doctype child"
                                if (i > 0) utils.HierarchyRequestError();
                            } else {
                                // "parent has an doctype child that is not child"
                                if (i > 1 || i === 1 && child.nodeType !== DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                            }

                            break;
                    }
                } else {
                    // 5, continued: (parent is not a document)
                    if (node.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                }
            }
        },
        insertBefore: {
            value: function insertBefore(node, child) {
                var parent = this; // 1. Ensure pre-insertion validity

                parent._ensureInsertValid(node, child, true); // 2. Let reference child be child.


                var refChild = child; // 3. If reference child is node, set it to node's next sibling

                if (refChild === node) {
                    refChild = node.nextSibling;
                } // 4. Adopt node into parent's node document.


                parent.doc.adoptNode(node); // 5. Insert node into parent before reference child.

                node._insertOrReplace(parent, refChild, false); // 6. Return node


                return node;
            }
        },
        appendChild: {
            value: function (child) {
                // This invokes _appendChild after doing validity checks.
                return this.insertBefore(child, null);
            }
        },
        _appendChild: {
            value: function (child) {
                child._insertOrReplace(this, null, false);
            }
        },
        removeChild: {
            value: function removeChild(child) {
                var parent = this;
                if (!child.nodeType) throw new TypeError("not a node");
                if (child.parentNode !== parent) utils.NotFoundError();
                child.remove();
                return child;
            }
        },
        // To replace a `child` with `node` within a `parent` (this)
        replaceChild: {
            value: function replaceChild(node, child) {
                var parent = this; // Ensure validity (slight differences from pre-insertion check)

                parent._ensureInsertValid(node, child, false); // Adopt node into parent's node document.


                if (node.doc !== parent.doc) {
                    // XXX adoptNode has side-effect of removing node from its parent
                    // and generating a mutation event, thus causing the _insertOrReplace
                    // to generate two deletes and an insert instead of a 'move'
                    // event.  It looks like the new MutationObserver stuff avoids
                    // this problem, but for now let's only adopt (ie, remove `node`
                    // from its parent) here if we need to.
                    parent.doc.adoptNode(node);
                } // Do the replace.


                node._insertOrReplace(parent, child, true);

                return child;
            }
        },
        // See: http://ejohn.org/blog/comparing-document-position/
        contains: {
            value: function contains(node) {
                if (node === null) {
                    return false;
                }

                if (this === node) {
                    return true;
                    /* inclusive descendant */
                }
                /* jshint bitwise: false */


                return (this.compareDocumentPosition(node) & DOCUMENT_POSITION_CONTAINED_BY) !== 0;
            }
        },
        compareDocumentPosition: {
            value: function compareDocumentPosition(that) {
                // Basic algorithm for finding the relative position of two nodes.
                // Make a list the ancestors of each node, starting with the
                // document element and proceeding down to the nodes themselves.
                // Then, loop through the lists, looking for the first element
                // that differs.  The order of those two elements give the
                // order of their descendant nodes.  Or, if one list is a prefix
                // of the other one, then that node contains the other.
                if (this === that) return 0; // If they're not owned by the same document or if one is rooted
                // and one is not, then they're disconnected.

                if (this.doc !== that.doc || this.rooted !== that.rooted) return DOCUMENT_POSITION_DISCONNECTED + DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC; // Get arrays of ancestors for this and that

                var these = [],
                    those = [];

                for (var n = this; n !== null; n = n.parentNode) these.push(n);

                for (n = that; n !== null; n = n.parentNode) those.push(n);

                these.reverse(); // So we start with the outermost

                those.reverse();
                if (these[0] !== those[0]) // No common ancestor
                    return DOCUMENT_POSITION_DISCONNECTED + DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
                n = Math.min(these.length, those.length);

                for (var i = 1; i < n; i++) {
                    if (these[i] !== those[i]) {
                        // We found two different ancestors, so compare
                        // their positions
                        if (these[i].index < those[i].index) return DOCUMENT_POSITION_FOLLOWING; else return DOCUMENT_POSITION_PRECEDING;
                    }
                } // If we get to here, then one of the nodes (the one with the
                // shorter list of ancestors) contains the other one.


                if (these.length < those.length) return DOCUMENT_POSITION_FOLLOWING + DOCUMENT_POSITION_CONTAINED_BY; else return DOCUMENT_POSITION_PRECEDING + DOCUMENT_POSITION_CONTAINS;
            }
        },
        isSameNode: {
            value: function isSameNode(node) {
                return this === node;
            }
        },
        // This method implements the generic parts of node equality testing
        // and defers to the (non-recursive) type-specific isEqual() method
        // defined by subclasses
        isEqualNode: {
            value: function isEqualNode(node) {
                if (!node) return false;
                if (node.nodeType !== this.nodeType) return false; // Check type-specific properties for equality

                if (!this.isEqual(node)) return false; // Now check children for number and equality

                for (var c1 = this.firstChild, c2 = node.firstChild; c1 && c2; c1 = c1.nextSibling, c2 = c2.nextSibling) {
                    if (!c1.isEqualNode(c2)) return false;
                }

                return c1 === null && c2 === null;
            }
        },
        // This method delegates shallow cloning to a clone() method
        // that each concrete subclass must implement
        cloneNode: {
            value: function (deep) {
                // Clone this node
                var clone = this.clone(); // Handle the recursive case if necessary

                if (deep) {
                    for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
                        clone._appendChild(kid.cloneNode(true));
                    }
                }

                return clone;
            }
        },
        lookupPrefix: {
            value: function lookupPrefix(ns) {
                var e;
                if (ns === "" || ns === null || ns === undefined) return null;

                switch (this.nodeType) {
                    case ELEMENT_NODE:
                        return this._lookupNamespacePrefix(ns, this);

                    case DOCUMENT_NODE:
                        e = this.documentElement;
                        return e ? e.lookupPrefix(ns) : null;

                    case ENTITY_NODE:
                    case NOTATION_NODE:
                    case DOCUMENT_FRAGMENT_NODE:
                    case DOCUMENT_TYPE_NODE:
                        return null;

                    case ATTRIBUTE_NODE:
                        e = this.ownerElement;
                        return e ? e.lookupPrefix(ns) : null;

                    default:
                        e = this.parentElement;
                        return e ? e.lookupPrefix(ns) : null;
                }
            }
        },
        lookupNamespaceURI: {
            value: function lookupNamespaceURI(prefix) {
                if (prefix === "" || prefix === undefined) {
                    prefix = null;
                }

                var e;

                switch (this.nodeType) {
                    case ELEMENT_NODE:
                        return utils.shouldOverride();

                    case DOCUMENT_NODE:
                        e = this.documentElement;
                        return e ? e.lookupNamespaceURI(prefix) : null;

                    case ENTITY_NODE:
                    case NOTATION_NODE:
                    case DOCUMENT_TYPE_NODE:
                    case DOCUMENT_FRAGMENT_NODE:
                        return null;

                    case ATTRIBUTE_NODE:
                        e = this.ownerElement;
                        return e ? e.lookupNamespaceURI(prefix) : null;

                    default:
                        e = this.parentElement;
                        return e ? e.lookupNamespaceURI(prefix) : null;
                }
            }
        },
        isDefaultNamespace: {
            value: function isDefaultNamespace(ns) {
                if (ns === "" || ns === undefined) {
                    ns = null;
                }

                var defaultNamespace = this.lookupNamespaceURI(null);
                return defaultNamespace === ns;
            }
        },
        // Utility methods for nodes.  Not part of the DOM
        // Return the index of this node in its parent.
        // Throw if no parent, or if this node is not a child of its parent
        index: {
            get: function () {
                var parent = this.parentNode;
                if (this === parent.firstChild) return 0; // fast case

                var kids = parent.childNodes;

                if (this._index === undefined || kids[this._index] !== this) {
                    // Ensure that we don't have an O(N^2) blowup if none of the
                    // kids have defined indices yet and we're traversing via
                    // nextSibling or previousSibling
                    for (var i = 0; i < kids.length; i++) {
                        kids[i]._index = i;
                    }

                    utils.assert(kids[this._index] === this);
                }

                return this._index;
            }
        },
        // Return true if this node is equal to or is an ancestor of that node
        // Note that nodes are considered to be ancestors of themselves
        isAncestor: {
            value: function (that) {
                // If they belong to different documents, then they're unrelated.
                if (this.doc !== that.doc) return false; // If one is rooted and one isn't then they're not related

                if (this.rooted !== that.rooted) return false; // Otherwise check by traversing the parentNode chain

                for (var e = that; e; e = e.parentNode) {
                    if (e === this) return true;
                }

                return false;
            }
        },
        // DOMINO Changed the behavior to conform with the specs. See:
        // https://groups.google.com/d/topic/mozilla.dev.platform/77sIYcpdDmc/discussion
        ensureSameDoc: {
            value: function (that) {
                if (that.ownerDocument === null) {
                    that.ownerDocument = this.doc;
                } else if (that.ownerDocument !== this.doc) {
                    utils.WrongDocumentError();
                }
            }
        },
        removeChildren: {
            value: utils.shouldOverride
        },
        // Insert this node as a child of parent before the specified child,
        // or insert as the last child of parent if specified child is null,
        // or replace the specified child with this node, firing mutation events as
        // necessary
        _insertOrReplace: {
            value: function _insertOrReplace(parent, before, isReplace) {
                var child = this,
                    before_index,
                    i;

                if (child.nodeType === DOCUMENT_FRAGMENT_NODE && child.rooted) {
                    utils.HierarchyRequestError();
                }
                /* Ensure index of `before` is cached before we (possibly) remove it. */


                if (parent._childNodes) {
                    before_index = before === null ? parent._childNodes.length : before.index;
                    /* ensure _index is cached */
                    // If we are already a child of the specified parent, then
                    // the index may have to be adjusted.

                    if (child.parentNode === parent) {
                        var child_index = child.index; // If the child is before the spot it is to be inserted at,
                        // then when it is removed, the index of that spot will be
                        // reduced.

                        if (child_index < before_index) {
                            before_index--;
                        }
                    }
                } // Delete the old child


                if (isReplace) {
                    if (before.rooted) before.doc.mutateRemove(before);
                    before.parentNode = null;
                }

                var n = before;

                if (n === null) {
                    n = parent.firstChild;
                } // If both the child and the parent are rooted, then we want to
                // transplant the child without uprooting and rerooting it.


                var bothRooted = child.rooted && parent.rooted;

                if (child.nodeType === DOCUMENT_FRAGMENT_NODE) {
                    var spliceArgs = [0, isReplace ? 1 : 0],
                        next;

                    for (var kid = child.firstChild; kid !== null; kid = next) {
                        next = kid.nextSibling;
                        spliceArgs.push(kid);
                        kid.parentNode = parent;
                    }

                    var len = spliceArgs.length; // Add all nodes to the new parent, overwriting the old child

                    if (isReplace) {
                        LinkedList.replace(n, len > 2 ? spliceArgs[2] : null);
                    } else if (len > 2 && n !== null) {
                        LinkedList.insertBefore(spliceArgs[2], n);
                    }

                    if (parent._childNodes) {
                        spliceArgs[0] = before === null ? parent._childNodes.length : before._index;

                        parent._childNodes.splice.apply(parent._childNodes, spliceArgs);

                        for (i = 2; i < len; i++) {
                            spliceArgs[i]._index = spliceArgs[0] + (i - 2);
                        }
                    } else if (parent._firstChild === before) {
                        if (len > 2) {
                            parent._firstChild = spliceArgs[2];
                        } else if (isReplace) {
                            parent._firstChild = null;
                        }
                    } // Remove all nodes from the document fragment


                    if (child._childNodes) {
                        child._childNodes.length = 0;
                    } else {
                        child._firstChild = null;
                    } // Call the mutation handlers
                    // Use spliceArgs since the original array has been destroyed. The
                    // liveness guarantee requires us to clone the array so that
                    // references to the childNodes of the DocumentFragment will be empty
                    // when the insertion handlers are called.


                    if (parent.rooted) {
                        parent.modify();

                        for (i = 2; i < len; i++) {
                            parent.doc.mutateInsert(spliceArgs[i]);
                        }
                    }
                } else {
                    if (before === child) {
                        return;
                    }

                    if (bothRooted) {
                        // Remove the child from its current position in the tree
                        // without calling remove(), since we don't want to uproot it.
                        child._remove();
                    } else if (child.parentNode) {
                        child.remove();
                    } // Insert it as a child of its new parent


                    child.parentNode = parent;

                    if (isReplace) {
                        LinkedList.replace(n, child);

                        if (parent._childNodes) {
                            child._index = before_index;
                            parent._childNodes[before_index] = child;
                        } else if (parent._firstChild === before) {
                            parent._firstChild = child;
                        }
                    } else {
                        if (n !== null) {
                            LinkedList.insertBefore(child, n);
                        }

                        if (parent._childNodes) {
                            child._index = before_index;

                            parent._childNodes.splice(before_index, 0, child);
                        } else if (parent._firstChild === before) {
                            parent._firstChild = child;
                        }
                    }

                    if (bothRooted) {
                        parent.modify(); // Generate a move mutation event

                        parent.doc.mutateMove(child);
                    } else if (parent.rooted) {
                        parent.modify();
                        parent.doc.mutateInsert(child);
                    }
                }
            }
        },
        // Return the lastModTime value for this node. (For use as a
        // cache invalidation mechanism. If the node does not already
        // have one, initialize it from the owner document's modclock
        // property. (Note that modclock does not return the actual
        // time; it is simply a counter incremented on each document
        // modification)
        lastModTime: {
            get: function () {
                if (!this._lastModTime) {
                    this._lastModTime = this.doc.modclock;
                }

                return this._lastModTime;
            }
        },
        // Increment the owner document's modclock and use the new
        // value to update the lastModTime value for this node and
        // all of its ancestors. Nodes that have never had their
        // lastModTime value queried do not need to have a
        // lastModTime property set on them since there is no
        // previously queried value to ever compare the new value
        // against, so only update nodes that already have a
        // _lastModTime property.
        modify: {
            value: function () {
                if (this.doc.modclock) {
                    // Skip while doc.modclock == 0
                    var time = ++this.doc.modclock;

                    for (var n = this; n; n = n.parentElement) {
                        if (n._lastModTime) {
                            n._lastModTime = time;
                        }
                    }
                }
            }
        },
        // This attribute is not part of the DOM but is quite helpful.
        // It returns the document with which a node is associated.  Usually
        // this is the ownerDocument. But ownerDocument is null for the
        // document object itself, so this is a handy way to get the document
        // regardless of the node type
        doc: {
            get: function () {
                return this.ownerDocument || this;
            }
        },
        // If the node has a nid (node id), then it is rooted in a document
        rooted: {
            get: function () {
                return !!this._nid;
            }
        },
        normalize: {
            value: function () {
                var next;

                for (var child = this.firstChild; child !== null; child = next) {
                    next = child.nextSibling;

                    if (child.normalize) {
                        child.normalize();
                    }

                    if (child.nodeType !== Node.TEXT_NODE) {
                        continue;
                    }

                    if (child.nodeValue === "") {
                        this.removeChild(child);
                        continue;
                    }

                    var prevChild = child.previousSibling;

                    if (prevChild === null) {
                        continue;
                    } else if (prevChild.nodeType === Node.TEXT_NODE) {
                        // merge this with previous and remove the child
                        prevChild.appendData(child.nodeValue);
                        this.removeChild(child);
                    }
                }
            }
        },
        // Convert the children of a node to an HTML string.
        // This is used by the innerHTML getter
        // The serialization spec is at:
        // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#serializing-html-fragments
        //
        // The serialization logic is intentionally implemented in a separate
        // `NodeUtils` helper instead of the more obvious choice of a private
        // `_serializeOne()` method on the `Node.prototype` in order to avoid
        // the megamorphic `this._serializeOne` property access, which reduces
        // performance unnecessarily. If you need specialized behavior for a
        // certain subclass, you'll need to implement that in `NodeUtils`.
        // See https://github.com/fgnass/domino/pull/142 for more information.
        serialize: {
            value: function () {
                var s = "";

                for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
                    s += NodeUtils.serializeOne(kid, this);
                }

                return s;
            }
        },
        // Non-standard, but often useful for debugging.
        outerHTML: {
            get: function () {
                return NodeUtils.serializeOne(this, {
                    nodeType: 0
                });
            },
            set: utils.nyi
        },
        // mirror node type properties in the prototype, so they are present
        // in instances of Node (and subclasses)
        ELEMENT_NODE: {
            value: ELEMENT_NODE
        },
        ATTRIBUTE_NODE: {
            value: ATTRIBUTE_NODE
        },
        TEXT_NODE: {
            value: TEXT_NODE
        },
        CDATA_SECTION_NODE: {
            value: CDATA_SECTION_NODE
        },
        ENTITY_REFERENCE_NODE: {
            value: ENTITY_REFERENCE_NODE
        },
        ENTITY_NODE: {
            value: ENTITY_NODE
        },
        PROCESSING_INSTRUCTION_NODE: {
            value: PROCESSING_INSTRUCTION_NODE
        },
        COMMENT_NODE: {
            value: COMMENT_NODE
        },
        DOCUMENT_NODE: {
            value: DOCUMENT_NODE
        },
        DOCUMENT_TYPE_NODE: {
            value: DOCUMENT_TYPE_NODE
        },
        DOCUMENT_FRAGMENT_NODE: {
            value: DOCUMENT_FRAGMENT_NODE
        },
        NOTATION_NODE: {
            value: NOTATION_NODE
        },
        DOCUMENT_POSITION_DISCONNECTED: {
            value: DOCUMENT_POSITION_DISCONNECTED
        },
        DOCUMENT_POSITION_PRECEDING: {
            value: DOCUMENT_POSITION_PRECEDING
        },
        DOCUMENT_POSITION_FOLLOWING: {
            value: DOCUMENT_POSITION_FOLLOWING
        },
        DOCUMENT_POSITION_CONTAINS: {
            value: DOCUMENT_POSITION_CONTAINS
        },
        DOCUMENT_POSITION_CONTAINED_BY: {
            value: DOCUMENT_POSITION_CONTAINED_BY
        },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
            value: DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        }
    });
    return exports$9;
}

export { dew$5 as a, dew$7 as b, dew$8 as c, dew$9 as d, dew$3 as e, dew as f, dew$1 as g, dew$2 as h, dew$4 as i, dew$6 as j };

//# sourceMappingURL=74f7187c.js.map