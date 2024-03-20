const parse = require('@babel/parser')
const fs = require('fs')
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? File1 = process.argv[2] : File1 = './_encode.js'
process.argv.length > 3 ? File2 = process.argv[2] : File2 = './_decode.js'

jscode = fs.readFileSync(File1, {encoding: 'utf-8'})
let ast = parse.parse(jscode);

function _0x23f5(){var _0x4ad7a2=['hc0/zG','WOpcUSoBW4hdOq','AhFdUf8u','W6fTgmkSEa','W6/dHImS','D3xcQmkRja','q8kGbuyx','W7ZdQNbQW6y','CgpdMcJdGCkUlq','xCkbWR4/fG','y0ZdHeBdUW','t8k2rSoSWQy','W55BW73dVGS','W4DFW6RdJdW','pSohBCkrWRi','t8oSBayF','W4/dVmkgWRtdGL1qWQ8Rk8kmgq','W7OGWONdGcW','uKVcG8kyea','vmoXyr8J','C8k1hKaO','WP5me8oQBq','W7itW4pdPSkb','s8kOjha3','W74/WPXebG','W69UW5VdTqK','rCoWlXG/','dCotxCkX','qeldMeJdUq','WQPVWRjCzW','w3hcHmkdjW','WOpdImkEW54','F8k8WPCb','zM/dNfqH','WOa4fCofWQi','c0nMWOJcOW','W7NcMCoDWQZcOW','W582ocK7','FCoUqcm9','WO3cOmk1r8kP','vCo3yqG','W7Otc0GB','W6/dIHicEq','W7/cT00','lxVdLmkrBa','f8owWPD+Fq','AJHgDvu','WQnesHDczhD7D8oiW6RcLZG','W7JdHCokcCkl','W6aAWOjbaG','jN7dTbtdGq','rv7cRmk9dq','W7OcWOJcNHDnWQe','W5VdJ8otiSkL','rSkBc3SA','cXWWyYm','q35ViMqVWPFdG8kOW5ZcNvaL','WPjXWPP2zW','p2mokNC','avyZgLK','W7mOW7qSuq','g3qnamoUW6fIuwhcP8ot','W7xdKSoreSom','WRWqWQlcKa','W7STdG8e','W4DMemo6W4i','tSkPWPCGfG','WPtdH8o1WPJcSW','W4FdJmoMbCkj','j0v4WPW','amo5yIddVG','cCotystdKa','kfajphO','tSkbWOeydG','umo5rZqn','W7RdKYa0rW','WPdcTmodW6pcNq','WPpcI8kpxSku','stT+F8kn','WRddM8olWQZcMG','xsPHsmkS','FhFcL8kbjW','W70rW5xdRmkH','WPRdISksfCke','WQOXWPZcGMldKJrWk8kaW40','WPpdLCkRWQO','qmkhkLuY','zfBcPSkboa','tNBdLfyv','w1RdRhKD','c2v9dGG','W41PDCk5W50','WPSaW4u','sKxdTHJcLG','rwNdPZ/cOW','zeNdPatcUq','bCkcuSoWWR0','WOBdISorrmoa','zMhdJ8k2Ea','W7fQW53dKJ4','rSkljNGm','yCk9ESoZWRG','CmksqgldUG','tJzUAgi','q2xdG13dGW','WQddICogvdy','WPdcPmkrASkn','W7xdLmo8m8kQ','W7TCW4VdVHy','wtTwwSky','W7SXW6/dH8kc','WRLtvmkwaa','W7RcImoJWRFcJW','pwXSeZO','W5SZdGyc','W7JdJcu2sG','W7CBhM05','Cmk3ymo1WR4','W7tcSequ','Emk8WOuhbW','W5qxhgGT','EuNdLxS','wNNdUfaH','EeRcRSkQpa','W7r/W67dUay','W6JdLZeSwW','wCoLsNSx','WPSCWP3cIWy','WOFdTmkRWQO','WOexoSoJWRG','xmo0WO82Bq','BKNdPfFdVa','WQRcKHCSxCopsbe','lam2yJS','W5XBlmkDFW','W6xdG8oFeSkh','u8oLzhCM','AmkXWOuCcG','W6eAW7BdUSk3','WR1VqCkemG','sgVcO8kvkq','WPa9WPxcTY0','C1tcJmkecW','WORcKmotfSkv','ELrPqq','BNNdQWtcLG','W70XWQ7cOmo8','W5tcSCobWPlcHq','W7JdTKvJW4y','W7e/WRmwpW','WQ7dISo9AG','rCoTA3SI','ANpdIq','A8kbtCoLWRK','W4JcUmoVWRBcGa','W7OVWP9KmG','hxxdPtNdJa','W5ldNmojeCkc','WQFcU8onW7ldIG','uu3dJctcOG','W4j4cmosW74','WPxdJ8kxWP3dRa','tmk7WQirbW','WO/dRCo3tJO','W7VdQKTHW40','DSkRzmoL','WQaFW6VcKCkx','WO5BACkooW','WQNcMMjOdCkcDZ54AGVcHq','W5GxW6JdSmk7','W7K5WQPWjG','W5NdRSoqdCkO','W7zNW44','W7HXgmkHra','W77cV2eunq','WPVdN8oSWPS','WOivoSoVWOa','xc1PF2G','WO7cMmkhv8kq','WPZdT8oeWR7cKq','EmkTWOubaq','eSoLs8kOWPi','hCogWO58sW','ngxdVcddPW','WPmNW6ZcImkB','W6ztf8o3W7a','WOyhW4pcL8kQ','WOqXlCo7WO8','EYHQF8kQ','xCk8WQa3jq','WRRcPYKUWRW','W4ldOuPeW7m','W6tdMhn9W4i','iH0orqS','hxddMWldQq','qMhdPmkvDa','ASoMF3O/','uSkfxMldIG','W4BdPCoxbmkm','Amk4WOGz','bgzXWQ3cVq','WP1EESkkbW','W6D1eW','W7u6fCoHzItdU0i','xSoeWQm9Bq','FuNdV8kQtG','W4uOWRPWba','WOamWPxcQcq','WONdGSk6WRRdSq','W4K2W7qevG','emouWRTcAW','WOpdJmkMcmk+','WOVdRCoLws4','WRtcQ08ega','m8oeWO11yW','W5CGeqqt','ughdKWhcOq','WOFcR8oUW6tdKW','eSoXvXZdNa','W5K/WOfZfa','WQlcM8okW4hdIa','lCoaytJdIa','WQRcJ8oFW63cMG','nKPpWONcLa','WRmdoCoihG','WPJdMmkbaW','WQNdGmoXBdG','W6bUpmkVFW','W6KfhfuB','WPVdNmkagq','W7m3nWyI','p8oeE8klWPq','Bt3cHL0M','ymkYWQ4bpq','WORcNCo7W6JcKW','W457mCopW4W','rCo4WQW4vW','vxldLMSz','WPW7W6dcI8k1','W5i2W50KxG','oxbsoJm','W5y0mYmJ','WOFcHmkzW57cRG','WPldKCkCW5pdLa','fMCNc0W','W6aRW6pdPW','lgCLgxu','W4aKW5y9','W6FdPw9R','W5PiW7VdIZG','W4ixmxad','WOX2WQj6va','sCopx1W4','W7/dQhjKW5q','W7ddLXGtFa','gNnMWORcIG','vCkRDSomWOK','WQJcJ8oxW6ldQa','zWzHvCky','W6tcJSoSWRq','ifvVWQdcNW','BSk3ESoNWRG','BvxdR8khuG','BSkIq8oTWRS','WOJcRmoYW6BdUq','W5LXlmoi','W4LEhCklxG','WPpdLmktW47dJW','W543W5WlxW','WRLHhCowzq','Amk2WOOgea','W7PwjSoEW7S','hv5er1XxCmoo','g0Sibvu','WPddMmoL','W7edW4FdNSk/','nCojichcVmkFjJiLW7C7jSoD','W6qJWRTcaq','W5L7dmoiW4O','yM3dNLCQ','W7WKW4FdRCkm','WPpdNSk6WRhdHW','WQvCCSktbW','WQ/dNCoTCcu','W7xdUfrQW7O','pCokWPbiBG','WP4bW4u','vq3dSmo1ha','WQ3cVmkFB8ks','sIBcQvu','WOvrW4zOrr5qsmo7WPZdPhDH','W68jd0q','WPFdImkBWOhdHG','ASkPWPqzhq','WOvRe8o8rq','W5n1ASkGW4rGcKjoW6OKlvW','v2VdTdZcVq','Bx3dQtdcTa','WPahW4ZcGW','rcPHCSk8','WONcQSoNW7dcGW','W7agWPCCbG','Be/dQSksrq','W786W6a2qa','vCoevqG1','W7RdPmoKb8kQ','WQGenCo2WQe','W4qSW508CG','W4xdQmo8nCks','nNjTeW','yuZdQctcVG','BSkiW4DAnW','W7KIWOfc','WO7dLmkeWOddNq','W5mdWRqZcW','nCogyH/dUW','wCo9EWu4','WPb3WRv2xa','pX7cSXZcP8o0qSkOoSkGW6vm','jmomEbNdVq','bmoIpHbN','rqfK','WQTng8kwuq','WR7dLCo5Dby','AM/cJSkboW','WQFcVda8WQdcNmoNxmkGye0uW7q','W7XOW4xdLW','WP9kj8o2wG','ESoSwvuu','W6SkkrqH','W5xcNh0iiq','W50wW5D2wq','WPFdJ8k8cSkB','WPeMx8k6DG','W5xdJCkTWO/dOLVcPa','EIXTy0O','WRZcJmoSW5ZdPW','WPVcUCo2W7/dSG','yYXMyxW','lCorwsZdSW','wmohWPqrEa','W5PHW63dOse','W7iMWOL9eq','WQldT8k9WP/dVq','WRLCsCkZfa','WQRdTmk6b8k8','EZTnEmkv','W5pdHdG8ua','W4yZW4mJFW','uf/dGKeu','W5eQW4JdK8kK','Esf9xmkm','CCkCWPixaW','WRK3WQVcNdy','sSosq3GI','aGWUyXS','DCoZBr4L','ncGWCte','F27cICkj','q8ojWR8/tG','WQXTc8o5rq','W6X5W4xdKIu','WQRcUmo3W5JdRG','W57dIXqctG','W4u/WPKRfa','punYWPBcLq','WPPDdmo2BW','xSkIn0VdKW','vmoSEhS','WRWvkmoLWRW','W5CXW5W7Aq','WPWeWQJcJby','v8kkkKqT','l11JWQVcRa','WRJcImoTW5pcKa','W7xcTKqdgq','WPRdMCoSWOZcSa','D3ldVu8H','jwLydty','W6eDeNiE','vfNdQdpcLW','W5CXkmophq','s0hcJmkOba','FCoWWQKqAW','zqrIWORcKa','WRddMCkBWPRdNa','nMeimKm','WPXoBCkRla','W6tcReKeaG','BCo8zvWt','W6PtnSoyW5u','c8o3WR9ntW','ASo0WP40sq','rspdUJtdVG','WO/cGCoyW5ZdLq','ihldIqtdRq','WOOpWPpcNJ0','amosvt7dUG','W7LVf8kquG','dCoxtmkPWQq','WQLRhCoL','W6m9W5xcIq','yKRdVemq','W7FcQvOCfa','tmk8rvNdHa','WQVcS8oYW7FcMG','WPqzW6JcOmkv','W5ukmbSj','W7BdGImwrW','W6NdJs1FW4O','rmkFWOmyaq','q8oSBG8Y','W7unWQnHga','W7ZdLmoXjSkE','qgqrgq','FCoTEaG6','W4pdK8kvW47dLq','WPf3WPy','W5iXW440Fq','WO/cQCoSW6NdTa','lmolW55pCG','rColWOWxDW','omoqWPbyBG','W4OmpJay','W5PfW505ba','xNldO1xdVa','WPxcNCkKsSke','W5GvWRXpiW','ct85yd0','W50QpZSa','W6NcQCopWPFcMG','WPxdQCkac8k8','wW5Xxq','W7VdK8kVy2q','W7u0WQrtba','WO4pbCogWQC','B8k8WOya','W4SDW7ZdU8k7','W7/dQw5IW6e','wmozBaqt','W6NdLJmSuq','WRWifmoVWPS','hdRdQGtcN8oRWR/cHa','W5RdTGKDAq','hCo8mJFdKG','W7iLWOzs','xZXMvuG','WPxdKSkYWQFdOG','ruRdTdlcLW','W7ddO252W6e','WOu8W4tcPSkV','gcu0zZ0','W6ldICoHpW','kunX','Ew7dHvG0','WR97hmoKrq','W6SrhGCh','W6j1gSoefW','DSkiCgldPW','kK1rmty','F8krWRi5lq','sgpdJw7dPq','W5jlp8kTuG','E8ojWPKYFa','W7ldJtKS','fK9KWPdcNa','WQjjhmo4BG','cCoeqCkXWQ4','k8orWPXVtq','sw3dOxq5','smkbWReulG','W6PzhmkGFW','gueAdh4','FaTms2C','W7KYcW0j','WQ1/FSk3na','y1tdO8kyrG','zLtdRw/dGa','yHzKy3q','W45Fm8kUsW','ECkVoSoJWQm','kudcKCk1pghcOG','m3T6WPhcRG','W4/dVCknWRZdHv14WO0lgSk8ga','prBcNmoNctldJCo7W53dHCk7CSon','W5CNW77dJCkC','xdLBtCkY','l0bhWQ3cGq','dvHtgIS','CNtdVvqY','WPTkE8kojW','WOdcGSkhuSkp','W6GvhLmx','W40OWPq+jq','WOBdHSkvW4G','WOqAW6ZcOmkJ','W4DYbSo3W5K','WQdcNCojW5ZdUa','WOnpbSoOzG','W4GlWQP0pq','w8oVxtKb','n8o1Fb3dUa','uNddPhO1','zSkDF8oSWOa','W4tdOSoMbSku','W71GgCkDAW','zNRdICkomq','WPTTWP58dG','hx1sWOlcIW','W6GeduGA','W53dRCoaW7BcHa','WRJcOCkcAmkS','W5hcJSodW4lcMZxdSfNcG2xcHxJdVq','WRZcRSoLW7pcMW','W6r3b1um','WRVdGmkfh8k7','ASk9oeaZ','W4r6oa','q8o9AxC8','W6OSwXuy','D2/dJ1G2','W67dLCoFmmkL','kf82k28','W4tdOCoTcmks','ncZdJSogDW','WPK9W4FcISks','D8knF3/dVa','W4T2m8ol','WRlcQSoGW7tcIW','WO3dKmkDcq','W5GXcuWd','W6ZdUsiOva','W6n8p8kazq','r8k2zf3dVa','pMX7eci','WPFdU8kaW7ZdTW','W6pcIha9aa','WQpdO8keW7FdTa','sYv+DCkK','W58gimkdBW','W7hdLdWqEW','dNztgty','W4GDWQXmhq','jgqUo1W','WOTctSkdbG','W6dcJKyzjG','WR0GmSofWQu','W5hcNeChkW','qCoeWQWOEG','W7CKWOmYbG','WOtdJSkBWOFcGq','s3hcOCkEnq','WRxdK8okWO7cSG','rSkxo1C8','W5FdRCklWR7cQG','W70/o0Gg','WQr7eSogFW','WP0XWRtcKra','ECksWOGXha','v2FdRWBcMq','l8oGrH/dMq','W5hdNvDWW4m','W6FdO1nXW6C','WOa5WONcLda','muLKWO7cHa','zxpdMLldNq','W4/dT8o1kCkl','WOfyBCkqnW','W71efSoKW5W','sxJdHvy3','ya1qvuu','WQxdImkIW7xdGq','x3pcRHBcVa','WQtcPCkGr8kr','W6hcI0WXaW','gcu0zYy','kmoXwcpdUa','WOzfACkxnG','W59HpmoiW5C','W5eeWQu8kW','WPtdQmkXWOddIG'];_0x23f5=function(){return _0x4ad7a2};return _0x23f5()}function _0x1f9b(_0x5b7709,_0x70fac2){var _0xe8935c=_0x23f5();return _0x1f9b=function(_0x40f209,_0x11fb6b){_0x40f209=_0x40f209-(0x1f8f+ -0x3*-0x5d9+ -0x2fb5);var _0x3aa0c8=_0xe8935c[_0x40f209];if(_0x1f9b['oKLEGX']===undefined){var _0x32701a=function(_0x278e0d){var _0x2697b8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x494318='',_0x157997='',_0xa1fd5=_0x494318+_0x32701a;for(var _0x2d7bfa=0x27*-0x61+ -0xa06*-0x3+ -0xf4b,_0x3b8e8d,_0x547409,_0x2b074f=0x489+0x19a*-0x6+0x513;_0x547409=_0x278e0d['charAt'](_0x2b074f++);~_0x547409&&(_0x3b8e8d=_0x2d7bfa%(0x1*-0x215+0x4ae+0x1*-0x295)?_0x3b8e8d*(0x643*-0x6+ -0x16a6+0x2d*0x158)+_0x547409:_0x547409,_0x2d7bfa++%(0xd*-0x2d2+ -0x4ca*-0x3+0x1650))?_0x494318+=_0xa1fd5['charCodeAt'](_0x2b074f+(-0x101d*-0x2+ -0x1919+0x21*-0x37))-(-0x22c3+0xc79+0x4*0x595)!==-0x627+0x22f5+0x6*-0x4cd?String['fromCharCode'](-0xf56+ -0x218d+0x31e2&_0x3b8e8d>>(-(0x1109+ -0x1*-0x15b5+ -0x26bc)*_0x2d7bfa&-0x2*-0x115+0x1053+ -0x1277)):_0x2d7bfa:0x31*0x2+0x1*0x455+ -0x4b7){_0x547409=_0x2697b8['indexOf'](_0x547409)}for(var _0x4d2484=-0x4*-0x2ab+ -0xe98+0x3ec,_0x5d513c=_0x494318['length'];_0x4d2484<_0x5d513c;_0x4d2484++){_0x157997+='%'+('00'+_0x494318['charCodeAt'](_0x4d2484)['toString'](-0x673*0x5+0x1*-0x133c+0xd*0x3f7))['slice'](-(0x20be+0x47b+ -0x2537*0x1))}return decodeURIComponent(_0x157997)};var _0x44551f=function(_0x3bbb2e,_0x1a2f15){var _0x539a24=[],_0x5764e8=-0x1c71+0x7ce+0x14a3,_0x31526f,_0x5b742e='';_0x3bbb2e=_0x32701a(_0x3bbb2e);var _0x3024f7;for(_0x3024f7=-0x13f7+ -0x622+0x83*0x33;_0x3024f7<-0x829+0x5*0x12a+0xf*0x39;_0x3024f7++){_0x539a24[_0x3024f7]=_0x3024f7}for(_0x3024f7=0x2a8+ -0x20a9+ -0x1*-0x1e01;_0x3024f7<-0x11*-0x1fe+0x1*0x102f+ -0x310d;_0x3024f7++){_0x5764e8=(_0x5764e8+_0x539a24[_0x3024f7]+_0x1a2f15['charCodeAt'](_0x3024f7%_0x1a2f15['length']))%(0x1*0x171a+0x1a1a+0x4*-0xc0d),_0x31526f=_0x539a24[_0x3024f7],_0x539a24[_0x3024f7]=_0x539a24[_0x5764e8],_0x539a24[_0x5764e8]=_0x31526f}_0x3024f7=0x10a+ -0x25*-0x81+0x13af*-0x1,_0x5764e8=0x1ccd+ -0x8*-0x2e7+ -0x243*0x17;for(var _0x4199f1=-0x20b5+ -0x1*0xb8f+0x2c44;_0x4199f1<_0x3bbb2e['length'];_0x4199f1++){_0x3024f7=(_0x3024f7+(-0x29e+0x126d+ -0xfce))%(-0x2e*-0x4a+0x1411+0x5*-0x679),_0x5764e8=(_0x5764e8+_0x539a24[_0x3024f7])%(-0x1*-0x16d9+0x15b9+ -0x3f6*0xb),_0x31526f=_0x539a24[_0x3024f7],_0x539a24[_0x3024f7]=_0x539a24[_0x5764e8],_0x539a24[_0x5764e8]=_0x31526f,_0x5b742e+=String['fromCharCode'](_0x3bbb2e['charCodeAt'](_0x4199f1)^_0x539a24[(_0x539a24[_0x3024f7]+_0x539a24[_0x5764e8])%(-0x8*-0xfe+0x1608+ -0x4*0x73e)])}return _0x5b742e};_0x1f9b['gBBxUf']=_0x44551f,_0x5b7709=arguments,_0x1f9b['oKLEGX']=!![]}var _0xd866c7=_0xe8935c[0x18a9+ -0x1c1d+0x1*0x374],_0x45922e=_0x40f209+_0xd866c7,_0x1f6b1a=_0x5b7709[_0x45922e];if(!_0x1f6b1a){if(_0x1f9b['atyGIg']===undefined){var _0x187f79=function(_0x25f506){this['DcsdvD']=_0x25f506,this['yfKdrk']=[0x1e80+ -0x17bf+ -0x6c0,0x20d0+0x20d4+ -0x1069*0x4,-0x53*-0x7+ -0x796+0x551*0x1],this['OMwdJq']=function(){return'newState'},this['CVznzJ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['szdsRC']='[\x27|\x22].+[\x27|\x22];?\x20*}'};_0x187f79['prototype']['wZaTEC']=function(){var _0x590792=new RegExp(this['CVznzJ']+this['szdsRC']),_0x48d7ed=_0x590792['test'](this['OMwdJq']['toString']())?--this['yfKdrk'][0x59*-0x5e+0x3dd+ -0x3e*-0x77]:--this['yfKdrk'][-0x194e+0x7d5*0x4+ -0x2*0x303];return this['LkiecG'](_0x48d7ed)},_0x187f79['prototype']['LkiecG']=function(_0x2cf175){if(!Boolean(~_0x2cf175))return _0x2cf175;return this['cBbPxW'](this['DcsdvD'])},_0x187f79['prototype']['cBbPxW']=function(_0x1bb82b){for(var _0x50e810=-0x601+0x2084+ -0x1a83,_0x79085a=this['yfKdrk']['length'];_0x50e810<_0x79085a;_0x50e810++){this['yfKdrk']['push'](Math['round'](Math['random']())),_0x79085a=this['yfKdrk']['length']}return _0x1bb82b(this['yfKdrk'][-0x6*-0x454+ -0x53a+ -0x3b*0x5a])},new _0x187f79(_0x1f9b)['wZaTEC'](),_0x1f9b['atyGIg']=!![]}_0x3aa0c8=_0x1f9b['gBBxUf'](_0x3aa0c8,_0x11fb6b),_0x5b7709[_0x45922e]=_0x3aa0c8}else _0x3aa0c8=_0x1f6b1a;return _0x3aa0c8},_0x1f9b(_0x5b7709,_0x70fac2)}
(function(_0x3d7976,_0x4bcdfd){function _0x185131(_0x1a537f,_0x175839,_0x5aae75,_0x59ada9,_0x2263d7){return _0x1f9b(_0x2263d7- -0x141,_0x1a537f)}function _0x40047d(_0x6ebb71,_0x2cac90,_0x3403d0,_0xd80a03,_0x1bd8c2){return _0x1f9b(_0x6ebb71- -0x27f,_0x1bd8c2)}function _0x249ede(_0x2d9a5d,_0x211f3c,_0x42ca54,_0x31ef0a,_0x47be45){return _0x1f9b(_0x211f3c- -0x3f,_0x42ca54)}var _0x161cb1=_0x3d7976();function _0x3248da(_0x119c5c,_0x3834cc,_0x4a0b62,_0x5e1e4f,_0x24e360){return _0x1f9b(_0x5e1e4f- -0x19,_0x3834cc)}function _0x5b3cd5(_0x57c705,_0x7d4510,_0x36db3f,_0x41c150,_0x21a471){return _0x1f9b(_0x7d4510- -0x3be,_0x36db3f)}while(!![]){try{var _0x13b6fe=-parseInt(_0x249ede(0xfb,0x14b,'NdSm',0x1aa,0xd2))/(0x22f*0x5+ -0xdf0+0x81*0x6)*(-parseInt(_0x185131('RUyq',0x20c,0x105,0x164,0x21a))/(-0x1603+0x5*-0x5c1+ -0x21*-0x18a))+parseInt(_0x249ede(0x287,0x33c,'PN5v',0x225,0x2a9))/(0x1bed*0x1+0x140c*0x1+ -0x2ff6)*(-parseInt(_0x249ede(0x1f9,0x284,'xdI%',0x37d,0x2d0))/(0x2335+ -0x1*-0x101+ -0xe2*0x29))+ -parseInt(_0x185131('^)bI',0x92,0x77,0x1f3,0x185))/(0x86b+ -0x2c5*-0xd+ -0x1b*0x1a5)+ -parseInt(_0x3248da(0x26b,'k[fn',0xba,0x194,0x2aa))/(0x2*0xe3b+ -0x1*-0xdd5+ -0x2a45)*(parseInt(_0x185131('jC[b',0x1cc,0xd1,0x35,0xdf))/(0x839+ -0x6*-0x2f0+ -0x19d2))+parseInt(_0x3248da(0x2a4,'Ln#L',0x23f,0x2c9,0x264))/(-0xa07*0x3+0x137f+0xa9e)+parseInt(_0x40047d(0xd7,0xbe,0x1a0,0x1ed,'oI92'))/(0x190f+0xafd+ -0x15*0x1b7)+parseInt(_0x185131('tfPy',0x28,0x125,0x65,0xc3))/(0x1a17+0x1*0x1010+0x2a1d*-0x1)*(-parseInt(_0x249ede(0x33,0x127,'NdSm',0x13d,0x6c))/(0x2074*-0x1+0x2*0x74c+0x11e7));if(_0x13b6fe===_0x4bcdfd)break;else _0x161cb1['push'](_0x161cb1['shift']())}catch(_0x4c9055){_0x161cb1['push'](_0x161cb1['shift']())}}}(_0x23f5,0x5118a+ -0x7cbaf+0xa4d5d));



// 收集满足需求的方法
// function _0x10de60(_0x37ef9e, _0x34cea9, _0x424356, _0x5b8b31, _0x530358) {
//     return _0x3cf5(_0x37ef9e - 0x24b, _0x5b8b31);
// }
var fun_code = ''
var fun_name = []

// 找替换的方法

traverse(ast, {
    FunctionDeclaration(path){
        var {params, id, body} = path.node;
        // 参数长度是5个 (_0x37ef9e, _0x34cea9, _0x424356, _0x5b8b31, _0x530358)
        if (params.length != 5 || body.body.length != 1){
            return;
        }
        // 判断函数是否是返回类型
        if (!types.isReturnStatement(body.body[0])){
            return;
        };
        fun_code += path.toString()
        fun_name.push(id.name)
    }
})
// console.log(fun_name)
// console.log(fun_code)
// 执行方法  需要加载代码到环境
eval(fun_code)

// 找到调用的位置   满足需求
// _0x26a98c(0x193, 0x269, 0xe0, 0x1dc, 'Z^DG')

// 判断类型是是不是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
        if (node.value == null) {
            return false;
        }
        return true;
    }
    if (types.isBinaryExpression(node)) {
        return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let {properties} = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let {elements} = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

// 定位调用方法的代码
traverse(ast, {
    CallExpression(path){
        var {callee, arguments} = path.node
        // 判断方法的名字是不是一个标识符
        if (!types.isIdentifier(callee) || !fun_name.includes(callee.name)){
            return;
        }
        // 判断方法传参是否是5个
        // isNodeLiteral判断是否是字面量
        if (!arguments.length == 5 || !isNodeLiteral(arguments)){
            return;
        }
        var value = eval(path.toString())
        console.log(path.toString(), '-->', value)
        // console.log(_0x4c780a(0x38b, 0x3a3, 0x496, 'uMy7', 0x2fc));
        // 替换结果
        path.replaceWith(types.valueToNode(value))
    }
})




//  ob 能全部还原   确定就是只能还原ob


let {code} = generator(ast);
// console.log(code);
fs.writeFile(File2, code, (err) => {
});
