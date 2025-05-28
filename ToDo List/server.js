let express = require("express");
let app = express();
let fs = require("fs");
let mysql = require("mysql2/promise");

let connection;

// Immediately invoked async function to set up DB and routes
(async () => {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'todo_list'
  });

  app.use(express.urlencoded({ extended: true }));

  app.get("/createForm", function(req, res){
    fs.readFile("page.html", function(err, data){
      res.write(data);
      res.end();
    });
  });

  app.post('/submit', async (req, res) => {
    const name = req.body.name;
    const description = req.body.description;

    const [result] = await connection.execute(
      'INSERT INTO list_item (name, description) VALUES (?, ?)',
      [name, description]
    );

    // listaddonN and listaddonD don't exist — using name and description instead
    console.log(name);
    console.log(description);
    res.send(name + "</br>" + description);
  });

  app.listen(7070, () => {
    console.log("Server running on http://localhost:7070");
  });
})();
