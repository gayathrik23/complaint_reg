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
    database:"signup",
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

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM signupform WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).json({ message: 'Error logging in' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        res.status(200).json({ message: 'Logged in successfully' , user: username});
      }
    });
  });
  
app.listen(500,(req,res)=>{
    console.log("server started")
})
