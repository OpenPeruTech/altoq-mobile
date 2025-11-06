(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/altoque-pwa/node_modules/.pnpm/@alloc+quick-lru@5.2.0/node_modules/@alloc/quick-lru/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

class QuickLRU {
    constructor(options = {}){
        if (!(options.maxSize && options.maxSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        if (typeof options.maxAge === 'number' && options.maxAge === 0) {
            throw new TypeError('`maxAge` must be a number greater than 0');
        }
        this.maxSize = options.maxSize;
        this.maxAge = options.maxAge || Infinity;
        this.onEviction = options.onEviction;
        this.cache = new Map();
        this.oldCache = new Map();
        this._size = 0;
    }
    _emitEvictions(cache) {
        if (typeof this.onEviction !== 'function') {
            return;
        }
        for (const [key, item] of cache){
            this.onEviction(key, item.value);
        }
    }
    _deleteIfExpired(key, item) {
        if (typeof item.expiry === 'number' && item.expiry <= Date.now()) {
            if (typeof this.onEviction === 'function') {
                this.onEviction(key, item.value);
            }
            return this.delete(key);
        }
        return false;
    }
    _getOrDeleteIfExpired(key, item) {
        const deleted = this._deleteIfExpired(key, item);
        if (deleted === false) {
            return item.value;
        }
    }
    _getItemValue(key, item) {
        return item.expiry ? this._getOrDeleteIfExpired(key, item) : item.value;
    }
    _peek(key, cache) {
        const item = cache.get(key);
        return this._getItemValue(key, item);
    }
    _set(key, value) {
        this.cache.set(key, value);
        this._size++;
        if (this._size >= this.maxSize) {
            this._size = 0;
            this._emitEvictions(this.oldCache);
            this.oldCache = this.cache;
            this.cache = new Map();
        }
    }
    _moveToRecent(key, item) {
        this.oldCache.delete(key);
        this._set(key, item);
    }
    *_entriesAscending() {
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield item;
                }
            }
        }
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield item;
            }
        }
    }
    get(key) {
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            return this._getItemValue(key, item);
        }
        if (this.oldCache.has(key)) {
            const item = this.oldCache.get(key);
            if (this._deleteIfExpired(key, item) === false) {
                this._moveToRecent(key, item);
                return item.value;
            }
        }
    }
    set(key, value, { maxAge = this.maxAge === Infinity ? undefined : Date.now() + this.maxAge } = {}) {
        if (this.cache.has(key)) {
            this.cache.set(key, {
                value,
                maxAge
            });
        } else {
            this._set(key, {
                value,
                expiry: maxAge
            });
        }
    }
    has(key) {
        if (this.cache.has(key)) {
            return !this._deleteIfExpired(key, this.cache.get(key));
        }
        if (this.oldCache.has(key)) {
            return !this._deleteIfExpired(key, this.oldCache.get(key));
        }
        return false;
    }
    peek(key) {
        if (this.cache.has(key)) {
            return this._peek(key, this.cache);
        }
        if (this.oldCache.has(key)) {
            return this._peek(key, this.oldCache);
        }
    }
    delete(key) {
        const deleted = this.cache.delete(key);
        if (deleted) {
            this._size--;
        }
        return this.oldCache.delete(key) || deleted;
    }
    clear() {
        this.cache.clear();
        this.oldCache.clear();
        this._size = 0;
    }
    resize(newSize) {
        if (!(newSize && newSize > 0)) {
            throw new TypeError('`maxSize` must be a number greater than 0');
        }
        const items = [
            ...this._entriesAscending()
        ];
        const removeCount = items.length - newSize;
        if (removeCount < 0) {
            this.cache = new Map(items);
            this.oldCache = new Map();
            this._size = items.length;
        } else {
            if (removeCount > 0) {
                this._emitEvictions(items.slice(0, removeCount));
            }
            this.oldCache = new Map(items.slice(removeCount));
            this.cache = new Map();
            this._size = 0;
        }
        this.maxSize = newSize;
    }
    *keys() {
        for (const [key] of this){
            yield key;
        }
    }
    *values() {
        for (const [, value] of this){
            yield value;
        }
    }
    *[Symbol.iterator]() {
        for (const item of this.cache){
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        for (const item of this.oldCache){
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesDescending() {
        let items = [
            ...this.cache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            const deleted = this._deleteIfExpired(key, value);
            if (deleted === false) {
                yield [
                    key,
                    value.value
                ];
            }
        }
        items = [
            ...this.oldCache
        ];
        for(let i = items.length - 1; i >= 0; --i){
            const item = items[i];
            const [key, value] = item;
            if (!this.cache.has(key)) {
                const deleted = this._deleteIfExpired(key, value);
                if (deleted === false) {
                    yield [
                        key,
                        value.value
                    ];
                }
            }
        }
    }
    *entriesAscending() {
        for (const [key, value] of this._entriesAscending()){
            yield [
                key,
                value.value
            ];
        }
    }
    get size() {
        if (!this._size) {
            return this.oldCache.size;
        }
        let oldCacheSize = 0;
        for (const key of this.oldCache.keys()){
            if (!this.cache.has(key)) {
                oldCacheSize++;
            }
        }
        return Math.min(this._size + oldCacheSize, this.maxSize);
    }
}
module.exports = QuickLRU;
}),
"[project]/altoque-pwa/node_modules/.pnpm/object-hash@3.0.0/node_modules/object-hash/dist/object_hash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(e) {
    var t;
    ("TURBOPACK compile-time truthy", 1) ? module.exports = e() : "TURBOPACK unreachable";
}(function() {
    return (function r(o, i, u) {
        function s(n, e) {
            if (!i[n]) {
                if (!o[n]) {
                    var t = "function" == ("TURBOPACK compile-time value", "function") && /*TURBOPACK member replacement*/ __turbopack_context__.t;
                    if (!e && t) return t(n, !0);
                    if ("TURBOPACK compile-time truthy", 1) return a(n, !0);
                    //TURBOPACK unreachable
                    ;
                }
                e = i[n] = {
                    exports: {}
                };
                o[n][0].call(e.exports, function(e) {
                    var t = o[n][1][e];
                    return s(t || e);
                }, e, e.exports, r, o, i, u);
            }
            return i[n].exports;
        }
        for(var a = "function" == ("TURBOPACK compile-time value", "function") && /*TURBOPACK member replacement*/ __turbopack_context__.t, e = 0; e < u.length; e++)s(u[e]);
        return s;
    })({
        1: [
            function(w, b, m) {
                !(function(e, n, s, c, d, h, p, g, y) {
                    "use strict";
                    var r = w("crypto");
                    function t(e, t) {
                        t = u(e, t);
                        var n;
                        return void 0 === (n = "passthrough" !== t.algorithm ? r.createHash(t.algorithm) : new l).write && (n.write = n.update, n.end = n.update), f(t, n).dispatch(e), n.update || n.end(""), n.digest ? n.digest("buffer" === t.encoding ? void 0 : t.encoding) : (e = n.read(), "buffer" !== t.encoding ? e.toString(t.encoding) : e);
                    }
                    (m = b.exports = t).sha1 = function(e) {
                        return t(e);
                    }, m.keys = function(e) {
                        return t(e, {
                            excludeValues: !0,
                            algorithm: "sha1",
                            encoding: "hex"
                        });
                    }, m.MD5 = function(e) {
                        return t(e, {
                            algorithm: "md5",
                            encoding: "hex"
                        });
                    }, m.keysMD5 = function(e) {
                        return t(e, {
                            algorithm: "md5",
                            encoding: "hex",
                            excludeValues: !0
                        });
                    };
                    var o = r.getHashes ? r.getHashes().slice() : [
                        "sha1",
                        "md5"
                    ], i = (o.push("passthrough"), [
                        "buffer",
                        "hex",
                        "binary",
                        "base64"
                    ]);
                    function u(e, t) {
                        var n = {};
                        if (n.algorithm = (t = t || {}).algorithm || "sha1", n.encoding = t.encoding || "hex", n.excludeValues = !!t.excludeValues, n.algorithm = n.algorithm.toLowerCase(), n.encoding = n.encoding.toLowerCase(), n.ignoreUnknown = !0 === t.ignoreUnknown, n.respectType = !1 !== t.respectType, n.respectFunctionNames = !1 !== t.respectFunctionNames, n.respectFunctionProperties = !1 !== t.respectFunctionProperties, n.unorderedArrays = !0 === t.unorderedArrays, n.unorderedSets = !1 !== t.unorderedSets, n.unorderedObjects = !1 !== t.unorderedObjects, n.replacer = t.replacer || void 0, n.excludeKeys = t.excludeKeys || void 0, void 0 === e) throw new Error("Object argument required.");
                        for(var r = 0; r < o.length; ++r)o[r].toLowerCase() === n.algorithm.toLowerCase() && (n.algorithm = o[r]);
                        if (-1 === o.indexOf(n.algorithm)) throw new Error('Algorithm "' + n.algorithm + '"  not supported. supported values: ' + o.join(", "));
                        if (-1 === i.indexOf(n.encoding) && "passthrough" !== n.algorithm) throw new Error('Encoding "' + n.encoding + '"  not supported. supported values: ' + i.join(", "));
                        return n;
                    }
                    function a(e) {
                        if ("function" == typeof e) return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e));
                    }
                    function f(o, t, i) {
                        i = i || [];
                        function u(e) {
                            return t.update ? t.update(e, "utf8") : t.write(e, "utf8");
                        }
                        return {
                            dispatch: function(e) {
                                return this["_" + (null === (e = o.replacer ? o.replacer(e) : e) ? "null" : typeof e)](e);
                            },
                            _object: function(t) {
                                var n, e = Object.prototype.toString.call(t), r = /\[object (.*)\]/i.exec(e);
                                r = (r = r ? r[1] : "unknown:[" + e + "]").toLowerCase();
                                if (0 <= (e = i.indexOf(t))) return this.dispatch("[CIRCULAR:" + e + "]");
                                if (i.push(t), void 0 !== s && s.isBuffer && s.isBuffer(t)) return u("buffer:"), u(t);
                                if ("object" === r || "function" === r || "asyncfunction" === r) return e = Object.keys(t), o.unorderedObjects && (e = e.sort()), !1 === o.respectType || a(t) || e.splice(0, 0, "prototype", "__proto__", "constructor"), o.excludeKeys && (e = e.filter(function(e) {
                                    return !o.excludeKeys(e);
                                })), u("object:" + e.length + ":"), n = this, e.forEach(function(e) {
                                    n.dispatch(e), u(":"), o.excludeValues || n.dispatch(t[e]), u(",");
                                });
                                if (!this["_" + r]) {
                                    if (o.ignoreUnknown) return u("[" + r + "]");
                                    throw new Error('Unknown object type "' + r + '"');
                                }
                                this["_" + r](t);
                            },
                            _array: function(e, t) {
                                t = void 0 !== t ? t : !1 !== o.unorderedArrays;
                                var n = this;
                                if (u("array:" + e.length + ":"), !t || e.length <= 1) return e.forEach(function(e) {
                                    return n.dispatch(e);
                                });
                                var r = [], t = e.map(function(e) {
                                    var t = new l, n = i.slice();
                                    return f(o, t, n).dispatch(e), r = r.concat(n.slice(i.length)), t.read().toString();
                                });
                                return i = i.concat(r), t.sort(), this._array(t, !1);
                            },
                            _date: function(e) {
                                return u("date:" + e.toJSON());
                            },
                            _symbol: function(e) {
                                return u("symbol:" + e.toString());
                            },
                            _error: function(e) {
                                return u("error:" + e.toString());
                            },
                            _boolean: function(e) {
                                return u("bool:" + e.toString());
                            },
                            _string: function(e) {
                                u("string:" + e.length + ":"), u(e.toString());
                            },
                            _function: function(e) {
                                u("fn:"), a(e) ? this.dispatch("[native]") : this.dispatch(e.toString()), !1 !== o.respectFunctionNames && this.dispatch("function-name:" + String(e.name)), o.respectFunctionProperties && this._object(e);
                            },
                            _number: function(e) {
                                return u("number:" + e.toString());
                            },
                            _xml: function(e) {
                                return u("xml:" + e.toString());
                            },
                            _null: function() {
                                return u("Null");
                            },
                            _undefined: function() {
                                return u("Undefined");
                            },
                            _regexp: function(e) {
                                return u("regex:" + e.toString());
                            },
                            _uint8array: function(e) {
                                return u("uint8array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint8clampedarray: function(e) {
                                return u("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int8array: function(e) {
                                return u("int8array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint16array: function(e) {
                                return u("uint16array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int16array: function(e) {
                                return u("int16array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _uint32array: function(e) {
                                return u("uint32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _int32array: function(e) {
                                return u("int32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _float32array: function(e) {
                                return u("float32array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _float64array: function(e) {
                                return u("float64array:"), this.dispatch(Array.prototype.slice.call(e));
                            },
                            _arraybuffer: function(e) {
                                return u("arraybuffer:"), this.dispatch(new Uint8Array(e));
                            },
                            _url: function(e) {
                                return u("url:" + e.toString());
                            },
                            _map: function(e) {
                                u("map:");
                                e = Array.from(e);
                                return this._array(e, !1 !== o.unorderedSets);
                            },
                            _set: function(e) {
                                u("set:");
                                e = Array.from(e);
                                return this._array(e, !1 !== o.unorderedSets);
                            },
                            _file: function(e) {
                                return u("file:"), this.dispatch([
                                    e.name,
                                    e.size,
                                    e.type,
                                    e.lastModfied
                                ]);
                            },
                            _blob: function() {
                                if (o.ignoreUnknown) return u("[blob]");
                                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
                            },
                            _domwindow: function() {
                                return u("domwindow");
                            },
                            _bigint: function(e) {
                                return u("bigint:" + e.toString());
                            },
                            _process: function() {
                                return u("process");
                            },
                            _timer: function() {
                                return u("timer");
                            },
                            _pipe: function() {
                                return u("pipe");
                            },
                            _tcp: function() {
                                return u("tcp");
                            },
                            _udp: function() {
                                return u("udp");
                            },
                            _tty: function() {
                                return u("tty");
                            },
                            _statwatcher: function() {
                                return u("statwatcher");
                            },
                            _securecontext: function() {
                                return u("securecontext");
                            },
                            _connection: function() {
                                return u("connection");
                            },
                            _zlib: function() {
                                return u("zlib");
                            },
                            _context: function() {
                                return u("context");
                            },
                            _nodescript: function() {
                                return u("nodescript");
                            },
                            _httpparser: function() {
                                return u("httpparser");
                            },
                            _dataview: function() {
                                return u("dataview");
                            },
                            _signal: function() {
                                return u("signal");
                            },
                            _fsevent: function() {
                                return u("fsevent");
                            },
                            _tlswrap: function() {
                                return u("tlswrap");
                            }
                        };
                    }
                    function l() {
                        return {
                            buf: "",
                            write: function(e) {
                                this.buf += e;
                            },
                            end: function(e) {
                                this.buf += e;
                            },
                            read: function() {
                                return this.buf;
                            }
                        };
                    }
                    m.writeToStream = function(e, t, n) {
                        return void 0 === n && (n = t, t = {}), f(t = u(e, t), n).dispatch(e);
                    };
                }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
            },
            {
                buffer: 3,
                crypto: 5,
                lYpoI2: 11
            }
        ],
        2: [
            function(e, t, f) {
                !(function(e, t, n, r, o, i, u, s, a) {
                    !function(e) {
                        "use strict";
                        var a = "undefined" != typeof Uint8Array ? Uint8Array : Array, t = "+".charCodeAt(0), n = "/".charCodeAt(0), r = "0".charCodeAt(0), o = "a".charCodeAt(0), i = "A".charCodeAt(0), u = "-".charCodeAt(0), s = "_".charCodeAt(0);
                        function f(e) {
                            e = e.charCodeAt(0);
                            return e === t || e === u ? 62 : e === n || e === s ? 63 : e < r ? -1 : e < r + 10 ? e - r + 26 + 26 : e < i + 26 ? e - i : e < o + 26 ? e - o + 26 : void 0;
                        }
                        e.toByteArray = function(e) {
                            var t, n;
                            if (0 < e.length % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                            var r = e.length, r = "=" === e.charAt(r - 2) ? 2 : "=" === e.charAt(r - 1) ? 1 : 0, o = new a(3 * e.length / 4 - r), i = 0 < r ? e.length - 4 : e.length, u = 0;
                            function s(e) {
                                o[u++] = e;
                            }
                            for(t = 0; t < i; t += 4, 0)s((16711680 & (n = f(e.charAt(t)) << 18 | f(e.charAt(t + 1)) << 12 | f(e.charAt(t + 2)) << 6 | f(e.charAt(t + 3)))) >> 16), s((65280 & n) >> 8), s(255 & n);
                            return 2 == r ? s(255 & (n = f(e.charAt(t)) << 2 | f(e.charAt(t + 1)) >> 4)) : 1 == r && (s((n = f(e.charAt(t)) << 10 | f(e.charAt(t + 1)) << 4 | f(e.charAt(t + 2)) >> 2) >> 8 & 255), s(255 & n)), o;
                        }, e.fromByteArray = function(e) {
                            var t, n, r, o, i = e.length % 3, u = "";
                            function s(e) {
                                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e);
                            }
                            for(t = 0, r = e.length - i; t < r; t += 3)n = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2], u += s((o = n) >> 18 & 63) + s(o >> 12 & 63) + s(o >> 6 & 63) + s(63 & o);
                            switch(i){
                                case 1:
                                    u = (u += s((n = e[e.length - 1]) >> 2)) + s(n << 4 & 63) + "==";
                                    break;
                                case 2:
                                    u = (u = (u += s((n = (e[e.length - 2] << 8) + e[e.length - 1]) >> 10)) + s(n >> 4 & 63)) + s(n << 2 & 63) + "=";
                            }
                            return u;
                        };
                    }(void 0 === f ? this.base64js = {} : f);
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
            },
            {
                buffer: 3,
                lYpoI2: 11
            }
        ],
        3: [
            function(O, e, H) {
                !(function(e, n, f, r, h, p, g, y, w) {
                    var a = O("base64-js"), i = O("ieee754");
                    function f(e, t, n) {
                        if (!(this instanceof f)) return new f(e, t, n);
                        var r, o, i, u, s = typeof e;
                        if ("base64" === t && "string" == s) for(e = (u = e).trim ? u.trim() : u.replace(/^\s+|\s+$/g, ""); e.length % 4 != 0;)e += "=";
                        if ("number" == s) r = j(e);
                        else if ("string" == s) r = f.byteLength(e, t);
                        else {
                            if ("object" != s) throw new Error("First argument needs to be a number, array or string.");
                            r = j(e.length);
                        }
                        if (f._useTypedArrays ? o = f._augment(new Uint8Array(r)) : ((o = this).length = r, o._isBuffer = !0), f._useTypedArrays && "number" == typeof e.byteLength) o._set(e);
                        else if (C(u = e) || f.isBuffer(u) || u && "object" == typeof u && "number" == typeof u.length) for(i = 0; i < r; i++)f.isBuffer(e) ? o[i] = e.readUInt8(i) : o[i] = e[i];
                        else if ("string" == s) o.write(e, 0, t);
                        else if ("number" == s && !f._useTypedArrays && !n) for(i = 0; i < r; i++)o[i] = 0;
                        return o;
                    }
                    function b(e, t, n, r) {
                        return f._charsWritten = c(function(e) {
                            for(var t = [], n = 0; n < e.length; n++)t.push(255 & e.charCodeAt(n));
                            return t;
                        }(t), e, n, r);
                    }
                    function m(e, t, n, r) {
                        return f._charsWritten = c(function(e) {
                            for(var t, n, r = [], o = 0; o < e.length; o++)n = e.charCodeAt(o), t = n >> 8, n = n % 256, r.push(n), r.push(t);
                            return r;
                        }(t), e, n, r);
                    }
                    function v(e, t, n) {
                        var r = "";
                        n = Math.min(e.length, n);
                        for(var o = t; o < n; o++)r += String.fromCharCode(e[o]);
                        return r;
                    }
                    function o(e, t, n, r) {
                        r || (d("boolean" == typeof n, "missing or invalid endian"), d(null != t, "missing offset"), d(t + 1 < e.length, "Trying to read beyond buffer length"));
                        var o, r = e.length;
                        if (!(r <= t)) return n ? (o = e[t], t + 1 < r && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < r && (o |= e[t + 1])), o;
                    }
                    function u(e, t, n, r) {
                        r || (d("boolean" == typeof n, "missing or invalid endian"), d(null != t, "missing offset"), d(t + 3 < e.length, "Trying to read beyond buffer length"));
                        var o, r = e.length;
                        if (!(r <= t)) return n ? (t + 2 < r && (o = e[t + 2] << 16), t + 1 < r && (o |= e[t + 1] << 8), o |= e[t], t + 3 < r && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < r && (o = e[t + 1] << 16), t + 2 < r && (o |= e[t + 2] << 8), t + 3 < r && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o;
                    }
                    function _(e, t, n, r) {
                        if (r || (d("boolean" == typeof n, "missing or invalid endian"), d(null != t, "missing offset"), d(t + 1 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) return r = o(e, t, n, !0), 32768 & r ? -1 * (65535 - r + 1) : r;
                    }
                    function E(e, t, n, r) {
                        if (r || (d("boolean" == typeof n, "missing or invalid endian"), d(null != t, "missing offset"), d(t + 3 < e.length, "Trying to read beyond buffer length")), !(e.length <= t)) return r = u(e, t, n, !0), 2147483648 & r ? -1 * (4294967295 - r + 1) : r;
                    }
                    function I(e, t, n, r) {
                        return r || (d("boolean" == typeof n, "missing or invalid endian"), d(t + 3 < e.length, "Trying to read beyond buffer length")), i.read(e, t, n, 23, 4);
                    }
                    function A(e, t, n, r) {
                        return r || (d("boolean" == typeof n, "missing or invalid endian"), d(t + 7 < e.length, "Trying to read beyond buffer length")), i.read(e, t, n, 52, 8);
                    }
                    function s(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 1 < e.length, "trying to write beyond buffer length"), Y(t, 65535));
                        o = e.length;
                        if (!(o <= n)) for(var i = 0, u = Math.min(o - n, 2); i < u; i++)e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i);
                    }
                    function l(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 3 < e.length, "trying to write beyond buffer length"), Y(t, 4294967295));
                        o = e.length;
                        if (!(o <= n)) for(var i = 0, u = Math.min(o - n, 4); i < u; i++)e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255;
                    }
                    function B(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 1 < e.length, "Trying to write beyond buffer length"), F(t, 32767, -32768)), e.length <= n || s(e, 0 <= t ? t : 65535 + t + 1, n, r, o);
                    }
                    function L(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 3 < e.length, "Trying to write beyond buffer length"), F(t, 2147483647, -2147483648)), e.length <= n || l(e, 0 <= t ? t : 4294967295 + t + 1, n, r, o);
                    }
                    function U(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 3 < e.length, "Trying to write beyond buffer length"), D(t, 34028234663852886e22, -34028234663852886e22)), e.length <= n || i.write(e, t, n, r, 23, 4);
                    }
                    function x(e, t, n, r, o) {
                        o || (d(null != t, "missing value"), d("boolean" == typeof r, "missing or invalid endian"), d(null != n, "missing offset"), d(n + 7 < e.length, "Trying to write beyond buffer length"), D(t, 17976931348623157e292, -17976931348623157e292)), e.length <= n || i.write(e, t, n, r, 52, 8);
                    }
                    H.Buffer = f, H.SlowBuffer = f, H.INSPECT_MAX_BYTES = 50, f.poolSize = 8192, f._useTypedArrays = function() {
                        try {
                            var e = new ArrayBuffer(0), t = new Uint8Array(e);
                            return t.foo = function() {
                                return 42;
                            }, 42 === t.foo() && "function" == typeof t.subarray;
                        } catch (e) {
                            return !1;
                        }
                    }(), f.isEncoding = function(e) {
                        switch(String(e).toLowerCase()){
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "binary":
                            case "base64":
                            case "raw":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1;
                        }
                    }, f.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer);
                    }, f.byteLength = function(e, t) {
                        var n;
                        switch(e += "", t || "utf8"){
                            case "hex":
                                n = e.length / 2;
                                break;
                            case "utf8":
                            case "utf-8":
                                n = T(e).length;
                                break;
                            case "ascii":
                            case "binary":
                            case "raw":
                                n = e.length;
                                break;
                            case "base64":
                                n = M(e).length;
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                n = 2 * e.length;
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return n;
                    }, f.concat = function(e, t) {
                        if (d(C(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new f(0);
                        if (1 === e.length) return e[0];
                        if ("number" != typeof t) for(o = t = 0; o < e.length; o++)t += e[o].length;
                        for(var n = new f(t), r = 0, o = 0; o < e.length; o++){
                            var i = e[o];
                            i.copy(n, r), r += i.length;
                        }
                        return n;
                    }, f.prototype.write = function(e, t, n, r) {
                        isFinite(t) ? isFinite(n) || (r = n, n = void 0) : (a = r, r = t, t = n, n = a), t = Number(t) || 0;
                        var o, i, u, s, a = this.length - t;
                        switch((!n || a < (n = Number(n))) && (n = a), r = String(r || "utf8").toLowerCase()){
                            case "hex":
                                o = function(e, t, n, r) {
                                    n = Number(n) || 0;
                                    var o = e.length - n;
                                    (!r || o < (r = Number(r))) && (r = o), d((o = t.length) % 2 == 0, "Invalid hex string"), o / 2 < r && (r = o / 2);
                                    for(var i = 0; i < r; i++){
                                        var u = parseInt(t.substr(2 * i, 2), 16);
                                        d(!isNaN(u), "Invalid hex string"), e[n + i] = u;
                                    }
                                    return f._charsWritten = 2 * i, i;
                                }(this, e, t, n);
                                break;
                            case "utf8":
                            case "utf-8":
                                i = this, u = t, s = n, o = f._charsWritten = c(T(e), i, u, s);
                                break;
                            case "ascii":
                            case "binary":
                                o = b(this, e, t, n);
                                break;
                            case "base64":
                                i = this, u = t, s = n, o = f._charsWritten = c(M(e), i, u, s);
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                o = m(this, e, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return o;
                    }, f.prototype.toString = function(e, t, n) {
                        var r, o, i, u, s = this;
                        if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (n = void 0 !== n ? Number(n) : s.length) === t) return "";
                        switch(e){
                            case "hex":
                                r = function(e, t, n) {
                                    var r = e.length;
                                    (!t || t < 0) && (t = 0);
                                    (!n || n < 0 || r < n) && (n = r);
                                    for(var o = "", i = t; i < n; i++)o += k(e[i]);
                                    return o;
                                }(s, t, n);
                                break;
                            case "utf8":
                            case "utf-8":
                                r = function(e, t, n) {
                                    var r = "", o = "";
                                    n = Math.min(e.length, n);
                                    for(var i = t; i < n; i++)e[i] <= 127 ? (r += N(o) + String.fromCharCode(e[i]), o = "") : o += "%" + e[i].toString(16);
                                    return r + N(o);
                                }(s, t, n);
                                break;
                            case "ascii":
                            case "binary":
                                r = v(s, t, n);
                                break;
                            case "base64":
                                o = s, u = n, r = 0 === (i = t) && u === o.length ? a.fromByteArray(o) : a.fromByteArray(o.slice(i, u));
                                break;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                r = function(e, t, n) {
                                    for(var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2)o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                                    return o;
                                }(s, t, n);
                                break;
                            default:
                                throw new Error("Unknown encoding");
                        }
                        return r;
                    }, f.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        };
                    }, f.prototype.copy = function(e, t, n, r) {
                        if (t = t || 0, (r = r || 0 === r ? r : this.length) !== (n = n || 0) && 0 !== e.length && 0 !== this.length) {
                            d(n <= r, "sourceEnd < sourceStart"), d(0 <= t && t < e.length, "targetStart out of bounds"), d(0 <= n && n < this.length, "sourceStart out of bounds"), d(0 <= r && r <= this.length, "sourceEnd out of bounds"), r > this.length && (r = this.length);
                            var o = (r = e.length - t < r - n ? e.length - t + n : r) - n;
                            if (o < 100 || !f._useTypedArrays) for(var i = 0; i < o; i++)e[i + t] = this[i + n];
                            else e._set(this.subarray(n, n + o), t);
                        }
                    }, f.prototype.slice = function(e, t) {
                        var n = this.length;
                        if (e = S(e, n, 0), t = S(t, n, n), f._useTypedArrays) return f._augment(this.subarray(e, t));
                        for(var r = t - e, o = new f(r, void 0, !0), i = 0; i < r; i++)o[i] = this[i + e];
                        return o;
                    }, f.prototype.get = function(e) {
                        return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e);
                    }, f.prototype.set = function(e, t) {
                        return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t);
                    }, f.prototype.readUInt8 = function(e, t) {
                        if (t || (d(null != e, "missing offset"), d(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e];
                    }, f.prototype.readUInt16LE = function(e, t) {
                        return o(this, e, !0, t);
                    }, f.prototype.readUInt16BE = function(e, t) {
                        return o(this, e, !1, t);
                    }, f.prototype.readUInt32LE = function(e, t) {
                        return u(this, e, !0, t);
                    }, f.prototype.readUInt32BE = function(e, t) {
                        return u(this, e, !1, t);
                    }, f.prototype.readInt8 = function(e, t) {
                        if (t || (d(null != e, "missing offset"), d(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                    }, f.prototype.readInt16LE = function(e, t) {
                        return _(this, e, !0, t);
                    }, f.prototype.readInt16BE = function(e, t) {
                        return _(this, e, !1, t);
                    }, f.prototype.readInt32LE = function(e, t) {
                        return E(this, e, !0, t);
                    }, f.prototype.readInt32BE = function(e, t) {
                        return E(this, e, !1, t);
                    }, f.prototype.readFloatLE = function(e, t) {
                        return I(this, e, !0, t);
                    }, f.prototype.readFloatBE = function(e, t) {
                        return I(this, e, !1, t);
                    }, f.prototype.readDoubleLE = function(e, t) {
                        return A(this, e, !0, t);
                    }, f.prototype.readDoubleBE = function(e, t) {
                        return A(this, e, !1, t);
                    }, f.prototype.writeUInt8 = function(e, t, n) {
                        n || (d(null != e, "missing value"), d(null != t, "missing offset"), d(t < this.length, "trying to write beyond buffer length"), Y(e, 255)), t >= this.length || (this[t] = e);
                    }, f.prototype.writeUInt16LE = function(e, t, n) {
                        s(this, e, t, !0, n);
                    }, f.prototype.writeUInt16BE = function(e, t, n) {
                        s(this, e, t, !1, n);
                    }, f.prototype.writeUInt32LE = function(e, t, n) {
                        l(this, e, t, !0, n);
                    }, f.prototype.writeUInt32BE = function(e, t, n) {
                        l(this, e, t, !1, n);
                    }, f.prototype.writeInt8 = function(e, t, n) {
                        n || (d(null != e, "missing value"), d(null != t, "missing offset"), d(t < this.length, "Trying to write beyond buffer length"), F(e, 127, -128)), t >= this.length || (0 <= e ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n));
                    }, f.prototype.writeInt16LE = function(e, t, n) {
                        B(this, e, t, !0, n);
                    }, f.prototype.writeInt16BE = function(e, t, n) {
                        B(this, e, t, !1, n);
                    }, f.prototype.writeInt32LE = function(e, t, n) {
                        L(this, e, t, !0, n);
                    }, f.prototype.writeInt32BE = function(e, t, n) {
                        L(this, e, t, !1, n);
                    }, f.prototype.writeFloatLE = function(e, t, n) {
                        U(this, e, t, !0, n);
                    }, f.prototype.writeFloatBE = function(e, t, n) {
                        U(this, e, t, !1, n);
                    }, f.prototype.writeDoubleLE = function(e, t, n) {
                        x(this, e, t, !0, n);
                    }, f.prototype.writeDoubleBE = function(e, t, n) {
                        x(this, e, t, !1, n);
                    }, f.prototype.fill = function(e, t, n) {
                        if (t = t || 0, n = n || this.length, d("number" == typeof (e = "string" == typeof (e = e || 0) ? e.charCodeAt(0) : e) && !isNaN(e), "value is not a number"), d(t <= n, "end < start"), n !== t && 0 !== this.length) {
                            d(0 <= t && t < this.length, "start out of bounds"), d(0 <= n && n <= this.length, "end out of bounds");
                            for(var r = t; r < n; r++)this[r] = e;
                        }
                    }, f.prototype.inspect = function() {
                        for(var e = [], t = this.length, n = 0; n < t; n++)if (e[n] = k(this[n]), n === H.INSPECT_MAX_BYTES) {
                            e[n + 1] = "...";
                            break;
                        }
                        return "<Buffer " + e.join(" ") + ">";
                    }, f.prototype.toArrayBuffer = function() {
                        if ("undefined" == typeof Uint8Array) throw new Error("Buffer.toArrayBuffer not supported in this browser");
                        if (f._useTypedArrays) return new f(this).buffer;
                        for(var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1)e[t] = this[t];
                        return e.buffer;
                    };
                    var t = f.prototype;
                    function S(e, t, n) {
                        return "number" != typeof e ? n : t <= (e = ~~e) ? t : 0 <= e || 0 <= (e += t) ? e : 0;
                    }
                    function j(e) {
                        return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
                    }
                    function C(e) {
                        return (Array.isArray || function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e);
                        })(e);
                    }
                    function k(e) {
                        return e < 16 ? "0" + e.toString(16) : e.toString(16);
                    }
                    function T(e) {
                        for(var t = [], n = 0; n < e.length; n++){
                            var r = e.charCodeAt(n);
                            if (r <= 127) t.push(e.charCodeAt(n));
                            else for(var o = n, i = (55296 <= r && r <= 57343 && n++, encodeURIComponent(e.slice(o, n + 1)).substr(1).split("%")), u = 0; u < i.length; u++)t.push(parseInt(i[u], 16));
                        }
                        return t;
                    }
                    function M(e) {
                        return a.toByteArray(e);
                    }
                    function c(e, t, n, r) {
                        for(var o = 0; o < r && !(o + n >= t.length || o >= e.length); o++)t[o + n] = e[o];
                        return o;
                    }
                    function N(e) {
                        try {
                            return decodeURIComponent(e);
                        } catch (e) {
                            return String.fromCharCode(65533);
                        }
                    }
                    function Y(e, t) {
                        d("number" == typeof e, "cannot write a non-number as a number"), d(0 <= e, "specified a negative value for writing an unsigned value"), d(e <= t, "value is larger than maximum value for type"), d(Math.floor(e) === e, "value has a fractional component");
                    }
                    function F(e, t, n) {
                        d("number" == typeof e, "cannot write a non-number as a number"), d(e <= t, "value larger than maximum allowed value"), d(n <= e, "value smaller than minimum allowed value"), d(Math.floor(e) === e, "value has a fractional component");
                    }
                    function D(e, t, n) {
                        d("number" == typeof e, "cannot write a non-number as a number"), d(e <= t, "value larger than maximum allowed value"), d(n <= e, "value smaller than minimum allowed value");
                    }
                    function d(e, t) {
                        if (!e) throw new Error(t || "Failed assertion");
                    }
                    f._augment = function(e) {
                        return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = t.get, e.set = t.set, e.write = t.write, e.toString = t.toString, e.toLocaleString = t.toString, e.toJSON = t.toJSON, e.copy = t.copy, e.slice = t.slice, e.readUInt8 = t.readUInt8, e.readUInt16LE = t.readUInt16LE, e.readUInt16BE = t.readUInt16BE, e.readUInt32LE = t.readUInt32LE, e.readUInt32BE = t.readUInt32BE, e.readInt8 = t.readInt8, e.readInt16LE = t.readInt16LE, e.readInt16BE = t.readInt16BE, e.readInt32LE = t.readInt32LE, e.readInt32BE = t.readInt32BE, e.readFloatLE = t.readFloatLE, e.readFloatBE = t.readFloatBE, e.readDoubleLE = t.readDoubleLE, e.readDoubleBE = t.readDoubleBE, e.writeUInt8 = t.writeUInt8, e.writeUInt16LE = t.writeUInt16LE, e.writeUInt16BE = t.writeUInt16BE, e.writeUInt32LE = t.writeUInt32LE, e.writeUInt32BE = t.writeUInt32BE, e.writeInt8 = t.writeInt8, e.writeInt16LE = t.writeInt16LE, e.writeInt16BE = t.writeInt16BE, e.writeInt32LE = t.writeInt32LE, e.writeInt32BE = t.writeInt32BE, e.writeFloatLE = t.writeFloatLE, e.writeFloatBE = t.writeFloatBE, e.writeDoubleLE = t.writeDoubleLE, e.writeDoubleBE = t.writeDoubleBE, e.fill = t.fill, e.inspect = t.inspect, e.toArrayBuffer = t.toArrayBuffer, e;
                    };
                }).call(this, O("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
            },
            {
                "base64-js": 2,
                buffer: 3,
                ieee754: 10,
                lYpoI2: 11
            }
        ],
        4: [
            function(c, d, e) {
                !(function(e, t, a, n, r, o, i, u, s) {
                    var a = c("buffer").Buffer, f = 4, l = new a(f);
                    l.fill(0);
                    d.exports = {
                        hash: function(e, t, n, r) {
                            for(var o = t(function(e, t) {
                                e.length % f != 0 && (n = e.length + (f - e.length % f), e = a.concat([
                                    e,
                                    l
                                ], n));
                                for(var n, r = [], o = t ? e.readInt32BE : e.readInt32LE, i = 0; i < e.length; i += f)r.push(o.call(e, i));
                                return r;
                            }(e = a.isBuffer(e) ? e : new a(e), r), 8 * e.length), t = r, i = new a(n), u = t ? i.writeInt32BE : i.writeInt32LE, s = 0; s < o.length; s++)u.call(i, o[s], 4 * s, !0);
                            return i;
                        }
                    };
                }).call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                buffer: 3,
                lYpoI2: 11
            }
        ],
        5: [
            function(v, e, _) {
                !(function(l, c, u, d, h, p, g, y, w) {
                    var u = v("buffer").Buffer, e = v("./sha"), t = v("./sha256"), n = v("./rng"), b = {
                        sha1: e,
                        sha256: t,
                        md5: v("./md5")
                    }, s = 64, a = new u(s);
                    function r(e, n) {
                        var r = b[e = e || "sha1"], o = [];
                        return r || i("algorithm:", e, "is not yet supported"), {
                            update: function(e) {
                                return u.isBuffer(e) || (e = new u(e)), o.push(e), e.length, this;
                            },
                            digest: function(e) {
                                var t = u.concat(o), t = n ? function(e, t, n) {
                                    u.isBuffer(t) || (t = new u(t)), u.isBuffer(n) || (n = new u(n)), t.length > s ? t = e(t) : t.length < s && (t = u.concat([
                                        t,
                                        a
                                    ], s));
                                    for(var r = new u(s), o = new u(s), i = 0; i < s; i++)r[i] = 54 ^ t[i], o[i] = 92 ^ t[i];
                                    return n = e(u.concat([
                                        r,
                                        n
                                    ])), e(u.concat([
                                        o,
                                        n
                                    ]));
                                }(r, n, t) : r(t);
                                return o = null, e ? t.toString(e) : t;
                            }
                        };
                    }
                    function i() {
                        var e = [].slice.call(arguments).join(" ");
                        throw new Error([
                            e,
                            "we accept pull requests",
                            "http://github.com/dominictarr/crypto-browserify"
                        ].join("\n"));
                    }
                    a.fill(0), _.createHash = function(e) {
                        return r(e);
                    }, _.createHmac = r, _.randomBytes = function(e, t) {
                        if (!t || !t.call) return new u(n(e));
                        try {
                            t.call(this, void 0, new u(n(e)));
                        } catch (e) {
                            t(e);
                        }
                    };
                    var o, f = [
                        "createCredentials",
                        "createCipher",
                        "createCipheriv",
                        "createDecipher",
                        "createDecipheriv",
                        "createSign",
                        "createVerify",
                        "createDiffieHellman",
                        "pbkdf2"
                    ], m = function(e) {
                        _[e] = function() {
                            i("sorry,", e, "is not implemented yet");
                        };
                    };
                    for(o in f)m(f[o], o);
                }).call(this, v("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./md5": 6,
                "./rng": 7,
                "./sha": 8,
                "./sha256": 9,
                buffer: 3,
                lYpoI2: 11
            }
        ],
        6: [
            function(w, b, e) {
                !(function(e, r, o, i, u, a, f, l, y) {
                    var t = w("./helpers");
                    function n(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        for(var n = 1732584193, r = -271733879, o = -1732584194, i = 271733878, u = 0; u < e.length; u += 16){
                            var s = n, a = r, f = o, l = i, n = c(n, r, o, i, e[u + 0], 7, -680876936), i = c(i, n, r, o, e[u + 1], 12, -389564586), o = c(o, i, n, r, e[u + 2], 17, 606105819), r = c(r, o, i, n, e[u + 3], 22, -1044525330);
                            n = c(n, r, o, i, e[u + 4], 7, -176418897), i = c(i, n, r, o, e[u + 5], 12, 1200080426), o = c(o, i, n, r, e[u + 6], 17, -1473231341), r = c(r, o, i, n, e[u + 7], 22, -45705983), n = c(n, r, o, i, e[u + 8], 7, 1770035416), i = c(i, n, r, o, e[u + 9], 12, -1958414417), o = c(o, i, n, r, e[u + 10], 17, -42063), r = c(r, o, i, n, e[u + 11], 22, -1990404162), n = c(n, r, o, i, e[u + 12], 7, 1804603682), i = c(i, n, r, o, e[u + 13], 12, -40341101), o = c(o, i, n, r, e[u + 14], 17, -1502002290), n = d(n, r = c(r, o, i, n, e[u + 15], 22, 1236535329), o, i, e[u + 1], 5, -165796510), i = d(i, n, r, o, e[u + 6], 9, -1069501632), o = d(o, i, n, r, e[u + 11], 14, 643717713), r = d(r, o, i, n, e[u + 0], 20, -373897302), n = d(n, r, o, i, e[u + 5], 5, -701558691), i = d(i, n, r, o, e[u + 10], 9, 38016083), o = d(o, i, n, r, e[u + 15], 14, -660478335), r = d(r, o, i, n, e[u + 4], 20, -405537848), n = d(n, r, o, i, e[u + 9], 5, 568446438), i = d(i, n, r, o, e[u + 14], 9, -1019803690), o = d(o, i, n, r, e[u + 3], 14, -187363961), r = d(r, o, i, n, e[u + 8], 20, 1163531501), n = d(n, r, o, i, e[u + 13], 5, -1444681467), i = d(i, n, r, o, e[u + 2], 9, -51403784), o = d(o, i, n, r, e[u + 7], 14, 1735328473), n = h(n, r = d(r, o, i, n, e[u + 12], 20, -1926607734), o, i, e[u + 5], 4, -378558), i = h(i, n, r, o, e[u + 8], 11, -2022574463), o = h(o, i, n, r, e[u + 11], 16, 1839030562), r = h(r, o, i, n, e[u + 14], 23, -35309556), n = h(n, r, o, i, e[u + 1], 4, -1530992060), i = h(i, n, r, o, e[u + 4], 11, 1272893353), o = h(o, i, n, r, e[u + 7], 16, -155497632), r = h(r, o, i, n, e[u + 10], 23, -1094730640), n = h(n, r, o, i, e[u + 13], 4, 681279174), i = h(i, n, r, o, e[u + 0], 11, -358537222), o = h(o, i, n, r, e[u + 3], 16, -722521979), r = h(r, o, i, n, e[u + 6], 23, 76029189), n = h(n, r, o, i, e[u + 9], 4, -640364487), i = h(i, n, r, o, e[u + 12], 11, -421815835), o = h(o, i, n, r, e[u + 15], 16, 530742520), n = p(n, r = h(r, o, i, n, e[u + 2], 23, -995338651), o, i, e[u + 0], 6, -198630844), i = p(i, n, r, o, e[u + 7], 10, 1126891415), o = p(o, i, n, r, e[u + 14], 15, -1416354905), r = p(r, o, i, n, e[u + 5], 21, -57434055), n = p(n, r, o, i, e[u + 12], 6, 1700485571), i = p(i, n, r, o, e[u + 3], 10, -1894986606), o = p(o, i, n, r, e[u + 10], 15, -1051523), r = p(r, o, i, n, e[u + 1], 21, -2054922799), n = p(n, r, o, i, e[u + 8], 6, 1873313359), i = p(i, n, r, o, e[u + 15], 10, -30611744), o = p(o, i, n, r, e[u + 6], 15, -1560198380), r = p(r, o, i, n, e[u + 13], 21, 1309151649), n = p(n, r, o, i, e[u + 4], 6, -145523070), i = p(i, n, r, o, e[u + 11], 10, -1120210379), o = p(o, i, n, r, e[u + 2], 15, 718787259), r = p(r, o, i, n, e[u + 9], 21, -343485551), n = g(n, s), r = g(r, a), o = g(o, f), i = g(i, l);
                        }
                        return Array(n, r, o, i);
                    }
                    function s(e, t, n, r, o, i) {
                        return g((t = g(g(t, e), g(r, i))) << o | t >>> 32 - o, n);
                    }
                    function c(e, t, n, r, o, i, u) {
                        return s(t & n | ~t & r, e, t, o, i, u);
                    }
                    function d(e, t, n, r, o, i, u) {
                        return s(t & r | n & ~r, e, t, o, i, u);
                    }
                    function h(e, t, n, r, o, i, u) {
                        return s(t ^ n ^ r, e, t, o, i, u);
                    }
                    function p(e, t, n, r, o, i, u) {
                        return s(n ^ (t | ~r), e, t, o, i, u);
                    }
                    function g(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    b.exports = function(e) {
                        return t.hash(e, n, 16);
                    };
                }).call(this, w("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 11
            }
        ],
        7: [
            function(e, l, t) {
                !(function(e, t, n, r, o, i, u, s, f) {
                    var a;
                    l.exports = a || function(e) {
                        for(var t, n = new Array(e), r = 0; r < e; r++)0 == (3 & r) && (t = 4294967296 * Math.random()), n[r] = t >>> ((3 & r) << 3) & 255;
                        return n;
                    };
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                buffer: 3,
                lYpoI2: 11
            }
        ],
        8: [
            function(c, d, e) {
                !(function(e, t, n, r, o, s, a, f, l) {
                    var i = c("./helpers");
                    function u(l, c) {
                        l[c >> 5] |= 128 << 24 - c % 32, l[15 + (c + 64 >> 9 << 4)] = c;
                        for(var e, t, n, r = Array(80), o = 1732584193, i = -271733879, u = -1732584194, s = 271733878, d = -1009589776, h = 0; h < l.length; h += 16){
                            for(var p = o, g = i, y = u, w = s, b = d, a = 0; a < 80; a++){
                                r[a] = a < 16 ? l[h + a] : v(r[a - 3] ^ r[a - 8] ^ r[a - 14] ^ r[a - 16], 1);
                                var f = m(m(v(o, 5), (f = i, t = u, n = s, (e = a) < 20 ? f & t | ~f & n : !(e < 40) && e < 60 ? f & t | f & n | t & n : f ^ t ^ n)), m(m(d, r[a]), (e = a) < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514)), d = s, s = u, u = v(i, 30), i = o, o = f;
                            }
                            o = m(o, p), i = m(i, g), u = m(u, y), s = m(s, w), d = m(d, b);
                        }
                        return Array(o, i, u, s, d);
                    }
                    function m(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    function v(e, t) {
                        return e << t | e >>> 32 - t;
                    }
                    d.exports = function(e) {
                        return i.hash(e, u, 20, !0);
                    };
                }).call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 11
            }
        ],
        9: [
            function(c, d, e) {
                !(function(e, t, n, r, u, s, a, f, l) {
                    function b(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
                    }
                    function o(e, l) {
                        var c, d = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n = new Array(64);
                        e[l >> 5] |= 128 << 24 - l % 32, e[15 + (l + 64 >> 9 << 4)] = l;
                        for(var r, o, h = 0; h < e.length; h += 16){
                            for(var i = t[0], u = t[1], s = t[2], p = t[3], a = t[4], g = t[5], y = t[6], w = t[7], f = 0; f < 64; f++)n[f] = f < 16 ? e[f + h] : b(b(b((o = n[f - 2], m(o, 17) ^ m(o, 19) ^ v(o, 10)), n[f - 7]), (o = n[f - 15], m(o, 7) ^ m(o, 18) ^ v(o, 3))), n[f - 16]), c = b(b(b(b(w, m(o = a, 6) ^ m(o, 11) ^ m(o, 25)), a & g ^ ~a & y), d[f]), n[f]), r = b(m(r = i, 2) ^ m(r, 13) ^ m(r, 22), i & u ^ i & s ^ u & s), w = y, y = g, g = a, a = b(p, c), p = s, s = u, u = i, i = b(c, r);
                            t[0] = b(i, t[0]), t[1] = b(u, t[1]), t[2] = b(s, t[2]), t[3] = b(p, t[3]), t[4] = b(a, t[4]), t[5] = b(g, t[5]), t[6] = b(y, t[6]), t[7] = b(w, t[7]);
                        }
                        return t;
                    }
                    var i = c("./helpers"), m = function(e, t) {
                        return e >>> t | e << 32 - t;
                    }, v = function(e, t) {
                        return e >>> t;
                    };
                    d.exports = function(e) {
                        return i.hash(e, o, 32, !0);
                    };
                }).call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
            },
            {
                "./helpers": 4,
                buffer: 3,
                lYpoI2: 11
            }
        ],
        10: [
            function(e, t, f) {
                !(function(e, t, n, r, o, i, u, s, a) {
                    f.read = function(e, t, n, r, o) {
                        var i, u, l = 8 * o - r - 1, c = (1 << l) - 1, d = c >> 1, s = -7, a = n ? o - 1 : 0, f = n ? -1 : 1, o = e[t + a];
                        for(a += f, i = o & (1 << -s) - 1, o >>= -s, s += l; 0 < s; i = 256 * i + e[t + a], a += f, s -= 8);
                        for(u = i & (1 << -s) - 1, i >>= -s, s += r; 0 < s; u = 256 * u + e[t + a], a += f, s -= 8);
                        if (0 === i) i = 1 - d;
                        else {
                            if (i === c) return u ? NaN : 1 / 0 * (o ? -1 : 1);
                            u += Math.pow(2, r), i -= d;
                        }
                        return (o ? -1 : 1) * u * Math.pow(2, i - r);
                    }, f.write = function(e, t, l, n, r, c) {
                        var o, i, u = 8 * c - r - 1, s = (1 << u) - 1, a = s >> 1, d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f = n ? 0 : c - 1, h = n ? 1 : -1, c = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (i = isNaN(t) ? 1 : 0, o = s) : (o = Math.floor(Math.log(t) / Math.LN2), t * (n = Math.pow(2, -o)) < 1 && (o--, n *= 2), 2 <= (t += 1 <= o + a ? d / n : d * Math.pow(2, 1 - a)) * n && (o++, n /= 2), s <= o + a ? (i = 0, o = s) : 1 <= o + a ? (i = (t * n - 1) * Math.pow(2, r), o += a) : (i = t * Math.pow(2, a - 1) * Math.pow(2, r), o = 0)); 8 <= r; e[l + f] = 255 & i, f += h, i /= 256, r -= 8);
                        for(o = o << r | i, u += r; 0 < u; e[l + f] = 255 & o, f += h, o /= 256, u -= 8);
                        e[l + f - h] |= 128 * c;
                    };
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
            },
            {
                buffer: 3,
                lYpoI2: 11
            }
        ],
        11: [
            function(e, h, t) {
                !(function(e, t, n, r, o, f, l, c, d) {
                    var i, u, s;
                    function a() {}
                    (e = h.exports = {}).nextTick = (u = "undefined" != typeof window && window.setImmediate, s = "undefined" != typeof window && window.postMessage && window.addEventListener, u ? function(e) {
                        return window.setImmediate(e);
                    } : s ? (i = [], window.addEventListener("message", function(e) {
                        var t = e.source;
                        t !== window && null !== t || "process-tick" !== e.data || (e.stopPropagation(), 0 < i.length && i.shift()());
                    }, !0), function(e) {
                        i.push(e), window.postMessage("process-tick", "*");
                    }) : function(e) {
                        setTimeout(e, 0);
                    }), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = a, e.addListener = a, e.once = a, e.off = a, e.removeListener = a, e.removeAllListeners = a, e.emit = a, e.binding = function(e) {
                        throw new Error("process.binding is not supported");
                    }, e.cwd = function() {
                        return "/";
                    }, e.chdir = function(e) {
                        throw new Error("process.chdir is not supported");
                    };
                }).call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
            },
            {
                buffer: 3,
                lYpoI2: 11
            }
        ]
    }, {}, [
        1
    ])(1);
});
}),
"[project]/altoque-pwa/node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x,
        blackBright: x,
        redBright: x,
        greenBright: x,
        yellowBright: x,
        blueBright: x,
        magentaBright: x,
        cyanBright: x,
        whiteBright: x,
        bgBlackBright: x,
        bgRedBright: x,
        bgGreenBright: x,
        bgYellowBright: x,
        bgBlueBright: x,
        bgMagentaBright: x,
        bgCyanBright: x,
        bgWhiteBright: x
    };
};
module.exports = create();
module.exports.createColors = create;
}),
"[project]/altoque-pwa/node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

// This alphabet uses `A-Za-z0-9_-` symbols.
// The order of characters is optimized for better gzip and brotli compression.
// References to the same file (works both for gzip and brotli):
// `'use`, `andom`, and `rict'`
// References to the brotli default dictionary:
// `-26T`, `1983`, `40px`, `75px`, `bush`, `jack`, `mind`, `very`, and `wolf`
let urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = '';
        // A compact alternative for `for (var i = 0; i < step; i++)`.
        let i = size | 0;
        while(i--){
            // `| 0` is more compact and faster than `Math.floor()`.
            id += alphabet[Math.random() * alphabet.length | 0];
        }
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = '';
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size | 0;
    while(i--){
        // `| 0` is more compact and faster than `Math.floor()`.
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
module.exports = {
    nanoid,
    customAlphabet
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

!function(t, n) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = function(t, n, e, i, o) {
        for(n = n.split ? n.split(".") : n, i = 0; i < n.length; i++)t = t ? t[n[i]] : o;
        return t === o ? e : t;
    } : "TURBOPACK unreachable";
}(/*TURBOPACK member replacement*/ __turbopack_context__.e); //# sourceMappingURL=dlv.umd.js.map
}),
"[project]/altoque-pwa/node_modules/.pnpm/cssesc@3.0.0/node_modules/cssesc/cssesc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*! https://mths.be/cssesc v3.0.0 by @mathias */ var object = {};
var hasOwnProperty = object.hasOwnProperty;
var merge = function merge(options, defaults) {
    if (!options) {
        return defaults;
    }
    var result = {};
    for(var key in defaults){
        // `if (defaults.hasOwnProperty(key) { … }` is not needed here, since
        // only recognized option names are used.
        result[key] = hasOwnProperty.call(options, key) ? options[key] : defaults[key];
    }
    return result;
};
var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexAlwaysEscape = /['"\\]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;
// https://mathiasbynens.be/notes/css-escapes#css
var cssesc = function cssesc(string, options) {
    options = merge(options, cssesc.options);
    if (options.quotes != 'single' && options.quotes != 'double') {
        options.quotes = 'single';
    }
    var quote = options.quotes == 'double' ? '"' : '\'';
    var isIdentifier = options.isIdentifier;
    var firstChar = string.charAt(0);
    var output = '';
    var counter = 0;
    var length = string.length;
    while(counter < length){
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;
        // If it’s not a printable ASCII character…
        if (codePoint < 0x20 || codePoint > 0x7E) {
            if (codePoint >= 0xD800 && codePoint <= 0xDBFF && counter < length) {
                // It’s a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                    // next character is low surrogate
                    codePoint = ((codePoint & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000;
                } else {
                    // It’s an unmatched surrogate; only append this code unit, in case
                    // the next code unit is the high surrogate of a surrogate pair.
                    counter--;
                }
            }
            value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
        } else {
            if (options.escapeEverything) {
                if (regexAnySingleEscape.test(character)) {
                    value = '\\' + character;
                } else {
                    value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
                }
            } else if (/[\t\n\f\r\x0B]/.test(character)) {
                value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
            } else if (character == '\\' || !isIdentifier && (character == '"' && quote == character || character == '\'' && quote == character) || isIdentifier && regexSingleEscape.test(character)) {
                value = '\\' + character;
            } else {
                value = character;
            }
        }
        output += value;
    }
    if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
            output = '\\-' + output.slice(1);
        } else if (/\d/.test(firstChar)) {
            output = '\\3' + firstChar + ' ' + output.slice(1);
        }
    }
    // Remove spaces after `\HEX` escapes that are not followed by a hex digit,
    // since they’re redundant. Note that this is only possible if the escape
    // sequence isn’t preceded by an odd number of backslashes.
    output = output.replace(regexExcessiveSpaces, function($0, $1, $2) {
        if ($1 && $1.length % 2) {
            // It’s not safe to remove the space, so don’t.
            return $0;
        }
        // Strip the space.
        return ($1 || '') + $2;
    });
    if (!isIdentifier && options.wrap) {
        return quote + output + quote;
    }
    return output;
};
// Expose default options (so they can be overridden globally).
cssesc.options = {
    'escapeEverything': false,
    'isIdentifier': false,
    'quotes': 'single',
    'wrap': false
};
cssesc.version = '3.0.0';
module.exports = cssesc;
}),
"[project]/altoque-pwa/node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module exports.
 */ module.exports = deprecate;
/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */ function deprecate(fn, msg) {
    if (config('noDeprecation')) {
        return fn;
    }
    var warned = false;
    function deprecated() {
        if (!warned) {
            if (config('throwDeprecation')) {
                throw new Error(msg);
            } else if (config('traceDeprecation')) {
                console.trace(msg);
            } else {
                console.warn(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
}
/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */ function config(name) {
    // accessing global.localStorage can trigger a DOMException in sandboxed iframes
    try {
        if (!/*TURBOPACK member replacement*/ __turbopack_context__.g.localStorage) return false;
    } catch (_) {
        return false;
    }
    var val = /*TURBOPACK member replacement*/ __turbopack_context__.g.localStorage[name];
    if (null == val) return false;
    return String(val).toLowerCase() === 'true';
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-nested@6.2.0_postcss@8.5.6/node_modules/postcss-nested/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { AtRule, Rule } = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)");
let parser = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-selector-parser@6.1.2/node_modules/postcss-selector-parser/dist/index.js [app-client] (ecmascript)");
/**
 * Run a selector string through postcss-selector-parser
 */ function parse(rawSelector, rule) {
    let nodes;
    try {
        parser((parsed)=>{
            nodes = parsed;
        }).processSync(rawSelector);
    } catch (e) {
        if (rawSelector.includes(':')) {
            throw rule ? rule.error('Missed semicolon') : e;
        } else {
            throw rule ? rule.error(e.message) : e;
        }
    }
    return nodes.at(0);
}
/**
 * Replaces the "&" token in a node's selector with the parent selector
 * similar to what SCSS does.
 *
 * Mutates the nodes list
 */ function interpolateAmpInSelector(nodes, parent) {
    let replaced = false;
    nodes.each((node)=>{
        if (node.type === 'nesting') {
            let clonedParent = parent.clone({});
            if (node.value !== '&') {
                node.replaceWith(parse(node.value.replace('&', clonedParent.toString())));
            } else {
                node.replaceWith(clonedParent);
            }
            replaced = true;
        } else if ('nodes' in node && node.nodes) {
            if (interpolateAmpInSelector(node, parent)) {
                replaced = true;
            }
        }
    });
    return replaced;
}
/**
 * Combines parent and child selectors, in a SCSS-like way
 */ function mergeSelectors(parent, child) {
    let merged = [];
    parent.selectors.forEach((sel)=>{
        let parentNode = parse(sel, parent);
        child.selectors.forEach((selector)=>{
            if (!selector) {
                return;
            }
            let node = parse(selector, child);
            let replaced = interpolateAmpInSelector(node, parentNode);
            if (!replaced) {
                node.prepend(parser.combinator({
                    value: ' '
                }));
                node.prepend(parentNode.clone({}));
            }
            merged.push(node.toString());
        });
    });
    return merged;
}
/**
 * Move a child and its preceeding comment(s) to after "after"
 */ function breakOut(child, after) {
    let prev = child.prev();
    after.after(child);
    while(prev && prev.type === 'comment'){
        let nextPrev = prev.prev();
        after.after(prev);
        prev = nextPrev;
    }
    return child;
}
function createFnAtruleChilds(bubble) {
    return function atruleChilds(rule, atrule, bubbling, mergeSels = bubbling) {
        let children = [];
        atrule.each((child)=>{
            if (child.type === 'rule' && bubbling) {
                if (mergeSels) {
                    child.selectors = mergeSelectors(rule, child);
                }
            } else if (child.type === 'atrule' && child.nodes) {
                if (bubble[child.name]) {
                    atruleChilds(rule, child, mergeSels);
                } else if (atrule[rootRuleMergeSel] !== false) {
                    children.push(child);
                }
            } else {
                children.push(child);
            }
        });
        if (bubbling) {
            if (children.length) {
                let clone = rule.clone({
                    nodes: []
                });
                for (let child of children){
                    clone.append(child);
                }
                atrule.prepend(clone);
            }
        }
    };
}
function pickDeclarations(selector, declarations, after) {
    let parent = new Rule({
        nodes: [],
        selector
    });
    parent.append(declarations);
    after.after(parent);
    return parent;
}
function atruleNames(defaults, custom) {
    let list = {};
    for (let name of defaults){
        list[name] = true;
    }
    if (custom) {
        for (let name of custom){
            list[name.replace(/^@/, '')] = true;
        }
    }
    return list;
}
function parseRootRuleParams(params) {
    params = params.trim();
    let braceBlock = params.match(/^\((.*)\)$/);
    if (!braceBlock) {
        return {
            selector: params,
            type: 'basic'
        };
    }
    let bits = braceBlock[1].match(/^(with(?:out)?):(.+)$/);
    if (bits) {
        let allowlist = bits[1] === 'with';
        let rules = Object.fromEntries(bits[2].trim().split(/\s+/).map((name)=>[
                name,
                true
            ]));
        if (allowlist && rules.all) {
            return {
                type: 'noop'
            };
        }
        let escapes = (rule)=>!!rules[rule];
        if (rules.all) {
            escapes = ()=>true;
        } else if (allowlist) {
            escapes = (rule)=>rule === 'all' ? false : !rules[rule];
        }
        return {
            escapes,
            type: 'withrules'
        };
    }
    // Unrecognized brace block
    return {
        type: 'unknown'
    };
}
function getAncestorRules(leaf) {
    let lineage = [];
    let parent = leaf.parent;
    while(parent && parent instanceof AtRule){
        lineage.push(parent);
        parent = parent.parent;
    }
    return lineage;
}
function unwrapRootRule(rule) {
    let escapes = rule[rootRuleEscapes];
    if (!escapes) {
        rule.after(rule.nodes);
    } else {
        let nodes = rule.nodes;
        let topEscaped;
        let topEscapedIdx = -1;
        let breakoutLeaf;
        let breakoutRoot;
        let clone;
        let lineage = getAncestorRules(rule);
        lineage.forEach((parent, i)=>{
            if (escapes(parent.name)) {
                topEscaped = parent;
                topEscapedIdx = i;
                breakoutRoot = clone;
            } else {
                let oldClone = clone;
                clone = parent.clone({
                    nodes: []
                });
                oldClone && clone.append(oldClone);
                breakoutLeaf = breakoutLeaf || clone;
            }
        });
        if (!topEscaped) {
            rule.after(nodes);
        } else if (!breakoutRoot) {
            topEscaped.after(nodes);
        } else {
            let leaf = breakoutLeaf;
            leaf.append(nodes);
            topEscaped.after(breakoutRoot);
        }
        if (rule.next() && topEscaped) {
            let restRoot;
            lineage.slice(0, topEscapedIdx + 1).forEach((parent, i, arr)=>{
                let oldRoot = restRoot;
                restRoot = parent.clone({
                    nodes: []
                });
                oldRoot && restRoot.append(oldRoot);
                let nextSibs = [];
                let _child = arr[i - 1] || rule;
                let next = _child.next();
                while(next){
                    nextSibs.push(next);
                    next = next.next();
                }
                restRoot.append(nextSibs);
            });
            restRoot && (breakoutRoot || nodes[nodes.length - 1]).after(restRoot);
        }
    }
    rule.remove();
}
const rootRuleMergeSel = Symbol('rootRuleMergeSel');
const rootRuleEscapes = Symbol('rootRuleEscapes');
function normalizeRootRule(rule) {
    let { params } = rule;
    let { escapes, selector, type } = parseRootRuleParams(params);
    if (type === 'unknown') {
        throw rule.error(`Unknown @${rule.name} parameter ${JSON.stringify(params)}`);
    }
    if (type === 'basic' && selector) {
        let selectorBlock = new Rule({
            nodes: rule.nodes,
            selector
        });
        rule.removeAll();
        rule.append(selectorBlock);
    }
    rule[rootRuleEscapes] = escapes;
    rule[rootRuleMergeSel] = escapes ? !escapes('all') : type === 'noop';
}
const hasRootRule = Symbol('hasRootRule');
module.exports = (opts = {})=>{
    let bubble = atruleNames([
        'media',
        'supports',
        'layer',
        'container',
        'starting-style'
    ], opts.bubble);
    let atruleChilds = createFnAtruleChilds(bubble);
    let unwrap = atruleNames([
        'document',
        'font-face',
        'keyframes',
        '-webkit-keyframes',
        '-moz-keyframes'
    ], opts.unwrap);
    let rootRuleName = (opts.rootRuleName || 'at-root').replace(/^@/, '');
    let preserveEmpty = opts.preserveEmpty;
    return {
        Once (root) {
            root.walkAtRules(rootRuleName, (node)=>{
                normalizeRootRule(node);
                root[hasRootRule] = true;
            });
        },
        postcssPlugin: 'postcss-nested',
        RootExit (root) {
            if (root[hasRootRule]) {
                root.walkAtRules(rootRuleName, unwrapRootRule);
                root[hasRootRule] = false;
            }
        },
        Rule (rule) {
            let unwrapped = false;
            let after = rule;
            let copyDeclarations = false;
            let declarations = [];
            rule.each((child)=>{
                if (child.type === 'rule') {
                    if (declarations.length) {
                        after = pickDeclarations(rule.selector, declarations, after);
                        declarations = [];
                    }
                    copyDeclarations = true;
                    unwrapped = true;
                    child.selectors = mergeSelectors(rule, child);
                    after = breakOut(child, after);
                } else if (child.type === 'atrule') {
                    if (declarations.length) {
                        after = pickDeclarations(rule.selector, declarations, after);
                        declarations = [];
                    }
                    if (child.name === rootRuleName) {
                        unwrapped = true;
                        atruleChilds(rule, child, true, child[rootRuleMergeSel]);
                        after = breakOut(child, after);
                    } else if (bubble[child.name]) {
                        copyDeclarations = true;
                        unwrapped = true;
                        atruleChilds(rule, child, true);
                        after = breakOut(child, after);
                    } else if (unwrap[child.name]) {
                        copyDeclarations = true;
                        unwrapped = true;
                        atruleChilds(rule, child, false);
                        after = breakOut(child, after);
                    } else if (copyDeclarations) {
                        declarations.push(child);
                    }
                } else if (child.type === 'decl' && copyDeclarations) {
                    declarations.push(child);
                }
            });
            if (declarations.length) {
                after = pickDeclarations(rule.selector, declarations, after);
            }
            if (unwrapped && preserveEmpty !== true) {
                rule.raws.semicolon = true;
                if (rule.nodes.length === 0) rule.remove();
            }
        }
    };
};
module.exports.postcss = true;
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/parser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let postcss = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)");
let IMPORTANT = /\s*!important\s*$/i;
let UNITLESS = {
    'box-flex': true,
    'box-flex-group': true,
    'column-count': true,
    'flex': true,
    'flex-grow': true,
    'flex-positive': true,
    'flex-shrink': true,
    'flex-negative': true,
    'font-weight': true,
    'line-clamp': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'tab-size': true,
    'widows': true,
    'z-index': true,
    'zoom': true,
    'fill-opacity': true,
    'stroke-dashoffset': true,
    'stroke-opacity': true,
    'stroke-width': true
};
function dashify(str) {
    return str.replace(/([A-Z])/g, '-$1').replace(/^ms-/, '-ms-').toLowerCase();
}
function decl(parent, name, value) {
    if (value === false || value === null) return;
    if (!name.startsWith('--')) {
        name = dashify(name);
    }
    if (typeof value === 'number') {
        if (value === 0 || UNITLESS[name]) {
            value = value.toString();
        } else {
            value += 'px';
        }
    }
    if (name === 'css-float') name = 'float';
    if (IMPORTANT.test(value)) {
        value = value.replace(IMPORTANT, '');
        parent.push(postcss.decl({
            prop: name,
            value,
            important: true
        }));
    } else {
        parent.push(postcss.decl({
            prop: name,
            value
        }));
    }
}
function atRule(parent, parts, value) {
    let node = postcss.atRule({
        name: parts[1],
        params: parts[3] || ''
    });
    if (typeof value === 'object') {
        node.nodes = [];
        parse(value, node);
    }
    parent.push(node);
}
function parse(obj, parent) {
    let name, node, value;
    for(name in obj){
        value = obj[name];
        if (value === null || typeof value === 'undefined') {
            continue;
        } else if (name[0] === '@') {
            let parts = name.match(/@(\S+)(\s+([\W\w]*)\s*)?/);
            if (Array.isArray(value)) {
                for (let i of value){
                    atRule(parent, parts, i);
                }
            } else {
                atRule(parent, parts, value);
            }
        } else if (Array.isArray(value)) {
            for (let i of value){
                decl(parent, name, i);
            }
        } else if (typeof value === 'object') {
            node = postcss.rule({
                selector: name
            });
            parse(value, node);
            parent.push(node);
        } else {
            decl(parent, name, value);
        }
    }
}
module.exports = function(obj) {
    let root = postcss.root();
    parse(obj, root);
    return root;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/objectifier.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let camelcase = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index-es5.js [app-client] (ecmascript)");
let UNITLESS = {
    boxFlex: true,
    boxFlexGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    strokeDashoffset: true,
    strokeOpacity: true,
    strokeWidth: true
};
function atRule(node) {
    if (typeof node.nodes === 'undefined') {
        return true;
    } else {
        return process(node);
    }
}
function process(node, options = {}) {
    let name;
    let result = {};
    let { stringifyImportant } = options;
    node.each((child)=>{
        if (child.type === 'atrule') {
            name = '@' + child.name;
            if (child.params) name += ' ' + child.params;
            if (typeof result[name] === 'undefined') {
                result[name] = atRule(child);
            } else if (Array.isArray(result[name])) {
                result[name].push(atRule(child));
            } else {
                result[name] = [
                    result[name],
                    atRule(child)
                ];
            }
        } else if (child.type === 'rule') {
            let body = process(child);
            if (result[child.selector]) {
                for(let i in body){
                    let object = result[child.selector];
                    if (stringifyImportant && object[i] && object[i].endsWith('!important')) {
                        if (body[i].endsWith('!important')) {
                            object[i] = body[i];
                        }
                    } else {
                        object[i] = body[i];
                    }
                }
            } else {
                result[child.selector] = body;
            }
        } else if (child.type === 'decl') {
            if (child.prop[0] === '-' && child.prop[1] === '-') {
                name = child.prop;
            } else if (child.parent && child.parent.selector === ':export') {
                name = child.prop;
            } else {
                name = camelcase(child.prop);
            }
            let value = child.value;
            if (!isNaN(child.value) && UNITLESS[name]) {
                value = parseFloat(child.value);
            }
            if (child.important) value += ' !important';
            if (typeof result[name] === 'undefined') {
                result[name] = value;
            } else if (Array.isArray(result[name])) {
                result[name].push(value);
            } else {
                result[name] = [
                    result[name],
                    value
                ];
            }
        }
    });
    return result;
}
module.exports = process;
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/process-result.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let objectify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/objectifier.js [app-client] (ecmascript)");
module.exports = function processResult(result) {
    if (console && console.warn) {
        result.warnings().forEach((warn)=>{
            let source = warn.plugin || 'PostCSS';
            console.warn(source + ': ' + warn.text);
        });
    }
    return objectify(result.root);
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let postcss = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)");
let parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/parser.js [app-client] (ecmascript)");
let processResult = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/process-result.js [app-client] (ecmascript)");
module.exports = function async(plugins) {
    let processor = postcss(plugins);
    return async (input)=>{
        let result = await processor.process(input, {
            parser: parse,
            from: undefined
        });
        return processResult(result);
    };
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let postcss = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss@8.5.6/node_modules/postcss/lib/postcss.js [app-client] (ecmascript)");
let parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/parser.js [app-client] (ecmascript)");
let processResult = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/process-result.js [app-client] (ecmascript)");
module.exports = function(plugins) {
    let processor = postcss(plugins);
    return (input)=>{
        let result = processor.process(input, {
            parser: parse,
            from: undefined
        });
        return processResult(result);
    };
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

let async = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/async.js [app-client] (ecmascript)");
let objectify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/objectifier.js [app-client] (ecmascript)");
let parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/parser.js [app-client] (ecmascript)");
let sync = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/postcss-js@4.1.0_postcss@8.5.6/node_modules/postcss-js/sync.js [app-client] (ecmascript)");
module.exports = {
    objectify,
    parse,
    async,
    sync
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/camelcase-css@2.0.1/node_modules/camelcase-css/index-es5.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var pattern = /-(\w|$)/g;
var callback = function callback(dashChar, char) {
    return char.toUpperCase();
};
var camelCaseCSS = function camelCaseCSS(property) {
    property = property.toLowerCase();
    // NOTE :: IE8's "styleFloat" is intentionally not supported
    if (property === "float") {
        return "cssFloat";
    } else if (property.charCodeAt(0) === 45 && property.charCodeAt(1) === 109 && property.charCodeAt(2) === 115 && property.charCodeAt(3) === 45) {
        return property.substr(1).replace(pattern, callback);
    } else {
        return property.replace(pattern, callback);
    }
};
module.exports = camelCaseCSS;
}),
"[project]/altoque-pwa/node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */ module.exports = function isExtglob(str) {
    if (typeof str !== 'string' || str === '') {
        return false;
    }
    var match;
    while(match = /(\\).|([@?!+*]\(.*\))/g.exec(str)){
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
    }
    return false;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var isExtglob = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/is-extglob@2.1.1/node_modules/is-extglob/index.js [app-client] (ecmascript)");
var chars = {
    '{': '}',
    '(': ')',
    '[': ']'
};
var strictCheck = function(str) {
    if (str[0] === '!') {
        return true;
    }
    var index = 0;
    var pipeIndex = -2;
    var closeSquareIndex = -2;
    var closeCurlyIndex = -2;
    var closeParenIndex = -2;
    var backSlashIndex = -2;
    while(index < str.length){
        if (str[index] === '*') {
            return true;
        }
        if (str[index + 1] === '?' && /[\].+)]/.test(str[index])) {
            return true;
        }
        if (closeSquareIndex !== -1 && str[index] === '[' && str[index + 1] !== ']') {
            if (closeSquareIndex < index) {
                closeSquareIndex = str.indexOf(']', index);
            }
            if (closeSquareIndex > index) {
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                    return true;
                }
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                    return true;
                }
            }
        }
        if (closeCurlyIndex !== -1 && str[index] === '{' && str[index + 1] !== '}') {
            closeCurlyIndex = str.indexOf('}', index);
            if (closeCurlyIndex > index) {
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
                    return true;
                }
            }
        }
        if (closeParenIndex !== -1 && str[index] === '(' && str[index + 1] === '?' && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ')') {
            closeParenIndex = str.indexOf(')', index);
            if (closeParenIndex > index) {
                backSlashIndex = str.indexOf('\\', index);
                if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                    return true;
                }
            }
        }
        if (pipeIndex !== -1 && str[index] === '(' && str[index + 1] !== '|') {
            if (pipeIndex < index) {
                pipeIndex = str.indexOf('|', index);
            }
            if (pipeIndex !== -1 && str[pipeIndex + 1] !== ')') {
                closeParenIndex = str.indexOf(')', pipeIndex);
                if (closeParenIndex > pipeIndex) {
                    backSlashIndex = str.indexOf('\\', pipeIndex);
                    if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                        return true;
                    }
                }
            }
        }
        if (str[index] === '\\') {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) {
                    index = n + 1;
                }
            }
            if (str[index] === '!') {
                return true;
            }
        } else {
            index++;
        }
    }
    return false;
};
var relaxedCheck = function(str) {
    if (str[0] === '!') {
        return true;
    }
    var index = 0;
    while(index < str.length){
        if (/[*?{}()[\]]/.test(str[index])) {
            return true;
        }
        if (str[index] === '\\') {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) {
                    index = n + 1;
                }
            }
            if (str[index] === '!') {
                return true;
            }
        } else {
            index++;
        }
    }
    return false;
};
module.exports = function isGlob(str, options) {
    if (typeof str !== 'string' || str === '') {
        return false;
    }
    if (isExtglob(str)) {
        return true;
    }
    var check = strictCheck;
    // optionally relax check
    if (options && options.strict === false) {
        check = relaxedCheck;
    }
    return check(str);
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/array.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.splitWhen = exports.flatten = void 0;
function flatten(items) {
    return items.reduce((collection, item)=>[].concat(collection, item), []);
}
exports.flatten = flatten;
function splitWhen(items, predicate) {
    const result = [
        []
    ];
    let groupIndex = 0;
    for (const item of items){
        if (predicate(item)) {
            groupIndex++;
            result[groupIndex] = [];
        } else {
            result[groupIndex].push(item);
        }
    }
    return result;
}
exports.splitWhen = splitWhen;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/errno.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEnoentCodeError = void 0;
function isEnoentCodeError(error) {
    return error.code === 'ENOENT';
}
exports.isEnoentCodeError = isEnoentCodeError;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/fs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDirentFromStats = void 0;
class DirentFromStats {
    constructor(name, stats){
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
}
function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
}
exports.createDirentFromStats = createDirentFromStats;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
const os = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const IS_WINDOWS_PLATFORM = os.platform() === 'win32';
const LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2; // ./ or .\\
/**
 * All non-escaped special characters.
 * Posix: ()*?[]{|}, !+@ before (, ! at the beginning, \\ before non-special characters.
 * Windows: (){}[], !+@ before (, ! at the beginning.
 */ const POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
const WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
/**
 * The device path (\\.\ or \\?\).
 * https://learn.microsoft.com/en-us/dotnet/standard/io/file-path-formats#dos-device-paths
 */ const DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
/**
 * All backslashes except those escaping special characters.
 * Windows: !()+@{}
 * https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions
 */ const WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
/**
 * Designed to work only with simple paths: `dir\\file`.
 */ function unixify(filepath) {
    return filepath.replace(/\\/g, '/');
}
exports.unixify = unixify;
function makeAbsolute(cwd, filepath) {
    return path.resolve(cwd, filepath);
}
exports.makeAbsolute = makeAbsolute;
function removeLeadingDotSegment(entry) {
    // We do not use `startsWith` because this is 10x slower than current implementation for some cases.
    // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
    if (entry.charAt(0) === '.') {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === '/' || secondCharactery === '\\') {
            return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
    }
    return entry;
}
exports.removeLeadingDotSegment = removeLeadingDotSegment;
exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
function escapeWindowsPath(pattern) {
    return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
}
exports.escapeWindowsPath = escapeWindowsPath;
function escapePosixPath(pattern) {
    return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
}
exports.escapePosixPath = escapePosixPath;
exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
function convertWindowsPathToPattern(filepath) {
    return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, '//$1').replace(WINDOWS_BACKSLASHES_RE, '/');
}
exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
function convertPosixPathToPattern(filepath) {
    return escapePosixPath(filepath);
}
exports.convertPosixPathToPattern = convertPosixPathToPattern;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAbsolute = exports.partitionAbsoluteAndRelative = exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const globParent = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js [app-client] (ecmascript)");
const micromatch = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/micromatch@4.0.8/node_modules/micromatch/index.js [app-client] (ecmascript)");
const GLOBSTAR = '**';
const ESCAPE_SYMBOL = '\\';
const COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
const REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
const REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
const GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
const BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
/**
 * Matches a sequence of two or more consecutive slashes, excluding the first two slashes at the beginning of the string.
 * The latter is due to the presence of the device path at the beginning of the UNC path.
 */ const DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
