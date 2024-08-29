let express = require('express');
let app = express();   
let fs = require("fs")

app.use(express.static('static'));

app.get("/", function(req, res){
    fs.readFile("home.html", function(err, data){
        res.write(data);
        res.end();   
    })                                                    
})

// app.use(express.static('static')); is the same as ->

// app.get("/home.js", function (req, res) {

//     fs.readFile("./static/home.js", function(err, data){
//         res.write(data);
//         res.end();
//     });
// });

app.listen(8080);