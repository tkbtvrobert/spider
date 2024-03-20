var crypto = require('crypto-js')

function E(n, e) {
    C = "kbn%&)@<?FGkfs8sdf4Vg1*+;`kf5ndl$"
    return crypto.SHA256("param=" + JSON.stringify(n) + "&timestamp" + e + "&tenant=1&salt=" + C).toString()
}

function get_sign(n, e) {
    // var e = (new Date).getTime()
    // var e = 1704721692460
    // var n = {
    //     "no": "dy00022",
    //     "data": {
    //         "days": 1,
    //         "rankType": 5,
    //         "liveDay": "2024-01-06"
    //     }
    // }
    return E(n, e)
}