const express = require('express');
const http = require('http');
const mysql2 = require('mysql2');
const fs = require("fs")
const app = express();
const PORT = 3000; // Define PORT here
const connection = mysql2.createConnection({
  host: 'localhost',       // Database server address
  user: 'root',   // Database username
  password: '1234', // Database password
  database: 'test_app'  // Name of the database
});


// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

// Define a route to access a table (e.g., fetch all rows from "users" table)
app.get('/', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

