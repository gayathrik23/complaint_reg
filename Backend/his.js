// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'submitcomplaint'
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('Connected to MySQL database');
// });

// app.post('/complaint-history', (req, res) => {
//   const { username, password } = req.body;
//   // Validate username and password against the user database
//   // ...

//   // Assuming authentication is successful
//   db.query('SELECT registration_number FROM complaints WHERE username = ?', [username], (err, result) => {
//     if (err) throw err;
    
//     const registrationNumber = result[0].registration_number;
    
//     db.query('SELECT complaint FROM complaints WHERE registration_number = ?', [registrationNumber], (err, complaints) => {
//       if (err) throw err;
//       res.json(complaints);
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });





// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 2000;

// app.use(cors());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'submitcomplaint'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Database connection error:', err);
//     } else {
//         console.log('Connected to the database');
//     }
// });


// app.get('/complaint-history/:username', (req, res) => {
//   const { username } = req.params;
//   const query = 'SELECT * FROM complaints WHERE registration_number = ?';

//   db.query(query, [username], (err, results) => {
//       if (err) {
//           res.status(500).json({ error: 'Database error' });
//       } else {
//           res.json(results);
//       }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 2000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'submitcomplaint' // Replace with your actual database name
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.get('/Login', (req, res) => {
    const username = req.query.username;
    console.log(username)
    const query = 'SELECT * FROM complaints3 WHERE registration_number = ?'; //correct code

    db.query(query, [username], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json({result:results,user:username});
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
