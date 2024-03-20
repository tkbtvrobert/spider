
var crypto = require('crypto-js')

function hmacencrypt() {
    var text = 'python';
    var key = '12345';
    // return crypto.HmacMD5(text, key).toString()
    return crypto.HmacSHA1(text, key).toString()
}

console.log(hmacencrypt());
console.log(hmacencrypt().length);