function isStaticPattern(pattern, options = {}) {
    return !isDynamicPattern(pattern, options);
}
exports.isStaticPattern = isStaticPattern;
function isDynamicPattern(pattern, options = {}) {
    /**
     * A special case with an empty string is necessary for matching patterns that start with a forward slash.
     * An empty string cannot be a dynamic pattern.
     * For example, the pattern `/lib/*` will be spread into parts: '', 'lib', '*'.
     */ if (pattern === '') {
        return false;
    }
    /**
     * When the `caseSensitiveMatch` option is disabled, all patterns must be marked as dynamic, because we cannot check
     * filepath directly (without read directory).
     */ if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
    }
    if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
    }
    if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
    }
    if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
    }
    return false;
}
exports.isDynamicPattern = isDynamicPattern;
function hasBraceExpansion(pattern) {
    const openingBraceIndex = pattern.indexOf('{');
    if (openingBraceIndex === -1) {
        return false;
    }
    const closingBraceIndex = pattern.indexOf('}', openingBraceIndex + 1);
    if (closingBraceIndex === -1) {
        return false;
    }
    const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
    return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
}
function convertToPositivePattern(pattern) {
    return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
}
exports.convertToPositivePattern = convertToPositivePattern;
function convertToNegativePattern(pattern) {
    return '!' + pattern;
}
exports.convertToNegativePattern = convertToNegativePattern;
function isNegativePattern(pattern) {
    return pattern.startsWith('!') && pattern[1] !== '(';
}
exports.isNegativePattern = isNegativePattern;
function isPositivePattern(pattern) {
    return !isNegativePattern(pattern);
}
exports.isPositivePattern = isPositivePattern;
function getNegativePatterns(patterns) {
    return patterns.filter(isNegativePattern);
}
exports.getNegativePatterns = getNegativePatterns;
function getPositivePatterns(patterns) {
    return patterns.filter(isPositivePattern);
}
exports.getPositivePatterns = getPositivePatterns;
/**
 * Returns patterns that can be applied inside the current directory.
 *
 * @example
 * // ['./*', '*', 'a/*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */ function getPatternsInsideCurrentDirectory(patterns) {
    return patterns.filter((pattern)=>!isPatternRelatedToParentDirectory(pattern));
}
exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
/**
 * Returns patterns to be expanded relative to (outside) the current directory.
 *
 * @example
 * // ['../*', './../*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */ function getPatternsOutsideCurrentDirectory(patterns) {
    return patterns.filter(isPatternRelatedToParentDirectory);
}
exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
function isPatternRelatedToParentDirectory(pattern) {
    return pattern.startsWith('..') || pattern.startsWith('./..');
}
exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
function getBaseDirectory(pattern) {
    return globParent(pattern, {
        flipBackslashes: false
    });
}
exports.getBaseDirectory = getBaseDirectory;
function hasGlobStar(pattern) {
    return pattern.includes(GLOBSTAR);
}
exports.hasGlobStar = hasGlobStar;
function endsWithSlashGlobStar(pattern) {
    return pattern.endsWith('/' + GLOBSTAR);
}
exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
function isAffectDepthOfReadingPattern(pattern) {
    const basename = path.basename(pattern);
    return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
}
exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
function expandPatternsWithBraceExpansion(patterns) {
    return patterns.reduce((collection, pattern)=>{
        return collection.concat(expandBraceExpansion(pattern));
    }, []);
}
exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
function expandBraceExpansion(pattern) {
    const patterns = micromatch.braces(pattern, {
        expand: true,
        nodupes: true,
        keepEscaping: true
    });
    /**
     * Sort the patterns by length so that the same depth patterns are processed side by side.
     * `a/{b,}/{c,}/*` – `['a///*', 'a/b//*', 'a//c/*', 'a/b/c/*']`
     */ patterns.sort((a, b)=>a.length - b.length);
    /**
     * Micromatch can return an empty string in the case of patterns like `{a,}`.
     */ return patterns.filter((pattern)=>pattern !== '');
}
exports.expandBraceExpansion = expandBraceExpansion;
function getPatternParts(pattern, options) {
    let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), {
        parts: true
    }));
    /**
     * The scan method returns an empty array in some cases.
     * See micromatch/picomatch#58 for more details.
     */ if (parts.length === 0) {
        parts = [
            pattern
        ];
    }
    /**
     * The scan method does not return an empty part for the pattern with a forward slash.
     * This is another part of micromatch/picomatch#58.
     */ if (parts[0].startsWith('/')) {
        parts[0] = parts[0].slice(1);
        parts.unshift('');
    }
    return parts;
}
exports.getPatternParts = getPatternParts;
function makeRe(pattern, options) {
    return micromatch.makeRe(pattern, options);
}
exports.makeRe = makeRe;
function convertPatternsToRe(patterns, options) {
    return patterns.map((pattern)=>makeRe(pattern, options));
}
exports.convertPatternsToRe = convertPatternsToRe;
function matchAny(entry, patternsRe) {
    return patternsRe.some((patternRe)=>patternRe.test(entry));
}
exports.matchAny = matchAny;
/**
 * This package only works with forward slashes as a path separator.
 * Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.
 */ function removeDuplicateSlashes(pattern) {
    return pattern.replace(DOUBLE_SLASH_RE, '/');
}
exports.removeDuplicateSlashes = removeDuplicateSlashes;
function partitionAbsoluteAndRelative(patterns) {
    const absolute = [];
    const relative = [];
    for (const pattern of patterns){
        if (isAbsolute(pattern)) {
            absolute.push(pattern);
        } else {
            relative.push(pattern);
        }
    }
    return [
        absolute,
        relative
    ];
}
exports.partitionAbsoluteAndRelative = partitionAbsoluteAndRelative;
function isAbsolute(pattern) {
    return path.isAbsolute(pattern);
}
exports.isAbsolute = isAbsolute;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/stream.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = void 0;
const merge2 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js [app-client] (ecmascript)");
function merge(streams) {
    const mergedStream = merge2(streams);
    streams.forEach((stream)=>{
        stream.once('error', (error)=>mergedStream.emit('error', error));
    });
    mergedStream.once('close', ()=>propagateCloseEventToSources(streams));
    mergedStream.once('end', ()=>propagateCloseEventToSources(streams));
    return mergedStream;
}
exports.merge = merge;
function propagateCloseEventToSources(streams) {
    streams.forEach((stream)=>stream.emit('close'));
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/string.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmpty = exports.isString = void 0;
function isString(input) {
    return typeof input === 'string';
}
exports.isString = isString;
function isEmpty(input) {
    return input === '';
}
exports.isEmpty = isEmpty;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
const array = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/array.js [app-client] (ecmascript)");
exports.array = array;
const errno = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/errno.js [app-client] (ecmascript)");
exports.errno = errno;
const fs = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/fs.js [app-client] (ecmascript)");
exports.fs = fs;
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/path.js [app-client] (ecmascript)");
exports.path = path;
const pattern = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/pattern.js [app-client] (ecmascript)");
exports.pattern = pattern;
const stream = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/stream.js [app-client] (ecmascript)");
exports.stream = stream;
const string = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/string.js [app-client] (ecmascript)");
exports.string = string;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/managers/tasks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
function generate(input, settings) {
    const patterns = processPatterns(input, settings);
    const ignore = processPatterns(settings.ignore, settings);
    const positivePatterns = getPositivePatterns(patterns);
    const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
    const staticPatterns = positivePatterns.filter((pattern)=>utils.pattern.isStaticPattern(pattern, settings));
    const dynamicPatterns = positivePatterns.filter((pattern)=>utils.pattern.isDynamicPattern(pattern, settings));
    const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, /* dynamic */ false);
    const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, /* dynamic */ true);
    return staticTasks.concat(dynamicTasks);
}
exports.generate = generate;
function processPatterns(input, settings) {
    let patterns = input;
    /**
     * The original pattern like `{,*,**,a/*}` can lead to problems checking the depth when matching entry
     * and some problems with the micromatch package (see fast-glob issues: #365, #394).
     *
     * To solve this problem, we expand all patterns containing brace expansion. This can lead to a slight slowdown
     * in matching in the case of a large set of patterns after expansion.
     */ if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
    }
    /**
     * If the `baseNameMatch` option is enabled, we must add globstar to patterns, so that they can be used
     * at any nesting level.
     *
     * We do this here, because otherwise we have to complicate the filtering logic. For example, we need to change
     * the pattern in the filter before creating a regular expression. There is no need to change the patterns
     * in the application. Only on the input.
     */ if (settings.baseNameMatch) {
        patterns = patterns.map((pattern)=>pattern.includes('/') ? pattern : `**/${pattern}`);
    }
    /**
     * This method also removes duplicate slashes that may have been in the pattern or formed as a result of expansion.
     */ return patterns.map((pattern)=>utils.pattern.removeDuplicateSlashes(pattern));
}
/**
 * Returns tasks grouped by basic pattern directories.
 *
 * Patterns that can be found inside (`./`) and outside (`../`) the current directory are handled separately.
 * This is necessary because directory traversal starts at the base directory and goes deeper.
 */ function convertPatternsToTasks(positive, negative, dynamic) {
    const tasks = [];
    const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
    const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
    const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
    const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
    tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
    /*
     * For the sake of reducing future accesses to the file system, we merge all tasks within the current directory
     * into a global task, if at least one pattern refers to the root (`.`). In this case, the global task covers the rest.
     */ if ('.' in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask('.', patternsInsideCurrentDirectory, negative, dynamic));
    } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
    }
    return tasks;
}
exports.convertPatternsToTasks = convertPatternsToTasks;
function getPositivePatterns(patterns) {
    return utils.pattern.getPositivePatterns(patterns);
}
exports.getPositivePatterns = getPositivePatterns;
function getNegativePatternsAsPositive(patterns, ignore) {
    const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
    const positive = negative.map(utils.pattern.convertToPositivePattern);
    return positive;
}
exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
function groupPatternsByBaseDirectory(patterns) {
    const group = {};
    return patterns.reduce((collection, pattern)=>{
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
            collection[base].push(pattern);
        } else {
            collection[base] = [
                pattern
            ];
        }
        return collection;
    }, group);
}
exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
function convertPatternGroupsToTasks(positive, negative, dynamic) {
    return Object.keys(positive).map((base)=>{
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
    });
}
exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
function convertPatternGroupToTask(base, positive, negative, dynamic) {
    return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
    };
}
exports.convertPatternGroupToTask = convertPatternGroupToTask;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/reader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
class Reader {
    constructor(_settings){
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
    }
    _getFullEntryPath(filepath) {
        return path.resolve(this._settings.cwd, filepath);
    }
    _makeEntry(stats, pattern) {
        const entry = {
            name: pattern,
            path: pattern,
            dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
            entry.stats = stats;
        }
        return entry;
    }
    _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
    }
}
exports.default = Reader;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/stream.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const fsWalk = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js [app-client] (ecmascript)");
const reader_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/reader.js [app-client] (ecmascript)");
class ReaderStream extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
    }
    dynamic(root, options) {
        return this._walkStream(root, options);
    }
    static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({
            objectMode: true
        });
        stream._write = (index, _enc, done)=>{
            return this._getEntry(filepaths[index], patterns[index], options).then((entry)=>{
                if (entry !== null && options.entryFilter(entry)) {
                    stream.push(entry);
                }
                if (index === filepaths.length - 1) {
                    stream.end();
                }
                done();
            }).catch(done);
        };
        for(let i = 0; i < filepaths.length; i++){
            stream.write(i);
        }
        return stream;
    }
    _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats)=>this._makeEntry(stats, pattern)).catch((error)=>{
            if (options.errorFilter(error)) {
                return null;
            }
            throw error;
        });
    }
    _getStat(filepath) {
        return new Promise((resolve, reject)=>{
            this._stat(filepath, this._fsStatSettings, (error, stats)=>{
                return error === null ? resolve(stats) : reject(error);
            });
        });
    }
}
exports.default = ReaderStream;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const fsWalk = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js [app-client] (ecmascript)");
const reader_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/reader.js [app-client] (ecmascript)");
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/stream.js [app-client] (ecmascript)");
class ReaderAsync extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
    }
    dynamic(root, options) {
        return new Promise((resolve, reject)=>{
            this._walkAsync(root, options, (error, entries)=>{
                if (error === null) {
                    resolve(entries);
                } else {
                    reject(error);
                }
            });
        });
    }
    async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        // After #235, replace it with an asynchronous iterator.
        return new Promise((resolve, reject)=>{
            stream.once('error', reject);
            stream.on('data', (entry)=>entries.push(entry));
            stream.once('end', ()=>resolve(entries));
        });
    }
}
exports.default = ReaderAsync;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/matcher.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
class Matcher {
    constructor(_patterns, _settings, _micromatchOptions){
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
    }
    _fillStorage() {
        for (const pattern of this._patterns){
            const segments = this._getPatternSegments(pattern);
            const sections = this._splitSegmentsIntoSections(segments);
            this._storage.push({
                complete: sections.length <= 1,
                pattern,
                segments,
                sections
            });
        }
    }
    _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part)=>{
            const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
            if (!dynamic) {
                return {
                    dynamic: false,
                    pattern: part
                };
            }
            return {
                dynamic: true,
                pattern: part,
                patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
            };
        });
    }
    _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment)=>segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
    }
}
exports.default = Matcher;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/partial.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const matcher_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/matcher.js [app-client] (ecmascript)");
class PartialMatcher extends matcher_1.default {
    match(filepath) {
        const parts = filepath.split('/');
        const levels = parts.length;
        const patterns = this._storage.filter((info)=>!info.complete || info.segments.length > levels);
        for (const pattern of patterns){
            const section = pattern.sections[0];
            /**
             * In this case, the pattern has a globstar and we must read all directories unconditionally,
             * but only if the level has reached the end of the first group.
             *
             * fixtures/{a,b}/**
             *  ^ true/false  ^ always true
            */ if (!pattern.complete && levels > section.length) {
                return true;
            }
            const match = parts.every((part, index)=>{
                const segment = pattern.segments[index];
                if (segment.dynamic && segment.patternRe.test(part)) {
                    return true;
                }
                if (!segment.dynamic && segment.pattern === part) {
                    return true;
                }
                return false;
            });
            if (match) {
                return true;
            }
        }
        return false;
    }
}
exports.default = PartialMatcher;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/deep.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
const partial_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/matchers/partial.js [app-client] (ecmascript)");
class DeepFilter {
    constructor(_settings, _micromatchOptions){
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
    }
    getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry)=>this._filter(basePath, entry, matcher, negativeRe);
    }
    _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
    }
    _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
    }
    _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
            return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
            return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
            return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
    }
    _isSkippedByDeep(basePath, entryPath) {
        /**
         * Avoid unnecessary depth calculations when it doesn't matter.
         */ if (this._settings.deep === Infinity) {
            return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
    }
    _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split('/').length;
        if (basePath === '') {
            return entryPathDepth;
        }
        const basePathDepth = basePath.split('/').length;
        return entryPathDepth - basePathDepth;
    }
    _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
    }
    _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
    }
    _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
    }
}
exports.default = DeepFilter;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/entry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
class EntryFilter {
    constructor(_settings, _micromatchOptions){
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = new Map();
    }
    getFilter(positive, negative) {
        const [absoluteNegative, relativeNegative] = utils.pattern.partitionAbsoluteAndRelative(negative);
        const patterns = {
            positive: {
                all: utils.pattern.convertPatternsToRe(positive, this._micromatchOptions)
            },
            negative: {
                absolute: utils.pattern.convertPatternsToRe(absoluteNegative, Object.assign(Object.assign({}, this._micromatchOptions), {
                    dot: true
                })),
                relative: utils.pattern.convertPatternsToRe(relativeNegative, Object.assign(Object.assign({}, this._micromatchOptions), {
                    dot: true
                }))
            }
        };
        return (entry)=>this._filter(entry, patterns);
    }
    _filter(entry, patterns) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
            return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
            return false;
        }
        const isMatched = this._isMatchToPatternsSet(filepath, patterns, entry.dirent.isDirectory());
        if (this._settings.unique && isMatched) {
            this._createIndexRecord(filepath);
        }
        return isMatched;
    }
    _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
    }
    _createIndexRecord(filepath) {
        this.index.set(filepath, undefined);
    }
    _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
    }
    _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
    }
    _isMatchToPatternsSet(filepath, patterns, isDirectory) {
        const isMatched = this._isMatchToPatterns(filepath, patterns.positive.all, isDirectory);
        if (!isMatched) {
            return false;
        }
        const isMatchedByRelativeNegative = this._isMatchToPatterns(filepath, patterns.negative.relative, isDirectory);
        if (isMatchedByRelativeNegative) {
            return false;
        }
        const isMatchedByAbsoluteNegative = this._isMatchToAbsoluteNegative(filepath, patterns.negative.absolute, isDirectory);
        if (isMatchedByAbsoluteNegative) {
            return false;
        }
        return true;
    }
    _isMatchToAbsoluteNegative(filepath, patternsRe, isDirectory) {
        if (patternsRe.length === 0) {
            return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, filepath);
        return this._isMatchToPatterns(fullpath, patternsRe, isDirectory);
    }
    _isMatchToPatterns(filepath, patternsRe, isDirectory) {
        if (patternsRe.length === 0) {
            return false;
        }
        // Trying to match files and directories by patterns.
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        // A pattern with a trailling slash can be used for directory matching.
        // To apply such pattern, we need to add a tralling slash to the path.
        if (!isMatched && isDirectory) {
            return utils.pattern.matchAny(filepath + '/', patternsRe);
        }
        return isMatched;
    }
}
exports.default = EntryFilter;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
class ErrorFilter {
    constructor(_settings){
        this._settings = _settings;
    }
    getFilter() {
        return (error)=>this._isNonFatalError(error);
    }
    _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
    }
}
exports.default = ErrorFilter;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/transformers/entry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
class EntryTransformer {
    constructor(_settings){
        this._settings = _settings;
    }
    getTransformer() {
        return (entry)=>this._transform(entry);
    }
    _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
            filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
            filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
            filepath += '/';
        }
        if (!this._settings.objectMode) {
            return filepath;
        }
        return Object.assign(Object.assign({}, entry), {
            path: filepath
        });
    }
}
exports.default = EntryTransformer;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/provider.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const deep_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/deep.js [app-client] (ecmascript)");
const entry_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/entry.js [app-client] (ecmascript)");
const error_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/filters/error.js [app-client] (ecmascript)");
const entry_2 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/transformers/entry.js [app-client] (ecmascript)");
class Provider {
    constructor(_settings){
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
    }
    _getRootDirectory(task) {
        return path.resolve(this._settings.cwd, task.base);
    }
    _getReaderOptions(task) {
        const basePath = task.base === '.' ? '' : task.base;
        return {
            basePath,
            pathSegmentSeparator: '/',
            concurrency: this._settings.concurrency,
            deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
            entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
            errorFilter: this.errorFilter.getFilter(),
            followSymbolicLinks: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            stats: this._settings.stats,
            throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
            transform: this.entryTransformer.getTransformer()
        };
    }
    _getMicromatchOptions() {
        return {
            dot: this._settings.dot,
            matchBase: this._settings.baseNameMatch,
            nobrace: !this._settings.braceExpansion,
            nocase: !this._settings.caseSensitiveMatch,
            noext: !this._settings.extglob,
            noglobstar: !this._settings.globstar,
            posix: true,
            strictSlashes: false
        };
    }
}
exports.default = Provider;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const async_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/async.js [app-client] (ecmascript)");
const provider_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/provider.js [app-client] (ecmascript)");
class ProviderAsync extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new async_1.default(this._settings);
    }
    async read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root, task, options);
        return entries.map((entry)=>options.transform(entry));
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports.default = ProviderAsync;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/stream.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const stream_2 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/stream.js [app-client] (ecmascript)");
const provider_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/provider.js [app-client] (ecmascript)");
class ProviderStream extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
    }
    read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({
            objectMode: true,
            read: ()=>{}
        });
        source.once('error', (error)=>destination.emit('error', error)).on('data', (entry)=>destination.emit('data', options.transform(entry))).once('end', ()=>destination.emit('end'));
        destination.once('close', ()=>source.destroy());
        return destination;
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports.default = ProviderStream;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const fsWalk = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js [app-client] (ecmascript)");
const reader_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/reader.js [app-client] (ecmascript)");
class ReaderSync extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
    }
    dynamic(root, options) {
        return this._walkSync(root, options);
    }
    static(patterns, options) {
        const entries = [];
        for (const pattern of patterns){
            const filepath = this._getFullEntryPath(pattern);
            const entry = this._getEntry(filepath, pattern, options);
            if (entry === null || !options.entryFilter(entry)) {
                continue;
            }
            entries.push(entry);
        }
        return entries;
    }
    _getEntry(filepath, pattern, options) {
        try {
            const stats = this._getStat(filepath);
            return this._makeEntry(stats, pattern);
        } catch (error) {
            if (options.errorFilter(error)) {
                return null;
            }
            throw error;
        }
    }
    _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
    }
}
exports.default = ReaderSync;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const sync_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/readers/sync.js [app-client] (ecmascript)");
const provider_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/provider.js [app-client] (ecmascript)");
class ProviderSync extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
    }
    read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports.default = ProviderSync;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/settings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const os = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)");
