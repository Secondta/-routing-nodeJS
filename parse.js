// const myURL = new URL('http://example.com/contoh');
// console.log(myURL.href);
// console.log(myURL.origin);


var url = require('url');
var adr = 'https://www.langensari.com/search.php?sayur=wortel&Daging=sapi'
var q = url.parse(adr, true)

console.log("protocol:" + q.protocol);
console.log("hostname:" + q.host);
console.log("pathname:" + q.pathname);
console.log("params:" + q.search);


var qdata = q.query;
console.log(qdata);