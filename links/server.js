let express = require("express");
let app = express();
let fs = require("fs");

app.get("/", function(req, res){
    fs.readFile("home.html", function(err, data){
        res.write(data);
        res.end();
    });
})
app.get('/about', (req, res) => {
    fs.readFile("about.html", function(err, data){
        res.write(data);
        res.end();
    });
  });
app.get 
('/', (req, res) => {
    fs.readFile("home.html", function(err, data){
    res.write(data);
    res.end();
    });
});
      
    
app.listen(8080);