var http = require('http');
var dt = require('./modules/greetings'); 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(dt.hello());
  res.end();
}).listen(8080);