let express = require("express");
let app = express();
let fs = require("fs");
let mysql = require("mysql2");

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'todo_list'
});

connection.connect(err => {
  if (err) {
    console.error("Connection error:", err.message);
    return;
  }
  console.log("Connected to MySQL");
});

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  connection.query('SELECT name, description FROM list_item', (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data");
      return;
    }

    let output = "";
    results.forEach(row => {
      output += row.name + "<br>" + row.description + "<br>___________________<br>";
    });

    // Simple button as a form to go to /createForm
    output += `
      <br>
      <form action="/createForm" method="get">
        <button type="submit">Add New Item</button>
      </form>
    `;

    res.send(output);
  });
});

app.get("/createForm", function (req, res) {
  fs.readFile("page.html", function (err, data) {
    if (err) {
      res.status(500).send("Error reading page.html");
      return;
    }
    res.write(data);
    res.end();
  });
});

app.post('/submit', (req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const sql = 'INSERT INTO list_item (name, description) VALUES (?, ?)';
  connection.query(sql, [name, description], (err, results) => {
    if (err) {
      console.error("Insert error:", err.message);
      res.status(500).send("Database insert error");
      return;
    }

    res.redirect("/"); // Redirect to homepage after successful insert
  });
});


app.listen(7070, () => {
  console.log("Server running on http://localhost:7070");
});
