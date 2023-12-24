// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ComplaintHistory() {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     async function fetchComplaints() {
//       try {
//         const response = await axios.get('http://localhost:2004/complaint-history');
//         setComplaints(response.data);
//       } catch (error) {
//         console.error('Error fetching complaints:', error);
//       }
//     }

//     fetchComplaints();
//   }, []);

//   return (
//     <div className="complaint-history">
//       <h2>Complaint History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Registration Number</th>
//             <th>Hostel Name</th>
//             <th>Hostel Room Number</th>
//             <th>Complaint</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint, index) => (
//             <tr key={index}>
//               <td>{complaint.name}</td>
//               <td>{complaint.registration_number}</td>
//               <td>{complaint.hostel_name}</td>
//               <td>{complaint.room_number}</td>
//               <td>{complaint.complaint}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ComplaintHistory;





// src/components/ComplaintHistory.js
// src/components/ComplaintHistory.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from './UserContext';

// function ComplaintHistory() {
//   const { user } = useUser();
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     async function fetchComplaints() {
//       try {
//         if (user) {
//           const response = await axios.get('http://localhost:5000/compliant-history', {
//             params: { loggedInUsername: user.registration_number }, // Send the username as a query parameter
//           });
//           setComplaints(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching complaints:', error);
//       }
//     }

//     fetchComplaints();
//   }, [user]);

//   return (
//     <div className="complaint-history">
//       <h2>Complaint History</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Registration Number</th>
//             <th>Hostel Name</th>
//             <th>Hostel Room Number</th>
//             <th>Complaint</th>
//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map((complaint, index) => (
//             <tr key={index}>
//               <td>{complaint.name}</td>
//               <td>{complaint.registration_number}</td>
//               <td>{complaint.hostel_name}</td>
//               <td>{complaint.room_number}</td>
//               <td>{complaint.complaint}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ComplaintHistory;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//     const username = '21b01a12a7'; // Replace with the actual username of the current user
//     const [complaints, setComplaints] = useState([]);

//     const fetchComplaints = () => {
//         axios.post(`http://localhost:2000/Login/${username}`)
//             .then(response => {
//                 setComplaints(response.data);
//             })
//             .catch(error => {
//                 console.error('Fetching complaints error:', error);
//             });
//     };

//     useEffect(() => {
//         fetchComplaints();
//     }, []);

//     return (
//         <div className="App">
//             <h1>Complaint History</h1>
//             <div>
//                 <h2>Welcome, {username}!</h2>
//                 <h3>Your Complaints:</h3>
//                 <ul>
//                     {complaints.map(complaint => (
//                         <li key={complaint.id}>{complaint.complaint}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import axios from 'axios';

// function ComplaintHistory() {
//     const [username, setUsername] = useState(null);
//     const [complaints, setComplaints] = useState([]);

//     const fetchComplaints = () => {
//         if (username) {
//             axios.get(`http://localhost:2000/complaint-history/${username}`)
//                 .then(response => {
//                     setComplaints(response.data);
//                 })
//                 .catch(error => {
//                     console.error('Fetching complaints error:', error);
//                 });
//         }
//     };

//     useEffect(() => {
//         // Assuming you're passing the username as a query parameter
//         const params = new URLSearchParams(window.location.search);
//         const user = params.get('username');
//         setUsername(user);
//         fetchComplaints();
//     }, [username]);

//     return (
//         <div className="App">
//             <h1>Complaint History</h1>
//             {username ? (
//                 <div>
//                     <h2>Welcome, {username}!</h2>
//                     <h3>Your Complaints:</h3>
//                     <ul>
//                         {complaints.map(complaint => (
//                             <li key={complaint.id}>{complaint.complaint}</li>
//                         ))}
//                     </ul>
//                 </div>
//             ) : (
//                 <div>
//                     <p>Please provide a username.</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ComplaintHistory;



import React from 'react';
//import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './table.css'

function UserProfile() {
  //const { username } = useParams(); // Access the username parameter from the URL

   // Replace with the actual username of the current user
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
      // Function to fetch user-specific complaints from the server
      const fetchComplaints = async () => {
          try {
            
            const user = localStorage.getItem("user")
            console.log("user",user);
            const response = await axios.get(`http://localhost:2000/Login/?username=${user}`);
            console.log("response",response.data);
            setComplaints(response.data.result);
          } catch (error) {
              console.error('Fetching complaints error:', error);
          }
      };

      fetchComplaints();
  }, []);

  // You can now use the 'username' variable in your component logic
  // return (
  //   <div>
      
  //     <p>Username:</p>
  //     {/* Add the rest of your component content */}
  //     <h1>Complaint History</h1>
  //           <div>
                
  //               <h3>Your Complaints:</h3>
  //               <ul>
                  
  //                   {complaints.map(complaint => {

  //                       return(
  //                         <li key={complaint.id}>{complaint.complaint}</li>
  //                       )
                        
  //                   })}
  //               </ul>
              

                
  //           </div>
  //   </div>
  // );

  return(

    <div>
      <h1>Complaint History</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration_Number</th>
            
            <th>Hostel Name</th>
            <th>Room_Number</th>
            
            <th>Complaint</th>

          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint.id}>
              <td>{complaint.name}</td>
              <td>{complaint.registration_number}</td>
              
              <td>{complaint.hostel_name}</td>
              <td>{complaint.room_number}</td>
              <td>{complaint.complaint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}

export default UserProfile;