/**
 * The `os.cpus` method can return zero. We expect the number of cores to be greater than zero.
 * https://github.com/nodejs/node/blob/7faeddf23a98c53896f8b574a6e66589e8fb1eb8/lib/os.js#L106-L107
 */ const CPU_COUNT = Math.max(os.cpus().length, 1);
exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    lstatSync: fs.lstatSync,
    stat: fs.stat,
    statSync: fs.statSync,
    readdir: fs.readdir,
    readdirSync: fs.readdirSync
};
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
            this.onlyFiles = false;
        }
        if (this.stats) {
            this.objectMode = true;
        }
        // Remove the cast to the array in the next major (#404).
        this.ignore = [].concat(this.ignore);
    }
    _getValue(option, value) {
        return option === undefined ? value : option;
    }
    _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
    }
}
exports.default = Settings;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const taskManager = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/managers/tasks.js [app-client] (ecmascript)");
const async_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/async.js [app-client] (ecmascript)");
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/stream.js [app-client] (ecmascript)");
const sync_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/providers/sync.js [app-client] (ecmascript)");
const settings_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/settings.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/utils/index.js [app-client] (ecmascript)");
async function FastGlob(source, options) {
    assertPatternsInput(source);
    const works = getWorks(source, async_1.default, options);
    const result = await Promise.all(works);
    return utils.array.flatten(result);
}
// https://github.com/typescript-eslint/typescript-eslint/issues/60
// eslint-disable-next-line no-redeclare
(function(FastGlob) {
    FastGlob.glob = FastGlob;
    FastGlob.globSync = sync;
    FastGlob.globStream = stream;
    FastGlob.async = FastGlob;
    function sync(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
    }
    FastGlob.sync = sync;
    function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        /**
         * The stream returned by the provider cannot work with an asynchronous iterator.
         * To support asynchronous iterators, regardless of the number of tasks, we always multiplex streams.
         * This affects performance (+25%). I don't see best solution right now.
         */ return utils.stream.merge(works);
    }
    FastGlob.stream = stream;
    function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
    }
    FastGlob.generateTasks = generateTasks;
    function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
    }
    FastGlob.isDynamicPattern = isDynamicPattern;
    function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
    }
    FastGlob.escapePath = escapePath;
    function convertPathToPattern(source) {
        assertPatternsInput(source);
        return utils.path.convertPathToPattern(source);
    }
    FastGlob.convertPathToPattern = convertPathToPattern;
    let posix;
    (function(posix) {
        function escapePath(source) {
            assertPatternsInput(source);
            return utils.path.escapePosixPath(source);
        }
        posix.escapePath = escapePath;
        function convertPathToPattern(source) {
            assertPatternsInput(source);
            return utils.path.convertPosixPathToPattern(source);
        }
        posix.convertPathToPattern = convertPathToPattern;
    })(posix = FastGlob.posix || (FastGlob.posix = {}));
    let win32;
    (function(win32) {
        function escapePath(source) {
            assertPatternsInput(source);
            return utils.path.escapeWindowsPath(source);
        }
        win32.escapePath = escapePath;
        function convertPathToPattern(source) {
            assertPatternsInput(source);
            return utils.path.convertWindowsPathToPattern(source);
        }
        win32.convertPathToPattern = convertPathToPattern;
    })(win32 = FastGlob.win32 || (FastGlob.win32 = {}));
})(FastGlob || (FastGlob = {}));
function getWorks(source, _Provider, options) {
    const patterns = [].concat(source);
    const settings = new settings_1.default(options);
    const tasks = taskManager.generate(patterns, settings);
    const provider = new _Provider(settings);
    return tasks.map(provider.read, provider);
}
function assertPatternsInput(input) {
    const source = [].concat(input);
    const isValidSource = source.every((item)=>utils.string.isString(item) && !utils.string.isEmpty(item));
    if (!isValidSource) {
        throw new TypeError('Patterns must be a string (non empty) or an array of strings');
    }
}
module.exports = FastGlob;
}),
"[project]/altoque-pwa/node_modules/.pnpm/glob-parent@5.1.2/node_modules/glob-parent/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isGlob = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js [app-client] (ecmascript)");
var pathPosixDirname = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)").posix.dirname;
var isWin32 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)").platform() === 'win32';
var slash = '/';
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 * @returns {string}
 */ module.exports = function globParent(str, opts) {
    var options = Object.assign({
        flipBackslashes: true
    }, opts);
    // flip windows path separators
    if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
    }
    // special case for strings ending in enclosure containing path separator
    if (enclosure.test(str)) {
        str += slash;
    }
    // preserves full path in case of trailing path separator
    str += 'a';
    // remove path parts that are globby
    do {
        str = pathPosixDirname(str);
    }while (isGlob(str) || globby.test(str))
    // remove escape chars and return result
    return str.replace(escaped, '$1');
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/glob-parent@6.0.2/node_modules/glob-parent/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var isGlob = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/is-glob@4.0.3/node_modules/is-glob/index.js [app-client] (ecmascript)");
var pathPosixDirname = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)").posix.dirname;
var isWin32 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)").platform() === 'win32';
var slash = '/';
var backslash = /\\/g;
var escaped = /\\([!*?|[\](){}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 */ module.exports = function globParent(str, opts) {
    var options = Object.assign({
        flipBackslashes: true
    }, opts);
    // flip windows path separators
    if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
    }
    // special case for strings ending in enclosure containing path separator
    if (isEnclosure(str)) {
        str += slash;
    }
    // preserves full path in case of trailing path separator
    str += 'a';
    // remove path parts that are globby
    do {
        str = pathPosixDirname(str);
    }while (isGlobby(str))
    // remove escape chars and return result
    return str.replace(escaped, '$1');
};
function isEnclosure(str) {
    var lastChar = str.slice(-1);
    var enclosureStart;
    switch(lastChar){
        case '}':
            enclosureStart = '{';
            break;
        case ']':
            enclosureStart = '[';
            break;
        default:
            return false;
    }
    var foundIndex = str.indexOf(enclosureStart);
    if (foundIndex < 0) {
        return false;
    }
    return str.slice(foundIndex + 1, -1).includes(slash);
}
function isGlobby(str) {
    if (/\([^()]+$/.test(str)) {
        return true;
    }
    if (str[0] === '{' || str[0] === '[') {
        return true;
    }
    if (/[^\\][{[]/.test(str)) {
        return true;
    }
    return isGlob(str);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.isInteger = (num)=>{
    if (typeof num === 'number') {
        return Number.isInteger(num);
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isInteger(Number(num));
    }
    return false;
};
/**
 * Find a node of the given type
 */ exports.find = (node, type)=>node.nodes.find((node)=>node.type === type);
/**
 * Find a node of the given type
 */ exports.exceedsLimit = (min, max, step = 1, limit)=>{
    if (limit === false) return false;
    if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
    return (Number(max) - Number(min)) / Number(step) >= limit;
};
/**
 * Escape the given node with '\\' before node.value
 */ exports.escapeNode = (block, n = 0, type)=>{
    const node = block.nodes[n];
    if (!node) return;
    if (type && node.type === type || node.type === 'open' || node.type === 'close') {
        if (node.escaped !== true) {
            node.value = '\\' + node.value;
            node.escaped = true;
        }
    }
};
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */ exports.encloseBrace = (node)=>{
    if (node.type !== 'brace') return false;
    if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a brace node is invalid.
 */ exports.isInvalidBrace = (block)=>{
    if (block.type !== 'brace') return false;
    if (block.invalid === true || block.dollar) return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
    }
    if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a node is an open or close node
 */ exports.isOpenOrClose = (node)=>{
    if (node.type === 'open' || node.type === 'close') {
        return true;
    }
    return node.open === true || node.close === true;
};
/**
 * Reduce an array of text nodes.
 */ exports.reduce = (nodes)=>nodes.reduce((acc, node)=>{
        if (node.type === 'text') acc.push(node.value);
        if (node.type === 'range') node.type = 'text';
        return acc;
    }, []);
/**
 * Flatten an array
 */ exports.flatten = (...args)=>{
    const result = [];
    const flat = (arr)=>{
        for(let i = 0; i < arr.length; i++){
            const ele = arr[i];
            if (Array.isArray(ele)) {
                flat(ele);
                continue;
            }
            if (ele !== undefined) {
                result.push(ele);
            }
        }
        return result;
    };
    flat(args);
    return result;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/stringify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/utils.js [app-client] (ecmascript)");
module.exports = (ast, options = {})=>{
    const stringify = (node, parent = {})=>{
        const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = '';
        if (node.value) {
            if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
                return '\\' + node.value;
            }
            return node.value;
        }
        if (node.value) {
            return node.value;
        }
        if (node.nodes) {
            for (const child of node.nodes){
                output += stringify(child);
            }
        }
        return output;
    };
    return stringify(ast);
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/compile.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fill = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fill-range@7.1.1/node_modules/fill-range/index.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/utils.js [app-client] (ecmascript)");
const compile = (ast, options = {})=>{
    const walk = (node, parent = {})=>{
        const invalidBlock = utils.isInvalidBrace(parent);
        const invalidNode = node.invalid === true && options.escapeInvalid === true;
        const invalid = invalidBlock === true || invalidNode === true;
        const prefix = options.escapeInvalid === true ? '\\' : '';
        let output = '';
        if (node.isOpen === true) {
            return prefix + node.value;
        }
        if (node.isClose === true) {
            console.log('node.isClose', prefix, node.value);
            return prefix + node.value;
        }
        if (node.type === 'open') {
            return invalid ? prefix + node.value : '(';
        }
        if (node.type === 'close') {
            return invalid ? prefix + node.value : ')';
        }
        if (node.type === 'comma') {
            return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
        }
        if (node.value) {
            return node.value;
        }
        if (node.nodes && node.ranges > 0) {
            const args = utils.reduce(node.nodes);
            const range = fill(...args, {
                ...options,
                wrap: false,
                toRegex: true,
                strictZeros: true
            });
            if (range.length !== 0) {
                return args.length > 1 && range.length > 1 ? `(${range})` : range;
            }
        }
        if (node.nodes) {
            for (const child of node.nodes){
                output += walk(child, node);
            }
        }
        return output;
    };
    return walk(ast);
};
module.exports = compile;
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/expand.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fill = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fill-range@7.1.1/node_modules/fill-range/index.js [app-client] (ecmascript)");
const stringify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/stringify.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/utils.js [app-client] (ecmascript)");
const append = (queue = '', stash = '', enclose = false)=>{
    const result = [];
    queue = [].concat(queue);
    stash = [].concat(stash);
    if (!stash.length) return queue;
    if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele)=>`{${ele}}`) : stash;
    }
    for (const item of queue){
        if (Array.isArray(item)) {
            for (const value of item){
                result.push(append(value, stash, enclose));
            }
        } else {
            for (let ele of stash){
                if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
                result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
            }
        }
    }
    return utils.flatten(result);
};
const expand = (ast, options = {})=>{
    const rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;
    const walk = (node, parent = {})=>{
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while(p.type !== 'brace' && p.type !== 'root' && p.parent){
            p = p.parent;
            q = p.queue;
        }
        if (node.invalid || node.dollar) {
            q.push(append(q.pop(), stringify(node, options)));
            return;
        }
        if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
            q.push(append(q.pop(), [
                '{}'
            ]));
            return;
        }
        if (node.nodes && node.ranges > 0) {
            const args = utils.reduce(node.nodes);
            if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
                throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
            }
            let range = fill(...args, options);
            if (range.length === 0) {
                range = stringify(node, options);
            }
            q.push(append(q.pop(), range));
            node.nodes = [];
            return;
        }
        const enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while(block.type !== 'brace' && block.type !== 'root' && block.parent){
            block = block.parent;
            queue = block.queue;
        }
        for(let i = 0; i < node.nodes.length; i++){
            const child = node.nodes[i];
            if (child.type === 'comma' && node.type === 'brace') {
                if (i === 1) queue.push('');
                queue.push('');
                continue;
            }
            if (child.type === 'close') {
                q.push(append(q.pop(), queue, enclose));
                continue;
            }
            if (child.value && child.type !== 'open') {
                queue.push(append(queue.pop(), child.value));
                continue;
            }
            if (child.nodes) {
                walk(child, node);
            }
        }
        return queue;
    };
    return utils.flatten(walk(ast));
};
module.exports = expand;
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    MAX_LENGTH: 10000,
    // Digits
    CHAR_0: '0',
    /* 0 */ CHAR_9: '9',
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 'A',
    /* A */ CHAR_LOWERCASE_A: 'a',
    /* a */ CHAR_UPPERCASE_Z: 'Z',
    /* Z */ CHAR_LOWERCASE_Z: 'z',
    /* z */ CHAR_LEFT_PARENTHESES: '(',
    /* ( */ CHAR_RIGHT_PARENTHESES: ')',
    /* ) */ CHAR_ASTERISK: '*',
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: '&',
    /* & */ CHAR_AT: '@',
    /* @ */ CHAR_BACKSLASH: '\\',
    /* \ */ CHAR_BACKTICK: '`',
    /* ` */ CHAR_CARRIAGE_RETURN: '\r',
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: '^',
    /* ^ */ CHAR_COLON: ':',
    /* : */ CHAR_COMMA: ',',
    /* , */ CHAR_DOLLAR: '$',
    /* . */ CHAR_DOT: '.',
    /* . */ CHAR_DOUBLE_QUOTE: '"',
    /* " */ CHAR_EQUAL: '=',
    /* = */ CHAR_EXCLAMATION_MARK: '!',
    /* ! */ CHAR_FORM_FEED: '\f',
    /* \f */ CHAR_FORWARD_SLASH: '/',
    /* / */ CHAR_HASH: '#',
    /* # */ CHAR_HYPHEN_MINUS: '-',
    /* - */ CHAR_LEFT_ANGLE_BRACKET: '<',
    /* < */ CHAR_LEFT_CURLY_BRACE: '{',
    /* { */ CHAR_LEFT_SQUARE_BRACKET: '[',
    /* [ */ CHAR_LINE_FEED: '\n',
    /* \n */ CHAR_NO_BREAK_SPACE: '\u00A0',
    /* \u00A0 */ CHAR_PERCENT: '%',
    /* % */ CHAR_PLUS: '+',
    /* + */ CHAR_QUESTION_MARK: '?',
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: '>',
    /* > */ CHAR_RIGHT_CURLY_BRACE: '}',
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: ']',
    /* ] */ CHAR_SEMICOLON: ';',
    /* ; */ CHAR_SINGLE_QUOTE: '\'',
    /* ' */ CHAR_SPACE: ' ',
    /*   */ CHAR_TAB: '\t',
    /* \t */ CHAR_UNDERSCORE: '_',
    /* _ */ CHAR_VERTICAL_LINE: '|',
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF' /* \uFEFF */ 
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const stringify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/stringify.js [app-client] (ecmascript)");
/**
 * Constants
 */ const { MAX_LENGTH, CHAR_BACKSLASH, /* \ */ CHAR_BACKTICK, /* ` */ CHAR_COMMA, /* , */ CHAR_DOT, /* . */ CHAR_LEFT_PARENTHESES, /* ( */ CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_RIGHT_SQUARE_BRACKET, /* ] */ CHAR_DOUBLE_QUOTE, /* " */ CHAR_SINGLE_QUOTE, /* ' */ CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_NOBREAK_SPACE } = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/constants.js [app-client] (ecmascript)");
/**
 * parse
 */ const parse = (input, options = {})=>{
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    const opts = options || {};
    const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
    }
    const ast = {
        type: 'root',
        input,
        nodes: []
    };
    const stack = [
        ast
    ];
    let block = ast;
    let prev = ast;
    let brackets = 0;
    const length = input.length;
    let index = 0;
    let depth = 0;
    let value;
    /**
   * Helpers
   */ const advance = ()=>input[index++];
    const push = (node)=>{
        if (node.type === 'text' && prev.type === 'dot') {
            prev.type = 'text';
        }
        if (prev && prev.type === 'text' && node.type === 'text') {
            prev.value += node.value;
            return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
    };
    push({
        type: 'bos'
    });
    while(index < length){
        block = stack[stack.length - 1];
        value = advance();
        /**
     * Invalid chars
     */ if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
            continue;
        }
        /**
     * Escaped chars
     */ if (value === CHAR_BACKSLASH) {
            push({
                type: 'text',
                value: (options.keepEscaping ? value : '') + advance()
            });
            continue;
        }
        /**
     * Right square bracket (literal): ']'
     */ if (value === CHAR_RIGHT_SQUARE_BRACKET) {
            push({
                type: 'text',
                value: '\\' + value
            });
            continue;
        }
        /**
     * Left square bracket: '['
     */ if (value === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let next;
            while(index < length && (next = advance())){
                value += next;
                if (next === CHAR_LEFT_SQUARE_BRACKET) {
                    brackets++;
                    continue;
                }
                if (next === CHAR_BACKSLASH) {
                    value += advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    brackets--;
                    if (brackets === 0) {
                        break;
                    }
                }
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value === CHAR_LEFT_PARENTHESES) {
            block = push({
                type: 'paren',
                nodes: []
            });
            stack.push(block);
            push({
                type: 'text',
                value
            });
            continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
            if (block.type !== 'paren') {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            block = stack.pop();
            push({
                type: 'text',
                value
            });
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Quotes: '|"|`
     */ if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
            const open = value;
            let next;
            if (options.keepQuotes !== true) {
                value = '';
            }
            while(index < length && (next = advance())){
                if (next === CHAR_BACKSLASH) {
                    value += next + advance();
                    continue;
                }
                if (next === open) {
                    if (options.keepQuotes === true) value += next;
                    break;
                }
                value += next;
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Left curly brace: '{'
     */ if (value === CHAR_LEFT_CURLY_BRACE) {
            depth++;
            const dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
            const brace = {
                type: 'brace',
                open: true,
                close: false,
                dollar,
                depth,
                commas: 0,
                ranges: 0,
                nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({
                type: 'open',
                value
            });
            continue;
        }
        /**
     * Right curly brace: '}'
     */ if (value === CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== 'brace') {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            const type = 'close';
            block = stack.pop();
            block.close = true;
            push({
                type,
                value
            });
            depth--;
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Comma: ','
     */ if (value === CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
                block.ranges = 0;
                const open = block.nodes.shift();
                block.nodes = [
                    open,
                    {
                        type: 'text',
                        value: stringify(block)
                    }
                ];
            }
            push({
                type: 'comma',
                value
            });
            block.commas++;
            continue;
        }
        /**
     * Dot: '.'
     */ if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
            const siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            if (prev.type === 'dot') {
                block.range = [];
                prev.value += value;
                prev.type = 'range';
                if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                    block.invalid = true;
                    block.ranges = 0;
                    prev.type = 'text';
                    continue;
                }
                block.ranges++;
                block.args = [];
                continue;
            }
            if (prev.type === 'range') {
                siblings.pop();
                const before = siblings[siblings.length - 1];
                before.value += prev.value + value;
                prev = before;
                block.ranges--;
                continue;
            }
            push({
                type: 'dot',
                value
            });
            continue;
        }
        /**
     * Text
     */ push({
            type: 'text',
            value
        });
    }
    // Mark imbalanced braces and brackets as invalid
    do {
        block = stack.pop();
        if (block.type !== 'root') {
            block.nodes.forEach((node)=>{
                if (!node.nodes) {
                    if (node.type === 'open') node.isOpen = true;
                    if (node.type === 'close') node.isClose = true;
                    if (!node.nodes) node.type = 'text';
                    node.invalid = true;
                }
            });
            // get the location of the block on parent.nodes (block's siblings)
            const parent = stack[stack.length - 1];
            const index = parent.nodes.indexOf(block);
            // replace the (invalid) block with it's nodes
            parent.nodes.splice(index, 1, ...block.nodes);
        }
    }while (stack.length > 0)
    push({
        type: 'eos'
    });
    return ast;
};
module.exports = parse;
}),
"[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const stringify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/stringify.js [app-client] (ecmascript)");
const compile = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/compile.js [app-client] (ecmascript)");
const expand = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/expand.js [app-client] (ecmascript)");
const parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/lib/parse.js [app-client] (ecmascript)");
/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */ const braces = (input, options = {})=>{
    let output = [];
    if (Array.isArray(input)) {
        for (const pattern of input){
            const result = braces.create(pattern, options);
            if (Array.isArray(result)) {
                output.push(...result);
            } else {
                output.push(result);
            }
        }
    } else {
        output = [].concat(braces.create(input, options));
    }
    if (options && options.expand === true && options.nodupes === true) {
        output = [
            ...new Set(output)
        ];
    }
    return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */ braces.parse = (input, options = {})=>parse(input, options);
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.stringify = (input, options = {})=>{
    if (typeof input === 'string') {
        return stringify(braces.parse(input, options), options);
    }
    return stringify(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.compile = (input, options = {})=>{
    if (typeof input === 'string') {
        input = braces.parse(input, options);
    }
    return compile(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.expand = (input, options = {})=>{
    if (typeof input === 'string') {
        input = braces.parse(input, options);
    }
    let result = expand(input, options);
    // filter out empty strings if specified
    if (options.noempty === true) {
        result = result.filter(Boolean);
    }
    // filter out duplicates if specified
    if (options.nodupes === true) {
        result = [
            ...new Set(result)
        ];
    }
    return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.create = (input, options = {})=>{
    if (input === '' || input.length < 3) {
        return [
            input
        ];
    }
    return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
};
/**
 * Expose "braces"
 */ module.exports = braces;
}),
"[project]/altoque-pwa/node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */ module.exports = function(num) {
    if (typeof num === 'number') {
        return num - num === 0;
    }
    if (typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */ const isNumber = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/is-number@7.0.0/node_modules/is-number/index.js [app-client] (ecmascript)");
const toRegexRange = (min, max, options)=>{
    if (isNumber(min) === false) {
        throw new TypeError('toRegexRange: expected the first argument to be a number');
    }
    if (max === void 0 || min === max) {
        return String(min);
    }
    if (isNumber(max) === false) {
        throw new TypeError('toRegexRange: expected the second argument to be a number.');
    }
    let opts = {
        relaxZeros: true,
        ...options
    };
    if (typeof opts.strictZeros === 'boolean') {
        opts.relaxZeros = opts.strictZeros === false;
    }
    let relax = String(opts.relaxZeros);
    let shorthand = String(opts.shorthand);
    let capture = String(opts.capture);
    let wrap = String(opts.wrap);
    let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;
    if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
    }
    let a = Math.min(min, max);
    let b = Math.max(min, max);
    if (Math.abs(a - b) === 1) {
        let result = min + '|' + max;
        if (opts.capture) {
            return `(${result})`;
        }
        if (opts.wrap === false) {
            return result;
        }
        return `(?:${result})`;
    }
    let isPadded = hasPadding(min) || hasPadding(max);
    let state = {
        min,
        max,
        a,
        b
    };
    let positives = [];
    let negatives = [];
    if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
    }
    if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
    }
    if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
    }
    state.negatives = negatives;
    state.positives = positives;
    state.result = collatePatterns(negatives, positives, opts);
    if (opts.capture === true) {
        state.result = `(${state.result})`;
    } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
    }
    toRegexRange.cache[cacheKey] = state;
    return state.result;
};
function collatePatterns(neg, pos, options) {
    let onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
    let onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
    let intersected = filterPatterns(neg, pos, '-?', true, options) || [];
    let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
    return subpatterns.join('|');
}
function splitToRanges(min, max) {
    let nines = 1;
    let zeros = 1;
    let stop = countNines(min, nines);
    let stops = new Set([
        max
    ]);
    while(min <= stop && stop <= max){
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
    }
    stop = countZeros(max + 1, zeros) - 1;
    while(min < stop && stop <= max){
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
    }
    stops = [
        ...stops
    ];
    stops.sort(compare);
    return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */ function rangeToPattern(start, stop, options) {
    if (start === stop) {
        return {
            pattern: start,
            count: [],
            digits: 0
        };
    }
    let zipped = zip(start, stop);
    let digits = zipped.length;
    let pattern = '';
    let count = 0;
    for(let i = 0; i < digits; i++){
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
            pattern += startDigit;
        } else if (startDigit !== '0' || stopDigit !== '9') {
            pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
            count++;
        }
    }
    if (count) {
        pattern += options.shorthand === true ? '\\d' : '[0-9]';
    }
    return {
        pattern,
        count: [
            count
        ],
        digits
    };
}
function splitToPatterns(min, max, tok, options) {
    let ranges = splitToRanges(min, max);
    let tokens = [];
    let start = min;
    let prev;
    for(let i = 0; i < ranges.length; i++){
        let max = ranges[i];
        let obj = rangeToPattern(String(start), String(max), options);
        let zeros = '';
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) {
                prev.count.pop();
            }
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + toQuantifier(prev.count);
            start = max + 1;
            continue;
        }
        if (tok.isPadded) {
            zeros = padZeros(max, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max + 1;
        prev = obj;
    }
    return tokens;
}
function filterPatterns(arr, comparison, prefix, intersection, options) {
    let result = [];
    for (let ele of arr){
        let { string } = ele;
        // only push if _both_ are negative...
        if (!intersection && !contains(comparison, 'string', string)) {
            result.push(prefix + string);
        }
        // or _both_ are positive
        if (intersection && contains(comparison, 'string', string)) {
            result.push(prefix + string);
        }
    }
    return result;
}
/**
 * Zip strings
 */ function zip(a, b) {
    let arr = [];
    for(let i = 0; i < a.length; i++)arr.push([
        a[i],
        b[i]
    ]);
    return arr;
}
function compare(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}
function contains(arr, key, val) {
    return arr.some((ele)=>ele[key] === val);
}
function countNines(min, len) {
    return Number(String(min).slice(0, -len) + '9'.repeat(len));
}
function countZeros(integer, zeros) {
    return integer - integer % Math.pow(10, zeros);
}
function toQuantifier(digits) {
    let [start = 0, stop = ''] = digits;
    if (stop || start > 1) {
        return `{${start + (stop ? ',' + stop : '')}}`;
    }
    return '';
}
function toCharacterClass(a, b, options) {
    return `[${a}${b - a === 1 ? '' : '-'}${b}]`;
}
function hasPadding(str) {
    return /^-?(0+)\d/.test(str);
}
function padZeros(value, tok, options) {
    if (!tok.isPadded) {
        return value;
    }
    let diff = Math.abs(tok.maxLen - String(value).length);
    let relax = options.relaxZeros !== false;
    switch(diff){
        case 0:
            return '';
        case 1:
            return relax ? '0?' : '0';
        case 2:
            return relax ? '0{0,2}' : '00';
        default:
            {
                return relax ? `0{0,${diff}}` : `0{${diff}}`;
            }
    }
}
/**
 * Cache
 */ toRegexRange.cache = {};
toRegexRange.clearCache = ()=>toRegexRange.cache = {};
/**
 * Expose `toRegexRange`
 */ module.exports = toRegexRange;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fill-range@7.1.1/node_modules/fill-range/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */ const util = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const toRegexRange = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/to-regex-range@5.0.1/node_modules/to-regex-range/index.js [app-client] (ecmascript)");
const isObject = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val);
const transform = (toNumber)=>{
    return (value)=>toNumber === true ? Number(value) : String(value);
};
const isValidValue = (value)=>{
    return typeof value === 'number' || typeof value === 'string' && value !== '';
};
const isNumber = (num)=>Number.isInteger(+num);
const zeros = (input)=>{
    let value = `${input}`;
    let index = -1;
    if (value[0] === '-') value = value.slice(1);
    if (value === '0') return false;
    while(value[++index] === '0');
    return index > 0;
};
const stringify = (start, end, options)=>{
    if (typeof start === 'string' || typeof end === 'string') {
        return true;
    }
    return options.stringify === true;
};
const pad = (input, maxLength, toNumber)=>{
    if (maxLength > 0) {
        let dash = input[0] === '-' ? '-' : '';
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
    }
    if (toNumber === false) {
        return String(input);
    }
    return input;
};
const toMaxLen = (input, maxLength)=>{
    let negative = input[0] === '-' ? '-' : '';
    if (negative) {
        input = input.slice(1);
        maxLength--;
    }
    while(input.length < maxLength)input = '0' + input;
    return negative ? '-' + input : input;
};
const toSequence = (parts, options, maxLen)=>{
    parts.negatives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    parts.positives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    let prefix = options.capture ? '' : '?:';
    let positives = '';
    let negatives = '';
    let result;
    if (parts.positives.length) {
        positives = parts.positives.map((v)=>toMaxLen(String(v), maxLen)).join('|');
    }
    if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.map((v)=>toMaxLen(String(v), maxLen)).join('|')})`;
    }
    if (positives && negatives) {
        result = `${positives}|${negatives}`;
    } else {
        result = positives || negatives;
    }
    if (options.wrap) {
        return `(${prefix}${result})`;
    }
    return result;
};
const toRange = (a, b, isNumbers, options)=>{
    if (isNumbers) {
        return toRegexRange(a, b, {
            wrap: false,
            ...options
        });
    }
    let start = String.fromCharCode(a);
    if (a === b) return start;
    let stop = String.fromCharCode(b);
    return `[${start}-${stop}]`;
};
const toRegex = (start, end, options)=>{
    if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? '' : '?:';
        return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
    }
    return toRegexRange(start, end, options);
};
const rangeError = (...args)=>{
    return new RangeError('Invalid range arguments: ' + util.inspect(...args));
};
const invalidRange = (start, end, options)=>{
    if (options.strictRanges === true) throw rangeError([
        start,
        end
    ]);
    return [];
};
const invalidStep = (step, options)=>{
    if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
    }
    return [];
};
const fillNumbers = (start, end, step = 1, options = {})=>{
    let a = Number(start);
    let b = Number(end);
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([
            start,
            end
        ]);
        return [];
    }
    // fix negative zero
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    let descending = a > b;
    let startString = String(start);
    let endString = String(end);
    let stepString = String(step);
    step = Math.max(Math.abs(step), 1);
    let padded = zeros(startString) || zeros(endString) || zeros(stepString);
    let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
    let toNumber = padded === false && stringify(start, end, options) === false;
    let format = options.transform || transform(toNumber);
    if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
    }
    let parts = {
        negatives: [],
        positives: []
    };
    let push = (num)=>parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        if (options.toRegex === true && step > 1) {
            push(a);
        } else {
            range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, {
            wrap: false,
            ...options
        });
    }
    return range;
};
const fillLetters = (start, end, step = 1, options = {})=>{
    if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
    }
    let format = options.transform || ((val)=>String.fromCharCode(val));
    let a = `${start}`.charCodeAt(0);
    let b = `${end}`.charCodeAt(0);
    let descending = a > b;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
    }
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) {
        return toRegex(range, null, {
            wrap: false,
            options
        });
    }
    return range;
};
const fill = (start, end, step, options = {})=>{
    if (end == null && isValidValue(start)) {
        return [
            start
        ];
    }
    if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
    }
    if (typeof step === 'function') {
        return fill(start, end, 1, {
            transform: step
        });
    }
    if (isObject(step)) {
        return fill(start, end, 0, step);
    }
    let opts = {
        ...options
    };
    if (opts.capture === true) opts.wrap = true;
    step = step || opts.step || 1;
    if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
    }
    if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
    }
    return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
module.exports = fill;
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const WIN_SLASH = '\\\\/';
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
/**
 * Posix glob regex
 */ const DOT_LITERAL = '\\.';
const PLUS_LITERAL = '\\+';
const QMARK_LITERAL = '\\?';
const SLASH_LITERAL = '\\/';
const ONE_CHAR = '(?=.)';
const QMARK = '[^/]';
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
};
/**
 * Windows glob regex
 */ const WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
/**
 * POSIX Bracket Regex
 */ const POSIX_REGEX_SOURCE = {
    alnum: 'a-zA-Z0-9',
    alpha: 'a-zA-Z',
    ascii: '\\x00-\\x7F',
    blank: ' \\t',
    cntrl: '\\x00-\\x1F\\x7F',
    digit: '0-9',
    graph: '\\x21-\\x7E',
    lower: 'a-z',
    print: '\\x20-\\x7E ',
    punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
    space: ' \\t\\r\\n\\v\\f',
    upper: 'A-Z',
    word: 'A-Za-z0-9_',
    xdigit: 'A-Fa-f0-9'
};
module.exports = {
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE,
    // regular expressions
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    // Replace globs with equivalent patterns to reduce parsing time.
    REPLACEMENTS: {
        '***': '*',
        '**/**': '**',
        '**/**/**': '**'
    },
    // Digits
    CHAR_0: 48,
    /* 0 */ CHAR_9: 57,
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 65,
    /* A */ CHAR_LOWERCASE_A: 97,
    /* a */ CHAR_UPPERCASE_Z: 90,
    /* Z */ CHAR_LOWERCASE_Z: 122,
    /* z */ CHAR_LEFT_PARENTHESES: 40,
    /* ( */ CHAR_RIGHT_PARENTHESES: 41,
    /* ) */ CHAR_ASTERISK: 42,
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: 38,
    /* & */ CHAR_AT: 64,
    /* @ */ CHAR_BACKWARD_SLASH: 92,
    /* \ */ CHAR_CARRIAGE_RETURN: 13,
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: 94,
    /* ^ */ CHAR_COLON: 58,
    /* : */ CHAR_COMMA: 44,
    /* , */ CHAR_DOT: 46,
    /* . */ CHAR_DOUBLE_QUOTE: 34,
    /* " */ CHAR_EQUAL: 61,
    /* = */ CHAR_EXCLAMATION_MARK: 33,
    /* ! */ CHAR_FORM_FEED: 12,
    /* \f */ CHAR_FORWARD_SLASH: 47,
    /* / */ CHAR_GRAVE_ACCENT: 96,
    /* ` */ CHAR_HASH: 35,
    /* # */ CHAR_HYPHEN_MINUS: 45,
    /* - */ CHAR_LEFT_ANGLE_BRACKET: 60,
    /* < */ CHAR_LEFT_CURLY_BRACE: 123,
    /* { */ CHAR_LEFT_SQUARE_BRACKET: 91,
    /* [ */ CHAR_LINE_FEED: 10,
    /* \n */ CHAR_NO_BREAK_SPACE: 160,
    /* \u00A0 */ CHAR_PERCENT: 37,
    /* % */ CHAR_PLUS: 43,
    /* + */ CHAR_QUESTION_MARK: 63,
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: 62,
    /* > */ CHAR_RIGHT_CURLY_BRACE: 125,
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: 93,
    /* ] */ CHAR_SEMICOLON: 59,
    /* ; */ CHAR_SINGLE_QUOTE: 39,
    /* ' */ CHAR_SPACE: 32,
    /*   */ CHAR_TAB: 9,
    /* \t */ CHAR_UNDERSCORE: 95,
    /* _ */ CHAR_VERTICAL_LINE: 124,
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    /* \uFEFF */ SEP: path.sep,
    /**
   * Create EXTGLOB_CHARS
   */ extglobChars (chars) {
        return {
            '!': {
                type: 'negate',
                open: '(?:(?!(?:',
                close: `))${chars.STAR})`
            },
            '?': {
                type: 'qmark',
                open: '(?:',
                close: ')?'
            },
            '+': {
                type: 'plus',
                open: '(?:',
                close: ')+'
            },
            '*': {
                type: 'star',
                open: '(?:',
                close: ')*'
            },
            '@': {
                type: 'at',
                open: '(?:',
                close: ')'
            }
        };
    },
    /**
   * Create GLOB_CHARS
   */ globChars (win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const win32 = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === 'win32';
const { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js [app-client] (ecmascript)");
exports.isObject = (val)=>val !== null && typeof val === 'object' && !Array.isArray(val);
exports.hasRegexChars = (str)=>REGEX_SPECIAL_CHARS.test(str);
exports.isRegexChar = (str)=>str.length === 1 && exports.hasRegexChars(str);
exports.escapeRegex = (str)=>str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
exports.toPosixSlashes = (str)=>str.replace(REGEX_BACKSLASH, '/');
exports.removeBackslashes = (str)=>{
    return str.replace(REGEX_REMOVE_BACKSLASH, (match)=>{
        return match === '\\' ? '' : match;
    });
};
exports.supportsLookbehinds = ()=>{
    const segs = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.slice(1).split('.').map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
    }
    return false;
};
exports.isWindows = (options)=>{
    if (options && typeof options.windows === 'boolean') {
        return options.windows;
    }
    return win32 === true || path.sep === '\\';
};
exports.escapeLast = (input, char, lastIdx)=>{
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};
exports.removePrefix = (input, state = {})=>{
    let output = input;
    if (output.startsWith('./')) {
        output = output.slice(2);
        state.prefix = './';
    }
    return output;
};
exports.wrapOutput = (input, state = {}, options = {})=>{
    const prepend = options.contains ? '' : '^';
    const append = options.contains ? '' : '$';
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
    }
    return output;
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js [app-client] (ecmascript)");
const { CHAR_ASTERISK, /* * */ CHAR_AT, /* @ */ CHAR_BACKWARD_SLASH, /* \ */ CHAR_COMMA, /* , */ CHAR_DOT, /* . */ CHAR_EXCLAMATION_MARK, /* ! */ CHAR_FORWARD_SLASH, /* / */ CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_LEFT_PARENTHESES, /* ( */ CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_PLUS, /* + */ CHAR_QUESTION_MARK, /* ? */ CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_RIGHT_SQUARE_BRACKET/* ] */  } = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js [app-client] (ecmascript)");
const isPathSeparator = (code)=>{
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
const depth = (token)=>{
    if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
    }
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */ const scan = (input, options)=>{
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = {
        value: '',
        depth: 0,
        isGlob: false
    };
    const eos = ()=>index >= length;
    const peek = ()=>str.charCodeAt(index + 1);
    const advance = ()=>{
        prev = code;
        return str.charCodeAt(++index);
    };
    while(index < length){
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
                braceEscaped = true;
            }
            continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while(eos() !== true && (code = advance())){
                if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (code === CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    continue;
                }
                if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (braceEscaped !== true && code === CHAR_COMMA) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_RIGHT_CURLY_BRACE) {
                    braces--;
                    if (braces === 0) {
                        braceEscaped = false;
                        isBrace = token.isBrace = true;
                        finished = true;
                        break;
                    }
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
                value: '',
                depth: 0,
                isGlob: false
            };
            if (finished === true) continue;
            if (prev === CHAR_DOT && index === start + 1) {
                start += 2;
                continue;
            }
            lastIndex = index + 1;
            continue;
        }
        if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                isGlob = token.isGlob = true;
                isExtglob = token.isExtglob = true;
                finished = true;
                if (code === CHAR_EXCLAMATION_MARK && index === start) {
                    negatedExtglob = true;
                }
                if (scanToEnd === true) {
                    while(eos() !== true && (code = advance())){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            continue;
                        }
                        if (code === CHAR_RIGHT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            finished = true;
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        }
        if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while(eos() !== true && (next = advance())){
                if (next === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    isBracket = token.isBracket = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    break;
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
                while(eos() !== true && (code = advance())){
                    if (code === CHAR_LEFT_PARENTHESES) {
                        backslashes = token.backslashes = true;
                        code = advance();
                        continue;
                    }
                    if (code === CHAR_RIGHT_PARENTHESES) {
                        finished = true;
                        break;
                    }
                }
                continue;
            }
            break;
        }
        if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
    }
    if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
    }
    let base = str;
    let prefix = '';
    let glob = '';
    if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
    } else if (isGlob === true) {
        base = '';
        glob = str;
    } else {
        base = str;
    }
    if (base && base !== '' && base !== '/' && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
        }
    }
    if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
            base = utils.removeBackslashes(base);
        }
    }
    const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
    };
    if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
            tokens.push(token);
        }
        state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for(let idx = 0; idx < slashes.length; idx++){
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
                if (idx === 0 && start !== 0) {
                    tokens[idx].isPrefix = true;
                    tokens[idx].value = prefix;
                } else {
                    tokens[idx].value = value;
                }
                depth(tokens[idx]);
                state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== '') {
                parts.push(value);
            }
            prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
                tokens[tokens.length - 1].value = value;
                depth(tokens[tokens.length - 1]);
                state.maxDepth += tokens[tokens.length - 1].depth;
            }
        }
        state.slashes = slashes;
        state.parts = parts;
    }
    return state;
};
module.exports = scan;
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const constants = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js [app-client] (ecmascript)");
/**
 * Constants
 */ const { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants;
/**
 * Helpers
 */ const expandRange = (args, options)=>{
    if (typeof options.expandRange === 'function') {
        return options.expandRange(...args, options);
    }
    args.sort();
    const value = `[${args.join('-')}]`;
    try {
        /* eslint-disable-next-line no-new */ new RegExp(value);
    } catch (ex) {
        return args.map((v)=>utils.escapeRegex(v)).join('..');
    }
    return value;
};
/**
 * Create the message for a syntax error
 */ const syntaxError = (type, char)=>{
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */ const parse = (input, options)=>{
    if (typeof input !== 'string') {
        throw new TypeError('Expected a string');
    }
    input = REPLACEMENTS[input] || input;
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = {
        type: 'bos',
        value: '',
        output: opts.prepend || ''
    };
    const tokens = [
        bos
    ];
    const capture = opts.capture ? '' : '?:';
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const PLATFORM_CHARS = constants.globChars(win32);
    const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
    const { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS;
    const globstar = (opts)=>{
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? '' : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
        star = `(${star})`;
    }
    // minimatch options support
    if (typeof opts.noext === 'boolean') {
        opts.noextglob = opts.noext;
    }
    const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: '',
        output: '',
        prefix: '',
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
    };
    input = utils.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    /**
   * Tokenizing helpers
   */ const eos = ()=>state.index === len - 1;
    const peek = state.peek = (n = 1)=>input[state.index + n];
    const advance = state.advance = ()=>input[++state.index] || '';
    const remaining = ()=>input.slice(state.index + 1);
    const consume = (value = '', num = 0)=>{
        state.consumed += value;
        state.index += num;
    };
    const append = (token)=>{
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
    };
    const negate = ()=>{
        let count = 1;
        while(peek() === '!' && (peek(2) !== '(' || peek(3) === '?')){
            advance();
            state.start++;
            count++;
        }
        if (count % 2 === 0) {
            return false;
        }
        state.negated = true;
        state.start++;
        return true;
    };
    const increment = (type)=>{
        state[type]++;
        stack.push(type);
    };
    const decrement = (type)=>{
        state[type]--;
        stack.pop();
    };
    /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */ const push = (tok)=>{
        if (prev.type === 'globstar') {
            const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');
            if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
                state.output = state.output.slice(0, -prev.output.length);
                prev.type = 'star';
                prev.value = '*';
                prev.output = star;
                state.output += prev.output;
            }
        }
        if (extglobs.length && tok.type !== 'paren') {
            extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === 'text' && tok.type === 'text') {
            prev.value += tok.value;
            prev.output = (prev.output || '') + tok.value;
            return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
    };
    const extglobOpen = (type, value)=>{
        const token = {
            ...EXTGLOB_CHARS[value],
            conditions: 1,
            inner: ''
        };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? '(' : '') + token.open;
        increment('parens');
        push({
            type,
            value,
            output: state.output ? '' : ONE_CHAR
        });
        push({
            type: 'paren',
            extglob: true,
            value: advance(),
            output
        });
        extglobs.push(token);
    };
    const extglobClose = (token)=>{
        let output = token.close + (opts.capture ? ')' : '');
        let rest;
        if (token.type === 'negate') {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
                extglobStar = globstar(opts);
            }
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
                output = token.close = `)$))${extglobStar}`;
            }
            if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
                // In this case, we need to parse the string and use it in the output of the original pattern.
                // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
                //
                // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
                const expression = parse(rest, {
                    ...options,
                    fastpaths: false
                }).output;
                output = token.close = `)${expression})${extglobStar})`;
            }
            if (token.prev.type === 'bos') {
                state.negatedExtglob = true;
            }
        }
        push({
            type: 'paren',
            extglob: true,
            value,
            output
        });
        decrement('parens');
    };
    /**
   * Fast paths
   */ if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index)=>{
            if (first === '\\') {
                backslashes = true;
                return m;
            }
            if (first === '?') {
                if (esc) {
                    return esc + first + (rest ? QMARK.repeat(rest.length) : '');
                }
                if (index === 0) {
                    return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
                }
                return QMARK.repeat(chars.length);
            }
            if (first === '.') {
                return DOT_LITERAL.repeat(chars.length);
            }
            if (first === '*') {
                if (esc) {
                    return esc + first + (rest ? star : '');
                }
                return star;
            }
            return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
            if (opts.unescape === true) {
                output = output.replace(/\\/g, '');
            } else {
                output = output.replace(/\\+/g, (m)=>{
                    return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
                });
            }
        }
        if (output === input && opts.contains === true) {
            state.output = input;
            return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
    }
    /**
   * Tokenize input until we reach end-of-string
   */ while(!eos()){
        value = advance();
        if (value === '\u0000') {
            continue;
        }
        /**
     * Escaped characters
     */ if (value === '\\') {
            const next = peek();
            if (next === '/' && opts.bash !== true) {
                continue;
            }
            if (next === '.' || next === ';') {
                continue;
            }
            if (!next) {
                value += '\\';
                push({
                    type: 'text',
                    value
                });
                continue;
            }
            // collapse slashes to reduce potential for exploits
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
                slashes = match[0].length;
                state.index += slashes;
                if (slashes % 2 !== 0) {
                    value += '\\';
                }
            }
            if (opts.unescape === true) {
                value = advance();
            } else {
                value += advance();
            }
            if (state.brackets === 0) {
                push({
                    type: 'text',
                    value
                });
                continue;
            }
        }
        /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */ if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
            if (opts.posix !== false && value === ':') {
                const inner = prev.value.slice(1);
                if (inner.includes('[')) {
                    prev.posix = true;
                    if (inner.includes(':')) {
                        const idx = prev.value.lastIndexOf('[');
                        const pre = prev.value.slice(0, idx);
                        const rest = prev.value.slice(idx + 2);
                        const posix = POSIX_REGEX_SOURCE[rest];
                        if (posix) {
                            prev.value = pre + posix;
                            state.backtrack = true;
                            advance();
                            if (!bos.output && tokens.indexOf(prev) === 1) {
                                bos.output = ONE_CHAR;
                            }
                            continue;
                        }
                    }
                }
            }
            if (value === '[' && peek() !== ':' || value === '-' && peek() === ']') {
                value = `\\${value}`;
            }
            if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
                value = `\\${value}`;
            }
            if (opts.posix === true && value === '!' && prev.value === '[') {
                value = '^';
            }
            prev.value += value;
            append({
                value
            });
            continue;
        }
        /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */ if (state.quotes === 1 && value !== '"') {
            value = utils.escapeRegex(value);
            prev.value += value;
            append({
                value
            });
            continue;
        }
        /**
     * Double quotes
     */ if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
                push({
                    type: 'text',
                    value
                });
            }
            continue;
        }
        /**
     * Parentheses
     */ if (value === '(') {
            increment('parens');
            push({
                type: 'paren',
                value
            });
            continue;
        }
        if (value === ')') {
            if (state.parens === 0 && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError('opening', '('));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
                extglobClose(extglobs.pop());
                continue;
            }
            push({
                type: 'paren',
                value,
                output: state.parens ? ')' : '\\)'
            });
            decrement('parens');
            continue;
        }
        /**
     * Square brackets
     */ if (value === '[') {
            if (opts.nobracket === true || !remaining().includes(']')) {
                if (opts.nobracket !== true && opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError('closing', ']'));
                }
                value = `\\${value}`;
            } else {
                increment('brackets');
            }
            push({
                type: 'bracket',
                value
            });
            continue;
        }
        if (value === ']') {
            if (opts.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
                push({
                    type: 'text',
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            if (state.brackets === 0) {
                if (opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError('opening', '['));
                }
                push({
                    type: 'text',
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            decrement('brackets');
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
                value = `/${value}`;
            }
            prev.value += value;
            append({
                value
            });
            // when literal brackets are explicitly disabled
            // assume we should match with a regex character class
            if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
                continue;
            }
            const escaped = utils.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            // when literal brackets are explicitly enabled
            // assume we should escape the brackets to match literal characters
            if (opts.literalBrackets === true) {
                state.output += escaped;
                prev.value = escaped;
                continue;
            }
            // when the user specifies nothing, try to match both
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
        }
        /**
     * Braces
     */ if (value === '{' && opts.nobrace !== true) {
            increment('braces');
            const open = {
                type: 'brace',
                value,
                output: '(',
                outputIndex: state.output.length,
                tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
        }
        if (value === '}') {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
                push({
                    type: 'text',
                    value,
                    output: value
                });
                continue;
            }
            let output = ')';
            if (brace.dots === true) {
                const arr = tokens.slice();
                const range = [];
                for(let i = arr.length - 1; i >= 0; i--){
                    tokens.pop();
                    if (arr[i].type === 'brace') {
                        break;
                    }
                    if (arr[i].type !== 'dots') {
                        range.unshift(arr[i].value);
                    }
                }
                output = expandRange(range, opts);
                state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
                const out = state.output.slice(0, brace.outputIndex);
                const toks = state.tokens.slice(brace.tokensIndex);
                brace.value = brace.output = '\\{';
                value = output = '\\}';
                state.output = out;
                for (const t of toks){
                    state.output += t.output || t.value;
                }
            }
            push({
                type: 'brace',
                value,
                output
            });
            decrement('braces');
            braces.pop();
            continue;
        }
        /**
     * Pipes
     */ if (value === '|') {
            if (extglobs.length > 0) {
                extglobs[extglobs.length - 1].conditions++;
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Commas
     */ if (value === ',') {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === 'braces') {
                brace.comma = true;
                output = '|';
            }
            push({
                type: 'comma',
                value,
                output
            });
            continue;
        }
        /**
     * Slashes
     */ if (value === '/') {
            // if the beginning of the glob is "./", advance the start
            // to the current index, and don't add the "./" characters
            // to the state. This greatly simplifies lookbehinds when
            // checking for BOS characters like "!" and "." (not "./")
            if (prev.type === 'dot' && state.index === state.start + 1) {
                state.start = state.index + 1;
                state.consumed = '';
                state.output = '';
                tokens.pop();
                prev = bos; // reset "prev" to the first token
                continue;
            }
            push({
                type: 'slash',
                value,
                output: SLASH_LITERAL
            });
            continue;
        }
        /**
     * Dots
     */ if (value === '.') {
            if (state.braces > 0 && prev.type === 'dot') {
                if (prev.value === '.') prev.output = DOT_LITERAL;
                const brace = braces[braces.length - 1];
                prev.type = 'dots';
                prev.output += value;
                prev.value += value;
                brace.dots = true;
                continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
                push({
                    type: 'text',
                    value,
                    output: DOT_LITERAL
                });
                continue;
            }
            push({
                type: 'dot',
                value,
                output: DOT_LITERAL
            });
            continue;
        }
        /**
     * Question marks
     */ if (value === '?') {
            const isGroup = prev && prev.value === '(';
            if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('qmark', value);
                continue;
            }
            if (prev && prev.type === 'paren') {
                const next = peek();
                let output = value;
                if (next === '<' && !utils.supportsLookbehinds()) {
                    throw new Error('Node.js v10 or higher is required for regex lookbehinds');
                }
                if (prev.value === '(' && !/[!=<:]/.test(next) || next === '<' && !/<([!=]|\w+>)/.test(remaining())) {
                    output = `\\${value}`;
                }
                push({
                    type: 'text',
                    value,
                    output
                });
                continue;
            }
            if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
                push({
                    type: 'qmark',
                    value,
                    output: QMARK_NO_DOT
                });
                continue;
            }
            push({
                type: 'qmark',
                value,
                output: QMARK
            });
            continue;
        }
        /**
     * Exclamation
     */ if (value === '!') {
            if (opts.noextglob !== true && peek() === '(') {
                if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
                    extglobOpen('negate', value);
                    continue;
                }
            }
            if (opts.nonegate !== true && state.index === 0) {
                negate();
                continue;
            }
        }
        /**
     * Plus
     */ if (value === '+') {
            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                extglobOpen('plus', value);
                continue;
            }
            if (prev && prev.value === '(' || opts.regex === false) {
                push({
                    type: 'plus',
                    value,
                    output: PLUS_LITERAL
                });
                continue;
            }
            if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
                push({
                    type: 'plus',
                    value
                });
                continue;
            }
            push({
                type: 'plus',
                value: PLUS_LITERAL
            });
            continue;
        }
        /**
     * Plain text
     */ if (value === '@') {
            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                push({
                    type: 'at',
                    extglob: true,
                    value,
                    output: ''
                });
                continue;
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Plain text
     */ if (value !== '*') {
            if (value === '$' || value === '^') {
                value = `\\${value}`;
            }
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
                value += match[0];
                state.index += match[0].length;
            }
            push({
                type: 'text',
                value
            });
            continue;
        }
        /**
     * Stars
     */ if (prev && (prev.type === 'globstar' || prev.star === true)) {
            prev.type = 'star';
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen('star', value);
            continue;
        }
        if (prev.type === 'star') {
            if (opts.noglobstar === true) {
                consume(value);
                continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === 'slash' || prior.type === 'bos';
            const afterStar = before && (before.type === 'star' || before.type === 'globstar');
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
                push({
                    type: 'star',
                    value,
                    output: ''
                });
                continue;
            }
            const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
            const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
            if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
                push({
                    type: 'star',
                    value,
                    output: ''
                });
                continue;
            }
            // strip consecutive `/**/`
            while(rest.slice(0, 3) === '/**'){
                const after = input[state.index + 4];
                if (after && after !== '/') {
                    break;
                }
                rest = rest.slice(3);
                consume('/**', 3);
            }
            if (prior.type === 'bos' && eos()) {
                prev.type = 'globstar';
                prev.value += value;
                prev.output = globstar(opts);
                state.output = prev.output;
                state.globstar = true;
                consume(value);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
                prev.value += value;
                state.globstar = true;
                state.output += prior.output + prev.output;
                consume(value);
                continue;
            }
            if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
                const end = rest[1] !== void 0 ? '|$' : '';
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = 'globstar';
                prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
                prev.value += value;
                state.output += prior.output + prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            if (prior.type === 'bos' && rest[0] === '/') {
                prev.type = 'globstar';
                prev.value += value;
                prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
                state.output = prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: 'slash',
                    value: '/',
                    output: ''
                });
                continue;
            }
            // remove single star from output
            state.output = state.output.slice(0, -prev.output.length);
            // reset previous token to globstar
            prev.type = 'globstar';
            prev.output = globstar(opts);
            prev.value += value;
            // reset output with globstar
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
        }
        const token = {
            type: 'star',
            value,
            output: star
        };
        if (opts.bash === true) {
            token.output = '.*?';
            if (prev.type === 'bos' || prev.type === 'slash') {
                token.output = nodot + token.output;
            }
            push(token);
            continue;
        }
        if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
        }
        if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
            if (prev.type === 'dot') {
                state.output += NO_DOT_SLASH;
                prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
                state.output += NO_DOTS_SLASH;
                prev.output += NO_DOTS_SLASH;
            } else {
                state.output += nodot;
                prev.output += nodot;
            }
            if (peek() !== '*') {
                state.output += ONE_CHAR;
                prev.output += ONE_CHAR;
            }
        }
        push(token);
    }
    while(state.brackets > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
        state.output = utils.escapeLast(state.output, '[');
        decrement('brackets');
    }
    while(state.parens > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
        state.output = utils.escapeLast(state.output, '(');
        decrement('parens');
    }
    while(state.braces > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
        state.output = utils.escapeLast(state.output, '{');
        decrement('braces');
    }
    if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
        push({
            type: 'maybe_slash',
            value: '',
            output: `${SLASH_LITERAL}?`
        });
    }
    // rebuild the output if we had to backtrack at any point
    if (state.backtrack === true) {
        state.output = '';
        for (const token of state.tokens){
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
                state.output += token.suffix;
            }
        }
    }
    return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */ parse.fastpaths = (input, options)=>{
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants.globChars(win32);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? '' : '?:';
    const state = {
        negated: false,
        prefix: ''
    };
    let star = opts.bash === true ? '.*?' : STAR;
    if (opts.capture) {
        star = `(${star})`;
    }
    const globstar = (opts)=>{
        if (opts.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str)=>{
        switch(str){
            case '*':
                return `${nodot}${ONE_CHAR}${star}`;
            case '.*':
                return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*.*':
                return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '*/*':
                return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case '**':
                return nodot + globstar(opts);
            case '**/*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case '**/*.*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case '**/.*':
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default:
                {
                    const match = /^(.*?)\.(\w+)$/.exec(str);
                    if (!match) return;
                    const source = create(match[1]);
                    if (!source) return;
                    return source + DOT_LITERAL + match[2];
                }
        }
    };
    const output = utils.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
    }
    return source;
};
module.exports = parse;
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const scan = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js [app-client] (ecmascript)");
const parse = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js [app-client] (ecmascript)");
const constants = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js [app-client] (ecmascript)");
const isObject = (val)=>val && typeof val === 'object' && !Array.isArray(val);
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */ const picomatch = (glob, options, returnState = false)=>{
    if (Array.isArray(glob)) {
        const fns = glob.map((input)=>picomatch(input, options, returnState));
        const arrayMatcher = (str)=>{
            for (const isMatch of fns){
                const state = isMatch(str);
                if (state) return state;
            }
            return false;
        };
        return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === '' || typeof glob !== 'string' && !isState) {
        throw new TypeError('Expected pattern to be a non-empty string');
    }
    const opts = options || {};
    const posix = utils.isWindows(options);
    const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = ()=>false;
    if (opts.ignore) {
        const ignoreOpts = {
            ...options,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false)=>{
        const { isMatch, match, output } = picomatch.test(input, regex, options, {
            glob,
            posix
        });
        const result = {
            glob,
            state,
            regex,
            posix,
            input,
            output,
            match,
            isMatch
        };
        if (typeof opts.onResult === 'function') {
            opts.onResult(result);
        }
        if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (isIgnored(input)) {
            if (typeof opts.onIgnore === 'function') {
                opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (typeof opts.onMatch === 'function') {
            opts.onMatch(result);
        }
        return returnObject ? result : true;
    };
    if (returnState) {
        matcher.state = state;
    }
    return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */ picomatch.test = (input, regex, options, { glob, posix } = {})=>{
    if (typeof input !== 'string') {
        throw new TypeError('Expected input to be a string');
    }
    if (input === '') {
        return {
            isMatch: false,
            output: ''
        };
    }
    const opts = options || {};
    const format = opts.format || (posix ? utils.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
    }
    if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
            match = picomatch.matchBase(input, regex, options, posix);
        } else {
            match = regex.exec(output);
        }
    }
    return {
        isMatch: Boolean(match),
        match,
        output
    };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */ picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options))=>{
    const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
    return regex.test(path.basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ picomatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */ picomatch.parse = (pattern, options)=>{
    if (Array.isArray(pattern)) return pattern.map((p)=>picomatch.parse(p, options));
    return parse(pattern, {
        ...options,
        fastpaths: false
    });
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ picomatch.scan = (input, options)=>scan(input, options);
/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */ picomatch.compileRe = (state, options, returnOutput = false, returnState = false)=>{
    if (returnOutput === true) {
        return state.output;
    }
    const opts = options || {};
    const prepend = opts.contains ? '' : '^';
    const append = opts.contains ? '' : '$';
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
    }
    const regex = picomatch.toRegex(source, options);
    if (returnState === true) {
        regex.state = state;
    }
    return regex;
};
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false)=>{
    if (!input || typeof input !== 'string') {
        throw new TypeError('Expected a non-empty string');
    }
    let parsed = {
        negated: false,
        fastpaths: true
    };
    if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
        parsed.output = parse.fastpaths(input, options);
    }
    if (!parsed.output) {
        parsed = parse(input, options);
    }
    return picomatch.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */ picomatch.toRegex = (source, options)=>{
    try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
    } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
    }
};
/**
 * Picomatch constants.
 * @return {Object}
 */ picomatch.constants = constants;
