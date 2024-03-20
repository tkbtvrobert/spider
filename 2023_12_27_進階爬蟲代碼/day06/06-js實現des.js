
var crypto = require('crypto-js')

// 加密
function desencrypt(deskey, desiv, text) {
    var key = crypto.enc.Utf8.parse(deskey),
        iv = crypto.enc.Utf8.parse(desiv),
        text = crypto.enc.Utf8.parse(text)
    dd = crypto.DES.encrypt(text, key, {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    })
    return dd.toString()
}

function desdecryptn(deskey, desiv, text) {
    var key = crypto.enc.Utf8.parse(deskey),
        iv = crypto.enc.Utf8.parse(desiv),
        // text = crypto.enc.Utf8.parse(text)
    dd = crypto.DES.decrypt(text, key, {
        iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
    })
    return dd.toString(crypto.enc.Utf8)
}

var text = "I love Python!1232343455465676782343453456567"       // 待加密对象
var desKey = "asdsdf234545234346sdfdfgdfghdfghfgh"    // 密钥
var desIv =  "dfghfghjghjgdfghfghfghfghj"    // 初始向量
data = desencrypt(desKey, desIv, text)
console.log(desencrypt(desKey, desIv, text));
console.log(desdecryptn(desKey, desIv, data));