// src/components/ButtonPage.js
// import React from 'react';
// import './Buttoncss.css';

// function Userpage () {
//   return (
//     <div className="button-page">
//       <h1>Welcome to the Complaint Management System</h1>
//       <div className="button-container">
//         <button className="raise-complaint-button">Raise a Complaint</button>
//         <button className="complaint-history-button">Complaint History</button>
//       </div>
//     </div>
//   );
// }

// export default Userpage;
// src/components/ButtonPage.js
import React from 'react';
import { Link } from 'react-router-dom';
//import ComplaintFormPage from './ComplaintFormPage';
import './Buttoncss.css';

function Userpage() {
  return (
    <div className="button-page">
      <h1>Welcome to the Complaint Register</h1>
      <div className="button-container">
        <Link to="/raise-complaint" className="raise-complaint-button">
          Raise a Complaint
        </Link>
        <Link to="/complaint-history" className="complaint-history-button">
          Complaint History
        </Link>
      </div>
    
    </div>
  );
}

export default Userpage;

