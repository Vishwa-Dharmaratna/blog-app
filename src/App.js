import React from 'react';
import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/write' element={<Write/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/post/:postId' element={<Single/>}></Route>

        
      </Routes>

      
      
      
    </BrowserRouter>
  );
}

export default App;
