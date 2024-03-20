const crypto=require("crypto-js")
function Guid(g){

    var arr = new Array(); //存放32位数值的数组



    if (typeof(g) == "string"){ //如果构造函数的参数为字符串

        InitByString(arr, g);

    }

    else{

        InitByOther(arr);

    }

    //返回一个值，该值指示 Guid 的两个实例是否表示同一个值。

    this.Equals = function(o){

        if (o && o.IsGuid){

             return this.ToString() == o.ToString();

        }

        else{

             return false;

        }

    }

    //Guid对象的标记

    this.IsGuid = function(){}

    //返回 Guid 类的此实例值的 String 表示形式。

    this.ToString = function(format){

        if(typeof(format) == "string"){

             if (format == "N" || format == "D" || format == "B" || format == "P"){

                  return ToStringWithFormat(arr, format);

             }

             else{

                  return ToStringWithFormat(arr, "D");

             }

        }

        else{

             return ToStringWithFormat(arr, "D");

        }

    }

    //由字符串加载

    function InitByString(arr, g){

        g = g.replace(/\{|\(|\)|\}|-/g, "");

        g = g.toLowerCase();

        if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1){

             InitByOther(arr);

        }

        else{

             for (var i = 0; i < g.length; i++){

                  arr.push(g[i]);

             }

        }

    }

    //由其他类型加载

    function InitByOther(arr){

        var i = 32;

        while(i--){

             arr.push("0");

        }

    }

    function ToStringWithFormat(arr, format){

        switch(format){

             case "N":

                  return arr.toString().replace(/,/g, "");

             case "D":

                  var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20,32);

                  str = str.replace(/,/g, "");

                  return str;

             case "B":

                  var str = ToStringWithFormat(arr, "D");

                  str = "{" + str + "}";

                  return str;

             case "P":

                  var str = ToStringWithFormat(arr, "D");

                  str = "(" + str + ")";

                  return str;

             default:

                  return new Guid();

        }

    }

}
NewGuid = function(format){
    var g = "";
    var i = 32;
    while(i--){

        g += Math.floor(Math.random()*16.0).toString(16);

    }
    return new Guid(g).ToString(format);
}
function  getUtcTimestamp() {
    return Math.floor((new Date()).getTime() / 1000);
  }

function get_sign(timestamp, nonce,  body) {
        let secret = "SV1dLfFDS32DS97jk32Qkjh34";
        let str = secret + "&" + timestamp + "&" + nonce + "&" + "Pdfreader.Web" + "&" + "V2.2" + "&" + body;
        console.log(str)
        return crypto.MD5(str).toString().toUpperCase();
    }
function get_params(body){
    // body = JSON.stringify(body)
    let timestamp = getUtcTimestamp()
    let nonce = NewGuid();
    let sign = get_sign(timestamp, nonce, body);
    return {
      "timestamp":timestamp,
      "nonce":nonce,
      "sign":sign,

    }
}