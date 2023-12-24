import Login from "./Login";
// import SignupForm from "./SignupForm";
import {Routes, Route} from 'react-router-dom'
 import Userpage from './Userpage'
import ComplaintFormPage from "./ComplaintFormPage";
import ComplaintHistory from "./ComplaintHistory";
// import SignupForm from "./SignupForm";
//import Userpage from "./Userpage";
import AdminC from './AdminC'
import AdminMainpage from "./AdminMainpage";
import SignupForm from "./SignupForm";
import Stat from './Stat'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<SignupForm/>}/>
         <Route path='/Login' element={<Login/>}/> 
        <Route path='/Userpage' element={<Userpage/>} /> 
        <Route path='/admin' element={<AdminC/>} />
        <Route path='/stat' element={<Stat/>} />
        <Route path='/adminDashboard' element={<AdminMainpage/>} />
        <Route path="/raise-complaint" element={<ComplaintFormPage/>} />
        <Route path="/complaint-history" element={<ComplaintHistory/>} />
      
       </Routes>
      
    </div>
  );
}

export default App;
