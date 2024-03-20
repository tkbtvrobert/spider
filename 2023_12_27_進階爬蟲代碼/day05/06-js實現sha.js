
var crypto = require('crypto-js')

function get_sha(aa) {
    return crypto.SHA1(aa).toString()
}

console.log(get_sha('123'));
console.log(get_sha('123').length);