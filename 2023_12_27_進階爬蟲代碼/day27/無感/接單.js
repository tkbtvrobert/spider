window = global;
ue = {}
ue["appName"] = "Netscape"
var H = function () {
    function n() {
        this["i"] = 0, this["j"] = 0, this["S"] = [];
    }

    n["prototype"]["init"] = function E(e) {
        var t, n, r;
        for (t = 0; t < 256; ++t) this["S"][t] = t;
        for (t = n = 0; t < 256; ++t) n = n + this["S"][t] + e[t % e["length"]] & 255, r = this["S"][t], this["S"][t] = this["S"][n], this["S"][n] = r;
        this["i"] = 0, this["j"] = 0;
    }, n["prototype"]["next"] = function C() {
        var e;
        return this["i"] = this["i"] + 1 & 255, this["j"] = this["j"] + this["S"][this["i"]] & 255, e = this["S"][this["i"]], this["S"][this["i"]] = this["S"][this["j"]], this["S"][this["j"]] = e, this["S"][e + this["S"][this["i"]] & 255];
    };
    var r,
        i,
        s,
        e,
        o = 256;
    if (null == i) {
        var t;
        if (i = [], s = 0, window["crypto"] && window["crypto"]["getRandomValues"]) {
            var _ = new Uint32Array(256);
            for (window["crypto"]["getRandomValues"](_), t = 0; t < _["length"]; ++t) i[s++] = 255 & _[t];
        }
        var a = 0,
            c = function (e) {
                if (256 <= (a = a || 0) || o <= s) window["removeEventListener"] ? (a = 0, window["removeEventListener"]("mousemove", c, !1)) : window["detachEvent"] && (a = 0, window["detachEvent"]("onmousemove", c)); else try {
                    var t = e["x"] + e["y"];
                    i[s++] = 255 & t, a += 1;
                } catch (n) {
                }
            };
        window["addEventListener"] ? window["addEventListener"]("mousemove", c, !1) : window["attachEvent"] && window["attachEvent"]("onmousemove", c);
    }

    function l() {
        if (null == r) {
            r = function t() {
                return new n();
            }();
            while (s < o) {
                var e = Math["floor"](65536 * Math["random"]());
                i[s++] = 255 & e;
            }
            for (r["init"](i), s = 0; s < i["length"]; ++s) i[s] = 0;
            s = 0;
        }
        return r["next"]();
    }

    function u() {
    }

    u["prototype"]["nextBytes"] = function S(e) {
        var t;
        for (t = 0; t < e["length"]; ++t) e[t] = l();
    };

    function w(e, t, n) {
        null != e && ("number" == typeof e ? this["fromNumber"](e, t, n) : null == t && "string" != typeof e ? this["fromString"](e, 256) : this["fromString"](e, t));
    }

    function x() {
        return new w(null);
    }

    e = "Microsoft Internet Explorer" == ue["appName"] ? (w["prototype"]["am"] = function T(e, t, n, r, i, s) {
        var o = 32767 & t,
            _ = t >> 15;
        while (0 <= --s) {
            var a = 32767 & this[e],
                c = this[e++] >> 15,
                l = _ * a + c * o;
            i = ((a = o * a + ((32767 & l) << 15) + n[r] + (1073741823 & i)) >>> 30) + (l >>> 15) + _ * c + (i >>> 30), n[r++] = 1073741823 & a;
        }
        return i;
    }, 30) : "Netscape" != ue["appName"] ? (w["prototype"]["am"] = function O(e, t, n, r, i, s) {
        while (0 <= --s) {
            var o = t * this[e++] + n[r] + i;
            i = Math["floor"](o / 67108864), n[r++] = 67108863 & o;
        }
        return i;
    }, 26) : (w["prototype"]["am"] = function A(e, t, n, r, i, s) {
        var o = 16383 & t,
            _ = t >> 14;
        while (0 <= --s) {
            var a = 16383 & this[e],
                c = this[e++] >> 14,
                l = _ * a + c * o;
            i = ((a = o * a + ((16383 & l) << 14) + n[r] + i) >> 28) + (l >> 14) + _ * c, n[r++] = 268435455 & a;
        }
        return i;
    }, 28), w["prototype"]["DB"] = e, w["prototype"]["DM"] = (1 << e) - 1, w["prototype"]["DV"] = 1 << e;
    w["prototype"]["FV"] = Math["pow"](2, 52), w["prototype"]["F1"] = 52 - e, w["prototype"]["F2"] = 2 * e - 52;
    var h,
        p,
        d = "0123456789abcdefghijklmnopqrstuvwxyz",
        g = [];
    for (h = "0"["charCodeAt"](0), p = 0; p <= 9; ++p) g[h++] = p;
    for (h = "a"["charCodeAt"](0), p = 10; p < 36; ++p) g[h++] = p;
    for (h = "A"["charCodeAt"](0), p = 10; p < 36; ++p) g[h++] = p;

    function f(e) {
        return d["charAt"](e);
    }

    function v(e) {
        var t = x();
        return t["fromInt"](e), t;
    }

    function y(e) {
        var t,
            n = 1;
        return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n;
    }

    function m(e) {
        this["m"] = e;
    }

    function b(e) {
        this["m"] = e, this["mp"] = e["invDigit"](), this["mpl"] = 32767 & this["mp"], this["mph"] = this["mp"] >> 15, this["um"] = (1 << e["DB"] - 15) - 1, this["mt2"] = 2 * e["t"];
    }

    function k() {
        this["n"] = null, this["e"] = 0, this["d"] = null, this["p"] = null, this["q"] = null, this["dmp1"] = null, this["dmq1"] = null, this["coeff"] = null;
        this["setPublic"]("00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81", "10001");
    }

    return m["prototype"]["convert"] = function D(e) {
        return e["s"] < 0 || 0 <= e["compareTo"](this["m"]) ? e["mod"](this["m"]) : e;
    }, m["prototype"]["revert"] = function M(e) {
        return e;
    }, m["prototype"]["reduce"] = function B(e) {
        e["divRemTo"](this["m"], null, e);
    }, m["prototype"]["mulTo"] = function R(e, t, n) {
        e["multiplyTo"](t, n), this["reduce"](n);
    }, m["prototype"]["sqrTo"] = function j(e, t) {
        e["squareTo"](t), this["reduce"](t);
    }, b["prototype"]["convert"] = function N(e) {
        var t = x();
        return e["abs"]()["dlShiftTo"](this["m"]["t"], t), t["divRemTo"](this["m"], null, t), e["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && this["m"]["subTo"](t, t), t;
    }, b["prototype"]["revert"] = function L(e) {
        var t = x();
        return e["copyTo"](t), this["reduce"](t), t;
    }, b["prototype"]["reduce"] = function z(e) {
        while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;
        for (var t = 0; t < this["m"]["t"]; ++t) {
            var n = 32767 & e[t],
                r = n * this["mpl"] + ((n * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
            e[n = t + this["m"]["t"]] += this["m"]["am"](0, r, e, t, 0, this["m"]["t"]);
            while (e[n] >= e["DV"]) e[n] -= e["DV"], e[++n]++;
        }
        e["clamp"](), e["drShiftTo"](this["m"]["t"], e), 0 <= e["compareTo"](this["m"]) && e["subTo"](this["m"], e);
    }, b["prototype"]["mulTo"] = function P(e, t, n) {
        e["multiplyTo"](t, n), this["reduce"](n);
    }, b["prototype"]["sqrTo"] = function I(e, t) {
        e["squareTo"](t), this["reduce"](t);
    }, w["prototype"]["copyTo"] = function q(e) {
        for (var t = this["t"] - 1; 0 <= t; --t) e[t] = this[t];
        e["t"] = this["t"], e["s"] = this["s"];
    }, w["prototype"]["fromInt"] = function F(e) {
        this["t"] = 1, this["s"] = e < 0 ? -1 : 0, 0 < e ? this[0] = e : e < -1 ? this[0] = e + this["DV"] : this["t"] = 0;
    }, w["prototype"]["fromString"] = function H(e, t) {
        var n;
        if (16 == t) n = 4; else if (8 == t) n = 3; else if (256 == t) n = 8; else if (2 == t) n = 1; else if (32 == t) n = 5; else {
            if (4 != t) return void this["fromRadix"](e, t);
            n = 2;
        }
        this["t"] = 0, this["s"] = 0;
        var r,
            i,
            s = e["length"],
            o = !1,
            _ = 0;
        while (0 <= --s) {
            var a = 8 == n ? 255 & e[s] : (r = s, null == (i = g[e["charCodeAt"](r)]) ? -1 : i);
            a < 0 ? "-" == e["charAt"](s) && (o = !0) : (o = !1, 0 == _ ? this[this["t"]++] = a : _ + n > this["DB"] ? (this[this["t"] - 1] |= (a & (1 << this["DB"] - _) - 1) << _, this[this["t"]++] = a >> this["DB"] - _) : this[this["t"] - 1] |= a << _, (_ += n) >= this["DB"] && (_ -= this["DB"]));
        }
        8 == n && 0 != (128 & e[0]) && (this["s"] = -1, 0 < _ && (this[this["t"] - 1] |= (1 << this["DB"] - _) - 1 << _)), this["clamp"](), o && w["ZERO"]["subTo"](this, this);
    }, w["prototype"]["clamp"] = function X() {
        var e = this["s"] & this["DM"];
        while (0 < this["t"] && this[this["t"] - 1] == e) --this["t"];
    }, w["prototype"]["dlShiftTo"] = function $(e, t) {
        var n;
        for (n = this["t"] - 1; 0 <= n; --n) t[n + e] = this[n];
        for (n = e - 1; 0 <= n; --n) t[n] = 0;
        t["t"] = this["t"] + e, t["s"] = this["s"];
    }, w["prototype"]["drShiftTo"] = function V(e, t) {
        for (var n = e; n < this["t"]; ++n) t[n - e] = this[n];
        t["t"] = Math["max"](this["t"] - e, 0), t["s"] = this["s"];
    }, w["prototype"]["lShiftTo"] = function Y(e, t) {
        var n,
            r = e % this["DB"],
            i = this["DB"] - r,
            s = (1 << i) - 1,
            o = Math["floor"](e / this["DB"]),
            _ = this["s"] << r & this["DM"];
        for (n = this["t"] - 1; 0 <= n; --n) t[n + o + 1] = this[n] >> i | _, _ = (this[n] & s) << r;
        for (n = o - 1; 0 <= n; --n) t[n] = 0;
        t[o] = _, t["t"] = this["t"] + o + 1, t["s"] = this["s"], t["clamp"]();
    }, w["prototype"]["rShiftTo"] = function U(e, t) {
        t["s"] = this["s"];
        var n = Math["floor"](e / this["DB"]);
        if (n >= this["t"]) t["t"] = 0; else {
            var r = e % this["DB"],
                i = this["DB"] - r,
                s = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var o = n + 1; o < this["t"]; ++o) t[o - n - 1] |= (this[o] & s) << i, t[o - n] = this[o] >> r;
            0 < r && (t[this["t"] - n - 1] |= (this["s"] & s) << i), t["t"] = this["t"] - n, t["clamp"]();
        }
    }, w["prototype"]["subTo"] = function J(e, t) {
        var n = 0,
            r = 0,
            i = Math["min"](e["t"], this["t"]);
        while (n < i) r += this[n] - e[n], t[n++] = r & this["DM"], r >>= this["DB"];
        if (e["t"] < this["t"]) {
            r -= e["s"];
            while (n < this["t"]) r += this[n], t[n++] = r & this["DM"], r >>= this["DB"];
            r += this["s"];
        } else {
            r += this["s"];
            while (n < e["t"]) r -= e[n], t[n++] = r & this["DM"], r >>= this["DB"];
            r -= e["s"];
        }
        t["s"] = r < 0 ? -1 : 0, r < -1 ? t[n++] = this["DV"] + r : 0 < r && (t[n++] = r), t["t"] = n, t["clamp"]();
    }, w["prototype"]["multiplyTo"] = function G(e, t) {
        var n = this["abs"](),
            r = e["abs"](),
            i = n["t"];
        t["t"] = i + r["t"];
        while (0 <= --i) t[i] = 0;
        for (i = 0; i < r["t"]; ++i) t[i + n["t"]] = n["am"](0, r[i], t, i, 0, n["t"]);
        t["s"] = 0, t["clamp"](), this["s"] != e["s"] && w["ZERO"]["subTo"](t, t);
    }, w["prototype"]["squareTo"] = function W(e) {
        var t = this["abs"](),
            n = e["t"] = 2 * t["t"];
        while (0 <= --n) e[n] = 0;
        for (n = 0; n < t["t"] - 1; ++n) {
            var r = t["am"](n, t[n], e, 2 * n, 0, 1);
            (e[n + t["t"]] += t["am"](n + 1, 2 * t[n], e, 2 * n + 1, r, t["t"] - n - 1)) >= t["DV"] && (e[n + t["t"]] -= t["DV"], e[n + t["t"] + 1] = 1);
        }
        0 < e["t"] && (e[e["t"] - 1] += t["am"](n, t[n], e, 2 * n, 0, 1)), e["s"] = 0, e["clamp"]();
    }, w["prototype"]["divRemTo"] = function Z(e, t, n) {
        var r = e["abs"]();
        if (!(r["t"] <= 0)) {
            var i = this["abs"]();
            if (i["t"] < r["t"]) return null != t && t["fromInt"](0), void (null != n && this["copyTo"](n));
            null == n && (n = x());
            var s = x(),
                o = this["s"],
                _ = e["s"],
                a = this["DB"] - y(r[r["t"] - 1]);
            0 < a ? (r["lShiftTo"](a, s), i["lShiftTo"](a, n)) : (r["copyTo"](s), i["copyTo"](n));
            var c = s["t"],
                l = s[c - 1];
            if (0 != l) {
                var u = l * (1 << this["F1"]) + (1 < c ? s[c - 2] >> this["F2"] : 0),
                    h = this["FV"] / u,
                    p = (1 << this["F1"]) / u,
                    d = 1 << this["F2"],
                    g = n["t"],
                    f = g - c,
                    v = null == t ? x() : t;
                s["dlShiftTo"](f, v), 0 <= n["compareTo"](v) && (n[n["t"]++] = 1, n["subTo"](v, n)), w["ONE"]["dlShiftTo"](c, v), v["subTo"](s, s);
                while (s["t"] < c) s[s["t"]++] = 0;
                while (0 <= --f) {
                    var m = n[--g] == l ? this["DM"] : Math["floor"](n[g] * h + (n[g - 1] + d) * p);
                    if ((n[g] += s["am"](0, m, n, f, 0, c)) < m) {
                        s["dlShiftTo"](f, v), n["subTo"](v, n);
                        while (n[g] < --m) n["subTo"](v, n);
                    }
                }
                null != t && (n["drShiftTo"](c, t), o != _ && w["ZERO"]["subTo"](t, t)), n["t"] = c, n["clamp"](), 0 < a && n["rShiftTo"](a, n), o < 0 && w["ZERO"]["subTo"](n, n);
            }
        }
    }, w["prototype"]["invDigit"] = function Q() {
        if (this["t"] < 1) return 0;
        var e = this[0];
        if (0 == (1 & e)) return 0;
        var t = 3 & e;
        return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this["DV"]) % this["DV"]) ? this["DV"] - t : -t;
    }, w["prototype"]["isEven"] = function K() {
        return 0 == (0 < this["t"] ? 1 & this[0] : this["s"]);
    }, w["prototype"]["exp"] = function $_EP(e, t) {
        if (4294967295 < e || e < 1) return w["ONE"];
        var n = x(),
            r = x(),
            i = t["convert"](this),
            s = y(e) - 1;
        i["copyTo"](n);
        while (0 <= --s) if (t["sqrTo"](n, r), 0 < (e & 1 << s)) t["mulTo"](r, i, n); else {
            var o = n;
            n = r, r = o;
        }
        return t["revert"](n);
    }, w["prototype"]["toString"] = function $_FB(e) {
        if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
        var t;
        if (16 == e) t = 4; else if (8 == e) t = 3; else if (2 == e) t = 1; else if (32 == e) t = 5; else {
            if (4 != e) return this["toRadix"](e);
            t = 2;
        }
        var n,
            r = (1 << t) - 1,
            i = !1,
            s = "",
            o = this["t"],
            _ = this["DB"] - o * this["DB"] % t;
        if (0 < o--) {
            _ < this["DB"] && 0 < (n = this[o] >> _) && (i = !0, s = f(n));
            while (0 <= o) _ < t ? (n = (this[o] & (1 << _) - 1) << t - _, n |= this[--o] >> (_ += this["DB"] - t)) : (n = this[o] >> (_ -= t) & r, _ <= 0 && (_ += this["DB"], --o)), 0 < n && (i = !0), i && (s += f(n));
        }
        return i ? s : "0";
    }, w["prototype"]["negate"] = function $_GW() {
        var e = x();
        return w["ZERO"]["subTo"](this, e), e;
    }, w["prototype"]["abs"] = function $_Ho() {
        return this["s"] < 0 ? this["negate"]() : this;
    }, w["prototype"]["compareTo"] = function ie(e) {
        var t = this["s"] - e["s"];
        if (0 != t) return t;
        var n = this["t"];
        if (0 != (t = n - e["t"])) return this["s"] < 0 ? -t : t;
        while (0 <= --n) if (0 != (t = this[n] - e[n])) return t;
        return 0;
    }, w["prototype"]["bitLength"] = function se() {
        return this["t"] <= 0 ? 0 : this["DB"] * (this["t"] - 1) + y(this[this["t"] - 1] ^ this["s"] & this["DM"]);
    }, w["prototype"]["mod"] = function oe(e) {
        var t = x();
        return this["abs"]()["divRemTo"](e, null, t), this["s"] < 0 && 0 < t["compareTo"](w["ZERO"]) && e["subTo"](t, t), t;
    }, w["prototype"]["modPowInt"] = function $_FBK(e, t) {
        var n;
        return n = e < 256 || t["isEven"]() ? new m(t) : new b(t), this["exp"](e, n);
    }, w["ZERO"] = v(0), w["ONE"] = v(1), k["prototype"]["doPublic"] = function ae(e) {
        return e["modPowInt"](this["e"], this["n"]);
    }, k["prototype"]["setPublic"] = function ce(e, t) {
        null != e && null != t && 0 < e["length"] && 0 < t["length"] ? (this["n"] = function n(e, t) {
            return new w(e, t);
        }(e, 16), this["e"] = parseInt(t, 16)) : console && console["error"] && console["error"]("Invalid RSA public key");
    }, k["prototype"]["encrypt"] = function le(e) {
        var t = function _(e, t) {
            if (t < e["length"] + 11) return console && console["error"] && console["error"]("Message too long for RSA"), null;
            var n = [],
                r = e["length"] - 1;
            while (0 <= r && 0 < t) {
                var i = e["charCodeAt"](r--);
                i < 128 ? n[--t] = i : 127 < i && i < 2048 ? (n[--t] = 63 & i | 128, n[--t] = i >> 6 | 192) : (n[--t] = 63 & i | 128, n[--t] = i >> 6 & 63 | 128, n[--t] = i >> 12 | 224);
            }
            n[--t] = 0;
            var s = new u(),
                o = [];
            while (2 < t) {
                o[0] = 0;
                while (0 == o[0]) s["nextBytes"](o);
                n[--t] = o[0];
            }
            return n[--t] = 2, n[--t] = 0, new w(n);
        }(e, this["n"]["bitLength"]() + 7 >> 3);
        if (null == t) return null;
        var n = this["doPublic"](t);
        if (null == n) return null;
        var r = n["toString"](16);
        return 0 == (1 & r["length"]) ? r : "0" + r;
    }, k;
}();

