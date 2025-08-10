const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Devvin",
    tasks: ["Learn EJS", "Drink water", "Build cool stuff"],
    dad: 'dan'
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
