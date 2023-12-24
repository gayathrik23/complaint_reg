// import React, { useState } from 'react';
// import GridLayout from 'react-grid-layout';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
// import './AdminDashboard.css'; // Import your CSS for styling

// function AdminMainpage() {
//   const [activeTab, setActiveTab] = useState('complaints');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="admin-dashboard">
//       <h1>Admin</h1>
//       <div className="admin-layout">
//         <div className="admin-sidebar">
//           <button
//             className={`admin-tab ${activeTab === 'complaints' ? 'active' : ''}`}
//             onClick={() => handleTabChange('complaints')}
//           >
//             Complaints
//           </button>
//           <button
//             className={`admin-tab ${activeTab === 'count' ? 'active' : ''}`}
//             onClick={() => handleTabChange('count')}
//           >
//             Count
//           </button>
//         </div>
//         <div className="admin-content">
//           {activeTab === 'complaints' && (
//             <div className="complaints">
//               {/* Display complaints here */}
//               <h2>Complaints</h2>
//               {/* Fetch and display complaints */}
//             </div>
//           )}
//           {activeTab === 'count' && (
//             <div className="count">
//               {/* Display count here */}
//               <h2>Count</h2>
//               {/* Fetch and display count */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminMainpage;




// import React from 'react';

// function AdminMainpage() {
//   const navbarStyle = {
//     backgroundColor: '#008b8b',
//   };

//   const linkStyle = {
//     color: 'white',
//   };

//   return (
//     <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>Bootstrap Example</title>
//         <link
//           rel="stylesheet"
//           href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
//         />
//       </head>
//       <body>
//         <nav className="navbar navbar-default" style={navbarStyle}>
//           <div className="container-fluid">
//             <div className="navbar-header">
//               <a className="navbar-brand" href="#" style={linkStyle}>
//                 Vishnu stores
//               </a>
//             </div>
//             <ul className="nav navbar-nav">
//               <li className="active">
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#" style={linkStyle}>
//                   ABOUT US
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbardrop"
//                   data-toggle="dropdown"
//                   style={linkStyle}
//                 >
//                   CONTACT US
//                 </a>
//                 <div className="dropdown-menu">
//                   <a className="dropdown-item" href="#">
//                     +919856234712
//                   </a>
//                   <a className="dropdown-item" href="#">
//                     +914785623489
//                   </a>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </nav>

//         <iframe src="iframe3A.html" height="700" width="200"></iframe>
//         <iframe src="frame.html" height="700" width="1300"></iframe>
//       </body>
//     </html>
//   );
// }

// export default AdminMainpage;


import React from 'react';
import './Navbar.css'; 
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './A.css';
function AdminMainpage() {
    return (
    
        <div className="app">
          {/* Background image */}
          <div className="background-image"></div>
          
          {/* Buttons for navigation */}
          <div className="button-container">
            <Link to="/admin" className="nav-button">
              Complaints
            </Link>
            <Link to="/stat" className="nav-button">
              Statistics
            </Link>
          </div>
          
        </div>
    
    );
  }
  
  export default AdminMainpage;