const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = {}; // store username -> ws

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// WebSocket connection
wss.on('connection', (ws) => {
  let currentUser = null;

  console.log(JSON.stringify({ type: "connection", status: "client connected" }));

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      // Register user
      if (data.type === 'register') {
        currentUser = data.username;
        clients[currentUser] = ws;
        console.log(`${currentUser} registered.`);
        return;
      }

      const { username, recipient, message: msg } = data;

      // Log and send to recipient if online
      console.log(`${username} -> ${recipient}: ${msg}`);

      if (clients[recipient]) {
        clients[recipient].send(JSON.stringify({
          type: "message",
          from: username,
          to: recipient,
          message: msg
        }));
      }

      // Also respond to sender
      ws.send(JSON.stringify({
        type: "sent",
        status: "success",
        to: recipient,
        message: msg
      }));

    } catch (err) {
      console.error(JSON.stringify({
        type: "error",
        reason: "Invalid JSON format",
        raw: message.toString()
      }));

      ws.send(JSON.stringify({
        type: "error",
        error: "Invalid message format."
      }));
    }
  });

  ws.on('close', () => {
    if (currentUser) delete clients[currentUser];
    console.log(JSON.stringify({ type: "disconnection", status: "client disconnected" }));
  });
});

server.listen(8080, () => {
  console.log(JSON.stringify({ type: "startup", message: "Server listening on http://localhost:8080" }));
});
