const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();
const port = 7070;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "simplechatapp"
});

connection.connect(err => {
  if (err) {
    console.error("DB connection error:", err.message);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

// Home page: show chat messages
app.get("/", (req, res) => {
  connection.query("SELECT chattext FROM message", (err, results) => {
    if (err) {
      return res.status(500).send("Error fetching data");
    }
    res.render("index", { results });
  });
});



// Submit chat message
app.post("/messageSent", (req, res) => {
  const message = req.body.chatbox;
  if (!message || message.trim() === "") return res.redirect("/");
  connection.query(
    "INSERT INTO message (chattext) VALUES (?)",
    [message],
    err => {
      if (err) {
        return res.status(500).send("Insert error");
      }
      res.redirect("/");
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
