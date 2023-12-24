const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3003;

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

app.post('/submitComplaint', (req, res) => {
  const { name, registrationNumber, hostelName, hostelRoomNumber, complaint } = req.body;
  const query = 'INSERT INTO complaints3 (name, registration_number, hostel_name, room_number, complaint) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, registrationNumber, hostelName, hostelRoomNumber, complaint], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ message: 'Error submitting complaint' });
    } else {
      res.status(200).json({ message: 'Complaint submitted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
