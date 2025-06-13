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
app.use(express.static("public"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Home page: show items
app.get("/", function (req, res) {
  connection.query('SELECT name, description FROM list_item', (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data");
      return;
    }
    res.render("list", { results });
  });
});

// Show the form page
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

// Handle form submission
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
    res.redirect("/"); // Go back to home page after submit
  });
});

app.listen(7070, () => {
  console.log("Server running on http://localhost:7070");
});