/**
 * Expose "picomatch"
 */ module.exports = picomatch;
}),
"[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js [app-client] (ecmascript)");
}),
"[project]/altoque-pwa/node_modules/.pnpm/micromatch@4.0.8/node_modules/micromatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const util = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)");
const braces = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/braces@3.0.3/node_modules/braces/index.js [app-client] (ecmascript)");
const picomatch = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js [app-client] (ecmascript)");
const isEmptyString = (v)=>v === '' || v === './';
const hasBraces = (v)=>{
    const index = v.indexOf('{');
    return index > -1 && v.indexOf('}', index) > -1;
};
/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} `list` List of strings to match.
 * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */ const micromatch = (list, patterns, options)=>{
    patterns = [].concat(patterns);
    list = [].concat(list);
    let omit = new Set();
    let keep = new Set();
    let items = new Set();
    let negatives = 0;
    let onResult = (state)=>{
        items.add(state.output);
        if (options && options.onResult) {
            options.onResult(state);
        }
    };
    for(let i = 0; i < patterns.length; i++){
        let isMatch = picomatch(String(patterns[i]), {
            ...options,
            onResult
        }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list){
            let matched = isMatch(item, true);
            let match = negated ? !matched.isMatch : matched.isMatch;
            if (!match) continue;
            if (negated) {
                omit.add(matched.output);
            } else {
                omit.delete(matched.output);
                keep.add(matched.output);
            }
        }
    }
    let result = negatives === patterns.length ? [
        ...items
    ] : [
        ...keep
    ];
    let matches = result.filter((item)=>!omit.has(item));
    if (options && matches.length === 0) {
        if (options.failglob === true) {
            throw new Error(`No matches found for "${patterns.join(', ')}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
            return options.unescape ? patterns.map((p)=>p.replace(/\\/g, '')) : patterns;
        }
    }
    return matches;
};
/**
 * Backwards compatibility
 */ micromatch.match = micromatch;
/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */ micromatch.matcher = (pattern, options)=>picomatch(pattern, options);
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str);
/**
 * Backwards compatibility
 */ micromatch.any = micromatch.isMatch;
/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */ micromatch.not = (list, patterns, options = {})=>{
    patterns = [].concat(patterns).map(String);
    let result = new Set();
    let items = [];
    let onResult = (state)=>{
        if (options.onResult) options.onResult(state);
        items.push(state.output);
    };
    let matches = new Set(micromatch(list, patterns, {
        ...options,
        onResult
    }));
    for (let item of items){
        if (!matches.has(item)) {
            result.add(item);
        }
    }
    return [
        ...result
    ];
};
/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */ micromatch.contains = (str, pattern, options)=>{
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    }
    if (Array.isArray(pattern)) {
        return pattern.some((p)=>micromatch.contains(str, p, options));
    }
    if (typeof pattern === 'string') {
        if (isEmptyString(str) || isEmptyString(pattern)) {
            return false;
        }
        if (str.includes(pattern) || str.startsWith('./') && str.slice(2).includes(pattern)) {
            return true;
        }
    }
    return micromatch.isMatch(str, pattern, {
        ...options,
        contains: true
    });
};
/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */ micromatch.matchKeys = (obj, patterns, options)=>{
    if (!utils.isObject(obj)) {
        throw new TypeError('Expected the first argument to be an object');
    }
    let keys = micromatch(Object.keys(obj), patterns, options);
    let res = {};
    for (let key of keys)res[key] = obj[key];
    return res;
};
/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */ micromatch.some = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item)=>isMatch(item))) {
            return true;
        }
    }
    return false;
};
/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */ micromatch.every = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item)=>isMatch(item))) {
            return false;
        }
    }
    return true;
};
/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.all = (str, patterns, options)=>{
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    }
    return [].concat(patterns).every((p)=>picomatch(p, options)(str));
};
/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */ micromatch.capture = (glob, input, options)=>{
    let posix = utils.isWindows(options);
    let regex = picomatch.makeRe(String(glob), {
        ...options,
        capture: true
    });
    let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
    if (match) {
        return match.slice(1).map((v)=>v === void 0 ? '' : v);
    }
};
/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ micromatch.makeRe = (...args)=>picomatch.makeRe(...args);
/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ micromatch.scan = (...args)=>picomatch.scan(...args);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.parse(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */ micromatch.parse = (patterns, options)=>{
    let res = [];
    for (let pattern of [].concat(patterns || [])){
        for (let str of braces(String(pattern), options)){
            res.push(picomatch.parse(str, options));
        }
    }
    return res;
};
/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */ micromatch.braces = (pattern, options)=>{
    if (typeof pattern !== 'string') throw new TypeError('Expected a string');
    if (options && options.nobrace === true || !hasBraces(pattern)) {
        return [
            pattern
        ];
    }
    return braces(pattern, options);
};
/**
 * Expand braces
 */ micromatch.braceExpand = (pattern, options)=>{
    if (typeof pattern !== 'string') throw new TypeError('Expected a string');
    return micromatch.braces(pattern, {
        ...options,
        expand: true
    });
};
/**
 * Expose micromatch
 */ // exposed for tests
micromatch.hasBraces = hasBraces;
module.exports = micromatch;
}),
"[project]/altoque-pwa/node_modules/.pnpm/merge2@1.4.1/node_modules/merge2/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/*
 * merge2
 * https://github.com/teambition/merge2
 *
 * Copyright (c) 2014-2020 Teambition
 * Licensed under the MIT license.
 */ const Stream = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const PassThrough = Stream.PassThrough;
const slice = Array.prototype.slice;
module.exports = merge2;
function merge2() {
    const streamsQueue = [];
    const args = slice.call(arguments);
    let merging = false;
    let options = args[args.length - 1];
    if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
    } else {
        options = {};
    }
    const doEnd = options.end !== false;
    const doPipeError = options.pipeError === true;
    if (options.objectMode == null) {
        options.objectMode = true;
    }
    if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
    }
    const mergedStream = PassThrough(options);
    function addStream() {
        for(let i = 0, len = arguments.length; i < len; i++){
            streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
    }
    function mergeStream() {
        if (merging) {
            return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(endStream);
            return;
        }
        if (!Array.isArray(streams)) {
            streams = [
                streams
            ];
        }
        let pipesCount = streams.length + 1;
        function next() {
            if (--pipesCount > 0) {
                return;
            }
            merging = false;
            mergeStream();
        }
        function pipe(stream) {
            function onend() {
                stream.removeListener('merge2UnpipeEnd', onend);
                stream.removeListener('end', onend);
                if (doPipeError) {
                    stream.removeListener('error', onerror);
                }
                next();
            }
            function onerror(err) {
                mergedStream.emit('error', err);
            }
            // skip ended stream
            if (stream._readableState.endEmitted) {
                return next();
            }
            stream.on('merge2UnpipeEnd', onend);
            stream.on('end', onend);
            if (doPipeError) {
                stream.on('error', onerror);
            }
            stream.pipe(mergedStream, {
                end: false
            });
            // compatible for old stream
            stream.resume();
        }
        for(let i = 0; i < streams.length; i++){
            pipe(streams[i]);
        }
        next();
    }
    function endStream() {
        merging = false;
        // emit 'queueDrain' when all streams merged.
        mergedStream.emit('queueDrain');
        if (doEnd) {
            mergedStream.end();
        }
    }
    mergedStream.setMaxListeners(0);
    mergedStream.add = addStream;
    mergedStream.on('unpipe', function(stream) {
        stream.emit('merge2UnpipeEnd');
    });
    if (args.length) {
        addStream.apply(null, args);
    }
    return mergedStream;
}
// check and pause streams for pipe.
function pauseStreams(streams, options) {
    if (!Array.isArray(streams)) {
        // Backwards-compat with old-style streams
        if (!streams._readableState && streams.pipe) {
            streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
            throw new Error('Only readable stream can be merged.');
        }
        streams.pause();
    } else {
        for(let i = 0, len = streams.length; i < len; i++){
            streams[i] = pauseStreams(streams[i], options);
        }
    }
    return streams;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.read = void 0;
function read(path, settings, callback) {
    settings.fs.lstat(path, (lstatError, lstat)=>{
        if (lstatError !== null) {
            callFailureCallback(callback, lstatError);
            return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
            callSuccessCallback(callback, lstat);
            return;
        }
        settings.fs.stat(path, (statError, stat)=>{
            if (statError !== null) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    callFailureCallback(callback, statError);
                    return;
                }
                callSuccessCallback(callback, lstat);
                return;
            }
            if (settings.markSymbolicLink) {
                stat.isSymbolicLink = ()=>true;
            }
            callSuccessCallback(callback, stat);
        });
    });
}
exports.read = read;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, result) {
    callback(null, result);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.read = void 0;
function read(path, settings) {
    const lstat = settings.fs.lstatSync(path);
    if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
    }
    try {
        const stat = settings.fs.statSync(path);
        if (settings.markSymbolicLink) {
            stat.isSymbolicLink = ()=>true;
        }
        return stat;
    } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
            return lstat;
        }
        throw error;
    }
}
exports.read = read;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    stat: fs.stat,
    lstatSync: fs.lstatSync,
    statSync: fs.statSync
};
function createFileSystemAdapter(fsMethods) {
    if (fsMethods === undefined) {
        return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}
exports.createFileSystemAdapter = createFileSystemAdapter;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const fs = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/adapters/fs.js [app-client] (ecmascript)");
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports.default = Settings;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.statSync = exports.stat = exports.Settings = void 0;
const async = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/async.js [app-client] (ecmascript)");
const sync = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/providers/sync.js [app-client] (ecmascript)");
const settings_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/settings.js [app-client] (ecmascript)");
exports.Settings = settings_1.default;
function stat(path, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === 'function') {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
    }
    async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}
exports.stat = stat;
function statSync(path, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    return sync.read(path, settings);
}
exports.statSync = statSync;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ let promise;
module.exports = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : /*TURBOPACK member replacement*/ __turbopack_context__.g) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{
            throw err;
        }, 0));
}),
"[project]/altoque-pwa/node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ module.exports = runParallel;
const queueMicrotask = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js [app-client] (ecmascript)");
function runParallel(tasks, cb) {
    let results, pending, keys;
    let isSync = true;
    if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
    } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
    }
    function done(err) {
        function end() {
            if (cb) cb(err, results);
            cb = null;
        }
        if (isSync) queueMicrotask(end);
        else end();
    }
    function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
            done(err);
        }
    }
    if (!pending) {
        // empty
        done(null);
    } else if (keys) {
        // object
        keys.forEach(function(key) {
            tasks[key](function(err, result) {
                each(key, err, result);
            });
        });
    } else {
        // array
        tasks.forEach(function(task, i) {
            task(function(err, result) {
                each(i, err, result);
            });
        });
    }
    isSync = false;
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
const NODE_PROCESS_VERSION_PARTS = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node.split('.');
if (NODE_PROCESS_VERSION_PARTS[0] === undefined || NODE_PROCESS_VERSION_PARTS[1] === undefined) {
    throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${__TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node}`);
}
const MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
const MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
const SUPPORTED_MAJOR_VERSION = 10;
const SUPPORTED_MINOR_VERSION = 10;
const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
/**
 * IS `true` for Node.js 10.10 and greater.
 */ exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDirentFromStats = void 0;
class DirentFromStats {
    constructor(name, stats){
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
}
function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
}
exports.createDirentFromStats = createDirentFromStats;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fs = void 0;
const fs = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/fs.js [app-client] (ecmascript)");
exports.fs = fs;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.joinPathSegments = void 0;
function joinPathSegments(a, b, separator) {
    /**
     * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
     */ if (a.endsWith(separator)) {
        return a + b;
    }
    return a + separator + b;
}
exports.joinPathSegments = joinPathSegments;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const rpl = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/run-parallel@1.2.0/node_modules/run-parallel/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js [app-client] (ecmascript)");
const common = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js [app-client] (ecmascript)");
function read(directory, settings, callback) {
    if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
    }
    readdir(directory, settings, callback);
}
exports.read = read;
function readdirWithFileTypes(directory, settings, callback) {
    settings.fs.readdir(directory, {
        withFileTypes: true
    }, (readdirError, dirents)=>{
        if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
        }
        const entries = dirents.map((dirent)=>({
                dirent,
                name: dirent.name,
                path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
            }));
        if (!settings.followSymbolicLinks) {
            callSuccessCallback(callback, entries);
            return;
        }
        const tasks = entries.map((entry)=>makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries)=>{
            if (rplError !== null) {
                callFailureCallback(callback, rplError);
                return;
            }
            callSuccessCallback(callback, rplEntries);
        });
    });
}
exports.readdirWithFileTypes = readdirWithFileTypes;
function makeRplTaskEntry(entry, settings) {
    return (done)=>{
        if (!entry.dirent.isSymbolicLink()) {
            done(null, entry);
            return;
        }
        settings.fs.stat(entry.path, (statError, stats)=>{
            if (statError !== null) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    done(statError);
                    return;
                }
                done(null, entry);
                return;
            }
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            done(null, entry);
        });
    };
}
function readdir(directory, settings, callback) {
    settings.fs.readdir(directory, (readdirError, names)=>{
        if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
        }
        const tasks = names.map((name)=>{
            const path = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
            return (done)=>{
                fsStat.stat(path, settings.fsStatSettings, (error, stats)=>{
                    if (error !== null) {
                        done(error);
                        return;
                    }
                    const entry = {
                        name,
                        path,
                        dirent: utils.fs.createDirentFromStats(name, stats)
                    };
                    if (settings.stats) {
                        entry.stats = stats;
                    }
                    done(null, entry);
                });
            };
        });
        rpl(tasks, (rplError, entries)=>{
            if (rplError !== null) {
                callFailureCallback(callback, rplError);
                return;
            }
            callSuccessCallback(callback, entries);
        });
    });
}
exports.readdir = readdir;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, result) {
    callback(null, result);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const constants_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/constants.js [app-client] (ecmascript)");
const utils = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/utils/index.js [app-client] (ecmascript)");
const common = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/common.js [app-client] (ecmascript)");
function read(directory, settings) {
    if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
    }
    return readdir(directory, settings);
}
exports.read = read;
function readdirWithFileTypes(directory, settings) {
    const dirents = settings.fs.readdirSync(directory, {
        withFileTypes: true
    });
    return dirents.map((dirent)=>{
        const entry = {
            dirent,
            name: dirent.name,
            path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
            try {
                const stats = settings.fs.statSync(entry.path);
                entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            } catch (error) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    throw error;
                }
            }
        }
        return entry;
    });
}
exports.readdirWithFileTypes = readdirWithFileTypes;
function readdir(directory, settings) {
    const names = settings.fs.readdirSync(directory);
    return names.map((name)=>{
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
            name,
            path: entryPath,
            dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
            entry.stats = stats;
        }
        return entry;
    });
}
exports.readdir = readdir;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
const fs = (()=>{
    const e = new Error("Cannot find module 'fs'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    stat: fs.stat,
    lstatSync: fs.lstatSync,
    statSync: fs.statSync,
    readdir: fs.readdir,
    readdirSync: fs.readdirSync
};
function createFileSystemAdapter(fsMethods) {
    if (fsMethods === undefined) {
        return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}
exports.createFileSystemAdapter = createFileSystemAdapter;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const fsStat = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.stat@2.0.5/node_modules/@nodelib/fs.stat/out/index.js [app-client] (ecmascript)");
const fs = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/adapters/fs.js [app-client] (ecmascript)");
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this.followSymbolicLinks,
            fs: this.fs,
            throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports.default = Settings;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Settings = exports.scandirSync = exports.scandir = void 0;
const async = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/async.js [app-client] (ecmascript)");
const sync = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/providers/sync.js [app-client] (ecmascript)");
const settings_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/settings.js [app-client] (ecmascript)");
exports.Settings = settings_1.default;
function scandir(path, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === 'function') {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
    }
    async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}
exports.scandir = scandir;
function scandirSync(path, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    return sync.read(path, settings);
}
exports.scandirSync = scandirSync;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/reusify@1.1.0/node_modules/reusify/reusify.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function reusify(Constructor) {
    var head = new Constructor();
    var tail = head;
    function get() {
        var current = head;
        if (current.next) {
            head = current.next;
        } else {
            head = new Constructor();
            tail = head;
        }
        current.next = null;
        return current;
    }
    function release(obj) {
        tail.next = obj;
        tail = obj;
    }
    return {
        get: get,
        release: release
    };
}
module.exports = reusify;
}),
"[project]/altoque-pwa/node_modules/.pnpm/fastq@1.19.1/node_modules/fastq/queue.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
/* eslint-disable no-var */ var reusify = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/reusify@1.1.0/node_modules/reusify/reusify.js [app-client] (ecmascript)");
function fastqueue(context, worker, _concurrency) {
    if (typeof context === 'function') {
        _concurrency = worker;
        worker = context;
        context = null;
    }
    if (!(_concurrency >= 1)) {
        throw new Error('fastqueue concurrency must be equal to or greater than 1');
    }
    var cache = reusify(Task);
    var queueHead = null;
    var queueTail = null;
    var _running = 0;
    var errorHandler = null;
    var self = {
        push: push,
        drain: noop,
        saturated: noop,
        pause: pause,
        paused: false,
        get concurrency () {
            return _concurrency;
        },
        set concurrency (value){
            if (!(value >= 1)) {
                throw new Error('fastqueue concurrency must be equal to or greater than 1');
            }
            _concurrency = value;
            if (self.paused) return;
            for(; queueHead && _running < _concurrency;){
                _running++;
                release();
            }
        },
        running: running,
        resume: resume,
        idle: idle,
        length: length,
        getQueue: getQueue,
        unshift: unshift,
        empty: noop,
        kill: kill,
        killAndDrain: killAndDrain,
        error: error
    };
    return self;
    //TURBOPACK unreachable
    ;
    function running() {
        return _running;
    }
    function pause() {
        self.paused = true;
    }
    function length() {
        var current = queueHead;
        var counter = 0;
        while(current){
            current = current.next;
            counter++;
        }
        return counter;
    }
    function getQueue() {
        var current = queueHead;
        var tasks = [];
        while(current){
            tasks.push(current.value);
            current = current.next;
        }
        return tasks;
    }
    function resume() {
        if (!self.paused) return;
        self.paused = false;
        if (queueHead === null) {
            _running++;
            release();
            return;
        }
        for(; queueHead && _running < _concurrency;){
            _running++;
            release();
        }
    }
    function idle() {
        return _running === 0 && self.length() === 0;
    }
    function push(value1, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value1;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running >= _concurrency || self.paused) {
            if (queueTail) {
                queueTail.next = current;
                queueTail = current;
            } else {
                queueHead = current;
                queueTail = current;
                self.saturated();
            }
        } else {
            _running++;
            worker.call(context, current.value, current.worked);
        }
    }
    function unshift(value1, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value1;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running >= _concurrency || self.paused) {
            if (queueHead) {
                current.next = queueHead;
                queueHead = current;
            } else {
                queueHead = current;
                queueTail = current;
                self.saturated();
            }
        } else {
            _running++;
            worker.call(context, current.value, current.worked);
        }
    }
    function release(holder) {
        if (holder) {
            cache.release(holder);
        }
        var next = queueHead;
        if (next && _running <= _concurrency) {
            if (!self.paused) {
                if (queueTail === queueHead) {
                    queueTail = null;
                }
                queueHead = next.next;
                next.next = null;
                worker.call(context, next.value, next.worked);
                if (queueTail === null) {
                    self.empty();
                }
            } else {
                _running--;
            }
        } else if (--_running === 0) {
            self.drain();
        }
    }
    function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop;
    }
    function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop;
    }
    function error(handler) {
        errorHandler = handler;
    }
}
function noop() {}
function Task() {
    this.value = null;
    this.callback = noop;
    this.next = null;
    this.release = noop;
    this.context = null;
    this.errorHandler = null;
    var self = this;
    this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop;
        if (self.errorHandler) {
            errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
    };
}
function queueAsPromised(context, worker, _concurrency) {
    if (typeof context === 'function') {
        _concurrency = worker;
        worker = context;
        context = null;
    }
    function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
            cb(null, res);
        }, cb);
    }
    var queue = fastqueue(context, asyncWrapper, _concurrency);
    var pushCb = queue.push;
    var unshiftCb = queue.unshift;
    queue.push = push;
    queue.unshift = unshift;
    queue.drained = drained;
    return queue;
    //TURBOPACK unreachable
    ;
    function push(value1) {
        var p = new Promise(function(resolve, reject) {
            pushCb(value1, function(err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
        // Let's fork the promise chain to
        // make the error bubble up to the user but
        // not lead to a unhandledRejection
        p.catch(noop);
        return p;
    }
    function unshift(value1) {
        var p = new Promise(function(resolve, reject) {
            unshiftCb(value1, function(err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
        // Let's fork the promise chain to
        // make the error bubble up to the user but
        // not lead to a unhandledRejection
        p.catch(noop);
        return p;
    }
    function drained() {
        var p = new Promise(function(resolve) {
            __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
                if (queue.idle()) {
                    resolve();
                } else {
                    var previousDrain = queue.drain;
                    queue.drain = function() {
                        if (typeof previousDrain === 'function') previousDrain();
                        resolve();
                        queue.drain = previousDrain;
                    };
                }
            });
        });
        return p;
    }
}
module.exports = fastqueue;
module.exports.promise = queueAsPromised;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
function isFatalError(settings, error) {
    if (settings.errorFilter === null) {
        return true;
    }
    return !settings.errorFilter(error);
}
exports.isFatalError = isFatalError;
function isAppliedFilter(filter, value) {
    return filter === null || filter(value);
}
exports.isAppliedFilter = isAppliedFilter;
function replacePathSegmentSeparator(filepath, separator) {
    return filepath.split(/[/\\]/).join(separator);
}
exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
function joinPathSegments(a, b, separator) {
    if (a === '') {
        return b;
    }
    /**
     * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
     */ if (a.endsWith(separator)) {
        return a + b;
    }
    return a + separator + b;
}
exports.joinPathSegments = joinPathSegments;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const common = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js [app-client] (ecmascript)");
class Reader {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
    }
}
exports.default = Reader;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const events_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)");
const fsScandir = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js [app-client] (ecmascript)");
const fastq = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/fastq@1.19.1/node_modules/fastq/queue.js [app-client] (ecmascript)");
const common = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js [app-client] (ecmascript)");
const reader_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js [app-client] (ecmascript)");
class AsyncReader extends reader_1.default {
    constructor(_root, _settings){
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = ()=>{
            if (!this._isFatalError) {
                this._emitter.emit('end');
            }
        };
    }
    read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(()=>{
            this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
    }
    get isDestroyed() {
        return this._isDestroyed;
    }
    destroy() {
        if (this._isDestroyed) {
            throw new Error('The reader is already destroyed');
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
    }
    onEntry(callback) {
        this._emitter.on('entry', callback);
    }
    onError(callback) {
        this._emitter.once('error', callback);
    }
    onEnd(callback) {
        this._emitter.once('end', callback);
    }
    _pushToQueue(directory, base) {
        const queueItem = {
            directory,
            base
        };
        this._queue.push(queueItem, (error)=>{
            if (error !== null) {
                this._handleError(error);
            }
        });
    }
    _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries)=>{
            if (error !== null) {
                done(error, undefined);
                return;
            }
            for (const entry of entries){
                this._handleEntry(entry, item.base);
            }
            done(null, undefined);
        });
    }
    _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
            return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit('error', error);
    }
    _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
            return;
        }
        const fullpath = entry.path;
        if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
        }
    }
    _emitEntry(entry) {
        this._emitter.emit('entry', entry);
    }
}
exports.default = AsyncReader;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const async_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js [app-client] (ecmascript)");
class AsyncProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
    }
    read(callback) {
        this._reader.onError((error)=>{
            callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry)=>{
            this._storage.push(entry);
        });
        this._reader.onEnd(()=>{
            callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
    }
}
exports.default = AsyncProvider;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, entries) {
    callback(null, entries);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/stream-browserify/index.js [app-client] (ecmascript)");
const async_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/async.js [app-client] (ecmascript)");
class StreamProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
            objectMode: true,
            read: ()=>{},
            destroy: ()=>{
                if (!this._reader.isDestroyed) {
                    this._reader.destroy();
                }
            }
        });
    }
    read() {
        this._reader.onError((error)=>{
            this._stream.emit('error', error);
        });
        this._reader.onEntry((entry)=>{
            this._stream.push(entry);
        });
        this._reader.onEnd(()=>{
            this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
    }
}
exports.default = StreamProvider;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const fsScandir = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js [app-client] (ecmascript)");
const common = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/common.js [app-client] (ecmascript)");
const reader_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/reader.js [app-client] (ecmascript)");
class SyncReader extends reader_1.default {
    constructor(){
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = new Set();
    }
    read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
    }
    _pushToQueue(directory, base) {
        this._queue.add({
            directory,
            base
        });
    }
    _handleQueue() {
        for (const item of this._queue.values()){
            this._handleDirectory(item.directory, item.base);
        }
    }
    _handleDirectory(directory, base) {
        try {
            const entries = this._scandir(directory, this._settings.fsScandirSettings);
            for (const entry of entries){
                this._handleEntry(entry, base);
            }
        } catch (error) {
            this._handleError(error);
        }
    }
    _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
            return;
        }
        throw error;
    }
    _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
        }
    }
    _pushToStorage(entry) {
        this._storage.push(entry);
    }
}
exports.default = SyncReader;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const sync_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/readers/sync.js [app-client] (ecmascript)");
class SyncProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
    }
    read() {
        return this._reader.read();
    }
}
exports.default = SyncProvider;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const path = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)");
const fsScandir = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.scandir@2.1.5/node_modules/@nodelib/fs.scandir/out/index.js [app-client] (ecmascript)");
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, undefined);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.fsScandirSettings = new fsScandir.Settings({
            followSymbolicLinks: this._options.followSymbolicLinks,
            fs: this._options.fs,
            pathSegmentSeparator: this._options.pathSegmentSeparator,
            stats: this._options.stats,
            throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports.default = Settings;
}),
"[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
const async_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/async.js [app-client] (ecmascript)");
const stream_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/stream.js [app-client] (ecmascript)");
const sync_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/providers/sync.js [app-client] (ecmascript)");
const settings_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/@nodelib+fs.walk@1.2.8/node_modules/@nodelib/fs.walk/out/settings.js [app-client] (ecmascript)");
exports.Settings = settings_1.default;
function walk(directory, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === 'function') {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
    }
    new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
}
exports.walk = walk;
function walkSync(directory, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    const provider = new sync_1.default(directory, settings);
    return provider.read();
}
exports.walkSync = walkSync;
function walkStream(directory, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    const provider = new stream_1.default(directory, settings);
    return provider.read();
}
exports.walkStream = walkStream;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/normalize-path@3.0.0/node_modules/normalize-path/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */ module.exports = function(path, stripTrailing) {
    if (typeof path !== 'string') {
        throw new TypeError('expected path to be a string');
    }
    if (path === '\\' || path === '/') return '/';
    var len = path.length;
    if (len <= 1) return path;
    // ensure that win32 namespaces has two leading slashes, so that the path is
    // handled properly by the win32 version of path.parse() after being normalized
    // https://msdn.microsoft.com/library/windows/desktop/aa365247(v=vs.85).aspx#namespaces
    var prefix = '';
    if (len > 4 && path[3] === '\\') {
        var ch = path[2];
        if ((ch === '?' || ch === '.') && path.slice(0, 2) === '\\\\') {
            path = path.slice(2);
            prefix = '//';
        }
    }
    var segs = path.split(/[/\\]+/);
    if (stripTrailing !== false && segs[segs.length - 1] === '') {
        segs.pop();
    }
    return prefix + segs.join('/');
};
}),
"[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+sourcemap-codec@1.5.5/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/vlq.ts
__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeGeneratedRanges",
    ()=>decodeGeneratedRanges,
    "decodeOriginalScopes",
    ()=>decodeOriginalScopes,
    "encode",
    ()=>encode,
    "encodeGeneratedRanges",
    ()=>encodeGeneratedRanges,
    "encodeOriginalScopes",
    ()=>encodeOriginalScopes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var comma = ",".charCodeAt(0);
