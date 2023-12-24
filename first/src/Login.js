//import {useHistory} from 'react-router-dom';
import React from 'react'
import {useState} from 'react'
import axios from'axios'
 import './signupcss.css';
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [usernameA, setUsernameA] = useState('');
  const [passwordA, setPasswordA] = useState('');
   const Navigate = useNavigate()
  // const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user",username);
        axios.post('http://localhost:500/signup', {
          username,
          password

        })
        .then((response) => {
          if (response.data) {
            // Navigate to the user page
            Navigate('/Userpage');
          } else {
            // Handle login failure, e.g., show an error message
            console.error('Login failed');
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
      const handleSubmitA = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:600/Login', {
          usernameA,
          passwordA

        })
        .then((response) => {
          console.log(response);
          Navigate("/adminDashboard")
    
        })
        .catch((error) => {
          console.log(error);
        });
      }
 return (
        <div>
        <img src="https://svecw.ac.in/collegeimages/title_head.jpg" style={{width:"1460px"}} />
    <div className="login-container">
    <div className="card">
        <h2>ADMIN</h2>
        <form onSubmit={handleSubmitA}>
          
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={usernameA}
              onChange={(e) => setUsernameA(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={passwordA}
              onChange={(e) => setPasswordA(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            LOGIN
          </button>
        </form>
      </div>
        <div className="card">
        <h2>STUDENT LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Registration No:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Login
          </button>
          <a href="/signup">Sign Up</a>
        </form>
      </div>
      </div>
    
      </div>
    );
}

export default Login;