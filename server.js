var http = require('http');
var a = 58;
var b = 43;
var c = `value  is  ${a} and b value is ${b} sum is ${a+b}`;
http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(c);
}).listen(3000)
console.log("Server listining on http://localhost:3000");