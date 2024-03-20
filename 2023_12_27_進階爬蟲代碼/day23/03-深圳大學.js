

delete __filename
delete __dirname

function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen']

// -----------window----------
window = global
window.top = window
window.addEventListener = function (res) {
    console.log('window中的addEventListener接受的參數:', res);
}
window.self = window
window.TEMPORARY = 0;
window.localStorage = {};
window.sessionStorage = {};
window.execScript = eval;
window.XMLHttpRequest = function(){console.log('window.XMLHttpRequest--->',arguments);};
window.ActiveXObject = function(){console.log('window.ActiveXObject--->',arguments);};
window.name = '';
window.globalStorage = {};
window.indexedDB = {};
window.mozIndexedDB = {};
window.webkitIndexedDB = {};
window.msIndexedDB = {};
window.PointerEvent = function(){console.log('window.PointerEvent--->',arguments);};
window.jesion = {};
window.chrome = {
    "app": {
        "isInstalled": false,
        "InstallState": {
            "DISABLED": "disabled",
            "INSTALLED": "installed",
            "NOT_INSTALLED": "not_installed"
        },
        "RunningState": {
            "CANNOT_RUN": "cannot_run",
            "READY_TO_RUN": "ready_to_run",
            "RUNNING": "running"
        }
    }
};
window.webkitRequestFileSystem = function(){console.log('window.webkitRequestFileSystem--->',arguments);};
window.openDatabase = function(){console.log('window.openDatabase--->',arguments);};





// -----------document----------
document = {
    createElement: function (res) {
        console.log('document的createElement接受的参数:', res)
        if (res == 'div'){
            return {
                getElementsByTagName: function (res) {
                    console.log('div的getElementsByTagName接受的参数:', res)
                    if (res == 'i'){
                        return []
                    }
                }
            }
        }
        if (res == 'form'){
            return {length: 0}
        }
    },
    getElementsByTagName: function (res) {
        console.log('document的getElementsByTagName接受的参数:', res)
        if (res == 'meta'){
            return [
                {},
                {
                    content: "'content_code'",
                    parentNode:{
                        removeChild: function (res) {
                            console.log('meta.parentNode中的removeChild接受的参数:', res);
                        }
                    }
                }

            ]
        }
        if (res == 'base'){
            return []
        }
        if (res == 'script') {
            return {
                0: {
                    getAttribute: function (res) {
                        if (res == 'r') {
                            return 'm'
                        }
                    },
                    parentElement: {
                        removeChild: function (res) {
                            console.log('script.parentElement中的removeChild接受的參數:', res);
                        }
                    }
                },
                1: {
                    getAttribute: function (res) {
                        if (res == 'r') {
                            return 'm'
                        }
                    },
                    parentElement: {
                        removeChild: function (res) {
                            console.log('script.parentElement中的removeChild接受的參數:', res);
                        }
                    }
                },
                length: 2
            }
        }
    },
    getElementById: function (res) {
        console.log('document的getElementById接受的参数:', res)

    },
    addEventListener: function (res) {
        console.log('document的addEventListener接受的参数:', res)
        return []
    },
    documentElement: {
        addEventListener: function (res) {
            console.log('document的documentElement的addEventListener接受的参数:', res)
        }
    }
}

// aa[documentElement][addEventListener]

navigator = {
    connection: {
        downlink: 10,
        effectiveType: "4g",
        onchange: null,
        rtt: 200,
        saveData: false
    },
    getBattery: res => {
        console.log('navigator.getBattery 获取的对象是：', res)
        return undefined
    },
    languages: ["zh-CN", "en", "en-GB", "en-US"],
    platform: "Win32",
    webdriver: false,
    webkitPersistentStorage: {},
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
}


location = {
    "ancestorOrigins": {},
    "href": "https://sugh.szu.edu.cn/Html/News/Columns/6/Index.html",
    "origin": "https://sugh.szu.edu.cn",
    "protocol": "https:",
    "host": "sugh.szu.edu.cn",
    "hostname": "sugh.szu.edu.cn",
    "port": "",
    "pathname": "/Html/News/Columns/6/Index.html",
    "search": "",
    "hash": ""
}

get_enviroment(proxy_array)

setTimeout = function(){}
setInterval = function(){}


'ts_code'

!'func_code'

function get_cookie() {
    return document.cookie
}


get_cookie()

