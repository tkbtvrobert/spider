// aa = '{bb:123}'
//
// var _parse = JSON.parse;
//
// JSON.parse = function (pamars) {
//     console.log('被hook了')
//     debugger
// }
// bb = JSON.parse(aa)
// console.log(bb);

JSON.parse('{bb:123}')

(function () {
    var _parse = JSON.parse;
    JSON.parse = function (ps) {
        console.log('被hook了')
        debugger
        return _parse(ps)
    }
})();




