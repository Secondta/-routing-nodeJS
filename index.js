var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<center><button><a href='/'>Home</a></button><button><a href='/about'>About</a></button><button><a href='/profile'>Profile</a></button></center>");

    var url = req.url;

    if (url === '/') {
        res.write(' Home');
        res.end();
    }
    else if (url === "/about") {
        fs.readFile("about.html", function (err, data) {
            res.end(data);
        });
    }
    else if (url === '/profile') {
        fs.readFile("profile.html", function (err, data) {
            res.end(data);
        });
    }
    else {
        res.write(' 404 Note Found bang');
        res.end();
    }
}).listen(9000, function () {

    console.log("http://localhost:9000");
});