//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.iterator;
	function m(e) {
		return typeof e != "object" || !e ? null : (e = p && e[p] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var h = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, g = Object.assign, _ = {};
	function v(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, v.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function y() {}
	y.prototype = v.prototype;
	function b(e, t, n) {
		this.props = e, this.context = t, this.refs = _, this.updater = n || h;
	}
	var x = b.prototype = new y();
	x.constructor = b, g(x, v.prototype), x.isPureReactComponent = !0;
	var S = Array.isArray;
	function C() {}
	var w = {
		H: null,
		A: null,
		T: null,
		S: null
	}, T = Object.prototype.hasOwnProperty;
	function E(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function D(e, t) {
		return E(e.type, t, e.props);
	}
	function O(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ee(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var k = /\/+/g;
	function A(e, t) {
		return typeof e == "object" && e && e.key != null ? ee("" + e.key) : t.toString(36);
	}
	function j(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(C, C) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function M(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, M(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + A(e, 0) : a, S(o) ? (i = "", c != null && (i = c.replace(k, "$&/") + "/"), M(o, r, i, "", function(e) {
			return e;
		})) : o != null && (O(o) && (o = D(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(k, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (S(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + A(a, u), c += M(a, r, i, s, o);
		else if (u = m(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + A(a, u++), c += M(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return M(j(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function N(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return M(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function te(e) {
		if (e._status === -1) {
			var t = e._result;
			t = t(), t.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
			}), e._status === -1 && (e._status = 0, e._result = t);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var P = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, F = {
		map: N,
		forEach: function(e, t, n) {
			N(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return N(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return N(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!O(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = F, e.Component = v, e.Fragment = r, e.Profiler = a, e.PureComponent = b, e.StrictMode = i, e.Suspense = l, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return w.H.useMemoCache(e);
		}
	}, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = g({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !T.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return E(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) T.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return E(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = O, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: te
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = function(e) {
		var t = w.T, n = {};
		w.T = n;
		try {
			var r = e(), i = w.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(C, P);
		} catch (e) {
			P(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), w.T = t;
		}
	}, e.unstable_useCacheRefresh = function() {
		return w.H.useCacheRefresh();
	}, e.use = function(e) {
		return w.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return w.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return w.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return w.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return w.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return w.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return w.H.useEffectEvent(e);
	}, e.useId = function() {
		return w.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return w.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return w.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return w.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return w.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return w.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return w.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return w.H.useRef(e);
	}, e.useState = function(e) {
		return w.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return w.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return w.H.useTransition();
	}, e.version = "19.2.6";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, S || (S = !0, O());
		else {
			var t = n(l);
			t !== null && A(x, t.startTime - e);
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && A(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var ee = new MessageChannel(), k = ee.port2;
		ee.port1.onmessage = D, O = function() {
			k.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function A(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, A(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal");
	function o(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function c(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return o(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = s.T, n = i.p;
		try {
			if (s.T = null, i.p = 2, e) return e();
		} finally {
			s.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = c(t.as, t.crossOrigin);
				i.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? i.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = c(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = c(t.as, t.crossOrigin);
			i.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else i.d.m(e);
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return s.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return s.H.useHostTransitionStatus();
	}, e.version = "19.2.6";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var h = Object.assign, g = Symbol.for("react.element"), _ = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), C = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), k = Symbol.for("react.memo_cache_sentinel"), A = Symbol.iterator;
	function j(e) {
		return typeof e != "object" || !e ? null : (e = A && e[A] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var M = Symbol.for("react.client.reference");
	function N(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === M ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case y: return "Fragment";
			case x: return "Profiler";
			case b: return "StrictMode";
			case T: return "Suspense";
			case E: return "SuspenseList";
			case ee: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case v: return "Portal";
			case C: return e.displayName || "Context";
			case S: return (e._context.displayName || "Context") + ".Consumer";
			case w:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case D: return t = e.displayName || null, t === null ? N(e.type) || "Memo" : t;
			case O:
				t = e._payload, e = e._init;
				try {
					return N(e(t));
				} catch {}
		}
		return null;
	}
	var te = Array.isArray, P = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, re = [], ie = -1;
	function ae(e) {
		return { current: e };
	}
	function I(e) {
		0 > ie || (e.current = re[ie], re[ie] = null, ie--);
	}
	function L(e, t) {
		ie++, re[ie] = e.current, e.current = t;
	}
	var R = ae(null), oe = ae(null), se = ae(null), ce = ae(null);
	function le(e, t) {
		switch (L(se, t), L(oe, e), L(R, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Vd(t), e = Hd(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		I(R), L(R, e);
	}
	function ue() {
		I(R), I(oe), I(se);
	}
	function de(e) {
		e.memoizedState !== null && L(ce, e);
		var t = R.current, n = Hd(t, e.type);
		t !== n && (L(oe, e), L(R, n));
	}
	function fe(e) {
		oe.current === e && (I(R), I(oe)), ce.current === e && (I(ce), Qf._currentValue = ne);
	}
	var pe, me;
	function he(e) {
		if (pe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			pe = t && t[1] || "", me = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + pe + e + me;
	}
	var ge = !1;
	function z(e, t) {
		if (!e || ge) return "";
		ge = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			ge = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? he(n) : "";
	}
	function _e(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return he(e.type);
			case 16: return he("Lazy");
			case 13: return e.child !== t && t !== null ? he("Suspense Fallback") : he("Suspense");
			case 19: return he("SuspenseList");
			case 0:
			case 15: return z(e.type, !1);
			case 11: return z(e.type.render, !1);
			case 1: return z(e.type, !0);
			case 31: return he("Activity");
			default: return "";
		}
	}
	function ve(e) {
		try {
			var t = "", n = null;
			do
				t += _e(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var ye = Object.prototype.hasOwnProperty, be = t.unstable_scheduleCallback, xe = t.unstable_cancelCallback, Se = t.unstable_shouldYield, Ce = t.unstable_requestPaint, B = t.unstable_now, we = t.unstable_getCurrentPriorityLevel, Te = t.unstable_ImmediatePriority, V = t.unstable_UserBlockingPriority, Ee = t.unstable_NormalPriority, De = t.unstable_LowPriority, Oe = t.unstable_IdlePriority, ke = t.log, Ae = t.unstable_setDisableYieldValue, je = null, H = null;
	function Me(e) {
		if (typeof ke == "function" && Ae(e), H && typeof H.setStrictMode == "function") try {
			H.setStrictMode(je, e);
		} catch {}
	}
	var Ne = Math.clz32 ? Math.clz32 : Ie, Pe = Math.log, Fe = Math.LN2;
	function Ie(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Pe(e) / Fe | 0) | 0;
	}
	var Le = 256, Re = 262144, ze = 4194304;
	function Be(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function Ve(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Be(n))) : i = Be(o) : i = Be(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Be(n))) : i = Be(o)) : i = Be(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function He(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function Ue(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function We() {
		var e = ze;
		return ze <<= 1, !(ze & 62914560) && (ze = 4194304), e;
	}
	function Ge(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Ke(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function qe(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ne(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && Je(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function Je(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ne(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function Ye(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ne(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function Xe(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : Ze(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function Ze(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function Qe(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function $e() {
		var e = F.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : mp(e.type)) : e;
	}
	function et(e, t) {
		var n = F.p;
		try {
			return F.p = e, t();
		} finally {
			F.p = n;
		}
	}
	var tt = Math.random().toString(36).slice(2), U = "__reactFiber$" + tt, nt = "__reactProps$" + tt, rt = "__reactContainer$" + tt, it = "__reactEvents$" + tt, at = "__reactListeners$" + tt, ot = "__reactHandles$" + tt, st = "__reactResources$" + tt, ct = "__reactMarker$" + tt;
	function lt(e) {
		delete e[U], delete e[nt], delete e[it], delete e[at], delete e[ot];
	}
	function ut(e) {
		var t = e[U];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[rt] || n[U]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = df(e); e !== null;) {
					if (n = e[U]) return n;
					e = df(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function dt(e) {
		if (e = e[U] || e[rt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function ft(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function pt(e) {
		var t = e[st];
		return t ||= e[st] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function mt(e) {
		e[ct] = !0;
	}
	var ht = /* @__PURE__ */ new Set(), gt = {};
	function _t(e, t) {
		vt(e, t), vt(e + "Capture", t);
	}
	function vt(e, t) {
		for (gt[e] = t, e = 0; e < t.length; e++) ht.add(t[e]);
	}
	var yt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), bt = {}, xt = {};
	function St(e) {
		return ye.call(xt, e) ? !0 : ye.call(bt, e) ? !1 : yt.test(e) ? xt[e] = !0 : (bt[e] = !0, !1);
	}
	function Ct(e, t, n) {
		if (St(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function wt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Tt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Et(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Dt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Ot(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function kt(e) {
		if (!e._valueTracker) {
			var t = Dt(e) ? "checked" : "value";
			e._valueTracker = Ot(e, t, "" + e[t]);
		}
	}
	function At(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Dt(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function jt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Mt = /[\n"\\]/g;
	function Nt(e) {
		return e.replace(Mt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Pt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Et(t)) : e.value !== "" + Et(t) && (e.value = "" + Et(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : It(e, o, Et(n)) : It(e, o, Et(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Et(s) : e.removeAttribute("name");
	}
	function Ft(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				kt(e);
				return;
			}
			n = n == null ? "" : "" + Et(n), t = t == null ? n : "" + Et(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), kt(e);
	}
	function It(e, t, n) {
		t === "number" && jt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function Lt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Et(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Rt(e, t, n) {
		if (t != null && (t = "" + Et(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Et(n);
	}
	function zt(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (te(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Et(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), kt(e);
	}
	function Bt(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Vt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function Ht(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Vt.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function Ut(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && Ht(e, a, r);
		} else for (var o in t) t.hasOwnProperty(o) && Ht(e, o, t[o]);
	}
	function Wt(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var Gt = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), Kt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function qt(e) {
		return Kt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function Jt() {}
	var Yt = null;
	function Xt(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Zt = null, Qt = null;
	function $t(e) {
		var t = dt(e);
		if (t && (e = t.stateNode)) {
			var n = e[nt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Pt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Nt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[nt] || null;
								if (!a) throw Error(i(90));
								Pt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && At(r);
					}
					break a;
				case "textarea":
					Rt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Lt(e, !!n.multiple, t, !1);
			}
		}
	}
	var en = !1;
	function tn(e, t, n) {
		if (en) return e(t, n);
		en = !0;
		try {
			return e(t);
		} finally {
			if (en = !1, (Zt !== null || Qt !== null) && (vu(), Zt && (t = Zt, e = Qt, Qt = Zt = null, $t(t), e))) for (t = 0; t < e.length; t++) $t(e[t]);
		}
	}
	function nn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[nt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var rn = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), an = !1;
	if (rn) try {
		var on = {};
		Object.defineProperty(on, "passive", { get: function() {
			an = !0;
		} }), window.addEventListener("test", on, on), window.removeEventListener("test", on, on);
	} catch {
		an = !1;
	}
	var sn = null, cn = null, ln = null;
	function un() {
		if (ln) return ln;
		var e, t = cn, n = t.length, r, i = "value" in sn ? sn.value : sn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return ln = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function dn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function fn() {
		return !0;
	}
	function pn() {
		return !1;
	}
	function mn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? fn : pn, this.isPropagationStopped = pn, this;
		}
		return h(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = fn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = fn);
			},
			persist: function() {},
			isPersistent: fn
		}), t;
	}
	var hn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, gn = mn(hn), _n = h({}, hn, {
		view: 0,
		detail: 0
	}), vn = mn(_n), yn, bn, xn, Sn = h({}, _n, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Nn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (yn = e.screenX - xn.screenX, bn = e.screenY - xn.screenY) : bn = yn = 0, xn = e), yn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : bn;
		}
	}), Cn = mn(Sn), wn = mn(h({}, Sn, { dataTransfer: 0 })), Tn = mn(h({}, _n, { relatedTarget: 0 })), En = mn(h({}, hn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Dn = mn(h({}, hn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), On = mn(h({}, hn, { data: 0 })), kn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, An = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, jn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Mn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = jn[e]) ? !!t[e] : !1;
	}
	function Nn() {
		return Mn;
	}
	var Pn = mn(h({}, _n, {
		key: function(e) {
			if (e.key) {
				var t = kn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? An[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Nn,
		charCode: function(e) {
			return e.type === "keypress" ? dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Fn = mn(h({}, Sn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), In = mn(h({}, _n, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Nn
	})), Ln = mn(h({}, hn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Rn = mn(h({}, Sn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), zn = mn(h({}, hn, {
		newState: 0,
		oldState: 0
	})), Bn = [
		9,
		13,
		27,
		32
	], Vn = rn && "CompositionEvent" in window, Hn = null;
	rn && "documentMode" in document && (Hn = document.documentMode);
	var Un = rn && "TextEvent" in window && !Hn, Wn = rn && (!Vn || Hn && 8 < Hn && 11 >= Hn), Gn = " ", Kn = !1;
	function qn(e, t) {
		switch (e) {
			case "keyup": return Bn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function Jn(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var Yn = !1;
	function Xn(e, t) {
		switch (e) {
			case "compositionend": return Jn(t);
			case "keypress": return t.which === 32 ? (Kn = !0, Gn) : null;
			case "textInput": return e = t.data, e === Gn && Kn ? null : e;
			default: return null;
		}
	}
	function Zn(e, t) {
		if (Yn) return e === "compositionend" || !Vn && qn(e, t) ? (e = un(), ln = cn = sn = null, Yn = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Wn && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Qn = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function $n(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Qn[e.type] : t === "textarea";
	}
	function er(e, t, n, r) {
		Zt ? Qt ? Qt.push(r) : Qt = [r] : Zt = r, t = Td(t, "onChange"), 0 < t.length && (n = new gn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var tr = null, nr = null;
	function rr(e) {
		vd(e, 0);
	}
	function ir(e) {
		if (At(ft(e))) return e;
	}
	function ar(e, t) {
		if (e === "change") return t;
	}
	var or = !1;
	if (rn) {
		var sr;
		if (rn) {
			var cr = "oninput" in document;
			if (!cr) {
				var lr = document.createElement("div");
				lr.setAttribute("oninput", "return;"), cr = typeof lr.oninput == "function";
			}
			sr = cr;
		} else sr = !1;
		or = sr && (!document.documentMode || 9 < document.documentMode);
	}
	function ur() {
		tr && (tr.detachEvent("onpropertychange", dr), nr = tr = null);
	}
	function dr(e) {
		if (e.propertyName === "value" && ir(nr)) {
			var t = [];
			er(t, nr, e, Xt(e)), tn(rr, t);
		}
	}
	function fr(e, t, n) {
		e === "focusin" ? (ur(), tr = t, nr = n, tr.attachEvent("onpropertychange", dr)) : e === "focusout" && ur();
	}
	function pr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return ir(nr);
	}
	function mr(e, t) {
		if (e === "click") return ir(t);
	}
	function hr(e, t) {
		if (e === "input" || e === "change") return ir(t);
	}
	function gr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var _r = typeof Object.is == "function" ? Object.is : gr;
	function vr(e, t) {
		if (_r(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!ye.call(t, i) || !_r(e[i], t[i])) return !1;
		}
		return !0;
	}
	function yr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function br(e, t) {
		var n = yr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = yr(n);
		}
	}
	function xr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Sr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = jt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = jt(e.document);
		}
		return t;
	}
	function Cr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var wr = rn && "documentMode" in document && 11 >= document.documentMode, Tr = null, Er = null, Dr = null, Or = !1;
	function kr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Or || Tr == null || Tr !== jt(r) || (r = Tr, "selectionStart" in r && Cr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Dr && vr(Dr, r) || (Dr = r, r = Td(Er, "onSelect"), 0 < r.length && (t = new gn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Tr)));
	}
	function Ar(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var jr = {
		animationend: Ar("Animation", "AnimationEnd"),
		animationiteration: Ar("Animation", "AnimationIteration"),
		animationstart: Ar("Animation", "AnimationStart"),
		transitionrun: Ar("Transition", "TransitionRun"),
		transitionstart: Ar("Transition", "TransitionStart"),
		transitioncancel: Ar("Transition", "TransitionCancel"),
		transitionend: Ar("Transition", "TransitionEnd")
	}, Mr = {}, Nr = {};
	rn && (Nr = document.createElement("div").style, "AnimationEvent" in window || (delete jr.animationend.animation, delete jr.animationiteration.animation, delete jr.animationstart.animation), "TransitionEvent" in window || delete jr.transitionend.transition);
	function Pr(e) {
		if (Mr[e]) return Mr[e];
		if (!jr[e]) return e;
		var t = jr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Nr) return Mr[e] = t[n];
		return e;
	}
	var Fr = Pr("animationend"), Ir = Pr("animationiteration"), Lr = Pr("animationstart"), Rr = Pr("transitionrun"), zr = Pr("transitionstart"), Br = Pr("transitioncancel"), Vr = Pr("transitionend"), Hr = /* @__PURE__ */ new Map(), Ur = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Ur.push("scrollEnd");
	function Wr(e, t) {
		Hr.set(e, t), _t(t, [e]);
	}
	var Gr = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Kr = [], qr = 0, Jr = 0;
	function Yr() {
		for (var e = qr, t = Jr = qr = 0; t < e;) {
			var n = Kr[t];
			Kr[t++] = null;
			var r = Kr[t];
			Kr[t++] = null;
			var i = Kr[t];
			Kr[t++] = null;
			var a = Kr[t];
			if (Kr[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && $r(n, i, a);
		}
	}
	function Xr(e, t, n, r) {
		Kr[qr++] = e, Kr[qr++] = t, Kr[qr++] = n, Kr[qr++] = r, Jr |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Zr(e, t, n, r) {
		return Xr(e, t, n, r), ei(e);
	}
	function Qr(e, t) {
		return Xr(e, null, null, t), ei(e);
	}
	function $r(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ne(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function ei(e) {
		if (50 < lu) throw lu = 0, uu = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var ti = {};
	function ni(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function ri(e, t, n, r) {
		return new ni(e, t, n, r);
	}
	function ii(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function ai(e, t) {
		var n = e.alternate;
		return n === null ? (n = ri(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function oi(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function si(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof e == "function") ii(e) && (s = 1);
		else if (typeof e == "string") s = Uf(e, n, R.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case ee: return e = ri(31, n, t, a), e.elementType = ee, e.lanes = o, e;
			case y: return ci(n.children, a, o, t);
			case b:
				s = 8, a |= 24;
				break;
			case x: return e = ri(12, n, t, a | 2), e.elementType = x, e.lanes = o, e;
			case T: return e = ri(13, n, t, a), e.elementType = T, e.lanes = o, e;
			case E: return e = ri(19, n, t, a), e.elementType = E, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case C:
						s = 10;
						break a;
					case S:
						s = 9;
						break a;
					case w:
						s = 11;
						break a;
					case D:
						s = 14;
						break a;
					case O:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = ri(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function ci(e, t, n, r) {
		return e = ri(7, e, r, t), e.lanes = n, e;
	}
	function li(e, t, n) {
		return e = ri(6, e, null, t), e.lanes = n, e;
	}
	function ui(e) {
		var t = ri(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function di(e, t, n) {
		return t = ri(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var fi = /* @__PURE__ */ new WeakMap();
	function pi(e, t) {
		if (typeof e == "object" && e) {
			var n = fi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: ve(t)
			}, fi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: ve(t)
		};
	}
	var mi = [], hi = 0, gi = null, _i = 0, vi = [], yi = 0, bi = null, xi = 1, Si = "";
	function Ci(e, t) {
		mi[hi++] = _i, mi[hi++] = gi, gi = e, _i = t;
	}
	function wi(e, t, n) {
		vi[yi++] = xi, vi[yi++] = Si, vi[yi++] = bi, bi = e;
		var r = xi;
		e = Si;
		var i = 32 - Ne(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ne(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, xi = 1 << 32 - Ne(t) + i | n << i | r, Si = a + e;
		} else xi = 1 << a | n << i | r, Si = e;
	}
	function Ti(e) {
		e.return !== null && (Ci(e, 1), wi(e, 1, 0));
	}
	function Ei(e) {
		for (; e === gi;) gi = mi[--hi], mi[hi] = null, _i = mi[--hi], mi[hi] = null;
		for (; e === bi;) bi = vi[--yi], vi[yi] = null, Si = vi[--yi], vi[yi] = null, xi = vi[--yi], vi[yi] = null;
	}
	function Di(e, t) {
		vi[yi++] = xi, vi[yi++] = Si, vi[yi++] = bi, xi = t.id, Si = t.overflow, bi = e;
	}
	var Oi = null, ki = null, W = !1, Ai = null, ji = !1, Mi = Error(i(519));
	function Ni(e) {
		throw zi(pi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Mi;
	}
	function Pi(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[U] = e, t[nt] = r, n) {
			case "dialog":
				$("cancel", t), $("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				$("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < gd.length; n++) $(gd[n], t);
				break;
			case "source":
				$("error", t);
				break;
			case "img":
			case "image":
			case "link":
				$("error", t), $("load", t);
				break;
			case "details":
				$("toggle", t);
				break;
			case "input":
				$("invalid", t), Ft(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				$("invalid", t);
				break;
			case "textarea": $("invalid", t), zt(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || jd(t.textContent, n) ? (r.popover != null && ($("beforetoggle", t), $("toggle", t)), r.onScroll != null && $("scroll", t), r.onScrollEnd != null && $("scrollend", t), r.onClick != null && (t.onclick = Jt), t = !0) : t = !1, t || Ni(e, !0);
	}
	function Fi(e) {
		for (Oi = e.return; Oi;) switch (Oi.tag) {
			case 5:
			case 31:
			case 13:
				ji = !1;
				return;
			case 27:
			case 3:
				ji = !0;
				return;
			default: Oi = Oi.return;
		}
	}
	function Ii(e) {
		if (e !== Oi) return !1;
		if (!W) return Fi(e), W = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ud(e.type, e.memoizedProps)), n = !n), n && ki && Ni(e), Fi(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ki = uf(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			ki = uf(e);
		} else t === 27 ? (t = ki, Zd(e.type) ? (e = lf, lf = null, ki = e) : ki = t) : ki = Oi ? cf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Li() {
		ki = Oi = null, W = !1;
	}
	function Ri() {
		var e = Ai;
		return e !== null && (Yl === null ? Yl = e : Yl.push.apply(Yl, e), Ai = null), e;
	}
	function zi(e) {
		Ai === null ? Ai = [e] : Ai.push(e);
	}
	var Bi = ae(null), Vi = null, Hi = null;
	function Ui(e, t, n) {
		L(Bi, t._currentValue), t._currentValue = n;
	}
	function Wi(e) {
		e._currentValue = Bi.current, I(Bi);
	}
	function Gi(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Ki(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Gi(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Gi(s, n, e), s = null;
			} else s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function qi(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					_r(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ce.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf));
			}
			a = a.return;
		}
		e !== null && Ki(t, e, n, r), t.flags |= 262144;
	}
	function Ji(e) {
		for (e = e.firstContext; e !== null;) {
			if (!_r(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Yi(e) {
		Vi = e, Hi = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Xi(e) {
		return Qi(Vi, e);
	}
	function Zi(e, t) {
		return Vi === null && Yi(e), Qi(e, t);
	}
	function Qi(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Hi === null) {
			if (e === null) throw Error(i(308));
			Hi = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Hi = Hi.next = t;
		return n;
	}
	var $i = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, ea = t.unstable_scheduleCallback, ta = t.unstable_NormalPriority, na = {
		$$typeof: C,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function ra() {
		return {
			controller: new $i(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ia(e) {
		e.refCount--, e.refCount === 0 && ea(ta, function() {
			e.controller.abort();
		});
	}
	var aa = null, oa = 0, sa = 0, ca = null;
	function la(e, t) {
		if (aa === null) {
			var n = aa = [];
			oa = 0, sa = ud(), ca = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return oa++, t.then(ua, ua), t;
	}
	function ua() {
		if (--oa === 0 && aa !== null) {
			ca !== null && (ca.status = "fulfilled");
			var e = aa;
			aa = null, sa = 0, ca = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function da(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var fa = P.S;
	P.S = function(e, t) {
		Ql = B(), typeof t == "object" && t && typeof t.then == "function" && la(e, t), fa !== null && fa(e, t);
	};
	var pa = ae(null);
	function ma() {
		var e = pa.current;
		return e === null ? Il.pooledCache : e;
	}
	function ha(e, t) {
		t === null ? L(pa, pa.current) : L(pa, t.pool);
	}
	function ga() {
		var e = ma();
		return e === null ? null : {
			parent: na._currentValue,
			pool: e
		};
	}
	var _a = Error(i(460)), va = Error(i(474)), ya = Error(i(542)), ba = { then: function() {} };
	function xa(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Sa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Jt, Jt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Ea(e), e;
			default:
				if (typeof t.status == "string") t.then(Jt, Jt);
				else {
					if (e = Il, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Ea(e), e;
				}
				throw wa = t, _a;
		}
	}
	function Ca(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (wa = e, _a) : e;
		}
	}
	var wa = null;
	function Ta() {
		if (wa === null) throw Error(i(459));
		var e = wa;
		return wa = null, e;
	}
	function Ea(e) {
		if (e === _a || e === ya) throw Error(i(483));
	}
	var Da = null, Oa = 0;
	function ka(e) {
		var t = Oa;
		return Oa += 1, Da === null && (Da = []), Sa(Da, e, t);
	}
	function Aa(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function ja(e, t) {
		throw t.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ma(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = ai(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = li(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === O && Ca(i) === t.type) ? (t = a(t, n.props), Aa(t, n), t.return = e, t) : (t = si(n.type, n.key, n.props, null, e.mode, r), Aa(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = di(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = ci(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = li("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case _: return n = si(t.type, t.key, t.props, null, e.mode, n), Aa(n, t), n.return = e, n;
					case v: return t = di(t, e.mode, n), t.return = e, t;
					case O: return t = Ca(t), f(e, t, n);
				}
				if (te(t) || j(t)) return t = ci(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, ka(t), n);
				if (t.$$typeof === C) return f(e, Zi(e, t), n);
				ja(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case _: return n.key === i ? l(e, t, n, r) : null;
					case v: return n.key === i ? u(e, t, n, r) : null;
					case O: return n = Ca(n), p(e, t, n, r);
				}
				if (te(n) || j(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, ka(n), r);
				if (n.$$typeof === C) return p(e, t, Zi(e, n), r);
				ja(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case _: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case v: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case O: return r = Ca(r), m(e, t, n, r, i);
				}
				if (te(r) || j(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, ka(r), i);
				if (r.$$typeof === C) return m(e, t, n, Zi(t, r), i);
				ja(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), W && Ci(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return W && Ci(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), W && Ci(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), W && Ci(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return W && Ci(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), W && Ci(a, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === y && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case _:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === y) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === O && Ca(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Aa(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							o.type === y ? (c = ci(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = si(o.type, o.key, o.props, null, e.mode, c), Aa(c, o), c.return = e, e = c);
						}
						return s(e);
					case v:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
									n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = di(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case O: return o = Ca(o), b(e, r, o, c);
				}
				if (te(o)) return h(e, r, o, c);
				if (j(o)) {
					if (l = j(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, ka(o), c);
				if (o.$$typeof === C) return b(e, r, Zi(e, o), c);
				ja(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = li(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Oa = 0;
				var i = b(e, t, n, r);
				return Da = null, i;
			} catch (t) {
				if (t === _a || t === ya) throw t;
				var a = ri(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Na = Ma(!0), Pa = Ma(!1), Fa = !1;
	function Ia(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function La(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ra(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function za(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Y & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = ei(e), $r(e, null, n), t;
		}
		return Xr(e, r, t, n), ei(e);
	}
	function Ba(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ye(e, n);
		}
	}
	function Va(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Ha = !1;
	function Ua() {
		if (Ha) {
			var e = ca;
			if (e !== null) throw e;
		}
	}
	function Wa(e, t, n, r) {
		Ha = !1;
		var i = e.updateQueue;
		Fa = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Z & f) === f : (r & f) === f) {
					f !== 0 && f === sa && (Ha = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (m = g.payload, typeof m == "function") {
									d = m.call(_, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = g.payload, f = typeof m == "function" ? m.call(_, d, f) : m, f == null) break a;
								d = h({}, d, f);
								break a;
							case 2: Fa = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Ul |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Ga(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function Ka(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ga(n[e], t);
	}
	var qa = ae(null), Ja = ae(0);
	function Ya(e, t) {
		e = Vl, L(Ja, e), L(qa, t), Vl = e | t.baseLanes;
	}
	function Xa() {
		L(Ja, Vl), L(qa, qa.current);
	}
	function Za() {
		Vl = Ja.current, I(qa), I(Ja);
	}
	var Qa = ae(null), $a = null;
	function eo(e) {
		var t = e.alternate;
		L(ao, ao.current & 1), L(Qa, e), $a === null && (t === null || qa.current !== null || t.memoizedState !== null) && ($a = e);
	}
	function to(e) {
		L(ao, ao.current), L(Qa, e), $a === null && ($a = e);
	}
	function no(e) {
		e.tag === 22 ? (L(ao, ao.current), L(Qa, e), $a === null && ($a = e)) : ro(e);
	}
	function ro() {
		L(ao, ao.current), L(Qa, Qa.current);
	}
	function io(e) {
		I(Qa), $a === e && ($a = null), I(ao);
	}
	var ao = ae(0);
	function oo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || af(n) || of(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var so = 0, G = null, K = null, co = null, lo = !1, uo = !1, fo = !1, po = 0, mo = 0, ho = null, go = 0;
	function _o() {
		throw Error(i(321));
	}
	function vo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!_r(e[n], t[n])) return !1;
		return !0;
	}
	function yo(e, t, n, r, i, a) {
		return so = a, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Is : Ls, fo = !1, a = n(r, i), fo = !1, uo && (a = xo(t, n, r, i)), bo(e), a;
	}
	function bo(e) {
		P.H = Fs;
		var t = K !== null && K.next !== null;
		if (so = 0, co = K = G = null, lo = !1, mo = 0, ho = null, t) throw Error(i(300));
		e === null || $s || (e = e.dependencies, e !== null && Ji(e) && ($s = !0));
	}
	function xo(e, t, n, r) {
		G = e;
		var a = 0;
		do {
			if (uo && (ho = null), mo = 0, uo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, co = K = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			P.H = Rs, o = t(n, r);
		} while (uo);
		return o;
	}
	function So() {
		var e = P.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ko(t) : t, e = e.useState()[0], (K === null ? null : K.memoizedState) !== e && (G.flags |= 1024), t;
	}
	function Co() {
		var e = po !== 0;
		return po = 0, e;
	}
	function wo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function To(e) {
		if (lo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			lo = !1;
		}
		so = 0, co = K = G = null, uo = !1, mo = po = 0, ho = null;
	}
	function Eo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return co === null ? G.memoizedState = co = e : co = co.next = e, co;
	}
	function Do() {
		if (K === null) {
			var e = G.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = K.next;
		var t = co === null ? G.memoizedState : co.next;
		if (t !== null) co = t, K = e;
		else {
			if (e === null) throw G.alternate === null ? Error(i(467)) : Error(i(310));
			K = e, e = {
				memoizedState: K.memoizedState,
				baseState: K.baseState,
				baseQueue: K.baseQueue,
				queue: K.queue,
				next: null
			}, co === null ? G.memoizedState = co = e : co = co.next = e;
		}
		return co;
	}
	function Oo() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ko(e) {
		var t = mo;
		return mo += 1, ho === null && (ho = []), e = Sa(ho, e, t), t = G, (co === null ? t.memoizedState : co.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Is : Ls), e;
	}
	function Ao(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ko(e);
			if (e.$$typeof === C) return Xi(e);
		}
		throw Error(i(438, String(e)));
	}
	function jo(e) {
		var t = null, n = G.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = G.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Oo(), G.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = k;
		return t.index++, n;
	}
	function Mo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function No(e) {
		return Po(Do(), K, e);
	}
	function Po(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (so & f) === f : (Z & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === sa && (d = !0);
					else if ((so & p) === p) {
						u = u.next, p === sa && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, G.lanes |= p, Ul |= p;
					f = u.action, fo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, G.lanes |= f, Ul |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !_r(o, e.memoizedState) && ($s = !0, d && (n = ca, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function Fo(e) {
		var t = Do(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			_r(o, t.memoizedState) || ($s = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Io(e, t, n) {
		var r = G, a = Do(), o = W;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !_r((K || a).memoizedState, n);
		if (s && (a.memoizedState = n, $s = !0), a = a.queue, ss(zo.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || co !== null && co.memoizedState.tag & 1) {
			if (r.flags |= 2048, ns(9, { destroy: void 0 }, Ro.bind(null, r, a, n, t), null), Il === null) throw Error(i(349));
			o || so & 127 || Lo(r, t, n);
		}
		return n;
	}
	function Lo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = G.updateQueue, t === null ? (t = Oo(), G.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ro(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Bo(t) && Vo(e);
	}
	function zo(e, t, n) {
		return n(function() {
			Bo(t) && Vo(e);
		});
	}
	function Bo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !_r(e, n);
		} catch {
			return !0;
		}
	}
	function Vo(e) {
		var t = Qr(e, 2);
		t !== null && pu(t, e, 2);
	}
	function Ho(e) {
		var t = Eo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), fo) {
				Me(!0);
				try {
					n();
				} finally {
					Me(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Mo,
			lastRenderedState: e
		}, t;
	}
	function Uo(e, t, n, r) {
		return e.baseState = n, Po(e, K, typeof r == "function" ? r : Mo);
	}
	function Wo(e, t, n, r, a) {
		if (Ms(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			P.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Go(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Go(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = P.T, o = {};
			P.T = o;
			try {
				var s = n(i, r), c = P.S;
				c !== null && c(o, s), Ko(e, t, s);
			} catch (n) {
				Jo(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), P.T = a;
			}
		} else try {
			a = n(i, r), Ko(e, t, a);
		} catch (n) {
			Jo(e, t, n);
		}
	}
	function Ko(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			qo(e, t, n);
		}, function(n) {
			return Jo(e, t, n);
		}) : qo(e, t, n);
	}
	function qo(e, t, n) {
		t.status = "fulfilled", t.value = n, Yo(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Go(e, n)));
	}
	function Jo(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Yo(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Yo(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Xo(e, t) {
		return t;
	}
	function Zo(e, t) {
		if (W) {
			var n = Il.formState;
			if (n !== null) {
				a: {
					var r = G;
					if (W) {
						if (ki) {
							b: {
								for (var i = ki, a = ji; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = cf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								ki = cf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Ni(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Eo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Xo,
			lastRenderedState: t
		}, n.queue = r, n = ks.bind(null, G, r), r.dispatch = n, r = Ho(!1), a = js.bind(null, G, !1, r.queue), r = Eo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Wo.bind(null, G, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Qo(e) {
		return $o(Do(), K, e);
	}
	function $o(e, t, n) {
		if (t = Po(e, t, Xo)[0], e = No(Mo)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ko(t);
		} catch (e) {
			throw e === _a ? ya : e;
		}
		else r = t;
		t = Do();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (G.flags |= 2048, ns(9, { destroy: void 0 }, es.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function es(e, t) {
		e.action = t;
	}
	function ts(e) {
		var t = Do(), n = K;
		if (n !== null) return $o(t, n, e);
		Do(), t = t.memoizedState, n = Do();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function ns(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = G.updateQueue, t === null && (t = Oo(), G.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function rs() {
		return Do().memoizedState;
	}
	function is(e, t, n, r) {
		var i = Eo();
		G.flags |= e, i.memoizedState = ns(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function as(e, t, n, r) {
		var i = Do();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		K !== null && r !== null && vo(r, K.memoizedState.deps) ? i.memoizedState = ns(t, a, n, r) : (G.flags |= e, i.memoizedState = ns(1 | t, a, n, r));
	}
	function os(e, t) {
		is(8390656, 8, e, t);
	}
	function ss(e, t) {
		as(2048, 8, e, t);
	}
	function cs(e) {
		G.flags |= 4;
		var t = G.updateQueue;
		if (t === null) t = Oo(), G.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function ls(e) {
		var t = Do().memoizedState;
		return cs({
			ref: t,
			nextImpl: e
		}), function() {
			if (Y & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function us(e, t) {
		return as(4, 2, e, t);
	}
	function ds(e, t) {
		return as(4, 4, e, t);
	}
	function fs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function ps(e, t, n) {
		n = n == null ? null : n.concat([e]), as(4, 4, fs.bind(null, t, e), n);
	}
	function ms() {}
	function hs(e, t) {
		var n = Do();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && vo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function gs(e, t) {
		var n = Do();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && vo(t, r[1])) return r[0];
		if (r = e(), fo) {
			Me(!0);
			try {
				e();
			} finally {
				Me(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function _s(e, t, n) {
		return n === void 0 || so & 1073741824 && !(Z & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = fu(), G.lanes |= e, Ul |= e, n);
	}
	function vs(e, t, n, r) {
		return _r(n, t) ? n : qa.current === null ? !(so & 42) || so & 1073741824 && !(Z & 261930) ? ($s = !0, e.memoizedState = n) : (e = fu(), G.lanes |= e, Ul |= e, t) : (e = _s(e, n, r), _r(e, t) || ($s = !0), e);
	}
	function ys(e, t, n, r, i) {
		var a = F.p;
		F.p = a !== 0 && 8 > a ? a : 8;
		var o = P.T, s = {};
		P.T = s, js(e, !1, t, n);
		try {
			var c = i(), l = P.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? As(e, t, da(c, r), du(e)) : As(e, t, r, du(e));
		} catch (n) {
			As(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, du());
		} finally {
			F.p = a, o !== null && s.types !== null && (o.types = s.types), P.T = o;
		}
	}
	function bs() {}
	function xs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Ss(e).queue;
		ys(e, a, t, ne, n === null ? bs : function() {
			return Cs(e), n(r);
		});
	}
	function Ss(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ne,
			baseState: ne,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Mo,
				lastRenderedState: ne
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Mo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Cs(e) {
		var t = Ss(e);
		t.next === null && (t = e.alternate.memoizedState), As(e, t.next.queue, {}, du());
	}
	function ws() {
		return Xi(Qf);
	}
	function Ts() {
		return Do().memoizedState;
	}
	function Es() {
		return Do().memoizedState;
	}
	function Ds(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = du();
					e = Ra(n);
					var r = za(t, e, n);
					r !== null && (pu(r, t, n), Ba(r, t, n)), t = { cache: ra() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Os(e, t, n) {
		var r = du();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ms(e) ? Ns(t, n) : (n = Zr(e, t, n, r), n !== null && (pu(n, e, r), Ps(n, t, r)));
	}
	function ks(e, t, n) {
		As(e, t, n, du());
	}
	function As(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Ms(e)) Ns(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, _r(s, o)) return Xr(e, t, i, 0), Il === null && Yr(), !1;
			} catch {}
			if (n = Zr(e, t, i, r), n !== null) return pu(n, e, r), Ps(n, t, r), !0;
		}
		return !1;
	}
	function js(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: ud(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Ms(e)) {
			if (t) throw Error(i(479));
		} else t = Zr(e, n, r, 2), t !== null && pu(t, e, 2);
	}
	function Ms(e) {
		var t = e.alternate;
		return e === G || t !== null && t === G;
	}
	function Ns(e, t) {
		uo = lo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Ps(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, Ye(e, n);
		}
	}
	var Fs = {
		readContext: Xi,
		use: Ao,
		useCallback: _o,
		useContext: _o,
		useEffect: _o,
		useImperativeHandle: _o,
		useLayoutEffect: _o,
		useInsertionEffect: _o,
		useMemo: _o,
		useReducer: _o,
		useRef: _o,
		useState: _o,
		useDebugValue: _o,
		useDeferredValue: _o,
		useTransition: _o,
		useSyncExternalStore: _o,
		useId: _o,
		useHostTransitionStatus: _o,
		useFormState: _o,
		useActionState: _o,
		useOptimistic: _o,
		useMemoCache: _o,
		useCacheRefresh: _o
	};
	Fs.useEffectEvent = _o;
	var Is = {
		readContext: Xi,
		use: Ao,
		useCallback: function(e, t) {
			return Eo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Xi,
		useEffect: os,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), is(4194308, 4, fs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return is(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			is(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Eo();
			t = t === void 0 ? null : t;
			var r = e();
			if (fo) {
				Me(!0);
				try {
					e();
				} finally {
					Me(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Eo();
			if (n !== void 0) {
				var i = n(t);
				if (fo) {
					Me(!0);
					try {
						n(t);
					} finally {
						Me(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Os.bind(null, G, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Eo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ho(e);
			var t = e.queue, n = ks.bind(null, G, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: ms,
		useDeferredValue: function(e, t) {
			return _s(Eo(), e, t);
		},
		useTransition: function() {
			var e = Ho(!1);
			return e = ys.bind(null, G, e.queue, !0, !1), Eo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = G, a = Eo();
			if (W) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Il === null) throw Error(i(349));
				Z & 127 || Lo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, os(zo.bind(null, r, o, e), [e]), r.flags |= 2048, ns(9, { destroy: void 0 }, Ro.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Eo(), t = Il.identifierPrefix;
			if (W) {
				var n = Si, r = xi;
				n = (r & ~(1 << 32 - Ne(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = po++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = go++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ws,
		useFormState: Zo,
		useActionState: Zo,
		useOptimistic: function(e) {
			var t = Eo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = js.bind(null, G, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: jo,
		useCacheRefresh: function() {
			return Eo().memoizedState = Ds.bind(null, G);
		},
		useEffectEvent: function(e) {
			var t = Eo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Y & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Ls = {
		readContext: Xi,
		use: Ao,
		useCallback: hs,
		useContext: Xi,
		useEffect: ss,
		useImperativeHandle: ps,
		useInsertionEffect: us,
		useLayoutEffect: ds,
		useMemo: gs,
		useReducer: No,
		useRef: rs,
		useState: function() {
			return No(Mo);
		},
		useDebugValue: ms,
		useDeferredValue: function(e, t) {
			return vs(Do(), K.memoizedState, e, t);
		},
		useTransition: function() {
			var e = No(Mo)[0], t = Do().memoizedState;
			return [typeof e == "boolean" ? e : ko(e), t];
		},
		useSyncExternalStore: Io,
		useId: Ts,
		useHostTransitionStatus: ws,
		useFormState: Qo,
		useActionState: Qo,
		useOptimistic: function(e, t) {
			return Uo(Do(), K, e, t);
		},
		useMemoCache: jo,
		useCacheRefresh: Es
	};
	Ls.useEffectEvent = ls;
	var Rs = {
		readContext: Xi,
		use: Ao,
		useCallback: hs,
		useContext: Xi,
		useEffect: ss,
		useImperativeHandle: ps,
		useInsertionEffect: us,
		useLayoutEffect: ds,
		useMemo: gs,
		useReducer: Fo,
		useRef: rs,
		useState: function() {
			return Fo(Mo);
		},
		useDebugValue: ms,
		useDeferredValue: function(e, t) {
			var n = Do();
			return K === null ? _s(n, e, t) : vs(n, K.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Fo(Mo)[0], t = Do().memoizedState;
			return [typeof e == "boolean" ? e : ko(e), t];
		},
		useSyncExternalStore: Io,
		useId: Ts,
		useHostTransitionStatus: ws,
		useFormState: ts,
		useActionState: ts,
		useOptimistic: function(e, t) {
			var n = Do();
			return K === null ? (n.baseState = e, [e, n.queue.dispatch]) : Uo(n, K, e, t);
		},
		useMemoCache: jo,
		useCacheRefresh: Es
	};
	Rs.useEffectEvent = ls;
	function zs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : h({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Bs = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Ra(r);
			i.payload = t, n != null && (i.callback = n), t = za(e, i, r), t !== null && (pu(t, e, r), Ba(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = du(), i = Ra(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = za(e, i, r), t !== null && (pu(t, e, r), Ba(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = du(), r = Ra(n);
			r.tag = 2, t != null && (r.callback = t), t = za(e, r, n), t !== null && (pu(t, e, n), Ba(t, e, n));
		}
	};
	function Vs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !vr(n, r) || !vr(i, a) : !0;
	}
	function Hs(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
	}
	function Us(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = h({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Ws(e) {
		Gr(e);
	}
	function Gs(e) {
		console.error(e);
	}
	function Ks(e) {
		Gr(e);
	}
	function qs(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Js(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Ys(e, t, n) {
		return n = Ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			qs(e, t);
		}, n;
	}
	function q(e) {
		return e = Ra(e), e.tag = 3, e;
	}
	function Xs(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Js(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Js(t, n, r), typeof i != "function" && (tu === null ? tu = new Set([this]) : tu.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Zs(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && qi(t, n, a, !0), n = Qa.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return $a === null ? Tu() : n.alternate === null && Hl === 0 && (Hl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === ba ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), Wu(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === ba ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), Wu(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return Wu(e, r, a), Tu(), !1;
		}
		if (W) return t = Qa.current, t === null ? (r !== Mi && (t = Error(i(423), { cause: r }), zi(pi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = pi(r, n), a = Ys(e.stateNode, r, a), Va(e, a), Hl !== 4 && (Hl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Mi && (e = Error(i(422), { cause: r }), zi(pi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = pi(o, n), Jl === null ? Jl = [o] : Jl.push(o), Hl !== 4 && (Hl = 2), t === null) return !0;
		r = pi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Ys(n.stateNode, r, e), Va(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (tu === null || !tu.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = q(a), Xs(a, e, n, r), Va(n, a), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Qs = Error(i(461)), $s = !1;
	function ec(e, t, n, r) {
		t.child = e === null ? Pa(t, null, n, r) : Na(t, e.child, n, r);
	}
	function tc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Yi(t), r = yo(e, t, n, o, a, i), s = Co(), e !== null && !$s ? (wo(e, t, i), Tc(e, t, i)) : (W && s && Ti(t), t.flags |= 1, ec(e, t, r, i), t.child);
	}
	function nc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !ii(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, rc(e, t, a, r, i)) : (e = si(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Ec(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? vr : n, n(o, r) && e.ref === t.ref) return Tc(e, t, i);
		}
		return t.flags |= 1, e = ai(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function rc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (vr(a, r) && e.ref === t.ref) if ($s = !1, t.pendingProps = r = a, Ec(e, i)) e.flags & 131072 && ($s = !0);
			else return t.lanes = e.lanes, Tc(e, t, i);
		}
		return dc(e, t, n, r, i);
	}
	function ic(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return oc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && ha(t, a === null ? null : a.cachePool), a === null ? Xa() : Ya(t, a), no(t);
			else return r = t.lanes = 536870912, oc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && ha(t, null), Xa(), ro(t)) : (ha(t, a.cachePool), Ya(t, a), ro(t), t.memoizedState = null);
		return ec(e, t, i, n), t.child;
	}
	function ac(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function oc(e, t, n, r, i) {
		var a = ma();
		return a = a === null ? null : {
			parent: na._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && ha(t, null), Xa(), no(t), e !== null && qi(e, t, r, !0), t.childLanes = i, null;
	}
	function sc(e, t) {
		return t = bc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function cc(e, t, n) {
		return Na(t, e.child, null, n), e = sc(t, t.pendingProps), e.flags |= 2, io(t), t.memoizedState = null, e;
	}
	function lc(e, t, n) {
		var r = t.pendingProps, a = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (W) {
				if (r.mode === "hidden") return e = sc(t, r), t.lanes = 536870912, ac(null, e);
				if (to(t), (e = ki) ? (e = rf(e, ji), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: bi === null ? null : {
						id: xi,
						overflow: Si
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ui(e), n.return = t, t.child = n, Oi = t, ki = null)) : e = null, e === null) throw Ni(t);
				return t.lanes = 536870912, null;
			}
			return sc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (to(t), a) if (t.flags & 256) t.flags &= -257, t = cc(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(i(558));
			else if ($s || qi(e, t, n, !1), a = (n & e.childLanes) !== 0, $s || a) {
				if (r = Il, r !== null && (s = Xe(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Qr(e, s), pu(r, e, s), Qs;
				Tu(), t = cc(e, t, n);
			} else e = o.treeContext, ki = cf(s.nextSibling), Oi = t, W = !0, Ai = null, ji = !1, e !== null && Di(t, e), t = sc(t, r), t.flags |= 4096;
			return t;
		}
		return e = ai(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function uc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function dc(e, t, n, r, i) {
		return Yi(t), n = yo(e, t, n, r, void 0, i), r = Co(), e !== null && !$s ? (wo(e, t, i), Tc(e, t, i)) : (W && r && Ti(t), t.flags |= 1, ec(e, t, n, i), t.child);
	}
	function fc(e, t, n, r, i, a) {
		return Yi(t), t.updateQueue = null, n = xo(t, r, n, i), bo(e), r = Co(), e !== null && !$s ? (wo(e, t, a), Tc(e, t, a)) : (W && r && Ti(t), t.flags |= 1, ec(e, t, n, a), t.child);
	}
	function pc(e, t, n, r, i) {
		if (Yi(t), t.stateNode === null) {
			var a = ti, o = n.contextType;
			typeof o == "object" && o && (a = Xi(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Bs, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Ia(t), o = n.contextType, a.context = typeof o == "object" && o ? Xi(o) : ti, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (zs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Bs.enqueueReplaceState(a, a.state, null), Wa(t, r, a, i), Ua(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Us(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = ti, typeof u == "object" && u && (o = Xi(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Hs(t, a, r, o), Fa = !1;
			var f = t.memoizedState;
			a.state = f, Wa(t, r, a, i), Ua(), l = t.memoizedState, s || f !== l || Fa ? (typeof d == "function" && (zs(t, n, d, r), l = t.memoizedState), (c = Fa || Vs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, La(e, t), o = t.memoizedProps, u = Us(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = ti, typeof l == "object" && l && (c = Xi(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Hs(t, a, r, c), Fa = !1, f = t.memoizedState, a.state = f, Wa(t, r, a, i), Ua();
			var p = t.memoizedState;
			o !== d || f !== p || Fa || e !== null && e.dependencies !== null && Ji(e.dependencies) ? (typeof s == "function" && (zs(t, n, s, r), p = t.memoizedState), (u = Fa || Vs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Ji(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, uc(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Na(t, e.child, null, i), t.child = Na(t, null, n, i)) : ec(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Tc(e, t, i), e;
	}
	function mc(e, t, n, r) {
		return Li(), t.flags |= 256, ec(e, t, n, r), t.child;
	}
	var hc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function gc(e) {
		return {
			baseLanes: e,
			cachePool: ga()
		};
	}
	function _c(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Kl), e;
	}
	function vc(e, t, n) {
		var r = t.pendingProps, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (ao.current & 2) != 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (W) {
				if (a ? eo(t) : ro(t), (e = ki) ? (e = rf(e, ji), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: bi === null ? null : {
						id: xi,
						overflow: Si
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ui(e), n.return = t, t.child = n, Oi = t, ki = null)) : e = null, e === null) throw Ni(t);
				return of(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, a ? (ro(t), a = t.mode, c = bc({
				mode: "hidden",
				children: c
			}, a), r = ci(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = gc(n), r.childLanes = _c(e, s, n), t.memoizedState = hc, ac(null, r)) : (eo(t), yc(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (eo(t), t.flags &= -257, t = xc(e, t, n)) : t.memoizedState === null ? (ro(t), c = r.fallback, a = t.mode, r = bc({
				mode: "visible",
				children: r.children
			}, a), c = ci(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Na(t, e.child, null, n), r = t.child, r.memoizedState = gc(n), r.childLanes = _c(e, s, n), t.memoizedState = hc, t = ac(null, r)) : (ro(t), t.child = e.child, t.flags |= 128, t = null);
			else if (eo(t), of(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(i(419)), r.stack = "", r.digest = s, zi({
					value: r,
					source: null,
					stack: null
				}), t = xc(e, t, n);
			} else if ($s || qi(e, t, n, !1), s = (n & e.childLanes) !== 0, $s || s) {
				if (s = Il, s !== null && (r = Xe(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, Qr(e, r), pu(s, e, r), Qs;
				af(c) || Tu(), t = xc(e, t, n);
			} else af(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, ki = cf(c.nextSibling), Oi = t, W = !0, Ai = null, ji = !1, e !== null && Di(t, e), t = yc(t, r.children), t.flags |= 4096);
			return t;
		}
		return a ? (ro(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = ai(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = ci(c, a, n, null), c.flags |= 2) : c = ai(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, ac(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = gc(n) : (a = c.cachePool, a === null ? a = ga() : (l = na._currentValue, a = a.parent === l ? a : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: a
		}), r.memoizedState = c, r.childLanes = _c(e, s, n), t.memoizedState = hc, ac(e.child, r)) : (eo(t), n = e.child, e = n.sibling, n = ai(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function yc(e, t) {
		return t = bc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function bc(e, t) {
		return e = ri(22, e, null, t), e.lanes = 0, e;
	}
	function xc(e, t, n) {
		return Na(t, e.child, null, n), e = yc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Sc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Gi(e.return, t, n);
	}
	function Cc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function wc(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = ao.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, L(ao, o), ec(e, t, r, n), r = W ? _i : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Sc(e, n, t);
			else if (e.tag === 19) Sc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && oo(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Cc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && oo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				Cc(t, !0, n, null, a, r);
				break;
			case "together":
				Cc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function Tc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Ul |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (qi(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = ai(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = ai(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Ec(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && Ji(e))) : !0;
	}
	function Dc(e, t, n) {
		switch (t.tag) {
			case 3:
				le(t, t.stateNode.containerInfo), Ui(t, na, e.memoizedState.cache), Li();
				break;
			case 27:
			case 5:
				de(t);
				break;
			case 4:
				le(t, t.stateNode.containerInfo);
				break;
			case 10:
				Ui(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, to(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (eo(t), e = Tc(e, t, n), e === null ? null : e.sibling) : vc(e, t, n) : (eo(t), t.flags |= 128, null);
				eo(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (qi(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return wc(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), L(ao, ao.current), r) break;
				return null;
			case 22: return t.lanes = 0, ic(e, t, n, t.pendingProps);
			case 24: Ui(t, na, e.memoizedState.cache);
		}
		return Tc(e, t, n);
	}
	function Oc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) $s = !0;
		else {
			if (!Ec(e, n) && !(t.flags & 128)) return $s = !1, Dc(e, t, n);
			$s = !!(e.flags & 131072);
		}
		else $s = !1, W && t.flags & 1048576 && wi(t, _i, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ca(t.elementType), t.type = e, typeof e == "function") ii(e) ? (r = Us(e, r), t.tag = 1, t = pc(null, t, e, r, n)) : (t.tag = 0, t = dc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === w) {
								t.tag = 11, t = tc(null, t, e, r, n);
								break a;
							} else if (a === D) {
								t.tag = 14, t = nc(null, t, e, r, n);
								break a;
							}
						}
						throw t = N(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return dc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = Us(r, t.pendingProps), pc(e, t, r, a, n);
			case 3:
				a: {
					if (le(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, La(e, t), Wa(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, Ui(t, na, r), r !== o.cache && Ki(t, [na], n, !0), Ua(), r = s.element, o.isDehydrated) if (o = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						t = mc(e, t, r, n);
						break a;
					} else if (r !== a) {
						a = pi(Error(i(424)), t), zi(a), t = mc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (ki = cf(e.firstChild), Oi = t, W = !0, Ai = null, ji = !0, n = Pa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Li(), r === a) {
							t = Tc(e, t, n);
							break a;
						}
						ec(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return uc(e, t), e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : W || (n = t.type, e = t.pendingProps, r = Bd(se.current).createElement(n), r[U] = t, r[nt] = e, Pd(r, n, e), mt(r), t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return de(t), e === null && W && (r = t.stateNode = ff(t.type, t.pendingProps, se.current), Oi = t, ji = !0, a = ki, Zd(t.type) ? (lf = a, ki = cf(r.firstChild)) : ki = a), ec(e, t, t.pendingProps.children, n), uc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && W && ((a = r = ki) && (r = tf(r, t.type, t.pendingProps, ji), r === null ? a = !1 : (t.stateNode = r, Oi = t, ki = cf(r.firstChild), ji = !1, a = !0)), a || Ni(t)), de(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Ud(a, o) ? r = null : s !== null && Ud(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = yo(e, t, So, null, null, n), Qf._currentValue = a), uc(e, t), ec(e, t, r, n), t.child;
			case 6: return e === null && W && ((e = n = ki) && (n = nf(n, t.pendingProps, ji), n === null ? e = !1 : (t.stateNode = n, Oi = t, ki = null, e = !0)), e || Ni(t)), null;
			case 13: return vc(e, t, n);
			case 4: return le(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Na(t, null, r, n) : ec(e, t, r, n), t.child;
			case 11: return tc(e, t, t.type, t.pendingProps, n);
			case 7: return ec(e, t, t.pendingProps, n), t.child;
			case 8: return ec(e, t, t.pendingProps.children, n), t.child;
			case 12: return ec(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, Ui(t, t.type, r.value), ec(e, t, r.children, n), t.child;
			case 9: return a = t.type._context, r = t.pendingProps.children, Yi(t), a = Xi(a), r = r(a), t.flags |= 1, ec(e, t, r, n), t.child;
			case 14: return nc(e, t, t.type, t.pendingProps, n);
			case 15: return rc(e, t, t.type, t.pendingProps, n);
			case 19: return wc(e, t, n);
			case 31: return lc(e, t, n);
			case 22: return ic(e, t, n, t.pendingProps);
			case 24: return Yi(t), r = Xi(na), e === null ? (a = ma(), a === null && (a = Il, o = ra(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, Ia(t), Ui(t, na, a)) : ((e.lanes & n) !== 0 && (La(e, t), Wa(t, null, null, n), Ua()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, Ui(t, na, r), r !== a.cache && Ki(t, [na], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Ui(t, na, r))), ec(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function kc(e) {
		e.flags |= 4;
	}
	function Ac(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (Su()) e.flags |= 8192;
			else throw wa = ba, va;
		} else e.flags &= -16777217;
	}
	function jc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Wf(t)) if (Su()) e.flags |= 8192;
		else throw wa = ba, va;
	}
	function Mc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : We(), e.lanes |= t, ql |= t);
	}
	function Nc(e, t) {
		if (!W) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function Pc(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Fc(e, t, n) {
		var r = t.pendingProps;
		switch (Ei(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Pc(t), null;
			case 1: return Pc(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Wi(na), ue(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ii(t) ? kc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ri())), Pc(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (kc(t), o === null ? (Pc(t), Ac(t, a, null, r, n)) : (Pc(t), jc(t, o))) : o ? o === e.memoizedState ? (Pc(t), t.flags &= -16777217) : (kc(t), Pc(t), jc(t, o)) : (e = e.memoizedProps, e !== r && kc(t), Pc(t), Ac(t, a, e, r, n)), null;
			case 27:
				if (fe(t), n = se.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Pc(t), null;
					}
					e = R.current, Ii(t) ? Pi(t, e) : (e = ff(a, r, n), t.stateNode = e, kc(t));
				}
				return Pc(t), null;
			case 5:
				if (fe(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return Pc(t), null;
					}
					if (o = R.current, Ii(t)) Pi(t, o);
					else {
						var s = Bd(se.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[U] = t, o[nt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Pd(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && kc(t);
					}
				}
				return Pc(t), Ac(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && kc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = se.current, Ii(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Oi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[U] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || jd(e.nodeValue, n)), e || Ni(t, !0);
					} else e = Bd(e).createTextNode(r), e[U] = t, t.stateNode = e;
				}
				return Pc(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Ii(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[U] = t;
						} else Li(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pc(t), e = !1;
					} else n = Ri(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (io(t), t) : (io(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return Pc(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = Ii(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[U] = t;
						} else Li(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pc(t), a = !1;
					} else a = Ri(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (io(t), t) : (io(t), null);
				}
				return io(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Mc(t, t.updateQueue), Pc(t), null);
			case 4: return ue(), e === null && xd(t.stateNode.containerInfo), Pc(t), null;
			case 10: return Wi(t.type), Pc(t), null;
			case 19:
				if (I(ao), r = t.memoizedState, r === null) return Pc(t), null;
				if (a = (t.flags & 128) != 0, o = r.rendering, o === null) if (a) Nc(r, !1);
				else {
					if (Hl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (o = oo(e), o !== null) {
							for (t.flags |= 128, Nc(r, !1), e = o.updateQueue, t.updateQueue = e, Mc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) oi(n, e), n = n.sibling;
							return L(ao, ao.current & 1 | 2), W && Ci(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && B() > $l && (t.flags |= 128, a = !0, Nc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!a) if (e = oo(o), e !== null) {
						if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Mc(t, e), Nc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !W) return Pc(t), null;
					} else 2 * B() - r.renderingStartTime > $l && n !== 536870912 && (t.flags |= 128, a = !0, Nc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (Pc(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = B(), e.sibling = null, n = ao.current, L(ao, a ? n & 1 | 2 : n & 1), W && Ci(t, r.treeForkCount), e);
			case 22:
			case 23: return io(t), Za(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Pc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pc(t), n = t.updateQueue, n !== null && Mc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && I(pa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Wi(na), Pc(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(i(156, t.tag));
	}
	function Ic(e, t) {
		switch (Ei(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Wi(na), ue(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return fe(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (io(t), t.alternate === null) throw Error(i(340));
					Li();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (io(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Li();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return I(ao), null;
			case 4: return ue(), null;
			case 10: return Wi(t.type), null;
			case 22:
			case 23: return io(t), Za(), e !== null && I(pa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Wi(na), null;
			case 25: return null;
			default: return null;
		}
	}
	function Lc(e, t) {
		switch (Ei(t), t.tag) {
			case 3:
				Wi(na), ue();
				break;
			case 26:
			case 27:
			case 5:
				fe(t);
				break;
			case 4:
				ue();
				break;
			case 31:
				t.memoizedState !== null && io(t);
				break;
			case 13:
				io(t);
				break;
			case 19:
				I(ao);
				break;
			case 10:
				Wi(t.type);
				break;
			case 22:
			case 23:
				io(t), Za(), e !== null && I(pa);
				break;
			case 24: Wi(na);
		}
	}
	function Rc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function zc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Uu(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function Bc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Ka(t, n);
			} catch (t) {
				Uu(e, e.return, t);
			}
		}
	}
	function Vc(e, t, n) {
		n.props = Us(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function Hc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Uu(e, t, n);
		}
	}
	function Uc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			Uu(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Uu(e, t, n);
		}
		else n.current = null;
	}
	function Wc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Gc(e, t, n) {
		try {
			var r = e.stateNode;
			Fd(r, e.type, n, t), r[nt] = t;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	function Kc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4;
	}
	function qc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Kc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Jc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jt));
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for (Jc(e, t, n), e = e.sibling; e !== null;) Jc(e, t, n), e = e.sibling;
	}
	function Yc(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (Yc(e, t, n), e = e.sibling; e !== null;) Yc(e, t, n), e = e.sibling;
	}
	function Xc(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Pd(t, r, n), t[U] = e, t[nt] = n;
		} catch (t) {
			Uu(e, e.return, t);
		}
	}
	var Zc = !1, Qc = !1, $c = !1, el = typeof WeakSet == "function" ? WeakSet : Set, tl = null;
	function nl(e, t) {
		if (e = e.containerInfo, Rd = sp, e = Sr(e), Cr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (zd = {
			focusedElem: e,
			selectionRange: n
		}, sp = !1, tl = t; tl !== null;) if (t = tl, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, tl = e;
		else for (; tl !== null;) {
			switch (t = tl, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) a = e[n], a.ref.impl = a.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = Us(n.type, a);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Uu(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) ef(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								ef(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(i(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, tl = e;
				break;
			}
			tl = t.return;
		}
	}
	function rl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				_l(e, n), r & 4 && Rc(5, n);
				break;
			case 1:
				if (_l(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					Uu(n, n.return, e);
				}
				else {
					var i = Us(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						Uu(n, n.return, e);
					}
				}
				r & 64 && Bc(n), r & 512 && Hc(n, n.return);
				break;
			case 3:
				if (_l(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Ka(e, t);
					} catch (e) {
						Uu(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Xc(n);
			case 26:
			case 5:
				_l(e, n), t === null && r & 4 && Wc(n), r & 512 && Hc(n, n.return);
				break;
			case 12:
				_l(e, n);
				break;
			case 31:
				_l(e, n), r & 4 && cl(e, n);
				break;
			case 13:
				_l(e, n), r & 4 && ll(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = qu.bind(null, n), sf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || Zc, !r) {
					t = t !== null && t.memoizedState !== null || Qc, i = Zc;
					var a = Qc;
					Zc = r, (Qc = t) && !a ? yl(e, n, (n.subtreeFlags & 8772) != 0) : _l(e, n), Zc = i, Qc = a;
				}
				break;
			case 30: break;
			default: _l(e, n);
		}
	}
	function il(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && lt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var J = null, al = !1;
	function ol(e, t, n) {
		for (n = n.child; n !== null;) sl(e, t, n), n = n.sibling;
	}
	function sl(e, t, n) {
		if (H && typeof H.onCommitFiberUnmount == "function") try {
			H.onCommitFiberUnmount(je, n);
		} catch {}
		switch (n.tag) {
			case 26:
				Qc || Uc(n, t), ol(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				Qc || Uc(n, t);
				var r = J, i = al;
				Zd(n.type) && (J = n.stateNode, al = !1), ol(e, t, n), pf(n.stateNode), J = r, al = i;
				break;
			case 5: Qc || Uc(n, t);
			case 6:
				if (r = J, i = al, J = null, ol(e, t, n), J = r, al = i, J !== null) if (al) try {
					(J.nodeType === 9 ? J.body : J.nodeName === "HTML" ? J.ownerDocument.body : J).removeChild(n.stateNode);
				} catch (e) {
					Uu(n, t, e);
				}
				else try {
					J.removeChild(n.stateNode);
				} catch (e) {
					Uu(n, t, e);
				}
				break;
			case 18:
				J !== null && (al ? (e = J, Qd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Np(e)) : Qd(J, n.stateNode));
				break;
			case 4:
				r = J, i = al, J = n.stateNode.containerInfo, al = !0, ol(e, t, n), J = r, al = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				zc(2, n, t), Qc || zc(4, n, t), ol(e, t, n);
				break;
			case 1:
				Qc || (Uc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Vc(n, t, r)), ol(e, t, n);
				break;
			case 21:
				ol(e, t, n);
				break;
			case 22:
				Qc = (r = Qc) || n.memoizedState !== null, ol(e, t, n), Qc = r;
				break;
			default: ol(e, t, n);
		}
	}
	function cl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Np(e);
			} catch (e) {
				Uu(t, t.return, e);
			}
		}
	}
	function ll(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Np(e);
		} catch (e) {
			Uu(t, t.return, e);
		}
	}
	function ul(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new el()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new el()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function dl(e, t) {
		var n = ul(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Ju.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function fl(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Zd(c.type)) {
							J = c.stateNode, al = !1;
							break a;
						}
						break;
					case 5:
						J = c.stateNode, al = !1;
						break a;
					case 3:
					case 4:
						J = c.stateNode.containerInfo, al = !0;
						break a;
				}
				c = c.return;
			}
			if (J === null) throw Error(i(160));
			sl(o, s, a), J = null, al = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) ml(t, e), t = t.sibling;
	}
	var pl = null;
	function ml(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				fl(t, e), hl(e), r & 4 && (zc(3, e, e.return), Rc(3, e), zc(5, e, e.return));
				break;
			case 1:
				fl(t, e), hl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), r & 64 && Zc && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var a = pl;
				if (fl(t, e), hl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
							b: switch (r) {
								case "title":
									o = a.getElementsByTagName("title")[0], (!o || o[ct] || o[U] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), Pd(o, r, n), o[U] = e, mt(o), r = o;
									break a;
								case "link":
									var s = Vf("link", "href", a).get(r + (n.href || ""));
									if (s) {
										for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Pd(o, r, n), a.head.appendChild(o);
									break;
								case "meta":
									if (s = Vf("meta", "content", a).get(r + (n.content || ""))) {
										for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Pd(o, r, n), a.head.appendChild(o);
									break;
								default: throw Error(i(468, r));
							}
							o[U] = e, mt(o), r = o;
						}
						e.stateNode = r;
					} else Hf(a, e.type, e.stateNode);
					else e.stateNode = If(a, r, e.memoizedProps);
					else o === r ? r === null && e.stateNode !== null && Gc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Hf(a, e.type, e.stateNode) : If(a, r, e.memoizedProps));
				}
				break;
			case 27:
				fl(t, e), hl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), n !== null && r & 4 && Gc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (fl(t, e), hl(e), r & 512 && (Qc || n === null || Uc(n, n.return)), e.flags & 32) {
					a = e.stateNode;
					try {
						Bt(a, "");
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (a = e.memoizedProps, Gc(e, a, n === null ? a : n.memoizedProps)), r & 1024 && ($c = !0);
				break;
			case 6:
				if (fl(t, e), hl(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Uu(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Bf = null, a = pl, pl = gf(t.containerInfo), fl(t, e), pl = a, hl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Np(t.containerInfo);
				} catch (t) {
					Uu(e, e.return, t);
				}
				$c && ($c = !1, gl(e));
				break;
			case 4:
				r = pl, pl = gf(e.stateNode.containerInfo), fl(t, e), hl(e), pl = r;
				break;
			case 12:
				fl(t, e), hl(e);
				break;
			case 31:
				fl(t, e), hl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, dl(e, r)));
				break;
			case 13:
				fl(t, e), hl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Zl = B()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, dl(e, r)));
				break;
			case 22:
				a = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = Zc, d = Qc;
				if (Zc = u || a, Qc = d || l, fl(t, e), Qc = d, Zc = u, hl(e), r & 8192) a: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || Zc || Qc || vl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, a) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = a ? "" : l.memoizedProps;
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								a ? $d(m, !0) : $d(l.stateNode, !1);
							} catch (e) {
								Uu(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, dl(e, n))));
				break;
			case 19:
				fl(t, e), hl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, dl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: fl(t, e), hl(e);
		}
	}
	function hl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Kc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						Yc(e, qc(e), a);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (Bt(o, ""), n.flags &= -33), Yc(e, qc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						Jc(e, qc(e), s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Uu(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function gl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			gl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function _l(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) rl(e, t.alternate, t), t = t.sibling;
	}
	function vl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					zc(4, t, t.return), vl(t);
					break;
				case 1:
					Uc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Vc(t, t.return, n), vl(t);
					break;
				case 27: pf(t.stateNode);
				case 26:
				case 5:
					Uc(t, t.return), vl(t);
					break;
				case 22:
					t.memoizedState === null && vl(t);
					break;
				case 30:
					vl(t);
					break;
				default: vl(t);
			}
			e = e.sibling;
		}
	}
	function yl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					yl(i, a, n), Rc(4, a);
					break;
				case 1:
					if (yl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Uu(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Ga(c[i], s);
						} catch (e) {
							Uu(r, r.return, e);
						}
					}
					n && o & 64 && Bc(a), Hc(a, a.return);
					break;
				case 27: Xc(a);
				case 26:
				case 5:
					yl(i, a, n), n && r === null && o & 4 && Wc(a), Hc(a, a.return);
					break;
				case 12:
					yl(i, a, n);
					break;
				case 31:
					yl(i, a, n), n && o & 4 && cl(i, a);
					break;
				case 13:
					yl(i, a, n), n && o & 4 && ll(i, a);
					break;
				case 22:
					a.memoizedState === null && yl(i, a, n), Hc(a, a.return);
					break;
				case 30: break;
				default: yl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function bl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ia(n));
	}
	function xl(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ia(e));
	}
	function Sl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Cl(e, t, n, r), t = t.sibling;
	}
	function Cl(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Sl(e, t, n, r), i & 2048 && Rc(9, t);
				break;
			case 1:
				Sl(e, t, n, r);
				break;
			case 3:
				Sl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ia(e)));
				break;
			case 12:
				if (i & 2048) {
					Sl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Uu(t, t.return, e);
					}
				} else Sl(e, t, n, r);
				break;
			case 31:
				Sl(e, t, n, r);
				break;
			case 13:
				Sl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? Sl(e, t, n, r) : (a._visibility |= 2, wl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Sl(e, t, n, r) : Tl(e, t), i & 2048 && bl(o, t);
				break;
			case 24:
				Sl(e, t, n, r), i & 2048 && xl(t.alternate, t);
				break;
			default: Sl(e, t, n, r);
		}
	}
	function wl(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					wl(a, o, s, c, i), Rc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, wl(a, o, s, c, i)) : u._visibility & 2 ? wl(a, o, s, c, i) : Tl(a, o), i && l & 2048 && bl(o.alternate, o);
					break;
				case 24:
					wl(a, o, s, c, i), i && l & 2048 && xl(o.alternate, o);
					break;
				default: wl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Tl(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Tl(n, r), i & 2048 && bl(r.alternate, r);
					break;
				case 24:
					Tl(n, r), i & 2048 && xl(r.alternate, r);
					break;
				default: Tl(n, r);
			}
			t = t.sibling;
		}
	}
	var El = 8192;
	function Dl(e, t, n) {
		if (e.subtreeFlags & El) for (e = e.child; e !== null;) Ol(e, t, n), e = e.sibling;
	}
	function Ol(e, t, n) {
		switch (e.tag) {
			case 26:
				Dl(e, t, n), e.flags & El && e.memoizedState !== null && Gf(n, pl, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Dl(e, t, n);
				break;
			case 3:
			case 4:
				var r = pl;
				pl = gf(e.stateNode.containerInfo), Dl(e, t, n), pl = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = El, El = 16777216, Dl(e, t, n), El = r) : Dl(e, t, n));
				break;
			default: Dl(e, t, n);
		}
	}
	function kl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Al(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tl = r, Nl(r, e);
			}
			kl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) jl(e), e = e.sibling;
	}
	function jl(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Al(e), e.flags & 2048 && zc(9, e, e.return);
				break;
			case 3:
				Al(e);
				break;
			case 12:
				Al(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ml(e)) : Al(e);
				break;
			default: Al(e);
		}
	}
	function Ml(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				tl = r, Nl(r, e);
			}
			kl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					zc(8, t, t.return), Ml(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ml(t));
					break;
				default: Ml(t);
			}
			e = e.sibling;
		}
	}
	function Nl(e, t) {
		for (; tl !== null;) {
			var n = tl;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					zc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ia(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, tl = r;
			else a: for (n = e; tl !== null;) {
				r = tl;
				var i = r.sibling, a = r.return;
				if (il(r), r === n) {
					tl = null;
					break a;
				}
				if (i !== null) {
					i.return = a, tl = i;
					break a;
				}
				tl = a;
			}
		}
	}
	var Pl = {
		getCacheForType: function(e) {
			var t = Xi(na), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Xi(na).controller.signal;
		}
	}, Fl = typeof WeakMap == "function" ? WeakMap : Map, Y = 0, Il = null, X = null, Z = 0, Q = 0, Ll = null, Rl = !1, zl = !1, Bl = !1, Vl = 0, Hl = 0, Ul = 0, Wl = 0, Gl = 0, Kl = 0, ql = 0, Jl = null, Yl = null, Xl = !1, Zl = 0, Ql = 0, $l = Infinity, eu = null, tu = null, nu = 0, ru = null, iu = null, au = 0, ou = 0, su = null, cu = null, lu = 0, uu = null;
	function du() {
		return Y & 2 && Z !== 0 ? Z & -Z : P.T === null ? $e() : ud();
	}
	function fu() {
		if (Kl === 0) if (!(Z & 536870912) || W) {
			var e = Re;
			Re <<= 1, !(Re & 3932160) && (Re = 262144), Kl = e;
		} else Kl = 536870912;
		return e = Qa.current, e !== null && (e.flags |= 32), Kl;
	}
	function pu(e, t, n) {
		(e === Il && (Q === 2 || Q === 9) || e.cancelPendingCommit !== null) && (bu(e, 0), _u(e, Z, Kl, !1)), Ke(e, n), (!(Y & 2) || e !== Il) && (e === Il && (!(Y & 2) && (Wl |= n), Hl === 4 && _u(e, Z, Kl, !1)), nd(e));
	}
	function mu(e, t, n) {
		if (Y & 6) throw Error(i(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || He(e, t), a = r ? Ou(e, t) : Eu(e, t, !0), o = r;
		do {
			if (a === 0) {
				zl && !r && _u(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, o && !gu(n)) {
					a = Eu(e, t, !1), o = !1;
					continue;
				}
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = Jl;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (bu(c, s).flags |= 256), s = Eu(c, s, !1), s !== 2) {
								if (Bl && !l) {
									c.errorRecoveryDisabledLanes |= o, Wl |= o, a = 4;
									break a;
								}
								o = Yl, Yl = a, o !== null && (Yl === null ? Yl = o : Yl.push.apply(Yl, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					bu(e, 0), _u(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							_u(r, t, Kl, !Rl);
							break a;
						case 2:
							Yl = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = Zl + 300 - B(), 10 < a)) {
						if (_u(r, t, Kl, !Rl), Ve(r, 0, !0) !== 0) break a;
						au = t, r.timeoutHandle = Kd(hu.bind(null, r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, "Throttled", -0, 0), a);
						break a;
					}
					hu(r, n, Yl, eu, Xl, t, Kl, Wl, ql, Rl, o, null, -0, 0);
				}
			}
			break;
		} while (1);
		nd(e);
	}
	function hu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: Jt
			}, Ol(t, a, d);
			var m = (a & 62914560) === a ? Zl - B() : (a & 4194048) === a ? Ql - B() : 0;
			if (m = qf(d, m), m !== null) {
				au = a, e.cancelPendingCommit = m(Fu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), _u(e, a, o, !l);
				return;
			}
		}
		Fu(e, t, a, n, r, i, o, s, c);
	}
	function gu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!_r(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function _u(e, t, n, r) {
		t &= ~Gl, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ne(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && Je(e, n, t);
	}
	function vu() {
		return Y & 6 ? !0 : (rd(0, !1), !1);
	}
	function yu() {
		if (X !== null) {
			if (Q === 0) var e = X.return;
			else e = X, Hi = Vi = null, To(e), Da = null, Oa = 0, e = X;
			for (; e !== null;) Lc(e.alternate, e), e = e.return;
			X = null;
		}
	}
	function bu(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, qd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), au = 0, yu(), Il = e, X = n = ai(e.current, null), Z = t, Q = 0, Ll = null, Rl = !1, zl = He(e, t), Bl = !1, ql = Kl = Gl = Wl = Ul = Hl = 0, Yl = Jl = null, Xl = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - Ne(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Vl = t, Yr(), n;
	}
	function xu(e, t) {
		G = null, P.H = Fs, t === _a || t === ya ? (t = Ta(), Q = 3) : t === va ? (t = Ta(), Q = 4) : Q = t === Qs ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Ll = t, X === null && (Hl = 1, qs(e, pi(t, e.current)));
	}
	function Su() {
		var e = Qa.current;
		return e === null ? !0 : (Z & 4194048) === Z ? $a === null : (Z & 62914560) === Z || Z & 536870912 ? e === $a : !1;
	}
	function Cu() {
		var e = P.H;
		return P.H = Fs, e === null ? Fs : e;
	}
	function wu() {
		var e = P.A;
		return P.A = Pl, e;
	}
	function Tu() {
		Hl = 4, Rl || (Z & 4194048) !== Z && Qa.current !== null || (zl = !0), !(Ul & 134217727) && !(Wl & 134217727) || Il === null || _u(Il, Z, Kl, !1);
	}
	function Eu(e, t, n) {
		var r = Y;
		Y |= 2;
		var i = Cu(), a = wu();
		(Il !== e || Z !== t) && (eu = null, bu(e, t)), t = !1;
		var o = Hl;
		a: do
			try {
				if (Q !== 0 && X !== null) {
					var s = X, c = Ll;
					switch (Q) {
						case 8:
							yu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Qa.current === null && (t = !0);
							var l = Q;
							if (Q = 0, Ll = null, Mu(e, s, c, l), n && zl) {
								o = 0;
								break a;
							}
							break;
						default: l = Q, Q = 0, Ll = null, Mu(e, s, c, l);
					}
				}
				Du(), o = Hl;
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Hi = Vi = null, Y = r, P.H = i, P.A = a, X === null && (Il = null, Z = 0, Yr()), o;
	}
	function Du() {
		for (; X !== null;) Au(X);
	}
	function Ou(e, t) {
		var n = Y;
		Y |= 2;
		var r = Cu(), a = wu();
		Il !== e || Z !== t ? (eu = null, $l = B() + 500, bu(e, t)) : zl = He(e, t);
		a: do
			try {
				if (Q !== 0 && X !== null) {
					t = X;
					var o = Ll;
					b: switch (Q) {
						case 1:
							Q = 0, Ll = null, Mu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (xa(o)) {
								Q = 0, Ll = null, ju(t);
								break;
							}
							t = function() {
								Q !== 2 && Q !== 9 || Il !== e || (Q = 7), nd(e);
							}, o.then(t, t);
							break a;
						case 3:
							Q = 7;
							break a;
						case 4:
							Q = 5;
							break a;
						case 7:
							xa(o) ? (Q = 0, Ll = null, ju(t)) : (Q = 0, Ll = null, Mu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (X.tag) {
								case 26: s = X.memoizedState;
								case 5:
								case 27:
									var c = X;
									if (s ? Wf(s) : c.stateNode.complete) {
										Q = 0, Ll = null;
										var l = c.sibling;
										if (l !== null) X = l;
										else {
											var u = c.return;
											u === null ? X = null : (X = u, Nu(u));
										}
										break b;
									}
							}
							Q = 0, Ll = null, Mu(e, t, o, 5);
							break;
						case 6:
							Q = 0, Ll = null, Mu(e, t, o, 6);
							break;
						case 8:
							yu(), Hl = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				ku();
				break;
			} catch (t) {
				xu(e, t);
			}
		while (1);
		return Hi = Vi = null, P.H = r, P.A = a, Y = n, X === null ? (Il = null, Z = 0, Yr(), Hl) : 0;
	}
	function ku() {
		for (; X !== null && !Se();) Au(X);
	}
	function Au(e) {
		var t = Oc(e.alternate, e, Vl);
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : X = t;
	}
	function ju(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = fc(n, t, t.pendingProps, t.type, void 0, Z);
				break;
			case 11:
				t = fc(n, t, t.pendingProps, t.type.render, t.ref, Z);
				break;
			case 5: To(t);
			default: Lc(n, t), t = X = oi(t, Vl), t = Oc(n, t, Vl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Nu(e) : X = t;
	}
	function Mu(e, t, n, r) {
		Hi = Vi = null, To(t), Da = null, Oa = 0;
		var i = t.return;
		try {
			if (Zs(e, i, t, n, Z)) {
				Hl = 1, qs(e, pi(n, e.current)), X = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw X = i, t;
			Hl = 1, qs(e, pi(n, e.current)), X = null;
			return;
		}
		t.flags & 32768 ? (W || r === 1 ? e = !0 : zl || Z & 536870912 ? e = !1 : (Rl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Qa.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Pu(t, e)) : Nu(t);
	}
	function Nu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Pu(t, Rl);
				return;
			}
			e = t.return;
			var n = Fc(t.alternate, t, Vl);
			if (n !== null) {
				X = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				X = t;
				return;
			}
			X = t = e;
		} while (t !== null);
		Hl === 0 && (Hl = 5);
	}
	function Pu(e, t) {
		do {
			var n = Ic(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, X = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				X = e;
				return;
			}
			X = e = n;
		} while (e !== null);
		Hl = 6, X = null;
	}
	function Fu(e, t, n, r, a, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Bu();
		while (nu !== 0);
		if (Y & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (o = t.lanes | t.childLanes, o |= Jr, qe(e, n, o, s, c, l), e === Il && (X = Il = null, Z = 0), iu = t, ru = e, au = n, ou = o, su = a, cu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Yu(Ee, function() {
				return Vu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = P.T, P.T = null, a = F.p, F.p = 2, s = Y, Y |= 4;
				try {
					nl(e, t, n);
				} finally {
					Y = s, F.p = a, P.T = r;
				}
			}
			nu = 1, Iu(), Lu(), Ru();
		}
	}
	function Iu() {
		if (nu === 1) {
			nu = 0;
			var e = ru, t = iu, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = Y;
				Y |= 4;
				try {
					ml(t, e);
					var a = zd, o = Sr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && xr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Cr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = br(s, h), v = br(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					sp = !!Rd, zd = Rd = null;
				} finally {
					Y = i, F.p = r, P.T = n;
				}
			}
			e.current = t, nu = 2;
		}
	}
	function Lu() {
		if (nu === 2) {
			nu = 0;
			var e = ru, t = iu, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = P.T, P.T = null;
				var r = F.p;
				F.p = 2;
				var i = Y;
				Y |= 4;
				try {
					rl(e, t.alternate, t);
				} finally {
					Y = i, F.p = r, P.T = n;
				}
			}
			nu = 3;
		}
	}
	function Ru() {
		if (nu === 4 || nu === 3) {
			nu = 0, Ce();
			var e = ru, t = iu, n = au, r = cu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? nu = 5 : (nu = 0, iu = ru = null, zu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (tu = null), Qe(n), t = t.stateNode, H && typeof H.onCommitFiberRoot == "function") try {
				H.onCommitFiberRoot(je, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = P.T, i = F.p, F.p = 2, P.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					P.T = t, F.p = i;
				}
			}
			au & 3 && Bu(), nd(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === uu ? lu++ : (lu = 0, uu = e) : lu = 0, rd(0, !1);
		}
	}
	function zu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ia(t)));
	}
	function Bu() {
		return Iu(), Lu(), Ru(), Vu();
	}
	function Vu() {
		if (nu !== 5) return !1;
		var e = ru, t = ou;
		ou = 0;
		var n = Qe(au), r = P.T, a = F.p;
		try {
			F.p = 32 > n ? 32 : n, P.T = null, n = su, su = null;
			var o = ru, s = au;
			if (nu = 0, iu = ru = null, au = 0, Y & 6) throw Error(i(331));
			var c = Y;
			if (Y |= 4, jl(o.current), Cl(o, o.current, s, n), Y = c, rd(0, !1), H && typeof H.onPostCommitFiberRoot == "function") try {
				H.onPostCommitFiberRoot(je, o);
			} catch {}
			return !0;
		} finally {
			F.p = a, P.T = r, zu(e, t);
		}
	}
	function Hu(e, t, n) {
		t = pi(n, t), t = Ys(e.stateNode, t, 2), e = za(e, t, 2), e !== null && (Ke(e, 2), nd(e));
	}
	function Uu(e, t, n) {
		if (e.tag === 3) Hu(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Hu(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tu === null || !tu.has(r))) {
					e = pi(n, e), n = q(2), r = za(t, n, 2), r !== null && (Xs(n, r, t, e), Ke(r, 2), nd(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Wu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Fl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Bl = !0, i.add(n), e = Gu.bind(null, e, t, n), t.then(e, e));
	}
	function Gu(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Il === e && (Z & n) === n && (Hl === 4 || Hl === 3 && (Z & 62914560) === Z && 300 > B() - Zl ? !(Y & 2) && bu(e, 0) : Gl |= n, ql === Z && (ql = 0)), nd(e);
	}
	function Ku(e, t) {
		t === 0 && (t = We()), e = Qr(e, t), e !== null && (Ke(e, t), nd(e));
	}
	function qu(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Ku(e, n);
	}
	function Ju(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), Ku(e, n);
	}
	function Yu(e, t) {
		return be(e, t);
	}
	var Xu = null, Zu = null, Qu = !1, $u = !1, ed = !1, td = 0;
	function nd(e) {
		e !== Zu && e.next === null && (Zu === null ? Xu = Zu = e : Zu = Zu.next = e), $u = !0, Qu || (Qu = !0, ld());
	}
	function rd(e, t) {
		if (!ed && $u) {
			ed = !0;
			do
				for (var n = !1, r = Xu; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - Ne(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, cd(r, a));
					} else a = Z, a = Ve(r, r === Il ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || He(r, a) || (n = !0, cd(r, a));
					r = r.next;
				}
			while (n);
			ed = !1;
		}
	}
	function id() {
		ad();
	}
	function ad() {
		$u = Qu = !1;
		var e = 0;
		td !== 0 && Gd() && (e = td);
		for (var t = B(), n = null, r = Xu; r !== null;) {
			var i = r.next, a = od(r, t);
			a === 0 ? (r.next = null, n === null ? Xu = i : n.next = i, i === null && (Zu = n)) : (n = r, (e !== 0 || a & 3) && ($u = !0)), r = i;
		}
		nu !== 0 && nu !== 5 || rd(e, !1), td !== 0 && (td = 0);
	}
	function od(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ne(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ue(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Il, n = Z, n = Ve(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Q === 2 || Q === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && xe(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || He(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && xe(r), Qe(n)) {
				case 2:
				case 8:
					n = V;
					break;
				case 32:
					n = Ee;
					break;
				case 268435456:
					n = Oe;
					break;
				default: n = Ee;
			}
			return r = sd.bind(null, e), n = be(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && xe(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function sd(e, t) {
		if (nu !== 0 && nu !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Bu() && e.callbackNode !== n) return null;
		var r = Z;
		return r = Ve(e, e === Il ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (mu(e, r, t), od(e, B()), e.callbackNode != null && e.callbackNode === n ? sd.bind(null, e) : null);
	}
	function cd(e, t) {
		if (Bu()) return null;
		mu(e, t, !0);
	}
	function ld() {
		Yd(function() {
			Y & 6 ? be(Te, id) : ad();
		});
	}
	function ud() {
		if (td === 0) {
			var e = sa;
			e === 0 && (e = Le, Le <<= 1, !(Le & 261888) && (Le = 256)), td = e;
		}
		return td;
	}
	function dd(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qt("" + e);
	}
	function fd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function pd(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = dd((i[nt] || null).action), o = r.submitter;
			o && (t = (t = o[nt] || null) ? dd(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new gn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (td !== 0) {
								var e = o ? fd(i, o) : new FormData(i);
								xs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? fd(i, o) : new FormData(i), xs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var md = 0; md < Ur.length; md++) {
		var hd = Ur[md];
		Wr(hd.toLowerCase(), "on" + (hd[0].toUpperCase() + hd.slice(1)));
	}
	Wr(Fr, "onAnimationEnd"), Wr(Ir, "onAnimationIteration"), Wr(Lr, "onAnimationStart"), Wr("dblclick", "onDoubleClick"), Wr("focusin", "onFocus"), Wr("focusout", "onBlur"), Wr(Rr, "onTransitionRun"), Wr(zr, "onTransitionStart"), Wr(Br, "onTransitionCancel"), Wr(Vr, "onTransitionEnd"), vt("onMouseEnter", ["mouseout", "mouseover"]), vt("onMouseLeave", ["mouseout", "mouseover"]), vt("onPointerEnter", ["pointerout", "pointerover"]), vt("onPointerLeave", ["pointerout", "pointerover"]), _t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _t("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), _t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var gd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _d = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gd));
	function vd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Gr(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Gr(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function $(e, t) {
		var n = t[it];
		n === void 0 && (n = t[it] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Sd(t, e, 2, !1), n.add(r));
	}
	function yd(e, t, n) {
		var r = 0;
		t && (r |= 4), Sd(n, e, r, t);
	}
	var bd = "_reactListening" + Math.random().toString(36).slice(2);
	function xd(e) {
		if (!e[bd]) {
			e[bd] = !0, ht.forEach(function(t) {
				t !== "selectionchange" && (_d.has(t) || yd(t, !1, e), yd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[bd] || (t[bd] = !0, yd("selectionchange", !1, t));
		}
	}
	function Sd(e, t, n, r) {
		switch (mp(t)) {
			case 2:
				var i = cp;
				break;
			case 8:
				i = lp;
				break;
			default: i = up;
		}
		n = i.bind(null, t, n, e), i = void 0, !an || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Cd(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = ut(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		tn(function() {
			var r = a, i = Xt(n), s = [];
			a: {
				var c = Hr.get(e);
				if (c !== void 0) {
					var l = gn, u = e;
					switch (e) {
						case "keypress": if (dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Pn;
							break;
						case "focusin":
							u = "focus", l = Tn;
							break;
						case "focusout":
							u = "blur", l = Tn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Tn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Cn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = wn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = In;
							break;
						case Fr:
						case Ir:
						case Lr:
							l = En;
							break;
						case Vr:
							l = Ln;
							break;
						case "scroll":
						case "scrollend":
							l = vn;
							break;
						case "wheel":
							l = Rn;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Dn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Fn;
							break;
						case "toggle":
						case "beforetoggle": l = zn;
					}
					var d = (t & 4) != 0, f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = nn(m, p), g != null && d.push(wd(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== Yt && (u = n.relatedTarget || n.fromElement) && (ut(u) || u[rt])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? ut(u) : null, u !== null && (f = o(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = Cn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Fn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : ft(l), h = u == null ? c : ft(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, ut(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = Ed, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Dd(s, c, l, d, !1), u !== null && f !== null && Dd(s, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? ft(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = ar;
					else if ($n(c)) if (or) v = hr;
					else {
						v = pr;
						var y = fr;
					}
					else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && Wt(r.elementType) && (v = ar) : v = mr;
					if (v &&= v(e, r)) {
						er(s, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && It(c, "number", c.value);
				}
				switch (y = r ? ft(r) : window, e) {
					case "focusin":
						($n(y) || y.contentEditable === "true") && (Tr = y, Er = r, Dr = null);
						break;
					case "focusout":
						Dr = Er = Tr = null;
						break;
					case "mousedown":
						Or = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Or = !1, kr(s, n, i);
						break;
					case "selectionchange": if (wr) break;
					case "keydown":
					case "keyup": kr(s, n, i);
				}
				var b;
				if (Vn) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else Yn ? qn(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (Wn && n.locale !== "ko" && (Yn || x !== "onCompositionStart" ? x === "onCompositionEnd" && Yn && (b = un()) : (sn = i, cn = "value" in sn ? sn.value : sn.textContent, Yn = !0)), y = Td(r, x), 0 < y.length && (x = new On(x, e, null, n, i), s.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = Jn(n), b !== null && (x.data = b)))), (b = Un ? Xn(e, n) : Zn(e, n)) && (x = Td(r, "onBeforeInput"), 0 < x.length && (y = new On("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: y,
					listeners: x
				}), y.data = b)), pd(s, e, r, n, i);
			}
			vd(s, t);
		});
	}
	function wd(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Td(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = nn(e, n), i != null && r.unshift(wd(e, i, a)), i = nn(e, t), i != null && r.push(wd(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Ed(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Dd(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = nn(n, a), l != null && o.unshift(wd(n, l, c))) : i || (l = nn(n, a), l != null && o.push(wd(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Od = /\r\n?/g, kd = /\u0000|\uFFFD/g;
	function Ad(e) {
		return (typeof e == "string" ? e : "" + e).replace(Od, "\n").replace(kd, "");
	}
	function jd(e, t) {
		return t = Ad(t), Ad(e) === t;
	}
	function Md(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || Bt(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && Bt(e, "" + r);
				break;
			case "className":
				wt(e, "class", r);
				break;
			case "tabIndex":
				wt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				wt(e, n, r);
				break;
			case "style":
				Ut(e, r, o);
				break;
			case "data": if (t !== "object") {
				wt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = qt("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof o == "function" && (n === "formAction" ? (t !== "input" && Md(e, t, "name", a.name, a, null), Md(e, t, "formEncType", a.formEncType, a, null), Md(e, t, "formMethod", a.formMethod, a, null), Md(e, t, "formTarget", a.formTarget, a, null)) : (Md(e, t, "encType", a.encType, a, null), Md(e, t, "method", a.method, a, null), Md(e, t, "target", a.target, a, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = qt("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = Jt);
				break;
			case "onScroll":
				r != null && $("scroll", e);
				break;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = qt("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				$("beforetoggle", e), $("toggle", e), Ct(e, "popover", r);
				break;
			case "xlinkActuate":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Tt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Tt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Ct(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Gt.get(n) || n, Ct(e, n, r));
		}
	}
	function Nd(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				Ut(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? Bt(e, r) : (typeof r == "number" || typeof r == "bigint") && Bt(e, "" + r);
				break;
			case "onScroll":
				r != null && $("scroll", e);
				break;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = Jt);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!gt.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), o = e[nt] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, a), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Ct(e, n, r);
			}
		}
	}
	function Pd(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				$("error", e), $("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: Md(e, t, o, s, n, null);
					}
				}
				a && Md(e, t, "srcSet", n.srcSet, n, null), r && Md(e, t, "src", n.src, n, null);
				return;
			case "input":
				$("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: Md(e, t, r, d, n, null);
					}
				}
				Ft(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in $("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Md(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Lt(e, !!r, n, !0) : Lt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in $("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: Md(e, t, s, c, n, null);
				}
				zt(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Md(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				$("beforetoggle", e), $("toggle", e), $("cancel", e), $("close", e);
				break;
			case "iframe":
			case "object":
				$("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < gd.length; r++) $(gd[r], e);
				break;
			case "image":
				$("error", e), $("load", e);
				break;
			case "details":
				$("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": $("error", e), $("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: Md(e, t, u, r, n, null);
				}
				return;
			default: if (Wt(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Nd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Md(e, t, c, r, n, null));
	}
	function Fd(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || Md(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							a = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && Md(e, t, p, m, r, f);
					}
				}
				Pt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || Md(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && Md(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Lt(e, !!n, n ? [] : "", !1) : Lt(e, !!n, t, !0)) : Lt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Md(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && Md(e, t, s, a, r, o);
				}
				Rt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Md(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Md(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Md(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: Md(e, t, u, p, r, m);
				}
				return;
			default: if (Wt(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Md(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Md(e, t, f, p, r, m);
	}
	function Id(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Ld() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Id(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Id(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var Rd = null, zd = null;
	function Bd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Vd(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Hd(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Ud(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Wd = null;
	function Gd() {
		var e = window.event;
		return e && e.type === "popstate" ? e === Wd ? !1 : (Wd = e, !0) : (Wd = null, !1);
	}
	var Kd = typeof setTimeout == "function" ? setTimeout : void 0, qd = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, Yd = typeof queueMicrotask == "function" ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
		return Jd.resolve(null).then(e).catch(Xd);
	};
	function Xd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Zd(e) {
		return e === "head";
	}
	function Qd(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Np(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") pf(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, pf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[ct] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && pf(e.ownerDocument.body);
			n = i;
		} while (n);
		Np(t);
	}
	function $d(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function ef(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					ef(n), lt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function tf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[ct]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = cf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function nf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function rf(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function of(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function sf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function cf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var lf = null;
	function uf(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return cf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function df(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function ff(e, t, n) {
		switch (t = Bd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function pf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		lt(e);
	}
	var mf = /* @__PURE__ */ new Map(), hf = /* @__PURE__ */ new Set();
	function gf(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var _f = F.d;
	F.d = {
		f: vf,
		r: yf,
		D: Sf,
		C: Cf,
		L: wf,
		m: Tf,
		X: Df,
		S: Ef,
		M: Of
	};
	function vf() {
		var e = _f.f(), t = vu();
		return e || t;
	}
	function yf(e) {
		var t = dt(e);
		t !== null && t.tag === 5 && t.type === "form" ? Cs(t) : _f.r(e);
	}
	var bf = typeof document > "u" ? null : document;
	function xf(e, t, n) {
		var r = bf;
		if (r && typeof t == "string" && t) {
			var i = Nt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), hf.has(i) || (hf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Pd(t, "link", e), mt(t), r.head.appendChild(t)));
		}
	}
	function Sf(e) {
		_f.D(e), xf("dns-prefetch", e, null);
	}
	function Cf(e, t) {
		_f.C(e, t), xf("preconnect", e, t);
	}
	function wf(e, t, n) {
		_f.L(e, t, n);
		var r = bf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Nt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Nt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Nt(n.imageSizes) + "\"]")) : i += "[href=\"" + Nt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Af(e);
					break;
				case "script": a = Pf(e);
			}
			mf.has(a) || (e = h({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), mf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(jf(a)) || t === "script" && r.querySelector(Ff(a)) || (t = r.createElement("link"), Pd(t, "link", e), mt(t), r.head.appendChild(t)));
		}
	}
	function Tf(e, t) {
		_f.m(e, t);
		var n = bf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Nt(r) + "\"][href=\"" + Nt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Pf(e);
			}
			if (!mf.has(a) && (e = h({
				rel: "modulepreload",
				href: e
			}, t), mf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(Ff(a))) return;
				}
				r = n.createElement("link"), Pd(r, "link", e), mt(r), n.head.appendChild(r);
			}
		}
	}
	function Ef(e, t, n) {
		_f.S(e, t, n);
		var r = bf;
		if (r && e) {
			var i = pt(r).hoistableStyles, a = Af(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(jf(a))) s.loading = 5;
				else {
					e = h({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = mf.get(a)) && Rf(e, n);
					var c = o = r.createElement("link");
					mt(c), Pd(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Lf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Df(e, t) {
		_f.X(e, t);
		var n = bf;
		if (n && e) {
			var r = pt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = h({
				src: e,
				async: !0
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), mt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Of(e, t) {
		_f.M(e, t);
		var n = bf;
		if (n && e) {
			var r = pt(n).hoistableScripts, i = Pf(e), a = r.get(i);
			a || (a = n.querySelector(Ff(i)), a || (e = h({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = mf.get(i)) && zf(e, t), a = n.createElement("script"), mt(a), Pd(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t, n, r) {
		var a = (a = se.current) ? gf(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Af(n.href), n = pt(a).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Af(n.href);
					var o = pt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(jf(e))) && !o._p && (s.instance = o, s.state.loading = 5), mf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, mf.set(e, n), o || Nf(a, e, n, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Pf(n), n = pt(a).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Af(e) {
		return "href=\"" + Nt(e) + "\"";
	}
	function jf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Mf(e) {
		return h({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Nf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Pd(t, "link", n), mt(t), e.head.appendChild(t));
	}
	function Pf(e) {
		return "[src=\"" + Nt(e) + "\"]";
	}
	function Ff(e) {
		return "script[async]" + e;
	}
	function If(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Nt(n.href) + "\"]");
				if (r) return t.instance = r, mt(r), r;
				var a = h({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), mt(r), Pd(r, "style", a), Lf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Af(n.href);
				var o = e.querySelector(jf(a));
				if (o) return t.state.loading |= 4, t.instance = o, mt(o), o;
				r = Mf(n), (a = mf.get(a)) && Rf(r, a), o = (e.ownerDocument || e).createElement("link"), mt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Pd(o, "link", r), t.state.loading |= 4, Lf(o, n.precedence, e), t.instance = o;
			case "script": return o = Pf(n.src), (a = e.querySelector(Ff(o))) ? (t.instance = a, mt(a), a) : (r = n, (a = mf.get(o)) && (r = h({}, n), zf(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), mt(a), Pd(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Lf(r, n.precedence, e));
		return t.instance;
	}
	function Lf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Rf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Bf = null;
	function Vf(e, t, n) {
		if (Bf === null) {
			var r = /* @__PURE__ */ new Map(), i = Bf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Bf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[ct] || a[U] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Hf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Uf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Wf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Gf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Af(r.href), a = t.querySelector(jf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Jf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, mt(a);
					return;
				}
				a = t.ownerDocument || t, r = Mf(r), (i = mf.get(i)) && Rf(r, i), a = a.createElement("link"), mt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Pd(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Jf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var Kf = 0;
	function qf(e, t) {
		return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > Kf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Jf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Xf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Yf = null;
	function Xf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Yf = /* @__PURE__ */ new Map(), t.forEach(Zf, e), Yf = null, Jf.call(e));
	}
	function Zf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Yf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Yf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Jf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Qf = {
		$$typeof: C,
		Provider: null,
		Consumer: null,
		_currentValue: ne,
		_currentValue2: ne,
		_threadCount: 0
	};
	function $f(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ge(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ge(0), this.hiddenUpdates = Ge(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new $f(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = ri(3, null, null, t), e.current = a, a.stateNode = e, t = ra(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Ia(a), e;
	}
	function tp(e) {
		return e ? (e = ti, e) : ti;
	}
	function np(e, t, n, r, i, a) {
		i = tp(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ra(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = za(e, r, t), n !== null && (pu(n, e, t), Ba(n, e, t));
	}
	function rp(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ip(e, t) {
		rp(e, t), (e = e.alternate) && rp(e, t);
	}
	function ap(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Qr(e, 67108864);
			t !== null && pu(t, e, 67108864), ip(e, 67108864);
		}
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = du();
			t = Ze(t);
			var n = Qr(e, t);
			n !== null && pu(n, e, t), ip(e, t);
		}
	}
	var sp = !0;
	function cp(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 2, up(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function lp(e, t, n, r) {
		var i = P.T;
		P.T = null;
		var a = F.p;
		try {
			F.p = 8, up(e, t, n, r);
		} finally {
			F.p = a, P.T = i;
		}
	}
	function up(e, t, n, r) {
		if (sp) {
			var i = dp(r);
			if (i === null) Cd(e, t, r, fp, n), Cp(e, r);
			else if (Tp(i, e, t, n, r)) r.stopPropagation();
			else if (Cp(e, r), t & 4 && -1 < Sp.indexOf(e)) {
				for (; i !== null;) {
					var a = dt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Be(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ne(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									nd(a), !(Y & 6) && ($l = B() + 500, rd(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Qr(a, 2), s !== null && pu(s, a, 2), vu(), ip(a, 2);
					}
					if (a = dp(r), a === null && Cd(e, t, r, fp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Cd(e, t, r, null, n);
		}
	}
	function dp(e) {
		return e = Xt(e), pp(e);
	}
	var fp = null;
	function pp(e) {
		if (fp = null, e = ut(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return fp = e, null;
	}
	function mp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (we()) {
				case Te: return 2;
				case V: return 8;
				case Ee:
				case De: return 32;
				case Oe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var hp = !1, gp = null, _p = null, vp = null, yp = /* @__PURE__ */ new Map(), bp = /* @__PURE__ */ new Map(), xp = [], Sp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Cp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				gp = null;
				break;
			case "dragenter":
			case "dragleave":
				_p = null;
				break;
			case "mouseover":
			case "mouseout":
				vp = null;
				break;
			case "pointerover":
			case "pointerout":
				yp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": bp.delete(t.pointerId);
		}
	}
	function wp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = dt(t), t !== null && ap(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Tp(e, t, n, r, i) {
		switch (t) {
			case "focusin": return gp = wp(gp, e, t, n, r, i), !0;
			case "dragenter": return _p = wp(_p, e, t, n, r, i), !0;
			case "mouseover": return vp = wp(vp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Ep(e) {
		var t = ut(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, et(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, et(e.priority, function() {
							op(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Dp(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = dp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Yt = r, n.target.dispatchEvent(r), Yt = null;
			} else return t = dt(n), t !== null && ap(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Op(e, t, n) {
		Dp(e) && n.delete(t);
	}
	function kp() {
		hp = !1, gp !== null && Dp(gp) && (gp = null), _p !== null && Dp(_p) && (_p = null), vp !== null && Dp(vp) && (vp = null), yp.forEach(Op), bp.forEach(Op);
	}
	function Ap(e, n) {
		e.blockedOn === n && (e.blockedOn = null, hp || (hp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)));
	}
	var jp = null;
	function Mp(e) {
		jp !== e && (jp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			jp === e && (jp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (pp(r || n) === null) continue;
					break;
				}
				var a = dt(n);
				a !== null && (e.splice(t, 3), t -= 3, xs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Np(e) {
		function t(t) {
			return Ap(t, e);
		}
		gp !== null && Ap(gp, e), _p !== null && Ap(_p, e), vp !== null && Ap(vp, e), yp.forEach(t), bp.forEach(t);
		for (var n = 0; n < xp.length; n++) {
			var r = xp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < xp.length && (n = xp[0], n.blockedOn === null);) Ep(n), n.blockedOn === null && xp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[nt] || null;
			if (typeof a == "function") o || Mp(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[nt] || null) s = o.formAction;
					else if (pp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Mp(n);
			}
		}
	}
	function Pp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Fp(e) {
		this._internalRoot = e;
	}
	Ip.prototype.render = Fp.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		np(n, du(), e, t, null, null);
	}, Ip.prototype.unmount = Fp.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			np(e.current, 2, null, e, null, null), vu(), t[rt] = null;
		}
	};
	function Ip(e) {
		this._internalRoot = e;
	}
	Ip.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = $e();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++);
			xp.splice(n, 0, e), n === 0 && Ep(e);
		}
	};
	var Lp = n.version;
	if (Lp !== "19.2.6") throw Error(i(527, Lp, "19.2.6"));
	F.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var Rp = {
		bundleType: 0,
		version: "19.2.6",
		rendererPackageName: "react-dom",
		currentDispatcherRef: P,
		reconcilerVersion: "19.2.6"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!zp.isDisabled && zp.supportsFiber) try {
			je = zp.inject(Rp), H = zp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = Ws, s = Gs, c = Ks;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp), e[rt] = t.current, xd(e), new Fp(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), v = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), y = (e) => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()), b = (e) => {
	let t = y(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, x = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, S = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, C = /* @__PURE__ */ c(u(), 1), w = (0, C.createContext)({}), T = () => (0, C.useContext)(w), E = (0, C.forwardRef)(({ color: e, size: t, strokeWidth: n, absoluteStrokeWidth: r, className: i = "", children: a, iconNode: o, ...s }, c) => {
	let { size: l = 24, strokeWidth: u = 2, absoluteStrokeWidth: d = !1, color: f = "currentColor", className: p = "" } = T() ?? {}, m = r ?? d ? Number(n ?? u) * 24 / Number(t ?? l) : n ?? u;
	return (0, C.createElement)("svg", {
		ref: c,
		...x,
		width: t ?? l ?? x.width,
		height: t ?? l ?? x.height,
		stroke: e ?? f,
		strokeWidth: m,
		className: _("lucide", p, i),
		...!a && !S(s) && { "aria-hidden": "true" },
		...s
	}, [...o.map(([e, t]) => (0, C.createElement)(e, t)), ...Array.isArray(a) ? a : [a]]);
}), D = (e, t) => {
	let n = (0, C.forwardRef)(({ className: n, ...r }, i) => (0, C.createElement)(E, {
		ref: i,
		iconNode: t,
		className: _(`lucide-${v(b(e))}`, `lucide-${e}`, n),
		...r
	}));
	return n.displayName = b(e), n;
}, O = D("book-open", [["path", {
	d: "M12 5v16",
	key: "1f6ucr"
}], ["path", {
	d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
	key: "1fyvmf"
}]]), ee = D("brain-circuit", [
	["path", {
		d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
		key: "l5xja"
	}],
	["path", {
		d: "M9 13a4.5 4.5 0 0 0 3-4",
		key: "10igwf"
	}],
	["path", {
		d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
		key: "105sqy"
	}],
	["path", {
		d: "M3.477 10.896a4 4 0 0 1 .585-.396",
		key: "ql3yin"
	}],
	["path", {
		d: "M6 18a4 4 0 0 1-1.967-.516",
		key: "2e4loj"
	}],
	["path", {
		d: "M12 13h4",
		key: "1ku699"
	}],
	["path", {
		d: "M12 18h6a2 2 0 0 1 2 2v1",
		key: "105ag5"
	}],
	["path", {
		d: "M12 8h8",
		key: "1lhi5i"
	}],
	["path", {
		d: "M16 8V5a2 2 0 0 1 2-2",
		key: "u6izg6"
	}],
	["circle", {
		cx: "16",
		cy: "13",
		r: ".5",
		key: "ry7gng"
	}],
	["circle", {
		cx: "18",
		cy: "3",
		r: ".5",
		key: "1aiba7"
	}],
	["circle", {
		cx: "20",
		cy: "21",
		r: ".5",
		key: "yhc1fs"
	}],
	["circle", {
		cx: "20",
		cy: "8",
		r: ".5",
		key: "1e43v0"
	}]
]), k = D("calculator", [
	["rect", {
		width: "16",
		height: "20",
		x: "4",
		y: "2",
		rx: "2",
		key: "1nb95v"
	}],
	["line", {
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6",
		key: "x4nwl0"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18",
		key: "wjye3r"
	}],
	["path", {
		d: "M16 10h.01",
		key: "1m94wz"
	}],
	["path", {
		d: "M12 10h.01",
		key: "1nrarc"
	}],
	["path", {
		d: "M8 10h.01",
		key: "19clt8"
	}],
	["path", {
		d: "M12 14h.01",
		key: "1etili"
	}],
	["path", {
		d: "M8 14h.01",
		key: "6423bh"
	}],
	["path", {
		d: "M12 18h.01",
		key: "mhygvu"
	}],
	["path", {
		d: "M8 18h.01",
		key: "lrp35t"
	}]
]), A = D("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), j = D("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), M = D("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), N = D("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), te = D("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), P = D("flask-conical", [
	["path", {
		d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
		key: "18mbvz"
	}],
	["path", {
		d: "M6.453 15h11.094",
		key: "3shlmq"
	}],
	["path", {
		d: "M8.5 2h7",
		key: "csnxdl"
	}]
]), F = D("folder-open", [["path", {
	d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
	key: "usdka0"
}]]), ne = D("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), re = D("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), ie = D("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), ae = D("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), I = D("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), L = D("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]), R = Object.defineProperty, oe = (e, t) => R(e, "name", {
	value: t,
	configurable: !0
});
function se(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
oe(se, "setRef");
function ce(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = se(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : se(e[t], null);
			}
		};
	};
}
oe(ce, "composeRefs");
function le(...e) {
	return C.useCallback(ce(...e), e);
}
oe(le, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-primitive/node_modules/@radix-ui/react-slot/dist/index.mjs
var ue = Object.defineProperty, de = (e, t) => ue(e, "name", {
	value: t,
	configurable: !0
});
/* @__NO_SIDE_EFFECTS__ */
function fe(e) {
	let t = C.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		ye(r) && typeof Ce == "function" && (r = Ce(r._payload)), C.Children.forEach(r, (e) => {
			if (_e(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				ye(n) && typeof Ce == "function" && (n = Ce(n._payload)), a = he(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = C.cloneElement(a, void 0, s) : !o && C.Children.count(r) === 1 && C.isValidElement(r) && (a = r);
		let c = a ? z(a) : void 0, l = le(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? Se(e) : xe(e));
			return r;
		}
		let u = ge(i, a.props ?? {});
		return a.type !== C.Fragment && (u.ref = n ? l : c), C.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
de(fe, "createSlot");
var pe = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function me(e) {
	let t = /* @__PURE__ */ de((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = pe, t;
}
de(me, "createSlottable");
var he = /* @__PURE__ */ de((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return C.isValidElement(t) ? C.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return C.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function ge(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
de(ge, "mergeProps");
function z(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
de(z, "getElementRef");
function _e(e) {
	return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pe;
}
de(_e, "isSlottable");
var ve = Symbol.for("react.lazy");
function ye(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === ve && "_payload" in e && be(e._payload);
}
de(ye, "isLazyComponent");
function be(e) {
	return typeof e == "object" && !!e && "then" in e;
}
de(be, "isPromiseLike");
var xe = /* @__PURE__ */ de((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Se = /* @__PURE__ */ de((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ce = C.use, B = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), we = /* @__PURE__ */ o(((e, t) => {
	t.exports = B();
})), Te = /* @__PURE__ */ c(m(), 1), V = we(), Ee = Object.defineProperty, De = (e, t) => Ee(e, "name", {
	value: t,
	configurable: !0
}), Oe = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = /* @__PURE__ */ fe(`Primitive.${t}`), r = C.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, V.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function ke(e, t) {
	e && Te.flushSync(() => e.dispatchEvent(t));
}
De(ke, "dispatchDiscreteCustomEvent");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Ae = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), je = Object.defineProperty, H = (e, t) => je(e, "name", {
	value: t,
	configurable: !0
});
/* @__NO_SIDE_EFFECTS__ */
function Me(e, t) {
	let n = C.createContext(t);
	n.displayName = e + "Context";
	let r = /* @__PURE__ */ H((e) => {
		let { children: t, ...r } = e, i = C.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, V.jsx)(n.Provider, {
			value: i,
			children: t
		});
	}, "Provider");
	r.displayName = e + "Provider";
	function i(r, i = {}) {
		let { optional: a = !1 } = i, o = C.useContext(n);
		if (o) return o;
		if (t !== void 0) return t;
		if (!a) throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return H(i, "useContext"), [r, i];
}
H(Me, "createContext");
/* @__NO_SIDE_EFFECTS__ */
function Ne(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = C.createContext(r);
		i.displayName = t + "Context";
		let a = n.length;
		n = [...n, r];
		let o = /* @__PURE__ */ H((t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, c = C.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, V.jsx)(s.Provider, {
				value: c,
				children: r
			});
		}, "Provider");
		o.displayName = t + "Provider";
		function s(n, o, s = {}) {
			let { optional: c = !1 } = s, l = o?.[e]?.[a] || i, u = C.useContext(l);
			if (u) return u;
			if (r !== void 0) return r;
			if (!c) throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return H(s, "useContext"), [o, s];
	}
	H(r, "createContext");
	let i = /* @__PURE__ */ H(() => {
		let t = n.map((e) => C.createContext(e));
		return /* @__PURE__ */ H(function(n) {
			let r = n?.[e] || t;
			return C.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		}, "useScope");
	}, "createScope");
	return i.scopeName = e, [r, Pe(i, ...t)];
}
H(Ne, "createContextScope");
function Pe(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = /* @__PURE__ */ H(() => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return /* @__PURE__ */ H(function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return C.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		}, "useComposedScopes");
	}, "createScope");
	return n.scopeName = t.scopeName, n;
}
H(Pe, "composeContextScopes");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Fe = Object.defineProperty, Ie = (e, t) => Fe(e, "name", {
	value: t,
	configurable: !0
});
function Le(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Ie(Le, "setRef");
function Re(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = Le(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : Le(e[t], null);
			}
		};
	};
}
Ie(Re, "composeRefs");
function ze(...e) {
	return C.useCallback(Re(...e), e);
}
Ie(ze, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-collection/node_modules/@radix-ui/react-slot/dist/index.mjs
var Be = Object.defineProperty, Ve = (e, t) => Be(e, "name", {
	value: t,
	configurable: !0
});
/* @__NO_SIDE_EFFECTS__ */
function He(e) {
	let t = C.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		Xe(r) && typeof et == "function" && (r = et(r._payload)), C.Children.forEach(r, (e) => {
			if (Je(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Xe(n) && typeof et == "function" && (n = et(n._payload)), a = Ge(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = C.cloneElement(a, void 0, s) : !o && C.Children.count(r) === 1 && C.isValidElement(r) && (a = r);
		let c = a ? qe(a) : void 0, l = ze(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? $e(e) : Qe(e));
			return r;
		}
		let u = Ke(i, a.props ?? {});
		return a.type !== C.Fragment && (u.ref = n ? l : c), C.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
Ve(He, "createSlot");
var Ue = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function We(e) {
	let t = /* @__PURE__ */ Ve((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Ue, t;
}
Ve(We, "createSlottable");
var Ge = /* @__PURE__ */ Ve((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return C.isValidElement(t) ? C.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return C.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Ke(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
Ve(Ke, "mergeProps");
function qe(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ve(qe, "getElementRef");
function Je(e) {
	return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ue;
}
Ve(Je, "isSlottable");
var Ye = Symbol.for("react.lazy");
function Xe(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Ye && "_payload" in e && Ze(e._payload);
}
Ve(Xe, "isLazyComponent");
function Ze(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Ve(Ze, "isPromiseLike");
var Qe = /* @__PURE__ */ Ve((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), $e = /* @__PURE__ */ Ve((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), et = C.use, tt = Object.defineProperty, U = (e, t) => tt(e, "name", {
	value: t,
	configurable: !0
});
/* @__NO_SIDE_EFFECTS__ */
function nt(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Ne(t), [i, a] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), o = /* @__PURE__ */ U((e) => {
		let { scope: t, children: n } = e, r = C.useRef(null), a = C.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, V.jsx)(i, {
			scope: t,
			itemMap: a,
			collectionRef: r,
			children: n
		});
	}, "CollectionProvider");
	o.displayName = t;
	let s = e + "CollectionSlot", c = /* @__PURE__ */ He(s), l = C.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, V.jsx)(c, {
			ref: ze(t, a(s, n).collectionRef),
			children: r
		});
	});
	l.displayName = s;
	let u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ He(u), p = C.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = C.useRef(null), s = ze(t, o), c = a(u, n);
		return C.useEffect(() => (c.itemMap.set(o, {
			ref: o,
			...i
		}), () => void c.itemMap.delete(o))), /* @__PURE__ */ (0, V.jsx)(f, {
			[d]: "",
			ref: s,
			children: r
		});
	});
	p.displayName = u;
	function m(t) {
		let n = a(e + "CollectionConsumer", t);
		return C.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${d}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return U(m, "useCollection"), [
		{
			Provider: o,
			Slot: l,
			ItemSlot: p
		},
		m,
		r
	];
}
U(nt, "createCollection");
var rt = /* @__PURE__ */ new WeakMap(), it = class e extends Map {
	static {
		U(this, "OrderedDict");
	}
	#e;
	constructor(e) {
		super(e), this.#e = [...super.keys()], rt.set(this, !0);
	}
	set(e, t) {
		return rt.get(this) && (this.has(e) ? this.#e[this.#e.indexOf(e)] = e : this.#e.push(e)), super.set(e, t), this;
	}
	insert(e, t, n) {
		let r = this.has(t), i = this.#e.length, a = st(e), o = a >= 0 ? a : i + a, s = o < 0 || o >= i ? -1 : o;
		if (s === this.size || r && s === this.size - 1 || s === -1) return this.set(t, n), this;
		let c = this.size + +!r;
		a < 0 && o++;
		let l = [...this.#e], u, d = !1;
		for (let e = o; e < c; e++) if (o === e) {
			let i = l[e];
			l[e] === t && (i = l[e + 1]), r && this.delete(t), u = this.get(i), this.set(t, n);
		} else {
			!d && l[e - 1] === t && (d = !0);
			let n = l[d ? e : e - 1], r = u;
			u = this.get(n), this.delete(n), this.set(n, r);
		}
		return this;
	}
	with(t, n, r) {
		let i = new e(this);
		return i.insert(t, n, r), i;
	}
	before(e) {
		let t = this.#e.indexOf(e) - 1;
		if (!(t < 0)) return this.entryAt(t);
	}
	setBefore(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r, t, n);
	}
	after(e) {
		let t = this.#e.indexOf(e);
		if (t = t === -1 || t === this.size - 1 ? -1 : t + 1, t !== -1) return this.entryAt(t);
	}
	setAfter(e, t, n) {
		let r = this.#e.indexOf(e);
		return r === -1 ? this : this.insert(r + 1, t, n);
	}
	first() {
		return this.entryAt(0);
	}
	last() {
		return this.entryAt(-1);
	}
	clear() {
		return this.#e = [], super.clear();
	}
	delete(e) {
		let t = super.delete(e);
		return t && this.#e.splice(this.#e.indexOf(e), 1), t;
	}
	deleteAt(e) {
		let t = this.keyAt(e);
		return t === void 0 ? !1 : this.delete(t);
	}
	at(e) {
		let t = at(this.#e, e);
		if (t !== void 0) return this.get(t);
	}
	entryAt(e) {
		let t = at(this.#e, e);
		if (t !== void 0) return [t, this.get(t)];
	}
	indexOf(e) {
		return this.#e.indexOf(e);
	}
	keyAt(e) {
		return at(this.#e, e);
	}
	from(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.at(r);
	}
	keyFrom(e, t) {
		let n = this.indexOf(e);
		if (n === -1) return;
		let r = n + t;
		return r < 0 && (r = 0), r >= this.size && (r = this.size - 1), this.keyAt(r);
	}
	find(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return r;
			n++;
		}
	}
	findIndex(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return n;
			n++;
		}
		return -1;
	}
	filter(t, n) {
		let r = [], i = 0;
		for (let e of this) Reflect.apply(t, n, [
			e,
			i,
			this
		]) && r.push(e), i++;
		return new e(r);
	}
	map(t, n) {
		let r = [], i = 0;
		for (let e of this) r.push([e[0], Reflect.apply(t, n, [
			e,
			i,
			this
		])]), i++;
		return new e(r);
	}
	reduce(...e) {
		let [t, n] = e, r = 0, i = n ?? this.at(0);
		for (let n of this) i = r === 0 && e.length === 1 ? n : Reflect.apply(t, this, [
			i,
			n,
			r,
			this
		]), r++;
		return i;
	}
	reduceRight(...e) {
		let [t, n] = e, r = n ?? this.at(-1);
		for (let n = this.size - 1; n >= 0; n--) {
			let i = this.at(n);
			r = n === this.size - 1 && e.length === 1 ? i : Reflect.apply(t, this, [
				r,
				i,
				n,
				this
			]);
		}
		return r;
	}
	toSorted(t) {
		return new e([...this.entries()].sort(t));
	}
	toReversed() {
		let t = new e();
		for (let e = this.size - 1; e >= 0; e--) {
			let n = this.keyAt(e), r = this.get(n);
			t.set(n, r);
		}
		return t;
	}
	toSpliced(...t) {
		let n = [...this.entries()];
		return n.splice(...t), new e(n);
	}
	slice(t, n) {
		let r = new e(), i = this.size - 1;
		if (t === void 0) return r;
		t < 0 && (t += this.size), n !== void 0 && n > 0 && (i = n - 1);
		for (let e = t; e <= i; e++) {
			let t = this.keyAt(e), n = this.get(t);
			r.set(t, n);
		}
		return r;
	}
	every(e, t) {
		let n = 0;
		for (let r of this) {
			if (!Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !1;
			n++;
		}
		return !0;
	}
	some(e, t) {
		let n = 0;
		for (let r of this) {
			if (Reflect.apply(e, t, [
				r,
				n,
				this
			])) return !0;
			n++;
		}
		return !1;
	}
};
function at(e, t) {
	if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
	let n = ot(e, t);
	return n === -1 ? void 0 : e[n];
}
U(at, "at");
function ot(e, t) {
	let n = e.length, r = st(t), i = r >= 0 ? r : n + r;
	return i < 0 || i >= n ? -1 : i;
}
U(ot, "toSafeIndex");
function st(e) {
	return e !== e || e === 0 ? 0 : Math.trunc(e);
}
U(st, "toSafeInteger");
/* @__NO_SIDE_EFFECTS__ */
function ct(e) {
	let t = e + "CollectionProvider", [n, r] = /* @__PURE__ */ Ne(t), [i, a] = n(t, {
		collectionElement: null,
		collectionRef: { current: null },
		collectionRefObject: { current: null },
		itemMap: new it(),
		setItemMap: /* @__PURE__ */ U(() => void 0, "setItemMap")
	}), o = /* @__PURE__ */ U(({ state: e, ...t }) => e ? /* @__PURE__ */ (0, V.jsx)(c, {
		...t,
		state: e
	}) : /* @__PURE__ */ (0, V.jsx)(s, { ...t }), "CollectionProvider");
	o.displayName = t;
	let s = /* @__PURE__ */ U((e) => {
		let t = h();
		return /* @__PURE__ */ (0, V.jsx)(c, {
			...e,
			state: t
		});
	}, "CollectionInit");
	s.displayName = t + "Init";
	let c = /* @__PURE__ */ U((e) => {
		let { scope: t, children: n, state: r } = e, a = C.useRef(null), [o, s] = C.useState(null), c = ze(a, s), [l, u] = r;
		return C.useEffect(() => {
			if (!o) return;
			let e = ft(() => {});
			return e.observe(o, {
				childList: !0,
				subtree: !0
			}), () => {
				e.disconnect();
			};
		}, [o]), /* @__PURE__ */ (0, V.jsx)(i, {
			scope: t,
			itemMap: l,
			setItemMap: u,
			collectionRef: c,
			collectionRefObject: a,
			collectionElement: o,
			children: n
		});
	}, "CollectionProviderImpl");
	c.displayName = t + "Impl";
	let l = e + "CollectionSlot", u = /* @__PURE__ */ He(l), d = C.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, V.jsx)(u, {
			ref: ze(t, a(l, n).collectionRef),
			children: r
		});
	});
	d.displayName = l;
	let f = e + "CollectionItemSlot", p = /* @__PURE__ */ He(f), m = C.forwardRef((e, t) => {
		let { scope: n, children: r, ...i } = e, o = C.useRef(null), [s, c] = C.useState(null), l = ze(t, o, c), { setItemMap: u } = a(f, n), d = C.useRef(i);
		lt(d.current, i) || (d.current = i);
		let m = d.current;
		return C.useEffect(() => {
			let e = m;
			return u((t) => s ? t.has(s) ? t.set(s, {
				...e,
				element: s
			}).toSorted(dt) : (t.set(s, {
				...e,
				element: s
			}), t.toSorted(dt)) : t), () => {
				u((e) => !s || !e.has(s) ? e : (e.delete(s), new it(e)));
			};
		}, [
			s,
			m,
			u
		]), /* @__PURE__ */ (0, V.jsx)(p, {
			"data-radix-collection-item": "",
			ref: l,
			children: r
		});
	});
	m.displayName = f;
	function h() {
		return C.useState(new it());
	}
	U(h, "useInitCollection");
	function g(t) {
		let { itemMap: n } = a(e + "CollectionConsumer", t);
		return n;
	}
	return U(g, "useCollection"), [{
		Provider: o,
		Slot: d,
		ItemSlot: m
	}, {
		createCollectionScope: r,
		useCollection: g,
		useInitCollection: h
	}];
}
U(ct, "createCollection");
function lt(e, t) {
	if (e === t) return !0;
	if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
	let n = Object.keys(e), r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (let r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
	return !0;
}
U(lt, "shallowEqual");
function ut(e, t) {
	return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
U(ut, "isElementPreceding");
function dt(e, t) {
	return !e[1].element || !t[1].element ? 0 : ut(e[1].element, t[1].element) ? -1 : 1;
}
U(dt, "sortByDocumentPosition");
function ft(e) {
	return new MutationObserver((t) => {
		for (let n of t) if (n.type === "childList") {
			e();
			return;
		}
	});
}
U(ft, "getChildListObserver");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/primitive/dist/index.mjs
var pt = Object.defineProperty, mt = (e, t) => pt(e, "name", {
	value: t,
	configurable: !0
}), ht = !!(typeof window < "u" && window.document && window.document.createElement);
function gt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return /* @__PURE__ */ mt(function(r) {
		if (e?.(r), n === !1 || !r || !r.defaultPrevented) return t?.(r);
	}, "handleEvent");
}
mt(gt, "composeEventHandlers");
function _t(e) {
	if (!ht) throw Error("Cannot access window outside of the DOM");
	return e?.ownerDocument?.defaultView ?? window;
}
mt(_t, "getOwnerWindow");
function vt(e) {
	if (!ht) throw Error("Cannot access document outside of the DOM");
	return e?.ownerDocument ?? document;
}
mt(vt, "getOwnerDocument");
function yt(e, t = !1) {
	let { activeElement: n } = vt(e);
	if (!n?.nodeName) return null;
	if (bt(n) && n.contentDocument) return yt(n.contentDocument.body, t);
	if (t) {
		let e = n.getAttribute("aria-activedescendant");
		if (e) {
			let t = vt(n).getElementById(e);
			if (t) return t;
		}
	}
	return n;
}
mt(yt, "getActiveElement");
function bt(e) {
	return e.tagName === "IFRAME";
}
mt(bt, "isFrame");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var xt = globalThis?.document ? C.useLayoutEffect : () => {}, St = Object.defineProperty, Ct = (e, t) => St(e, "name", {
	value: t,
	configurable: !0
}), wt = C.useEffectEvent, Tt = C.useInsertionEffect;
function Et(e) {
	if (typeof wt == "function") return wt(e);
	let t = C.useRef(() => {
		throw Error("Cannot call an event handler while rendering.");
	});
	return typeof Tt == "function" ? Tt(() => {
		t.current = e;
	}) : xt(() => {
		t.current = e;
	}), C.useMemo(() => ((...e) => t.current?.(...e)), []);
}
Ct(Et, "useEffectEvent");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Dt = Object.defineProperty, Ot = (e, t) => Dt(e, "name", {
	value: t,
	configurable: !0
}), kt = C.useInsertionEffect || xt;
function At({ prop: e, defaultProp: t, onChange: n = /* @__PURE__ */ Ot(() => {}, "onChange"), caller: r }) {
	let [i, a, o] = jt({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0;
	return [s ? e : i, C.useCallback((t) => {
		if (s) {
			let n = Mt(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
Ot(At, "useControllableState");
function jt({ defaultProp: e, onChange: t }) {
	let [n, r] = C.useState(e), i = C.useRef(n), a = C.useRef(t);
	return kt(() => {
		a.current = t;
	}, [t]), C.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
Ot(jt, "useUncontrolledState");
function Mt(e) {
	return typeof e == "function";
}
Ot(Mt, "isFunction");
var Nt = Symbol("RADIX:SYNC_STATE");
function Pt(e, t, n, r) {
	let { prop: i, defaultProp: a, onChange: o, caller: s } = t, c = i !== void 0, l = Et(o), u = [{
		...n,
		state: a
	}];
	r && u.push(r);
	let [d, f] = C.useReducer((t, n) => {
		if (n.type === Nt) return {
			...t,
			state: n.state
		};
		let r = e(t, n);
		return c && !Object.is(r.state, t.state) && l(r.state), r;
	}, ...u), p = d.state, m = C.useRef(p);
	C.useEffect(() => {
		m.current !== p && (m.current = p, c || l(p));
	}, [
		p,
		m,
		c
	]);
	let h = C.useMemo(() => i === void 0 ? d : {
		...d,
		state: i
	}, [d, i]);
	return C.useEffect(() => {
		c && !Object.is(i, d.state) && f({
			type: Nt,
			state: i
		});
	}, [
		i,
		d.state,
		c
	]), [h, f];
}
Ot(Pt, "useControllableStateReducer");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-presence/dist/index.mjs
var Ft = Object.defineProperty, It = (e, t) => Ft(e, "name", {
	value: t,
	configurable: !0
});
function Lt(e, t) {
	return C.useReducer((e, n) => t[e][n] ?? e, e);
}
It(Lt, "useStateMachine");
var Rt = /* @__PURE__ */ It((e) => {
	let { present: t, children: n } = e, r = zt(t), i = typeof n == "function" ? n({ present: r.isPresent }) : C.Children.only(n), a = Vt(r.ref, Ut(i));
	return typeof n == "function" || r.isPresent ? C.cloneElement(i, { ref: a }) : null;
}, "Presence");
function zt(e) {
	let [t, n] = C.useState(), r = C.useRef(null), i = C.useRef(e), a = C.useRef("none"), o = C.useRef(void 0), [s, c] = Lt(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return C.useEffect(() => {
		s === "mounted" ? (a.current = o.current ?? Ht(r.current), o.current = void 0) : a.current = "none";
	}, [s]), xt(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, s = Ht(t);
			e ? (o.current = s, c("MOUNT")) : s === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== s ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, c]), xt(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = /* @__PURE__ */ It((a) => {
				let o = Ht(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (c("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, "handleAnimationEnd"), s = /* @__PURE__ */ It((e) => {
				e.target === t && (a.current = Ht(r.current));
			}, "handleAnimationStart");
			return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else c("ANIMATION_END");
	}, [t, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: C.useCallback((e) => {
			if (e) {
				let t = getComputedStyle(e);
				r.current = t, o.current = Ht(t);
			} else r.current = null;
			n(e);
		}, [])
	};
}
It(zt, "usePresence");
function Bt(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
It(Bt, "setRef");
function Vt(...e) {
	let t = C.useRef(e);
	return t.current = e, C.useCallback((e) => {
		let n = t.current, r = !1, i = n.map((t) => {
			let n = Bt(t, e);
			return !r && typeof n == "function" && (r = !0), n;
		});
		if (r) return () => {
			for (let e = 0; e < i.length; e++) {
				let t = i[e];
				typeof t == "function" ? t() : Bt(n[e], null);
			}
		};
	}, []);
}
It(Vt, "useStableComposedRefs");
function Ht(e) {
	return e?.animationName || "none";
}
It(Ht, "getAnimationName");
function Ut(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
It(Ut, "getElementRef");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-id/dist/index.mjs
var Wt = Object.defineProperty, Gt = (e, t) => Wt(e, "name", {
	value: t,
	configurable: !0
}), Kt = C.useId || (() => void 0), qt = 0;
function Jt(e) {
	let [t, n] = C.useState(Kt());
	return xt(() => {
		e || n((e) => e ?? String(qt++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
Gt(Jt, "useId");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-direction/dist/index.mjs
var Yt = Object.defineProperty, Xt = (e, t) => Yt(e, "name", {
	value: t,
	configurable: !0
}), Zt = C.createContext(void 0);
function Qt(e) {
	let t = C.useContext(Zt);
	return e || t || "ltr";
}
Xt(Qt, "useDirection");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-dismissable-layer/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var $t = Object.defineProperty, en = (e, t) => $t(e, "name", {
	value: t,
	configurable: !0
});
function tn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
en(tn, "setRef");
function nn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = tn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : tn(e[t], null);
			}
		};
	};
}
en(nn, "composeRefs");
function rn(...e) {
	return C.useCallback(nn(...e), e);
}
en(rn, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var an = Object.defineProperty, on = (e, t) => an(e, "name", {
	value: t,
	configurable: !0
});
function sn(e) {
	let t = C.useRef(e);
	return C.useEffect(() => {
		t.current = e;
	}), C.useMemo(() => ((...e) => t.current?.(...e)), []);
}
on(sn, "useCallbackRef");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var cn = Object.defineProperty, ln = (e, t) => cn(e, "name", {
	value: t,
	configurable: !0
}), un = "dismissableLayer.update", dn = "dismissableLayer.pointerDownOutside", fn = "dismissableLayer.focusOutside", pn, mn = C.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set(),
	dismissableSurfaces: /* @__PURE__ */ new Set()
}), hn = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ ln(function(e, t) {
	let { disableOutsidePointerEvents: n = !1, deferPointerDownOutside: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, onDismiss: c, ...l } = e, u = C.useContext(mn), [d, f] = C.useState(null), p = d?.ownerDocument ?? globalThis?.document, [, m] = C.useState({}), h = rn(t, f), g = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = _ ? g.indexOf(_) : -1, y = d ? g.indexOf(d) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= v, S = C.useRef(!1), w = vn((e) => {
		a?.(e), s?.(e), e.defaultPrevented || c?.();
	}, {
		ownerDocument: p,
		deferPointerDownOutside: r,
		isDeferredPointerDownOutsideRef: S,
		dismissableSurfaces: u.dismissableSurfaces,
		shouldHandlePointerDownOutside: C.useCallback((e) => {
			if (!(e instanceof Node)) return !1;
			let t = [...u.branches].some((t) => t.contains(e));
			return x && !t;
		}, [u.branches, x])
	}), T = yn((e) => {
		if (r && S.current) return;
		let t = e.target;
		[...u.branches].some((e) => e.contains(t)) || (o?.(e), s?.(e), e.defaultPrevented || c?.());
	}, p), E = d ? y === g.length - 1 : !1, D = sn((e) => {
		e.key === "Escape" && (i?.(e), !e.defaultPrevented && c && (e.preventDefault(), c()));
	});
	return C.useEffect(() => {
		if (E) return p.addEventListener("keydown", D, { capture: !0 }), () => p.removeEventListener("keydown", D, { capture: !0 });
	}, [
		p,
		E,
		D
	]), C.useEffect(() => {
		if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (pn = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), bn(), () => {
			n && (u.layersWithOutsidePointerEventsDisabled.delete(d), u.layersWithOutsidePointerEventsDisabled.size === 0 && (p.body.style.pointerEvents = pn));
		};
	}, [
		d,
		p,
		n,
		u
	]), C.useEffect(() => () => {
		d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), bn());
	}, [d, u]), C.useEffect(() => {
		let e = /* @__PURE__ */ ln(() => m({}), "handleUpdate");
		return document.addEventListener(un, e), () => document.removeEventListener(un, e);
	}, []), /* @__PURE__ */ (0, V.jsx)(Oe.div, {
		...l,
		ref: h,
		style: {
			pointerEvents: b ? x ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: gt(e.onFocusCapture, T.onFocusCapture),
		onBlurCapture: gt(e.onBlurCapture, T.onBlurCapture),
		onPointerDownCapture: gt(e.onPointerDownCapture, w.onPointerDownCapture)
	});
}, "DismissableLayer"));
function gn() {
	let e = C.useContext(mn), [t, n] = C.useState(null);
	return C.useEffect(() => {
		if (t) return e.dismissableSurfaces.add(t), () => {
			e.dismissableSurfaces.delete(t);
		};
	}, [t, e.dismissableSurfaces]), n;
}
ln(gn, "useDismissableLayerSurface");
var _n = /* @__PURE__ */ ln(() => !0, "IS_TRUE");
function vn(e, t) {
	let { ownerDocument: n = globalThis?.document, deferPointerDownOutside: r = !1, isDeferredPointerDownOutsideRef: i, dismissableSurfaces: a, shouldHandlePointerDownOutside: o = _n } = t, s = sn(e), c = C.useRef(!1), l = C.useRef(!1), u = C.useRef(/* @__PURE__ */ new Map()), d = C.useRef(() => {});
	return C.useEffect(() => {
		function e() {
			l.current = !1, i.current = !1, u.current.clear();
		}
		ln(e, "resetOutsideInteraction");
		function t() {
			return Array.from(u.current.values()).some(Boolean);
		}
		ln(t, "isOutsideInteractionIntercepted");
		function f(e) {
			if (!l.current) return;
			let t = e.target;
			t instanceof Node && [...a].some((e) => e.contains(t)) || u.current.set(e.type, !0), e.type === "click" && window.setTimeout(() => {
				l.current && d.current();
			}, 0);
		}
		ln(f, "handleInteractionCapture");
		function p(e) {
			l.current && u.current.set(e.type, !1);
		}
		ln(p, "handleInteractionBubble");
		let m = /* @__PURE__ */ ln((a) => {
			if (a.target && !c.current) {
				let f = function() {
					n.removeEventListener("click", d.current);
					let r = t();
					e(), r || xn(dn, s, p, { discrete: !0 });
				};
				if (ln(f, "handleAndDispatchPointerDownOutsideEvent"), !o(a.target)) {
					n.removeEventListener("click", d.current), e(), c.current = !1;
					return;
				}
				let p = { originalEvent: a };
				l.current = !0, i.current = r && a.button === 0, u.current.clear(), !r || a.button !== 0 ? f() : (n.removeEventListener("click", d.current), d.current = f, n.addEventListener("click", d.current, { once: !0 }));
			} else n.removeEventListener("click", d.current), e();
			c.current = !1;
		}, "handlePointerDown"), h = [
			"pointerup",
			"mousedown",
			"mouseup",
			"touchstart",
			"touchend",
			"click"
		];
		for (let e of h) n.addEventListener(e, f, !0), n.addEventListener(e, p);
		let g = window.setTimeout(() => {
			n.addEventListener("pointerdown", m);
		}, 0);
		return () => {
			window.clearTimeout(g), n.removeEventListener("pointerdown", m), n.removeEventListener("click", d.current);
			for (let e of h) n.removeEventListener(e, f, !0), n.removeEventListener(e, p);
		};
	}, [
		n,
		s,
		r,
		i,
		a,
		o
	]), { onPointerDownCapture: /* @__PURE__ */ ln(() => c.current = !0, "onPointerDownCapture") };
}
ln(vn, "usePointerDownOutside");
function yn(e, t = globalThis?.document) {
	let n = sn(e), r = C.useRef(!1);
	return C.useEffect(() => {
		let e = /* @__PURE__ */ ln((e) => {
			e.target && !r.current && xn(fn, n, { originalEvent: e }, { discrete: !1 });
		}, "handleFocus");
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: /* @__PURE__ */ ln(() => r.current = !0, "onFocusCapture"),
		onBlurCapture: /* @__PURE__ */ ln(() => r.current = !1, "onBlurCapture")
	};
}
ln(yn, "useFocusOutside");
function bn() {
	let e = new CustomEvent(un);
	document.dispatchEvent(e);
}
ln(bn, "dispatchUpdate");
function xn(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? ke(i, a) : i.dispatchEvent(a);
}
ln(xn, "handleAndDispatchCustomEvent");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-focus-scope/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var Sn = Object.defineProperty, Cn = (e, t) => Sn(e, "name", {
	value: t,
	configurable: !0
});
function wn(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
Cn(wn, "setRef");
function Tn(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = wn(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : wn(e[t], null);
			}
		};
	};
}
Cn(Tn, "composeRefs");
function En(...e) {
	return C.useCallback(Tn(...e), e);
}
Cn(En, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var Dn = Object.defineProperty, On = (e, t) => Dn(e, "name", {
	value: t,
	configurable: !0
}), kn = "focusScope.autoFocusOnMount", An = "focusScope.autoFocusOnUnmount", jn = {
	bubbles: !1,
	cancelable: !0
}, Mn = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ On(function(e, t) {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e, [s, c] = C.useState(null), l = sn(i), u = sn(a), d = C.useRef(null), f = En(t, c), p = C.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	C.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (p.paused || !s) return;
				let t = e.target;
				s.contains(t) ? d.current = t : zn(d.current, { select: !0 });
			}, t = function(e) {
				if (p.paused || !s) return;
				let t = e.relatedTarget;
				t !== null && (s.contains(t) || zn(d.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && zn(s);
			};
			On(e, "handleFocusIn"), On(t, "handleFocusOut"), On(n, "handleMutations"), document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return s && r.observe(s, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		s,
		p.paused
	]), C.useEffect(() => {
		if (s) {
			Bn.add(p);
			let e = document.activeElement;
			if (!s.contains(e)) {
				let t = new CustomEvent(kn, jn);
				s.addEventListener(kn, l), s.dispatchEvent(t), t.defaultPrevented || (Nn(Un(Fn(s)), { select: !0 }), document.activeElement === e && zn(s));
			}
			return () => {
				s.removeEventListener(kn, l), setTimeout(() => {
					let t = new CustomEvent(An, jn);
					s.addEventListener(An, u), s.dispatchEvent(t), t.defaultPrevented || zn(e ?? document.body, { select: !0 }), s.removeEventListener(An, u), Bn.remove(p);
				}, 0);
			};
		}
	}, [
		s,
		l,
		u,
		p
	]);
	let m = C.useCallback((e) => {
		if (!n && !r || p.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = Pn(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && zn(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && zn(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		p.paused
	]);
	return /* @__PURE__ */ (0, V.jsx)(Oe.div, {
		tabIndex: -1,
		...o,
		ref: f,
		onKeyDown: m
	});
}, "FocusScope"));
function Nn(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (zn(r, { select: t }), document.activeElement !== n) return;
}
On(Nn, "focusFirst");
function Pn(e) {
	let t = Fn(e);
	return [In(t, e), In(t.reverse(), e)];
}
On(Pn, "getTabbableEdges");
function Fn(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: /* @__PURE__ */ On((e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	}, "acceptNode") });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
On(Fn, "getTabbableCandidates");
function In(e, t) {
	let n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
	for (let r of e) if (!(n ? !r.checkVisibility({ checkVisibilityCSS: !0 }) : Ln(r, { upTo: t }))) return r;
}
On(In, "findVisible");
function Ln(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
On(Ln, "isHidden");
function Rn(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
On(Rn, "isSelectableInput");
function zn(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Rn(e) && t && e.select();
	}
}
On(zn, "focus");
var Bn = Vn();
function Vn() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Hn(e, t), e.unshift(t);
		},
		remove(t) {
			e = Hn(e, t), e[0]?.resume();
		}
	};
}
On(Vn, "createFocusScopesStack");
function Hn(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
On(Hn, "arrayRemove");
function Un(e) {
	return e.filter((e) => e.tagName !== "A");
}
On(Un, "removeLinks");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-portal/dist/index.mjs
var Wn = Object.defineProperty, Gn = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ ((e, t) => Wn(e, "name", {
	value: t,
	configurable: !0
}))(function(e, t) {
	let { container: n, ...r } = e, [i, a] = C.useState(!1);
	xt(() => a(!0), []);
	let o = n || i && globalThis?.document?.body;
	return o ? Te.createPortal(/* @__PURE__ */ (0, V.jsx)(Oe.div, {
		...r,
		ref: t
	}), o) : null;
}, "Portal")), Kn = Object.defineProperty, qn = (e, t) => Kn(e, "name", {
	value: t,
	configurable: !0
}), Jn = 0, Yn = null;
function Xn(e) {
	return Zn(), e.children;
}
qn(Xn, "FocusGuards");
function Zn() {
	C.useEffect(() => {
		Yn ||= {
			start: Qn(),
			end: Qn()
		};
		let { start: e, end: t } = Yn;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Jn++, () => {
			Jn === 1 && (Yn?.start.remove(), Yn?.end.remove(), Yn = null), Jn = Math.max(0, Jn - 1);
		};
	}, []);
}
qn(Zn, "useFocusGuards");
function Qn() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
qn(Qn, "createFocusGuard");
//#endregion
//#region lady-interactiva/node_modules/tslib/tslib.es6.mjs
var $n = function() {
	return $n = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, $n.apply(this, arguments);
};
function er(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function tr(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region lady-interactiva/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var nr = "right-scroll-bar-position", rr = "width-before-scroll-bar", ir = "with-scroll-bars-hidden", ar = "--removed-body-scroll-bar-size";
//#endregion
//#region lady-interactiva/node_modules/use-callback-ref/dist/es2015/assignRef.js
function or(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region lady-interactiva/node_modules/use-callback-ref/dist/es2015/useRef.js
function sr(e, t) {
	var n = (0, C.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region lady-interactiva/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var cr = typeof window < "u" ? C.useLayoutEffect : C.useEffect, lr = /* @__PURE__ */ new WeakMap();
function ur(e, t) {
	var n = sr(t || null, function(t) {
		return e.forEach(function(e) {
			return or(e, t);
		});
	});
	return cr(function() {
		var t = lr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || or(e, null);
			}), i.forEach(function(e) {
				r.has(e) || or(e, a);
			});
		}
		lr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region lady-interactiva/node_modules/use-sidecar/dist/es2015/medium.js
function dr(e) {
	return e;
}
function fr(e, t) {
	t === void 0 && (t = dr);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function pr(e) {
	e === void 0 && (e = {});
	var t = fr(null);
	return t.options = $n({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region lady-interactiva/node_modules/use-sidecar/dist/es2015/exports.js
var mr = function(e) {
	var t = e.sideCar, n = er(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return C.createElement(r, $n({}, n));
};
mr.isSideCarExport = !0;
function hr(e, t) {
	return e.useMedium(t), mr;
}
//#endregion
//#region lady-interactiva/node_modules/react-remove-scroll/dist/es2015/medium.js
var gr = pr(), _r = function() {}, vr = C.forwardRef(function(e, t) {
	var n = C.useRef(null), r = C.useState({
		onScrollCapture: _r,
		onWheelCapture: _r,
		onTouchMoveCapture: _r
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = er(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = ur([n, t]), w = $n($n({}, b), i);
	return C.createElement(C.Fragment, null, u && C.createElement(x, {
		sideCar: gr,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? C.cloneElement(C.Children.only(s), $n($n({}, w), { ref: S })) : C.createElement(v, $n({}, w, {
		className: c,
		ref: S
	}), s));
});
vr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, vr.classNames = {
	fullWidth: rr,
	zeroRight: nr
};
//#endregion
//#region lady-interactiva/node_modules/get-nonce/dist/es2015/index.js
var yr, br = function() {
	if (yr) return yr;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region lady-interactiva/node_modules/react-style-singleton/dist/es2015/singleton.js
function xr() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = br();
	return t && e.setAttribute("nonce", t), e;
}
function Sr(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cr(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var wr = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = xr()) && (Sr(t, n), Cr(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Tr = function() {
	var e = wr();
	return function(t, n) {
		C.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Er = function() {
	var e = Tr();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Dr = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Or = function(e) {
	return parseInt(e || "", 10) || 0;
}, kr = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Or(n),
		Or(r),
		Or(i)
	];
}, Ar = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Dr;
	var t = kr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, jr = Er(), Mr = "data-scroll-locked", Nr = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${ir} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Mr}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${nr} {
    right: ${s}px ${r};
  }
  
  .${rr} {
    margin-right: ${s}px ${r};
  }
  
  .${nr} .${nr} {
    right: 0 ${r};
  }
  
  .${rr} .${rr} {
    margin-right: 0 ${r};
  }
  
  body[${Mr}] {
    ${ar}: ${s}px;
  }
`;
}, Pr = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Fr = function() {
	C.useEffect(function() {
		return document.body.setAttribute(Mr, (Pr() + 1).toString()), function() {
			var e = Pr() - 1;
			e <= 0 ? document.body.removeAttribute(Mr) : document.body.setAttribute(Mr, e.toString());
		};
	}, []);
}, Ir = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Fr();
	var a = C.useMemo(function() {
		return Ar(i);
	}, [i]);
	return C.createElement(jr, { styles: Nr(a, !t, i, n ? "" : "!important") });
}, Lr = !1;
if (typeof window < "u") try {
	var Rr = Object.defineProperty({}, "passive", { get: function() {
		return Lr = !0, !0;
	} });
	window.addEventListener("test", Rr, Rr), window.removeEventListener("test", Rr, Rr);
} catch {
	Lr = !1;
}
var zr = Lr ? { passive: !1 } : !1, Br = function(e) {
	return e.tagName === "TEXTAREA";
}, Vr = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Br(e) && n[t] === "visible");
}, Hr = function(e) {
	return Vr(e, "overflowY");
}, Ur = function(e) {
	return Vr(e, "overflowX");
}, Wr = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), qr(e, r)) {
			var i = Jr(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, Gr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, Kr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, qr = function(e, t) {
	return e === "v" ? Hr(t) : Ur(t);
}, Jr = function(e, t) {
	return e === "v" ? Gr(t) : Kr(t);
}, Yr = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, Xr = function(e, t, n, r, i) {
	var a = Yr(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = Jr(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && qr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, Zr = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Qr = function(e) {
	return [e.deltaX, e.deltaY];
}, $r = function(e) {
	return e && "current" in e ? e.current : e;
}, ei = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ti = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, ni = 0, ri = [];
function ii(e) {
	var t = C.useRef([]), n = C.useRef([0, 0]), r = C.useRef(), i = C.useState(ni++)[0], a = C.useState(Er)[0], o = C.useRef(e);
	C.useEffect(function() {
		o.current = e;
	}, [e]), C.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = tr([e.lockRef.current], (e.shards || []).map($r), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = C.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = Zr(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = Wr(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = Wr(d, u)), !m) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var h = r.current || l;
		return Xr(h, t, e, h === "h" ? s : c, !0);
	}, []), c = C.useCallback(function(e) {
		var n = e;
		if (!(!ri.length || ri[ri.length - 1] !== a)) {
			var r = "deltaY" in n ? Qr(n) : Zr(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ei(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map($r).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = C.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: ai(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = C.useCallback(function(e) {
		n.current = Zr(e), r.current = void 0;
	}, []), d = C.useCallback(function(t) {
		l(t.type, Qr(t), t.target, s(t, e.lockRef.current));
	}, []), f = C.useCallback(function(t) {
		l(t.type, Zr(t), t.target, s(t, e.lockRef.current));
	}, []);
	C.useEffect(function() {
		return ri.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, zr), document.addEventListener("touchmove", c, zr), document.addEventListener("touchstart", u, zr), function() {
			ri = ri.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, zr), document.removeEventListener("touchmove", c, zr), document.removeEventListener("touchstart", u, zr);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return C.createElement(C.Fragment, null, m ? C.createElement(a, { styles: ti(i) }) : null, p ? C.createElement(Ir, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function ai(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region lady-interactiva/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var oi = hr(gr, ii), si = C.forwardRef(function(e, t) {
	return C.createElement(vr, $n({}, e, {
		ref: t,
		sideCar: oi
	}));
});
si.classNames = vr.classNames;
//#endregion
//#region lady-interactiva/node_modules/aria-hidden/dist/es2015/index.js
var ci = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, li = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {}, fi = 0, pi = function(e) {
	return e && (e.host || pi(e.parentNode));
}, mi = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = pi(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, hi = function(e, t, n, r) {
	var i = mi(t, Array.isArray(e) ? e : [e]);
	di[n] || (di[n] = /* @__PURE__ */ new WeakMap());
	var a = di[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (li.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				li.set(e, c), a.set(e, l), o.push(e), c === 1 && i && ui.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), fi++, function() {
		o.forEach(function(e) {
			var t = li.get(e) - 1, i = a.get(e) - 1;
			li.set(e, t), a.set(e, i), t || (ui.has(e) || e.removeAttribute(r), ui.delete(e)), i || e.removeAttribute(n);
		}), fi--, fi || (li = /* @__PURE__ */ new WeakMap(), li = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = {});
	};
}, gi = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || ci(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), hi(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, _i = Object.defineProperty, vi = (e, t) => _i(e, "name", {
	value: t,
	configurable: !0
});
function yi(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
vi(yi, "setRef");
function bi(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = yi(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : yi(e[t], null);
			}
		};
	};
}
vi(bi, "composeRefs");
function xi(...e) {
	return C.useCallback(bi(...e), e);
}
vi(xi, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-use-size/dist/index.mjs
var Si = Object.defineProperty, Ci = (e, t) => Si(e, "name", {
	value: t,
	configurable: !0
});
function wi(e) {
	let [t, n] = C.useState(void 0);
	return xt(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
Ci(wi, "useSize");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-checkbox/dist/index.mjs
var Ti = Object.defineProperty, Ei = (e, t) => Ti(e, "name", {
	value: t,
	configurable: !0
}), Di = "Checkbox", [Oi, ki] = /* @__PURE__ */ Ne(Di), [W, Ai] = Oi(Di);
function ji(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: u = "on", internal_do_not_use_render: d } = e, [f, p] = At({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: Di
	}), [m, h] = C.useState(null), [g, _] = C.useState(null), v = C.useRef(!1), [y, b] = C.useReducer((e) => e + 1, 0), x = m ? !!o || !!m.closest("form") : !0, S = {
		checked: f,
		disabled: a,
		setChecked: p,
		control: m,
		setControl: h,
		name: s,
		form: o,
		value: u,
		hasConsumerStoppedPropagationRef: v,
		userInteractionCount: y,
		onUserInteraction: b,
		required: l,
		defaultChecked: Bi(i) ? !1 : i,
		isFormControl: x,
		bubbleInput: g,
		setBubbleInput: _
	};
	return /* @__PURE__ */ (0, V.jsx)(W, {
		scope: t,
		...S,
		children: zi(d) ? d(S) : r
	});
}
Ei(ji, "CheckboxProvider");
var Mi = "CheckboxTrigger", Ni = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ Ei(function({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, i) {
	let { control: a, value: o, disabled: s, checked: c, required: l, setControl: u, setChecked: d, hasConsumerStoppedPropagationRef: f, onUserInteraction: p, isFormControl: m, bubbleInput: h } = Ai(Mi, e), g = xi(i, u), _ = C.useRef(c);
	return C.useEffect(() => {
		let e = a?.form;
		if (e) {
			let t = /* @__PURE__ */ Ei(() => d(_.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [a, d]), /* @__PURE__ */ (0, V.jsx)(Oe.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": Bi(c) ? "mixed" : c,
		"aria-required": l,
		"data-state": Vi(c),
		"data-disabled": s ? "" : void 0,
		disabled: s,
		value: o,
		...r,
		ref: g,
		onKeyDown: gt(t, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: gt(n, (e) => {
			p(), d((e) => Bi(e) ? !0 : !e), h && m && (f.current = e.isPropagationStopped(), f.current || e.stopPropagation());
		})
	});
}, "CheckboxTrigger")), Pi = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ Ei(function(e, t) {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, V.jsx)(ji, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(Ni, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ (0, V.jsx)(Ri, { __scopeCheckbox: n })] })
	});
}, "Checkbox")), Fi = "CheckboxIndicator", Ii = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ Ei(function(e, t) {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = Ai(Fi, n);
	return /* @__PURE__ */ (0, V.jsx)(Rt, {
		present: r || Bi(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, V.jsx)(Oe.span, {
			"data-state": Vi(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
}, "CheckboxIndicator")), Li = "CheckboxBubbleInput", Ri = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ Ei(function({ __scopeCheckbox: e, onClick: t, ...n }, r) {
	let { control: i, hasConsumerStoppedPropagationRef: a, userInteractionCount: o, checked: s, defaultChecked: c, required: l, disabled: u, name: d, value: f, form: p, bubbleInput: m, setBubbleInput: h } = Ai(Li, e), g = xi(r, h), _ = wi(i), v = C.useRef(!1), y = C.useRef(s), b = C.useRef(o);
	C.useEffect(() => {
		let e = m;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = o !== b.current;
		b.current = o;
		let i = y.current !== s;
		y.current = s;
		let c = !(r && a.current);
		if (i && n) {
			v.current = !r;
			let t = new Event("click", { bubbles: c });
			e.indeterminate = Bi(s), n.call(e, Bi(s) ? !1 : s), e.dispatchEvent(t), v.current = !1;
		}
	}, [
		m,
		s,
		a,
		o
	]);
	let x = C.useRef(Bi(s) ? !1 : s);
	return /* @__PURE__ */ (0, V.jsx)(Oe.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: c ?? x.current,
		required: l,
		disabled: u,
		name: d,
		value: f,
		form: p,
		...n,
		tabIndex: -1,
		ref: g,
		onClick: gt(t, (e) => {
			v.current && e.stopPropagation();
		}),
		style: {
			...n.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "CheckboxBubbleInput"));
function zi(e) {
	return typeof e == "function";
}
Ei(zi, "isFunction");
function Bi(e) {
	return e === "indeterminate";
}
Ei(Bi, "isIndeterminate");
function Vi(e) {
	return Bi(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
Ei(Vi, "getState");
//#endregion
//#region lady-interactiva/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Hi = [
	"top",
	"right",
	"bottom",
	"left"
], Ui = Math.min, Wi = Math.max, Gi = Math.round, Ki = Math.floor, qi = (e) => ({
	x: e,
	y: e
}), Ji = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Yi(e, t, n) {
	return Wi(e, Ui(t, n));
}
function Xi(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function Zi(e) {
	return e.split("-")[0];
}
function Qi(e) {
	return e.split("-")[1];
}
function $i(e) {
	return e === "x" ? "y" : "x";
}
function ea(e) {
	return e === "y" ? "height" : "width";
}
function ta(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function na(e) {
	return $i(ta(e));
}
function ra(e, t, n) {
	n === void 0 && (n = !1);
	let r = Qi(e), i = na(e), a = ea(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = fa(o)), [o, fa(o)];
}
function ia(e) {
	let t = fa(e);
	return [
		aa(e),
		t,
		aa(t)
	];
}
function aa(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var oa = ["left", "right"], sa = ["right", "left"], ca = ["top", "bottom"], la = ["bottom", "top"];
function ua(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? sa : oa : t ? oa : sa;
		case "left":
		case "right": return t ? ca : la;
		default: return [];
	}
}
function da(e, t, n, r) {
	let i = Qi(e), a = ua(Zi(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(aa)))), a;
}
function fa(e) {
	let t = Zi(e);
	return Ji[t] + e.slice(t.length);
}
function pa(e) {
	return {
		top: e.top ?? 0,
		right: e.right ?? 0,
		bottom: e.bottom ?? 0,
		left: e.left ?? 0
	};
}
function ma(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : pa(e);
}
function ha(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region lady-interactiva/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ga(e, t, n) {
	let { reference: r, floating: i } = e, a = ta(t), o = na(t), s = ea(o), c = Zi(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = Qi(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
async function _a(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = Xi(t, e), p = ma(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = ha(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = ha(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var va = 50, ya = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: _a
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ga(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < va && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = ga(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, ba = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = Xi(e, t) || {};
		if (l == null) return {};
		let d = ma(u), f = {
			x: n,
			y: r
		}, p = na(i), m = ea(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = Ui(d[_], T), D = Ui(d[v], T), O = C - h[m] - D, ee = C / 2 - h[m] / 2 + w, k = Yi(E, ee, O), A = !c.arrow && Qi(i) != null && ee !== k && a.reference[m] / 2 - (ee < E ? E : D) - h[m] / 2 < 0, j = A ? ee < E ? ee - E : ee - O : 0;
		return {
			[p]: f[p] + j,
			data: {
				[p]: k,
				centerOffset: ee - k - j,
				...A && { alignmentOffset: j }
			},
			reset: A
		};
	}
}), xa = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = Xi(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = Zi(r), _ = ta(o), v = Zi(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [fa(o)] : ia(o)), x = p !== "none";
			!d && x && b.push(...da(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ra(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== ta(t)) || T.every((e) => ta(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = ta(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Sa(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Ca(e) {
	return Hi.some((t) => e[t] >= 0);
}
var wa = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = Xi(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Sa(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Ca(e)
					} };
				}
				case "escaped": {
					let e = Sa(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Ca(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Ta = /* @__PURE__ */ new Set(["left", "top"]);
async function Ea(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = Zi(n), s = Qi(n), c = ta(n) === "y", l = Ta.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = Xi(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var Da = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Ea(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Oa = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = Xi(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = ta(i), p = $i(f), m = u[p], h = u[f], g = (e, t) => Yi(t + d[e === "y" ? "top" : "left"], t, t - d[e === "y" ? "bottom" : "right"]);
			o && (m = g(p, m)), s && (h = g(f, h));
			let _ = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				..._,
				data: {
					x: _.x - n,
					y: _.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, ka = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = Xi(e, t), u = {
				x: n,
				y: r
			}, d = ta(i), f = $i(d), p = u[f], m = u[d], h = Xi(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: h.mainAxis ?? 0,
				crossAxis: h.crossAxis ?? 0
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Ta.has(Zi(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, Aa = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			let { placement: n, rects: r, platform: i, elements: a } = t, { apply: o = () => {}, ...s } = Xi(e, t), c = await i.detectOverflow(t, s), l = Zi(n), u = Qi(n), d = ta(n) === "y", { width: f, height: p } = r.floating, m, h;
			l === "top" || l === "bottom" ? (m = l, h = u === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, m = u === "end" ? "top" : "bottom");
			let g = p - c.top - c.bottom, _ = f - c.left - c.right, v = Ui(p - c[m], g), y = Ui(f - c[h], _), b = t.middlewareData.shift, x = !b, S = v, C = y;
			b != null && b.enabled.x && (C = _), b != null && b.enabled.y && (S = g), x && !u && (d ? C = f - 2 * Wi(c.left, c.right) : S = p - 2 * Wi(c.top, c.bottom)), await o({
				...t,
				availableWidth: C,
				availableHeight: S
			});
			let w = await i.getDimensions(a.floating);
			return f !== w.width || p !== w.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region lady-interactiva/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function ja() {
	return typeof window < "u";
}
function Ma(e) {
	return Fa(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Na(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pa(e) {
	return ((Fa(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function Fa(e) {
	return ja() ? e instanceof Node || e instanceof Na(e).Node : !1;
}
function Ia(e) {
	return ja() ? e instanceof Element || e instanceof Na(e).Element : !1;
}
function La(e) {
	return ja() ? e instanceof HTMLElement || e instanceof Na(e).HTMLElement : !1;
}
function Ra(e) {
	return !ja() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Na(e).ShadowRoot;
}
function za(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Xa(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function Ba(e) {
	return /^(table|td|th)$/.test(Ma(e));
}
function Va(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var Ha = /transform|translate|scale|rotate|perspective|filter/, Ua = /paint|layout|strict|content/, Wa = (e) => !!e && e !== "none", Ga;
function Ka(e) {
	let t = Ia(e) ? Xa(e) : e;
	return Wa(t.transform) || Wa(t.translate) || Wa(t.scale) || Wa(t.rotate) || Wa(t.perspective) || !Ja() && (Wa(t.backdropFilter) || Wa(t.filter)) || Ha.test(t.willChange || "") || Ua.test(t.contain || "");
}
function qa(e) {
	let t = Qa(e);
	for (; La(t) && !Ya(t);) {
		if (Ka(t)) return t;
		if (Va(t)) return null;
		t = Qa(t);
	}
	return null;
}
function Ja() {
	return Ga ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), Ga;
}
function Ya(e) {
	return /^(html|body|#document)$/.test(Ma(e));
}
function Xa(e) {
	return Na(e).getComputedStyle(e);
}
function Za(e) {
	return Ia(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Qa(e) {
	if (Ma(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ra(e) && e.host || Pa(e);
	return Ra(t) ? t.host : t;
}
function $a(e) {
	let t = Qa(e);
	return Ya(t) ? (e.ownerDocument || e).body : La(t) && za(t) ? t : $a(t);
}
function eo(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = $a(e), i = r === e.ownerDocument?.body, a = Na(r);
	if (i) {
		let e = to(a);
		return t.concat(a, a.visualViewport || [], za(r) ? r : [], e && n ? eo(e) : []);
	} else return t.concat(r, eo(r, [], n));
}
function to(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region lady-interactiva/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function no(e) {
	let t = Xa(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = La(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = Gi(n) !== a || Gi(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ro(e) {
	return Ia(e) ? e : e.contextElement;
}
function io(e) {
	let t = ro(e);
	if (!La(t)) return qi(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = no(t), o = (a ? Gi(n.width) : n.width) / r, s = (a ? Gi(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ao = /* @__PURE__ */ qi(0);
function oo(e) {
	let t = Na(e);
	return !Ja() || !t.visualViewport ? ao : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function so(e, t, n) {
	return t === void 0 && (t = !1), !!n && t && n === Na(e);
}
function G(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ro(e), o = qi(1);
	t && (r ? Ia(r) && (o = io(r)) : o = io(e));
	let s = so(a, n, r) ? oo(a) : qi(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a && r) {
		let e = Na(a), t = Ia(r) ? Na(r) : r, n = e, i = to(n);
		for (; i && t !== n;) {
			let e = io(i), t = i.getBoundingClientRect(), r = Xa(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Na(i), i = to(n);
		}
	}
	return ha({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function K(e, t) {
	let n = Za(e).scrollLeft;
	return t ? t.left + n : G(Pa(e)).left + n;
}
function co(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - K(e, n),
		y: n.top + t.scrollTop
	};
}
function lo(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = Pa(r), s = t ? Va(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = qi(1), u = qi(0), d = La(r);
	if ((d || !a) && ((Ma(r) !== "body" || za(o)) && (c = Za(r)), d)) {
		let e = G(r);
		l = io(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? co(o, c) : qi(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function uo(e) {
	return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function fo(e) {
	let t = Za(e), n = e.ownerDocument.body, r = Wi(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), i = Wi(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight), a = -t.scrollLeft + K(e), o = -t.scrollTop;
	return Xa(n).direction === "rtl" && (a += Wi(e.clientWidth, n.clientWidth) - r), {
		width: r,
		height: i,
		x: a,
		y: o
	};
}
var po = 25;
function mo(e, t, n) {
	n === void 0 && (n = "viewport");
	let r = n === "layoutViewport", i = Na(e), a = Pa(e), o = i.visualViewport, s = a.clientWidth, c = a.clientHeight, l = 0, u = 0;
	if (o) {
		let e = !Ja() || t === "fixed";
		r ? e || (l = -o.offsetLeft, u = -o.offsetTop) : (s = o.width, c = o.height, e && (l = o.offsetLeft, u = o.offsetTop));
	}
	if (K(a) <= 0) {
		let e = a.ownerDocument, t = e.body, n = getComputedStyle(t), r = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, i = Math.abs(a.clientWidth - t.clientWidth - r), o = getComputedStyle(a).scrollbarGutter === "stable both-edges" ? i / 2 : i;
		o <= po && (s -= o);
	}
	return {
		width: s,
		height: c,
		x: l,
		y: u
	};
}
function ho(e, t) {
	let n = G(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = io(e);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function go(e, t, n) {
	let r;
	if (t === "viewport" || t === "layoutViewport") r = mo(e, n, t);
	else if (t === "document") r = fo(Pa(e));
	else if (Ia(t)) r = ho(t, n);
	else {
		let n = oo(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return ha(r);
}
function _o(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = eo(e, [], !1).filter((e) => Ia(e) && Ma(e) !== "body"), i = null, a = Xa(e).position === "fixed", o = a ? Qa(e) : e;
	for (; Ia(o) && !Ya(o);) {
		let e = Xa(o), t = Ka(o), n = i ? i.position : a ? "fixed" : "";
		!t && (n === "fixed" || n === "absolute" && e.position === "static") ? r = r.filter((e) => e !== o) : i = e, o = Qa(o);
	}
	return t.set(e, r), r;
}
function vo(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Va(t) ? [] : _o(t, this._c) : [].concat(n), r], o = go(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = go(t, a[e], i);
		s = Wi(n.top, s), c = Ui(n.right, c), l = Ui(n.bottom, l), u = Wi(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function yo(e) {
	let { width: t, height: n } = no(e);
	return {
		width: t,
		height: n
	};
}
function bo(e, t, n) {
	let r = La(t), i = Pa(t), a = n === "fixed", o = G(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = qi(0);
	if ((r || !a) && ((Ma(t) !== "body" || za(i)) && (s = Za(t)), r)) {
		let e = G(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	}
	!r && i && (c.x = K(i));
	let l = i && !r && !a ? co(i, s) : qi(0);
	return {
		x: o.left + s.scrollLeft - c.x - l.x,
		y: o.top + s.scrollTop - c.y - l.y,
		width: o.width,
		height: o.height
	};
}
function xo(e) {
	return Xa(e).position === "static";
}
function So(e, t) {
	if (!La(e) || Xa(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return Pa(e) === n && (n = n.ownerDocument.body), n;
}
function Co(e, t) {
	let n = Na(e);
	if (Va(e)) return n;
	if (!La(e)) {
		let t = Qa(e);
		for (; t && !Ya(t);) {
			if (Ia(t) && !xo(t)) return t;
			t = Qa(t);
		}
		return n;
	}
	let r = So(e, t);
	for (; r && Ba(r) && xo(r);) r = So(r, t);
	return r && Ya(r) && xo(r) && !Ka(r) ? n : r || qa(e) || n;
}
var wo = async function(e) {
	let t = this.getOffsetParent || Co, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: bo(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function To(e) {
	return Xa(e).direction === "rtl";
}
var Eo = {
	convertOffsetParentRelativeRectToViewportRelativeRect: lo,
	getDocumentElement: Pa,
	getClippingRect: vo,
	getOffsetParent: Co,
	getElementRects: wo,
	getClientRects: uo,
	getDimensions: yo,
	getScale: io,
	isElement: Ia,
	isRTL: To
};
function Do(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Oo(e, t, n) {
	let r = null, i, a = Pa(e);
	function o() {
		var e;
		clearTimeout(i), (e = r) == null || e.disconnect(), r = null;
	}
	function s(n, c) {
		n === void 0 && (n = !1), c === void 0 && (c = 1), o();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (n || t(), !f || !p) return;
		let m = Ki(d), h = Ki(a.clientWidth - (u + f)), g = Ki(a.clientHeight - (d + p)), _ = Ki(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: Wi(0, Ui(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (!Do(l, e.getBoundingClientRect())) return s();
			if (n !== c) {
				if (!y) return s();
				n ? s(!1, n) : i = setTimeout(() => {
					s(!1, 1e-7);
				}, 1e3);
			}
			y = !1;
		}
		try {
			r = new IntersectionObserver(b, {
				...v,
				root: a.ownerDocument
			});
		} catch {
			r = new IntersectionObserver(b, v);
		}
		r.observe(e);
	}
	let c = Na(e), l = () => s(n);
	return c.addEventListener("resize", l), s(!0), () => {
		c.removeEventListener("resize", l), o();
	};
}
function ko(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ro(e), u = i || a ? [...l ? eo(l) : [], ...t ? eo(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Oo(l, n, a) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? G(e) : null;
	c && g();
	function g() {
		let t = G(e);
		h && !Do(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Ao = Da, jo = Oa, Mo = xa, No = Aa, Po = wa, Fo = ba, Io = ka, Lo = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = n ?? {}, a = {
		...Eo,
		...i.platform,
		_c: r
	};
	return ya(e, t, {
		...i,
		platform: a
	});
}, Ro = typeof document < "u" ? C.useLayoutEffect : function() {};
function zo(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!zo(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !zo(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Bo(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vo(e, t) {
	let n = Bo(e);
	return Math.round(t * n) / n;
}
function Ho(e) {
	let t = C.useRef(e);
	return Ro(() => {
		t.current = e;
	}), t;
}
function Uo(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = C.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = C.useState(r);
	zo(f, r) || p(r);
	let [m, h] = C.useState(null), [g, _] = C.useState(null), v = C.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = C.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), b = a || m, x = o || g, S = C.useRef(null), w = C.useRef(null), T = C.useRef(u), E = c != null, D = Ho(c), O = Ho(i), ee = Ho(l), k = C.useCallback(() => {
		if (!S.current || !w.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		O.current && (e.platform = O.current), Lo(S.current, w.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: ee.current !== !1
			};
			A.current && !zo(T.current, t) && (T.current = t, Te.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		O,
		ee
	]);
	Ro(() => {
		l === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let A = C.useRef(!1);
	Ro(() => (A.current = !0, () => {
		A.current = !1;
	}), []), Ro(() => {
		if (b && (S.current = b), x && (w.current = x), b && x) {
			if (D.current) return D.current(b, x, k);
			k();
		}
	}, [
		b,
		x,
		k,
		D,
		E
	]);
	let j = C.useMemo(() => ({
		reference: S,
		floating: w,
		setReference: v,
		setFloating: y
	}), [v, y]), M = C.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), N = C.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!M.floating) return e;
		let t = Vo(M.floating, u.x), r = Vo(M.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...Bo(M.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		M.floating,
		u.x,
		u.y
	]);
	return C.useMemo(() => ({
		...u,
		update: k,
		refs: j,
		elements: M,
		floatingStyles: N
	}), [
		u,
		k,
		j,
		M,
		N
	]);
}
var Wo = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Fo({
				element: r.current,
				padding: i
			}).fn(n) : r ? Fo({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, Go = (e, t) => {
	let n = Ao(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Ko = (e, t) => {
	let n = jo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, qo = (e, t) => ({
	fn: Io(e).fn,
	options: [e, t]
}), Jo = (e, t) => {
	let n = Mo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Yo = (e, t) => {
	let n = No(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Xo = (e, t) => {
	let n = Po(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Zo = (e, t) => {
	let n = Wo(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Qo = Object.defineProperty, $o = (e, t) => Qo(e, "name", {
	value: t,
	configurable: !0
});
function es(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
$o(es, "setRef");
function ts(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = es(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : es(e[t], null);
			}
		};
	};
}
$o(ts, "composeRefs");
function ns(...e) {
	return C.useCallback(ts(...e), e);
}
$o(ns, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-popper/dist/index.mjs
var rs = Object.defineProperty, is = (e, t) => rs(e, "name", {
	value: t,
	configurable: !0
}), as = "Popper", [os, ss] = /* @__PURE__ */ Ne(as), [cs, ls] = os(as), us = /* @__PURE__ */ is((e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = C.useState(null), [a, o] = C.useState(void 0);
	return /* @__PURE__ */ (0, V.jsx)(cs, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		placementState: a,
		setPlacementState: o,
		children: n
	});
}, "Popper"), ds = "PopperAnchor", fs = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ is(function(e, t) {
	let { __scopePopper: n, virtualRef: r, ...i } = e, a = ls(ds, n), o = C.useRef(null), s = a.onAnchorChange, c = ns(t, C.useCallback((e) => {
		o.current = e, e && s(e);
	}, [s])), l = C.useRef(null);
	C.useEffect(() => {
		if (!r) return;
		let e = l.current;
		l.current = r.current, e !== l.current && s(l.current);
	});
	let u = a.placementState && ys(a.placementState), d = u?.[0], f = u?.[1];
	return r ? null : /* @__PURE__ */ (0, V.jsx)(Oe.div, {
		"data-radix-popper-side": d,
		"data-radix-popper-align": f,
		...i,
		ref: c
	});
}, "PopperAnchor")), ps = "PopperContent", [ms, hs] = os(ps), gs = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ is(function(e, t) {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: a = "center", alignOffset: o = 0, arrowPadding: s = 0, avoidCollisions: c = !0, collisionBoundary: l = [], collisionPadding: u = 0, sticky: d = "partial", hideWhenDetached: f = !1, updatePositionStrategy: p = "optimized", onPlaced: m, ...h } = e, g = ls(ps, n), [_, v] = C.useState(null), y = ns(t, v), [b, x] = C.useState(null), S = wi(b), w = S?.width ?? 0, T = S?.height ?? 0, E = r + (a === "center" ? "" : "-" + a), D = typeof u == "number" ? u : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...u
	}, O = Array.isArray(l) ? l : [l], ee = O.length > 0, k = {
		padding: D,
		boundary: O.filter(_s),
		altBoundary: ee
	}, { refs: A, floatingStyles: j, placement: M, isPositioned: N, middlewareData: te } = Uo({
		strategy: "fixed",
		placement: E,
		whileElementsMounted: /* @__PURE__ */ is((...e) => ko(...e, { animationFrame: p === "always" }), "whileElementsMounted"),
		elements: { reference: g.anchor },
		middleware: [
			Go({
				mainAxis: i + T,
				alignmentAxis: o
			}),
			c && Ko({
				mainAxis: !0,
				crossAxis: !1,
				limiter: d === "partial" ? qo() : void 0,
				...k
			}),
			c && Jo({ ...k }),
			Yo({
				...k,
				apply: /* @__PURE__ */ is(({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}, "apply")
			}),
			b && Zo({
				element: b,
				padding: s
			}),
			vs({
				arrowWidth: w,
				arrowHeight: T
			}),
			f && Xo({
				strategy: "referenceHidden",
				...k,
				boundary: ee ? k.boundary : void 0
			})
		]
	}), P = g.setPlacementState;
	xt(() => (P(M), () => {
		P(void 0);
	}), [M, P]);
	let [F, ne] = ys(M), re = sn(m);
	xt(() => {
		N && re?.();
	}, [N, re]);
	let ie = te.arrow?.x, ae = te.arrow?.y, I = te.arrow?.centerOffset !== 0, [L, R] = C.useState();
	return xt(() => {
		_ && R(window.getComputedStyle(_).zIndex);
	}, [_]), /* @__PURE__ */ (0, V.jsx)("div", {
		ref: A.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...j,
			transform: N ? j.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: L,
			"--radix-popper-transform-origin": [te.transformOrigin?.x, te.transformOrigin?.y].join(" "),
			...te.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, V.jsx)(ms, {
			scope: n,
			placedSide: F,
			placedAlign: ne,
			onArrowChange: x,
			arrowX: ie,
			arrowY: ae,
			shouldHideArrow: I,
			children: /* @__PURE__ */ (0, V.jsx)(Oe.div, {
				"data-side": F,
				"data-align": ne,
				...h,
				ref: y,
				style: {
					...h.style,
					animation: N ? h.style?.animation : "none"
				}
			})
		})
	});
}, "PopperContent"));
function _s(e) {
	return e !== null;
}
is(_s, "isNotNull");
var vs = /* @__PURE__ */ is((e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = ys(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
}), "transformOrigin");
function ys(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
is(ys, "getSideAndAlignFromPlacement");
var bs = us, xs = fs, Ss = gs, Cs = Object.defineProperty, ws = (e, t) => Cs(e, "name", {
	value: t,
	configurable: !0
});
function Ts(e) {
	let t = C.useRef({
		value: e,
		previous: e
	});
	return C.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
ws(Ts, "usePrevious");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/number/dist/index.mjs
var Es = Object.defineProperty, Ds = (e, t) => Es(e, "name", {
	value: t,
	configurable: !0
});
function Os(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
Ds(Os, "clamp");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var ks = Object.defineProperty, As = (e, t) => ks(e, "name", {
	value: t,
	configurable: !0
});
function js(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
As(js, "setRef");
function Ms(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = js(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : js(e[t], null);
			}
		};
	};
}
As(Ms, "composeRefs");
function Ns(...e) {
	return C.useCallback(Ms(...e), e);
}
As(Ns, "useComposedRefs");
//#endregion
//#region lady-interactiva/node_modules/@radix-ui/react-select/node_modules/@radix-ui/react-slot/dist/index.mjs
var Ps = Object.defineProperty, Fs = (e, t) => Ps(e, "name", {
	value: t,
	configurable: !0
});
/* @__NO_SIDE_EFFECTS__ */
function Is(e) {
	let t = C.forwardRef((t, n) => {
		let { children: r, ...i } = t, a = null, o = !1, s = [];
		Ws(r) && typeof Js == "function" && (r = Js(r._payload)), C.Children.forEach(r, (e) => {
			if (Hs(e)) {
				o = !0;
				let t = e, n = "child" in t.props ? t.props.child : t.props.children;
				Ws(n) && typeof Js == "function" && (n = Js(n._payload)), a = zs(t, n), s.push(a?.props?.children);
			} else s.push(e);
		}), a ? a = C.cloneElement(a, void 0, s) : !o && C.Children.count(r) === 1 && C.isValidElement(r) && (a = r);
		let c = a ? Vs(a) : void 0, l = Ns(n, c);
		if (!a) {
			if (r || r === 0) throw Error(o ? qs(e) : Ks(e));
			return r;
		}
		let u = Bs(i, a.props ?? {});
		return a.type !== C.Fragment && (u.ref = n ? l : c), C.cloneElement(a, u);
	});
	return t.displayName = `${e}.Slot`, t;
}
Fs(Is, "createSlot");
var Ls = Symbol.for("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function Rs(e) {
	let t = /* @__PURE__ */ Fs((e) => "child" in e ? e.children(e.child) : e.children, "Slottable");
	return t.displayName = `${e}.Slottable`, t.__radixId = Ls, t;
}
Fs(Rs, "createSlottable");
var zs = /* @__PURE__ */ Fs((e, t) => {
	if ("child" in e.props) {
		let t = e.props.child;
		return C.isValidElement(t) ? C.cloneElement(t, void 0, e.props.children(t.props.children)) : null;
	}
	return C.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function Bs(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
Fs(Bs, "mergeProps");
function Vs(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Fs(Vs, "getElementRef");
function Hs(e) {
	return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ls;
}
Fs(Hs, "isSlottable");
var Us = Symbol.for("react.lazy");
function Ws(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === Us && "_payload" in e && Gs(e._payload);
}
Fs(Ws, "isLazyComponent");
function Gs(e) {
	return typeof e == "object" && !!e && "then" in e;
}
Fs(Gs, "isPromiseLike");
var Ks = /* @__PURE__ */ Fs((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), qs = /* @__PURE__ */ Fs((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Js = C.use, Ys = Object.defineProperty, q = (e, t) => Ys(e, "name", {
	value: t,
	configurable: !0
}), Xs = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], Zs = [" ", "Enter"], Qs = "Select", [$s, ec, tc] = /* @__PURE__ */ nt(Qs), [nc, rc] = /* @__PURE__ */ Ne(Qs, [tc, ss]), ic = ss(), [ac, oc] = nc(Qs), [sc, cc] = nc(Qs);
function lc(e) {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: i, onOpenChange: a, value: o, defaultValue: s, onValueChange: c, dir: l, name: u, autoComplete: d, disabled: f, required: p, form: m, internal_do_not_use_render: h } = e, g = ic(t), [_, v] = C.useState(null), [y, b] = C.useState(null), [x, S] = C.useState(!1), w = Qt(l), [T, E] = At({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Qs
	}), [D, O] = At({
		prop: o,
		defaultProp: s,
		onChange: c,
		caller: Qs
	}), ee = C.useRef(null), k = C.useRef(D);
	C.useEffect(() => {
		let e = m ? _?.ownerDocument.getElementById(m) : _?.form;
		if (e instanceof HTMLFormElement) {
			let t = /* @__PURE__ */ q(() => O(k.current), "reset");
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [
		m,
		_,
		O
	]);
	let A = _ ? !!m || !!_.closest("form") : !0, [j, M] = C.useState(/* @__PURE__ */ new Set()), N = Jt(), te = Array.from(j).map((e) => e.props.value).join(";"), P = C.useCallback((e) => {
		M((t) => new Set(t).add(e));
	}, []), F = C.useCallback((e) => {
		M((t) => {
			let n = new Set(t);
			return n.delete(e), n;
		});
	}, []), ne = {
		required: p,
		trigger: _,
		onTriggerChange: v,
		valueNode: y,
		onValueNodeChange: b,
		valueNodeHasChildren: x,
		onValueNodeHasChildrenChange: S,
		contentId: N,
		value: D,
		onValueChange: O,
		open: T,
		onOpenChange: E,
		dir: w,
		triggerPointerDownPosRef: ee,
		disabled: f,
		name: u,
		autoComplete: d,
		form: m,
		nativeOptions: j,
		nativeSelectKey: te,
		isFormControl: A
	};
	return /* @__PURE__ */ (0, V.jsx)(bs, {
		...g,
		children: /* @__PURE__ */ (0, V.jsx)(ac, {
			scope: t,
			...ne,
			children: /* @__PURE__ */ (0, V.jsx)($s.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, V.jsx)(sc, {
					scope: t,
					onNativeOptionAdd: P,
					onNativeOptionRemove: F,
					children: Xc(h) ? h(ne) : n
				})
			})
		})
	});
}
q(lc, "SelectProvider");
var uc = /* @__PURE__ */ q((e) => {
	let { __scopeSelect: t, children: n, ...r } = e;
	return /* @__PURE__ */ (0, V.jsx)(lc, {
		__scopeSelect: t,
		...r,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [n, e ? /* @__PURE__ */ (0, V.jsx)(Yc, { __scopeSelect: t }) : null] })
	});
}, "Select"), dc = "SelectTrigger", fc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, disabled: r = !1, ...i } = e, a = ic(n), o = oc(dc, n), s = o.disabled || r, c = Ns(t, o.onTriggerChange), l = ec(n), u = C.useRef("touch"), [d, f, p] = Qc((e) => {
		let t = l().filter((e) => !e.disabled), n = $c(t, e, t.find((e) => e.value === o.value));
		n !== void 0 && o.onValueChange(n.value);
	}), m = /* @__PURE__ */ q((e) => {
		s || (o.onOpenChange(!0), p()), e && (o.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	}, "handleOpen");
	return /* @__PURE__ */ (0, V.jsx)(xs, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, V.jsx)(Oe.button, {
			type: "button",
			role: "combobox",
			"aria-controls": o.open ? o.contentId : void 0,
			"aria-expanded": o.open,
			"aria-required": o.required,
			"aria-autocomplete": "none",
			dir: o.dir,
			"data-state": o.open ? "open" : "closed",
			disabled: s,
			"data-disabled": s ? "" : void 0,
			"data-placeholder": Zc(o.value) ? "" : void 0,
			...i,
			ref: c,
			onClick: gt(i.onClick, (e) => {
				e.currentTarget.focus(), u.current !== "mouse" && m(e);
			}),
			onPointerDown: gt(i.onPointerDown, (e) => {
				u.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (m(e), e.preventDefault());
			}),
			onKeyDown: gt(i.onKeyDown, (e) => {
				let t = d.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && f(e.key), !(t && e.key === " ") && Xs.includes(e.key) && (m(), e.preventDefault());
			})
		})
	});
}, "SelectTrigger")), pc = "SelectValue", mc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, children: a, placeholder: o = "", ...s } = e, c = oc(pc, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, d = Ns(t, c.onValueNodeChange);
	xt(() => {
		l(u);
	}, [l, u]);
	let f = Zc(c.value);
	return /* @__PURE__ */ (0, V.jsx)(Oe.span, {
		...s,
		asChild: f ? !1 : s.asChild,
		ref: d,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, V.jsx)(C.Fragment, { children: f ? o : a }, f ? "placeholder" : "value")
	});
}, "SelectValue")), hc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, V.jsx)(Oe.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
}, "SelectIcon")), [gc, _c] = nc("SelectPortal", { forceMount: void 0 }), vc = /* @__PURE__ */ q((e) => {
	let { __scopeSelect: t, forceMount: n, ...r } = e;
	return /* @__PURE__ */ (0, V.jsx)(gc, {
		scope: e.__scopeSelect,
		forceMount: n,
		children: /* @__PURE__ */ (0, V.jsx)(Gn, {
			asChild: !0,
			...r
		})
	});
}, "SelectPortal"), yc = "SelectContent", bc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = _c(yc, e.__scopeSelect), { forceMount: r = n.forceMount, ...i } = e, a = oc(yc, e.__scopeSelect), [o, s] = C.useState();
	return xt(() => {
		s(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, V.jsx)(Rt, {
		present: r || a.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, V.jsx)(Ec, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, V.jsx)(xc, {
			...i,
			fragment: o
		})
	});
}, "SelectContent")), xc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, children: r, fragment: i } = e;
	return i ? Te.createPortal(/* @__PURE__ */ (0, V.jsx)(Cc, {
		scope: n,
		children: /* @__PURE__ */ (0, V.jsx)($s.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, V.jsx)("div", {
				ref: t,
				children: r
			})
		})
	}), i) : null;
}, "SelectContentFragment")), Sc = 10, [Cc, wc] = nc(yc), Tc = /* @__PURE__ */ Is("SelectContent.RemoveScroll"), Ec = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n } = e, { position: r = "item-aligned", onCloseAutoFocus: i, onEscapeKeyDown: a, onPointerDownOutside: o, side: s, sideOffset: c, align: l, alignOffset: u, arrowPadding: d, collisionBoundary: f, collisionPadding: p, sticky: m, hideWhenDetached: h, avoidCollisions: g, ..._ } = e, v = oc(yc, n), [y, b] = C.useState(null), [x, S] = C.useState(null), w = Ns(t, b), [T, E] = C.useState(null), [D, O] = C.useState(null), ee = ec(n), [k, A] = C.useState(!1), j = C.useRef(!1);
	C.useEffect(() => {
		if (y) return gi(y);
	}, [y]), Zn();
	let M = C.useCallback((e) => {
		let [t, ...n] = ee().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && x && (x.scrollTop = 0), n === r && x && (x.scrollTop = x.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [ee, x]), N = C.useCallback(() => M([T, y]), [
		M,
		T,
		y
	]);
	C.useEffect(() => {
		k && N();
	}, [k, N]);
	let { onOpenChange: te, triggerPointerDownPosRef: P } = v;
	C.useEffect(() => {
		if (y) {
			let e = {
				x: 0,
				y: 0
			}, t = /* @__PURE__ */ q((t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (P.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (P.current?.y ?? 0))
				};
			}, "handlePointerMove"), n = /* @__PURE__ */ q((n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : n.composedPath().includes(y) || te(!1), document.removeEventListener("pointermove", t), P.current = null;
			}, "handlePointerUp");
			return P.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		y,
		te,
		P
	]), C.useEffect(() => {
		let e = /* @__PURE__ */ q(() => te(!1), "close");
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [te]);
	let [F, ne] = Qc((e) => {
		let t = ee().filter((e) => !e.disabled), n = $c(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current?.focus());
	}), re = C.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && (E(e), r && (j.current = !0));
	}, [v.value]), ie = C.useCallback(() => y?.focus(), [y]), ae = C.useCallback((e, t, n) => {
		let r = !j.current && !n;
		(v.value !== void 0 && v.value === t || r) && O(e);
	}, [v.value]), I = r === "popper" ? Oc : Dc, L = I === Oc ? {
		side: s,
		sideOffset: c,
		align: l,
		alignOffset: u,
		arrowPadding: d,
		collisionBoundary: f,
		collisionPadding: p,
		sticky: m,
		hideWhenDetached: h,
		avoidCollisions: g
	} : {};
	return /* @__PURE__ */ (0, V.jsx)(Cc, {
		scope: n,
		content: y,
		viewport: x,
		onViewportChange: S,
		itemRefCallback: re,
		selectedItem: T,
		onItemLeave: ie,
		itemTextRefCallback: ae,
		focusSelectedItem: N,
		selectedItemText: D,
		position: r,
		isPositioned: k,
		searchRef: F,
		children: /* @__PURE__ */ (0, V.jsx)(si, {
			as: Tc,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, V.jsx)(Mn, {
				asChild: !0,
				trapped: v.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: gt(i, (e) => {
					v.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, V.jsx)(hn, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: a,
					onPointerDownOutside: o,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => v.onOpenChange(!1),
					children: /* @__PURE__ */ (0, V.jsx)(I, {
						role: "listbox",
						id: v.contentId,
						"data-state": v.open ? "open" : "closed",
						dir: v.dir,
						onContextMenu: (e) => e.preventDefault(),
						..._,
						...L,
						onPlaced: () => A(!0),
						ref: w,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							..._.style
						},
						onKeyDown: gt(_.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && ne(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = ee().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => M(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
}, "SelectContentImpl")), Dc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, a = oc(yc, n), o = wc(yc, n), [s, c] = C.useState(null), [l, u] = C.useState(null), d = Ns(t, u), f = ec(n), p = C.useRef(!1), m = C.useRef(!0), { viewport: h, selectedItem: g, selectedItemText: _, focusSelectedItem: v } = o, y = C.useCallback(() => {
		if (a.trigger && a.valueNode && s && l && h && g && _) {
			let e = a.trigger.getBoundingClientRect(), t = l.getBoundingClientRect(), n = a.valueNode.getBoundingClientRect(), i = _.getBoundingClientRect();
			if (a.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Sc, d = Os(a, [Sc, Math.max(Sc, u - l)]);
				s.style.minWidth = c + "px", s.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, c = e.width + o, l = Math.max(c, t.width), u = window.innerWidth - Sc, d = Os(a, [Sc, Math.max(Sc, u - l)]);
				s.style.minWidth = c + "px", s.style.right = d + "px";
			}
			let o = f(), c = window.innerHeight - Sc * 2, u = h.scrollHeight, d = window.getComputedStyle(l), m = parseInt(d.borderTopWidth, 10), v = parseInt(d.paddingTop, 10), y = parseInt(d.borderBottomWidth, 10), b = parseInt(d.paddingBottom, 10), x = m + v + u + b + y, S = Math.min(g.offsetHeight * 5, x), C = window.getComputedStyle(h), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - Sc, D = c - E, O = g.offsetHeight / 2, ee = g.offsetTop + O, k = m + v + ee, A = x - k;
			if (k <= E) {
				let e = o.length > 0 && g === o[o.length - 1].ref.current;
				s.style.bottom = "0px";
				let t = l.clientHeight - h.offsetTop - h.offsetHeight, n = k + Math.max(D, O + (e ? T : 0) + t + y);
				s.style.height = n + "px";
			} else {
				let e = o.length > 0 && g === o[0].ref.current;
				s.style.top = "0px";
				let t = Math.max(E, m + h.offsetTop + (e ? w : 0) + O) + A;
				s.style.height = t + "px", h.scrollTop = k - E + h.offsetTop;
			}
			s.style.margin = `${Sc}px 0`, s.style.minHeight = S + "px", s.style.maxHeight = c + "px", r?.(), requestAnimationFrame(() => p.current = !0);
		}
	}, [
		f,
		a.trigger,
		a.valueNode,
		s,
		l,
		h,
		g,
		_,
		a.dir,
		r
	]);
	xt(() => y(), [y]);
	let [b, x] = C.useState();
	return xt(() => {
		l && x(window.getComputedStyle(l).zIndex);
	}, [l]), /* @__PURE__ */ (0, V.jsx)(kc, {
		scope: n,
		contentWrapper: s,
		shouldExpandOnScrollRef: p,
		onScrollButtonChange: C.useCallback((e) => {
			e && m.current === !0 && (y(), v?.(), m.current = !1);
		}, [y, v]),
		children: /* @__PURE__ */ (0, V.jsx)("div", {
			ref: c,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: b
			},
			children: /* @__PURE__ */ (0, V.jsx)(Oe.div, {
				...i,
				ref: d,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
}, "SelectItemAlignedPosition")), Oc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = Sc, ...a } = e, o = ic(n);
	return /* @__PURE__ */ (0, V.jsx)(Ss, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
}, "SelectPopperPosition")), [kc, Ac] = nc(yc, {}), jc = "SelectViewport", Mc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, nonce: r, ...i } = e, a = wc(jc, n), o = Ac(jc, n), s = Ns(t, a.onViewportChange), c = C.useRef(0);
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: r
	}), /* @__PURE__ */ (0, V.jsx)($s.Slot, {
		scope: n,
		children: /* @__PURE__ */ (0, V.jsx)(Oe.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...i,
			ref: s,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...i.style
			},
			onScroll: gt(i.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = o;
				if (r?.current && n) {
					let e = Math.abs(c.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - Sc * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				c.current = t.scrollTop;
			})
		})
	})] });
}, "SelectViewport")), [Nc, Pc] = nc("SelectGroup"), Fc = "SelectItem", [Ic, Lc] = nc(Fc), Rc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, value: r, disabled: i = !1, textValue: a, ...o } = e, s = oc(Fc, n), c = wc(Fc, n), l = s.value === r, [u, d] = C.useState(a ?? ""), [f, p] = C.useState(!1), m = Ns(t, sn((e) => c.itemRefCallback?.(e, r, i))), h = Jt(), g = C.useRef("touch"), _ = /* @__PURE__ */ q(() => {
		i || (s.onValueChange(r), s.onOpenChange(!1));
	}, "handleSelect");
	return /* @__PURE__ */ (0, V.jsx)(Ic, {
		scope: n,
		value: r,
		disabled: i,
		textId: h,
		isSelected: l,
		onItemTextChange: C.useCallback((e) => {
			d((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, V.jsx)($s.ItemSlot, {
			scope: n,
			value: r,
			disabled: i,
			textValue: u,
			children: /* @__PURE__ */ (0, V.jsx)(Oe.div, {
				role: "option",
				"aria-labelledby": h,
				"data-highlighted": f ? "" : void 0,
				"aria-selected": l && f,
				"data-state": l ? "checked" : "unchecked",
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				tabIndex: i ? void 0 : -1,
				...o,
				ref: m,
				onFocus: gt(o.onFocus, () => p(!0)),
				onBlur: gt(o.onBlur, () => p(!1)),
				onClick: gt(o.onClick, () => {
					g.current !== "mouse" && _();
				}),
				onPointerUp: gt(o.onPointerUp, () => {
					g.current === "mouse" && _();
				}),
				onPointerDown: gt(o.onPointerDown, (e) => {
					g.current = e.pointerType;
				}),
				onPointerMove: gt(o.onPointerMove, (e) => {
					g.current = e.pointerType, i ? c.onItemLeave?.() : g.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: gt(o.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && c.onItemLeave?.();
				}),
				onKeyDown: gt(o.onKeyDown, (e) => {
					i || e.target !== e.currentTarget || c.searchRef?.current !== "" && e.key === " " || (Zs.includes(e.key) && _(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
}, "SelectItem")), zc = "SelectItemText", Bc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, className: r, style: i, ...a } = e, o = oc(zc, n), s = wc(zc, n), c = Lc(zc, n), l = cc(zc, n), [u, d] = C.useState(null), f = sn((e) => s.itemTextRefCallback?.(e, c.value, c.disabled)), p = Ns(t, d, c.onItemTextChange, f), m = u?.textContent, h = C.useMemo(() => /* @__PURE__ */ (0, V.jsx)("option", {
		value: c.value,
		disabled: c.disabled,
		children: m
	}, c.value), [
		c.disabled,
		c.value,
		m
	]), { onNativeOptionAdd: g, onNativeOptionRemove: _ } = l;
	return xt(() => (g(h), () => _(h)), [
		g,
		_,
		h
	]), /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(Oe.span, {
		id: c.textId,
		...a,
		ref: p
	}), c.isSelected && o.valueNode && !o.valueNodeHasChildren && !Zc(o.value) ? Te.createPortal(a.children, o.valueNode) : null] });
}, "SelectItemText")), Vc = "SelectItemIndicator", Hc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, ...r } = e;
	return Lc(Vc, n).isSelected ? /* @__PURE__ */ (0, V.jsx)(Oe.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
}, "SelectItemIndicator")), Uc = "SelectScrollUpButton", Wc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = wc(Uc, e.__scopeSelect), r = Ac(Uc, e.__scopeSelect), [i, a] = C.useState(!1), o = Ns(t, r.onScrollButtonChange);
	return xt(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			};
			q(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, V.jsx)(qc, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
}, "SelectScrollUpButton")), Gc = "SelectScrollDownButton", Kc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let n = wc(Gc, e.__scopeSelect), r = Ac(Gc, e.__scopeSelect), [i, a] = C.useState(!1), o = Ns(t, r.onScrollButtonChange);
	return xt(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			};
			q(e, "handleScroll");
			let t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, V.jsx)(qc, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
}, "SelectScrollDownButton")), qc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function(e, t) {
	let { __scopeSelect: n, onAutoScroll: r, ...i } = e, a = wc("SelectScrollButton", n), o = C.useRef(null), s = ec(n), c = C.useCallback(() => {
		o.current !== null && (window.clearInterval(o.current), o.current = null);
	}, []);
	return C.useEffect(() => () => c(), [c]), xt(() => {
		s().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [s]), /* @__PURE__ */ (0, V.jsx)(Oe.div, {
		"aria-hidden": !0,
		...i,
		ref: t,
		style: {
			flexShrink: 0,
			...i.style
		},
		onPointerDown: gt(i.onPointerDown, () => {
			o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerMove: gt(i.onPointerMove, () => {
			a.onItemLeave?.(), o.current === null && (o.current = window.setInterval(r, 50));
		}),
		onPointerLeave: gt(i.onPointerLeave, () => {
			c();
		})
	});
}, "SelectScrollButtonImpl")), Jc = "SelectBubbleInput", Yc = /* @__PURE__ */ C.forwardRef(/* @__PURE__ */ q(function({ __scopeSelect: e, ...t }, n) {
	let r = oc(Jc, e), { value: i, onValueChange: a, required: o, disabled: s, name: c, autoComplete: l, form: u } = r, { nativeOptions: d, nativeSelectKey: f } = r, p = C.useRef(null), m = Ns(n, p), h = i ?? "", g = Ts(h), _ = Array.from(d).some((e) => (e.props.value ?? "") === "");
	return C.useEffect(() => {
		let e = p.current;
		if (!e) return;
		let t = window.HTMLSelectElement.prototype, n = Object.getOwnPropertyDescriptor(t, "value").set;
		if (g !== h && n) {
			let t = new Event("change", { bubbles: !0 });
			n.call(e, h), e.dispatchEvent(t);
		}
	}, [g, h]), /* @__PURE__ */ (0, V.jsxs)(Oe.select, {
		"aria-hidden": !0,
		required: o,
		tabIndex: -1,
		name: c,
		autoComplete: l,
		disabled: s,
		form: u,
		onChange: (e) => a(e.target.value),
		...t,
		style: {
			...Ae,
			...t.style
		},
		ref: m,
		defaultValue: h,
		children: [Zc(i) && !_ ? /* @__PURE__ */ (0, V.jsx)("option", { value: "" }) : null, Array.from(d)]
	}, f);
}, "SelectBubbleInput"));
function Xc(e) {
	return typeof e == "function";
}
q(Xc, "isFunction");
function Zc(e) {
	return e === "" || e === void 0;
}
q(Zc, "shouldShowPlaceholder");
function Qc(e) {
	let t = sn(e), n = C.useRef(""), r = C.useRef(0), i = C.useCallback((e) => {
		let i = n.current + e;
		t(i), (/* @__PURE__ */ q((function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		}), "updateSearch"))(i);
	}, [t]), a = C.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return C.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
q(Qc, "useTypeaheadSearch");
function $c(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = el(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
q($c, "findNextItem");
function el(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
q(el, "wrapArray");
//#endregion
//#region lady-interactiva/node_modules/clsx/dist/clsx.mjs
var tl = g();
function nl(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = nl(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function rl() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = nl(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region outputs/lady-interactiva-github/source/lib/utils.ts
var il = (/* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
	var t = (e, t) => {
		let n = Array(e.length + t.length);
		for (let t = 0; t < e.length; t++) n[t] = e[t];
		for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
		return n;
	}, n = (e, t) => ({
		classGroupId: e,
		validator: t
	}), r = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
		nextPart: e,
		validators: t,
		classGroupId: n
	}), i = "-", a = [], o = "arbitrary..", s = (e) => {
		let n = u(e), { conflictingClassGroups: r, conflictingClassGroupModifiers: o } = e;
		return {
			getClassGroupId: (e) => {
				if (e.startsWith("[") && e.endsWith("]")) return l(e);
				let t = e.split(i);
				return c(t, +(t[0] === "" && t.length > 1), n);
			},
			getConflictingClassGroupIds: (e, n) => {
				if (n) {
					let n = o[e], i = r[e];
					return n ? i ? t(i, n) : n : i || a;
				}
				return r[e] || a;
			}
		};
	}, c = (e, t, n) => {
		if (e.length - t === 0) return n.classGroupId;
		let r = e[t], a = n.nextPart.get(r);
		if (a) {
			let n = c(e, t + 1, a);
			if (n) return n;
		}
		let o = n.validators;
		if (o === null) return;
		let s = t === 0 ? e.join(i) : e.slice(t).join(i), l = o.length;
		for (let e = 0; e < l; e++) {
			let t = o[e];
			if (t.validator(s)) return t.classGroupId;
		}
	}, l = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
		let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
		return r ? o + r : void 0;
	})(), u = (e) => {
		let { theme: t, classGroups: n } = e;
		return d(n, t);
	}, d = (e, t) => {
		let n = r();
		for (let r in e) {
			let i = e[r];
			f(i, n, r, t);
		}
		return n;
	}, f = (e, t, n, r) => {
		let i = e.length;
		for (let a = 0; a < i; a++) {
			let i = e[a];
			p(i, t, n, r);
		}
	}, p = (e, t, n, r) => {
		if (typeof e == "string") {
			m(e, t, n);
			return;
		}
		if (typeof e == "function") {
			h(e, t, n, r);
			return;
		}
		g(e, t, n, r);
	}, m = (e, t, n) => {
		let r = e === "" ? t : _(t, e);
		r.classGroupId = n;
	}, h = (e, t, r, i) => {
		if (v(e)) {
			f(e(i), t, r, i);
			return;
		}
		t.validators === null && (t.validators = []), t.validators.push(n(r, e));
	}, g = (e, t, n, r) => {
		let i = Object.entries(e), a = i.length;
		for (let e = 0; e < a; e++) {
			let [a, o] = i[e];
			f(o, _(t, a), n, r);
		}
	}, _ = (e, t) => {
		let n = e, a = t.split(i), o = a.length;
		for (let e = 0; e < o; e++) {
			let t = a[e], i = n.nextPart.get(t);
			i || (i = r(), n.nextPart.set(t, i)), n = i;
		}
		return n;
	}, v = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, y = (e) => {
		if (e < 1) return {
			get: () => void 0,
			set: () => {}
		};
		let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
			n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
		};
		return {
			get(e) {
				let t = n[e];
				if (t !== void 0) return t;
				if ((t = r[e]) !== void 0) return i(e, t), t;
			},
			set(e, t) {
				e in n ? n[e] = t : i(e, t);
			}
		};
	}, b = "!", x = ":", S = [], C = (e, t, n, r, i) => ({
		modifiers: e,
		hasImportantModifier: t,
		baseClassName: n,
		maybePostfixModifierPosition: r,
		isExternal: i
	}), w = (e) => {
		let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
			let t = [], n = 0, r = 0, i = 0, a, o = e.length;
			for (let s = 0; s < o; s++) {
				let o = e[s];
				if (n === 0 && r === 0) {
					if (o === x) {
						t.push(e.slice(i, s)), i = s + 1;
						continue;
					}
					if (o === "/") {
						a = s;
						continue;
					}
				}
				o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
			}
			let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
			s.endsWith(b) ? (c = s.slice(0, -1), l = !0) : s.startsWith(b) && (c = s.slice(1), l = !0);
			let u = a && a > i ? a - i : void 0;
			return C(t, l, c, u);
		};
		if (t) {
			let e = t + x, n = r;
			r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : C(S, !1, t, void 0, !0);
		}
		if (n) {
			let e = r;
			r = (t) => n({
				className: t,
				parseClassName: e
			});
		}
		return r;
	}, T = (e) => {
		let t = /* @__PURE__ */ new Map();
		return e.orderSensitiveModifiers.forEach((e, n) => {
			t.set(e, 1e6 + n);
		}), (e) => {
			let n = [], r = [];
			for (let i = 0; i < e.length; i++) {
				let a = e[i], o = a[0] === "[", s = t.has(a);
				o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
			}
			return r.length > 0 && (r.sort(), n.push(...r)), n;
		};
	}, E = (e) => ({
		cache: y(e.cacheSize),
		parseClassName: w(e),
		sortModifiers: T(e),
		postfixLookupClassGroupIds: D(e),
		...s(e)
	}), D = (e) => {
		let t = Object.create(null), n = e.postfixLookupClassGroups;
		if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
		return t;
	}, O = /\s+/, ee = (e, t) => {
		let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(O), l = "";
		for (let e = c.length - 1; e >= 0; --e) {
			let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
			if (u) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			let h = !!m, g;
			if (h) {
				g = r(p.substring(0, m));
				let e = g && o[g] ? r(p) : void 0;
				e && e !== g && (g = e, h = !1);
			} else g = r(p);
			if (!g) {
				if (!h) {
					l = t + (l.length > 0 ? " " + l : l);
					continue;
				}
				if (g = r(p), !g) {
					l = t + (l.length > 0 ? " " + l : l);
					continue;
				}
				h = !1;
			}
			let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + b : _, y = v + g;
			if (s.indexOf(y) > -1) continue;
			s.push(y);
			let x = i(g, h);
			for (let e = 0; e < x.length; ++e) {
				let t = x[e];
				s.push(v + t);
			}
			l = t + (l.length > 0 ? " " + l : l);
		}
		return l;
	}, k = (...e) => {
		let t = 0, n, r, i = "";
		for (; t < e.length;) (n = e[t++]) && (r = A(n)) && (i && (i += " "), i += r);
		return i;
	}, A = (e) => {
		if (typeof e == "string") return e;
		let t, n = "";
		for (let r = 0; r < e.length; r++) e[r] && (t = A(e[r])) && (n && (n += " "), n += t);
		return n;
	}, j = (e, ...t) => {
		let n, r, i, a, o = (o) => (n = E(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
			let t = r(e);
			if (t) return t;
			let a = ee(e, n);
			return i(e, a), a;
		};
		return a = o, (...e) => a(k(...e));
	}, M = [], N = (e) => {
		let t = (t) => t[e] || M;
		return t.isThemeGetter = !0, t;
	}, te = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, P = /^\((?:(\w[\w-]*):)?(.+)\)$/i, F = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ne = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, re = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ie = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ae = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, I = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e) => F.test(e), R = (e) => !!e && !Number.isNaN(Number(e)), oe = (e) => !!e && Number.isInteger(Number(e)), se = (e) => e.endsWith("%") && R(e.slice(0, -1)), ce = (e) => ne.test(e), le = () => !0, ue = (e) => re.test(e) && !ie.test(e), de = () => !1, fe = (e) => ae.test(e), pe = (e) => I.test(e), me = (e) => !z(e) && !B(e), he = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), ge = (e) => Ae(e, Ne, de), z = (e) => te.test(e), _e = (e) => Ae(e, Pe, ue), ve = (e) => Ae(e, Fe, R), ye = (e) => Ae(e, Le, le), be = (e) => Ae(e, Ie, de), xe = (e) => Ae(e, H, de), Se = (e) => Ae(e, Me, pe), Ce = (e) => Ae(e, Re, fe), B = (e) => P.test(e), we = (e) => je(e, Pe), Te = (e) => je(e, Ie), V = (e) => je(e, H), Ee = (e) => je(e, Ne), De = (e) => je(e, Me), Oe = (e) => je(e, Re, !0), ke = (e) => je(e, Le, !0), Ae = (e, t, n) => {
		let r = te.exec(e);
		return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
	}, je = (e, t, n = !1) => {
		let r = P.exec(e);
		return r ? r[1] ? t(r[1]) : n : !1;
	}, H = (e) => e === "position" || e === "percentage", Me = (e) => e === "image" || e === "url", Ne = (e) => e === "length" || e === "size" || e === "bg-size", Pe = (e) => e === "length", Fe = (e) => e === "number", Ie = (e) => e === "family-name", Le = (e) => e === "number" || e === "weight", Re = (e) => e === "shadow", ze = /* @__PURE__ */ Object.defineProperty({
		__proto__: null,
		isAny: le,
		isAnyNonArbitrary: me,
		isArbitraryFamilyName: be,
		isArbitraryImage: Se,
		isArbitraryLength: _e,
		isArbitraryNumber: ve,
		isArbitraryPosition: xe,
		isArbitraryShadow: Ce,
		isArbitrarySize: ge,
		isArbitraryValue: z,
		isArbitraryVariable: B,
		isArbitraryVariableFamilyName: Te,
		isArbitraryVariableImage: De,
		isArbitraryVariableLength: we,
		isArbitraryVariablePosition: V,
		isArbitraryVariableShadow: Oe,
		isArbitraryVariableSize: Ee,
		isArbitraryVariableWeight: ke,
		isArbitraryWeight: ye,
		isFraction: L,
		isInteger: oe,
		isNamedContainerQuery: he,
		isNumber: R,
		isPercent: se,
		isTshirtSize: ce
	}, Symbol.toStringTag, { value: "Module" }), Be = () => {
		let e = N("color"), t = N("font"), n = N("text"), r = N("font-weight"), i = N("tracking"), a = N("leading"), o = N("breakpoint"), s = N("container"), c = N("spacing"), l = N("radius"), u = N("shadow"), d = N("inset-shadow"), f = N("text-shadow"), p = N("drop-shadow"), m = N("blur"), h = N("perspective"), g = N("aspect"), _ = N("ease"), v = N("animate"), y = () => [
			"auto",
			"avoid",
			"all",
			"avoid-page",
			"page",
			"left",
			"right",
			"column"
		], b = () => [
			"center",
			"top",
			"bottom",
			"left",
			"right",
			"top-left",
			"left-top",
			"top-right",
			"right-top",
			"bottom-right",
			"right-bottom",
			"bottom-left",
			"left-bottom"
		], x = () => [
			...b(),
			B,
			z
		], S = () => [
			"auto",
			"hidden",
			"clip",
			"visible",
			"scroll"
		], C = () => [
			"auto",
			"contain",
			"none"
		], w = () => [
			B,
			z,
			c
		], T = () => [
			L,
			"full",
			"auto",
			...w()
		], E = () => [
			oe,
			"none",
			"subgrid",
			B,
			z
		], D = () => [
			"auto",
			{ span: [
				"full",
				oe,
				B,
				z
			] },
			oe,
			B,
			z
		], O = () => [
			oe,
			"auto",
			B,
			z
		], ee = () => [
			"auto",
			"min",
			"max",
			"fr",
			B,
			z
		], k = () => [
			"start",
			"end",
			"center",
			"between",
			"around",
			"evenly",
			"stretch",
			"baseline",
			"center-safe",
			"end-safe"
		], A = () => [
			"start",
			"end",
			"center",
			"stretch",
			"center-safe",
			"end-safe"
		], j = () => ["auto", ...w()], M = () => [
			L,
			"auto",
			"full",
			"dvw",
			"dvh",
			"lvw",
			"lvh",
			"svw",
			"svh",
			"min",
			"max",
			"fit",
			...w()
		], te = () => [
			L,
			"screen",
			"full",
			"dvw",
			"lvw",
			"svw",
			"min",
			"max",
			"fit",
			...w()
		], P = () => [
			L,
			"screen",
			"full",
			"lh",
			"dvh",
			"lvh",
			"svh",
			"min",
			"max",
			"fit",
			...w()
		], F = () => [
			e,
			B,
			z
		], ne = () => [
			...b(),
			V,
			xe,
			{ position: [B, z] }
		], re = () => ["no-repeat", { repeat: [
			"",
			"x",
			"y",
			"space",
			"round"
		] }], ie = () => [
			"auto",
			"cover",
			"contain",
			Ee,
			ge,
			{ size: [B, z] }
		], ae = () => [
			se,
			we,
			_e
		], I = () => [
			"",
			"none",
			"full",
			l,
			B,
			z
		], ue = () => [
			"",
			R,
			we,
			_e
		], de = () => [
			"solid",
			"dashed",
			"dotted",
			"double"
		], fe = () => [
			"normal",
			"multiply",
			"screen",
			"overlay",
			"darken",
			"lighten",
			"color-dodge",
			"color-burn",
			"hard-light",
			"soft-light",
			"difference",
			"exclusion",
			"hue",
			"saturation",
			"color",
			"luminosity"
		], pe = () => [
			R,
			se,
			V,
			xe
		], Ae = () => [
			"",
			"none",
			m,
			B,
			z
		], je = () => [
			"none",
			R,
			B,
			z
		], H = () => [
			"none",
			R,
			B,
			z
		], Me = () => [
			R,
			B,
			z
		], Ne = () => [
			L,
			"full",
			...w()
		];
		return {
			cacheSize: 500,
			theme: {
				animate: [
					"spin",
					"ping",
					"pulse",
					"bounce"
				],
				aspect: ["video"],
				blur: [ce],
				breakpoint: [ce],
				color: [le],
				container: [ce],
				"drop-shadow": [ce],
				ease: [
					"in",
					"out",
					"in-out"
				],
				font: [me],
				"font-weight": [
					"thin",
					"extralight",
					"light",
					"normal",
					"medium",
					"semibold",
					"bold",
					"extrabold",
					"black"
				],
				"inset-shadow": [ce],
				leading: [
					"none",
					"tight",
					"snug",
					"normal",
					"relaxed",
					"loose"
				],
				perspective: [
					"dramatic",
					"near",
					"normal",
					"midrange",
					"distant",
					"none"
				],
				radius: [ce],
				shadow: [ce],
				spacing: ["px", R],
				text: [ce],
				"text-shadow": [ce],
				tracking: [
					"tighter",
					"tight",
					"normal",
					"wide",
					"wider",
					"widest"
				]
			},
			classGroups: {
				aspect: [{ aspect: [
					"auto",
					"square",
					L,
					z,
					B,
					g
				] }],
				container: ["container"],
				"container-type": [{ "@container": [
					"",
					"normal",
					"size",
					B,
					z
				] }],
				"container-named": [he],
				columns: [{ columns: [
					R,
					z,
					B,
					s
				] }],
				"break-after": [{ "break-after": y() }],
				"break-before": [{ "break-before": y() }],
				"break-inside": [{ "break-inside": [
					"auto",
					"avoid",
					"avoid-page",
					"avoid-column"
				] }],
				"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
				box: [{ box: ["border", "content"] }],
				display: [
					"block",
					"inline-block",
					"inline",
					"flex",
					"inline-flex",
					"table",
					"inline-table",
					"table-caption",
					"table-cell",
					"table-column",
					"table-column-group",
					"table-footer-group",
					"table-header-group",
					"table-row-group",
					"table-row",
					"flow-root",
					"grid",
					"inline-grid",
					"contents",
					"list-item",
					"hidden"
				],
				sr: ["sr-only", "not-sr-only"],
				float: [{ float: [
					"right",
					"left",
					"none",
					"start",
					"end"
				] }],
				clear: [{ clear: [
					"left",
					"right",
					"both",
					"none",
					"start",
					"end"
				] }],
				isolation: ["isolate", "isolation-auto"],
				"object-fit": [{ object: [
					"contain",
					"cover",
					"fill",
					"none",
					"scale-down"
				] }],
				"object-position": [{ object: x() }],
				overflow: [{ overflow: S() }],
				"overflow-x": [{ "overflow-x": S() }],
				"overflow-y": [{ "overflow-y": S() }],
				overscroll: [{ overscroll: C() }],
				"overscroll-x": [{ "overscroll-x": C() }],
				"overscroll-y": [{ "overscroll-y": C() }],
				position: [
					"static",
					"fixed",
					"absolute",
					"relative",
					"sticky"
				],
				inset: [{ inset: T() }],
				"inset-x": [{ "inset-x": T() }],
				"inset-y": [{ "inset-y": T() }],
				start: [{
					"inset-s": T(),
					start: T()
				}],
				end: [{
					"inset-e": T(),
					end: T()
				}],
				"inset-bs": [{ "inset-bs": T() }],
				"inset-be": [{ "inset-be": T() }],
				top: [{ top: T() }],
				right: [{ right: T() }],
				bottom: [{ bottom: T() }],
				left: [{ left: T() }],
				visibility: [
					"visible",
					"invisible",
					"collapse"
				],
				z: [{ z: [
					oe,
					"auto",
					B,
					z
				] }],
				basis: [{ basis: [
					L,
					"full",
					"auto",
					s,
					...w()
				] }],
				"flex-direction": [{ flex: [
					"row",
					"row-reverse",
					"col",
					"col-reverse"
				] }],
				"flex-wrap": [{ flex: [
					"nowrap",
					"wrap",
					"wrap-reverse"
				] }],
				flex: [{ flex: [
					R,
					L,
					"auto",
					"initial",
					"none",
					z
				] }],
				grow: [{ grow: [
					"",
					R,
					B,
					z
				] }],
				shrink: [{ shrink: [
					"",
					R,
					B,
					z
				] }],
				order: [{ order: [
					oe,
					"first",
					"last",
					"none",
					B,
					z
				] }],
				"grid-cols": [{ "grid-cols": E() }],
				"col-start-end": [{ col: D() }],
				"col-start": [{ "col-start": O() }],
				"col-end": [{ "col-end": O() }],
				"grid-rows": [{ "grid-rows": E() }],
				"row-start-end": [{ row: D() }],
				"row-start": [{ "row-start": O() }],
				"row-end": [{ "row-end": O() }],
				"grid-flow": [{ "grid-flow": [
					"row",
					"col",
					"dense",
					"row-dense",
					"col-dense"
				] }],
				"auto-cols": [{ "auto-cols": ee() }],
				"auto-rows": [{ "auto-rows": ee() }],
				gap: [{ gap: w() }],
				"gap-x": [{ "gap-x": w() }],
				"gap-y": [{ "gap-y": w() }],
				"justify-content": [{ justify: [...k(), "normal"] }],
				"justify-items": [{ "justify-items": [...A(), "normal"] }],
				"justify-self": [{ "justify-self": ["auto", ...A()] }],
				"align-content": [{ content: ["normal", ...k()] }],
				"align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
				"align-self": [{ self: [
					"auto",
					...A(),
					{ baseline: ["", "last"] }
				] }],
				"place-content": [{ "place-content": k() }],
				"place-items": [{ "place-items": [...A(), "baseline"] }],
				"place-self": [{ "place-self": ["auto", ...A()] }],
				p: [{ p: w() }],
				px: [{ px: w() }],
				py: [{ py: w() }],
				ps: [{ ps: w() }],
				pe: [{ pe: w() }],
				pbs: [{ pbs: w() }],
				pbe: [{ pbe: w() }],
				pt: [{ pt: w() }],
				pr: [{ pr: w() }],
				pb: [{ pb: w() }],
				pl: [{ pl: w() }],
				m: [{ m: j() }],
				mx: [{ mx: j() }],
				my: [{ my: j() }],
				ms: [{ ms: j() }],
				me: [{ me: j() }],
				mbs: [{ mbs: j() }],
				mbe: [{ mbe: j() }],
				mt: [{ mt: j() }],
				mr: [{ mr: j() }],
				mb: [{ mb: j() }],
				ml: [{ ml: j() }],
				"space-x": [{ "space-x": w() }],
				"space-x-reverse": ["space-x-reverse"],
				"space-y": [{ "space-y": w() }],
				"space-y-reverse": ["space-y-reverse"],
				size: [{ size: M() }],
				"inline-size": [{ inline: ["auto", ...te()] }],
				"min-inline-size": [{ "min-inline": ["auto", ...te()] }],
				"max-inline-size": [{ "max-inline": ["none", ...te()] }],
				"block-size": [{ block: ["auto", ...P()] }],
				"min-block-size": [{ "min-block": ["auto", ...P()] }],
				"max-block-size": [{ "max-block": ["none", ...P()] }],
				w: [{ w: [
					s,
					"screen",
					...M()
				] }],
				"min-w": [{ "min-w": [
					s,
					"screen",
					"none",
					...M()
				] }],
				"max-w": [{ "max-w": [
					s,
					"screen",
					"none",
					"prose",
					{ screen: [o] },
					...M()
				] }],
				h: [{ h: [
					"screen",
					"lh",
					...M()
				] }],
				"min-h": [{ "min-h": [
					"screen",
					"lh",
					"none",
					...M()
				] }],
				"max-h": [{ "max-h": [
					"screen",
					"lh",
					...M()
				] }],
				"font-size": [{ text: [
					"base",
					n,
					we,
					_e
				] }],
				"font-smoothing": ["antialiased", "subpixel-antialiased"],
				"font-style": ["italic", "not-italic"],
				"font-weight": [{ font: [
					r,
					ke,
					ye
				] }],
				"font-stretch": [{ "font-stretch": [
					"ultra-condensed",
					"extra-condensed",
					"condensed",
					"semi-condensed",
					"normal",
					"semi-expanded",
					"expanded",
					"extra-expanded",
					"ultra-expanded",
					se,
					z
				] }],
				"font-family": [{ font: [
					Te,
					be,
					t
				] }],
				"font-features": [{ "font-features": [z] }],
				"fvn-normal": ["normal-nums"],
				"fvn-ordinal": ["ordinal"],
				"fvn-slashed-zero": ["slashed-zero"],
				"fvn-figure": ["lining-nums", "oldstyle-nums"],
				"fvn-spacing": ["proportional-nums", "tabular-nums"],
				"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
				tracking: [{ tracking: [
					i,
					B,
					z
				] }],
				"line-clamp": [{ "line-clamp": [
					R,
					"none",
					B,
					ve
				] }],
				leading: [{ leading: [a, ...w()] }],
				"list-image": [{ "list-image": [
					"none",
					B,
					z
				] }],
				"list-style-position": [{ list: ["inside", "outside"] }],
				"list-style-type": [{ list: [
					"disc",
					"decimal",
					"none",
					B,
					z
				] }],
				"text-alignment": [{ text: [
					"left",
					"center",
					"right",
					"justify",
					"start",
					"end"
				] }],
				"placeholder-color": [{ placeholder: F() }],
				"text-color": [{ text: F() }],
				"text-decoration": [
					"underline",
					"overline",
					"line-through",
					"no-underline"
				],
				"text-decoration-style": [{ decoration: [...de(), "wavy"] }],
				"text-decoration-thickness": [{ decoration: [
					R,
					"from-font",
					"auto",
					B,
					_e
				] }],
				"text-decoration-color": [{ decoration: F() }],
				"underline-offset": [{ "underline-offset": [
					R,
					"auto",
					B,
					z
				] }],
				"text-transform": [
					"uppercase",
					"lowercase",
					"capitalize",
					"normal-case"
				],
				"text-overflow": [
					"truncate",
					"text-ellipsis",
					"text-clip"
				],
				"text-wrap": [{ text: [
					"wrap",
					"nowrap",
					"balance",
					"pretty"
				] }],
				indent: [{ indent: w() }],
				"tab-size": [{ tab: [
					oe,
					B,
					z
				] }],
				"vertical-align": [{ align: [
					"baseline",
					"top",
					"middle",
					"bottom",
					"text-top",
					"text-bottom",
					"sub",
					"super",
					B,
					z
				] }],
				whitespace: [{ whitespace: [
					"normal",
					"nowrap",
					"pre",
					"pre-line",
					"pre-wrap",
					"break-spaces"
				] }],
				break: [{ break: [
					"normal",
					"words",
					"all",
					"keep"
				] }],
				wrap: [{ wrap: [
					"break-word",
					"anywhere",
					"normal"
				] }],
				hyphens: [{ hyphens: [
					"none",
					"manual",
					"auto"
				] }],
				content: [{ content: [
					"none",
					B,
					z
				] }],
				"bg-attachment": [{ bg: [
					"fixed",
					"local",
					"scroll"
				] }],
				"bg-clip": [{ "bg-clip": [
					"border",
					"padding",
					"content",
					"text"
				] }],
				"bg-origin": [{ "bg-origin": [
					"border",
					"padding",
					"content"
				] }],
				"bg-position": [{ bg: ne() }],
				"bg-repeat": [{ bg: re() }],
				"bg-size": [{ bg: ie() }],
				"bg-image": [{ bg: [
					"none",
					{
						linear: [
							{ to: [
								"t",
								"tr",
								"r",
								"br",
								"b",
								"bl",
								"l",
								"tl"
							] },
							oe,
							B,
							z
						],
						radial: [
							"",
							B,
							z
						],
						conic: [
							oe,
							B,
							z
						]
					},
					De,
					Se
				] }],
				"bg-color": [{ bg: F() }],
				"gradient-from-pos": [{ from: ae() }],
				"gradient-via-pos": [{ via: ae() }],
				"gradient-to-pos": [{ to: ae() }],
				"gradient-from": [{ from: F() }],
				"gradient-via": [{ via: F() }],
				"gradient-to": [{ to: F() }],
				rounded: [{ rounded: I() }],
				"rounded-s": [{ "rounded-s": I() }],
				"rounded-e": [{ "rounded-e": I() }],
				"rounded-t": [{ "rounded-t": I() }],
				"rounded-r": [{ "rounded-r": I() }],
				"rounded-b": [{ "rounded-b": I() }],
				"rounded-l": [{ "rounded-l": I() }],
				"rounded-ss": [{ "rounded-ss": I() }],
				"rounded-se": [{ "rounded-se": I() }],
				"rounded-ee": [{ "rounded-ee": I() }],
				"rounded-es": [{ "rounded-es": I() }],
				"rounded-tl": [{ "rounded-tl": I() }],
				"rounded-tr": [{ "rounded-tr": I() }],
				"rounded-br": [{ "rounded-br": I() }],
				"rounded-bl": [{ "rounded-bl": I() }],
				"border-w": [{ border: ue() }],
				"border-w-x": [{ "border-x": ue() }],
				"border-w-y": [{ "border-y": ue() }],
				"border-w-s": [{ "border-s": ue() }],
				"border-w-e": [{ "border-e": ue() }],
				"border-w-bs": [{ "border-bs": ue() }],
				"border-w-be": [{ "border-be": ue() }],
				"border-w-t": [{ "border-t": ue() }],
				"border-w-r": [{ "border-r": ue() }],
				"border-w-b": [{ "border-b": ue() }],
				"border-w-l": [{ "border-l": ue() }],
				"divide-x": [{ "divide-x": ue() }],
				"divide-x-reverse": ["divide-x-reverse"],
				"divide-y": [{ "divide-y": ue() }],
				"divide-y-reverse": ["divide-y-reverse"],
				"border-style": [{ border: [
					...de(),
					"hidden",
					"none"
				] }],
				"divide-style": [{ divide: [
					...de(),
					"hidden",
					"none"
				] }],
				"border-color": [{ border: F() }],
				"border-color-x": [{ "border-x": F() }],
				"border-color-y": [{ "border-y": F() }],
				"border-color-s": [{ "border-s": F() }],
				"border-color-e": [{ "border-e": F() }],
				"border-color-bs": [{ "border-bs": F() }],
				"border-color-be": [{ "border-be": F() }],
				"border-color-t": [{ "border-t": F() }],
				"border-color-r": [{ "border-r": F() }],
				"border-color-b": [{ "border-b": F() }],
				"border-color-l": [{ "border-l": F() }],
				"divide-color": [{ divide: F() }],
				"outline-style": [{ outline: [
					...de(),
					"none",
					"hidden"
				] }],
				"outline-offset": [{ "outline-offset": [
					R,
					B,
					z
				] }],
				"outline-w": [{ outline: [
					"",
					R,
					we,
					_e
				] }],
				"outline-color": [{ outline: F() }],
				shadow: [{ shadow: [
					"",
					"none",
					u,
					Oe,
					Ce
				] }],
				"shadow-color": [{ shadow: F() }],
				"inset-shadow": [{ "inset-shadow": [
					"none",
					d,
					Oe,
					Ce
				] }],
				"inset-shadow-color": [{ "inset-shadow": F() }],
				"ring-w": [{ ring: ue() }],
				"ring-w-inset": ["ring-inset"],
				"ring-color": [{ ring: F() }],
				"ring-offset-w": [{ "ring-offset": [R, _e] }],
				"ring-offset-color": [{ "ring-offset": F() }],
				"inset-ring-w": [{ "inset-ring": ue() }],
				"inset-ring-color": [{ "inset-ring": F() }],
				"text-shadow": [{ "text-shadow": [
					"none",
					f,
					Oe,
					Ce
				] }],
				"text-shadow-color": [{ "text-shadow": F() }],
				opacity: [{ opacity: [
					R,
					B,
					z
				] }],
				"mix-blend": [{ "mix-blend": [
					...fe(),
					"plus-darker",
					"plus-lighter"
				] }],
				"bg-blend": [{ "bg-blend": fe() }],
				"mask-clip": [{ "mask-clip": [
					"border",
					"padding",
					"content",
					"fill",
					"stroke",
					"view"
				] }, "mask-no-clip"],
				"mask-composite": [{ mask: [
					"add",
					"subtract",
					"intersect",
					"exclude"
				] }],
				"mask-image-linear-pos": [{ "mask-linear": [R] }],
				"mask-image-linear-from-pos": [{ "mask-linear-from": pe() }],
				"mask-image-linear-to-pos": [{ "mask-linear-to": pe() }],
				"mask-image-linear-from-color": [{ "mask-linear-from": F() }],
				"mask-image-linear-to-color": [{ "mask-linear-to": F() }],
				"mask-image-t-from-pos": [{ "mask-t-from": pe() }],
				"mask-image-t-to-pos": [{ "mask-t-to": pe() }],
				"mask-image-t-from-color": [{ "mask-t-from": F() }],
				"mask-image-t-to-color": [{ "mask-t-to": F() }],
				"mask-image-r-from-pos": [{ "mask-r-from": pe() }],
				"mask-image-r-to-pos": [{ "mask-r-to": pe() }],
				"mask-image-r-from-color": [{ "mask-r-from": F() }],
				"mask-image-r-to-color": [{ "mask-r-to": F() }],
				"mask-image-b-from-pos": [{ "mask-b-from": pe() }],
				"mask-image-b-to-pos": [{ "mask-b-to": pe() }],
				"mask-image-b-from-color": [{ "mask-b-from": F() }],
				"mask-image-b-to-color": [{ "mask-b-to": F() }],
				"mask-image-l-from-pos": [{ "mask-l-from": pe() }],
				"mask-image-l-to-pos": [{ "mask-l-to": pe() }],
				"mask-image-l-from-color": [{ "mask-l-from": F() }],
				"mask-image-l-to-color": [{ "mask-l-to": F() }],
				"mask-image-x-from-pos": [{ "mask-x-from": pe() }],
				"mask-image-x-to-pos": [{ "mask-x-to": pe() }],
				"mask-image-x-from-color": [{ "mask-x-from": F() }],
				"mask-image-x-to-color": [{ "mask-x-to": F() }],
				"mask-image-y-from-pos": [{ "mask-y-from": pe() }],
				"mask-image-y-to-pos": [{ "mask-y-to": pe() }],
				"mask-image-y-from-color": [{ "mask-y-from": F() }],
				"mask-image-y-to-color": [{ "mask-y-to": F() }],
				"mask-image-radial": [{ "mask-radial": [B, z] }],
				"mask-image-radial-from-pos": [{ "mask-radial-from": pe() }],
				"mask-image-radial-to-pos": [{ "mask-radial-to": pe() }],
				"mask-image-radial-from-color": [{ "mask-radial-from": F() }],
				"mask-image-radial-to-color": [{ "mask-radial-to": F() }],
				"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
				"mask-image-radial-size": [{ "mask-radial": [{
					closest: ["side", "corner"],
					farthest: ["side", "corner"]
				}] }],
				"mask-image-radial-pos": [{ "mask-radial-at": b() }],
				"mask-image-conic-pos": [{ "mask-conic": [R] }],
				"mask-image-conic-from-pos": [{ "mask-conic-from": pe() }],
				"mask-image-conic-to-pos": [{ "mask-conic-to": pe() }],
				"mask-image-conic-from-color": [{ "mask-conic-from": F() }],
				"mask-image-conic-to-color": [{ "mask-conic-to": F() }],
				"mask-mode": [{ mask: [
					"alpha",
					"luminance",
					"match"
				] }],
				"mask-origin": [{ "mask-origin": [
					"border",
					"padding",
					"content",
					"fill",
					"stroke",
					"view"
				] }],
				"mask-position": [{ mask: ne() }],
				"mask-repeat": [{ mask: re() }],
				"mask-size": [{ mask: ie() }],
				"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
				"mask-image": [{ mask: [
					"none",
					B,
					z
				] }],
				filter: [{ filter: [
					"",
					"none",
					B,
					z
				] }],
				blur: [{ blur: Ae() }],
				brightness: [{ brightness: [
					R,
					B,
					z
				] }],
				contrast: [{ contrast: [
					R,
					B,
					z
				] }],
				"drop-shadow": [{ "drop-shadow": [
					"",
					"none",
					p,
					Oe,
					Ce
				] }],
				"drop-shadow-color": [{ "drop-shadow": F() }],
				grayscale: [{ grayscale: [
					"",
					R,
					B,
					z
				] }],
				"hue-rotate": [{ "hue-rotate": [
					R,
					B,
					z
				] }],
				invert: [{ invert: [
					"",
					R,
					B,
					z
				] }],
				saturate: [{ saturate: [
					R,
					B,
					z
				] }],
				sepia: [{ sepia: [
					"",
					R,
					B,
					z
				] }],
				"backdrop-filter": [{ "backdrop-filter": [
					"",
					"none",
					B,
					z
				] }],
				"backdrop-blur": [{ "backdrop-blur": Ae() }],
				"backdrop-brightness": [{ "backdrop-brightness": [
					R,
					B,
					z
				] }],
				"backdrop-contrast": [{ "backdrop-contrast": [
					R,
					B,
					z
				] }],
				"backdrop-grayscale": [{ "backdrop-grayscale": [
					"",
					R,
					B,
					z
				] }],
				"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
					R,
					B,
					z
				] }],
				"backdrop-invert": [{ "backdrop-invert": [
					"",
					R,
					B,
					z
				] }],
				"backdrop-opacity": [{ "backdrop-opacity": [
					R,
					B,
					z
				] }],
				"backdrop-saturate": [{ "backdrop-saturate": [
					R,
					B,
					z
				] }],
				"backdrop-sepia": [{ "backdrop-sepia": [
					"",
					R,
					B,
					z
				] }],
				"border-collapse": [{ border: ["collapse", "separate"] }],
				"border-spacing": [{ "border-spacing": w() }],
				"border-spacing-x": [{ "border-spacing-x": w() }],
				"border-spacing-y": [{ "border-spacing-y": w() }],
				"table-layout": [{ table: ["auto", "fixed"] }],
				caption: [{ caption: ["top", "bottom"] }],
				transition: [{ transition: [
					"",
					"all",
					"colors",
					"opacity",
					"shadow",
					"transform",
					"none",
					B,
					z
				] }],
				"transition-behavior": [{ transition: ["normal", "discrete"] }],
				duration: [{ duration: [
					R,
					"initial",
					B,
					z
				] }],
				ease: [{ ease: [
					"linear",
					"initial",
					_,
					B,
					z
				] }],
				delay: [{ delay: [
					R,
					B,
					z
				] }],
				animate: [{ animate: [
					"none",
					v,
					B,
					z
				] }],
				backface: [{ backface: ["hidden", "visible"] }],
				perspective: [{ perspective: [
					h,
					B,
					z
				] }],
				"perspective-origin": [{ "perspective-origin": x() }],
				rotate: [{ rotate: je() }],
				"rotate-x": [{ "rotate-x": je() }],
				"rotate-y": [{ "rotate-y": je() }],
				"rotate-z": [{ "rotate-z": je() }],
				scale: [{ scale: H() }],
				"scale-x": [{ "scale-x": H() }],
				"scale-y": [{ "scale-y": H() }],
				"scale-z": [{ "scale-z": H() }],
				"scale-3d": ["scale-3d"],
				skew: [{ skew: Me() }],
				"skew-x": [{ "skew-x": Me() }],
				"skew-y": [{ "skew-y": Me() }],
				transform: [{ transform: [
					B,
					z,
					"",
					"none",
					"gpu",
					"cpu"
				] }],
				"transform-origin": [{ origin: x() }],
				"transform-style": [{ transform: ["3d", "flat"] }],
				translate: [{ translate: Ne() }],
				"translate-x": [{ "translate-x": Ne() }],
				"translate-y": [{ "translate-y": Ne() }],
				"translate-z": [{ "translate-z": Ne() }],
				"translate-none": ["translate-none"],
				zoom: [{ zoom: [
					oe,
					B,
					z
				] }],
				accent: [{ accent: F() }],
				appearance: [{ appearance: ["none", "auto"] }],
				"caret-color": [{ caret: F() }],
				"color-scheme": [{ scheme: [
					"normal",
					"dark",
					"light",
					"light-dark",
					"only-dark",
					"only-light"
				] }],
				cursor: [{ cursor: [
					"auto",
					"default",
					"pointer",
					"wait",
					"text",
					"move",
					"help",
					"not-allowed",
					"none",
					"context-menu",
					"progress",
					"cell",
					"crosshair",
					"vertical-text",
					"alias",
					"copy",
					"no-drop",
					"grab",
					"grabbing",
					"all-scroll",
					"col-resize",
					"row-resize",
					"n-resize",
					"e-resize",
					"s-resize",
					"w-resize",
					"ne-resize",
					"nw-resize",
					"se-resize",
					"sw-resize",
					"ew-resize",
					"ns-resize",
					"nesw-resize",
					"nwse-resize",
					"zoom-in",
					"zoom-out",
					B,
					z
				] }],
				"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
				"pointer-events": [{ "pointer-events": ["auto", "none"] }],
				resize: [{ resize: [
					"none",
					"",
					"y",
					"x"
				] }],
				"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
				"scrollbar-thumb-color": [{ "scrollbar-thumb": F() }],
				"scrollbar-track-color": [{ "scrollbar-track": F() }],
				"scrollbar-gutter": [{ "scrollbar-gutter": [
					"auto",
					"stable",
					"both"
				] }],
				"scrollbar-w": [{ scrollbar: [
					"auto",
					"thin",
					"none"
				] }],
				"scroll-m": [{ "scroll-m": w() }],
				"scroll-mx": [{ "scroll-mx": w() }],
				"scroll-my": [{ "scroll-my": w() }],
				"scroll-ms": [{ "scroll-ms": w() }],
				"scroll-me": [{ "scroll-me": w() }],
				"scroll-mbs": [{ "scroll-mbs": w() }],
				"scroll-mbe": [{ "scroll-mbe": w() }],
				"scroll-mt": [{ "scroll-mt": w() }],
				"scroll-mr": [{ "scroll-mr": w() }],
				"scroll-mb": [{ "scroll-mb": w() }],
				"scroll-ml": [{ "scroll-ml": w() }],
				"scroll-p": [{ "scroll-p": w() }],
				"scroll-px": [{ "scroll-px": w() }],
				"scroll-py": [{ "scroll-py": w() }],
				"scroll-ps": [{ "scroll-ps": w() }],
				"scroll-pe": [{ "scroll-pe": w() }],
				"scroll-pbs": [{ "scroll-pbs": w() }],
				"scroll-pbe": [{ "scroll-pbe": w() }],
				"scroll-pt": [{ "scroll-pt": w() }],
				"scroll-pr": [{ "scroll-pr": w() }],
				"scroll-pb": [{ "scroll-pb": w() }],
				"scroll-pl": [{ "scroll-pl": w() }],
				"snap-align": [{ snap: [
					"start",
					"end",
					"center",
					"align-none"
				] }],
				"snap-stop": [{ snap: ["normal", "always"] }],
				"snap-type": [{ snap: [
					"none",
					"x",
					"y",
					"both"
				] }],
				"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
				touch: [{ touch: [
					"auto",
					"none",
					"manipulation"
				] }],
				"touch-x": [{ "touch-pan": [
					"x",
					"left",
					"right"
				] }],
				"touch-y": [{ "touch-pan": [
					"y",
					"up",
					"down"
				] }],
				"touch-pz": ["touch-pinch-zoom"],
				select: [{ select: [
					"none",
					"text",
					"all",
					"auto"
				] }],
				"will-change": [{ "will-change": [
					"auto",
					"scroll",
					"contents",
					"transform",
					B,
					z
				] }],
				fill: [{ fill: ["none", ...F()] }],
				"stroke-w": [{ stroke: [
					R,
					we,
					_e,
					ve
				] }],
				stroke: [{ stroke: ["none", ...F()] }],
				"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
			},
			conflictingClassGroups: {
				"container-named": ["container-type"],
				overflow: ["overflow-x", "overflow-y"],
				overscroll: ["overscroll-x", "overscroll-y"],
				inset: [
					"inset-x",
					"inset-y",
					"inset-bs",
					"inset-be",
					"start",
					"end",
					"top",
					"right",
					"bottom",
					"left"
				],
				"inset-x": ["right", "left"],
				"inset-y": ["top", "bottom"],
				flex: [
					"basis",
					"grow",
					"shrink"
				],
				gap: ["gap-x", "gap-y"],
				p: [
					"px",
					"py",
					"ps",
					"pe",
					"pbs",
					"pbe",
					"pt",
					"pr",
					"pb",
					"pl"
				],
				px: ["pr", "pl"],
				py: ["pt", "pb"],
				m: [
					"mx",
					"my",
					"ms",
					"me",
					"mbs",
					"mbe",
					"mt",
					"mr",
					"mb",
					"ml"
				],
				mx: ["mr", "ml"],
				my: ["mt", "mb"],
				size: ["w", "h"],
				"font-size": ["leading"],
				"fvn-normal": [
					"fvn-ordinal",
					"fvn-slashed-zero",
					"fvn-figure",
					"fvn-spacing",
					"fvn-fraction"
				],
				"fvn-ordinal": ["fvn-normal"],
				"fvn-slashed-zero": ["fvn-normal"],
				"fvn-figure": ["fvn-normal"],
				"fvn-spacing": ["fvn-normal"],
				"fvn-fraction": ["fvn-normal"],
				"line-clamp": ["display", "overflow"],
				rounded: [
					"rounded-s",
					"rounded-e",
					"rounded-t",
					"rounded-r",
					"rounded-b",
					"rounded-l",
					"rounded-ss",
					"rounded-se",
					"rounded-ee",
					"rounded-es",
					"rounded-tl",
					"rounded-tr",
					"rounded-br",
					"rounded-bl"
				],
				"rounded-s": ["rounded-ss", "rounded-es"],
				"rounded-e": ["rounded-se", "rounded-ee"],
				"rounded-t": ["rounded-tl", "rounded-tr"],
				"rounded-r": ["rounded-tr", "rounded-br"],
				"rounded-b": ["rounded-br", "rounded-bl"],
				"rounded-l": ["rounded-tl", "rounded-bl"],
				"border-spacing": ["border-spacing-x", "border-spacing-y"],
				"border-w": [
					"border-w-x",
					"border-w-y",
					"border-w-s",
					"border-w-e",
					"border-w-bs",
					"border-w-be",
					"border-w-t",
					"border-w-r",
					"border-w-b",
					"border-w-l"
				],
				"border-w-x": ["border-w-r", "border-w-l"],
				"border-w-y": ["border-w-t", "border-w-b"],
				"border-color": [
					"border-color-x",
					"border-color-y",
					"border-color-s",
					"border-color-e",
					"border-color-bs",
					"border-color-be",
					"border-color-t",
					"border-color-r",
					"border-color-b",
					"border-color-l"
				],
				"border-color-x": ["border-color-r", "border-color-l"],
				"border-color-y": ["border-color-t", "border-color-b"],
				translate: [
					"translate-x",
					"translate-y",
					"translate-none"
				],
				"translate-none": [
					"translate",
					"translate-x",
					"translate-y",
					"translate-z"
				],
				"scroll-m": [
					"scroll-mx",
					"scroll-my",
					"scroll-ms",
					"scroll-me",
					"scroll-mbs",
					"scroll-mbe",
					"scroll-mt",
					"scroll-mr",
					"scroll-mb",
					"scroll-ml"
				],
				"scroll-mx": ["scroll-mr", "scroll-ml"],
				"scroll-my": ["scroll-mt", "scroll-mb"],
				"scroll-p": [
					"scroll-px",
					"scroll-py",
					"scroll-ps",
					"scroll-pe",
					"scroll-pbs",
					"scroll-pbe",
					"scroll-pt",
					"scroll-pr",
					"scroll-pb",
					"scroll-pl"
				],
				"scroll-px": ["scroll-pr", "scroll-pl"],
				"scroll-py": ["scroll-pt", "scroll-pb"],
				touch: [
					"touch-x",
					"touch-y",
					"touch-pz"
				],
				"touch-x": ["touch"],
				"touch-y": ["touch"],
				"touch-pz": ["touch"]
			},
			conflictingClassGroupModifiers: { "font-size": ["leading"] },
			postfixLookupClassGroups: ["container-type"],
			orderSensitiveModifiers: [
				"*",
				"**",
				"after",
				"backdrop",
				"before",
				"details-content",
				"file",
				"first-letter",
				"first-line",
				"marker",
				"placeholder",
				"selection"
			]
		};
	}, Ve = (e, { cacheSize: t, prefix: n, experimentalParseClassName: r, extend: i = {}, override: a = {} }) => (He(e, "cacheSize", t), He(e, "prefix", n), He(e, "experimentalParseClassName", r), Ue(e.theme, a.theme), Ue(e.classGroups, a.classGroups), Ue(e.conflictingClassGroups, a.conflictingClassGroups), Ue(e.conflictingClassGroupModifiers, a.conflictingClassGroupModifiers), He(e, "postfixLookupClassGroups", a.postfixLookupClassGroups), He(e, "orderSensitiveModifiers", a.orderSensitiveModifiers), We(e.theme, i.theme), We(e.classGroups, i.classGroups), We(e.conflictingClassGroups, i.conflictingClassGroups), We(e.conflictingClassGroupModifiers, i.conflictingClassGroupModifiers), Ge(e, i, "postfixLookupClassGroups"), Ge(e, i, "orderSensitiveModifiers"), e), He = (e, t, n) => {
		n !== void 0 && (e[t] = n);
	}, Ue = (e, t) => {
		if (t) for (let n in t) He(e, n, t[n]);
	}, We = (e, t) => {
		if (t) for (let n in t) Ge(e, t, n);
	}, Ge = (e, t, n) => {
		let r = t[n];
		r !== void 0 && (e[n] = e[n] ? e[n].concat(r) : r);
	}, Ke = (e, ...t) => typeof e == "function" ? j(Be, e, ...t) : j(() => Ve(Be(), e), ...t), qe = /* @__PURE__ */ j(Be);
	e.createTailwindMerge = j, e.extendTailwindMerge = Ke, e.fromTheme = N, e.getDefaultConfig = Be, e.mergeConfigs = Ve, e.twJoin = k, e.twMerge = qe, e.validators = ze;
})))();
function J(...e) {
	return (0, il.twMerge)(rl(e));
}
//#endregion
//#region outputs/lady-interactiva-github/source/components/ui/select.tsx
function al({ ...e }) {
	return /* @__PURE__ */ (0, V.jsx)(uc, {
		"data-slot": "select",
		...e
	});
}
function ol({ ...e }) {
	return /* @__PURE__ */ (0, V.jsx)(mc, {
		"data-slot": "select-value",
		...e
	});
}
function sl({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ (0, V.jsxs)(fc, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: J("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...r,
		children: [n, /* @__PURE__ */ (0, V.jsx)(hc, {
			asChild: !0,
			children: /* @__PURE__ */ (0, V.jsx)(j, { className: "size-4 opacity-50" })
		})]
	});
}
function cl({ className: e, children: t, position: n = "item-aligned", align: r = "center", ...i }) {
	return /* @__PURE__ */ (0, V.jsx)(vc, { children: /* @__PURE__ */ (0, V.jsxs)(bc, {
		"data-slot": "select-content",
		className: J("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ (0, V.jsx)(ul, {}),
			/* @__PURE__ */ (0, V.jsx)(Mc, {
				className: J("p-1", n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ (0, V.jsx)(dl, {})
		]
	}) });
}
function ll({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, V.jsxs)(Rc, {
		"data-slot": "select-item",
		className: J("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ (0, V.jsx)("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, V.jsx)(Hc, { children: /* @__PURE__ */ (0, V.jsx)(A, { className: "size-4" }) })
		}), /* @__PURE__ */ (0, V.jsx)(Bc, { children: t })]
	});
}
function ul({ className: e, ...t }) {
	return /* @__PURE__ */ (0, V.jsx)(Wc, {
		"data-slot": "select-scroll-up-button",
		className: J("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ (0, V.jsx)(M, { className: "size-4" })
	});
}
function dl({ className: e, ...t }) {
	return /* @__PURE__ */ (0, V.jsx)(Kc, {
		"data-slot": "select-scroll-down-button",
		className: J("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ (0, V.jsx)(j, { className: "size-4" })
	});
}
//#endregion
//#region outputs/lady-interactiva-github/source/components/ui/checkbox.tsx
function fl({ className: e, ...t }) {
	return /* @__PURE__ */ (0, V.jsx)(Pi, {
		"data-slot": "checkbox",
		className: J("peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary", e),
		...t,
		children: /* @__PURE__ */ (0, V.jsx)(Ii, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, V.jsx)(A, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region outputs/lady-interactiva-github/source/portal.tsx
var pl = [
	"Todas",
	"Matemáticas",
	"Lenguaje",
	"Ciencias",
	"Tecnología e IA",
	"Otras áreas"
];
function ml({ value: e, onChange: t, items: n, label: r }) {
	return /* @__PURE__ */ (0, V.jsxs)(al, {
		value: e,
		onValueChange: t,
		children: [/* @__PURE__ */ (0, V.jsx)(sl, {
			"aria-label": r,
			className: "choice",
			children: /* @__PURE__ */ (0, V.jsx)(ol, {})
		}), /* @__PURE__ */ (0, V.jsx)(cl, { children: n.map((e) => /* @__PURE__ */ (0, V.jsx)(ll, {
			value: e,
			children: e
		}, e)) })]
	});
}
function hl({ view: e }) {
	let [t, n] = (0, C.useState)([]), [r, i] = (0, C.useState)(!0), [a, o] = (0, C.useState)(""), [s, c] = (0, C.useState)(""), [l, u] = (0, C.useState)("Todas"), [d, f] = (0, C.useState)("Todos los niveles"), [p, m] = (0, C.useState)(!0), [h, g] = (0, C.useState)("actividad"), [_, v] = (0, C.useState)("Tecnología e IA"), [y, b] = (0, C.useState)("Primaria"), [x, S] = (0, C.useState)(!1), [w, T] = (0, C.useState)(!1), [E, D] = (0, C.useState)(""), [A, j] = (0, C.useState)(!1);
	async function M() {
		i(!0), o("");
		try {
			let e = await fetch("materiales.json", { cache: "no-store" });
			if (!e.ok) throw Error("No se pudo cargar el catálogo.");
			let t = await e.json();
			if (!Array.isArray(t)) throw Error("El catálogo no tiene el formato esperado.");
			n(t), m(!0);
		} catch (e) {
			o(e instanceof Error ? e.message : "No se pudo cargar el catálogo.");
		} finally {
			i(!1);
		}
	}
	(0, C.useEffect)(() => {
		M();
	}, []), (0, C.useEffect)(() => {
		let e = document.modelContext;
		if (!e?.registerTool) return;
		let t = new AbortController();
		try {
			Promise.resolve(e.registerTool({
				name: "filtrar_actividades",
				description: "Filtra la biblioteca visible por texto.",
				inputSchema: {
					type: "object",
					properties: { texto: {
						type: "string",
						maxLength: 120
					} },
					required: ["texto"],
					additionalProperties: !1
				},
				annotations: { readOnlyHint: !0 },
				execute(e) {
					if (typeof e?.texto != "string" || e.texto.length > 120) throw Error("Texto inválido");
					return c(e.texto), { filtro: e.texto };
				}
			}, { signal: t.signal })).catch(() => {});
		} catch {}
		return () => t.abort();
	}, []);
	let R = e === "proyectos", oe = t.filter((e) => e.kind === (R ? "proyecto" : "actividad") && (l === "Todas" || e.subject === l) && (d === "Todos los niveles" || e.level === d || e.level === "Todos los niveles") && (e.title + " " + e.description + " " + e.subject).toLowerCase().includes(s.toLowerCase()));
	async function se(e) {
		if (e.preventDefault(), r || a) return;
		let i = e.currentTarget, o = new FormData(i);
		j(!1), D("");
		try {
			let e = String(o.get("url") || "").trim(), r = String(o.get("download") || "").trim();
			if (!e && !r) throw Error("Agrega un enlace de actividad o una ruta de descarga.");
			for (let t of [e, r]) if (t && !ce(t)) throw Error("Usa un enlace https:// o una ruta dentro de materiales/, sin espacios ni puntos dobles.");
			let a = [{
				id: crypto.randomUUID(),
				title: String(o.get("title")).trim(),
				description: String(o.get("description")).trim(),
				kind: h,
				subject: _,
				level: y,
				uses_ai: +!!x,
				...e ? { url: e } : {},
				...r ? { download: r } : {}
			}, ...t], s = new Blob([JSON.stringify(a, null, 2) + "\n"], { type: "application/json;charset=utf-8" }), c = URL.createObjectURL(s), l = document.createElement("a");
			l.href = c, l.download = "materiales.json", l.click(), setTimeout(() => URL.revokeObjectURL(c), 1e4), n(a), j(!0), D("Catálogo preparado y descargado. Para publicarlo, sube materiales.json a la raíz del repositorio y tus archivos a materiales/. La página pública cambiará después de guardar en GitHub."), i.reset();
		} catch (e) {
			D(e instanceof Error ? e.message : "Revisa los datos.");
		}
	}
	function ce(e) {
		if (/^https:\/\//i.test(e)) try {
			let t = new URL(e);
			return !t.username && !t.password;
		} catch {
			return !1;
		}
		return /^materiales\/[a-zA-Z0-9_./-]+$/.test(e) && !e.includes("..");
	}
	return /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
		/* @__PURE__ */ (0, V.jsxs)("header", {
			className: "topbar",
			children: [
				/* @__PURE__ */ (0, V.jsxs)("a", {
					className: "brand",
					href: "index.html",
					children: [/* @__PURE__ */ (0, V.jsx)("span", {
						className: "brand-icon",
						children: /* @__PURE__ */ (0, V.jsx)(I, { size: 23 })
					}), /* @__PURE__ */ (0, V.jsxs)("span", { children: [
						"Lady",
						/* @__PURE__ */ (0, V.jsx)("span", {
							className: "brand-light",
							children: "Interactiva"
						}),
						/* @__PURE__ */ (0, V.jsx)("small", { children: "EL AULA DE LAS IDEAS" })
					] })]
				}),
				/* @__PURE__ */ (0, V.jsx)("nav", {
					"aria-label": "Navegación principal",
					children: [
						[
							"index.html",
							"Inicio",
							"inicio"
						],
						[
							"actividades.html",
							"Actividades",
							"actividades"
						],
						[
							"proyectos.html",
							"Proyectos",
							"proyectos"
						]
					].map(([t, n, r]) => /* @__PURE__ */ (0, V.jsx)("a", {
						href: t,
						"aria-current": e === r ? "page" : void 0,
						children: n
					}, r))
				}),
				/* @__PURE__ */ (0, V.jsxs)("a", {
					className: "publish-link " + (e === "publicar" ? "active" : ""),
					href: "publicar.html",
					children: [/* @__PURE__ */ (0, V.jsx)(ie, { size: 18 }), " Agregar material"]
				})
			]
		}),
		/* @__PURE__ */ (0, V.jsxs)("main", { children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "eyebrow",
			children: [
				/* @__PURE__ */ (0, V.jsx)("span", {
					className: "tiny-mark",
					children: "✳"
				}),
				" UN ESPACIO DE LA PROFE LADY ",
				/* @__PURE__ */ (0, V.jsx)("span", { className: "eyebrow-line" })
			]
		}), e === "publicar" ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsxs)("div", {
			className: "page-heading",
			children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [
				/* @__PURE__ */ (0, V.jsx)("span", {
					className: "section-kicker",
					children: "DEL AULA A LA COMUNIDAD"
				}),
				/* @__PURE__ */ (0, V.jsxs)("h1", { children: ["Comparte una nueva idea", /* @__PURE__ */ (0, V.jsx)("span", { children: "." })] }),
				/* @__PURE__ */ (0, V.jsx)("p", { children: "Prepara la ficha del material y descarga el catálogo para subirlo a GitHub." })
			] }), /* @__PURE__ */ (0, V.jsx)(L, {
				className: "heading-icon",
				size: 60
			})]
		}), /* @__PURE__ */ (0, V.jsxs)("div", {
			className: "publish-layout",
			children: [/* @__PURE__ */ (0, V.jsxs)("form", {
				onSubmit: se,
				className: "publish-form",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "form-title",
						children: [/* @__PURE__ */ (0, V.jsx)("span", {
							className: "number",
							children: "01"
						}), /* @__PURE__ */ (0, V.jsx)("h2", { children: "Cuéntanos sobre el material" })]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "form-grid",
						children: [/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Tipo de publicación", /* @__PURE__ */ (0, V.jsx)(ml, {
							label: "Tipo de publicación",
							value: h,
							onChange: g,
							items: ["actividad", "proyecto"]
						})] }), /* @__PURE__ */ (0, V.jsxs)("label", { children: ["Área", /* @__PURE__ */ (0, V.jsx)(ml, {
							label: "Área",
							value: _,
							onChange: v,
							items: pl.slice(1)
						})] })]
					}),
					/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Título", /* @__PURE__ */ (0, V.jsx)("input", {
						name: "title",
						required: !0,
						maxLength: 120,
						placeholder: "Ej. Una aventura por el sistema solar"
					})] }),
					/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Descripción y orientaciones", /* @__PURE__ */ (0, V.jsx)("textarea", {
						name: "description",
						required: !0,
						maxLength: 3e3,
						rows: 5,
						placeholder: "¿Qué aprenderán? Explica cómo usar el material."
					})] }),
					/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Nivel educativo", /* @__PURE__ */ (0, V.jsx)(ml, {
						label: "Nivel educativo",
						value: y,
						onChange: b,
						items: [
							"Primaria",
							"Secundaria",
							"Media",
							"Docentes",
							"Todos los niveles"
						]
					})] }),
					/* @__PURE__ */ (0, V.jsxs)("label", {
						className: "check-label",
						children: [/* @__PURE__ */ (0, V.jsx)(fl, {
							checked: x,
							onCheckedChange: (e) => S(e === !0)
						}), " Incluye actividades con inteligencia artificial"]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "form-title",
						children: [/* @__PURE__ */ (0, V.jsx)("span", {
							className: "number",
							children: "02"
						}), /* @__PURE__ */ (0, V.jsx)("h2", { children: "Agrega tu recurso" })]
					}),
					/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Enlace o ruta de la actividad", /* @__PURE__ */ (0, V.jsx)("input", {
						name: "url",
						type: "text",
						placeholder: "https://... o materiales/mi-actividad.html"
					})] }),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "hint",
						children: "Para Genially, Canva, sitios web u otras actividades ya publicadas."
					}),
					/* @__PURE__ */ (0, V.jsxs)("label", { children: ["Enlace o ruta para descargar (opcional)", /* @__PURE__ */ (0, V.jsx)("input", {
						name: "download",
						type: "text",
						placeholder: "materiales/mi-actividad.html o materiales/proyecto.zip"
					})] }),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "hint",
						children: "Sube tus archivos a la carpeta materiales del repositorio. Para una actividad HTML puedes usar la misma ruta en ambos campos; para un ZIP o PDF, basta con la descarga."
					}),
					/* @__PURE__ */ (0, V.jsx)("div", {
						className: "notice",
						children: "Este asistente prepara un archivo; no publica automáticamente. Solo quien tenga permiso para editar el repositorio podrá guardar los cambios en GitHub."
					}),
					E && /* @__PURE__ */ (0, V.jsx)("div", {
						role: "status",
						className: A ? "notice success" : "notice error",
						children: E
					}),
					/* @__PURE__ */ (0, V.jsx)("button", {
						className: "button primary",
						disabled: r || !!a,
						children: /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [/* @__PURE__ */ (0, V.jsx)(N, { size: 18 }), "Descargar catálogo actualizado"] })
					})
				]
			}), /* @__PURE__ */ (0, V.jsxs)("aside", {
				className: "publishing-aside",
				children: [
					/* @__PURE__ */ (0, V.jsx)("span", {
						className: "aside-symbol",
						children: /* @__PURE__ */ (0, V.jsx)(ne, { size: 34 })
					}),
					/* @__PURE__ */ (0, V.jsx)("h2", { children: "Una buena idea merece compartirse." }),
					/* @__PURE__ */ (0, V.jsx)("p", { children: "Un título claro y unas instrucciones breves ayudan a que cada visitante encuentre lo que necesita." }),
					/* @__PURE__ */ (0, V.jsx)("hr", {}),
					/* @__PURE__ */ (0, V.jsx)("h3", { children: "Todo en su lugar" }),
					/* @__PURE__ */ (0, V.jsxs)("p", { children: [/* @__PURE__ */ (0, V.jsx)(O, { size: 19 }), " Actividades para explorar, practicar y aprender."] }),
					/* @__PURE__ */ (0, V.jsxs)("p", { children: [/* @__PURE__ */ (0, V.jsx)(F, { size: 19 }), " Proyectos para conectar ideas y construir juntos."] }),
					/* @__PURE__ */ (0, V.jsxs)("p", { children: [/* @__PURE__ */ (0, V.jsx)(N, { size: 19 }), " Sube archivos a GitHub y ofrece sus enlaces para descarga."] })
				]
			})]
		})] }) : /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
			/* @__PURE__ */ (0, V.jsxs)("section", {
				className: "intro",
				children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [
					/* @__PURE__ */ (0, V.jsx)("span", {
						className: "section-kicker",
						children: R ? "APRENDER HACIENDO" : "APRENDER TAMBIÉN ES EXPLORAR"
					}),
					/* @__PURE__ */ (0, V.jsx)("h1", { children: R ? /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
						"Ideas que se convierten",
						/* @__PURE__ */ (0, V.jsx)("br", {}),
						"en ",
						/* @__PURE__ */ (0, V.jsx)("em", { children: "proyectos." })
					] }) : /* @__PURE__ */ (0, V.jsxs)(V.Fragment, { children: [
						"Un clic. Una idea.",
						/* @__PURE__ */ (0, V.jsx)("br", {}),
						/* @__PURE__ */ (0, V.jsx)("em", { children: "Un nuevo aprendizaje." })
					] }) }),
					/* @__PURE__ */ (0, V.jsx)("p", { children: R ? "Experiencias para crear, investigar y aprender en equipo." : "Actividades interactivas, creatividad e inteligencia artificial. Encuentra tu próxima experiencia para el aula." }),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "intro-tags",
						children: [
							/* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(O, { size: 16 }), " Explora"] }),
							/* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(re, { size: 16 }), " Interactúa"] }),
							/* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(N, { size: 16 }), " Llévalo a tu aula"] })
						]
					})
				] }), /* @__PURE__ */ (0, V.jsxs)("aside", {
					className: "feature-note",
					children: [
						/* @__PURE__ */ (0, V.jsxs)("span", {
							className: "note-label",
							children: [/* @__PURE__ */ (0, V.jsx)(I, { size: 17 }), " LABORATORIO DE IDEAS"]
						}),
						/* @__PURE__ */ (0, V.jsxs)("h2", { children: [
							"La curiosidad",
							/* @__PURE__ */ (0, V.jsx)("br", {}),
							"es el comienzo."
						] }),
						/* @__PURE__ */ (0, V.jsxs)("p", { children: [
							"Recursos para aprender haciendo,",
							/* @__PURE__ */ (0, V.jsx)("br", {}),
							"a tu ritmo y con nuevas preguntas."
						] }),
						/* @__PURE__ */ (0, V.jsxs)("div", {
							className: "note-footer",
							children: [/* @__PURE__ */ (0, V.jsx)("span", { children: "Didáctica + creatividad + IA" }), /* @__PURE__ */ (0, V.jsx)(ee, { size: 28 })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, V.jsxs)("section", {
				className: "library",
				"aria-labelledby": "library-title",
				children: [
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "library-heading",
						children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [/* @__PURE__ */ (0, V.jsx)("span", {
							className: "section-kicker",
							children: "ELIGE TU PRÓXIMO DESCUBRIMIENTO"
						}), /* @__PURE__ */ (0, V.jsxs)("h2", {
							id: "library-title",
							children: [R ? "Proyectos para inspirarte" : "Explora la biblioteca", /* @__PURE__ */ (0, V.jsx)("span", {
								className: "count",
								children: oe.length
							})]
						})] }), /* @__PURE__ */ (0, V.jsxs)("label", {
							className: "search",
							children: [/* @__PURE__ */ (0, V.jsx)(ae, { size: 19 }), /* @__PURE__ */ (0, V.jsx)("input", {
								"aria-label": "Buscar materiales",
								value: s,
								onChange: (e) => c(e.target.value),
								placeholder: "¿Qué quieres aprender hoy?"
							})]
						})]
					}),
					/* @__PURE__ */ (0, V.jsxs)("div", {
						className: "filters",
						children: [/* @__PURE__ */ (0, V.jsx)("div", {
							className: "pills",
							children: pl.map((e) => /* @__PURE__ */ (0, V.jsx)("button", {
								"aria-pressed": l === e,
								onClick: () => u(e),
								className: l === e ? "selected" : "",
								children: e
							}, e))
						}), /* @__PURE__ */ (0, V.jsx)(ml, {
							label: "Filtrar por nivel",
							value: d,
							onChange: f,
							items: [
								"Todos los niveles",
								"Primaria",
								"Secundaria",
								"Media",
								"Docentes"
							]
						})]
					}),
					r && /* @__PURE__ */ (0, V.jsx)("p", {
						role: "status",
						className: "hint",
						children: "Cargando tus publicaciones…"
					}),
					a && /* @__PURE__ */ (0, V.jsxs)("div", {
						className: "notice error",
						children: [
							a,
							" ",
							/* @__PURE__ */ (0, V.jsx)("button", {
								type: "button",
								onClick: M,
								children: "Reintentar"
							}),
							/* @__PURE__ */ (0, V.jsx)("p", { children: "Comprueba que materiales.json esté en la misma carpeta que esta página." })
						]
					}),
					/* @__PURE__ */ (0, V.jsx)("div", {
						className: "cards",
						children: oe.map((e, t) => {
							let n = e.subject === "Matemáticas" ? k : e.subject === "Ciencias" ? P : e.uses_ai ? ee : O, r = e.url;
							return /* @__PURE__ */ (0, V.jsxs)("article", {
								className: "activity-card",
								children: [/* @__PURE__ */ (0, V.jsxs)("div", {
									className: "card-cover cover-" + (e.subject === "Matemáticas" ? "math" : e.subject === "Ciencias" ? "science" : e.subject === "Lenguaje" ? "language" : "tech"),
									children: [
										/* @__PURE__ */ (0, V.jsx)("span", {
											className: "cover-category",
											children: e.subject
										}),
										/* @__PURE__ */ (0, V.jsx)(n, {
											size: 65,
											strokeWidth: 1.4
										}),
										/* @__PURE__ */ (0, V.jsxs)("span", {
											className: "cover-bottom",
											children: [e.kind === "proyecto" ? "PROYECTO DE AULA" : "APRENDE JUGANDO", /* @__PURE__ */ (0, V.jsx)("span", { children: String(t + 1).padStart(2, "0") })]
										})
									]
								}), /* @__PURE__ */ (0, V.jsxs)("div", {
									className: "card-body",
									children: [
										/* @__PURE__ */ (0, V.jsxs)("div", {
											className: "card-meta",
											children: [
												/* @__PURE__ */ (0, V.jsx)("span", { children: e.level }),
												!!e.uses_ai && /* @__PURE__ */ (0, V.jsxs)("span", { children: [/* @__PURE__ */ (0, V.jsx)(I, { size: 13 }), " Con IA"] }),
												e.demo && /* @__PURE__ */ (0, V.jsx)("span", {
													className: "demo-badge",
													children: "Ejemplo"
												})
											]
										}),
										/* @__PURE__ */ (0, V.jsx)("h3", { children: e.title }),
										/* @__PURE__ */ (0, V.jsx)("p", { children: e.description }),
										/* @__PURE__ */ (0, V.jsxs)("div", {
											className: "card-actions",
											children: [
												r && /* @__PURE__ */ (0, V.jsxs)("a", {
													className: "play-link",
													href: r,
													target: "_blank",
													rel: "noopener noreferrer",
													children: [
														e.kind === "proyecto" ? /* @__PURE__ */ (0, V.jsx)(F, { size: 16 }) : /* @__PURE__ */ (0, V.jsx)(re, { size: 16 }),
														" ",
														e.kind === "proyecto" ? "Ver proyecto" : "Explorar actividad"
													]
												}),
												(e.download || e.demo) && /* @__PURE__ */ (0, V.jsx)("a", {
													className: "download-link",
													title: "Descargar material",
													"aria-label": "Descargar " + e.title,
													href: e.download || e.url,
													download: !0,
													children: /* @__PURE__ */ (0, V.jsx)(N, { size: 19 })
												}),
												!e.download && !e.demo && /* @__PURE__ */ (0, V.jsx)(te, { size: 16 })
											]
										})
									]
								})]
							}, e.id);
						})
					}),
					!oe.length && /* @__PURE__ */ (0, V.jsxs)("div", {
						className: "empty",
						children: [
							/* @__PURE__ */ (0, V.jsx)(ae, { size: 32 }),
							/* @__PURE__ */ (0, V.jsx)("h3", { children: "No encontramos materiales con estos filtros." }),
							/* @__PURE__ */ (0, V.jsx)("button", {
								onClick: () => {
									c(""), u("Todas"), f("Todos los niveles");
								},
								children: "Mostrar todos"
							})
						]
					}),
					/* @__PURE__ */ (0, V.jsx)("p", {
						className: "example-caption",
						children: "Los materiales marcados como «Ejemplo» son demostraciones. Tus publicaciones aparecerán primero."
					})
				]
			}),
			/* @__PURE__ */ (0, V.jsxs)("section", {
				className: "bottom-note",
				children: [/* @__PURE__ */ (0, V.jsxs)("div", { children: [
					/* @__PURE__ */ (0, V.jsx)("span", {
						className: "note-label",
						children: "CREADO PARA COMPARTIR"
					}),
					/* @__PURE__ */ (0, V.jsx)("h2", { children: "Las buenas ideas crecen en el aula." }),
					/* @__PURE__ */ (0, V.jsx)("p", { children: "Un repositorio vivo de experiencias de la profe Lady." })
				] }), /* @__PURE__ */ (0, V.jsxs)("a", {
					href: "publicar.html",
					className: "button",
					children: [/* @__PURE__ */ (0, V.jsx)(ie, { size: 18 }), " Agregar un material"]
				})]
			})
		] })] }),
		/* @__PURE__ */ (0, V.jsxs)("footer", { children: [
			/* @__PURE__ */ (0, V.jsxs)("a", {
				href: "index.html",
				className: "footer-brand",
				children: [/* @__PURE__ */ (0, V.jsx)(I, { size: 19 }), "Lady Interactiva"]
			}),
			/* @__PURE__ */ (0, V.jsx)("p", { children: "Didáctica, creatividad e inteligencia artificial." }),
			/* @__PURE__ */ (0, V.jsx)("span", { children: "Hecho para aprender juntos." })
		] })
	] });
}
//#endregion
//#region outputs/lady-interactiva-github/source/main.tsx
var gl = document.body.dataset.view || "inicio";
(0, tl.createRoot)(document.getElementById("app")).render(/* @__PURE__ */ (0, V.jsx)(hl, { view: gl }));
//#endregion
