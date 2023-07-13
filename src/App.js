import React, { useContext, } from 'react';
import Home from './pages/home/Home';
import Login from './pages/loginpage/Login';
import Regispage from './pages/registationpage/Regispage';
import Profilepage from './pages/profilepage/Profilepage';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext';
function App() {
  const{user}= useContext(AuthContext);
  return (
  <React.Fragment>
   <BrowserRouter>
      <Routes>
     <Route exact path='/'
       element={user ? <Home/>: <Navigate to='/registationpage'/>}
    />

      <Route path='/loginpage'
      element={ user ? <Navigate to='/'/>:<Login/>}
       />
     <Route path='/registationpage'
      element={ user? <Navigate to='/'/> : <Regispage/>}
  />
      <Route path='/profilepage/:username'
     element={<Profilepage/>}
     />
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  
  );
}

export default App;
