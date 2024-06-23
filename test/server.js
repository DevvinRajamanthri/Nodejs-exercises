let http = require("http");
let url =  require("url")
http.createServer(function(req, res){
    let child = url.parse(req.url, false);
  
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("hello_world")
}).listen(8080);
