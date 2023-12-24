// // SignupForm.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function SignupForm() {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:3001/signup', {
// //         username,
// //         password,
// //       });
// //       console.log(response.data.message);
// //     } catch (error) {
// //       console.error('Error signing up:', error);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Username"
// //         value={username}
// //         onChange={(e) => setUsername(e.target.value)}
// //       />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <button type="submit">Sign Up</button>
// //     </form>
// //   );
// // }

// // export default SignupForm;

// import React, { useState } from 'react';
// import './signupcss.css'; // Import your component-specific CSS file
// import axios from 'axios';

// import {Navigate} from 'react-router-dom'
// function SignupForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   // const [usernameA, setUsernameA] = useState('');
//   // const [passwordA, setPasswordA] = useState('');
  



//   // const handleSubmitA =async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:5001/signup', {
//   //       usernameA,
//   //       passwordA,
//   //     });
//   //     console.log(response.data.message);
//   //   } catch (error) {
//   //     console.error('Error Admin signing up:', error);
//   //   }

//   // };

//   // const handleSubmit =async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:500/signup', {
//   //       username,
//   //       password,
//   //     });
//   //     console.log(response.data.message);
//   //   } catch (error) {
//   //     console.error('Error user signing up:', error);
//   //   }

//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:500/signup', {
//       username,
//       password

//     })
//     .then((response) => {
//       console.log(response);
//       Navigate("/Userpage")

//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }

//   return (
//     <div>
//     <img src="https://svecw.ac.in/collegeimages/title_head.jpg" style={{width:"1460px"}} />
//     <div className="login-container">
//     {/* <div className="card">
//         <h2>ADMIN</h2>
//         <form onSubmit={handleSubmitA}>
//           <div className="form-group">
//             <label>Registration No:</label>
//             <input
//               type="text"
//               value={usernameA}
//               onChange={(e) => setUsernameA(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={passwordA}
//               onChange={(e) => setPasswordA(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary">
//             LOGIN
//           </button>
//         </form>
//       </div> */}
//       <div className="card">
//         <h2>STUDENT LOGIN</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Registration No:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-secondary">
//             Sign Up
//           </button>
//         </form>
//       </div>

      
//     </div>
//     </div>
//   );
// }

// export default SignupForm;




import React, { useState } from 'react';
// import './SignUpPage.css'; // Import your component-specific CSS file
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:3001/signup', {
  //       username,
  //       password,
  //     });
  //     console.log(response.data.message);
  //     // Redirect or handle success as needed
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //   }
  // };
  const navigate = useNavigate(); // Get the navigate function

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/signup', {
      username,
      password,
    });
    console.log(response.data.message);
    
    // Check if sign-up was successful and navigate
    if (response.data) {
      navigate('/Userpage'); // Replace '/success-page' with your desired path
    }
  } catch (error) {
    console.error('Error signing up:', error);
  }
};



 

  return (
    <div>
      <img src="https://svecw.ac.in/collegeimages/title_head.jpg" style={{ width: '1460px' }} />
      <div className="login-container">
        <div className="card">
          <h2 align='center'>STUDENT SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Registration No:</label><br></br>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /><br></br>
            </div>
            <div className="form-group">
              <label>Password</label><br></br>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
            </div><br></br>
            <button type="submit" className="btn btn-secondary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;