let express = require("express");
let app = express();
let port = 3000;
let fs = require("fs")

app.get("/", function (req, res) {
    console.log("test2")
    fs.readFile('./public/index.html',(err, data) => { 
        res.write(data);
        res.end();
    });
});

app.get("/hello.js", function (req, res) {

    fs.readFile("./public/hello.js", function(err, data){
        res.write(data);
        res.end();
    });
});

app.listen(port);
