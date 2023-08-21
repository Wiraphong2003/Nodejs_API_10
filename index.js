const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/users', (req, res) => {
  fs.readFile('user.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    try {
      const users = JSON.parse(data);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, change as needed
      res.setHeader('Access-Control-Allow-Methods', 'GET'); // Allow only GET requests, change as needed
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${8080}`);
});
