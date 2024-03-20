
(function () {
    cookie_data = document.cookie;
    Object.defineProperty(document, 'cookie',{
        set: function (val) {
            if (val.indexOf('v') != -1){
                debugger
            }
            console.log('hook到cookie的值:', val);
            cookie_data = val;

        },
        get: function () {
            return cookie_data
        }
    })
})()

