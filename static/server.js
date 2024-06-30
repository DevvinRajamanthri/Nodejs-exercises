let http = require("http");
let url =  require("url");
let fs = require("fs");
http.createServer(function(req, res){
    if(req.url == "/"){
        fs.readFile("./public/index.html", function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    } else if(req.url == "/index.js") {
        fs.readFile("./public/index.js", function(err, data){
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end("Err 404");
    }
}).listen(8080);

