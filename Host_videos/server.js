var http = require('http');
var fs = require('fs');
let url = require('url');
http.createServer(function(req, res){
      if(req.url.includes("videos")){
            let filename = "./t2" + req.url
            if(fs.existsSync(filename)){
                  fs.readFile(filename, function(err, data){
                        res.writeHead(200, {"Content-Type" : "video/mp4"});
                        res.write(data);
                        res.end();
                  })
            } else { 
                  res.writeHead(200, {"Content-Type":"text/html"});
                  res.end("video not foudn");
            }
      } else {
           fs.readFile("home_page.html", function(err, data){
             res.writeHead(200, {"Content-Type":"text/html"});
             res.write(data);
             res.end();
           });
      }
}).listen(8080);