function Me(e) {
    var n = this,
        t = new je(e);
    t["remUnit"] && !isNaN(t["remUnit"]) && (ce = "rem", le = t["remUnit"]), t["https"] && (t["protocol"] = "https://"), e["debugConfig"] && t["$_BGGl"](e["debugConfig"]), n["$_BJw"] = t, n["$_CAR"] = e, n["$_BGHw"] = new V(n), n["$_JFm"] = new U(function (e, t) {
        n["$_BGIn"](e, t);
    }), n["$_JFm"]["$_EJI"](me), n["$_BGJB"] = x ? 3 : 0, n["$_BHAv"] = x ? "web_mobile" : "web", n["$_BHBW"] = new pe(), n["$_BJw"]["$_CGS"] = {
        "pt": n["$_BGJB"]
    };
};
var K = function () {
    function e() {
        return (65536 * (1 + Math["random"]()) | 0)["toString"](16)["substring"](1);
    }

    return function () {
        return e() + e() + e() + e();
    };
}();
Me["prototype"] = {
    "$_BIDO": function () {
        var e = this,
            t = e["$_BJw"],
            n = e["$_JFm"];
        return t["autoReset"] && (e["$_BIEV"] = f(function () {
            n["$_EJI"](Ee);
        }, 54e4)), e;
    },
    "$_BGIn": function (e, t) {
        var n = this,
            r = n["$_BIFO"],
            i = n["$_JFm"],
            s = n["$_BGHw"],
            o = n["$_BJw"];
        if (e !== t) if (e === me) n["$_BIGe"] = n["$_BFDn"]()["$_CFX"](function () {
            i["$_JGS"](ke) || (i["$_EJI"](we), s["$_JCW"](me));
        }), n["$_BIEV"] && (n["$_BIEV"] = null), n["$_BIDO"](); else if (e === we) {
            var _ = $_FB();
            n["$_CCp"]()["$_CFX"](function (e) {
                r["$_BIHl"](e, o["spec"]), n["$_BIIx"] = $_FB() - _, i["$_EJI"](xe);
            }, function () {
                return F(P("url_picture", n));
            });
        } else e === xe ? r["$_BIJn"]() : e === Ee ? (-1 < new ie([xe, ye, be])["$_BAFA"](t) ? (s["$_JCW"](Ee), r["$_BJAr"]()) : t !== ke && i["$_EJI"](t), v(n["$_BIEV"]), n["$_BIDO"]()) : e === ye ? (r["$_BJBC"](n["$_BJCP"], n["$_BJDy"])["$_CFX"](function () {
            s["$_JCW"](ye, n["$_BJDy"]);
        }), n["$_BHBW"]["$_JDi"]()) : e === be ? (s["$_JCW"](be), r["$_BJEj"]()["$_CFX"](function () {
            i["$_EJI"](Ee);
        })) : e === ke ? s["$_JCW"](ke, n["$_BJFU"]) : e === Se && s["$_JCW"](Se, "voice");
    },
    "$_CBz": function (e) {
        return this["$_BJFU"] = e, this["$_JFm"]["$_EJI"](ke), this;
    },
    "$_BFDn": function () {
        function r() {
            return n["debugConfig"] && $_Ho(n, n["debugConfig"]), n["gct_path"] && t["$_BJGA"]()["$_CFX"](function () {
            }), t["$_BIFO"] = new Re(t), t["$_BIFO"]["$_BJHU"];
        }

        var t = this,
            n = t["$_BJw"];
        return n["offline"] ? (n["$_BGGl"](n["debugConfig"]), r()) : R(n, w["$_EHE"]("fFtZ0VaY4Gg"), t["$_CAR"])["$_CFX"](function (e) {
            return e["error"] ? F(I(e, t, "/get.php")) : ($_Ho(n, e["data"]), r());
        }, function () {
            return F(P("url_get", t));
        });
    },
    "$_BJGA": function () {
        var e = this["$_BJw"];
        return M(e, "js", e["protocol"], e["static_servers"], e["gct_path"]);
    },
    "$_CIg": function (e) {
        var t = this,
            n = t["$_JFm"];
        return t["$_BIGe"]["$_CFX"](function () {
            n["$_JGS"](ke) || t["$_BIFO"]["$_CIg"](e);
        }), t;
    },
    "$_CCp": function () {
        var e = this["$_BJw"],
            t = e["protocol"],
            n = e["resource_servers"],
            r = e["pic"];
        return M(e, "img", t, n, r, {
            "challenge": e["challenge"]
        }, !1);
    },
    "$_BJIZ": function (e, t) {
        var n = this,
            r = n["$_BJw"],
            i = n["$_JFm"],
            s = n["$_BHBW"]["$_BGCW"]()
        o = {
            "lang": r["lang"] || "zh-cn",
            "passtime": t,
            "a": e,
            "pic": r["pic"],
            "tt": function (e, t, n) {
                if (!t || !n) return e;
                var r,
                    i = 0,
                    s = e,
                    o = t[0],
                    _ = t[2],
                    a = t[4];
                while (r = n["substr"](i, 2)) {
                    i += 2;
                    var c = parseInt(r, 16),
                        l = String["fromCharCode"](c),
                        u = (o * c * c + _ * c + a) % e["length"];
                    s = s["substr"](0, u) + l + s["substr"](u);
                }
                return s;
            }(s, r["c"], r["s"]),
            "ep": n["$_BJJj"]()
        };
        try {
            if (window["_gct"]) {
                var _ = {
                        "lang": o["lang"],
                        "ep": o["ep"]
                    },
                    a = window["_gct"](_);
                if (a["lang"]) {
                    var c = function g(e) {
                            for (var t in e) if ("ep" !== t && "lang" !== t) return t;
                        }(_),
                        l = function f(e, t, n) {
                            for (var r = new e["gg"]["f"](t, n), i = ["n", "s", "e", "es", "en", "w", "wn", "ws"], s = i["length"] - 2, o = 0; o < n["length"]; o++) {
                                var _,
                                    a = Math["abs"](n[o]["charCodeAt"]() - 70)["toString"]()[1];
                                _ = s < a ? e["gg"][i[1 + s]](r) : e["gg"][i[a]](r);
                                for (var c = Math["abs"](n[o]["charCodeAt"]() - 70)["toString"]()[0], l = 0; l < c; l++) _["cc"]();
                            }
                            return r["random"]["join"]("")["slice"](0, 10);
                        }(a, _, c);
                    _[c] = l;
                }
                !function v(e) {
                    if ("function" == typeof Object["assign"]) return Object["assign"]["apply"](Object, arguments);
                    if (null == e) throw new Error("Cannot convert undefined or null to object");
                    e = Object(e);
                    for (var t = 1; t < arguments["length"]; t++) {
                        var n = arguments[t];
                        if (null !== n) for (var r in n) Object["prototype"]["hasOwnProperty"]["call"](n, r) && (e[r] = n[r]);
                    }
                    return e;
                }(o, _);
            }
        } catch (m) {
        }
        if (o["a"]) try {
            o["rp"] = function (e) {
                function a(e, t) {
                    return e << t | e >>> 32 - t;
                }

                function c(e, t) {
                    var n, r, i, s, o;
                    return i = 2147483648 & e, s = 2147483648 & t, o = (1073741823 & e) + (1073741823 & t), (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ o ^ i ^ s : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s : 1073741824 ^ o ^ i ^ s : o ^ i ^ s;
                }

                function t(e, t, n, r, i, s, o) {
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        return e & t | ~e & n;
                    }(t, n, r), i), o)), s), t);
                }

                function n(e, t, n, r, i, s, o) {
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        return e & n | t & ~n;
                    }(t, n, r), i), o)), s), t);
                }

                function r(e, t, n, r, i, s, o) {
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        return e ^ t ^ n;
                    }(t, n, r), i), o)), s), t);
                }

                function i(e, t, n, r, i, s, o) {
                    return c(a(e = c(e, c(c(function _(e, t, n) {
                        return t ^ (e | ~n);
                    }(t, n, r), i), o)), s), t);
                }

                function s(e) {
                    var t,
                        n = "",
                        r = "";
                    for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255)["toString"](16))["substr"](r["length"] - 2, 2);
                    return n;
                }

                var o, _, l, u, h, p, d, g, f, v;
                for (o = function m(e) {
                    var t,
                        n = e["length"],
                        r = n + 8,
                        i = 16 * (1 + (r - r % 64) / 64),
                        s = Array(i - 1),
                        o = 0,
                        _ = 0;
                    while (_ < n) o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | e["charCodeAt"](_) << o, _++;
                    return o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | 128 << o, s[i - 2] = n << 3, s[i - 1] = n >>> 29, s;
                }(e = function w(e) {
                    e = e["replace"](/\r\n/g, "\n");
                    for (var t = "", n = 0; n < e["length"]; n++) {
                        var r = e["charCodeAt"](n);
                        r < 128 ? t += String["fromCharCode"](r) : (127 < r && r < 2048 ? t += String["fromCharCode"](r >> 6 | 192) : (t += String["fromCharCode"](r >> 12 | 224), t += String["fromCharCode"](r >> 6 & 63 | 128)), t += String["fromCharCode"](63 & r | 128));
                    }
                    return t;
                }(e)), d = 1732584193, g = 4023233417, f = 2562383102, v = 271733878, _ = 0; _ < o["length"]; _ += 16) g = i(g = i(g = i(g = i(g = r(g = r(g = r(g = r(g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(u = g, f = t(h = f, v = t(p = v, d = t(l = d, g, f, v, o[_ + 0], 7, 3614090360), g, f, o[_ + 1], 12, 3905402710), d, g, o[_ + 2], 17, 606105819), v, d, o[_ + 3], 22, 3250441966), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 4], 7, 4118548399), g, f, o[_ + 5], 12, 1200080426), d, g, o[_ + 6], 17, 2821735955), v, d, o[_ + 7], 22, 4249261313), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 8], 7, 1770035416), g, f, o[_ + 9], 12, 2336552879), d, g, o[_ + 10], 17, 4294925233), v, d, o[_ + 11], 22, 2304563134), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 12], 7, 1804603682), g, f, o[_ + 13], 12, 4254626195), d, g, o[_ + 14], 17, 2792965006), v, d, o[_ + 15], 22, 1236535329), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 1], 5, 4129170786), g, f, o[_ + 6], 9, 3225465664), d, g, o[_ + 11], 14, 643717713), v, d, o[_ + 0], 20, 3921069994), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 5], 5, 3593408605), g, f, o[_ + 10], 9, 38016083), d, g, o[_ + 15], 14, 3634488961), v, d, o[_ + 4], 20, 3889429448), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 9], 5, 568446438), g, f, o[_ + 14], 9, 3275163606), d, g, o[_ + 3], 14, 4107603335), v, d, o[_ + 8], 20, 1163531501), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 13], 5, 2850285829), g, f, o[_ + 2], 9, 4243563512), d, g, o[_ + 7], 14, 1735328473), v, d, o[_ + 12], 20, 2368359562), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 5], 4, 4294588738), g, f, o[_ + 8], 11, 2272392833), d, g, o[_ + 11], 16, 1839030562), v, d, o[_ + 14], 23, 4259657740), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 1], 4, 2763975236), g, f, o[_ + 4], 11, 1272893353), d, g, o[_ + 7], 16, 4139469664), v, d, o[_ + 10], 23, 3200236656), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 13], 4, 681279174), g, f, o[_ + 0], 11, 3936430074), d, g, o[_ + 3], 16, 3572445317), v, d, o[_ + 6], 23, 76029189), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 9], 4, 3654602809), g, f, o[_ + 12], 11, 3873151461), d, g, o[_ + 15], 16, 530742520), v, d, o[_ + 2], 23, 3299628645), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 0], 6, 4096336452), g, f, o[_ + 7], 10, 1126891415), d, g, o[_ + 14], 15, 2878612391), v, d, o[_ + 5], 21, 4237533241), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 12], 6, 1700485571), g, f, o[_ + 3], 10, 2399980690), d, g, o[_ + 10], 15, 4293915773), v, d, o[_ + 1], 21, 2240044497), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 8], 6, 1873313359), g, f, o[_ + 15], 10, 4264355552), d, g, o[_ + 6], 15, 2734768916), v, d, o[_ + 13], 21, 1309151649), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 4], 6, 4149444226), g, f, o[_ + 11], 10, 3174756917), d, g, o[_ + 2], 15, 718787259), v, d, o[_ + 9], 21, 3951481745), d = c(d, l), g = c(g, u), f = c(f, h), v = c(v, p);
                return (s(d) + s(g) + s(f) + s(v))["toLowerCase"]();
            }(r["gt"] + r["challenge"] + o["passtime"]);
            var u = n["$_CAAz"](),
                h = X["encrypt"](ae["stringify"](o), n["$_CABL"]()),
                p = w["$_EFO"](h),
                d = {
                    "gt": r["gt"],
                    "challenge": r["challenge"],
                    "lang": o["lang"],
                    "pt": n["$_BGJB"],
                    "client_type": n["$_BHAv"],
                    "w": p + u
                };
            R(r, w["$_EHE"]("fEkexGxOwUyY"), d)["$_CFX"](function (e) {
                if ("error" === e["status"]) return F(I(e, n, "/ajax.php"));
                n["$_CACQ"](e["data"]);
            }, function () {
                return F(P("url_ajax", n));
            });
        } catch (m) {
            n["$_CBz"](m);
        } else i["$_EJI"](be);
    },
    "$_CACQ": function (e) {
        var t,
            n = this["$_BJw"];
        if ("success" === e["result"]) {
            var r = e["validate"]["split"]("|")[0];
            this["$_BJDy"] = e["score"], this["$_BJCP"] = {
                "geetest_challenge": n["challenge"],
                "geetest_validate": r,
                "geetest_seccode": r + "|jordan"
            }, t = ye;
        } else t = "fail" == e["result"] ? be : ke;
        this["$_JFm"]["$_EJI"](t);
    },
    "$_BJAr": function () {
        return this["$_JFm"]["$_EJI"](Ee), this;
    },
    "$_CADn": function () {
        return this["$_BJCP"];
    },
    "$_JBG": function (e, t) {
        return this["$_BGHw"]["$_JBG"](e, function (e) {
            t(e);
        }), this;
    },
    "$_BBBP": function () {
        var e = this;
        return e["$_BIGe"]["$_CFX"](function () {
            e["$_BIFO"]["$_BBBP"]();
        }), e;
    },
    "$_BBAT": function () {
        var e = this;
        return e["$_BIGe"]["$_CFX"](function () {
            e["$_BIFO"]["$_BBAT"]();
        }), e;
    },
    "$_JDi": function () {
        this["$_CAEo"](), this["$_BIFO"] && this["$_BIFO"]["$_JDi"](), this["$_BGHw"]["$_JDi"](), this["$_BHBW"]["$_JDi"]();
    },
    "$_CAEo": function () {
        this["$_BIEV"] && v(this["$_BIEV"]);
    },
    "$_CABL": (ve = K(), function (e) {
        return !0 === e && (ve = K()), ve;
    }),
    "$_CAAz": function (e) {
        var t = new H()["encrypt"](this["$_CABL"](e));
        while (!t || 256 !== t["length"]) t = new H()["encrypt"](this["$_CABL"](!0));
        return t;
    },
    "$_BJJj": function () {
        return {
            "ca": this["$_BIFO"] && this["$_BIFO"]["$_BHDz"] || "",
            "v": "3.1.0",
            "$_FB": ge["touchEvent"],
            "me": ge["mouseEvent"],
            "tm": new fe()["$_BGEd"]()
        };
    }
}


