




// npm install jsdom --save

var jsdom = require('jsdom')
//
var  {JSDOM} = jsdom;
var dom = new JSDOM(`
<!DOCTYPE html><p>hello world</p>`)
// console.log(global);
// console.log(dom.window)
console.log(dom.window.document.querySelector('p').textContent)



