// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
const port = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'signup',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO signupform (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ message: 'Error signing up' });
    } else {
      res.status(200).json({ message: 'Signed up successfully' });
    }
  });
});
// app.post('/signup', (req, res) => {
//   const { usernameA, passwordA } = req.body;
//   const query = 'INSERT INTO admin (usernameA, passwordA) VALUES (?, ?)';
//   db.query(query, [usernameA, passwordA], (err, result) => {
//     if (err) {
//       console.error('Database query error:', err);
//       res.status(500).json({ message: 'Error signing up' });
//     } else {
//       res.status(200).json({ message: 'Signed up successfully' });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
