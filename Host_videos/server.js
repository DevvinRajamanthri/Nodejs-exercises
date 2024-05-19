var http = require('http');
let video = "";
var fs = require('fs');
http.createServer(function(req,res){
      console.log("url", req.url);
      if (req.url=="/video/1") {
            fs.readFile('Javascript_Strings.mp4', function(err, data) {
                  res.writeHead(200,{'Content-Type':'video/mp4'});
                  res.write(data);
                  res.end(); 
                  console.log("video sent");
            }
            );  
      } else if (req.url=="/video/2") {
            fs.readFile('How to handle a button using addEventListener.mp4', function(err, data) {
                  res.writeHead(200,{'Content-Type':'video/mp4'});
                  res.write(data);
                  res.end(); 
                  console.log("video sent");
                  }
            );  
      } else {
            fs.readFile('home_page.html', function(err, data) {
                  res.writeHead(200,{'Content-Type':'text/html'});
                  res.write(data);
                  res.end(); 
                  console.log('homepage_sent');
            }
            );
      }

}).listen(8080);