var X = function () {
        var e,
            n = Object["create"] || function () {
                function n() {
                }

                return function (e) {
                    var t;
                    return n["prototype"] = e, t = new n(), n["prototype"] = null, t;
                };
            }(),
            t = {},
            r = t["lib"] = {},
            i = r["Base"] = {
                "extend": function (e) {
                    var t = n(this);
                    return e && t["mixIn"](e), t["hasOwnProperty"]("init") && this["init"] !== t["init"] || (t["init"] = function () {
                        t["$super"]["init"]["apply"](this, arguments);
                    }), (t["init"]["prototype"] = t)["$super"] = this, t;
                },
                "create": function () {
                    var e = this["extend"]();
                    return e["init"]["apply"](e, arguments), e;
                },
                "init": function () {
                },
                "mixIn": function (e) {
                    for (var t in e) e["hasOwnProperty"](t) && (this[t] = e[t]);
                    e["hasOwnProperty"]("toString") && (this["toString"] = e["toString"]);
                }
            },
            l = r["WordArray"] = i["extend"]({
                "init": function (e, t) {
                    e = this["words"] = e || [], t != undefined ? this["sigBytes"] = t : this["sigBytes"] = 4 * e["length"];
                },
                "concat": function (e) {
                    var t = this["words"],
                        n = e["words"],
                        r = this["sigBytes"],
                        i = e["sigBytes"];
                    if (this["clamp"](), r % 4) for (var s = 0; s < i; s++) {
                        var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                        t[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8;
                    } else for (s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
                    return this["sigBytes"] += i, this;
                },
                "clamp": function () {
                    var e = this["words"],
                        t = this["sigBytes"];
                    e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e["length"] = Math["ceil"](t / 4);
                }
            }),
            s = t["enc"] = {},
            u = s["Latin1"] = {
                "parse": function (e) {
                    for (var t = e["length"], n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e["charCodeAt"](r)) << 24 - r % 4 * 8;
                    return new l["init"](n, t);
                }
            },
            o = s["Utf8"] = {
                "parse": function (e) {
                    return u["parse"](unescape(encodeURIComponent(e)));
                }
            },
            _ = r["BufferedBlockAlgorithm"] = i["extend"]({
                "reset": function () {
                    this["$_FC_"] = new l["init"](), this["$_FDW"] = 0;
                },
                "$_FEY": function (e) {
                    "string" == typeof e && (e = o["parse"](e)), this["$_FC_"]["concat"](e), this["$_FDW"] += e["sigBytes"];
                },
                "$_FFU": function (e) {
                    var t = this["$_FC_"],
                        n = t["words"],
                        r = t["sigBytes"],
                        i = this["blockSize"],
                        s = r / (4 * i),
                        o = (s = e ? Math["ceil"](s) : Math["max"]((0 | s) - this["$_FGY"], 0)) * i,
                        _ = Math["min"](4 * o, r);
                    if (o) {
                        for (var a = 0; a < o; a += i) this["$_FHR"](n, a);
                        var c = n["splice"](0, o);
                        t["sigBytes"] -= _;
                    }
                    return new l["init"](c, _);
                },
                "$_FGY": 0
            }),
            a = t["algo"] = {},
            c = r["Cipher"] = _["extend"]({
                "cfg": i["extend"](),
                "createEncryptor": function (e, t) {
                    return this["create"](this["$_FIY"], e, t);
                },
                "init": function (e, t, n) {
                    this["cfg"] = this["cfg"]["extend"](n), this["$_FJI"] = e, this["$_GAO"] = t, this["reset"]();
                },
                "reset": function () {
                    _["reset"]["call"](this), this["$_GBz"]();
                },
                "process": function (e) {
                    return this["$_FEY"](e), this["$_FFU"]();
                },
                "finalize": function (e) {
                    return e && this["$_FEY"](e), this["$_GCN"]();
                },
                "keySize": 4,
                "ivSize": 4,
                "$_FIY": 1,
                "$_GDn": 2,
                "$_GEQ": function (c) {
                    return {
                        "encrypt": function (e, t, n) {
                            t = u["parse"](t), n && n["iv"] || ((n = n || {})["iv"] = u["parse"]("0000000000000000"));
                            for (var r = m["encrypt"](c, e, t, n), i = r["ciphertext"]["words"], s = r["ciphertext"]["sigBytes"], o = [], _ = 0; _ < s; _++) {
                                var a = i[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                                o["push"](a);
                            }
                            return o;
                        }
                    };
                }
            }),
            h = t["mode"] = {},
            p = r["BlockCipherMode"] = i["extend"]({
                "createEncryptor": function (e, t) {
                    return this["Encryptor"]["create"](e, t);
                },
                "init": function (e, t) {
                    this["$_GFL"] = e, this["$_GGK"] = t;
                }
            }),
            d = h["CBC"] = ((e = p["extend"]())["Encryptor"] = e["extend"]({
                "processBlock": function (e, t) {
                    var n = this["$_GFL"],
                        r = n["blockSize"];
                    (function o(e, t, n) {
                        var r = this["$_GGK"];
                        if (r) {
                            var i = r;
                            this["$_GGK"] = undefined;
                        } else var i = this["$_GHL"];
                        for (var s = 0; s < n; s++) e[t + s] ^= i[s];
                    })["call"](this, e, t, r), n["encryptBlock"](e, t), this["$_GHL"] = e["slice"](t, t + r);
                }
            }), e),
            g = (t["pad"] = {})["Pkcs7"] = {
                "pad": function (e, t) {
                    for (var n = 4 * t, r = n - e["sigBytes"] % n, i = r << 24 | r << 16 | r << 8 | r, s = [], o = 0; o < r; o += 4) s["push"](i);
                    var _ = l["create"](s, r);
                    e["concat"](_);
                }
            },
            f = r["BlockCipher"] = c["extend"]({
                "cfg": c["cfg"]["extend"]({
                    "mode": d,
                    "padding": g
                }),
                "reset": function () {
                    c["reset"]["call"](this);
                    var e = this["cfg"],
                        t = e["iv"],
                        n = e["mode"];
                    if (this["$_FJI"] == this["$_FIY"]) var r = n["createEncryptor"];
                    this["$_GIt"] && this["$_GIt"]["$_GJY"] == r ? this["$_GIt"]["init"](this, t && t["words"]) : (this["$_GIt"] = r["call"](n, this, t && t["words"]), this["$_GIt"]["$_GJY"] = r);
                },
                "$_FHR": function (e, t) {
                    this["$_GIt"]["processBlock"](e, t);
                },
                "$_GCN": function () {
                    var e = this["cfg"]["padding"];
                    if (this["$_FJI"] == this["$_FIY"]) {
                        e["pad"](this["$_FC_"], this["blockSize"]);
                        var t = this["$_FFU"](!0);
                    }
                    return t;
                },
                "blockSize": 4
            }),
            v = r["CipherParams"] = i["extend"]({
                "init": function (e) {
                    this["mixIn"](e);
                }
            }),
            m = r["SerializableCipher"] = i["extend"]({
                "cfg": i["extend"](),
                "encrypt": function (e, t, n, r) {
                    r = this["cfg"]["extend"](r);
                    var i = e["createEncryptor"](n, r),
                        s = i["finalize"](t),
                        o = i["cfg"];
                    return v["create"]({
                        "ciphertext": s,
                        "key": n,
                        "iv": o["iv"],
                        "algorithm": e,
                        "mode": o["mode"],
                        "padding": o["padding"],
                        "blockSize": e["blockSize"],
                        "formatter": r["format"]
                    });
                }
            }),
            w = [],
            x = [],
            y = [],
            b = [],
            k = [],
            E = [],
            C = [],
            S = [],
            T = [],
            O = [];
        !function () {
            for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
            var n = 0,
                r = 0;
            for (t = 0; t < 256; t++) {
                var i = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                i = i >>> 8 ^ 255 & i ^ 99, w[n] = i;
                var s = e[x[i] = n],
                    o = e[s],
                    _ = e[o],
                    a = 257 * e[i] ^ 16843008 * i;
                y[n] = a << 24 | a >>> 8, b[n] = a << 16 | a >>> 16, k[n] = a << 8 | a >>> 24, E[n] = a;
                a = 16843009 * _ ^ 65537 * o ^ 257 * s ^ 16843008 * n;
                C[i] = a << 24 | a >>> 8, S[i] = a << 16 | a >>> 16, T[i] = a << 8 | a >>> 24, O[i] = a, n ? (n = s ^ e[e[e[_ ^ s]]], r ^= e[e[r]]) : n = r = 1;
            }
        }();
        var A = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            D = a["AES"] = f["extend"]({
                "$_GBz": function () {
                    if (!this["$_HAU"] || this["$_HBr"] !== this["$_GAO"]) {
                        for (var e = this["$_HBr"] = this["$_GAO"], t = e["words"], n = e["sigBytes"] / 4, r = 4 * (1 + (this["$_HAU"] = 6 + n)), i = this["$_HCH"] = [], s = 0; s < r; s++) if (s < n) i[s] = t[s]; else {
                            var o = i[s - 1];
                            s % n ? 6 < n && s % n == 4 && (o = w[o >>> 24] << 24 | w[o >>> 16 & 255] << 16 | w[o >>> 8 & 255] << 8 | w[255 & o]) : (o = w[(o = o << 8 | o >>> 24) >>> 24] << 24 | w[o >>> 16 & 255] << 16 | w[o >>> 8 & 255] << 8 | w[255 & o], o ^= A[s / n | 0] << 24), i[s] = i[s - n] ^ o;
                        }
                        for (var _ = this["$_HDB"] = [], a = 0; a < r; a++) {
                            s = r - a;
                            if (a % 4) o = i[s]; else o = i[s - 4];
                            _[a] = a < 4 || s <= 4 ? o : C[w[o >>> 24]] ^ S[w[o >>> 16 & 255]] ^ T[w[o >>> 8 & 255]] ^ O[w[255 & o]];
                        }
                    }
                },
                "encryptBlock": function (e, t) {
                    this["$_HEJ"](e, t, this["$_HCH"], y, b, k, E, w);
                },
                "$_HEJ": function (e, t, n, r, i, s, o, _) {
                    for (var a = this["$_HAU"], c = e[t] ^ n[0], l = e[t + 1] ^ n[1], u = e[t + 2] ^ n[2], h = e[t + 3] ^ n[3], p = 4, d = 1; d < a; d++) {
                        var g = r[c >>> 24] ^ i[l >>> 16 & 255] ^ s[u >>> 8 & 255] ^ o[255 & h] ^ n[p++],
                            f = r[l >>> 24] ^ i[u >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[255 & c] ^ n[p++],
                            v = r[u >>> 24] ^ i[h >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[255 & l] ^ n[p++],
                            m = r[h >>> 24] ^ i[c >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & u] ^ n[p++];
                        c = g, l = f, u = v, h = m;
                    }
                    g = (_[c >>> 24] << 24 | _[l >>> 16 & 255] << 16 | _[u >>> 8 & 255] << 8 | _[255 & h]) ^ n[p++], f = (_[l >>> 24] << 24 | _[u >>> 16 & 255] << 16 | _[h >>> 8 & 255] << 8 | _[255 & c]) ^ n[p++], v = (_[u >>> 24] << 24 | _[h >>> 16 & 255] << 16 | _[c >>> 8 & 255] << 8 | _[255 & l]) ^ n[p++], m = (_[h >>> 24] << 24 | _[c >>> 16 & 255] << 16 | _[l >>> 8 & 255] << 8 | _[255 & u]) ^ n[p++];
                    e[t] = g, e[t + 1] = f, e[t + 2] = v, e[t + 3] = m;
                },
                "keySize": 8
            });
        return t["AES"] = f["$_GEQ"](D), t["AES"];
    }(),
    w = {
        "$_DAH": {
            "$_DBV": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
            "$_DCS": ".",
            "$_DDU": 7274496,
            "$_DEf": 9483264,
            "$_DFC": 19220,
            "$_DG_": 235,
            "$_DHY": 24
        },
        "$_DBV": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "$_DCS": ".",
        "$_DDU": 7274496,
        "$_DEf": 9483264,
        "$_DFC": 19220,
        "$_DG_": 235,
        "$_DHY": 24,
        "$_DIG": function (e) {
            for (var t = [], n = 0, r = e["length"]; n < r; n += 1) t["push"](e["charCodeAt"](n));
            return t;
        },
        "$_DJx": function (e) {
            for (var t = "", n = 0, r = e["length"]; n < r; n += 1) t += String["fromCharCode"](e[n]);
            return t;
        },
        "$_EAu": function (e) {
            var t = this["$_DBV"];
            return e < 0 || e >= t["length"] ? "." : t["charAt"](e);
        },
        "$_EBs": function (e) {
            return this["$_DBV"]["indexOf"](e);
        },
        "$_ECc": function (e, t) {
            return e >> t & 1;
        },
        "$_EDb": function (e, i) {
            var s = this;
            i || (i = s);
            for (var t = function (e, t) {
                for (var n = 0, r = i["$_DHY"] - 1; 0 <= r; r -= 1) 1 === s["$_ECc"](t, r) && (n = (n << 1) + s["$_ECc"](e, r));
                return n;
            }, n = "", r = "", o = e["length"], _ = 0; _ < o; _ += 3) {
                var a;
                if (_ + 2 < o) a = (e[_] << 16) + (e[_ + 1] << 8) + e[_ + 2], n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])) + s["$_EAu"](t(a, i["$_DFC"])) + s["$_EAu"](t(a, i["$_DG_"])); else {
                    var c = o % 3;
                    2 == c ? (a = (e[_] << 16) + (e[_ + 1] << 8), n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])) + s["$_EAu"](t(a, i["$_DFC"])), r = i["$_DCS"]) : 1 == c && (a = e[_] << 16, n += s["$_EAu"](t(a, i["$_DDU"])) + s["$_EAu"](t(a, i["$_DEf"])), r = i["$_DCS"] + i["$_DCS"]);
                }
            }
            return {
                "res": n,
                "end": r
            };
        },
        "$_EEs": function (e) {
            var t = this["$_EDb"](this["$_DIG"](e));
            return t["res"] + t["end"];
        },
        "$_EFO": function (e) {
            var t = this["$_EDb"](e);
            return t["res"] + t["end"];
        },
        "$_EGQ": function (e, s) {
            var o = this;
            s || (s = o);
            for (var t = function (e, t) {
                if (e < 0) return 0;
                for (var n = 5, r = 0, i = s["$_DHY"] - 1; 0 <= i; i -= 1) 1 === o["$_ECc"](t, i) && (r += o["$_ECc"](e, n) << i, n -= 1);
                return r;
            }, n = e["length"], r = "", i = 0; i < n; i += 4) {
                var _ = t(o["$_EBs"](e["charAt"](i)), s["$_DDU"]) + t(o["$_EBs"](e["charAt"](i + 1)), s["$_DEf"]) + t(o["$_EBs"](e["charAt"](i + 2)), s["$_DFC"]) + t(o["$_EBs"](e["charAt"](i + 3)), s["$_DG_"]),
                    a = _ >> 16 & 255;
                if (r += String["fromCharCode"](a), e["charAt"](i + 2) !== s["$_DCS"]) {
                    var c = _ >> 8 & 255;
                    if (r += String["fromCharCode"](c), e["charAt"](i + 3) !== s["$_DCS"]) {
                        var l = 255 & _;
                        r += String["fromCharCode"](l);
                    }
                }
            }
            return r;
        },
        "$_EHE": function (e) {
            var t = 4 - e["length"] % 4;
            if (t < 4) for (var n = 0; n < t; n += 1) e += this["$_DCS"];
            return this["$_EGQ"](e);
        },
        "$_EIZ": function (e) {
            return this["$_EHE"](e);
        }
    }

