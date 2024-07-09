let express = require("express");
let app = express();
let fs = require("fs");
app.use(express.urlencoded({ extended: true })); 
app.get("/", function(req, res){
    fs.readFile("form.html", function(err, data){
        res.write(data);
        res.end();
    });
})
app.post('/submit', (req, res) => {
    let numbers1 = req.body.n1;
    let numbers2 = req.body.n2;
    let numbers3 = req.body.n3;
    numbers1 = parseInt(numbers1)
    numbers2 = parseInt(numbers2)
    numbers2 = parseInt(numbers3)
    let sum = numbers1 + numbers2 + numbers3
    sum = sum.toString();
    res.send(sum);
  });
  
      
    
app.listen(8080);