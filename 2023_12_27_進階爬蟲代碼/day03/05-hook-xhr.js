
// hook  xhr请求里面的请求参数的
(function () {
    var open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url, async) {
        if(url.indexOf('analysis') != -1){
            debugger
        }

        return open.apply(this, arguments)
    }
})();