function get_tt(e, t, n) {
    if (!t || !n) return e;
    var r,
        i = 0,
        s = e,
        o = t[0],
        _ = t[2],
        a = t[4];
    while (r = n["substr"](i, 2)) {
        i += 2;
        var c = parseInt(r, 16),
            l = String["fromCharCode"](c),
            u = (o * c * c + _ * c + a) % e["length"];
        s = s["substr"](0, u) + l + s["substr"](u);
    }
    return s;
}

function get_rp(e) {
    function a(e, t) {
        return e << t | e >>> 32 - t;
    }

    function c(e, t) {
        var n, r, i, s, o;
        return i = 2147483648 & e, s = 2147483648 & t, o = (1073741823 & e) + (1073741823 & t), (n = 1073741824 & e) & (r = 1073741824 & t) ? 2147483648 ^ o ^ i ^ s : n | r ? 1073741824 & o ? 3221225472 ^ o ^ i ^ s : 1073741824 ^ o ^ i ^ s : o ^ i ^ s;
    }

    function t(e, t, n, r, i, s, o) {
        return c(a(e = c(e, c(c(function _(e, t, n) {
            return e & t | ~e & n;
        }(t, n, r), i), o)), s), t);
    }

    function n(e, t, n, r, i, s, o) {
        return c(a(e = c(e, c(c(function _(e, t, n) {
            return e & n | t & ~n;
        }(t, n, r), i), o)), s), t);
    }

    function r(e, t, n, r, i, s, o) {
        return c(a(e = c(e, c(c(function _(e, t, n) {
            return e ^ t ^ n;
        }(t, n, r), i), o)), s), t);
    }

    function i(e, t, n, r, i, s, o) {
        return c(a(e = c(e, c(c(function _(e, t, n) {
            return t ^ (e | ~n);
        }(t, n, r), i), o)), s), t);
    }

    function s(e) {
        var t,
            n = "",
            r = "";
        for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255)["toString"](16))["substr"](r["length"] - 2, 2);
        return n;
    }

    var o, _, l, u, h, p, d, g, f, v;
    for (o = function m(e) {
        var t,
            n = e["length"],
            r = n + 8,
            i = 16 * (1 + (r - r % 64) / 64),
            s = Array(i - 1),
            o = 0,
            _ = 0;
        while (_ < n) o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | e["charCodeAt"](_) << o, _++;
        return o = _ % 4 * 8, s[t = (_ - _ % 4) / 4] = s[t] | 128 << o, s[i - 2] = n << 3, s[i - 1] = n >>> 29, s;
    }(e = function w(e) {
        e = e["replace"](/\r\n/g, "\n");
        for (var t = "", n = 0; n < e["length"]; n++) {
            var r = e["charCodeAt"](n);
            r < 128 ? t += String["fromCharCode"](r) : (127 < r && r < 2048 ? t += String["fromCharCode"](r >> 6 | 192) : (t += String["fromCharCode"](r >> 12 | 224), t += String["fromCharCode"](r >> 6 & 63 | 128)), t += String["fromCharCode"](63 & r | 128));
        }
        return t;
    }(e)), d = 1732584193, g = 4023233417, f = 2562383102, v = 271733878, _ = 0; _ < o["length"]; _ += 16) g = i(g = i(g = i(g = i(g = r(g = r(g = r(g = r(g = n(g = n(g = n(g = n(g = t(g = t(g = t(g = t(u = g, f = t(h = f, v = t(p = v, d = t(l = d, g, f, v, o[_ + 0], 7, 3614090360), g, f, o[_ + 1], 12, 3905402710), d, g, o[_ + 2], 17, 606105819), v, d, o[_ + 3], 22, 3250441966), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 4], 7, 4118548399), g, f, o[_ + 5], 12, 1200080426), d, g, o[_ + 6], 17, 2821735955), v, d, o[_ + 7], 22, 4249261313), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 8], 7, 1770035416), g, f, o[_ + 9], 12, 2336552879), d, g, o[_ + 10], 17, 4294925233), v, d, o[_ + 11], 22, 2304563134), f = t(f, v = t(v, d = t(d, g, f, v, o[_ + 12], 7, 1804603682), g, f, o[_ + 13], 12, 4254626195), d, g, o[_ + 14], 17, 2792965006), v, d, o[_ + 15], 22, 1236535329), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 1], 5, 4129170786), g, f, o[_ + 6], 9, 3225465664), d, g, o[_ + 11], 14, 643717713), v, d, o[_ + 0], 20, 3921069994), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 5], 5, 3593408605), g, f, o[_ + 10], 9, 38016083), d, g, o[_ + 15], 14, 3634488961), v, d, o[_ + 4], 20, 3889429448), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 9], 5, 568446438), g, f, o[_ + 14], 9, 3275163606), d, g, o[_ + 3], 14, 4107603335), v, d, o[_ + 8], 20, 1163531501), f = n(f, v = n(v, d = n(d, g, f, v, o[_ + 13], 5, 2850285829), g, f, o[_ + 2], 9, 4243563512), d, g, o[_ + 7], 14, 1735328473), v, d, o[_ + 12], 20, 2368359562), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 5], 4, 4294588738), g, f, o[_ + 8], 11, 2272392833), d, g, o[_ + 11], 16, 1839030562), v, d, o[_ + 14], 23, 4259657740), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 1], 4, 2763975236), g, f, o[_ + 4], 11, 1272893353), d, g, o[_ + 7], 16, 4139469664), v, d, o[_ + 10], 23, 3200236656), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 13], 4, 681279174), g, f, o[_ + 0], 11, 3936430074), d, g, o[_ + 3], 16, 3572445317), v, d, o[_ + 6], 23, 76029189), f = r(f, v = r(v, d = r(d, g, f, v, o[_ + 9], 4, 3654602809), g, f, o[_ + 12], 11, 3873151461), d, g, o[_ + 15], 16, 530742520), v, d, o[_ + 2], 23, 3299628645), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 0], 6, 4096336452), g, f, o[_ + 7], 10, 1126891415), d, g, o[_ + 14], 15, 2878612391), v, d, o[_ + 5], 21, 4237533241), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 12], 6, 1700485571), g, f, o[_ + 3], 10, 2399980690), d, g, o[_ + 10], 15, 4293915773), v, d, o[_ + 1], 21, 2240044497), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 8], 6, 1873313359), g, f, o[_ + 15], 10, 4264355552), d, g, o[_ + 6], 15, 2734768916), v, d, o[_ + 13], 21, 1309151649), f = i(f, v = i(v, d = i(d, g, f, v, o[_ + 4], 6, 4149444226), g, f, o[_ + 11], 10, 3174756917), d, g, o[_ + 2], 15, 718787259), v, d, o[_ + 9], 21, 3951481745), d = c(d, l), g = c(g, u), f = c(f, h), v = c(v, p);
    return (s(d) + s(g) + s(f) + s(v))["toLowerCase"]();

}

