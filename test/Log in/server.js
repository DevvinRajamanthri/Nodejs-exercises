let express = require('express');

let app = express();   
let fs = require("fs")
app.use(express.urlencoded({extended: true}));
app.get("/", function(req, res){
       fs.readFile("./static/solution.html", function(err, data){
        res.write(data)
        res.end();
    })
})
app.post("/next", function(req, res){
    let name = req.body.input1
    fs.readFile("./static/solution.html", function(err, data){
        name1 = 
        res.write(data)
        res.end("hello" +""+ name);
        
    })
    
})
app.listen(8080);