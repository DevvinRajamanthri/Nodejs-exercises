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
    const username = req.body.n1;
    const password = req.body.n2;
    
    console.log('Username:', username);
    console.log('Password:', password);
    res.send('Form submitted successfully!');
  });
  
      
    
app.listen(8080);