function get_W(click_xy, pic, cc, ss, gt, challenge) {
    bb = "44d940cb28c197ba"
    var u = new H()["encrypt"](bb);
    // console.log(u)
    s = 'M(*((1((M(('
    o = {
        "lang": "zh-cn",
        "passtime": 2088,
        "a": click_xy,
        "pic": pic,
        "tt": get_tt(s, cc, ss),
        "ep": {
    "ca": [
        {
            "x": 682,
            "y": 175,
            "t": 1,
            "dt": 6982
        },
        {
            "x": 772,
            "y": 104,
            "t": 1,
            "dt": 541
        },
        {
            "x": 634,
            "y": 74,
            "t": 1,
            "dt": 509
        },
        {
            "x": 831,
            "y": 346,
            "t": 0,
            "dt": 751
        },
        {
            "x": 834,
            "y": 359,
            "t": 3,
            "dt": 285
        }
    ],
    "v": "3.1.0",
    "$_FB": false,
    "me": true,
    "tm": {
        "a": 1706952209562,
        "b": 1706952209957,
        "c": 1706952209957,
        "d": 0,
        "e": 0,
        "f": 1706952209567,
        "g": 1706952209567,
        "h": 1706952209567,
        "i": 1706952209573,
        "j": 1706952209884,
        "k": 1706952209573,
        "l": 1706952209884,
        "m": 1706952209953,
        "n": 1706952209954,
        "o": 1706952209959,
        "p": 1706952210784,
        "q": 1706952210784,
        "r": 1706952210793,
        "s": 1706952211020,
        "t": 1706952211020,
        "u": 1706952211022
    }
},
        "h9s9": "1816378497",
        "rp": get_rp(gt + challenge + 2088)
    }
    h = X["encrypt"](JSON.stringify(o), bb)
    p = w["$_EFO"](h)
    return p + u

}

// console.log(get_W("3697_2415,8526_2745,5616_4394", "/captcha_v3/batch/v3/59647/2024-01-23T21/word/82201600440542cd902e4018821637cd.jpg", [
//     12,
//     58,
//     98,
//     36,
//     43,
//     95,
//     62,
//     15,
//     12
// ], '2c3a794e','6216680937717fdab947ed9e71a3aaa1',"b4c1dd11fa14f1b907834691b9e8f065"));