var semicolon = ";".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for(let i = 0; i < chars.length; i++){
    const c = chars.charCodeAt(i);
    intToChar[i] = c;
    charToInt[c] = i;
}
function decodeInteger(reader, relative) {
    let value = 0;
    let shift = 0;
    let integer = 0;
    do {
        const c = reader.next();
        integer = charToInt[c];
        value |= (integer & 31) << shift;
        shift += 5;
    }while (integer & 32)
    const shouldNegate = value & 1;
    value >>>= 1;
    if (shouldNegate) {
        value = -2147483648 | -value;
    }
    return relative + value;
}
function encodeInteger(builder, num, relative) {
    let delta = num - relative;
    delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
    do {
        let clamped = delta & 31;
        delta >>>= 5;
        if (delta > 0) clamped |= 32;
        builder.write(intToChar[clamped]);
    }while (delta > 0)
    return num;
}
function hasMoreVlq(reader, max) {
    if (reader.pos >= max) return false;
    return reader.peek() !== comma;
}
// src/strings.ts
var bufLength = 1024 * 16;
var td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] !== "undefined" ? {
    decode (buf) {
        const out = __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(buf.buffer, buf.byteOffset, buf.byteLength);
        return out.toString();
    }
} : {
    decode (buf) {
        let out = "";
        for(let i = 0; i < buf.length; i++){
            out += String.fromCharCode(buf[i]);
        }
        return out;
    }
};
var StringWriter = class {
    constructor(){
        this.pos = 0;
        this.out = "";
        this.buffer = new Uint8Array(bufLength);
    }
    write(v) {
        const { buffer } = this;
        buffer[this.pos++] = v;
        if (this.pos === bufLength) {
            this.out += td.decode(buffer);
            this.pos = 0;
        }
    }
    flush() {
        const { buffer, out, pos } = this;
        return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
    }
};
var StringReader = class {
    constructor(buffer){
        this.pos = 0;
        this.buffer = buffer;
    }
    next() {
        return this.buffer.charCodeAt(this.pos++);
    }
    peek() {
        return this.buffer.charCodeAt(this.pos);
    }
    indexOf(char) {
        const { buffer, pos } = this;
        const idx = buffer.indexOf(char, pos);
        return idx === -1 ? buffer.length : idx;
    }
};
// src/scopes.ts
var EMPTY = [];
function decodeOriginalScopes(input) {
    const { length } = input;
    const reader = new StringReader(input);
    const scopes = [];
    const stack = [];
    let line = 0;
    for(; reader.pos < length; reader.pos++){
        line = decodeInteger(reader, line);
        const column = decodeInteger(reader, 0);
        if (!hasMoreVlq(reader, length)) {
            const last = stack.pop();
            last[2] = line;
            last[3] = column;
            continue;
        }
        const kind = decodeInteger(reader, 0);
        const fields = decodeInteger(reader, 0);
        const hasName = fields & 1;
        const scope = hasName ? [
            line,
            column,
            0,
            0,
            kind,
            decodeInteger(reader, 0)
        ] : [
            line,
            column,
            0,
            0,
            kind
        ];
        let vars = EMPTY;
        if (hasMoreVlq(reader, length)) {
            vars = [];
            do {
                const varsIndex = decodeInteger(reader, 0);
                vars.push(varsIndex);
            }while (hasMoreVlq(reader, length))
        }
        scope.vars = vars;
        scopes.push(scope);
        stack.push(scope);
    }
    return scopes;
}
function encodeOriginalScopes(scopes) {
    const writer = new StringWriter();
    for(let i = 0; i < scopes.length;){
        i = _encodeOriginalScopes(scopes, i, writer, [
            0
        ]);
    }
    return writer.flush();
}
function _encodeOriginalScopes(scopes, index, writer, state) {
    const scope = scopes[index];
    const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, 4: kind, vars } = scope;
    if (index > 0) writer.write(comma);
    state[0] = encodeInteger(writer, startLine, state[0]);
    encodeInteger(writer, startColumn, 0);
    encodeInteger(writer, kind, 0);
    const fields = scope.length === 6 ? 1 : 0;
    encodeInteger(writer, fields, 0);
    if (scope.length === 6) encodeInteger(writer, scope[5], 0);
    for (const v of vars){
        encodeInteger(writer, v, 0);
    }
    for(index++; index < scopes.length;){
        const next = scopes[index];
        const { 0: l, 1: c } = next;
        if (l > endLine || l === endLine && c >= endColumn) {
            break;
        }
        index = _encodeOriginalScopes(scopes, index, writer, state);
    }
    writer.write(comma);
    state[0] = encodeInteger(writer, endLine, state[0]);
    encodeInteger(writer, endColumn, 0);
    return index;
}
function decodeGeneratedRanges(input) {
    const { length } = input;
    const reader = new StringReader(input);
    const ranges = [];
    const stack = [];
    let genLine = 0;
    let definitionSourcesIndex = 0;
    let definitionScopeIndex = 0;
    let callsiteSourcesIndex = 0;
    let callsiteLine = 0;
    let callsiteColumn = 0;
    let bindingLine = 0;
    let bindingColumn = 0;
    do {
        const semi = reader.indexOf(";");
        let genColumn = 0;
        for(; reader.pos < semi; reader.pos++){
            genColumn = decodeInteger(reader, genColumn);
            if (!hasMoreVlq(reader, semi)) {
                const last = stack.pop();
                last[2] = genLine;
                last[3] = genColumn;
                continue;
            }
            const fields = decodeInteger(reader, 0);
            const hasDefinition = fields & 1;
            const hasCallsite = fields & 2;
            const hasScope = fields & 4;
            let callsite = null;
            let bindings = EMPTY;
            let range;
            if (hasDefinition) {
                const defSourcesIndex = decodeInteger(reader, definitionSourcesIndex);
                definitionScopeIndex = decodeInteger(reader, definitionSourcesIndex === defSourcesIndex ? definitionScopeIndex : 0);
                definitionSourcesIndex = defSourcesIndex;
                range = [
                    genLine,
                    genColumn,
                    0,
                    0,
                    defSourcesIndex,
                    definitionScopeIndex
                ];
            } else {
                range = [
                    genLine,
                    genColumn,
                    0,
                    0
                ];
            }
            range.isScope = !!hasScope;
            if (hasCallsite) {
                const prevCsi = callsiteSourcesIndex;
                const prevLine = callsiteLine;
                callsiteSourcesIndex = decodeInteger(reader, callsiteSourcesIndex);
                const sameSource = prevCsi === callsiteSourcesIndex;
                callsiteLine = decodeInteger(reader, sameSource ? callsiteLine : 0);
                callsiteColumn = decodeInteger(reader, sameSource && prevLine === callsiteLine ? callsiteColumn : 0);
                callsite = [
                    callsiteSourcesIndex,
                    callsiteLine,
                    callsiteColumn
                ];
            }
            range.callsite = callsite;
            if (hasMoreVlq(reader, semi)) {
                bindings = [];
                do {
                    bindingLine = genLine;
                    bindingColumn = genColumn;
                    const expressionsCount = decodeInteger(reader, 0);
                    let expressionRanges;
                    if (expressionsCount < -1) {
                        expressionRanges = [
                            [
                                decodeInteger(reader, 0)
                            ]
                        ];
                        for(let i = -1; i > expressionsCount; i--){
                            const prevBl = bindingLine;
                            bindingLine = decodeInteger(reader, bindingLine);
                            bindingColumn = decodeInteger(reader, bindingLine === prevBl ? bindingColumn : 0);
                            const expression = decodeInteger(reader, 0);
                            expressionRanges.push([
                                expression,
                                bindingLine,
                                bindingColumn
                            ]);
                        }
                    } else {
                        expressionRanges = [
                            [
                                expressionsCount
                            ]
                        ];
                    }
                    bindings.push(expressionRanges);
                }while (hasMoreVlq(reader, semi))
            }
            range.bindings = bindings;
            ranges.push(range);
            stack.push(range);
        }
        genLine++;
        reader.pos = semi + 1;
    }while (reader.pos < length)
    return ranges;
}
function encodeGeneratedRanges(ranges) {
    if (ranges.length === 0) return "";
    const writer = new StringWriter();
    for(let i = 0; i < ranges.length;){
        i = _encodeGeneratedRanges(ranges, i, writer, [
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]);
    }
    return writer.flush();
}
function _encodeGeneratedRanges(ranges, index, writer, state) {
    const range = ranges[index];
    const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, isScope, callsite, bindings } = range;
    if (state[0] < startLine) {
        catchupLine(writer, state[0], startLine);
        state[0] = startLine;
        state[1] = 0;
    } else if (index > 0) {
        writer.write(comma);
    }
    state[1] = encodeInteger(writer, range[1], state[1]);
    const fields = (range.length === 6 ? 1 : 0) | (callsite ? 2 : 0) | (isScope ? 4 : 0);
    encodeInteger(writer, fields, 0);
    if (range.length === 6) {
        const { 4: sourcesIndex, 5: scopesIndex } = range;
        if (sourcesIndex !== state[2]) {
            state[3] = 0;
        }
        state[2] = encodeInteger(writer, sourcesIndex, state[2]);
        state[3] = encodeInteger(writer, scopesIndex, state[3]);
    }
    if (callsite) {
        const { 0: sourcesIndex, 1: callLine, 2: callColumn } = range.callsite;
        if (sourcesIndex !== state[4]) {
            state[5] = 0;
            state[6] = 0;
        } else if (callLine !== state[5]) {
            state[6] = 0;
        }
        state[4] = encodeInteger(writer, sourcesIndex, state[4]);
        state[5] = encodeInteger(writer, callLine, state[5]);
        state[6] = encodeInteger(writer, callColumn, state[6]);
    }
    if (bindings) {
        for (const binding of bindings){
            if (binding.length > 1) encodeInteger(writer, -binding.length, 0);
            const expression = binding[0][0];
            encodeInteger(writer, expression, 0);
            let bindingStartLine = startLine;
            let bindingStartColumn = startColumn;
            for(let i = 1; i < binding.length; i++){
                const expRange = binding[i];
                bindingStartLine = encodeInteger(writer, expRange[1], bindingStartLine);
                bindingStartColumn = encodeInteger(writer, expRange[2], bindingStartColumn);
                encodeInteger(writer, expRange[0], 0);
            }
        }
    }
    for(index++; index < ranges.length;){
        const next = ranges[index];
        const { 0: l, 1: c } = next;
        if (l > endLine || l === endLine && c >= endColumn) {
            break;
        }
        index = _encodeGeneratedRanges(ranges, index, writer, state);
    }
    if (state[0] < endLine) {
        catchupLine(writer, state[0], endLine);
        state[0] = endLine;
        state[1] = 0;
    } else {
        writer.write(comma);
    }
    state[1] = encodeInteger(writer, endColumn, state[1]);
    return index;
}
function catchupLine(writer, lastLine, line) {
    do {
        writer.write(semicolon);
    }while (++lastLine < line)
}
// src/sourcemap-codec.ts
function decode(mappings) {
    const { length } = mappings;
    const reader = new StringReader(mappings);
    const decoded = [];
    let genColumn = 0;
    let sourcesIndex = 0;
    let sourceLine = 0;
    let sourceColumn = 0;
    let namesIndex = 0;
    do {
        const semi = reader.indexOf(";");
        const line = [];
        let sorted = true;
        let lastCol = 0;
        genColumn = 0;
        while(reader.pos < semi){
            let seg;
            genColumn = decodeInteger(reader, genColumn);
            if (genColumn < lastCol) sorted = false;
            lastCol = genColumn;
            if (hasMoreVlq(reader, semi)) {
                sourcesIndex = decodeInteger(reader, sourcesIndex);
                sourceLine = decodeInteger(reader, sourceLine);
                sourceColumn = decodeInteger(reader, sourceColumn);
                if (hasMoreVlq(reader, semi)) {
                    namesIndex = decodeInteger(reader, namesIndex);
                    seg = [
                        genColumn,
                        sourcesIndex,
                        sourceLine,
                        sourceColumn,
                        namesIndex
                    ];
                } else {
                    seg = [
                        genColumn,
                        sourcesIndex,
                        sourceLine,
                        sourceColumn
                    ];
                }
            } else {
                seg = [
                    genColumn
                ];
            }
            line.push(seg);
            reader.pos++;
        }
        if (!sorted) sort(line);
        decoded.push(line);
        reader.pos = semi + 1;
    }while (reader.pos <= length)
    return decoded;
}
function sort(line) {
    line.sort(sortComparator);
}
function sortComparator(a, b) {
    return a[0] - b[0];
}
function encode(decoded) {
    const writer = new StringWriter();
    let sourcesIndex = 0;
    let sourceLine = 0;
    let sourceColumn = 0;
    let namesIndex = 0;
    for(let i = 0; i < decoded.length; i++){
        const line = decoded[i];
        if (i > 0) writer.write(semicolon);
        if (line.length === 0) continue;
        let genColumn = 0;
        for(let j = 0; j < line.length; j++){
            const segment = line[j];
            if (j > 0) writer.write(comma);
            genColumn = encodeInteger(writer, segment[0], genColumn);
            if (segment.length === 1) continue;
            sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
            sourceLine = encodeInteger(writer, segment[2], sourceLine);
            sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
            if (segment.length === 4) continue;
            namesIndex = encodeInteger(writer, segment[4], namesIndex);
        }
    }
    return writer.flush();
}
;
 //# sourceMappingURL=sourcemap-codec.mjs.map
}),
"[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+resolve-uri@3.1.2/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = factory() : "TURBOPACK unreachable";
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function() {
    'use strict';
    // Matches the scheme of a URL, eg "http://"
    const schemeRegex = /^[\w+.-]+:\/\//;
    /**
     * Matches the parts of a URL:
     * 1. Scheme, including ":", guaranteed.
     * 2. User/password, including "@", optional.
     * 3. Host, guaranteed.
     * 4. Port, including ":", optional.
     * 5. Path, including "/", optional.
     * 6. Query, including "?", optional.
     * 7. Hash, including "#", optional.
     */ const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
    /**
     * File URLs are weird. They dont' need the regular `//` in the scheme, they may or may not start
     * with a leading `/`, they can have a domain (but only if they don't start with a Windows drive).
     *
     * 1. Host, optional.
     * 2. Path, which may include "/", guaranteed.
     * 3. Query, including "?", optional.
     * 4. Hash, including "#", optional.
     */ const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
    function isAbsoluteUrl(input) {
        return schemeRegex.test(input);
    }
    function isSchemeRelativeUrl(input) {
        return input.startsWith('//');
    }
    function isAbsolutePath(input) {
        return input.startsWith('/');
    }
    function isFileUrl(input) {
        return input.startsWith('file:');
    }
    function isRelative(input) {
        return /^[.?#]/.test(input);
    }
    function parseAbsoluteUrl(input) {
        const match = urlRegex.exec(input);
        return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
    }
    function parseFileUrl(input) {
        const match = fileRegex.exec(input);
        const path = match[2];
        return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
    }
    function makeUrl(scheme, user, host, port, path, query, hash) {
        return {
            scheme,
            user,
            host,
            port,
            path,
            query,
            hash,
            type: 7 /* Absolute */ 
        };
    }
    function parseUrl(input) {
        if (isSchemeRelativeUrl(input)) {
            const url = parseAbsoluteUrl('http:' + input);
            url.scheme = '';
            url.type = 6 /* SchemeRelative */ ;
            return url;
        }
        if (isAbsolutePath(input)) {
            const url = parseAbsoluteUrl('http://foo.com' + input);
            url.scheme = '';
            url.host = '';
            url.type = 5 /* AbsolutePath */ ;
            return url;
        }
        if (isFileUrl(input)) return parseFileUrl(input);
        if (isAbsoluteUrl(input)) return parseAbsoluteUrl(input);
        const url = parseAbsoluteUrl('http://foo.com/' + input);
        url.scheme = '';
        url.host = '';
        url.type = input ? input.startsWith('?') ? 3 /* Query */  : input.startsWith('#') ? 2 /* Hash */  : 4 /* RelativePath */  : 1 /* Empty */ ;
        return url;
    }
    function stripPathFilename(path) {
        // If a path ends with a parent directory "..", then it's a relative path with excess parent
        // paths. It's not a file, so we can't strip it.
        if (path.endsWith('/..')) return path;
        const index = path.lastIndexOf('/');
        return path.slice(0, index + 1);
    }
    function mergePaths(url, base) {
        normalizePath(base, base.type);
        // If the path is just a "/", then it was an empty path to begin with (remember, we're a relative
        // path).
        if (url.path === '/') {
            url.path = base.path;
        } else {
            // Resolution happens relative to the base path's directory, not the file.
            url.path = stripPathFilename(base.path) + url.path;
        }
    }
    /**
     * The path can have empty directories "//", unneeded parents "foo/..", or current directory
     * "foo/.". We need to normalize to a standard representation.
     */ function normalizePath(url, type) {
        const rel = type <= 4 /* RelativePath */ ;
        const pieces = url.path.split('/');
        // We need to preserve the first piece always, so that we output a leading slash. The item at
        // pieces[0] is an empty string.
        let pointer = 1;
        // Positive is the number of real directories we've output, used for popping a parent directory.
        // Eg, "foo/bar/.." will have a positive 2, and we can decrement to be left with just "foo".
        let positive = 0;
        // We need to keep a trailing slash if we encounter an empty directory (eg, splitting "foo/" will
        // generate `["foo", ""]` pieces). And, if we pop a parent directory. But once we encounter a
        // real directory, we won't need to append, unless the other conditions happen again.
        let addTrailingSlash = false;
        for(let i = 1; i < pieces.length; i++){
            const piece = pieces[i];
            // An empty directory, could be a trailing slash, or just a double "//" in the path.
            if (!piece) {
                addTrailingSlash = true;
                continue;
            }
            // If we encounter a real directory, then we don't need to append anymore.
            addTrailingSlash = false;
            // A current directory, which we can always drop.
            if (piece === '.') continue;
            // A parent directory, we need to see if there are any real directories we can pop. Else, we
            // have an excess of parents, and we'll need to keep the "..".
            if (piece === '..') {
                if (positive) {
                    addTrailingSlash = true;
                    positive--;
                    pointer--;
                } else if (rel) {
                    // If we're in a relativePath, then we need to keep the excess parents. Else, in an absolute
                    // URL, protocol relative URL, or an absolute path, we don't need to keep excess.
                    pieces[pointer++] = piece;
                }
                continue;
            }
            // We've encountered a real directory. Move it to the next insertion pointer, which accounts for
            // any popped or dropped directories.
            pieces[pointer++] = piece;
            positive++;
        }
        let path = '';
        for(let i = 1; i < pointer; i++){
            path += '/' + pieces[i];
        }
        if (!path || addTrailingSlash && !path.endsWith('/..')) {
            path += '/';
        }
        url.path = path;
    }
    /**
     * Attempts to resolve `input` URL/path relative to `base`.
     */ function resolve(input, base) {
        if (!input && !base) return '';
        const url = parseUrl(input);
        let inputType = url.type;
        if (base && inputType !== 7 /* Absolute */ ) {
            const baseUrl = parseUrl(base);
            const baseType = baseUrl.type;
            switch(inputType){
                case 1 /* Empty */ :
                    url.hash = baseUrl.hash;
                // fall through
                case 2 /* Hash */ :
                    url.query = baseUrl.query;
                // fall through
                case 3 /* Query */ :
                case 4 /* RelativePath */ :
                    mergePaths(url, baseUrl);
                // fall through
                case 5 /* AbsolutePath */ :
                    // The host, user, and port are joined, you can't copy one without the others.
                    url.user = baseUrl.user;
                    url.host = baseUrl.host;
                    url.port = baseUrl.port;
                // fall through
                case 6 /* SchemeRelative */ :
                    // The input doesn't have a schema at least, so we need to copy at least that over.
                    url.scheme = baseUrl.scheme;
            }
            if (baseType > inputType) inputType = baseType;
        }
        normalizePath(url, inputType);
        const queryHash = url.query + url.hash;
        switch(inputType){
            // This is impossible, because of the empty checks at the start of the function.
            // case UrlType.Empty:
            case 2 /* Hash */ :
            case 3 /* Query */ :
                return queryHash;
            case 4 /* RelativePath */ :
                {
                    // The first char is always a "/", and we need it to be relative.
                    const path = url.path.slice(1);
                    if (!path) return queryHash || '.';
                    if (isRelative(base || input) && !isRelative(path)) {
                        // If base started with a leading ".", or there is no base and input started with a ".",
                        // then we need to ensure that the relative path starts with a ".". We don't know if
                        // relative starts with a "..", though, so check before prepending.
                        return './' + path + queryHash;
                    }
                    return path + queryHash;
                }
            case 5 /* AbsolutePath */ :
                return url.path + queryHash;
            default:
                return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
        }
    }
    return resolve;
}); //# sourceMappingURL=resolve-uri.umd.js.map
}),
"[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+trace-mapping@0.3.31/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/trace-mapping.ts
__turbopack_context__.s([
    "AnyMap",
    ()=>FlattenMap,
    "FlattenMap",
    ()=>FlattenMap,
    "GREATEST_LOWER_BOUND",
    ()=>GREATEST_LOWER_BOUND,
    "LEAST_UPPER_BOUND",
    ()=>LEAST_UPPER_BOUND,
    "TraceMap",
    ()=>TraceMap,
    "allGeneratedPositionsFor",
    ()=>allGeneratedPositionsFor,
    "decodedMap",
    ()=>decodedMap,
    "decodedMappings",
    ()=>decodedMappings,
    "eachMapping",
    ()=>eachMapping,
    "encodedMap",
    ()=>encodedMap,
    "encodedMappings",
    ()=>encodedMappings,
    "generatedPositionFor",
    ()=>generatedPositionFor,
    "isIgnored",
    ()=>isIgnored,
    "originalPositionFor",
    ()=>originalPositionFor,
    "presortedDecodedMap",
    ()=>presortedDecodedMap,
    "sourceContentFor",
    ()=>sourceContentFor,
    "traceSegment",
    ()=>traceSegment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$sourcemap$2d$codec$40$1$2e$5$2e$5$2f$node_modules$2f40$jridgewell$2f$sourcemap$2d$codec$2f$dist$2f$sourcemap$2d$codec$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+sourcemap-codec@1.5.5/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs [app-client] (ecmascript)");
// src/resolve.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$resolve$2d$uri$40$3$2e$1$2e$2$2f$node_modules$2f40$jridgewell$2f$resolve$2d$uri$2f$dist$2f$resolve$2d$uri$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+resolve-uri@3.1.2/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.umd.js [app-client] (ecmascript)");
;
;
// src/strip-filename.ts
function stripFilename(path) {
    if (!path) return "";
    const index = path.lastIndexOf("/");
    return path.slice(0, index + 1);
}
// src/resolve.ts
function resolver(mapUrl, sourceRoot) {
    const from = stripFilename(mapUrl);
    const prefix = sourceRoot ? sourceRoot + "/" : "";
    return (source)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$resolve$2d$uri$40$3$2e$1$2e$2$2f$node_modules$2f40$jridgewell$2f$resolve$2d$uri$2f$dist$2f$resolve$2d$uri$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prefix + (source || ""), from);
}
// src/sourcemap-segment.ts
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
var REV_GENERATED_LINE = 1;
var REV_GENERATED_COLUMN = 2;
// src/sort.ts
function maybeSort(mappings, owned) {
    const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
    if (unsortedIndex === mappings.length) return mappings;
    if (!owned) mappings = mappings.slice();
    for(let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)){
        mappings[i] = sortSegments(mappings[i], owned);
    }
    return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
    for(let i = start; i < mappings.length; i++){
        if (!isSorted(mappings[i])) return i;
    }
    return mappings.length;
}
function isSorted(line) {
    for(let j = 1; j < line.length; j++){
        if (line[j][COLUMN] < line[j - 1][COLUMN]) {
            return false;
        }
    }
    return true;
}
function sortSegments(line, owned) {
    if (!owned) line = line.slice();
    return line.sort(sortComparator);
}
function sortComparator(a, b) {
    return a[COLUMN] - b[COLUMN];
}
// src/by-source.ts
function buildBySources(decoded, memos) {
    const sources = memos.map(()=>[]);
    for(let i = 0; i < decoded.length; i++){
        const line = decoded[i];
        for(let j = 0; j < line.length; j++){
            const seg = line[j];
            if (seg.length === 1) continue;
            const sourceIndex2 = seg[SOURCES_INDEX];
            const sourceLine = seg[SOURCE_LINE];
            const sourceColumn = seg[SOURCE_COLUMN];
            const source = sources[sourceIndex2];
            const segs = source[sourceLine] || (source[sourceLine] = []);
            segs.push([
                sourceColumn,
                i,
                seg[COLUMN]
            ]);
        }
    }
    for(let i = 0; i < sources.length; i++){
        const source = sources[i];
        for(let j = 0; j < source.length; j++){
            const line = source[j];
            if (line) line.sort(sortComparator);
        }
    }
    return sources;
}
// src/binary-search.ts
var found = false;
function binarySearch(haystack, needle, low, high) {
    while(low <= high){
        const mid = low + (high - low >> 1);
        const cmp = haystack[mid][COLUMN] - needle;
        if (cmp === 0) {
            found = true;
            return mid;
        }
        if (cmp < 0) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    found = false;
    return low - 1;
}
function upperBound(haystack, needle, index) {
    for(let i = index + 1; i < haystack.length; index = i++){
        if (haystack[i][COLUMN] !== needle) break;
    }
    return index;
}
function lowerBound(haystack, needle, index) {
    for(let i = index - 1; i >= 0; index = i--){
        if (haystack[i][COLUMN] !== needle) break;
    }
    return index;
}
function memoizedState() {
    return {
        lastKey: -1,
        lastNeedle: -1,
        lastIndex: -1
    };
}
function memoizedBinarySearch(haystack, needle, state, key) {
    const { lastKey, lastNeedle, lastIndex } = state;
    let low = 0;
    let high = haystack.length - 1;
    if (key === lastKey) {
        if (needle === lastNeedle) {
            found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
            return lastIndex;
        }
        if (needle >= lastNeedle) {
            low = lastIndex === -1 ? 0 : lastIndex;
        } else {
            high = lastIndex;
        }
    }
    state.lastKey = key;
    state.lastNeedle = needle;
    return state.lastIndex = binarySearch(haystack, needle, low, high);
}
// src/types.ts
function parse(map) {
    return typeof map === "string" ? JSON.parse(map) : map;
}
// src/flatten-map.ts
var FlattenMap = function(map, mapUrl) {
    const parsed = parse(map);
    if (!("sections" in parsed)) {
        return new TraceMap(parsed, mapUrl);
    }
    const mappings = [];
    const sources = [];
    const sourcesContent = [];
    const names = [];
    const ignoreList = [];
    recurse(parsed, mapUrl, mappings, sources, sourcesContent, names, ignoreList, 0, 0, Infinity, Infinity);
    const joined = {
        version: 3,
        file: parsed.file,
        names,
        sources,
        sourcesContent,
        mappings,
        ignoreList
    };
    return presortedDecodedMap(joined);
};
function recurse(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
    const { sections } = input;
    for(let i = 0; i < sections.length; i++){
        const { map, offset } = sections[i];
        let sl = stopLine;
        let sc = stopColumn;
        if (i + 1 < sections.length) {
            const nextOffset = sections[i + 1].offset;
            sl = Math.min(stopLine, lineOffset + nextOffset.line);
            if (sl === stopLine) {
                sc = Math.min(stopColumn, columnOffset + nextOffset.column);
            } else if (sl < stopLine) {
                sc = columnOffset + nextOffset.column;
            }
        }
        addSection(map, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset + offset.line, columnOffset + offset.column, sl, sc);
    }
}
function addSection(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
    const parsed = parse(input);
    if ("sections" in parsed) return recurse(...arguments);
    const map = new TraceMap(parsed, mapUrl);
    const sourcesOffset = sources.length;
    const namesOffset = names.length;
    const decoded = decodedMappings(map);
    const { resolvedSources, sourcesContent: contents, ignoreList: ignores } = map;
    append(sources, resolvedSources);
    append(names, map.names);
    if (contents) append(sourcesContent, contents);
    else for(let i = 0; i < resolvedSources.length; i++)sourcesContent.push(null);
    if (ignores) for(let i = 0; i < ignores.length; i++)ignoreList.push(ignores[i] + sourcesOffset);
    for(let i = 0; i < decoded.length; i++){
        const lineI = lineOffset + i;
        if (lineI > stopLine) return;
        const out = getLine(mappings, lineI);
        const cOffset = i === 0 ? columnOffset : 0;
        const line = decoded[i];
        for(let j = 0; j < line.length; j++){
            const seg = line[j];
            const column = cOffset + seg[COLUMN];
            if (lineI === stopLine && column >= stopColumn) return;
            if (seg.length === 1) {
                out.push([
                    column
                ]);
                continue;
            }
            const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
            const sourceLine = seg[SOURCE_LINE];
            const sourceColumn = seg[SOURCE_COLUMN];
            out.push(seg.length === 4 ? [
                column,
                sourcesIndex,
                sourceLine,
                sourceColumn
            ] : [
                column,
                sourcesIndex,
                sourceLine,
                sourceColumn,
                namesOffset + seg[NAMES_INDEX]
            ]);
        }
    }
}
function append(arr, other) {
    for(let i = 0; i < other.length; i++)arr.push(other[i]);
}
function getLine(arr, index) {
    for(let i = arr.length; i <= index; i++)arr[i] = [];
    return arr[index];
}
// src/trace-mapping.ts
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var TraceMap = class {
    constructor(map, mapUrl){
        const isString = typeof map === "string";
        if (!isString && map._decodedMemo) return map;
        const parsed = parse(map);
        const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
        this.version = version;
        this.file = file;
        this.names = names || [];
        this.sourceRoot = sourceRoot;
        this.sources = sources;
        this.sourcesContent = sourcesContent;
        this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
        const resolve = resolver(mapUrl, sourceRoot);
        this.resolvedSources = sources.map(resolve);
        const { mappings } = parsed;
        if (typeof mappings === "string") {
            this._encoded = mappings;
            this._decoded = void 0;
        } else if (Array.isArray(mappings)) {
            this._encoded = void 0;
            this._decoded = maybeSort(mappings, isString);
        } else if (parsed.sections) {
            throw new Error(`TraceMap passed sectioned source map, please use FlattenMap export instead`);
        } else {
            throw new Error(`invalid source map: ${JSON.stringify(parsed)}`);
        }
        this._decodedMemo = memoizedState();
        this._bySources = void 0;
        this._bySourceMemos = void 0;
    }
};
function cast(map) {
    return map;
}
function encodedMappings(map) {
    var _a, _b;
    return (_b = (_a = cast(map))._encoded) != null ? _b : _a._encoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$sourcemap$2d$codec$40$1$2e$5$2e$5$2f$node_modules$2f40$jridgewell$2f$sourcemap$2d$codec$2f$dist$2f$sourcemap$2d$codec$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(cast(map)._decoded);
}
function decodedMappings(map) {
    var _a;
    return (_a = cast(map))._decoded || (_a._decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$sourcemap$2d$codec$40$1$2e$5$2e$5$2f$node_modules$2f40$jridgewell$2f$sourcemap$2d$codec$2f$dist$2f$sourcemap$2d$codec$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decode"])(cast(map)._encoded));
}
function traceSegment(map, line, column) {
    const decoded = decodedMappings(map);
    if (line >= decoded.length) return null;
    const segments = decoded[line];
    const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, GREATEST_LOWER_BOUND);
    return index === -1 ? null : segments[index];
}
function originalPositionFor(map, needle) {
    let { line, column, bias } = needle;
    line--;
    if (line < 0) throw new Error(LINE_GTR_ZERO);
    if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
    const decoded = decodedMappings(map);
    if (line >= decoded.length) return OMapping(null, null, null, null);
    const segments = decoded[line];
    const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
    if (index === -1) return OMapping(null, null, null, null);
    const segment = segments[index];
    if (segment.length === 1) return OMapping(null, null, null, null);
    const { names, resolvedSources } = map;
    return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
}
function generatedPositionFor(map, needle) {
    const { source, line, column, bias } = needle;
    return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
}
function allGeneratedPositionsFor(map, needle) {
    const { source, line, column, bias } = needle;
    return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
}
function eachMapping(map, cb) {
    const decoded = decodedMappings(map);
    const { names, resolvedSources } = map;
    for(let i = 0; i < decoded.length; i++){
        const line = decoded[i];
        for(let j = 0; j < line.length; j++){
            const seg = line[j];
            const generatedLine = i + 1;
            const generatedColumn = seg[0];
            let source = null;
            let originalLine = null;
            let originalColumn = null;
            let name = null;
            if (seg.length !== 1) {
                source = resolvedSources[seg[1]];
                originalLine = seg[2] + 1;
                originalColumn = seg[3];
            }
            if (seg.length === 5) name = names[seg[4]];
            cb({
                generatedLine,
                generatedColumn,
                source,
                originalLine,
                originalColumn,
                name
            });
        }
    }
}
function sourceIndex(map, source) {
    const { sources, resolvedSources } = map;
    let index = sources.indexOf(source);
    if (index === -1) index = resolvedSources.indexOf(source);
    return index;
}
function sourceContentFor(map, source) {
    const { sourcesContent } = map;
    if (sourcesContent == null) return null;
    const index = sourceIndex(map, source);
    return index === -1 ? null : sourcesContent[index];
}
function isIgnored(map, source) {
    const { ignoreList } = map;
    if (ignoreList == null) return false;
    const index = sourceIndex(map, source);
    return index === -1 ? false : ignoreList.includes(index);
}
function presortedDecodedMap(map, mapUrl) {
    const tracer = new TraceMap(clone(map, []), mapUrl);
    cast(tracer)._decoded = map.mappings;
    return tracer;
}
function decodedMap(map) {
    return clone(map, decodedMappings(map));
}
function encodedMap(map) {
    return clone(map, encodedMappings(map));
}
function clone(map, mappings) {
    return {
        version: map.version,
        file: map.file,
        names: map.names,
        sourceRoot: map.sourceRoot,
        sources: map.sources,
        sourcesContent: map.sourcesContent,
        mappings,
        ignoreList: map.ignoreList || map.x_google_ignoreList
    };
}
function OMapping(source, line, column, name) {
    return {
        source,
        line,
        column,
        name
    };
}
function GMapping(line, column) {
    return {
        line,
        column
    };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
    let index = memoizedBinarySearch(segments, column, memo, line);
    if (found) {
        index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
    } else if (bias === LEAST_UPPER_BOUND) index++;
    if (index === -1 || index === segments.length) return -1;
    return index;
}
function sliceGeneratedPositions(segments, memo, line, column, bias) {
    let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
    if (!found && bias === LEAST_UPPER_BOUND) min++;
    if (min === -1 || min === segments.length) return [];
    const matchedColumn = found ? column : segments[min][COLUMN];
    if (!found) min = lowerBound(segments, matchedColumn, min);
    const max = upperBound(segments, matchedColumn, min);
    const result = [];
    for(; min <= max; min++){
        const segment = segments[min];
        result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
    }
    return result;
}
function generatedPosition(map, source, line, column, bias, all) {
    var _a, _b;
    line--;
    if (line < 0) throw new Error(LINE_GTR_ZERO);
    if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
    const { sources, resolvedSources } = map;
    let sourceIndex2 = sources.indexOf(source);
    if (sourceIndex2 === -1) sourceIndex2 = resolvedSources.indexOf(source);
    if (sourceIndex2 === -1) return all ? [] : GMapping(null, null);
    const bySourceMemos = (_a = cast(map))._bySourceMemos || (_a._bySourceMemos = sources.map(memoizedState));
    const generated = (_b = cast(map))._bySources || (_b._bySources = buildBySources(decodedMappings(map), bySourceMemos));
    const segments = generated[sourceIndex2][line];
    if (segments == null) return all ? [] : GMapping(null, null);
    const memo = bySourceMemos[sourceIndex2];
    if (all) return sliceGeneratedPositions(segments, memo, line, column, bias);
    const index = traceSegmentInternal(segments, memo, line, column, bias);
    if (index === -1) return GMapping(null, null);
    const segment = segments[index];
    return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
}
;
 //# sourceMappingURL=trace-mapping.mjs.map
}),
"[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+gen-mapping@0.3.13/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/set-array.ts
__turbopack_context__.s([
    "GenMapping",
    ()=>GenMapping,
    "addMapping",
    ()=>addMapping,
    "addSegment",
    ()=>addSegment,
    "allMappings",
    ()=>allMappings,
    "fromMap",
    ()=>fromMap,
    "maybeAddMapping",
    ()=>maybeAddMapping,
    "maybeAddSegment",
    ()=>maybeAddSegment,
    "setIgnore",
    ()=>setIgnore,
    "setSourceContent",
    ()=>setSourceContent,
    "toDecodedMap",
    ()=>toDecodedMap,
    "toEncodedMap",
    ()=>toEncodedMap
]);
// src/gen-mapping.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$sourcemap$2d$codec$40$1$2e$5$2e$5$2f$node_modules$2f40$jridgewell$2f$sourcemap$2d$codec$2f$dist$2f$sourcemap$2d$codec$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+sourcemap-codec@1.5.5/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$trace$2d$mapping$40$0$2e$3$2e$31$2f$node_modules$2f40$jridgewell$2f$trace$2d$mapping$2f$dist$2f$trace$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/@jridgewell+trace-mapping@0.3.31/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.mjs [app-client] (ecmascript)");
var SetArray = class {
    constructor(){
        this._indexes = {
            __proto__: null
        };
        this.array = [];
    }
};
function cast(set) {
    return set;
}
function get(setarr, key) {
    return cast(setarr)._indexes[key];
}
function put(setarr, key) {
    const index = get(setarr, key);
    if (index !== void 0) return index;
    const { array, _indexes: indexes } = cast(setarr);
    const length = array.push(key);
    return indexes[key] = length - 1;
}
function remove(setarr, key) {
    const index = get(setarr, key);
    if (index === void 0) return;
    const { array, _indexes: indexes } = cast(setarr);
    for(let i = index + 1; i < array.length; i++){
        const k = array[i];
        array[i - 1] = k;
        indexes[k]--;
    }
    indexes[key] = void 0;
    array.pop();
}
;
;
// src/sourcemap-segment.ts
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
// src/gen-mapping.ts
var NO_NAME = -1;
var GenMapping = class {
    constructor({ file, sourceRoot } = {}){
        this._names = new SetArray();
        this._sources = new SetArray();
        this._sourcesContent = [];
        this._mappings = [];
        this.file = file;
        this.sourceRoot = sourceRoot;
        this._ignoreList = new SetArray();
    }
};
function cast2(map) {
    return map;
}
function addSegment(map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
    return addSegmentInternal(false, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
}
function addMapping(map, mapping) {
    return addMappingInternal(false, map, mapping);
}
var maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content)=>{
    return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
};
var maybeAddMapping = (map, mapping)=>{
    return addMappingInternal(true, map, mapping);
};
function setSourceContent(map, source, content) {
    const { _sources: sources, _sourcesContent: sourcesContent } = cast2(map);
    const index = put(sources, source);
    sourcesContent[index] = content;
}
function setIgnore(map, source, ignore = true) {
    const { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = cast2(map);
    const index = put(sources, source);
    if (index === sourcesContent.length) sourcesContent[index] = null;
    if (ignore) put(ignoreList, index);
    else remove(ignoreList, index);
}
function toDecodedMap(map) {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList } = cast2(map);
    removeEmptyFinalLines(mappings);
    return {
        version: 3,
        file: map.file || void 0,
        names: names.array,
        sourceRoot: map.sourceRoot || void 0,
        sources: sources.array,
        sourcesContent,
        mappings,
        // originalScopes,
        // generatedRanges,
        ignoreList: ignoreList.array
    };
}
function toEncodedMap(map) {
    const decoded = toDecodedMap(map);
    return Object.assign({}, decoded, {
        // originalScopes: decoded.originalScopes.map((os) => encodeOriginalScopes(os)),
        // generatedRanges: encodeGeneratedRanges(decoded.generatedRanges as GeneratedRange[]),
        mappings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$sourcemap$2d$codec$40$1$2e$5$2e$5$2f$node_modules$2f40$jridgewell$2f$sourcemap$2d$codec$2f$dist$2f$sourcemap$2d$codec$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"])(decoded.mappings)
    });
}
function fromMap(input) {
    const map = new __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$trace$2d$mapping$40$0$2e$3$2e$31$2f$node_modules$2f40$jridgewell$2f$trace$2d$mapping$2f$dist$2f$trace$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceMap"](input);
    const gen = new GenMapping({
        file: map.file,
        sourceRoot: map.sourceRoot
    });
    putAll(cast2(gen)._names, map.names);
    putAll(cast2(gen)._sources, map.sources);
    cast2(gen)._sourcesContent = map.sourcesContent || map.sources.map(()=>null);
    cast2(gen)._mappings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f40$jridgewell$2b$trace$2d$mapping$40$0$2e$3$2e$31$2f$node_modules$2f40$jridgewell$2f$trace$2d$mapping$2f$dist$2f$trace$2d$mapping$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodedMappings"])(map);
    if (map.ignoreList) putAll(cast2(gen)._ignoreList, map.ignoreList);
    return gen;
}
function allMappings(map) {
    const out = [];
    const { _mappings: mappings, _sources: sources, _names: names } = cast2(map);
    for(let i = 0; i < mappings.length; i++){
        const line = mappings[i];
        for(let j = 0; j < line.length; j++){
            const seg = line[j];
            const generated = {
                line: i + 1,
                column: seg[COLUMN]
            };
            let source = void 0;
            let original = void 0;
            let name = void 0;
            if (seg.length !== 1) {
                source = sources.array[seg[SOURCES_INDEX]];
                original = {
                    line: seg[SOURCE_LINE] + 1,
                    column: seg[SOURCE_COLUMN]
                };
                if (seg.length === 5) name = names.array[seg[NAMES_INDEX]];
            }
            out.push({
                generated,
                source,
                original,
                name
            });
        }
    }
    return out;
}
function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
    const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = cast2(map);
    const line = getIndex(mappings, genLine);
    const index = getColumnIndex(line, genColumn);
    if (!source) {
        if (skipable && skipSourceless(line, index)) return;
        return insert(line, index, [
            genColumn
        ]);
    }
    assert(sourceLine);
    assert(sourceColumn);
    const sourcesIndex = put(sources, source);
    const namesIndex = name ? put(names, name) : NO_NAME;
    if (sourcesIndex === sourcesContent.length) sourcesContent[sourcesIndex] = content != null ? content : null;
    if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
        return;
    }
    return insert(line, index, name ? [
        genColumn,
        sourcesIndex,
        sourceLine,
        sourceColumn,
        namesIndex
    ] : [
        genColumn,
        sourcesIndex,
        sourceLine,
        sourceColumn
    ]);
}
function assert(_val) {}
function getIndex(arr, index) {
    for(let i = arr.length; i <= index; i++){
        arr[i] = [];
    }
    return arr[index];
}
function getColumnIndex(line, genColumn) {
    let index = line.length;
    for(let i = index - 1; i >= 0; index = i--){
        const current = line[i];
        if (genColumn >= current[COLUMN]) break;
    }
    return index;
}
function insert(array, index, value) {
    for(let i = array.length; i > index; i--){
        array[i] = array[i - 1];
    }
    array[index] = value;
}
function removeEmptyFinalLines(mappings) {
    const { length } = mappings;
    let len = length;
    for(let i = len - 1; i >= 0; len = i, i--){
        if (mappings[i].length > 0) break;
    }
    if (len < length) mappings.length = len;
}
function putAll(setarr, array) {
    for(let i = 0; i < array.length; i++)put(setarr, array[i]);
}
function skipSourceless(line, index) {
    if (index === 0) return true;
    const prev = line[index - 1];
    return prev.length === 1;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
    if (index === 0) return false;
    const prev = line[index - 1];
    if (prev.length === 1) return false;
    return sourcesIndex === prev[SOURCES_INDEX] && sourceLine === prev[SOURCE_LINE] && sourceColumn === prev[SOURCE_COLUMN] && namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME);
}
function addMappingInternal(skipable, map, mapping) {
    const { generated, source, original, name, content } = mapping;
    if (!source) {
        return addSegmentInternal(skipable, map, generated.line - 1, generated.column, null, null, null, null, null);
    }
    assert(original);
    return addSegmentInternal(skipable, map, generated.line - 1, generated.column, source, original.line - 1, original.column, name, content);
}
;
 //# sourceMappingURL=gen-mapping.mjs.map
}),
"[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/util.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DetailContext = exports.NoopContext = exports.VError = void 0;
/**
 * Error thrown by validation. Besides an informative message, it includes the path to the
 * property which triggered the failure.
 */ var VError = function(_super) {
    __extends(VError, _super);
    function VError(path, message) {
        var _this = _super.call(this, message) || this;
        _this.path = path;
        // See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work for info about this workaround.
        Object.setPrototypeOf(_this, VError.prototype);
        return _this;
    }
    return VError;
}(Error);
exports.VError = VError;
/**
 * Fast implementation of IContext used for first-pass validation. If that fails, we can validate
 * using DetailContext to collect error messages. That's faster for the common case when messages
 * normally pass validation.
 */ var NoopContext = function() {
    function NoopContext() {}
    NoopContext.prototype.fail = function(relPath, message, score) {
        return false;
    };
    NoopContext.prototype.unionResolver = function() {
        return this;
    };
    NoopContext.prototype.createContext = function() {
        return this;
    };
    NoopContext.prototype.resolveUnion = function(ur) {};
    return NoopContext;
}();
exports.NoopContext = NoopContext;
/**
 * Complete implementation of IContext that collects meaningfull errors.
 */ var DetailContext = function() {
    function DetailContext() {
        // Stack of property names and associated messages for reporting helpful error messages.
        this._propNames = [
            ""
        ];
        this._messages = [
            null
        ];
        // Score is used to choose the best union member whose DetailContext to use for reporting.
        // Higher score means better match (or rather less severe mismatch).
        this._score = 0;
    }
    DetailContext.prototype.fail = function(relPath, message, score) {
        this._propNames.push(relPath);
        this._messages.push(message);
        this._score += score;
        return false;
    };
    DetailContext.prototype.unionResolver = function() {
        return new DetailUnionResolver();
    };
    DetailContext.prototype.resolveUnion = function(unionResolver) {
        var _a, _b;
        var u = unionResolver;
        var best = null;
        for(var _i = 0, _c = u.contexts; _i < _c.length; _i++){
            var ctx = _c[_i];
            if (!best || ctx._score >= best._score) {
                best = ctx;
            }
        }
        if (best && best._score > 0) {
            (_a = this._propNames).push.apply(_a, best._propNames);
            (_b = this._messages).push.apply(_b, best._messages);
        }
    };
    DetailContext.prototype.getError = function(path) {
        var msgParts = [];
        for(var i = this._propNames.length - 1; i >= 0; i--){
            var p = this._propNames[i];
            path += typeof p === "number" ? "[" + p + "]" : p ? "." + p : "";
            var m = this._messages[i];
            if (m) {
                msgParts.push(path + " " + m);
            }
        }
        return new VError(path, msgParts.join("; "));
    };
    DetailContext.prototype.getErrorDetail = function(path) {
        var details = [];
        for(var i = this._propNames.length - 1; i >= 0; i--){
            var p = this._propNames[i];
            path += typeof p === "number" ? "[" + p + "]" : p ? "." + p : "";
            var message = this._messages[i];
            if (message) {
                details.push({
                    path: path,
                    message: message
                });
            }
        }
        var detail = null;
        for(var i = details.length - 1; i >= 0; i--){
            if (detail) {
                details[i].nested = [
                    detail
                ];
            }
            detail = details[i];
        }
        return detail;
    };
    return DetailContext;
}();
exports.DetailContext = DetailContext;
var DetailUnionResolver = function() {
    function DetailUnionResolver() {
        this.contexts = [];
    }
    DetailUnionResolver.prototype.createContext = function() {
        var ctx = new DetailContext();
        this.contexts.push(ctx);
        return ctx;
    };
    return DetailUnionResolver;
}();
}),
"[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/types.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/altoque-pwa/node_modules/.pnpm/next@16.0.1_@babel+core@7.2_048eab391ea2e03c70ee64ac0670005b/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
"use strict";
/**
 * This module defines nodes used to define types and validations for objects and interfaces.
 */ // tslint:disable:no-shadowed-variable prefer-for-of
