var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
   if(req.url=="/hello"){
      fs.readFile('hello_page.html', function(err, data) {
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write(data);
         res.end(); 
      });
   } else {
      fs.readFile('home_page.html', function(err, data) {
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write(data);
         res.end(); 
      });
   };
   

}).listen(8080);
