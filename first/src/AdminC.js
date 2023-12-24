// import React from 'react';
// //import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './table.css'

// function AdminC() {
    
  
//   const [complaints, setComplaints] = useState([]);
  

//   useEffect(() => {
//       // Function to fetch user-specific complaints from the server
//       const fetchComplaints = async () => {
//           try {
            
//             // const user = localStorage.getItem("user")
//             // console.log("user",user);
//             const response = await axios.get(`http://localhost:2010/admin`);
//             console.log("response",response.data);
//             setComplaints(response.data);
//           } catch (error) {
//               console.error('Fetching complaints error:', error);
//           }
//       };

//       fetchComplaints();
//   }, []);

  

//   return(

//     <div>
//       <h1>Complaints</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Registration_Number</th>
            
//             <th>Hostel Name</th>
//             <th>Room_Number</th>
            
//             <th>Complaints</th>
//             <th>status</th>

//           </tr>
//         </thead>
//         <tbody>
//           {complaints.map(complaint => (
//             <tr key={complaint.id}>
//               <td>{complaint.name}</td>
//               <td>{complaint.registration_number}</td>
              
//               <td>{complaint.hostel_name}</td>
//               <td>{complaint.room_number}</td>
//               <td>{complaint.complaint}</td>
//               <td><input type='text'/></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

  
// }

// export default AdminC;

import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css';

function AdminC() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [complaints, setComplaints] = useState([]);
//   const {  handleSubmit, formState: { errors } } = useForm();

  // Define the handleFormSubmit function here
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send a POST request to your Express.js backend
//       await axios.post('http://localhost:2010/candidates', {
//         name,
//       });

//       // Log the name here
//       console.log('Name submitted:', name);

//       // Clear the form after successful submission
//       setName('');

//       // You can also display a success message or redirect the user as needed
//       console.log('Candidate added successfully');
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//     }
//   };


  useEffect(() => {
    // Function to fetch user-specific complaints from the server
    const fetchComplaints = async () => {
      try {
        const response = await axios.get(`http://localhost:2010/admin`);
        // console.log("response", response.data);
        setComplaints(response.data);
      } catch (error) {
        console.error('Fetching complaints error:', error);
      }
    };
    

    fetchComplaints();
  }, []);

  const handleSubmit = (e) => {
    // console.log(e.target[0].value);
    // console.log("register number",registrationNumber);
    e.preventDefault();
    try {
        if(registrationNumber){
            axios.post('http://localhost:2010/candidates', {
                status:e.target[0].value,
                registration_number:registrationNumber,
              })
              .then((response) => {
                console.log(response)
              }).catch((error) => {
                console.log(error);
              });
        }
       
      } catch (error) {
        console.error('Error submitting form:', error);
      }
  }
  return (
    <div>
      <h1>Complaints</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration_Number</th>
            <th>Hostel Name</th>
            <th>Room_Number</th>
            <th>Complaints</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            
            <tr key={complaint.id}>
                {/* {()=>{setRegistrationNumber(complaint.registration_number)}} */}
              <td>{complaint.name}</td>
              <td>{complaint.registration_number}</td>
              <td>{complaint.hostel_name}</td>
              <td>{complaint.room_number}</td>
              <td>{complaint.complaint}</td>
              <td>
              <form onSubmit= {handleSubmit}>
  <input type="text" name="status" /><button type="submit" onClick={()=>{setRegistrationNumber(complaint.registration_number)}}> Submit</button></form>
              </td>
            </tr>  
          )
          
        )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminC;
