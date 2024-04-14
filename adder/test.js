var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    //If you have a url that has the values http://localhost:8080/add?n1=8&n2=3 then request.url will take these values and then turn them into an object in the second parameter.
     let parsed_url = url.parse(req.url, true);
     //I assigned the parsed value to a variables.
     let n1 = parsed_url.query.n1;
     let n2 = parsed_url.query.n2;
     //I turned the string into a number.
     n1 = parseInt(n1);
     n2 = parseInt(n2);
     //Then i added the two integers together in a variable 
     let sum = n1 + n2;
     sum = sum.toString();
    res.end(sum);
}).listen(8080);