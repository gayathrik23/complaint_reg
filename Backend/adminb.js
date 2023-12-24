// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');


// const app = express();
// app.use(cors());
// const port = 5001;

// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'Admin',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// // app.post('/signup', (req, res) => {
// //   const { username, password } = req.body;
// //   const query = 'INSERT INTO signupform (username, password) VALUES (?, ?)';
// //   db.query(query, [username, password], (err, result) => {
// //     if (err) {
// //       console.error('Database query error:', err);
// //       res.status(500).json({ message: 'Error signing up' });
// //     } else {
// //       res.status(200).json({ message: 'Signed up successfully' });
// //     }
// //   });
// // });
// app.post('/signup', (req, res) => {
//   const { usernameA, passwordA } = req.body;
//   const query = 'INSERT INTO admindata (usernameA, passwordA) VALUES (?, ?)';
//   db.query(query, [usernameA, passwordA], (err, result) => {
//     if (err) {
//       console.error('Database query error:', err);
//       res.status(500).json({ message: 'Error signing up' });
//     } else {
//       res.status(200).json({ message: 'Signed up successfully' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express=require("express")
const mysql = require("mysql")
const bodyparser=require('body-parser')
var cors = require('cors')
const app=express()
app.use(bodyparser.json())
app.use(cors())
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"admin",
    connectionlimit:10
})
db.getConnection((err,connection)=>{
    if (err) throw err
    console.log("success")

})
// app.get("/signup",(req,res)=>{
//     const sql='select * from first'
//     //const sql='insert into first(reg,marks) values("123",70)'
//     db.query(sql,(err,result)=>{
//         if(err) throw err
//             res.send(JSON.stringify(result))
//     })
// })
// server.js
app.post('/Login', (req, res) => {
    const { usernameA, passwordA } = req.body;
    const query = 'SELECT * FROM admindata WHERE usernameA = ? AND passwordA = ?';
    db.query(query, [usernameA, passwordA], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Error logging in' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Logged in successfully' });
      }
    });
  });
  
app.listen(600,(req,res)=>{
    console.log("server started")
})

