 import React from 'react'
import Login from './pages/Login.jsx'
 import "./index.css";
import Register from './pages/Register.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
 

 const App = () => {
   return (
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
   )
 }
 
 export default App