var __extends = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.basicTypes = exports.BasicType = exports.TParamList = exports.TParam = exports.param = exports.TFunc = exports.func = exports.TProp = exports.TOptional = exports.opt = exports.TIface = exports.iface = exports.TEnumLiteral = exports.enumlit = exports.TEnumType = exports.enumtype = exports.TIntersection = exports.intersection = exports.TUnion = exports.union = exports.TTuple = exports.tuple = exports.TArray = exports.array = exports.TLiteral = exports.lit = exports.TName = exports.name = exports.TType = void 0;
var util_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/util.js [app-client] (ecmascript)");
/** Node that represents a type. */ var TType = function() {
    function TType() {}
    return TType;
}();
exports.TType = TType;
/** Parses a type spec into a TType node. */ function parseSpec(typeSpec) {
    return typeof typeSpec === "string" ? name(typeSpec) : typeSpec;
}
function getNamedType(suite, name) {
    var ttype = suite[name];
    if (!ttype) {
        throw new Error("Unknown type " + name);
    }
    return ttype;
}
/**
 * Defines a type name, either built-in, or defined in this suite. It can typically be included in
 * the specs as just a plain string.
 */ function name(value) {
    return new TName(value);
}
exports.name = name;
var TName = function(_super) {
    __extends(TName, _super);
    function TName(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this._failMsg = "is not a " + name;
        return _this;
    }
    TName.prototype.getChecker = function(suite, strict, allowedProps) {
        var _this = this;
        var ttype = getNamedType(suite, this.name);
        var checker = ttype.getChecker(suite, strict, allowedProps);
        if (ttype instanceof BasicType || ttype instanceof TName) {
            return checker;
        }
        // For complex types, add an additional "is not a <Type>" message on failure.
        return function(value, ctx) {
            return checker(value, ctx) ? true : ctx.fail(null, _this._failMsg, 0);
        };
    };
    return TName;
}(TType);
exports.TName = TName;
/**
 * Defines a literal value, e.g. lit('hello') or lit(123).
 */ function lit(value) {
    return new TLiteral(value);
}
exports.lit = lit;
var TLiteral = function(_super) {
    __extends(TLiteral, _super);
    function TLiteral(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.name = JSON.stringify(value);
        _this._failMsg = "is not " + _this.name;
        return _this;
    }
    TLiteral.prototype.getChecker = function(suite, strict) {
        var _this = this;
        return function(value, ctx) {
            return value === _this.value ? true : ctx.fail(null, _this._failMsg, -1);
        };
    };
    return TLiteral;
}(TType);
exports.TLiteral = TLiteral;
/**
 * Defines an array type, e.g. array('number').
 */ function array(typeSpec) {
    return new TArray(parseSpec(typeSpec));
}
exports.array = array;
var TArray = function(_super) {
    __extends(TArray, _super);
    function TArray(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TArray.prototype.getChecker = function(suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function(value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for(var i = 0; i < value.length; i++){
                var ok = itemChecker(value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
    };
    return TArray;
}(TType);
exports.TArray = TArray;
/**
 * Defines a tuple type, e.g. tuple('string', 'number').
 */ function tuple() {
    var typeSpec = [];
    for(var _i = 0; _i < arguments.length; _i++){
        typeSpec[_i] = arguments[_i];
    }
    return new TTuple(typeSpec.map(function(t) {
        return parseSpec(t);
    }));
}
exports.tuple = tuple;
var TTuple = function(_super) {
    __extends(TTuple, _super);
    function TTuple(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TTuple.prototype.getChecker = function(suite, strict) {
        var itemCheckers = this.ttypes.map(function(t) {
            return t.getChecker(suite, strict);
        });
        var checker = function(value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for(var i = 0; i < itemCheckers.length; i++){
                var ok = itemCheckers[i](value[i], ctx);
                if (!ok) {
                    return ctx.fail(i, null, 1);
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function(value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true : ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TTuple;
}(TType);
exports.TTuple = TTuple;
/**
 * Defines a union type, e.g. union('number', 'null').
 */ function union() {
    var typeSpec = [];
    for(var _i = 0; _i < arguments.length; _i++){
        typeSpec[_i] = arguments[_i];
    }
    return new TUnion(typeSpec.map(function(t) {
        return parseSpec(t);
    }));
}
exports.union = union;
var TUnion = function(_super) {
    __extends(TUnion, _super);
    function TUnion(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        var names = ttypes.map(function(t) {
            return t instanceof TName || t instanceof TLiteral ? t.name : null;
        }).filter(function(n) {
            return n;
        });
        var otherTypes = ttypes.length - names.length;
        if (names.length) {
            if (otherTypes > 0) {
                names.push(otherTypes + " more");
            }
            _this._failMsg = "is none of " + names.join(", ");
        } else {
            _this._failMsg = "is none of " + otherTypes + " types";
        }
        return _this;
    }
    TUnion.prototype.getChecker = function(suite, strict) {
        var _this = this;
        var itemCheckers = this.ttypes.map(function(t) {
            return t.getChecker(suite, strict);
        });
        return function(value, ctx) {
            var ur = ctx.unionResolver();
            for(var i = 0; i < itemCheckers.length; i++){
                var ok = itemCheckers[i](value, ur.createContext());
                if (ok) {
                    return true;
                }
            }
            ctx.resolveUnion(ur);
            return ctx.fail(null, _this._failMsg, 0);
        };
    };
    return TUnion;
}(TType);
exports.TUnion = TUnion;
/**
 * Defines an intersection type, e.g. intersection('number', 'null').
 */ function intersection() {
    var typeSpec = [];
    for(var _i = 0; _i < arguments.length; _i++){
        typeSpec[_i] = arguments[_i];
    }
    return new TIntersection(typeSpec.map(function(t) {
        return parseSpec(t);
    }));
}
exports.intersection = intersection;
var TIntersection = function(_super) {
    __extends(TIntersection, _super);
    function TIntersection(ttypes) {
        var _this = _super.call(this) || this;
        _this.ttypes = ttypes;
        return _this;
    }
    TIntersection.prototype.getChecker = function(suite, strict) {
        var allowedProps = new Set();
        var itemCheckers = this.ttypes.map(function(t) {
            return t.getChecker(suite, strict, allowedProps);
        });
        return function(value, ctx) {
            var ok = itemCheckers.every(function(checker) {
                return checker(value, ctx);
            });
            if (ok) {
                return true;
            }
            return ctx.fail(null, null, 0);
        };
    };
    return TIntersection;
}(TType);
exports.TIntersection = TIntersection;
/**
 * Defines an enum type, e.g. enum({'A': 1, 'B': 2}).
 */ function enumtype(values) {
    return new TEnumType(values);
}
exports.enumtype = enumtype;
var TEnumType = function(_super) {
    __extends(TEnumType, _super);
    function TEnumType(members) {
        var _this = _super.call(this) || this;
        _this.members = members;
        _this.validValues = new Set();
        _this._failMsg = "is not a valid enum value";
        _this.validValues = new Set(Object.keys(members).map(function(name) {
            return members[name];
        }));
        return _this;
    }
    TEnumType.prototype.getChecker = function(suite, strict) {
        var _this = this;
        return function(value, ctx) {
            return _this.validValues.has(value) ? true : ctx.fail(null, _this._failMsg, 0);
        };
    };
    return TEnumType;
}(TType);
exports.TEnumType = TEnumType;
/**
 * Defines a literal enum value, such as Direction.Up, specified as enumlit("Direction", "Up").
 */ function enumlit(name, prop) {
    return new TEnumLiteral(name, prop);
}
exports.enumlit = enumlit;
var TEnumLiteral = function(_super) {
    __extends(TEnumLiteral, _super);
    function TEnumLiteral(enumName, prop) {
        var _this = _super.call(this) || this;
        _this.enumName = enumName;
        _this.prop = prop;
        _this._failMsg = "is not " + enumName + "." + prop;
        return _this;
    }
    TEnumLiteral.prototype.getChecker = function(suite, strict) {
        var _this = this;
        var ttype = getNamedType(suite, this.enumName);
        if (!(ttype instanceof TEnumType)) {
            throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
        }
        var val = ttype.members[this.prop];
        if (!ttype.members.hasOwnProperty(this.prop)) {
            throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
        }
        return function(value, ctx) {
            return value === val ? true : ctx.fail(null, _this._failMsg, -1);
        };
    };
    return TEnumLiteral;
}(TType);
exports.TEnumLiteral = TEnumLiteral;
function makeIfaceProps(props) {
    return Object.keys(props).map(function(name) {
        return makeIfaceProp(name, props[name]);
    });
}
function makeIfaceProp(name, prop) {
    return prop instanceof TOptional ? new TProp(name, prop.ttype, true) : new TProp(name, parseSpec(prop), false);
}
/**
 * Defines an interface. The first argument is an array of interfaces that it extends, and the
 * second is an array of properties.
 */ function iface(bases, props) {
    return new TIface(bases, makeIfaceProps(props));
}
exports.iface = iface;
var TIface = function(_super) {
    __extends(TIface, _super);
    function TIface(bases, props) {
        var _this = _super.call(this) || this;
        _this.bases = bases;
        _this.props = props;
        _this.propSet = new Set(props.map(function(p) {
            return p.name;
        }));
        return _this;
    }
    TIface.prototype.getChecker = function(suite, strict, allowedProps) {
        var _this = this;
        var baseCheckers = this.bases.map(function(b) {
            return getNamedType(suite, b).getChecker(suite, strict);
        });
        var propCheckers = this.props.map(function(prop) {
            return prop.ttype.getChecker(suite, strict);
        });
        var testCtx = new util_1.NoopContext();
        // Consider a prop required if it's not optional AND does not allow for undefined as a value.
        var isPropRequired = this.props.map(function(prop, i) {
            return !prop.isOpt && !propCheckers[i](undefined, testCtx);
        });
        var checker = function(value, ctx) {
            if (typeof value !== "object" || value === null) {
                return ctx.fail(null, "is not an object", 0);
            }
            for(var i = 0; i < baseCheckers.length; i++){
                if (!baseCheckers[i](value, ctx)) {
                    return false;
                }
            }
            for(var i = 0; i < propCheckers.length; i++){
                var name_1 = _this.props[i].name;
                var v = value[name_1];
                if (v === undefined) {
                    if (isPropRequired[i]) {
                        return ctx.fail(name_1, "is missing", 1);
                    }
                } else {
                    var ok = propCheckers[i](v, ctx);
                    if (!ok) {
                        return ctx.fail(name_1, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        var propSet = this.propSet;
        if (allowedProps) {
            this.propSet.forEach(function(prop) {
                return allowedProps.add(prop);
            });
            propSet = allowedProps;
        }
        // In strict mode, check also for unknown enumerable properties.
        return function(value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            for(var prop in value){
                if (!propSet.has(prop)) {
                    return ctx.fail(prop, "is extraneous", 2);
                }
            }
            return true;
        };
    };
    return TIface;
}(TType);
exports.TIface = TIface;
/**
 * Defines an optional property on an interface.
 */ function opt(typeSpec) {
    return new TOptional(parseSpec(typeSpec));
}
exports.opt = opt;
var TOptional = function(_super) {
    __extends(TOptional, _super);
    function TOptional(ttype) {
        var _this = _super.call(this) || this;
        _this.ttype = ttype;
        return _this;
    }
    TOptional.prototype.getChecker = function(suite, strict) {
        var itemChecker = this.ttype.getChecker(suite, strict);
        return function(value, ctx) {
            return value === undefined || itemChecker(value, ctx);
        };
    };
    return TOptional;
}(TType);
exports.TOptional = TOptional;
/**
 * Defines a property in an interface.
 */ var TProp = function() {
    function TProp(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TProp;
}();
exports.TProp = TProp;
/**
 * Defines a function. The first argument declares the function's return type, the rest declare
 * its parameters.
 */ function func(resultSpec) {
    var params = [];
    for(var _i = 1; _i < arguments.length; _i++){
        params[_i - 1] = arguments[_i];
    }
    return new TFunc(new TParamList(params), parseSpec(resultSpec));
}
exports.func = func;
var TFunc = function(_super) {
    __extends(TFunc, _super);
    function TFunc(paramList, result) {
        var _this = _super.call(this) || this;
        _this.paramList = paramList;
        _this.result = result;
        return _this;
    }
    TFunc.prototype.getChecker = function(suite, strict) {
        return function(value, ctx) {
            return typeof value === "function" ? true : ctx.fail(null, "is not a function", 0);
        };
    };
    return TFunc;
}(TType);
exports.TFunc = TFunc;
/**
 * Defines a function parameter.
 */ function param(name, typeSpec, isOpt) {
    return new TParam(name, parseSpec(typeSpec), Boolean(isOpt));
}
exports.param = param;
var TParam = function() {
    function TParam(name, ttype, isOpt) {
        this.name = name;
        this.ttype = ttype;
        this.isOpt = isOpt;
    }
    return TParam;
}();
exports.TParam = TParam;
/**
 * Defines a function parameter list.
 */ var TParamList = function(_super) {
    __extends(TParamList, _super);
    function TParamList(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        return _this;
    }
    TParamList.prototype.getChecker = function(suite, strict) {
        var _this = this;
        var itemCheckers = this.params.map(function(t) {
            return t.ttype.getChecker(suite, strict);
        });
        var testCtx = new util_1.NoopContext();
        var isParamRequired = this.params.map(function(param, i) {
            return !param.isOpt && !itemCheckers[i](undefined, testCtx);
        });
        var checker = function(value, ctx) {
            if (!Array.isArray(value)) {
                return ctx.fail(null, "is not an array", 0);
            }
            for(var i = 0; i < itemCheckers.length; i++){
                var p = _this.params[i];
                if (value[i] === undefined) {
                    if (isParamRequired[i]) {
                        return ctx.fail(p.name, "is missing", 1);
                    }
                } else {
                    var ok = itemCheckers[i](value[i], ctx);
                    if (!ok) {
                        return ctx.fail(p.name, null, 1);
                    }
                }
            }
            return true;
        };
        if (!strict) {
            return checker;
        }
        return function(value, ctx) {
            if (!checker(value, ctx)) {
                return false;
            }
            return value.length <= itemCheckers.length ? true : ctx.fail(itemCheckers.length, "is extraneous", 2);
        };
    };
    return TParamList;
}(TType);
exports.TParamList = TParamList;
/**
 * Single TType implementation for all basic built-in types.
 */ var BasicType = function(_super) {
    __extends(BasicType, _super);
    function BasicType(validator, message) {
        var _this = _super.call(this) || this;
        _this.validator = validator;
        _this.message = message;
        return _this;
    }
    BasicType.prototype.getChecker = function(suite, strict) {
        var _this = this;
        return function(value, ctx) {
            return _this.validator(value) ? true : ctx.fail(null, _this.message, 0);
        };
    };
    return BasicType;
}(TType);
exports.BasicType = BasicType;
/**
 * Defines the suite of basic types.
 */ exports.basicTypes = {
    any: new BasicType(function(v) {
        return true;
    }, "is invalid"),
    number: new BasicType(function(v) {
        return typeof v === "number";
    }, "is not a number"),
    object: new BasicType(function(v) {
        return typeof v === "object" && v;
    }, "is not an object"),
    boolean: new BasicType(function(v) {
        return typeof v === "boolean";
    }, "is not a boolean"),
    string: new BasicType(function(v) {
        return typeof v === "string";
    }, "is not a string"),
    symbol: new BasicType(function(v) {
        return typeof v === "symbol";
    }, "is not a symbol"),
    void: new BasicType(function(v) {
        return v == null;
    }, "is not void"),
    undefined: new BasicType(function(v) {
        return v === undefined;
    }, "is not undefined"),
    null: new BasicType(function(v) {
        return v === null;
    }, "is not null"),
    never: new BasicType(function(v) {
        return false;
    }, "is unexpected"),
    Date: new BasicType(getIsNativeChecker("[object Date]"), "is not a Date"),
    RegExp: new BasicType(getIsNativeChecker("[object RegExp]"), "is not a RegExp")
};
// This approach for checking native object types mirrors that of lodash. Its advantage over
// `isinstance` is that it can still return true for native objects created in different JS
// execution environments.
var nativeToString = Object.prototype.toString;
function getIsNativeChecker(tag) {
    return function(v) {
        return typeof v === "object" && v && nativeToString.call(v) === tag;
    };
}
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"] !== "undefined") {
    exports.basicTypes.Buffer = new BasicType(function(v) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$altoque$2d$pwa$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$2_048eab391ea2e03c70ee64ac0670005b$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].isBuffer(v);
    }, "is not a Buffer");
}
var _loop_1 = function(array_1) {
    exports.basicTypes[array_1.name] = new BasicType(function(v) {
        return v instanceof array_1;
    }, "is not a " + array_1.name);
};
// Support typed arrays of various flavors
for(var _i = 0, _a = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    ArrayBuffer
]; _i < _a.length; _i++){
    var array_1 = _a[_i];
    _loop_1(array_1);
}
}),
"[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __spreadArrays = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checker = exports.createCheckers = void 0;
var types_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/types.js [app-client] (ecmascript)");
var util_1 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/util.js [app-client] (ecmascript)");
/**
 * Export functions used to define interfaces.
 */ var types_2 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/types.js [app-client] (ecmascript)");
Object.defineProperty(exports, "TArray", {
    enumerable: true,
    get: function() {
        return types_2.TArray;
    }
});
Object.defineProperty(exports, "TEnumType", {
    enumerable: true,
    get: function() {
        return types_2.TEnumType;
    }
});
Object.defineProperty(exports, "TEnumLiteral", {
    enumerable: true,
    get: function() {
        return types_2.TEnumLiteral;
    }
});
Object.defineProperty(exports, "TFunc", {
    enumerable: true,
    get: function() {
        return types_2.TFunc;
    }
});
Object.defineProperty(exports, "TIface", {
    enumerable: true,
    get: function() {
        return types_2.TIface;
    }
});
Object.defineProperty(exports, "TLiteral", {
    enumerable: true,
    get: function() {
        return types_2.TLiteral;
    }
});
Object.defineProperty(exports, "TName", {
    enumerable: true,
    get: function() {
        return types_2.TName;
    }
});
Object.defineProperty(exports, "TOptional", {
    enumerable: true,
    get: function() {
        return types_2.TOptional;
    }
});
Object.defineProperty(exports, "TParam", {
    enumerable: true,
    get: function() {
        return types_2.TParam;
    }
});
Object.defineProperty(exports, "TParamList", {
    enumerable: true,
    get: function() {
        return types_2.TParamList;
    }
});
Object.defineProperty(exports, "TProp", {
    enumerable: true,
    get: function() {
        return types_2.TProp;
    }
});
Object.defineProperty(exports, "TTuple", {
    enumerable: true,
    get: function() {
        return types_2.TTuple;
    }
});
Object.defineProperty(exports, "TType", {
    enumerable: true,
    get: function() {
        return types_2.TType;
    }
});
Object.defineProperty(exports, "TUnion", {
    enumerable: true,
    get: function() {
        return types_2.TUnion;
    }
});
Object.defineProperty(exports, "TIntersection", {
    enumerable: true,
    get: function() {
        return types_2.TIntersection;
    }
});
Object.defineProperty(exports, "array", {
    enumerable: true,
    get: function() {
        return types_2.array;
    }
});
Object.defineProperty(exports, "enumlit", {
    enumerable: true,
    get: function() {
        return types_2.enumlit;
    }
});
Object.defineProperty(exports, "enumtype", {
    enumerable: true,
    get: function() {
        return types_2.enumtype;
    }
});
Object.defineProperty(exports, "func", {
    enumerable: true,
    get: function() {
        return types_2.func;
    }
});
Object.defineProperty(exports, "iface", {
    enumerable: true,
    get: function() {
        return types_2.iface;
    }
});
Object.defineProperty(exports, "lit", {
    enumerable: true,
    get: function() {
        return types_2.lit;
    }
});
Object.defineProperty(exports, "name", {
    enumerable: true,
    get: function() {
        return types_2.name;
    }
});
Object.defineProperty(exports, "opt", {
    enumerable: true,
    get: function() {
        return types_2.opt;
    }
});
Object.defineProperty(exports, "param", {
    enumerable: true,
    get: function() {
        return types_2.param;
    }
});
Object.defineProperty(exports, "tuple", {
    enumerable: true,
    get: function() {
        return types_2.tuple;
    }
});
Object.defineProperty(exports, "union", {
    enumerable: true,
    get: function() {
        return types_2.union;
    }
});
Object.defineProperty(exports, "intersection", {
    enumerable: true,
    get: function() {
        return types_2.intersection;
    }
});
Object.defineProperty(exports, "BasicType", {
    enumerable: true,
    get: function() {
        return types_2.BasicType;
    }
});
var util_2 = __turbopack_context__.r("[project]/altoque-pwa/node_modules/.pnpm/ts-interface-checker@0.1.13/node_modules/ts-interface-checker/dist/util.js [app-client] (ecmascript)");
Object.defineProperty(exports, "VError", {
    enumerable: true,
    get: function() {
        return util_2.VError;
    }
});
/**
 * Takes one of more type suites (e.g. a module generated by `ts-interface-builder`), and combines
 * them into a suite of interface checkers. If a type is used by name, that name should be present
 * among the passed-in type suites.
 *
 * The returned object maps type names to Checker objects.
 */ function createCheckers() {
    var typeSuite = [];
    for(var _i = 0; _i < arguments.length; _i++){
        typeSuite[_i] = arguments[_i];
    }
    var fullSuite = Object.assign.apply(Object, __spreadArrays([
        {},
        types_1.basicTypes
    ], typeSuite));
    var checkers = {};
    for(var _a = 0, typeSuite_1 = typeSuite; _a < typeSuite_1.length; _a++){
        var suite_1 = typeSuite_1[_a];
        for(var _b = 0, _c = Object.keys(suite_1); _b < _c.length; _b++){
            var name = _c[_b];
            checkers[name] = new Checker(fullSuite, suite_1[name]);
        }
    }
    return checkers;
}
exports.createCheckers = createCheckers;
/**
 * Checker implements validation of objects, and also includes accessors to validate method calls.
 * Checkers should be created using `createCheckers()`.
 */ var Checker = function() {
    // Create checkers by using `createCheckers()` function.
    function Checker(suite, ttype, _path) {
        if (_path === void 0) {
            _path = 'value';
        }
        this.suite = suite;
        this.ttype = ttype;
        this._path = _path;
        this.props = new Map();
        if (ttype instanceof types_1.TIface) {
            for(var _i = 0, _a = ttype.props; _i < _a.length; _i++){
                var p = _a[_i];
                this.props.set(p.name, p.ttype);
            }
        }
        this.checkerPlain = this.ttype.getChecker(suite, false);
        this.checkerStrict = this.ttype.getChecker(suite, true);
    }
    /**
     * Set the path to report in errors, instead of the default "value". (E.g. if the Checker is for
     * a "person" interface, set path to "person" to report e.g. "person.name is not a string".)
     */ Checker.prototype.setReportedPath = function(path) {
        this._path = path;
    };
    /**
     * Check that the given value satisfies this checker's type, or throw Error.
     */ Checker.prototype.check = function(value) {
        return this._doCheck(this.checkerPlain, value);
    };
    /**
     * A fast check for whether or not the given value satisfies this Checker's type. This returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */ Checker.prototype.test = function(value) {
        return this.checkerPlain(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type, or null if it does.
     */ Checker.prototype.validate = function(value) {
        return this._doValidate(this.checkerPlain, value);
    };
    /**
     * Check that the given value satisfies this checker's type strictly. This checks that objects
     * and tuples have no extra members. Note that this prevents backward compatibility, so usually
     * a plain check() is more appropriate.
     */ Checker.prototype.strictCheck = function(value) {
        return this._doCheck(this.checkerStrict, value);
    };
    /**
     * A fast strict check for whether or not the given value satisfies this Checker's type. Returns
     * true or false, does not produce an error message, and is fast both on success and on failure.
     */ Checker.prototype.strictTest = function(value) {
        return this.checkerStrict(value, new util_1.NoopContext());
    };
    /**
     * Returns an error object describing the errors if the given value does not satisfy this
     * Checker's type strictly, or null if it does.
     */ Checker.prototype.strictValidate = function(value) {
        return this._doValidate(this.checkerStrict, value);
    };
    /**
     * If this checker is for an interface, returns a Checker for the type required for the given
     * property of this interface.
     */ Checker.prototype.getProp = function(prop) {
        var ttype = this.props.get(prop);
        if (!ttype) {
            throw new Error("Type has no property " + prop);
        }
        return new Checker(this.suite, ttype, this._path + "." + prop);
    };
    /**
     * If this checker is for an interface, returns a Checker for the argument-list required to call
     * the given method of this interface. E.g. if this Checker is for the interface:
     *    interface Foo {
     *      find(s: string, pos?: number): number;
     *    }
     * Then methodArgs("find").check(...) will succeed for ["foo"] and ["foo", 3], but not for [17].
     */ Checker.prototype.methodArgs = function(methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.paramList);
    };
    /**
     * If this checker is for an interface, returns a Checker for the return value of the given
     * method of this interface.
     */ Checker.prototype.methodResult = function(methodName) {
        var tfunc = this._getMethod(methodName);
        return new Checker(this.suite, tfunc.result);
    };
    /**
     * If this checker is for a function, returns a Checker for its argument-list.
     */ Checker.prototype.getArgs = function() {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getArgs() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.paramList);
    };
    /**
     * If this checker is for a function, returns a Checker for its result.
     */ Checker.prototype.getResult = function() {
        if (!(this.ttype instanceof types_1.TFunc)) {
            throw new Error("getResult() applied to non-function");
        }
        return new Checker(this.suite, this.ttype.result);
    };
    /**
     * Return the type for which this is a checker.
     */ Checker.prototype.getType = function() {
        return this.ttype;
    };
    /**
     * Actual implementation of check() and strictCheck().
     */ Checker.prototype._doCheck = function(checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (!checkerFunc(value, noopCtx)) {
            var detailCtx = new util_1.DetailContext();
            checkerFunc(value, detailCtx);
            throw detailCtx.getError(this._path);
        }
    };
    Checker.prototype._doValidate = function(checkerFunc, value) {
        var noopCtx = new util_1.NoopContext();
        if (checkerFunc(value, noopCtx)) {
            return null;
        }
        var detailCtx = new util_1.DetailContext();
        checkerFunc(value, detailCtx);
        return detailCtx.getErrorDetail(this._path);
    };
    Checker.prototype._getMethod = function(methodName) {
        var ttype = this.props.get(methodName);
        if (!ttype) {
            throw new Error("Type has no property " + methodName);
        }
        if (!(ttype instanceof types_1.TFunc)) {
            throw new Error("Property " + methodName + " is not a method");
        }
        return ttype;
    };
    return Checker;
}();
exports.Checker = Checker;
}),
"[project]/altoque-pwa/node_modules/.pnpm/lines-and-columns@1.2.4/node_modules/lines-and-columns/build/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.__esModule = true;
exports.LinesAndColumns = void 0;
var LF = '\n';
var CR = '\r';
var LinesAndColumns = function() {
    function LinesAndColumns(string) {
        this.string = string;
        var offsets = [
            0
        ];
        for(var offset = 0; offset < string.length;){
            switch(string[offset]){
                case LF:
                    offset += LF.length;
                    offsets.push(offset);
                    break;
                case CR:
                    offset += CR.length;
                    if (string[offset] === LF) {
                        offset += LF.length;
                    }
                    offsets.push(offset);
                    break;
                default:
                    offset++;
                    break;
            }
        }
        this.offsets = offsets;
    }
    LinesAndColumns.prototype.locationForIndex = function(index) {
        if (index < 0 || index > this.string.length) {
            return null;
        }
        var line = 0;
        var offsets = this.offsets;
        while(offsets[line + 1] <= index){
            line++;
        }
        var column = index - offsets[line];
        return {
            line: line,
            column: column
        };
    };
    LinesAndColumns.prototype.indexForLocation = function(location) {
        var line = location.line, column = location.column;
        if (line < 0 || line >= this.offsets.length) {
            return null;
        }
        if (column < 0 || column > this.lengthOfLine(line)) {
            return null;
        }
        return this.offsets[line] + column;
    };
    LinesAndColumns.prototype.lengthOfLine = function(line) {
        var offset = this.offsets[line];
        var nextOffset = line === this.offsets.length - 1 ? this.string.length : this.offsets[line + 1];
        return nextOffset - offset;
    };
    return LinesAndColumns;
}();
exports.LinesAndColumns = LinesAndColumns;
exports["default"] = LinesAndColumns;
}),
"[project]/altoque-pwa/node_modules/.pnpm/didyoumean@1.2.2/node_modules/didyoumean/didYouMean-1.2.1.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*

didYouMean.js - A simple JavaScript matching engine
===================================================

[Available on GitHub](https://github.com/dcporter/didyoumean.js).

A super-simple, highly optimized JS library for matching human-quality input to a list of potential
matches. You can use it to suggest a misspelled command-line utility option to a user, or to offer
links to nearby valid URLs on your 404 page. (The examples below are taken from a personal project,
my [HTML5 business card](http://dcporter.aws.af.cm/me), which uses didYouMean.js to suggest correct
URLs from misspelled ones, such as [dcporter.aws.af.cm/me/instagarm](http://dcporter.aws.af.cm/me/instagarm).)
Uses the [Levenshtein distance algorithm](https://en.wikipedia.org/wiki/Levenshtein_distance).

didYouMean.js works in the browser as well as in node.js. To install it for use in node:

```
npm install didyoumean
```


Examples
--------

Matching against a list of strings:
```
var input = 'insargrm'
var list = ['facebook', 'twitter', 'instagram', 'linkedin'];
console.log(didYouMean(input, list));
> 'instagram'
// The method matches 'insargrm' to 'instagram'.

input = 'google plus';
console.log(didYouMean(input, list));
> null
// The method was unable to find 'google plus' in the list of options.
```

Matching against a list of objects:
```
var input = 'insargrm';
var list = [ { id: 'facebook' }, { id: 'twitter' }, { id: 'instagram' }, { id: 'linkedin' } ];
var key = 'id';
console.log(didYouMean(input, list, key));
> 'instagram'
// The method returns the matching value.

didYouMean.returnWinningObject = true;
console.log(didYouMean(input, list, key));
> { id: 'instagram' }
// The method returns the matching object.
```


didYouMean(str, list, [key])
----------------------------

- str: The string input to match.
- list: An array of strings or objects to match against.
- key (OPTIONAL): If your list array contains objects, you must specify the key which contains the string
  to match against.

Returns: the closest matching string, or null if no strings exceed the threshold.


Options
-------

Options are set on the didYouMean function object. You may change them at any time.

### threshold

  By default, the method will only return strings whose edit distance is less than 40% (0.4x) of their length.
  For example, if a ten-letter string is five edits away from its nearest match, the method will return null.

  You can control this by setting the "threshold" value on the didYouMean function. For example, to set the
  edit distance threshold to 50% of the input string's length:

  ```
  didYouMean.threshold = 0.5;
  ```

  To return the nearest match no matter the threshold, set this value to null.

### thresholdAbsolute

  This option behaves the same as threshold, but instead takes an integer number of edit steps. For example,
  if thresholdAbsolute is set to 20 (the default), then the method will only return strings whose edit distance
  is less than 20. Both options apply.

### caseSensitive

  By default, the method will perform case-insensitive comparisons. If you wish to force case sensitivity, set
  the "caseSensitive" value to true:

  ```
  didYouMean.caseSensitive = true;
  ```

### nullResultValue

  By default, the method will return null if there is no sufficiently close match. You can change this value here.

### returnWinningObject

  By default, the method will return the winning string value (if any). If your list contains objects rather
  than strings, you may set returnWinningObject to true.
  
  ```
  didYouMean.returnWinningObject = true;
  ```
  
  This option has no effect on lists of strings.

### returnFirstMatch
  
  By default, the method will search all values and return the closest match. If you're simply looking for a "good-
  enough" match, you can set your thresholds appropriately and set returnFirstMatch to true to substantially speed
  things up.


License
-------

didYouMean copyright (c) 2013-2014 Dave Porter.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License
[here](http://www.apache.org/licenses/LICENSE-2.0).

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/ (function() {
    "use strict";
    // The didYouMean method.
    function didYouMean(str, list, key) {
        if (!str) return null;
        // If we're running a case-insensitive search, smallify str.
        if (!didYouMean.caseSensitive) {
            str = str.toLowerCase();
        }
        // Calculate the initial value (the threshold) if present.
        var thresholdRelative = didYouMean.threshold === null ? null : didYouMean.threshold * str.length, thresholdAbsolute = didYouMean.thresholdAbsolute, winningVal;
        if (thresholdRelative !== null && thresholdAbsolute !== null) winningVal = Math.min(thresholdRelative, thresholdAbsolute);
        else if (thresholdRelative !== null) winningVal = thresholdRelative;
        else if (thresholdAbsolute !== null) winningVal = thresholdAbsolute;
        else winningVal = null;
        // Get the edit distance to each option. If the closest one is less than 40% (by default) of str's length,
        // then return it.
        var winner, candidate, testCandidate, val, i, len = list.length;
        for(i = 0; i < len; i++){
            // Get item.
            candidate = list[i];
            // If there's a key, get the candidate value out of the object.
            if (key) {
                candidate = candidate[key];
            }
            // Gatekeep.
            if (!candidate) {
                continue;
            }
            // If we're running a case-insensitive search, smallify the candidate.
            if (!didYouMean.caseSensitive) {
                testCandidate = candidate.toLowerCase();
            } else {
                testCandidate = candidate;
            }
            // Get and compare edit distance.
            val = getEditDistance(str, testCandidate, winningVal);
            // If this value is smaller than our current winning value, OR if we have no winning val yet (i.e. the
            // threshold option is set to null, meaning the caller wants a match back no matter how bad it is), then
            // this is our new winner.
            if (winningVal === null || val < winningVal) {
                winningVal = val;
                // Set the winner to either the value or its object, depending on the returnWinningObject option.
                if (key && didYouMean.returnWinningObject) winner = list[i];
                else winner = candidate;
                // If we're returning the first match, return it now.
                if (didYouMean.returnFirstMatch) return winner;
            }
        }
        // If we have a winner, return it.
        return winner || didYouMean.nullResultValue;
    }
    // Set default options.
    didYouMean.threshold = 0.4;
    didYouMean.thresholdAbsolute = 20;
    didYouMean.caseSensitive = false;
    didYouMean.nullResultValue = null;
    didYouMean.returnWinningObject = null;
    didYouMean.returnFirstMatch = false;
    // Expose.
    // In node...
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && module.exports) {
        module.exports = didYouMean;
    } else {
        window.didYouMean = didYouMean;
    }
    var MAX_INT = Math.pow(2, 32) - 1; // We could probably go higher than this, but for practical reasons let's not.
    function getEditDistance(a, b, max) {
        // Handle null or undefined max.
        max = max || max === 0 ? max : MAX_INT;
        var lena = a.length;
        var lenb = b.length;
        // Fast path - no A or B.
        if (lena === 0) return Math.min(max + 1, lenb);
        if (lenb === 0) return Math.min(max + 1, lena);
        // Fast path - length diff larger than max.
        if (Math.abs(lena - lenb) > max) return max + 1;
        // Slow path.
        var matrix = [], i, j, colMin, minJ, maxJ;
        // Set up the first row ([0, 1, 2, 3, etc]).
        for(i = 0; i <= lenb; i++){
            matrix[i] = [
                i
            ];
        }
        // Set up the first column (same).
        for(j = 0; j <= lena; j++){
            matrix[0][j] = j;
        }
        // Loop over the rest of the columns.
        for(i = 1; i <= lenb; i++){
            colMin = MAX_INT;
            minJ = 1;
            if (i > max) minJ = i - max;
            maxJ = lenb + 1;
            if (maxJ > max + i) maxJ = max + i;
            // Loop over the rest of the rows.
            for(j = 1; j <= lena; j++){
                // If j is out of bounds, just put a large value in the slot.
                if (j < minJ || j > maxJ) {
                    matrix[i][j] = max + 1;
                } else {
                    // If the characters are the same, there's no change in edit distance.
                    if (b.charAt(i - 1) === a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)); // Delete
                    }
                }
                // Either way, update colMin.
                if (matrix[i][j] < colMin) colMin = matrix[i][j];
            }
            // If this column's minimum is greater than the allowed maximum, there's no point
            // in going on with life.
            if (colMin > max) return max + 1;
        }
        // If we made it this far without running into the max, then return the final matrix value.
        return matrix[lenb][lena];
    }
})();
}),
]);

//# sourceMappingURL=97330__pnpm_eb53685a._.js.map