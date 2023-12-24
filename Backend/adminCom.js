const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 2010;

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

app.get('/admin', (req, res) => {
    const query = 'SELECT * FROM complaints3';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Error fetching complaints' });
      } else {
        res.status(200).json(results);
      }
    });
  });
  app.post('/candidates', (req, res) => {
    const { status,registration_number } = req.body;
    // console.log("hello",req.body);
    const updateQuery = `UPDATE complaints3 
                     SET status = ? 
                     WHERE registration_number = ?`;

    db.query(updateQuery, [status,registration_number], (err, result) => {
      if (err) {
        console.error('Error inserting data into database:', err);
        return res.status(500).json({ success: false, message: 'Database insert error' });
      }

      
      res.json({ success: true, message: 'Status updated successfully' });
    });
});

  
  


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });