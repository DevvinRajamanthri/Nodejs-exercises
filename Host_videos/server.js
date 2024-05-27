var http = require('http');
var fs = require('fs');
let url = require('url');
http.createServer(function(req,res){
      //url = /video/1.mp4
      //url = /video/2.mp4
      if(req.url.includes("videos")){
            //route = ./video/2.mp4
            let filename = "." + req.url;
            //filename = ./video/2.mp4
            if (fs.existsSync(filename)) {
                  fs.readFile(filename, function(err, data) {
                        res.writeHead(200,{'Content-Type':'video/mp4'});
                        res.write(data);
                        res.end(); 
                  });  
            }
      
      } else {
            fs.readFile('home_page.html', function(err, data) {
                  res.writeHead(200,{'Content-Type':'text/html'});
                  res.write(data);
                  res.end(); 
            });
      }
}).listen(8080);
