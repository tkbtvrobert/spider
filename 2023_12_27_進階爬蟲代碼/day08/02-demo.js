var crypto = require('crypto-js')

p = function (e) {
    void 0 === e && (e = 16);
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = "", r = 0; r < e; r++) {
        n += t[Math.ceil(61 * Math.random())]
    }
    return n
};

h = function (e, t) {
    return e ? ("string" != typeof e && (e = e.toString()),
        l(e, t.iv)) : ""
};

function u() {
    var e, t, n, r, i = null;
    return t = new RegExp("\\u200c", "g"),
        n = new RegExp("\\u200d", "g"),
        r = new RegExp(".{8}", "g"),
        e = "".replace(r, (function (e) {
                return String.fromCharCode(parseInt(e.replace(t, 1).replace(n, 0), 2))
            }
        )),
        i = {
            key: crypto.enc.Utf8.parse(e),
            mode: crypto.mode.CBC,
            pad: crypto.pad.Pkcs7
        },
        i
}

l = function (e, t) {
    void 0 === e && (e = ""),
    void 0 === t && (t = "");
    var n = u()
        , r = crypto.AES.encrypt(e.toString(), n.key, {
        iv: crypto.enc.Utf8.parse(t),
        mode: n.mode,
        padding: n.pad
    });
    return r = r.toString()
};

function get_data(n) {
    s = p();
    // console.log(s);
    t = h(n, {
        iv: s
    }).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "~");
    // console.log(t);
    return {
        'b': t,
        'kiv': s
    }
}

console.log(get_data());

c = function (e, t) {
    void 0 === e && (e = ""),
    void 0 === t && (t = "");
    var n = u()
        , r = crypto.AES.decrypt(e.toString(), n.key, {
        iv: crypto.enc.Utf8.parse(t),
        mode: n.mode,
        padding: n.pad
    });
    return r = r.toString(crypto.enc.Utf8)
}