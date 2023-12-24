const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 7001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'submitcomplaint', // Change to your database name "signup"
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Backend API endpoint to fetch complaint statistics
app.get('/count', (req, res) => {
    const queryTotal = 'SELECT COUNT(*) as total FROM complaints3';
    const querySolved = 'SELECT COUNT(*) as solved FROM complaints3 WHERE status = "solved"';
    // const queryUnsolved = 'SELECT COUNT(*) as unsolved FROM complaints WHERE status = "unsolved"';
  
    db.query(queryTotal, (err, totalResult) => {
      if (err) {
        console.error('Error fetching total complaints:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      db.query(querySolved, (err, solvedResult) => {
        if (err) {
          console.error('Error fetching solved complaints:', err);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
  
       
  
          const statistics = {
            total: totalResult[0].total,
            solved: solvedResult[0].solved,
            
          };
  
          res.json(statistics);
        });
      });
    });
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  